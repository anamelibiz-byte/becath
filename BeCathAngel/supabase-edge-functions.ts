// ═══════════════════════════════════════════════════
// supabase/functions/stripe-webhook/index.ts
// Deploy: supabase functions deploy stripe-webhook
// Set secret: supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_...
// ═══════════════════════════════════════════════════

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import Stripe from 'https://esm.sh/stripe@14'

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY')!, {
  apiVersion: '2023-10-16',
})

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')! // service role for admin ops
)

serve(async (req) => {
  const signature = req.headers.get('stripe-signature')!
  const body = await req.text()

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(
      body, signature, Deno.env.get('STRIPE_WEBHOOK_SECRET')!
    )
  } catch (err) {
    return new Response(`Webhook error: ${err.message}`, { status: 400 })
  }

  switch (event.type) {

    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId  // pass this when creating checkout
      const customerId = session.customer as string
      const subscriptionId = session.subscription as string

      if (userId) {
        await supabase.rpc('activate_pro', {
          p_user_id: userId,
          p_stripe_customer_id: customerId,
          p_stripe_subscription_id: subscriptionId,
        })
        console.log(`Pro activated for user: ${userId}`)
      }
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      await supabase.rpc('deactivate_pro', {
        p_stripe_subscription_id: sub.id,
      })
      console.log(`Pro deactivated for subscription: ${sub.id}`)
      break
    }

    case 'invoice.payment_failed': {
      // Grace period — don't immediately deactivate
      // Could email the user, add a grace_period_ends_at column
      console.log('Payment failed — grace period active')
      break
    }
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { 'Content-Type': 'application/json' }
  })
})


// ═══════════════════════════════════════════════════
// supabase/functions/daily-saint-push/index.ts
// Schedule: pg_cron → every day at 7:00 AM ET
// Deploy: supabase functions deploy daily-saint-push
//
// Set up pg_cron in Supabase SQL editor:
// select cron.schedule('daily-saint-push', '0 12 * * *',
//   $$select net.http_post(
//     url := 'https://YOUR_PROJECT.supabase.co/functions/v1/daily-saint-push',
//     headers := '{"Authorization": "Bearer YOUR_SERVICE_KEY"}'::jsonb
//   )$$
// );
// ═══════════════════════════════════════════════════

// daily-saint-push/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
)

serve(async () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  // Get today's saint
  const { data: saint } = await supabase
    .from('saints')
    .select('*')
    .eq('feast_month', month)
    .eq('feast_day', day)
    .single()

  const title = saint
    ? `🌅 Today: ${saint.name}`
    : `🌅 Good morning! Open Catholic Daily for today's prayer.`

  const body = saint?.quote
    ? `"${saint.quote}"`
    : 'Begin your day with God.'

  // Get all active pro push tokens
  const { data: tokens } = await supabase
    .from('push_tokens')
    .select('token, user_id')
    .eq('active', true)
    .innerJoin('profiles', 'push_tokens.user_id', 'profiles.id')
    .eq('profiles.is_pro', true)

  if (!tokens?.length) {
    return new Response('No active pro tokens', { status: 200 })
  }

  // Send Web Push to all tokens
  // In production use web-push library or a push service
  const pushPromises = tokens.map(async ({ token }) => {
    try {
      const sub = JSON.parse(token)
      // Send via Web Push API
      // await webpush.sendNotification(sub, JSON.stringify({ title, body, url: '/angels' }))
      console.log(`Would push to: ${sub.endpoint?.slice(0, 30)}...`)
    } catch (e) {
      // Mark token inactive if push fails
      console.error('Push failed:', e.message)
    }
  })

  await Promise.allSettled(pushPromises)

  return new Response(JSON.stringify({
    sent: tokens.length,
    saint: saint?.name || 'none today',
    date: `${month}/${day}`
  }), { headers: { 'Content-Type': 'application/json' } })
})


// ═══════════════════════════════════════════════════
// Client-side: create-checkout (Netlify Function)
// netlify/functions/create-checkout.ts
// ═══════════════════════════════════════════════════

// create-checkout.ts
export const handler = async (event: any) => {
  const { email, plan, userId } = JSON.parse(event.body)

  const stripe = new (await import('stripe')).default(process.env.STRIPE_SECRET_KEY!)

  const prices: Record<string, string> = {
    monthly: process.env.STRIPE_PRICE_MONTHLY!,  // price_xxxxx
    annual:  process.env.STRIPE_PRICE_ANNUAL!,
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer_email: email,
    line_items: [{ price: prices[plan], quantity: 1 }],
    success_url: `${process.env.URL}/pro-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.URL}`,
    metadata: { userId },  // ← this is how webhook knows who to activate
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ url: session.url })
  }
}
