// ── BeCath Auth & Subscription ──
// Supabase project: usssoiqchnmvonohlkod

const SUPA_URL  = 'https://usssoiqchnmvonohlkod.supabase.co';
const SUPA_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVzc3NvaXFjaG5tdm9ub2hsa29kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQxMzUwMzQsImV4cCI6MjA4OTcxMTAzNH0.kYy6b6f8Bg7gzDbTOhDxdhpdqOJ21biNJ1hkY0EOwbs';

const STRIPE_PK       = 'pk_live_51SvKTnIVX3wrRyGSi2pcGor5ofLVkZwiLZHJUL6gmV56rksnCcL1ZSYCXCP5UYtSl35bDhc7m6iwVsYzbqhR29AQ00x958SGmE';
const PRICE_MONTHLY   = 'price_1TTkMCIVX3wrRyGSuLegz76I';
const PRICE_YEARLY    = 'price_1TTkNIIVX3wrRyGS2P5RPNyh';
const EDGE_BASE       = SUPA_URL + '/functions/v1';

// ── Supabase REST helpers ──
async function supaFetch(path, opts = {}) {
  const token = window._becathToken || SUPA_ANON;
  const res = await fetch(SUPA_URL + path, {
    ...opts,
    headers: {
      'apikey': SUPA_ANON,
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
      ...(opts.headers || {})
    }
  });
  const text = await res.text();
  try { return { ok: res.ok, status: res.status, data: JSON.parse(text) }; }
  catch(e) { return { ok: res.ok, status: res.status, data: text }; }
}

// ── Auth state ──
window.BECATH_USER = null;
window.BECATH_SUB  = null; // { status, plan, trial_ends_at, current_period_ends_at }

function _storeSession(session) {
  if (!session) { localStorage.removeItem('becath_session'); return; }
  localStorage.setItem('becath_session', JSON.stringify(session));
  window._becathToken = session.access_token;
  window.BECATH_USER  = session.user;
}

function _loadStoredSession() {
  try {
    const s = JSON.parse(localStorage.getItem('becath_session') || 'null');
    if (s && s.access_token) {
      window._becathToken = s.access_token;
      window.BECATH_USER  = s.user;
      return s;
    }
  } catch(e) {}
  return null;
}

// ── Sign Up ──
window.becathSignUp = async function(email, password) {
  const r = await supaFetch('/auth/v1/signup', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  if (!r.ok) throw new Error(r.data.msg || r.data.message || 'Sign up failed');
  if (r.data.session) _storeSession(r.data.session);
  return r.data;
};

// ── Sign In ──
window.becathSignIn = async function(email, password) {
  const r = await supaFetch('/auth/v1/token?grant_type=password', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  if (!r.ok) throw new Error(r.data.error_description || r.data.msg || 'Sign in failed');
  _storeSession(r.data);
  return r.data;
};

// ── Sign Out ──
window.becathSignOut = async function() {
  await supaFetch('/auth/v1/logout', { method: 'POST' });
  _storeSession(null);
  window._becathToken = null;
  window.BECATH_USER  = null;
  window.BECATH_SUB   = null;
  showAuthWall('login');
};

// ── Refresh token ──
async function _refreshToken(refresh_token) {
  const r = await supaFetch('/auth/v1/token?grant_type=refresh_token', {
    method: 'POST',
    body: JSON.stringify({ refresh_token })
  });
  if (r.ok && r.data.access_token) {
    _storeSession(r.data);
    return r.data;
  }
  return null;
}

// ── Fetch subscription status ──
window.becathFetchSub = async function() {
  if (!window._becathToken) return null;
  const r = await supaFetch('/rest/v1/becath_subscriptions?select=*&limit=1', {
    headers: { 'Accept': 'application/json' }
  });
  if (r.ok && Array.isArray(r.data) && r.data.length) {
    window.BECATH_SUB = r.data[0];
    return r.data[0];
  }
  return null;
};

// ── Check if user has active access ──
window.becathIsActive = function() {
  const sub = window.BECATH_SUB;
  if (!sub) return false;
  if (sub.status === 'active') return true;
  if (sub.status === 'trialing') {
    const trialEnd = new Date(sub.trial_ends_at);
    return trialEnd > new Date();
  }
  return false;
};

// ── Create Stripe Checkout Session via Edge Function ──
window.becathCheckout = async function(plan) {
  if (!window._becathToken) { showAuthWall('signup'); return; }

  // Silently refresh token before checkout to avoid expired-JWT errors
  try {
    const stored = JSON.parse(localStorage.getItem('becath_session') || 'null');
    if (stored?.refresh_token) await _refreshToken(stored.refresh_token);
  } catch(_) {}

  const priceId = plan === 'yearly' ? PRICE_YEARLY : PRICE_MONTHLY;
  const appUrl  = window.location.origin + window.location.pathname;
  try {
    const r = await fetch(EDGE_BASE + '/becath-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window._becathToken
      },
      body: JSON.stringify({
        price_id:    priceId,
        success_url: appUrl + '?checkout=success',
        cancel_url:  appUrl + '?checkout=cancel'
      })
    });
    const data = await r.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Could not start checkout');
    }
  } catch(e) {
    alert('Checkout error: ' + e.message);
  }
};

// ── Manage billing (Stripe portal) ──
window.becathManageBilling = async function() {
  if (!window._becathToken) return;
  const appUrl = window.location.origin + window.location.pathname;
  try {
    const r = await fetch(EDGE_BASE + '/becath-portal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + window._becathToken
      },
      body: JSON.stringify({ return_url: appUrl })
    });
    const data = await r.json();
    if (data.url) window.location.href = data.url;
  } catch(e) {
    alert('Billing portal error: ' + e.message);
  }
};

// ── Gate content: show paywall if not active ──
window.becathGate = function(fn) {
  if (window.becathIsActive()) {
    fn();
  } else {
    showPaywall();
  }
};

// ── Show / hide auth wall ──
window.showAuthWall = function(mode) {
  mode = mode || 'login';
  document.getElementById('becath-auth-overlay').style.display = 'flex';
  document.getElementById('becath-paywall-overlay').style.display = 'none';
  setAuthMode(mode);
};
window.hideAuthWall = function() {
  document.getElementById('becath-auth-overlay').style.display = 'none';
};
window.showPaywall = function() {
  document.getElementById('becath-paywall-overlay').style.display = 'flex';
  document.getElementById('becath-auth-overlay').style.display = 'none';
};
window.hidePaywall = function() {
  document.getElementById('becath-paywall-overlay').style.display = 'none';
};

window.setAuthMode = function(mode) {
  document.getElementById('auth-login-form').style.display  = mode === 'login'  ? 'flex' : 'none';
  document.getElementById('auth-signup-form').style.display = mode === 'signup' ? 'flex' : 'none';
  document.getElementById('auth-forgot-form').style.display = mode === 'forgot' ? 'flex' : 'none';
};

// ── Submit handlers ──
window.becathDoSignUp = async function() {
  const email = document.getElementById('signup-email').value.trim();
  const pass  = document.getElementById('signup-pass').value;
  const pass2 = document.getElementById('signup-pass2').value;
  const err   = document.getElementById('auth-error');
  err.textContent = '';
  if (!email || !pass) { err.textContent = 'Please fill in all fields.'; return; }
  if (pass !== pass2)  { err.textContent = 'Passwords do not match.'; return; }
  if (pass.length < 6) { err.textContent = 'Password must be at least 6 characters.'; return; }
  try {
    document.getElementById('auth-submit-signup').textContent = 'Creating account…';
    const signupData = await becathSignUp(email, pass);
    // If signup didn't return a session, sign in to get one
    if (!window._becathToken) await becathSignIn(email, pass);
    hideAuthWall();
    // Show paywall so user can pick plan before checkout
    showPaywall();
  } catch(e) {
    err.textContent = e.message;
  } finally {
    document.getElementById('auth-submit-signup').textContent = 'Create Account';
  }
};

window.becathDoSignIn = async function() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value;
  const err   = document.getElementById('auth-error');
  err.textContent = '';
  if (!email || !pass) { err.textContent = 'Please fill in all fields.'; return; }
  try {
    document.getElementById('auth-submit-login').textContent = 'Signing in…';
    await becathSignIn(email, pass);
    const sub = await becathFetchSub();
    hideAuthWall();
    if (!becathIsActive()) showPaywall();
    else { hidePaywall(); updateAuthUI(); }
  } catch(e) {
    err.textContent = e.message;
  } finally {
    document.getElementById('auth-submit-login').textContent = 'Sign In';
  }
};

window.becathDoForgot = async function() {
  const email = document.getElementById('forgot-email').value.trim();
  const err   = document.getElementById('auth-error');
  err.textContent = '';
  if (!email) { err.textContent = 'Enter your email.'; return; }
  const r = await supaFetch('/auth/v1/recover', {
    method: 'POST',
    body: JSON.stringify({ email, redirect_to: 'https://becath.com/app' })
  });
  if (r.ok) {
    err.style.color = '#1A8080';
    err.textContent = 'Check your email for a reset link.';
  } else {
    err.textContent = 'Something went wrong. Try again.';
  }
};

// ── Update UI after auth ──
window.updateAuthUI = function() {
  const user = window.BECATH_USER;
  const sub  = window.BECATH_SUB;
  // Me page email
  const emailEl = document.getElementById('me-user-email');
  if (emailEl && user) emailEl.textContent = user.email;
  // Me page sub status
  const subEl = document.getElementById('me-sub-status');
  if (subEl) {
    if (!user) { subEl.textContent = 'Sign in'; return; }
    if (!sub || sub.status === 'canceled') { subEl.textContent = 'Free'; return; }
    if (sub.status === 'trialing') subEl.textContent = '3-Day Trial';
    else if (sub.status === 'active') subEl.textContent = sub.plan === 'yearly' ? 'Annual' : 'Monthly';
    else subEl.textContent = sub.status;
  }
  // Sign out row
  const soRow = document.getElementById('me-signout-row');
  if (soRow) soRow.style.display = user ? 'flex' : 'none';
};

// ── Boot: restore session + check subscription ──
function _revealApp() {
  const shell = document.getElementById('app-shell');
  if (shell) shell.style.opacity = '1';
}

window.becathBoot = async function() {
  _revealApp();

  // Handle post-checkout redirect
  const params = new URLSearchParams(window.location.search);
  if (params.get('checkout') === 'success') {
    history.replaceState({}, '', window.location.pathname);
    let tries = 0;
    const poll = setInterval(async () => {
      const sub = await becathFetchSub();
      if (sub && (sub.status === 'active' || sub.status === 'trialing')) {
        clearInterval(poll);
        hidePaywall();
        hideAuthWall();
        updateAuthUI();
        _showToast && _showToast('Welcome to BeCath Premium! ✝️');
      }
      if (++tries > 10) clearInterval(poll);
    }, 1500);
    return;
  }

  // Try to restore session
  const stored = _loadStoredSession();
  if (stored && stored.refresh_token) {
    await _refreshToken(stored.refresh_token);
  }

  // No valid token → show signup (but only if onboarding is done)
  if (!window._becathToken) {
    if (localStorage.getItem('becath_onboarding_complete') === 'true') {
      showAuthWall('signup');
    }
    return;
  }

  // Logged in — check subscription
  const sub = await becathFetchSub();
  updateAuthUI();
  if (!becathIsActive()) {
    // Only show paywall if onboarding is done
    if (localStorage.getItem('becath_onboarding_complete') === 'true') {
      showPaywall();
    }
  }
};

// Run on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', becathBoot);
} else {
  becathBoot();
}
