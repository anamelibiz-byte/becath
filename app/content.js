/* ═══════════════════════════════════════════════════════════════════
   BeCath v3 — Content
   Each entry: { eyebrow, title, meta, img?, gc?, hasAudio?, blocks: [] }
   Block types:
     - { type:'p', text }                            paragraph
     - { type:'h', text }                            heading
     - { type:'sectionLabel', text }                 small uppercase divider label
     - { type:'quote', text, cite }                  scripture / pull quote
     - { type:'callout', tone, title, body }         tone: gold/blue/rose/sage
     - { type:'lead', eyebrow, text, quote? }        navy lead card with optional quote
     - { type:'subsection', title, subtitle, blocks } collapsible-style sub group
     - { type:'rolegrid', items:[{title,body}] }     2-col grid of roles
     - { type:'archangel', icon, name, meaning, body }
     - { type:'prayer', label, text }                full prayer text
     - { type:'list', items:[..] }
     - { type:'verseList', items:[{cite,text}] }
     - { type:'audioRow', title, meta }              optional audio reference
   ═══════════════════════════════════════════════════════════════════ */

window.BECATH_CONTENT = {

  // ────────────────────────────────────────────────────────
  // ANGELS
  // ────────────────────────────────────────────────────────
  'guardian-angel': {
    eyebrow: 'Angels & Your Guardian',
    title: 'Your Guardian Angel',
    meta: 'Scripture · Catechism · Church Fathers',
    img: 'img/guardian.jpg',
    gc: 'gc-angels',
    hasAudio: false,
    blocks: [
      { type:'p', text:'Scripture, Church teaching, and the angel God assigned to walk beside you from the first moment of your existence.' },

      { type:'sectionLabel', text:'The Nature of Angels' },
      { type:'callout', tone:'gold', title:'What the Church Teaches', body:'Angels are purely spiritual beings — not human souls who died, not metaphors. God created them before the material world, endowed with intellect and will, and they exist to execute His plans and serve His people.' },

      { type:'subsection', title:'Scripture: Angels Are Real', subtitle:'Hebrews 1:14 · Catechism §328–330', blocks:[
        { type:'p', text:'The Bible mentions angels over <strong>300 times</strong> — more than any other category of heavenly being. They appear at every decisive moment in salvation history: the Garden, Abraham\'s tent, Jacob\'s ladder, the Exodus, the Annunciation, the Resurrection, and the end of time.' },
        { type:'quote', text:'Are they not all ministering spirits sent out to serve for the sake of those who are to inherit salvation?', cite:'Hebrews 1:14' },
        { type:'p', text:'The Catechism defines them as "purely spiritual creatures" with intelligence and will who "have been and are, servants and messengers of God" (§329). Their existence is not pious folklore — it is defined doctrine.' }
      ]},

      { type:'sectionLabel', text:'Your Guardian Angel' },
      { type:'lead', eyebrow:'Assigned to You — From the Beginning',
        text:'God gave you a personal guardian angel — not a shared one, not a rotating one. <em>Yours.</em> Assigned before you drew your first breath, present at every moment of your life.',
        quote:{ text:'See that you do not despise one of these little ones. For I tell you that in heaven their angels always see the face of my Father.', cite:'Matthew 18:10 · Jesus speaking' }
      },

      { type:'subsection', title:'The Church\'s Teaching on Guardian Angels', subtitle:'Catechism §336 · St. Thomas Aquinas · Church Fathers', blocks:[
        { type:'p', text:'The Catechism states: <em>"From its beginning until death, human life is surrounded by their watchful care and intercession"</em> (§336). This is not a devotional extra — it is part of the ordinary providential care God extends to every human soul.' },
        { type:'p', text:'St. Thomas Aquinas held that each person receives an individual angel — not one shared among many. St. Jerome wrote: <em>"How great the dignity of the soul, since each one has from his birth an angel commissioned to guard it."</em>' },
        { type:'quote', text:'For he will command his angels concerning you to guard you in all your ways; on their hands they will bear you up, lest you strike your foot against a stone.', cite:'Psalm 91:11–12' },
        { type:'callout', tone:'blue', title:'October 2 — Feast of the Guardian Angels', body:'The Church dedicates this day each year to celebrating the doctrine of guardian angels. It was extended to the universal Church by Pope Paul V in 1608.' }
      ]},

      { type:'sectionLabel', text:'Six Things Your Guardian Angel Does' },
      { type:'rolegrid', items:[
        { title:'Protects',     body:'Guards you from physical and spiritual harm — including demonic attack and near occasions of sin you don\'t even see coming.' },
        { title:'Intercedes',   body:'Brings your prayers before God\'s throne — and prays for you even in the moments you forget to pray yourself.' },
        { title:'Illuminates',  body:'Prompts holy thoughts, nudges toward virtue, and plants reminders of God\'s presence in ordinary moments.' },
        { title:'Warns',        body:'That uneasy feeling before a wrong decision, that sudden caution — your angel is at work, steering you from danger.' },
        { title:'Witnesses',    body:'Some Church Fathers teach your angel holds a spiritual record of your life — your acts of love, your moments of courage, your quiet fidelity.' },
        { title:'Escorts Home', body:'At the hour of death, your guardian escorts your soul — just as angels carried Lazarus to Abraham\'s side (Luke 16:22). You will not cross that threshold alone.' }
      ]},

      { type:'callout', tone:'gold', title:'How to Work with Your Guardian Angel', body:'<strong>Morning:</strong> Greet your guardian angel at the start of each day. Ask for protection and guidance.<br><br><strong>Before decisions:</strong> Ask your angel to help you see clearly and choose well.<br><br><strong>Before sleep:</strong> Ask your angel to guard your rest and bring you holy dreams.<br><br><strong>October 2:</strong> Feast of the Guardian Angels — the Church\'s celebration of this doctrine.<br><br><strong>Key insight:</strong> Your angel sees God face-to-face at all times (Mt 18:10) while remaining present to you. This is not a contradiction — it reflects the angelic nature of pure spirit.' }
    ]
  },

  'archangels': {
    eyebrow: 'Angels',
    title: 'The Three Named Archangels',
    meta: 'Michael · Gabriel · Raphael',
    img: 'img/archangel.jpg',
    gc: 'gc-angels',
    hasAudio: false,
    blocks: [
      { type:'p', text:'Three archangels are named in Scripture. Each has a distinct mission, a feast day in the Church\'s calendar, and a particular role in the spiritual life of every Catholic.' },

      { type:'archangel', icon:'⚔️', name:'St. Michael', meaning:'"Who is like God?"',
        body:'Commander of the heavenly army. Defeated Lucifer in the war of heaven. Prince of Israel. Patron of the Church, soldiers, police, and the dying. Invoked for protection against Satan.' },

      { type:'archangel', icon:'📜', name:'St. Gabriel', meaning:'"God is my strength"',
        body:'Messenger of the Incarnation. Announced to Mary that she would bear the Son of God. Also appeared to Daniel and Zechariah. Patron of communications, messengers, and diplomats.' },

      { type:'archangel', icon:'🌿', name:'St. Raphael', meaning:'"God heals"',
        body:'Guided Tobias on his journey; drove away the demon Asmodeus. Revealed himself: "I am Raphael, one of the seven angels who stand in the glorious presence of the Lord." Patron of the sick, travelers, and the blind.' },

      { type:'sectionLabel', text:'Prayers to the Angels' },

      { type:'prayer', label:'Angel of God · Guardian Angel Prayer',
        text:'Angel of God, my guardian dear,\nTo whom His love commits me here,\nEver this day be at my side,\nTo light and guard, to rule and guide. Amen.' },

      { type:'prayer', label:'Prayer to St. Michael · Pope Leo XIII',
        text:'Saint Michael the Archangel, defend us in battle.\nBe our protection against the wickedness and snares of the devil.\nMay God rebuke him, we humbly pray;\nand do thou, O Prince of the Heavenly Host,\nby the power of God,\ncast into hell Satan and all the evil spirits\nwho prowl about the world seeking the ruin of souls. Amen.' }
    ]
  },

  'angel-prayer': {
    eyebrow: 'Prayer',
    title: 'Angel of God',
    meta: 'Classic guardian angel prayer · ~1 min',
    img: 'img/angelofgod.jpg',
    gc: 'gc-prayer',
    blocks: [
      { type:'p', text:'The simplest, most beloved prayer to your guardian angel — taught to children, prayed by saints, recited daily by millions for centuries.' },
      { type:'prayer', label:'Angel of God',
        text:'Angel of God, my guardian dear,\nTo whom His love commits me here,\nEver this day be at my side,\nTo light and guard, to rule and guide. Amen.' },
      { type:'p', text:'Pray it in the morning when you wake. Pray it before a difficult decision. Pray it for your children. Pray it at night before you sleep. Your angel is listening.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // FEATURED / WHY CATHOLIC
  // ────────────────────────────────────────────────────────
  'why-catholic': {
    eyebrow: 'Featured',
    title: 'Why Catholic?',
    meta: 'A 7-day journey through the evidence',
    img: 'img/jesus.jpg',
    hasAudio: false,
    blocks: [
      { type:'p', text:'A short, honest journey through the historical, philosophical, and personal evidence for the Catholic faith. Whether you\'re seeking, struggling, or simply curious — start here.' },
      { type:'lead', eyebrow:'Seven Days · Seven Questions',
        text:'Each day takes about 10 minutes. Tap any day to begin.' },
      { type:'dayLinks', items:[
        { day:'Day 1', key:'proof-jesus',     title:'Did Jesus really live?',           meta:'Historical evidence · 12 min' },
        { day:'Day 2', key:'empty-tomb',      title:'The empty tomb',                   meta:'The Resurrection case · 10 min' },
        { day:'Day 3', key:'apparitions',     title:'Mary\'s appearances',               meta:'Documented apparitions · 10 min' },
        { day:'Day 4', key:'unbroken-church', title:'The unbroken Church',              meta:'2,000 years of succession · 10 min' },
        { day:'Day 5', key:'saints-miracles', title:'The saints and miracles',          meta:'Witnesses to the truth · 10 min' },
        { day:'Day 6', key:'sacraments',      title:'The sacraments',                   meta:'Seven channels of grace · 12 min' },
        { day:'Day 7', key:'why-this-church', title:'Why this Church, and not another', meta:'The 6-step argument · 10 min' }
      ]},
      { type:'quote', text:'You have made us for Yourself, O Lord, and our heart is restless until it rests in You.', cite:'St. Augustine' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // 7-DAY JOURNEY · Day 1 · Did Jesus Really Live?
  // ────────────────────────────────────────────────────────
  'proof-jesus': {
    eyebrow: 'Day 1 · Why Catholic?',
    title: 'Did Jesus Really Live?',
    meta: 'Historical evidence · ~12 min',
    img: 'img/jesus.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'The case for the historical Jesus is stronger than for almost any ancient figure', body:'More manuscripts. Earlier sources. More cross-references. Even hostile non-Christian historians of the period record Him. Today, virtually no credentialed historian — Christian, Jewish, atheist, agnostic — disputes that Jesus of Nazareth was a real person. The debate is about who He was, not whether He existed.' },

      { type:'accordion', eyebrow:'1', title:'Hostile Roman historians', subtitle:'Non-Christian sources record Him', open:true, blocks:[
        { type:'h', text:'Tacitus (~115 AD) — Annals 15.44' },
        { type:'p', text:'The greatest Roman historian of his era, writing about Nero blaming Christians for the great fire of Rome:' },
        { type:'quote', text:'Christus, the founder of the name, was put to death by Pontius Pilate, procurator of Judea in the reign of Tiberius.', cite:'Tacitus, Annals' },
        { type:'p', text:'Tacitus was a senator who had access to imperial archives. He had no motive to invent or confirm Christian claims — he called Christianity "a most mischievous superstition." His confirmation of the basic facts is exactly what historians weigh as serious evidence.' },
        { type:'h', text:'Pliny the Younger (~112 AD)' },
        { type:'p', text:'Roman governor of Bithynia, writing to Emperor Trajan asking how to handle Christians: "they sing hymns to Christ as to a god." Documents Christian worship within 80 years of the Crucifixion.' },
        { type:'h', text:'Suetonius (~120 AD)' },
        { type:'p', text:'Mentions Emperor Claudius expelling Jews from Rome around 49 AD because of disturbances "instigated by Chrestus" — likely a reference to debates about Christ.' }
      ]},

      { type:'accordion', eyebrow:'2', title:'Josephus — the Jewish historian', subtitle:'Two independent references', blocks:[
        { type:'p', text:'Flavius Josephus (37–100 AD), a Jewish-Roman historian, mentions Jesus twice in his Antiquities of the Jews. Even after critical scholars strip out parts they consider later additions, the core remains:' },
        { type:'list', items:[
          'Jesus existed and was a wise teacher',
          'He was the brother of James',
          'He was crucified under Pontius Pilate',
          'His followers continued to gather after His death'
        ]},
        { type:'p', text:'Josephus was not a Christian. He had no theological motive. His testimony is independent confirmation from a hostile, well-placed witness.' }
      ]},

      { type:'accordion', eyebrow:'3', title:'The earliest Christian sources', subtitle:'Within a generation of His life', blocks:[
        { type:'p', text:'The earliest writings about Jesus are not the Gospels — they are St. Paul\'s letters, written between 50–65 AD. That is 17–35 years after the Crucifixion. By the standards of ancient history, this is extraordinarily close to the events.' },
        { type:'callout', tone:'blue', title:'Compare', body:'The earliest biographies of Alexander the Great are 400 years after his death. No serious historian doubts Alexander existed. We have New Testament fragments dated within 50 years of Christ. We have over 5,800 Greek manuscripts of the New Testament — orders of magnitude more than any other ancient document.' }
      ]},

      { type:'accordion', eyebrow:'4', title:'The 1 Corinthians 15 creed', subtitle:'Likely composed within 5 years of the Resurrection', blocks:[
        { type:'p', text:'In 1 Corinthians 15:3–7, Paul quotes a creed he received and passed on. Based on linguistic features, scholars (Christian and skeptical alike) date the original creed to within 2–5 years of the Crucifixion:' },
        { type:'quote', text:'…that Christ died for our sins according to the Scriptures, that he was buried, that he was raised on the third day according to the Scriptures, and that he appeared to Cephas, then to the Twelve. Then he appeared to more than five hundred brothers at one time, most of whom are still living…', cite:'1 Corinthians 15:3–6' },
        { type:'p', text:'This is not legend developed over generations. This is what the earliest Christians were saying within a couple years of Jesus\' death — including the names of named witnesses who could be cross-examined.' }
      ]},

      { type:'accordion', eyebrow:'5', title:'The criterion of embarrassment', subtitle:'Details too awkward to invent', blocks:[
        { type:'p', text:'Historians look for details a writer would never invent because they hurt their case. The Gospels are full of them:' },
        { type:'list', items:[
          'Jesus was baptized by John — implying subordination',
          'Women were the first witnesses of the Resurrection — inadmissible in court at the time',
          'Peter denied Him three times — embarrassing for the leader of the early Church',
          'Jesus did not know the day of His return (Mark 13:32)',
          'He was crucified — the most shameful death in the Roman world',
          'His own family thought He was crazy at one point (Mark 3:21)'
        ]},
        { type:'p', text:'A propaganda piece would airbrush all of this out. The Gospels keep it in — because that is what happened, and the writers were committed to getting it right rather than getting it polished.' }
      ]},

      { type:'quote', text:'The basic story of the Gospels is so well attested by such a variety of sources that no historian can dismiss it.', cite:'Bart Ehrman, agnostic NT scholar' },

      { type:'callout', tone:'sage', title:'Where this leaves you', body:'Whether Jesus was God is a question of faith. But whether He existed is a question of history — and the historical case is overwhelming. Tomorrow we go further: did He stay dead?' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // 7-DAY JOURNEY · Day 3 · Mary's Apparitions
  // ────────────────────────────────────────────────────────
  'apparitions': {
    eyebrow: 'Day 3 · Why Catholic?',
    title: 'Mary\'s Apparitions',
    meta: 'Documented appearances · ~10 min',
    img: 'img/mary.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'A 2,000-year pattern that cannot be ignored', body:'The mother of Jesus has appeared, again and again, to people across centuries and continents. Each time she carries a message that always points back to her Son. Each time she leaves physical evidence behind — evidence that has been examined by skeptics, scientists, doctors, and journalists. The pattern is impossible to dismiss.' },

      { type:'accordion', eyebrow:'1', title:'Guadalupe, Mexico (1531)', subtitle:'The image that converted a continent', open:true, blocks:[
        { type:'p', text:'Mary appeared to a recently-converted Aztec peasant, St. Juan Diego, on Tepeyac Hill outside Mexico City. She left her image imprinted on his tilma — a cloak woven from cactus fiber that should have decomposed in 30 years. It is now nearly 500 years old and still intact.' },
        { type:'h', text:'What scientists have documented' },
        { type:'list', items:[
          'The image is not painted — there is no brushstroke, no underdrawing, no preparation layer',
          'The fabric should have decomposed centuries ago — it has not',
          'Microscopic examination of Mary\'s eyes reveals reflected images of the people present at the unveiling — including Juan Diego, Bishop Zumárraga, and others',
          'The eyes show the precise distortion of a real human eye reflecting a scene (the Purkinje-Sanson effect)',
          'The temperature of the tilma is 98.6°F — body temperature — when the air is colder',
          'Following the apparition, 9 million Aztecs converted to Christianity within 7 years'
        ]},
        { type:'callout', tone:'blue', title:'No natural explanation has held', body:'The image has been examined by NASA scientists, ophthalmologists, art historians, and skeptics for 500 years. None has produced a plausible naturalistic account of how the image was made or how the cactus-fiber cloak survives.' }
      ]},

      { type:'accordion', eyebrow:'2', title:'Lourdes, France (1858)', subtitle:'18 apparitions to St. Bernadette', blocks:[
        { type:'p', text:'A 14-year-old peasant girl, Bernadette Soubirous, was gathering firewood when she saw a beautiful Lady in a grotto. The Lady appeared 18 times over the next several months, eventually identifying herself: <em>"I am the Immaculate Conception."</em> The phrase had been formally defined as Catholic doctrine just four years earlier — Bernadette had no theological education and could not have invented this phrase.' },
        { type:'p', text:'Mary asked her to dig in the dirt — a spring opened up that flows to this day, producing 27,000 gallons of water per hour. The Lourdes Medical Bureau, a panel of doctors of all faiths, has examined healings at the site since 1883:' },
        { type:'list', items:[
          '70 healings declared "medically inexplicable" by international medical panels',
          'Late-stage cancers, multiple sclerosis, paralysis, blindness',
          'Standards so strict that thousands more healings remain unverified despite documentation'
        ]}
      ]},

      { type:'accordion', eyebrow:'3', title:'Fatima, Portugal (1917)', subtitle:'The Miracle of the Sun before 70,000 witnesses', blocks:[
        { type:'p', text:'Mary appeared to three shepherd children in 1917 — Lúcia, Francisco, and Jacinta — across six monthly apparitions. She announced that on October 13 she would perform a miracle "so all may believe." The newspapers — secular, mocking — published the prediction in advance.' },
        { type:'p', text:'On October 13, 1917, between 50,000 and 70,000 people gathered in a muddy field. After torrential rain, the clouds parted. The sun appeared to spin in the sky, change colors, and plunge toward the earth before returning to its position. Witnesses up to 25 miles away reported the phenomenon. Their soaked clothes and the muddy ground became completely dry instantly.' },
        { type:'callout', tone:'gold', title:'The hostile press confirmed it', body:'The Lisbon newspaper <em>O Século</em> — anti-Catholic, secular — published the next day: "Before the astonished eyes of the crowd, whose aspect was Biblical as they stood bareheaded, eagerly searching the sky, the sun trembled, made sudden incredible movements outside all cosmic laws — the sun \'danced.\'"' }
      ]},

      { type:'accordion', eyebrow:'4', title:'Knock, Akita, Kibeho, Medjugorje', subtitle:'The pattern continues', blocks:[
        { type:'p', text:'Mary continues to appear into the modern era. The Church investigates each claim with skeptical caution — most are dismissed. The ones officially approved share consistent features: messages of prayer, repentance, and reconciliation; physical evidence; and lasting fruits of faith.' },
        { type:'list', items:[
          '<strong>Knock, Ireland (1879)</strong> — silent apparition witnessed by 15 people of all ages, in pouring rain, around a brilliantly-lit gable wall',
          '<strong>Akita, Japan (1973–1981)</strong> — wooden statue of Mary wept human tears 101 times, recorded on Japanese national television; lab analysis confirmed real human tears, blood, sweat',
          '<strong>Kibeho, Rwanda (1981–1989)</strong> — Mary warned of a coming massacre; the genocide came in 1994',
          '<strong>Zeitoun, Egypt (1968)</strong> — luminous apparition of Mary atop a Coptic church for 2+ years, witnessed by millions including Muslims and the Egyptian president'
        ]}
      ]},

      { type:'accordion', eyebrow:'5', title:'Why these matter', subtitle:'The witness of 2,000 years', blocks:[
        { type:'p', text:'You can dismiss any single apparition as hoax, hallucination, or hysteria. You cannot dismiss the entire pattern. Across centuries, continents, languages, witnesses of every age and education — the same Person appears, leaving the same physical evidence, calling people back to her Son.' },
        { type:'callout', tone:'sage', title:'What she always says', body:'In every approved apparition, the message is the same: pray, repent, return to my Son, receive the sacraments, love the poor. The messenger never claims worship. She always points to Jesus.' }
      ]},

      { type:'quote', text:'Behold your mother.', cite:'John 19:27 — Jesus\' last words to His disciple about Mary' },

      { type:'callout', tone:'gold', title:'Where this leaves you', body:'The Catholic claim is not that Mary is divine. The claim is that she is Christ\'s mother — and that He continues to send her into history with messages for His people. That claim has 2,000 years of physical, medical, and witnessed evidence behind it. Even if you remain skeptical, the evidence demands a hearing.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // 7-DAY JOURNEY · Day 2 · The Empty Tomb
  // ────────────────────────────────────────────────────────
  'empty-tomb': {
    eyebrow: 'Day 2 · Why Catholic?',
    title: 'The Empty Tomb',
    meta: 'The Resurrection case · ~10 min',
    img: 'img/jesus.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'The single most important fact in history', body:'If Jesus did not rise from the dead, Christianity is false. Paul says so himself: "If Christ has not been raised, our preaching is useless and so is your faith." (1 Cor 15:14) The whole faith stands or falls on one event. So — what is the historical case?' },

      { type:'accordion', eyebrow:'1', title:'Even hostile sources concede the tomb was empty', subtitle:'Start here', open:true, blocks:[
        { type:'p', text:'The earliest counter-explanation given by the religious authorities was not "Jesus is still in the tomb" — it was that the disciples stole the body (Matthew 28:13). That is significant. The tomb being empty was never disputed by the people most motivated to disprove the Resurrection.' },
        { type:'list', items:[
          'The tomb was sealed and guarded by Roman soldiers',
          'It was located in Jerusalem — the very city where Christianity exploded weeks later',
          'Anyone could have walked over and verified the body',
          'No body was ever produced'
        ]}
      ]},

      { type:'accordion', eyebrow:'2', title:'The witnesses don\'t make sense as fiction', subtitle:'Women first', blocks:[
        { type:'p', text:'In 1st-century Jewish culture, a woman\'s testimony was inadmissible in court. If you were inventing a Resurrection story to convince Jews, you would never make women the first witnesses. The Gospels do — because that\'s what actually happened.' },
        { type:'p', text:'Mary Magdalene, the Marys at the tomb, the women who ran to tell the apostles. The most embarrassing detail to a 1st-century mind is preserved verbatim. Historians call this the criterion of embarrassment — details that would have been edited out if the story were being shaped for persuasion.' }
      ]},

      { type:'accordion', eyebrow:'3', title:'The disciples were transformed', subtitle:'From terrified to martyred', blocks:[
        { type:'p', text:'On Friday they fled. Peter denied Jesus three times. By Sunday evening they were locked in a room "for fear of the Jews" (John 20:19). Six weeks later they were preaching in the streets of Jerusalem and being arrested for it. Within a generation, almost all of them were dead — executed for refusing to deny what they had seen.' },
        { type:'callout', tone:'blue', title:'The lie hypothesis fails here', body:'People die for things they believe to be true. They do not die for things they know to be false. Eleven men, all in different cities, all going to their deaths insisting they had seen the risen Christ — and not one of them ever recanted. No conspiracy of that scale has ever held under that pressure.' }
      ]},

      { type:'accordion', eyebrow:'4', title:'Paul and James — the hostile witnesses', subtitle:'Skeptics turned martyrs', blocks:[
        { type:'p', text:'Saul of Tarsus was actively persecuting Christians when he had his encounter on the road to Damascus. He went from imprisoning believers to writing nearly half the New Testament. He, too, was eventually executed for the faith.' },
        { type:'p', text:'James, the brother of Jesus, had been a skeptic during Jesus\' ministry (John 7:5). After the Resurrection he became the leader of the Jerusalem church and was martyred for it. Two enemies of the movement, both transformed, both willing to die.' }
      ]},

      { type:'accordion', eyebrow:'5', title:'Alternative theories don\'t fit the evidence', subtitle:'Stolen body? Hallucination? Wrong tomb?', blocks:[
        { type:'list', items:[
          '<strong>Stolen body</strong> — by whom? The disciples were terrified and outnumbered. The Romans and Jews would have produced the body to crush the movement.',
          '<strong>Mass hallucination</strong> — hallucinations are individual, not group experiences. Paul reports 500 witnesses seeing Jesus at once (1 Cor 15:6). That\'s not a hallucination, that\'s an event.',
          '<strong>Wrong tomb</strong> — they could have just gone to the right one.',
          '<strong>Swoon theory</strong> (Jesus survived crucifixion) — Roman soldiers were experts at execution. The spear-thrust through the side ruled out survival. A half-dead man would not have convinced anyone of a triumphant resurrection.'
        ]},
        { type:'callout', tone:'gold', title:'The historian\'s test', body:'When evaluating a historical claim, the question is: which explanation best accounts for ALL the known evidence? The Resurrection accounts for the empty tomb, the transformation of the disciples, the conversions of Paul and James, the explosion of Christianity in Jerusalem weeks after Jesus died, the willingness of eyewitnesses to die, and 2,000 years of continued witness. No alternative explanation accounts for all of it.' }
      ]},

      { type:'quote', text:'And if Christ has not been raised, your faith is futile and you are still in your sins.', cite:'1 Corinthians 15:17' },

      { type:'callout', tone:'sage', title:'Where this leaves you', body:'You don\'t have to be certain. But you do have to take the evidence seriously. The Resurrection is either the most important event in human history, or the most successful lie ever told. Both options demand investigation — not dismissal.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // 7-DAY JOURNEY · Day 4 · The Unbroken Church
  // ────────────────────────────────────────────────────────
  'unbroken-church': {
    eyebrow: 'Day 4 · Why Catholic?',
    title: 'The Unbroken Church',
    meta: '2,000 years of succession · ~10 min',
    img: 'img/pope.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'No other Christian body can claim this', body:'Pope Leo XIV is the 267th successor of Saint Peter. Every Catholic bishop alive today can trace his ordination back through an unbroken chain of laying-on-of-hands all the way to the Apostles — and through them, to Jesus Christ Himself. This is not a metaphor. It is documented history.' },

      { type:'accordion', eyebrow:'1', title:'Jesus founded a Church, not a book', subtitle:'Authority before Scripture', open:true, blocks:[
        { type:'quote', text:'You are Peter, and on this rock I will build my church, and the gates of Hades will not overcome it.', cite:'Matthew 16:18' },
        { type:'p', text:'Jesus did not hand the apostles a New Testament and tell them to figure it out. He gave them <strong>authority</strong> — to bind and loose (Matt 16:19), to forgive sins (John 20:23), to teach all nations (Matt 28:19). The New Testament was written, collected, and canonized BY this Church over centuries.' },
        { type:'list', items:[
          'The first Christians had no New Testament — they had the Apostles',
          'The earliest complete New Testament canon is from 367 AD',
          'The Church existed for 300+ years before the book existed',
          'The Catholic Church decided which books were Scripture'
        ]}
      ]},

      { type:'accordion', eyebrow:'2', title:'Apostolic Succession — the chain of hands', subtitle:'Documented from Peter forward', blocks:[
        { type:'p', text:'When the Apostles needed to replace Judas, they did not hold an election among believers. Peter laid hands on Matthias (Acts 1:26). When Paul and Barnabas were sent out, hands were laid on them (Acts 13:3). Paul tells Timothy: <em>"fan into flame the gift of God which is in you through the laying on of my hands"</em> (2 Tim 1:6). This is the apostolic chain still in operation today.' },
        { type:'h', text:'A short list — bishops of Rome' },
        { type:'list', items:[
          'St. Peter (martyred ~64 AD)',
          'St. Linus (~64–76)',
          'St. Anacletus (~76–88)',
          'St. Clement I (~88–99) — wrote the Letter to the Corinthians, oldest non-biblical Christian document',
          '… [unbroken line of 260+ successors] …',
          'Pope John Paul II (1978–2005)',
          'Pope Benedict XVI (2005–2013)',
          'Pope Francis (2013–2025)',
          'Pope Leo XIV (2025–present)'
        ]}
      ]},

      { type:'accordion', eyebrow:'3', title:'The Four Marks of the True Church', subtitle:'One, Holy, Catholic, Apostolic', blocks:[
        { type:'p', text:'Christ said His Church would have four marks. The Nicene Creed (325 AD) lists them: "We believe in one, holy, catholic and apostolic Church."' },
        { type:'rolegrid', items:[
          { title:'One',       body:'A unified body, not thousands of splits' },
          { title:'Holy',      body:'Set apart, sanctifying its members' },
          { title:'Catholic',  body:'Universal — for all peoples, all times' },
          { title:'Apostolic', body:'Founded on the Apostles, traceable back' }
        ]},
        { type:'callout', tone:'blue', title:'Apply the test', body:'Run any Christian denomination through these four marks honestly. Most fail at least one — usually unity (40,000+ Protestant denominations) or apostolicity (no chain to the Apostles). The Catholic Church is the only body that has continuously claimed all four for 2,000 years.' }
      ]},

      { type:'accordion', eyebrow:'4', title:'The historical alternative is silence', subtitle:'Where would the true Church be?', blocks:[
        { type:'p', text:'If the Catholic Church is not the Church Christ founded — where was the true Church for the first 1,500 years of Christianity? Every Christian who lived between 33 AD and 1517 AD was Catholic or Orthodox. The Reformers themselves were Catholic priests. There is no continuous Christian community outside Catholicism and Orthodoxy that predates the 16th century.' },
        { type:'p', text:'This is a serious historical problem for any Protestant claim to be the true Church. Either the Church died for 1,500 years (Christ\'s promise failed) or it survived in the body that maintained the apostolic succession.' }
      ]},

      { type:'quote', text:'I will build my church, and the gates of Hades will not overcome it.', cite:'Matthew 16:18' },

      { type:'callout', tone:'sage', title:'Where this leaves you', body:'You can disagree with Catholic teaching on specific points. But the historical claim — that this is the same Church Jesus founded, with documented continuity for 2,000 years — is unique among Christian bodies. It deserves a serious look before being dismissed.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // 7-DAY JOURNEY · Day 5 · The Saints and Miracles
  // ────────────────────────────────────────────────────────
  'saints-miracles': {
    eyebrow: 'Day 5 · Why Catholic?',
    title: 'The Saints and Miracles',
    meta: 'Witnesses to the truth · ~10 min',
    img: 'img/eucharist-miracle.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'Christianity is not abstract', body:'It is not a philosophy, a theory, or a moral system. It is the claim that the living God acts in human history — and the evidence is the saints and the miracles. People who lived radically different lives. Events that defy natural explanation. Two thousand years of witnesses. They cannot all be lying. They cannot all be deluded. Something is happening.' },

      { type:'accordion', eyebrow:'1', title:'The saints — what they have in common', subtitle:'A pattern across centuries', open:true, blocks:[
        { type:'p', text:'Saints come from every century, every continent, every social class. A French peasant girl who led an army (Joan of Arc). An African prostitute who became a desert hermit (Mary of Egypt). A medieval mystic who advised popes (Catherine of Siena). A 20th-century Polish friar who died in Auschwitz (Maximilian Kolbe). And yet — they all share strange common features:' },
        { type:'list', items:[
          'Radical, lifelong holiness — not just good behavior, but transformed character',
          'Extraordinary love for the poor, the suffering, and the difficult',
          'Documented mystical experiences — visions, locutions, ecstasies',
          'Often, miraculous healings before, during, or after their lives',
          'Heroic deaths — many martyred, all faithful to the end'
        ]},
        { type:'callout', tone:'blue', title:'The naturalistic problem', body:'If holiness on this scale is universal across cultures, centuries, and contexts — pointing to the same God, the same Christ, the same sacraments — what natural force produces it? Atheism has no compelling answer. The saints are evidence.' }
      ]},

      { type:'accordion', eyebrow:'2', title:'Stigmata — the wounds of Christ', subtitle:'Documented in 60+ saints', blocks:[
        { type:'p', text:'Beginning with St. Francis of Assisi in 1224, more than sixty Catholic saints have manifested the wounds of Christ on their own bodies — the marks of nails in hands and feet, the spear-thrust in the side, the scourging marks. Most modern: St. Padre Pio (1918–1968), studied for 50 years by skeptical doctors. The wounds bled fresh blood. They never became infected. They closed at his death.' },
        { type:'p', text:'No medical explanation has ever held. Self-inflicted wounds become infected. Hysteria does not produce identical wound patterns matching crucifixion. Stigmata are real, documented, and only happen to people deeply united to Christ in prayer.' }
      ]},

      { type:'accordion', eyebrow:'3', title:'Incorruption — bodies that don\'t decay', subtitle:'200+ documented cases', blocks:[
        { type:'p', text:'St. Bernadette Soubirous of Lourdes died in 1879. Her body was exhumed three times — in 1909, 1919, and 1925 — for the canonization process. Each time, doctors and Church officials documented the same finding: her body was incorrupt. Today she is on public view in a glass coffin in Nevers, France. You can go see her. She looks like she is sleeping.' },
        { type:'list', items:[
          'St. Catherine of Siena (1380) — head and finger preserved, no decay',
          'St. Vincent de Paul (1660) — body intact for 350+ years',
          'St. John Vianney (1859) — body and heart preserved separately',
          'St. Padre Pio (1968) — exhumed 2008, body recognizable',
          'Plus more than 200 other documented cases across history'
        ]},
        { type:'callout', tone:'gold', title:'Not embalmed, not refrigerated', body:'These bodies were not preserved by any human means. Many were buried in damp ground for decades or centuries. Other bodies in the same cemeteries decomposed normally. The Church does not declare incorruption a miracle automatically — but the consistent pattern, only in Catholic saints, has no natural explanation.' }
      ]},

      { type:'accordion', eyebrow:'4', title:'Eucharistic miracles', subtitle:'Across centuries, around the world', blocks:[
        { type:'p', text:'Lanciano, Italy, 700 AD. A monk doubting the Real Presence celebrated Mass — and the host visibly turned to flesh in his hands, the wine to blood. The relics survive today. Modern lab analysis (1971): real human heart muscle tissue, type AB blood, in a state consistent with extreme stress before death. No preservatives. Twelve centuries old.' },
        { type:'list', items:[
          '<strong>Buenos Aires (1996)</strong> — host turned to flesh; tested by Cardinal Bergoglio (later Pope Francis); type AB blood, heart tissue under stress',
          '<strong>Sokółka, Poland (2008)</strong> — same finding, two independent universities',
          '<strong>Tixtla, Mexico (2006)</strong> — host bleeding fresh blood for years',
          '<strong>Legnica, Poland (2013)</strong> — heart tissue, type AB',
          'Type AB blood — same as the Shroud of Turin'
        ]}
      ]},

      { type:'accordion', eyebrow:'5', title:'Lourdes — medically certified miracles', subtitle:'70 healings the medical bureau cannot explain', blocks:[
        { type:'p', text:'At the Marian shrine of Lourdes, France (the site of Mary\'s 1858 apparitions to St. Bernadette), the Lourdes Medical Bureau has been examining reported healings since 1883. The Bureau is staffed by doctors of all faiths and none. To date, 70 healings have been declared <em>medically inexplicable</em> by international medical panels — meaning the cure cannot be explained by medicine, psychology, or any known natural process.' },
        { type:'callout', tone:'sage', title:'These are not exaggerations', body:'Late-stage cancers vanishing in days. Multiple sclerosis lesions disappearing on MRI. A man with one leg six centimeters shorter than the other — verified by X-ray — bathing in the spring and walking out with two equal legs. The medical bureau\'s standard for accepting a miracle is so strict that thousands of healings remain "unverified" because the documentation is merely 99% conclusive instead of 100%.' }
      ]},

      { type:'quote', text:'You shall know them by their fruits.', cite:'Matthew 7:16' },

      { type:'callout', tone:'gold', title:'Where this leaves you', body:'A faith with no fruits is dead. Catholicism produces fruits no other tradition produces at this scale — saints, mystics, healings, miracles. You don\'t have to accept every claim. But the pattern across 2,000 years deserves an explanation, and "they\'re all making it up" is not it.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // 7-DAY JOURNEY · Day 7 · Why This Church?
  // ────────────────────────────────────────────────────────
  'why-this-church': {
    eyebrow: 'Day 7 · Why Catholic?',
    title: 'Why This Church, Not Another?',
    meta: 'The 6-step argument · ~10 min',
    img: 'img/sacraments.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'Why Catholic, not just Christian?', body:'Once you accept Jesus is God, the question becomes: which church did He actually found? There are over 40,000 Christian denominations. They cannot all be right — they teach contradictory things on essential matters. Here is the argument that moves people from generic Christianity to Catholic Christianity.' },

      { type:'accordion', eyebrow:'1', title:'Jesus founded a Church — not a Bible', subtitle:'Authority came first', open:true, blocks:[
        { type:'p', text:'Jesus gave authority to Peter and the Apostles (Matthew 16, John 20, Luke 10). He never said "here is a book — figure it out yourselves." The early Church operated for 300+ years before the New Testament canon was finalized. The Church decided which books were Scripture, not the other way around.' },
        { type:'callout', tone:'blue', title:'The chicken-and-egg problem', body:'You cannot use the Bible to disprove the Catholic Church — because it was the Catholic Church that gave you the Bible. The 27 books of the New Testament were canonized at the Catholic Councils of Hippo (393) and Carthage (397). Reject the Catholic Church\'s authority and you have no reason to trust the table of contents in your own Bible.' }
      ]},

      { type:'accordion', eyebrow:'2', title:'That Church has a traceable line', subtitle:'Apostolic succession is documented', blocks:[
        { type:'p', text:'Pope Leo XIV is the 267th successor of Peter. Every Catholic bishop can trace his ordination back through laying-on-of-hands to the Apostles. No other Christian body has this. This is not a Catholic claim — it is a documented historical fact, accepted by every honest historian.' }
      ]},

      { type:'accordion', eyebrow:'3', title:'The Four Marks narrow it down', subtitle:'One, Holy, Catholic, Apostolic', blocks:[
        { type:'p', text:'The Nicene Creed (325 AD) — older than the New Testament canon — lists four marks of the true Church: One, Holy, Catholic, Apostolic. Run every Christian denomination through these four. Most fail at least one (usually unity or apostolicity). Only one body has continuously claimed all four for 2,000 years.' }
      ]},

      { type:'accordion', eyebrow:'4', title:'The Eucharist is the decisive issue', subtitle:'"This is my body" — symbol or reality?', blocks:[
        { type:'p', text:'Jesus said <em>"this is my body"</em> — not <em>"this represents my body."</em> When His followers were scandalized and left over this teaching (John 6), Jesus did not call them back and clarify it was a metaphor. He let them go. He meant it literally.' },
        { type:'p', text:'For the first 1,500 years of Christianity, every single Christian believed in the Real Presence of Christ in the Eucharist. The earliest Christian writings (St. Ignatius of Antioch, ~107 AD; St. Justin Martyr, ~150 AD) state this explicitly. The symbolic interpretation was introduced in 1517 by the Protestant Reformation.' },
        { type:'callout', tone:'gold', title:'The historical problem', body:'If the Real Presence is wrong, the entire Church got Christ\'s most important sacrament wrong for 1,500 years — including all the apostolic Fathers, all the saints, all the martyrs, all the councils. That is a heavy claim. The simpler explanation is that the Reformation got it wrong, not the apostles.' }
      ]},

      { type:'accordion', eyebrow:'5', title:'Sola Scriptura is self-defeating', subtitle:'"Scripture alone" cannot be found in Scripture', blocks:[
        { type:'p', text:'The Protestant principle that "Scripture alone" is the authority for Christians cannot itself be found in Scripture. It is a 16th-century doctrine added on top of the Bible. It also requires a Church to tell you which books are Scripture — which 66 (Protestant) or 73 (Catholic) belong. That decision was made by Catholic councils.' },
        { type:'p', text:'You cannot consistently hold "Scripture alone" without also accepting the Church that gave you the canon of Scripture in the first place.' }
      ]},

      { type:'accordion', eyebrow:'6', title:'The miracles follow the sacraments', subtitle:'Where the Eucharist is, the supernatural follows', blocks:[
        { type:'p', text:'Eucharistic miracles. Healings at Lourdes, Fatima, Knock. Incorrupt bodies. Stigmata. The physical, verifiable miracles of Christianity are overwhelmingly concentrated in the Catholic and Orthodox traditions — the traditions that maintained belief in the Real Presence and the seven sacraments.' },
        { type:'callout', tone:'sage', title:'Fruits, again', body:'Christ said "by their fruits you will know them" (Matt 7:16). If you take an honest inventory of where the most documented Christian miracles, the most heroic saints, and the most stable doctrinal continuity have appeared in 2,000 years — they appear under the apostolic succession of the Catholic Church.' }
      ]},

      { type:'quote', text:'The Church is not a human society of people united by their natural sympathies, but the Body of Christ, in which all members, however different, must share the common life, complementing and helping one another precisely by their differences.', cite:'C.S. Lewis' },

      { type:'callout', tone:'gold', title:'The end of the journey', body:'You have now seen the case the Catholic Church makes for itself: historical Jesus, the empty tomb, Mary\'s apparitions, the unbroken Church, the saints and miracles, the seven sacraments, and the Catholic claim. None of this forces faith. But none of it is dismissable, either. The honest next step is not to walk away — it is to walk into a Catholic church on Sunday and see for yourself.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // PROPHETS (full content from original)
  // ────────────────────────────────────────────────────────
  'prophets': {
    eyebrow: 'Scripture',
    title: 'The Prophets',
    meta: 'God\'s voices across the ages',
    img: 'img/prophets.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'What is a Prophet?', body:'A prophet is someone chosen by God to speak His message — not just to predict the future, but to call people back to God, reveal His heart, warn of consequences, and announce hope. The word in Hebrew is <em>nabi</em> — one who is called, one who speaks on behalf of another. Prophets were chosen, not volunteers. Most tried to refuse.' },

      { type:'accordion', eyebrow:'Foundation', title:'What Prophets Do & How They\'re Called', subtitle:'Start here', open:true, blocks:[
      { type:'h', text:'Five Things Prophets Actually Do' },
      { type:'list', items:[
        '<strong>Speak God\'s message</strong> — to individuals, kings, nations. Often a message nobody wanted to hear.',
        '<strong>Warn of consequences</strong> — when a nation or person breaks their covenant with God, a prophet announces what is coming unless they repent.',
        '<strong>Announce hope</strong> — even in warnings, prophets almost always include a path of restoration. God\'s mercy is always greater.',
        '<strong>Point to the Messiah</strong> — every major prophet pointed forward to Jesus, sometimes with stunning precision centuries before His birth.',
        '<strong>Demand justice</strong> — prophets were God\'s voice for the poor, the widow, the orphan. They confronted kings and the powerful without fear.'
      ]},

      { type:'h', text:'How God Called Prophets' },
      { type:'p', text:'St. Thomas Aquinas identified four ways God communicated with prophets — all four still occur today in various forms:' },
      { type:'list', items:[
        '<strong>Intellectual path</strong> — a direct infusion of understanding into the mind. No image, no vision — just sudden deep knowing.',
        '<strong>Path of imagination</strong> — visions, dreams, symbolic images that carry divine meaning. Isaiah\'s coal on his lips, Ezekiel\'s wheel.',
        '<strong>Infused vision</strong> — seeing something supernatural beyond normal human sight — angels, heavenly realities, future events.',
        '<strong>Natural vision elevated by God</strong> — observing something ordinary (a boiling pot, a branch) that God charges with prophetic meaning.'
      ]},

      { type:'h', text:'Important Facts About Prophets' },
      { type:'list', items:[
        'Prophets did NOT volunteer — most resisted their calling (Moses, Jeremiah, Jonah).',
        'Not all prophets were men — Miriam, Deborah, Huldah, Anna were female prophets.',
        'Not all were Jewish — Balaam was not Jewish yet was a true prophet (Numbers 22).',
        'The gift was not permanent — one could be chosen to speak and then never again be chosen.',
        'False prophets existed then and now — the test: does their prophecy come true? Does it lead to God or away from Him?',
        'Jesus is the greatest prophet — the eternal Word of God who is also the fulfillment of all prophecy.'
      ]},
      { type:'callout', tone:'gold', title:'The Big Picture', body:'The entire Old Testament is one long prophecy pointing forward to Jesus. Every prophet contributed a piece. When you read a prophet, ask: "How does this point to Christ?"' }
      ]},

      { type:'accordion', eyebrow:'The 4 Major Prophets', title:'Isaiah · Jeremiah · Ezekiel · Daniel', subtitle:'The longer books', blocks:[
      { type:'callout', tone:'blue', title:'Major vs. Minor', body:'"Major" does not mean more important — it means their books are <em>longer</em>. All prophets speak with equal divine authority. The 4 major prophets are Isaiah, Jeremiah, Ezekiel, and Daniel.' },

      { type:'subsection', title:'Isaiah', subtitle:'~740–700 BC · "The Fifth Gospel"', blocks:[
        { type:'p', text:'Isaiah is sometimes called "the fifth Gospel" because he predicted the coming of Jesus with such stunning accuracy — 700 years before it happened. He described a virgin giving birth, a suffering servant who would be pierced for our transgressions, and a man despised and rejected by men who would carry our sorrows. He spoke to the entire world — not just Israel — announcing that God\'s salvation would reach all nations.' },
        { type:'callout', tone:'gold', title:'Core Message', body:'"Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you, I will help you." (Isaiah 41:10). God\'s love is offered to everyone. Repentance is always possible. The Messiah is coming.' },
        { type:'callout', tone:'gold', title:'Prophecy Fulfilled in Jesus', body:'"He was pierced for our transgressions, crushed for our iniquities; the punishment that brought us peace was on him." — Isaiah 53:5. Written 700 years before the Crucifixion. This is the single most remarkable prophetic passage in the Bible.' },
        { type:'quote', text:'Come now, let us reason together, says the Lord: though your sins are like scarlet, they shall be as white as snow.', cite:'Isaiah 1:18' }
      ]},

      { type:'subsection', title:'Jeremiah', subtitle:'~627–585 BC · The Weeping Prophet', blocks:[
        { type:'p', text:'Called "the weeping prophet" — his message was rejected, he was imprisoned, thrown into a cistern, and lived to see Jerusalem destroyed. He tried to quit but couldn\'t — he said God\'s word was "like fire shut up in my bones." He was chosen before he was born (Jeremiah 1:5) and told he was not to marry or have children because of how bad things were about to get. Despite all this, he announced the New Covenant — a time when God\'s law would be written on human hearts, not tablets of stone. Jesus referenced this at the Last Supper.' },
        { type:'callout', tone:'gold', title:'Core Message', body:'True religion is interior — it comes from the heart, not just external rituals. God wants a personal relationship with each soul. And even in catastrophe, God has a plan: "I know the plans I have for you — plans to prosper you and not to harm you, plans to give you hope and a future." (Jeremiah 29:11)' },
        { type:'quote', text:'Before I formed you in the womb I knew you, before you were born I set you apart.', cite:'Jeremiah 1:5' }
      ]},

      { type:'subsection', title:'Ezekiel', subtitle:'~593–571 BC · Visions & Dry Bones', blocks:[
        { type:'p', text:'Ezekiel\'s visions are among the most dramatic in all of Scripture — a chariot of fire with wheels within wheels and four living creatures, a valley of dry bones that rose and lived again, a new temple with a river flowing from its altar that healed everything it touched. He was a priest called to be a prophet while in exile in Babylon. God made him act out his prophecies physically — lying on his side for 390 days, cooking food over dung, shaving his head and dividing the hair into thirds. His most powerful vision: God promised to give His people a new heart — replacing hearts of stone with hearts of flesh.' },
        { type:'callout', tone:'gold', title:'Core Message', body:'God is holy and cannot tolerate sin — but He desperately wants to restore His people. Personal responsibility matters: each person is accountable for their own choices. And God\'s Spirit will one day transform hearts from within.' },
        { type:'quote', text:'I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh.', cite:'Ezekiel 36:26' }
      ]},

      { type:'subsection', title:'Daniel', subtitle:'~605–535 BC · The Lion\'s Den', blocks:[
        { type:'p', text:'Taken to Babylon as a young man, Daniel refused to compromise his faith — he wouldn\'t eat the king\'s food, he prayed three times daily even when it was punishable by death, and he was thrown into the lion\'s den and survived. He interpreted dreams and visions for kings. His book contains some of the most precise prophetic timelines in Scripture — including a prediction of the exact timeframe of the Messiah\'s arrival that scholars calculate falls within the span of Jesus\'s ministry. Jesus Himself quoted Daniel when speaking of the end times.' },
        { type:'callout', tone:'gold', title:'Core Message', body:'Faithfulness to God under pressure is worth everything — God is sovereign over all kingdoms and rulers. His kingdom will outlast them all. "The Most High is sovereign over all kingdoms on earth." (Daniel 4:17)' },
        { type:'quote', text:'Those who are wise will shine like the brightness of the heavens, and those who lead many to righteousness, like the stars for ever and ever.', cite:'Daniel 12:3' }
      ]}
      ]},

      { type:'accordion', eyebrow:'The 12 Minor Prophets', title:'Hosea to Malachi', subtitle:'The shorter books', blocks:[
      { type:'callout', tone:'blue', title:'Minor = shorter books, not lesser importance', body:'These 12 prophets speak with the same divine authority. Their books are grouped together and read in the last weeks of the Church\'s liturgical year before Advent.' },

      { type:'rolegrid', items:[
        { title:'Hosea (~760 BC)',     body:'God\'s love is like a faithful husband who keeps loving an unfaithful spouse — He never stops pursuing us no matter how many times we turn away.' },
        { title:'Joel (~835 BC)',      body:'Prophesied the outpouring of the Holy Spirit on all people — quoted by Peter on Pentecost. "Your sons and daughters will prophesy."' },
        { title:'Amos (~760 BC)',      body:'A shepherd called to confront the powerful. God demands justice for the poor — religious ritual without justice is an abomination to Him.' },
        { title:'Obadiah (~845 BC)',   body:'The shortest book in the Old Testament. Pride destroys nations. Don\'t gloat over the misfortune of others — what goes around comes around.' },
        { title:'Jonah (~760 BC)',     body:'The reluctant prophet who ran from God, was swallowed by a great fish, and learned that God\'s mercy extends even to Israel\'s enemies. 3 days in the fish = Jesus\'s 3 days in the tomb.' },
        { title:'Micah (~735 BC)',     body:'Predicted Jesus would be born in Bethlehem — 700 years before it happened. "What does the Lord require of you? To act justly, love mercy, and walk humbly with your God." (Micah 6:8)' },
        { title:'Nahum (~650 BC)',     body:'God is patient — but there is a limit. Evil empires fall. Nineveh, the greatest city of its age, would be utterly destroyed. It was.' },
        { title:'Habakkuk (~605 BC)',  body:'The prophet who argued with God: "Why do the wicked prosper?" God answered. The lesson: "The righteous shall live by faith." Quoted three times in the New Testament.' },
        { title:'Zephaniah (~630 BC)', body:'Contains one of the most tender verses in Scripture: "The Lord your God is in your midst — He will rejoice over you with singing." God sings over you.' },
        { title:'Haggai (~520 BC)',    body:'A practical prophet: the exiles returned and built their own houses but left God\'s Temple in ruins. "Consider your ways." Put God first in everything.' },
        { title:'Zechariah (~520 BC)', body:'Rich in Messianic prophecy — predicted Jesus\'s entry into Jerusalem on a donkey, the 30 pieces of silver, the piercing. Called "the Revelation of the Old Testament."' },
        { title:'Malachi (~450 BC)',   body:'The last prophet before 400 years of silence. Predicted John the Baptist: "I will send my messenger, who will prepare the way before me." The Old Testament ends — and waits.' }
      ]}
      ]},

      { type:'accordion', eyebrow:'New Testament', title:'Prophets After Jesus', subtitle:'The continuation', blocks:[
      { type:'callout', tone:'gold', title:'Prophecy didn\'t end with the Old Testament', body:'Joel prophesied that in the Messianic era, the Spirit would be poured out on all people — sons and daughters, young and old. Peter announced this came true at Pentecost. The gift of prophecy continued in the early Church and the Church teaches it continues today as a charismatic gift.' },
      { type:'list', items:[
        '<strong>John the Baptist</strong> — the last and greatest of the Old Testament-style prophets. Spent years in the desert in total prayer before his mission. His entire purpose: point every person to Jesus. "He must increase, I must decrease." (John 3:30)',
        '<strong>Simeon</strong> — an old man in the Temple who had been told by the Holy Spirit he would not die before seeing the Messiah. When Mary and Joseph brought the infant Jesus to the Temple, the Spirit moved him to hold the child and prophesy over Him.',
        '<strong>Anna the Prophetess</strong> — an 84-year-old widow who "never left the Temple, worshipping with fasting and prayer night and day." When she saw the infant Jesus she began giving thanks and speaking about Him to all who were waiting for the redemption of Jerusalem. (Luke 2:36-38)',
        '<strong>Agabus</strong> — prophesied a great famine (Acts 11:27–28) — which occurred under Emperor Claudius. Later warned Paul he would be bound in Jerusalem. Both came true.',
        '<strong>St. John the Apostle</strong> — wrote the Book of Revelation, the last and greatest prophetic book of Scripture. A vision of the end of time, the cosmic battle, and the New Jerusalem.'
      ]},

      { type:'h', text:'The Gift of Prophecy Today' },
      { type:'p', text:'The Catholic Church teaches that the charismatic gift of prophecy — speaking God\'s word to build up, encourage, and comfort the community — is real and active today. 1 Corinthians 14:3: <em>"The one who prophesies speaks to people for their strengthening, encouraging and comfort."</em>' },
      { type:'callout', tone:'gold', title:'How to Test Prophecy (1 John 4:1)', body:'"Do not believe every spirit, but test the spirits to see whether they are from God." A true prophetic word: (1) leads to Jesus, never away from Him, (2) aligns with Scripture, (3) bears fruit of peace and conversion, (4) is submitted to the Church for discernment. Private revelation — including approved Marian apparitions — is real but never adds to or replaces Scripture.' }
      ]},

      { type:'accordion', eyebrow:'Blessings', title:'How Prophets Were Blessed — And How We Are', subtitle:'The gifts', blocks:[
      { type:'p', text:'Prophets didn\'t seek blessings — the blessing was the calling itself, despite its cost. Most were persecuted. All were transformed. Here is what the prophetic calling did to them — and what God promises to those who follow His voice:' },
      { type:'list', items:[
        '<strong>They saw what others could not</strong> — not just future events, but the spiritual reality behind visible events. God opened their inner eyes.',
        '<strong>They were filled with courage beyond their nature</strong> — Jeremiah was naturally timid and afraid. Under God\'s call, he confronted kings.',
        '<strong>They experienced intimacy with God</strong> — Moses spoke with God face to face, as a man speaks to his friend.',
        '<strong>They carried God\'s power</strong> — Elijah called down fire, raised the dead, and stopped the rain for three and a half years through prayer alone.',
        '<strong>They were transformed by what they saw</strong> — Moses\'s face literally shone after being in God\'s presence. Daniel was weak for days after his visions.',
        '<strong>They shared God\'s grief over sin</strong> — Jeremiah wept. Hosea loved an unfaithful wife to understand God\'s broken heart. Isaiah walked naked for three years as a sign.'
      ]},
      { type:'callout', tone:'gold', title:'What Jesus said about prophets', body:'(Matthew 5:12) "Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you." The prophetic life is not comfortable. But the reward is eternal.' },
      { type:'quote', text:'He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.', cite:'Micah 6:8' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // HEALING & LOVE
  // ────────────────────────────────────────────────────────
  'healing-love': {
    eyebrow: 'Comfort',
    title: 'Healing & Love',
    meta: 'What the Church teaches',
    img: 'img/healing.jpg',
    hasAudio: false,
    blocks: [
      { type:'accordion', eyebrow:'Healing', title:'What the Church Teaches on Healing', subtitle:'Essential', open:true, blocks:[
        { type:'callout', tone:'sage', title:'Healing is central to Christianity', body:'Jesus healed more than He preached in the Gospels. He sent the apostles out with authority to heal. The Church continues this mission today.' },

        { type:'h', text:'Types of Healing the Church Recognizes' },
        { type:'list', items:[
          '<strong>Physical healing</strong> — through prayer, the Anointing of the Sick, miracles. God can and does heal bodies.',
          '<strong>Inner healing</strong> — healing of memories, emotional wounds, trauma. The most common and most overlooked.',
          '<strong>Deliverance</strong> — freedom from spiritual oppression. Real, documented, practiced by the Church.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Sacrament', title:'Anointing of the Sick — The Healing Sacrament', subtitle:'For anyone seriously ill', blocks:[
        { type:'p', text:'A priest anoints the sick with blessed oil and prays. This sacrament strengthens the soul, can bring physical healing if God wills, forgives sins, and prepares the soul if death is near. <strong>You don\'t need to be dying</strong> — anyone seriously or chronically ill should ask their priest.' }
      ]},

      { type:'accordion', eyebrow:'Intercessors', title:'Key Healing Saints', subtitle:'Who to ask & why', blocks:[
        { type:'list', items:[
          '<strong>St. Raphael the Archangel</strong> — name means "God heals." He healed Tobit of blindness in Scripture. Ask him before surgery, medical appointments, illness.',
          '<strong>Our Lady of Lourdes</strong> — 70 miracles officially approved by the Church\'s medical bureau. Millions visit Lourdes annually. The spring water has been connected to thousands of healings.',
          '<strong>St. Padre Pio</strong> — thousands of documented healing intercessions verified by doctors who had given no medical hope.',
          '<strong>St. Peregrine</strong> — had a cancerous leg scheduled for amputation; after prayer and a vision of Christ, the cancer vanished overnight. Doctors confirmed the healing.',
          '<strong>St. Dymphna</strong> — patron of mental health, anxiety, depression. Her intercession is sought especially for neurological and psychological illness.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Prayer', title:'A Prayer for Healing', subtitle:'Pray when you need it most', blocks:[
        { type:'prayer', label:'Healing Prayer',
          text:'Lord Jesus Christ, You went about doing good and healing all who were oppressed. I come to You now in faith, asking for healing — body, mind, and soul. Where I am broken, make me whole. Where I carry wounds I cannot see, bring Your light. I trust in Your mercy and Your timing. St. Raphael, angel of healing, intercede for me. Our Lady of Lourdes, pray for me. Amen.' }
      ]},

      { type:'accordion', eyebrow:'Love', title:'The 4 Greek Words for Love', subtitle:'Deep truth', blocks:[
        { type:'list', items:[
          '<strong>Eros</strong> — romantic love. Sacred when ordered rightly — the Song of Solomon is in the Bible. Eros is holy, not shameful.',
          '<strong>Philia</strong> — friendship love. Deep friendship — David and Jonathan, Jesus and John the Apostle.',
          '<strong>Storge</strong> — family love. Natural bond between parent and child, siblings.',
          '<strong>Agape</strong> — divine love. Unconditional, sacrificial — choosing another\'s good regardless of feeling. What God has for us and what we\'re called to give.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Scripture', title:'1 Corinthians 13 — The Greatest Definition of Love', subtitle:'St. Paul', blocks:[
        { type:'quote', text:'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails.', cite:'1 Corinthians 13' }
      ]},

      { type:'accordion', eyebrow:'Practice', title:'What Love Means Practically', subtitle:'Living it out', blocks:[
        { type:'list', items:[
          'Love is not a feeling — it is a decision. You love by choosing to act rightly toward another person.',
          'The Rosary is an act of love — you are keeping Mary company and interceding for the world.',
          'The Mass is the supreme act of love — Christ giving Himself completely.',
          'Every small thing done with great love is equal to a grand gesture done without it.'
        ]}
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // APOLOGETICS — full content (the original mission of the app)
  // ────────────────────────────────────────────────────────
  'apologetics': {
    eyebrow: 'Why Jesus?',
    title: 'Why Jesus?',
    meta: 'The case for Christ · Reason & evidence',
    img: 'img/jesus.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'What is Apologetics?', body:'<em>Apologetics</em> means giving a reasoned defense of the faith — not just "you should believe," but <em>here is why the evidence points here.</em> Faith and reason are not enemies. The Catholic Church has always taught that reason leads to faith.' },

      { type:'accordion', eyebrow:'The Core Question', title:'Lord, Liar, or Lunatic', subtitle:'What Jesus claimed about Himself', open:true, blocks:[
        { type:'p', text:'The first thing to establish is what Jesus actually said about Himself. This is not disputed — it is in the historical record:' },
        { type:'list', items:[
          '<strong>"I and the Father are one."</strong> (John 10:30) — The Jews immediately picked up stones to kill Him. They understood exactly what He was claiming.',
          '<strong>"Before Abraham was, I AM."</strong> (John 8:58) — "I AM" is the holy name of God from Exodus. Jesus applied it to Himself.',
          '<strong>"Anyone who has seen me has seen the Father."</strong> (John 14:9)',
          '<strong>"I am the way, the truth, and the life."</strong> (John 14:6)',
          '<strong>"Your sins are forgiven."</strong> (Mark 2:5) — The Pharisees said: "Who can forgive sins but God alone?" Jesus claimed to do it.',
          'At His trial: "Are you the Messiah?" Jesus answered: <strong>"I am."</strong> (Mark 14:62) This led directly to His execution for blasphemy.'
        ]},
        { type:'callout', tone:'blue', title:'The key point', body:'Jesus did not leave the option of "good moral teacher" open. He claimed to be God. Either that claim is true — or He was a liar, or He was insane. There is no comfortable middle ground.' },
        { type:'callout', tone:'rose', title:'Option 1: LIAR', body:'Jesus knew He was not God but claimed to be anyway. Problem: liars lie for personal gain. His claims led directly to His execution. He had every opportunity to recant and save His life — He never did. Liars do not die for lies they know are lies.<br><br><strong>Verdict: Liar is very hard to sustain logically.</strong>' },
        { type:'callout', tone:'rose', title:'Option 2: LUNATIC', body:'Jesus believed He was God but was deluded. Problem: the psychiatric profile of someone who believes they are God is recognizable — grandiosity, incoherence. Jesus shows none of this. He wept at funerals, had deep friendships, answered complex questions with stunning clarity. This is not the profile of a man suffering from delusions.<br><br><strong>Verdict: Lunatic is very hard to sustain logically.</strong>' },
        { type:'callout', tone:'sage', title:'Option 3: LORD', body:'Jesus was exactly who He claimed to be. This is the only option that explains all the evidence consistently: His teaching, His miracles, His character, His death, and — most importantly — His Resurrection.' }
      ]},

      { type:'accordion', eyebrow:'The Hinge', title:'The Resurrection', subtitle:'The evidence every theory must explain', blocks:[
        { type:'p', text:'St. Paul said it plainly: <em>"If Christ has not been raised, your faith is futile."</em> (1 Cor 15:17). The Resurrection is either the most important event in history — or the most elaborate hoax. The historical facts non-Christian scholars agree on:' },
        { type:'list', items:[
          'Jesus died by crucifixion under Pontius Pilate — confirmed by Tacitus and Josephus.',
          'The tomb was empty on the third day — even His enemies did not dispute this. Their explanation was theft.',
          'The disciples genuinely believed they had seen Jesus alive after His death.',
          'Something transformed terrified men hiding in a locked room into fearless proclaimers willing to die — within weeks.',
          'Paul — who had been killing Christians — was completely transformed by what he described as an encounter with the risen Jesus.',
          'James — Jesus\'s own brother, who did not believe during His lifetime — became a Church leader and died a martyr for the Resurrection.'
        ]},
        { type:'callout', tone:'blue', title:'The historian\'s test', body:'What explanation best accounts for all the known evidence? The Resurrection explains all of it. No alternative theory — stolen body, hallucination, wrong tomb — accounts for everything consistently.' }
      ]},

      { type:'accordion', eyebrow:'The Prophecy Case', title:'300+ Predictions Fulfilled', subtitle:'Written centuries before Christ', blocks:[
        { type:'p', text:'The Old Testament contains over 300 prophecies about the coming Messiah — written centuries before Jesus was born. The mathematical probability of one person fulfilling even 8 by chance is 1 in 10¹⁷. Jesus fulfilled all of them.' },
        { type:'verseList', items:[
          { cite:'Micah 5:2 (700 BC)',       text:'Born in Bethlehem · Fulfilled — Matthew 2:1' },
          { cite:'Isaiah 7:14 (700 BC)',     text:'Born of a virgin · Fulfilled — Luke 1:26–35' },
          { cite:'Zechariah 9:9 (500 BC)',   text:'Enter Jerusalem on a donkey · Fulfilled — Matthew 21:1–9' },
          { cite:'Zechariah 11:12 (500 BC)', text:'Betrayed for 30 pieces of silver · Fulfilled — Matthew 26:15' },
          { cite:'Psalm 22:16 (1000 BC)',    text:'Hands and feet pierced · Fulfilled — John 20:25' },
          { cite:'Isaiah 53:5 (700 BC)',     text:'Pierced for our transgressions · Fulfilled — John 19:34' },
          { cite:'Psalm 16:10 (1000 BC)',    text:'Would not see decay in death · Fulfilled — Acts 2:31' },
          { cite:'Isaiah 53:9 (700 BC)',     text:'Buried with the rich · Fulfilled — Matthew 27:57–60' }
        ]}
      ]},

      { type:'accordion', eyebrow:'Why the Catholic Church?', title:'Jesus Founded a Church, Not a Book', subtitle:'The evidence for apostolic succession', blocks:[
        { type:'callout', tone:'gold', title:'The next question', body:'If Jesus is who He claimed to be — where is His Church today? He promised to build one. He promised the gates of hell would not overcome it. He promised to be with it until the end of the age.' },
        { type:'quote', text:'And I tell you that you are Peter, and on this rock I will build my Church.', cite:'Matthew 16:18' },
        { type:'list', items:[
          '<strong>One</strong> — One faith, one baptism, one Lord. The Catholic Church holds the same creed in every nation, unchanged from the Council of Nicaea in 325 AD.',
          '<strong>Holy</strong> — More documented saints, mystics, and healers than any institution in history.',
          '<strong>Catholic</strong> — Universal. Present on every inhabited continent for over a thousand years.',
          '<strong>Apostolic</strong> — Every bishop alive today can trace his ordination in an unbroken line back to the apostles, back to Christ. No other denomination can demonstrate this.'
        ]},
        { type:'callout', tone:'gold', title:'The uncomfortable question', body:'Who decided which books are in the Bible? Answer: The Catholic Church at the Council of Carthage (397 AD). Every Christian who reads a Bible is trusting a Catholic decision.' }
      ]},

      { type:'accordion', eyebrow:'The Miracle Record', title:'Evidence No Other Church Has', subtitle:'Scientifically examined, officially approved', blocks:[
        { type:'list', items:[
          '<strong>Eucharistic miracles</strong> — 12+ cases examined finding living human cardiac tissue, blood type AB, signs of agony. Across centuries and continents. Identical findings.',
          '<strong>Lourdes</strong> — 70 miracles officially approved by an international medical bureau including atheist doctors. 7,000+ cases examined.',
          '<strong>Fatima</strong> — The Miracle of the Sun witnessed by 70,000 people including secular journalists and skeptics, reported in newspapers the next day.',
          '<strong>Stigmata</strong> — 300+ documented cases. Padre Pio bore the wounds for 50 years, examined by secular physicians.',
          '<strong>Incorruptibles</strong> — Saints\' bodies undecayed centuries after death, without embalming. St. Bernadette looks as she did in 1879.'
        ]},
        { type:'callout', tone:'sage', title:'The Honest Conclusion', body:'1. Jesus existed — not disputed by serious historians of any faith.<br>2. Jesus claimed to be God — it is in the historical record.<br>3. The evidence against lying and insanity is very strong.<br>4. The most reasonable conclusion: Jesus was who He said He was.<br>5. He founded a Church that would last until the end of time.<br>6. Only the Catholic Church traces an unbroken connection — in leadership, sacraments, and doctrine — back to that Church.<br><br><strong>The question is not "which church is perfect?" The question is "which church is true?"</strong>' }
      ]},

      { type:'accordion', eyebrow:'Converts', title:'People Who Reasoned Their Way to Faith', subtitle:'Skeptics, atheists, and intellectuals', blocks:[
        { type:'list', items:[
          '<strong>C.S. Lewis</strong> — Oxford professor, former atheist. <em>Mere Christianity</em> is the most accessible logical case for Christianity ever written.',
          '<strong>G.K. Chesterton</strong> — Journalist who investigated the Catholic Church to disprove it — and ended up converting. His book <em>Orthodoxy</em> is a masterpiece.',
          '<strong>St. Augustine</strong> — Investigated every philosophy of his age and concluded: <em>"Our heart is restless until it rests in Thee."</em>',
          '<strong>Blaise Pascal</strong> — One of the greatest mathematicians in history. Argued that believing in God is the only rational bet: if God exists and you believe, you gain everything.',
          '<strong>Lee Strobel</strong> — Atheist journalist who set out to disprove the Resurrection. His conclusion, documented in <em>The Case for Christ</em>: the evidence is overwhelming.',
          '<strong>Scott Hahn</strong> — Presbyterian minister who converted after studying the early Church Fathers and concluding they were unambiguously Catholic.'
        ]}
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // POPE — full content
  // ────────────────────────────────────────────────────────
  'pope': {
    eyebrow: 'The Papacy',
    title: 'The Pope',
    meta: 'From Peter to today · 266 in unbroken line',
    img: 'img/pope.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'The Pope is not a human invention', body:'Jesus Himself established this role — deliberately, publicly, and with specific words that the Church has carried forward for 2,000 years without interruption.' },

      { type:'accordion', eyebrow:'Origin', title:'Where the Position Comes From', subtitle:'Scripture', open:true, blocks:[
        { type:'h', text:'The Moment Jesus Created the Papacy' },
        { type:'prayer', label:'Matthew 16:17–19', text:'Blessed are you, Simon son of Jonah, for this was not revealed to you by flesh and blood, but by my Father in heaven. And I tell you that you are Peter, and on this rock I will build my Church, and the gates of hell will not overcome it. I will give you the keys of the kingdom of heaven; whatever you bind on earth will be bound in heaven, and whatever you loose on earth will be loosed in heaven.' },
        { type:'p', text:'<strong>Three things happened in this one moment:</strong>' },
        { type:'list', items:[
          '<strong>Jesus renamed Simon to Peter</strong> — "Peter" means rock in Greek (Petros). In the ancient world, giving someone a new name meant giving them a new identity and mission. Jesus was declaring what Peter would become — not based on his personal perfection, but on the office he would hold.',
          '<strong>Jesus said He would build His Church on this rock</strong> — on Peter. Not on Peter\'s holiness (Peter was about to deny Jesus three times). On the office — the position — that Peter held.',
          '<strong>Jesus gave Peter the keys</strong> — In the ancient world, the steward who held the keys ran the household in the king\'s absence. Whoever holds the keys has the authority. Jesus was making Peter the steward of His kingdom on earth.'
        ]},

        { type:'h', text:'The Restoration — Jesus Gives Peter His Role Back' },
        { type:'prayer', label:'John 21:15–17', text:'Jesus said to Simon Peter: "Simon son of John, do you love me more than these?" He said to him, "Yes, Lord; you know that I love you." Jesus said to him, "Feed my lambs." A second time he said to him, "Simon son of John, do you love me?" He said to him, "Yes, Lord; you know that I love you." He said to him, "Tend my sheep." He said to him the third time, "Simon son of John, do you love me?" Peter was grieved because he said to him the third time, "Do you love me?" and he said to him, "Lord, you know everything; you know that I love you." Jesus said to him, "Feed my sheep."' },
        { type:'p', text:'Three questions — one for each denial. Jesus restored Peter publicly and specifically to the role of shepherd. The leader who feeds and tends God\'s entire flock.' }
      ]},

      { type:'accordion', eyebrow:'History', title:"Peter's Leadership in the Early Church", subtitle:'The evidence', blocks:[
        { type:'p', text:'The evidence of Peter\'s primacy runs throughout the entire New Testament:' },
        { type:'list', items:[
          'Peter speaks first at Pentecost — the first sermon in Church history. He leads 3,000 to Baptism.',
          'Peter\'s name is listed first in every single list of apostles in all four Gospels — every time.',
          'Peter presides over the replacement of Judas — the first decision of the Church after the Resurrection.',
          'Paul travels specifically to Jerusalem to meet Peter after his dramatic conversion — he goes to the leader.',
          'Peter performs the first Gentile baptism — opening the Church to non-Jews.',
          'The Council of Jerusalem (Acts 15) — Peter speaks and ends the debate. His word settles it.',
          'Peter went to Rome, led the Church there, was martyred — crucified upside down, not worthy to die as Jesus died — and was buried there. His tomb was discovered beneath the Vatican in the 20th century by archaeologists.'
        ]},
        { type:'callout', tone:'blue', title:'The unbroken line', body:'Every Pope since Peter has been his successor. The line has never broken — through persecutions, through scandal, through the fall of empires. 266 men from Peter to the current Pope.' }
      ]},

      { type:'accordion', eyebrow:'The Role', title:'What the Pope Actually Does', subtitle:'4 functions', blocks:[
        { type:'list', items:[
          '<strong>📖 Teaches</strong> — Supreme teacher of the Catholic faith. Clarifies, defines, and guards the deposit of faith. Issues encyclicals (teaching letters to the whole Church), apostolic exhortations, and formal declarations.',
          '<strong>⚖️ Governs</strong> — Supreme governor of the universal Church. Appoints bishops worldwide. Approves new dioceses. Calls Ecumenical Councils — worldwide gatherings of all bishops to define doctrine.',
          '<strong>🙏 Sanctifies</strong> — Offers Mass. Leads the Church\'s worship. Canonizes saints. Celebrates the great liturgies watched by hundreds of millions worldwide.',
          '<strong>🌍 Unifies</strong> — Perhaps most importantly, he holds the Church together. With 1.4 billion Catholics across every culture, language, and nation on earth, the Pope is the one visible point of unity. Because of him, a Catholic in Japan, Brazil, Nigeria, and Florida are all part of the same Church.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Clarified', title:'Papal Infallibility — The Most Misunderstood Teaching', subtitle:'What it really means', blocks:[
        { type:'callout', tone:'rose', title:'Common misunderstanding', body:'"The Pope is always right about everything and can never sin." This is NOT what the Church teaches.' },
        { type:'h', text:'What Infallibility Does NOT Mean' },
        { type:'list', items:[
          'The Pope is sinless or morally perfect.',
          'Everything the Pope says or tweets or recommends is infallible.',
          'The Pope cannot have bad opinions on politics, economics, or science.',
          'The Pope cannot make bad disciplinary or administrative decisions.'
        ]},
        { type:'h', text:'What Infallibility DOES Mean' },
        { type:'p', text:'When the Pope speaks <strong>ex cathedra</strong> — "from the chair" — meaning formally and officially as teacher of the entire Church on a matter of <strong>faith or morals</strong>, defining a doctrine that the whole Church must believe, the Holy Spirit prevents him from defining error.' },
        { type:'callout', tone:'gold', title:'Invoked exactly TWICE in 2,000 years', body:'<strong>1854</strong> — The Immaculate Conception of Mary<br><strong>1950</strong> — The Assumption of Mary<br><br>That is it. Twice in 2,000 years. It is a very narrow, very specific, very rarely used protection — not a blank check.' },
        { type:'p', text:'<strong>Why it makes sense:</strong> If Jesus established a Church to carry His truth through history — that Church needs some guarantee it won\'t officially define error in its formal teaching. Without that guarantee the truth would drift. Infallibility is that narrow but essential guarantee.' }
      ]},

      { type:'accordion', eyebrow:'The Heart', title:'The Pope Is a Servant, Not a King', subtitle:'The most important part', blocks:[
        { type:'p', text:'The Pope\'s full official title includes: <strong>"Servant of the Servants of God"</strong> — <em>Servus Servorum Dei</em>. Pope Gregory the Great introduced this title in the 6th century to make clear that the papacy is not about power but about service.' },
        { type:'quote', text:'The greatest among you must be your servant. Whoever exalts himself will be humbled, and whoever humbles himself will be exalted.', cite:'Matthew 23:11–12 — Jesus\'s teaching on leadership' },
        { type:'p', text:'The Pope is the servant of every bishop — who is himself the servant of every priest — who is himself the servant of every parishioner. The whole structure flows downward to serve, not upward to be served. That is the opposite of worldly power.' }
      ]},

      { type:'accordion', eyebrow:'Process', title:'When a Pope Dies — The Conclave', subtitle:'How it works', blocks:[
        { type:'list', items:[
          'The Pope\'s death is confirmed by the Cardinal Camerlengo (chamberlain), who calls the Pope\'s baptismal name three times. The Ring of the Fisherman — the papal seal — is officially destroyed.',
          'The College of Cardinals gathers in the Sistine Chapel under complete secrecy. No phones, no outside contact.',
          'They vote by secret ballot. A two-thirds majority is required. After each vote the ballots are burned.',
          '<strong>Black smoke</strong> (chemical added) = no Pope elected yet. The whole world watches the chimney.',
          '<strong>White smoke</strong> = a Pope has been elected. Bells ring. "Habemus Papam" — We have a Pope.',
          'The elected Cardinal is asked privately: "Do you accept?" He can decline. If he accepts, he immediately becomes Pope.',
          'He chooses a papal name — a new name for a new mission, just as Jesus renamed Simon to Peter.',
          'He appears on the balcony of St. Peter\'s Basilica to greet the Church and the world.'
        ]},
        { type:'callout', tone:'gold', title:'Resignation', body:'Rare but possible — and valid. Pope Benedict XVI resigned in 2013, the first resignation in nearly 600 years. A resigned Pope returns to being a bishop without papal authority but retains his episcopal orders.' }
      ]},

      { type:'accordion', eyebrow:'Continuity', title:'266 Popes — The Unbroken Line', subtitle:'2,000 years', blocks:[
        { type:'p', text:'From Peter to the current Pope — 266 men have held this office. The line has never broken. Through Roman persecution, through barbarian invasions, through the Black Death, through the Protestant Reformation, through two World Wars — the succession has continued.' },
        { type:'p', text:'Some were saints. Some were serious sinners. Some were brilliant. Some were mediocre. The Church does not claim the Pope is a perfect man. It claims the <em>office</em> is protected — that even through imperfect men, the Holy Spirit guards the truth of the faith.' },
        { type:'callout', tone:'blue', title:'The pattern Jesus set', body:'Jesus knew Peter would deny Him three times before He gave him the keys. He gave them anyway. God works through imperfect people. The office is not dependent on the holiness of the man — though holiness is the goal.' },
        { type:'quote', text:'That they may all be one, Father, just as you are in me and I am in you.', cite:'John 17:21 — Jesus\'s prayer the night before He died. The papacy exists to make this unity visible.' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // DAILY RHYTHM / OVERVIEW
  // ────────────────────────────────────────────────────────
  'daily-rhythm': {
    eyebrow: 'Daily',
    title: 'A Catholic Daily Rhythm',
    meta: 'A complete prayer day · ~45–60 min',
    img: 'img/daily.jpg',
    hasAudio: false,
    blocks: [
      { type:'p', text:'A simple, sustainable rhythm of prayer — anchored in the Church\'s tradition, designed to fit a full life. Adopt as much or as little as fits your day.' },

      { type:'accordion', eyebrow:'At a Glance', title:'The Daily Rhythm', subtitle:'~45–60 min total', open:true, blocks:[
        { type:'list', items:[
          '<strong>Wake up</strong> · Morning Offering + Guardian Angel · 3 min',
          '<strong>Morning</strong> · Gospel reading · 10 min',
          '<strong>Mealtimes</strong> · Grace before & after meals · 30 sec each',
          '<strong>Noon</strong> · The Angelus · 2 min',
          '<strong>3 PM</strong> · Divine Mercy Chaplet · 15 min',
          '<strong>Evening</strong> · The Holy Rosary · 20 min',
          '<strong>Bedtime</strong> · Examination + Contrition + Night Prayer · 10 min'
        ]},
        { type:'callout', tone:'gold', title:'First Saturday of each month', body:'Confession · Mass · Communion · Rosary · 15 min meditation. The Five First Saturdays devotion was requested by Our Lady at Fatima.' }
      ]},

      { type:'accordion', eyebrow:'Morning', title:'Morning Prayers & Gospel', subtitle:'~15 min', blocks:[
        { type:'h', text:'1 · Morning Offering' },
        { type:'prayer', label:'Morning Offering · Classic',
          text:'O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world. I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians. Amen.' },
        { type:'callout', tone:'gold', title:'In modern words', body:'Jesus, through Mary\'s pure and loving heart, I give You everything I do today. Every prayer I say, every task I work on, every moment of happiness, and every hard thing I go through — I\'m connecting all of it to every Mass being celebrated around the world right now. I\'m offering all of it for the things closest to Your heart: that people find salvation, that wrongs are made right, and that all Christians come together as one. Amen.' },

        { type:'h', text:'2 · Guardian Angel Prayer' },
        { type:'prayer', label:'Guardian Angel Prayer',
          text:'Angel of God, my guardian dear,\nto whom God\'s love commits me here,\never this day be at my side,\nto light and guard, to rule and guide. Amen.' },
        { type:'callout', tone:'gold', title:'In modern words', body:'God\'s angel, my personal guardian — the one God assigned specifically to me — please stay by my side all day today. Light my path when I can\'t see clearly. Keep me safe from harm. Help me make good choices and steer me in the right direction. Amen.' },

        { type:'h', text:'3 · Read One Gospel Chapter' },
        { type:'p', text:'Start with Mark Chapter 1. Read slowly. Ask: <em>"What is Jesus showing me?"</em>' },
        { type:'list', items:[
          'Read today\'s chapter slowly',
          'Pause on one verse that stands out',
          'Ask what Jesus is showing me'
        ]}
      ]},

      { type:'accordion', eyebrow:'Mealtimes', title:'Grace Before & After Meals', subtitle:'30 sec each', blocks:[
        { type:'callout', tone:'gold', title:'Why pray before meals?', body:'Every meal is a gift from God — food on the table is never guaranteed. Blessing your food acknowledges the source, invites God to the table, and teaches your children that gratitude is the first response to receiving something good. This is one of the easiest habits to build as a family.' },

        { type:'h', text:'Grace Before Meals' },
        { type:'prayer', label:'Grace Before Meals · Classic',
          text:'Bless us, O Lord, and these Thy gifts, which we are about to receive from Thy bounty, through Christ our Lord. Amen.' },
        { type:'callout', tone:'gold', title:'In modern words', body:'Lord, bless us and bless this food we are about to eat. All of it comes from Your goodness and generosity — nothing on this table got here without You. We receive it with gratitude, through Jesus. Amen.' },

        { type:'h', text:'Grace After Meals' },
        { type:'p', text:'Often forgotten — but just as important. You gave thanks before. Now you give thanks after.' },
        { type:'prayer', label:'Grace After Meals · Classic',
          text:'We give Thee thanks, Almighty God, for all Thy benefits, who lives and reigns forever. And may the souls of the faithful departed, through the mercy of God, rest in peace. Amen.' },
        { type:'callout', tone:'gold', title:'In modern words', body:'Thank You, God — for everything. For this food. For the hands that prepared it. For the people at this table. For every good thing You have given us that we don\'t even notice. And Lord, have mercy on everyone we have loved who is no longer with us. Bring them to rest in Your peace. Amen.' },

        { type:'h', text:'Simple Family Version — Teach Your Kids' },
        { type:'p', text:'For young children — easy to memorize and say together:' },
        { type:'prayer', label:'Short Family Grace',
          text:'God is great, God is good,\nLet us thank Him for our food.\nBy His hands we all are fed,\nGive us, Lord, our daily bread. Amen.' },
        { type:'callout', tone:'gold', title:'A note for new parents', body:'Start praying Grace Before Meals with your child now — even as a baby. They hear your voice. They will grow up knowing that prayer before food is simply what people do. That habit, started early, can last a lifetime.' }
      ]},

      { type:'accordion', eyebrow:'Noon', title:'The Angelus', subtitle:'2 min · Set a noon alarm', blocks:[
        { type:'p', text:'Set a noon alarm labeled <strong>"Angelus."</strong> Traditionally prayed at 6 AM, noon, and 6 PM — a meditation on the Incarnation that pauses your day three times.' },
        { type:'prayer', label:'The Angelus',
          text:'The Angel of the Lord declared unto Mary,\nand she conceived of the Holy Spirit.\n\nHail Mary, full of grace…\n\nBehold the handmaid of the Lord,\nbe it done unto me according to Thy Word.\n\nHail Mary, full of grace…\n\nAnd the Word was made flesh,\nand dwelt among us.\n\nHail Mary, full of grace…\n\nPray for us, O Holy Mother of God,\nthat we may be made worthy of the promises of Christ. Amen.' }
      ]},

      { type:'accordion', eyebrow:'3 PM', title:'Divine Mercy Chaplet', subtitle:'15 min · The Hour of Mercy', blocks:[
        { type:'callout', tone:'blue', title:'Jesus to St. Faustina', body:'"At three o\'clock implore My mercy. This is the Hour of great mercy for the whole world."' },
        { type:'h', text:'How to Pray (on Rosary beads)' },
        { type:'list', items:[
          'Begin: <strong>Our Father, Hail Mary, Apostles\' Creed</strong>',
          'Large bead: <em>"Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world."</em>',
          '10 small beads: <em>"For the sake of His sorrowful Passion, have mercy on us and on the whole world."</em>',
          'Repeat for all 5 decades',
          'Conclude 3×: <em>"Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world."</em>'
        ]},
        { type:'prayer', label:'On Large Beads',
          text:'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your dearly beloved Son, Our Lord Jesus Christ, in atonement for our sins and those of the whole world.' },
        { type:'prayer', label:'On Small Beads',
          text:'For the sake of His sorrowful Passion, have mercy on us and on the whole world.' },
        { type:'prayer', label:'Closing · say 3 times',
          text:'Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.' }
      ]},

      { type:'accordion', eyebrow:'Evening', title:'The Holy Rosary', subtitle:'20 min · The Mysteries by day', blocks:[
        { type:'h', text:'Mysteries by Day' },
        { type:'rolegrid', items:[
          { title:'Mon · Sat · Joyful',     body:'Annunciation · Visitation · Nativity · Presentation · Finding in the Temple' },
          { title:'Tue · Fri · Sorrowful',  body:'Agony · Scourging · Crowning · Carrying the Cross · Crucifixion' },
          { title:'Wed · Sun · Glorious',   body:'Resurrection · Ascension · Pentecost · Assumption · Coronation' },
          { title:'Thursday · Luminous',    body:'Baptism · Cana · Kingdom · Transfiguration · Eucharist' }
        ]},

        { type:'h', text:'Step by Step' },
        { type:'list', items:[
          'Hold crucifix — pray <strong>Apostles\' Creed</strong>',
          'First large bead — <strong>Our Father</strong>',
          '3 small beads — 3 <strong>Hail Marys</strong> (faith, hope, charity)',
          '<strong>Glory Be</strong>',
          'Announce the Mystery — picture scene for 10 seconds',
          'Large bead — <strong>Our Father</strong>',
          '10 small beads — 10 <strong>Hail Marys</strong> meditating on mystery',
          '<strong>Glory Be + Fatima Prayer</strong>',
          'Repeat for all 5 mysteries',
          'Finish with <strong>Hail Holy Queen</strong>'
        ]},

        { type:'h', text:'All Prayers' },
        { type:'prayer', label:'Our Father',
          text:'Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.' },
        { type:'prayer', label:'Hail Mary',
          text:'Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.' },
        { type:'prayer', label:'Glory Be',
          text:'Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.' },
        { type:'prayer', label:'Fatima Prayer',
          text:'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those most in need of Thy mercy. Amen.' },
        { type:'prayer', label:'Hail Holy Queen',
          text:'Hail, Holy Queen, Mother of Mercy, our life, our sweetness and our hope. To thee do we cry, poor banished children of Eve; to thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary! Pray for us, O Holy Mother of God, that we may be made worthy of the promises of Christ. Amen.' },
        { type:'prayer', label:'Apostles\' Creed',
          text:'I believe in God the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; Who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died, and was buried. He descended into hell; the third day He rose again from the dead; He ascended into heaven, and sits at the right hand of God the Father Almighty; from thence He shall come to judge the living and the dead. I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.' }
      ]},

      { type:'accordion', eyebrow:'Bedtime', title:'Examination & Night Prayer', subtitle:'10 min', blocks:[
        { type:'h', text:'Examination of Conscience' },
        { type:'list', items:[
          'Did I put anything before God today?',
          'Did I use God\'s name carelessly?',
          'Did I treat anyone unkindly?',
          'Did I lie, gossip, or exaggerate?',
          'Did I do something I knew was wrong?',
          'Did I fail to do good I could have done?'
        ]},

        { type:'h', text:'Act of Contrition' },
        { type:'prayer', label:'Act of Contrition',
          text:'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, Who art all good and deserving of all my love. I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.' },

        { type:'h', text:'Night Prayer — In Your Own Words' },
        { type:'list', items:[
          'Thank Him for 3 specific things today',
          'Ask protection over your family',
          'Ask your guardian angel to watch over your sleep'
        ]}
      ]},

      { type:'accordion', eyebrow:'Beginners', title:'Guidance for Beginners', subtitle:'Read once', blocks:[
        { type:'list', items:[
          '<strong>Don\'t skip Sunday Mass</strong> — everything else builds from there.',
          '<strong>Go to Confession once a month</strong> — it also counts toward your First Saturday requirement.',
          '<strong>Start your 5 First Saturdays now</strong> — mark the first Saturday of next month.',
          '<strong>Set a 3 PM mercy alarm</strong> — even one minute of prayer honors the Hour of Mercy.',
          '<strong>Read one prophet book</strong> — start with Isaiah 49–53. You will see Jesus on every page.',
          '<strong>Don\'t try to be perfect</strong> — missed a day? Start again tomorrow. No guilt spiral.',
          '<strong>Get a physical Rosary</strong> — holding beads is more grounding than an app.',
          '<strong>You are always worthy to go to Jesus directly</strong> — Mary, saints, and prophets all point to Him, not away.'
        ]}
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // MARY — apparitions, promises, patterns
  // ────────────────────────────────────────────────────────
  'mary-full': {
    eyebrow: 'The Mother of God',
    title: 'Mary',
    meta: '15 approved appearances · 2,000 years',
    img: 'img/mary.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'rose', title:'Through Mary, to Jesus', body:'Everything Mary asks leads to her Son. She always points to Christ, never to herself.' },

      { type:'accordion', eyebrow:'Fatima 1925', title:'Five First Saturdays', subtitle:'Monthly devotion', open:true, blocks:[
        { type:'callout', tone:'rose', title:"Our Lady's Promise", body:'"All those who on the first Saturdays of five consecutive months go to confession, receive Communion, say five decades of the Rosary and keep me company for 15 minutes meditating on the mysteries — I promise to assist them at the hour of death with all the graces necessary for the salvation of their souls."' },
        { type:'h', text:'Four Requirements Each First Saturday' },
        { type:'list', items:[
          '<strong>Confession</strong> — within 8 days before or after the First Saturday',
          '<strong>Holy Communion</strong> — receive at Mass that day',
          '<strong>5 decades of the Rosary</strong> — with the intention of reparation',
          '<strong>15 min meditating on Rosary mysteries</strong> — separate from praying the Rosary. Sit quietly and contemplate.'
        ]}
      ]},

      { type:'accordion', eyebrow:'15 Promises', title:'Promises for Praying the Rosary', subtitle:'Blessings for the faithful', blocks:[
        { type:'callout', tone:'rose', title:'Origin', body:'Given by Our Lady to St. Dominic (13th c.) and confirmed to Blessed Alan de la Roche (15th c.) for all who pray the Rosary faithfully and devoutly.' },
        { type:'list', items:[
          'Whoever faithfully serves me by the Rosary shall receive signal graces — special signs from God.',
          'I promise my special protection and greatest graces to all who recite the Rosary.',
          'The Rosary shall be a powerful armor against hell — it will destroy vice, decrease sin, defeat heresies.',
          'The Rosary will cause virtue and good works to flourish and lift hearts from the vanities of the world.',
          'The soul which recommends itself to me by the Rosary shall not perish — shall not go to hell.',
          'Whoever recites the Rosary devoutly shall never be conquered by misfortune and shall not die unprepared.',
          'Whoever has true devotion for the Rosary shall not die without the sacraments of the Church.',
          'Those faithful to the Rosary shall have during life and at death the light of God and fullness of His graces.',
          'I shall deliver from Purgatory those who have been devoted to the Rosary.',
          'The faithful children of the Rosary shall merit a high degree of glory in Heaven.',
          'You shall obtain all you ask of me by the recitation of the Rosary.',
          'All those who propagate the Holy Rosary shall be aided by me in their necessities.',
          'I have obtained from my Divine Son that all advocates of the Rosary shall have the entire celestial court as intercessors during life and at death.',
          'All who recite the Rosary are my beloved children and brothers and sisters of my only Son, Jesus Christ.',
          'Devotion to my Rosary is a great sign of predestination — of being among the saved.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Fatima', title:"Mary's Core Messages", subtitle:'What she keeps asking', blocks:[
        { type:'list', items:[
          'Pray the Rosary every day — requested at every single appearance',
          'Do penance and make sacrifices for the conversion of sinners',
          'Consecrate yourself and family to her Immaculate Heart',
          'Complete the Five First Saturdays devotion'
        ]},
        { type:'quote', text:'In the end, my Immaculate Heart will triumph.', cite:'Our Lady of Fatima · July 13, 1917' },
        { type:'prayer', label:'Act of Consecration to Mary', text:'O Immaculate Heart of Mary, Queen of Heaven and earth, I consecrate myself to you, my family, and all that I have. I promise to imitate your virtues by practicing a Christian life without regard to human respect. I resolve to receive Holy Communion on the first Saturday of every month and to offer you five decades of the Rosary each day, together with my sacrifices, in a spirit of reparation and penance. Amen.' }
      ]},

      { type:'sectionLabel', text:'When & Where Mary Has Appeared' },
      { type:'callout', tone:'rose', title:'Mary has visited earth across 2,000 years and six continents', body:'Every appearance is different in detail. The message is always the same at the core: pray, repent, return to God. She does not come in peaceful, prosperous times. She comes when everything is breaking. And she always comes to the powerless — never to kings, popes, or scholars.' },

      { type:'accordion', eyebrow:'40 AD', title:'Our Lady of the Pillar — Zaragoza, Spain', subtitle:'The oldest shrine in the world', blocks:[
        { type:'p', text:'Mary appeared to the Apostle James while she was still alive in Jerusalem — the only apparition that occurred during Mary\'s earthly lifetime. She stood on a pillar of jasper brought by angels and asked for a chapel. The Basilica del Pilar stands on that site today — the oldest continuously venerated Marian shrine on earth.' },
        { type:'callout', tone:'rose', title:'Message', body:'No words — her presence was the encouragement. James was struggling in his mission to Spain. She came to strengthen him personally. The pillar still stands inside the basilica, kissed by millions every year. <strong>Feast: October 12.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1531', title:'Our Lady of Guadalupe — Mexico City', subtitle:'20 million pilgrims a year', blocks:[
        { type:'p', text:'Mary appeared to Juan Diego — an indigenous peasant — during the brutal Spanish conquest. She appeared as a mestiza, spoke his native Nahuatl language, and asked for a chapel. When the bishop demanded a sign, she filled Juan Diego\'s cloak with roses in December — then her image was miraculously imprinted on the fabric.' },
        { type:'callout', tone:'rose', title:'Her exact words', body:'"Know for certain that I am the perfect and perpetual Virgin Mary, Mother of the True God. Know that I will hear your weeping and your complaints and will cure your sorrows. Am I not here who am your Mother? Are you not under my shadow and protection?"' },
        { type:'p', text:'<strong>The miracle that endures:</strong> The tilma should have disintegrated in 20 years. It is intact after 500. No paint, no brush strokes, no sketch underneath. Stars on her mantle match the exact sky of December 12, 1531. Her eyes contain a reflected image of Juan Diego. Scientists have no explanation. <strong>Feast: December 12.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1608', title:'Our Lady of Siluva — Lithuania', subtitle:'The weeping Mother', blocks:[
        { type:'p', text:'During Protestant suppression of Catholicism in Lithuania, a Catholic chapel was destroyed and the land confiscated. Decades later, children saw a beautiful woman weeping over a large stone in the field. Adults came and saw the same vision. Mary held the infant Jesus and wept over the abandoned faith.' },
        { type:'callout', tone:'rose', title:'Her exact words', body:'"Why do you not cultivate this land? Why do you not till this field? Formerly your people knelt here and prayed to me. Now it is overgrown and turned into a pasture." — She was asking: why have you abandoned God? Approved 1775. First post-Reformation approved apparition. <strong>Feast: September 8.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1830', title:'Our Lady of the Miraculous Medal — Paris', subtitle:'Rue du Bac chapel', blocks:[
        { type:'p', text:'Mary appeared to novice Sister Catherine Labouré in her convent chapel on Rue du Bac in Paris and spoke with her for two hours. She appeared again with the design of a medal and asked for it to be struck and distributed. France was in political revolution. Atheism was spreading rapidly.' },
        { type:'callout', tone:'rose', title:'Her exact words', body:'"Have a medal struck after this model. All who wear it will receive great graces; they should wear it around the neck. Graces will abound for persons who wear it with confidence." — Catherine kept her identity secret for 46 years. She was canonized in 1947. <strong>Feast: November 27.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1846', title:'Our Lady of La Salette — French Alps', subtitle:'She appeared weeping', blocks:[
        { type:'p', text:'Two shepherd children — Mélanie (14) and Maximin (11) — found a beautiful woman sitting with her face in her hands, weeping. She stood, told them not to be afraid, and spoke — first in French, then in their dialect. She gave each child a personal secret. Just before the Irish Famine and European revolutions of 1848.' },
        { type:'callout', tone:'rose', title:'Her words', body:'"How long a time I have suffered for you! If I would not have my Son abandon you, I am compelled to pray to Him without ceasing. How much I must do so that you feel it! You will never make it up, no matter what you do. I warned you last year with the potatoes. You did not heed this. You swore, you took the name of my Son in vain. They will continue to decay. Pray, pray much. Make sacrifices for sinners." Approved 1851. <strong>Feast: September 19.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1858', title:'Our Lady of Lourdes — France', subtitle:'70 Church-approved miracles', blocks:[
        { type:'p', text:'18 apparitions to 14-year-old Bernadette Soubirous — poor, illiterate, chronically ill. She appeared at the Grotto of Massabielle from February to July 1858. A spring appeared when Bernadette dug in the ground. It still flows at 27,000 gallons per week.' },
        { type:'callout', tone:'rose', title:'Her words across 18 apparitions', body:'"Penance! Penance! Penance! Pray to God for sinners." · "Go drink at the spring and wash yourself there." · "Go tell the priests to come here in procession and to build a chapel here." · And finally, when Bernadette asked her name: "I am the Immaculate Conception." — words Bernadette did not understand. The dogma had been defined just four years earlier.' },
        { type:'p', text:'Over 7,000 reported cures examined by an international medical bureau. 70 declared scientifically inexplicable. Bernadette herself was never cured. She died at 35 saying: "My job is to be ill." Her body remains incorrupt in Nevers, France. <strong>Feast: February 11.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1859', title:'Our Lady of Champion — Wisconsin, USA', subtitle:'The only US apparition', blocks:[
        { type:'p', text:'Mary appeared three times to Adele Brise, a Belgian immigrant, near Green Bay, Wisconsin. On the third apparition others were with her but could not see Mary — they felt warmth and saw a white cloud. Mary gave Adele a specific mission for the frontier.' },
        { type:'callout', tone:'rose', title:'Her exact words', body:'"I am the Queen of Heaven, who prays for the conversion of sinners, and I wish you to do the same. You received Holy Communion this morning, and that is good. But you must do more. Make a general confession, and offer Communion for the conversion of sinners. Gather the children in this wild country and teach them what they should know for salvation."' },
        { type:'p', text:'<strong>The miracle:</strong> In 1871, the Great Peshtigo Fire swept Wisconsin — the deadliest fire in US history, killing 2,000+ people. The shrine was completely surrounded. Every structure for miles burned. The chapel and everyone sheltering inside were completely unharmed. The fire stopped at the property boundary. Approved 2010. <strong>Feast: October 9.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1879', title:'Our Lady of Knock — Ireland', subtitle:'15 witnesses · No words spoken', blocks:[
        { type:'p', text:'August 21, 1879 — the aftermath of the Great Famine that killed over a million Irish people. Fifteen people of all ages witnessed an apparition at the gable wall of the parish church in Knock, County Mayo. The vision lasted two hours in heavy rain. The wall around the apparition remained completely dry.' },
        { type:'callout', tone:'rose', title:'No words spoken', body:'The only approved Marian apparition with no verbal message. Mary appeared with St. Joseph, St. John the Evangelist, and a lamb on an altar with a cross. The silence itself was the message — a luminous, unannounced presence of Heaven during Ireland\'s darkest hour. <em>I am here. I have not forgotten you.</em> Fifteen witnesses — age 5 to 75 — all described the same vision consistently. 300+ miraculous cures reported since. <strong>Feast: August 21.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1917', title:'Our Lady of Fatima — Portugal', subtitle:'The most urgent message', blocks:[
        { type:'p', text:'Six apparitions from May 13 to October 13, 1917 — the heart of WWI — to three shepherd children: Lucia (10), Francisco (9), and Jacinta (7). On October 13 a crowd of 70,000 gathered in the rain. The sun "danced" — spinning, changing colors, appearing to fall toward the earth for 12 minutes. Witnesses 40 miles away reported the same. The rain-soaked field was completely dry afterward.' },
        { type:'callout', tone:'rose', title:'Her complete messages', body:'"Pray the Rosary every day to obtain peace for the world and the end of the war."<br><br>"God wishes to establish in the world devotion to my Immaculate Heart."<br><br>"Russia will spread her errors throughout the world, causing wars and persecutions of the Church. The good will be martyred; the Holy Father will have much to suffer; various nations will be annihilated. In the end, my Immaculate Heart will triumph."<br><br>"Make sacrifices for sinners, and say often: \'O Jesus, it is for love of You, for the conversion of sinners, and in reparation for the sins committed against the Immaculate Heart of Mary.\'"' },
        { type:'h', text:'The Three Secrets' },
        { type:'list', items:[
          '<strong>First Secret — Vision of Hell.</strong> The children were shown a vast sea of fire with souls in human form. Mary showed them so they would understand the stakes of the work she was asking them to do for sinners.',
          '<strong>Second Secret — Prediction of WWII.</strong> "When you see a night illumined by an unknown light, know that this is the great sign given you by God that He is about to punish the world for its crimes by means of war, famine, and persecutions." — On January 25–26, 1938, an extraordinary aurora borealis lit the skies of Europe. Lucia immediately recognized it. Germany invaded Austria 6 weeks later.',
          '<strong>Third Secret — Released 2000.</strong> A vision of a bishop in white being killed — interpreted as connected to the 1981 assassination attempt on John Paul II, who survived and donated the bullet to the shrine at Fatima. It rests in the crown of Mary\'s statue there today.'
        ]},
        { type:'p', text:'<strong>Feast: May 13.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1932–33', title:'Beauraing & Banneux — Belgium', subtitle:'Eve of WWII', blocks:[
        { type:'p', text:'<strong>Beauraing:</strong> 33 apparitions to 5 children (ages 9–15) at a convent garden wall. She revealed a golden heart — the Immaculate Heart. Within two years these apparitions ended, WWII began. Approved 1949.' },
        { type:'callout', tone:'rose', title:'Her words at Beauraing', body:'"I am the Immaculate Virgin. Pray always. I will convert sinners. I am the Mother of God, the Queen of Heaven. Pray, pray, pray." · "Do you love my Son? Do you love me? Then sacrifice yourself for me." <strong>Feast: August 22.</strong>' },
        { type:'p', text:'<strong>Banneux:</strong> 8 apparitions to Mariette Beco, 12, from a poor non-practicing family. The first vision came through her kitchen window at night. The apparitions led to the reconversion of her entire family. A spring appeared where Mary stood.' },
        { type:'callout', tone:'rose', title:'Her exact words at Banneux', body:'"I am the Virgin of the Poor. I come to relieve suffering. Believe in me and I will believe in you. Pray much." · She led Mariette to a spring: "This stream is reserved for me." · "I am the Mother of the Savior, Mother of God. Pray much. Goodbye — for now." Approved 1949. <strong>Feast: January 15.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1968–71', title:'Our Lady of Zeitoun — Cairo, Egypt', subtitle:'100,000+ witnesses simultaneously', blocks:[
        { type:'p', text:'Beginning April 2, 1968, a luminous figure of Mary appeared on the roof of a Coptic church in Cairo hundreds of times over three years. Witnessed by enormous crowds including Muslims, atheists, and Egyptian President Nasser. Filmed. Photographed. Investigated by the Egyptian government with no natural explanation found.' },
        { type:'callout', tone:'rose', title:'No words spoken', body:'The only apparition recognized by both the Catholic Church and the Coptic Orthodox Church. Sometimes seen by crowds of over 100,000 simultaneously. Egyptian state television broadcast footage. Mary appeared in Egypt — the land where the Holy Family fled from Herod. In Islamic tradition, Mary (Maryam) is the most honored woman in the Quran. This apparition crossed every religious line. <strong>Feast: April 2.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1973', title:'Our Lady of Akita — Japan', subtitle:'Statue wept human tears 101 times', blocks:[
        { type:'p', text:'Sr. Agnes Sasagawa, a deaf nun, received messages from Mary between 1973 and 1981. A wooden statue in the chapel wept human tears 101 times — witnessed by many including the bishop. The tears were scientifically analyzed and confirmed to be human blood, sweat, and tears.' },
        { type:'callout', tone:'rose', title:'Her most urgent message (Third Message)', body:'"As I told you, if men do not repent and better themselves, the Father will inflict a terrible punishment on all humanity. It will be a punishment greater than the deluge, such as one will never have seen before. Fire will fall from the sky and will wipe out a great part of humanity, the good as well as the bad, sparing neither priests nor faithful. The survivors will find themselves so desolate that they will envy the dead. The only arms which will remain for you will be the Rosary and the Sign left by My Son. Each day recite the prayers of the Rosary." Approved 1984. <strong>Feast: October 13.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1981–89', title:'Our Lady of Kibeho — Rwanda', subtitle:'Predicted the genocide', blocks:[
        { type:'p', text:'The only Church-approved apparition in Africa. Mary appeared to three teenage girls at a boarding school in rural Rwanda. The visionaries were shown visions of rivers of blood, decapitated heads, and mass slaughter — 13 years before the 1994 Rwandan genocide killed 800,000 people in 100 days. Approved 2001.' },
        { type:'callout', tone:'rose', title:'Her words', body:'"Repent, repent, repent. Pray the Rosary. Love one another. There are too many sins in the world. Make peace, make peace." — The visionaries described their visions publicly. People dismissed them as disturbed. In 1994 everything they described happened. The shrine at Kibeho was one of the few places of refuge during the genocide. <strong>Feast: November 28.</strong>' }
      ]},

      { type:'accordion', eyebrow:'1981–present', title:'Medjugorje — Bosnia & Herzegovina', subtitle:'Nihil Obstat 2024', blocks:[
        { type:'p', text:'Apparitions to 6 visionaries since June 24, 1981 — during the Yugoslav Wars that would tear the region apart. Still ongoing. Pope Francis granted Nihil Obstat ("nothing prevents") in 2024, allowing public devotion and pilgrimages. Tens of millions of pilgrims. Thousands of reported conversions and healings.' },
        { type:'callout', tone:'rose', title:'Her core message — unchanged since 1981', body:'"Peace, peace, peace — and only peace. Peace between God and man, and among all people. I am the Queen of Peace. Dear children — pray, pray, pray. Fast. Convert your hearts. Return to God." — She has given 10 secrets to each visionary — not yet revealed. When all 10 are given, the apparitions will end and a visible sign will appear on Apparition Hill. <strong>Feast: June 25.</strong>' }
      ]},

      { type:'accordion', eyebrow:'Analysis', title:'Six Patterns Across 2,000 Years', subtitle:'What the data shows', blocks:[
        { type:'callout', tone:'rose', title:'When you map every approved appearance', body:'Six patterns emerge that are impossible to explain by coincidence alone.' },
        { type:'list', items:[
          '<strong>Pattern 1 — France is the epicenter of modern appearances.</strong> Paris (1830), La Salette (1846), Lourdes (1858), Pontmain (1871) — four major approved appearances in 41 years, all in France. This was exactly when France was experiencing its most intense anti-clericalism, atheism, and political revolution. She kept appearing in the country that was abandoning God fastest.',
          '<strong>Pattern 2 — She appears during war, famine, and collapse — always.</strong> Guadalupe (Spanish conquest), Siluva (Protestant suppression), La Salette (before 1848 revolutions), Lourdes (political instability), Knock (Great Famine aftermath), Pontmain (Franco-Prussian War), Fatima (WWI), Beauraing/Banneux (eve of WWII), Zeitoun (Six-Day War aftermath), Kibeho (before Rwanda genocide), Medjugorje (Yugoslav Wars). She does not appear in peaceful, prosperous times. She appears when everything is breaking.',
          '<strong>Pattern 3 — Always to the powerless.</strong> Never to kings, popes, bishops, or scholars. Juan Diego was an indigenous peasant. Bernadette was illiterate and asthmatic. The Fatima seers were shepherd children under 10. Always the last person anyone would choose. Always chosen.',
          '<strong>Pattern 4 — The message never changes. Only the context does.</strong> Across 1,400 years and every continent: pray the Rosary, do penance, convert sinners, make peace. Every visit varies in detail but the core is identical. This is either the most consistent hallucination in human history — or it is the same Person saying the same urgent truth because it is always true.',
          '<strong>Pattern 5 — She predicts things before they happen.</strong> Fatima in 1917 predicted the spread of Russia\'s errors worldwide — before Lenin\'s revolution was complete. Kibeho in 1981 showed visions of the Rwandan genocide 13 years before it happened. Pontmain\'s appearance in 1871 stopped a Prussian military advance — the Prussians themselves recorded that "an invisible Madonna in the sky" prevented them from finishing the war.',
          '<strong>Pattern 6 — Water appears repeatedly.</strong> Lourdes has a healing spring that produces 27,000 gallons per week. Banneux\'s message was specifically about a spring "reserved for all nations." La Salette had a spring appear at the site. A recurring connection to water as a symbol of grace, healing, and life — consistent with Scripture from Ezekiel 47 to John 7:38.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Core', title:'The One Common Theme', subtitle:'What it all adds up to', blocks:[
        { type:'p', text:'If you strip every appearance down to its core — past the location, the century, the language, the visionary, the miracle — one truth remains in every single one:' },
        { type:'quote', text:"God's mercy is available. The door is open. But you must turn around and walk back through it.", cite:'The pattern of every approved appearance' },
        { type:'list', items:[
          '<strong>God has not abandoned humanity.</strong> He sent His Son. His Son ascended. He sent His Spirit. And He keeps sending His Mother to places no one is looking — to remind the smallest, most forgotten people that Heaven has not stopped watching.',
          '<strong>The stakes are real.</strong> At Fatima, Akita, and Kibeho — Mary was shown real consequences of a world continuing in sin. She wept. She warned. She offered a way out. Every visit includes urgency because she knows what is at stake for human souls.',
          '<strong>The Rosary is the specific tool she keeps offering.</strong> Not because it is magic — but because meditating on the life of Christ for 20 minutes a day changes the person praying it. She keeps handing it to people because she has seen what it does.',
          '<strong>Peace is possible.</strong> "In the end, my Immaculate Heart will triumph." Every visit ends in hope — not despair. The warnings exist to prevent what is warned about. She does not come to terrify. She comes to save.'
        ]},
        { type:'callout', tone:'rose', title:'She is not doing this for herself', body:'She has no personal stake in whether any individual prays the Rosary or goes to Confession. She is a mother interceding for her children — bringing the urgent message of a Father who still wants them home. Every visit, across every century and continent, is the same knock on the same door: <em>"Come back. He\'s still waiting."</em>' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // EUCHARIST — full content with all 12 documented miracles
  // ────────────────────────────────────────────────────────
  'eucharist': {
    eyebrow: 'The Source & Summit',
    title: 'The Eucharist',
    meta: 'The central mystery of Catholic faith',
    img: 'img/eucharist.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'The central mystery of Catholic faith', body:'Not a symbol. Not a memorial. Catholics believe the Eucharist is the literal Body, Blood, Soul, and Divinity of Jesus Christ — present at every Mass worldwide, every single day.' },

      { type:'accordion', eyebrow:'Teaching', title:'What the Church Teaches', subtitle:'Start here', open:true, blocks:[
      { type:'h', text:'Transubstantiation' },
      { type:'p', text:'At the words of consecration during Mass, the substance of bread and wine become the substance of Christ\'s Body and Blood. The appearance — taste, texture, smell — remains bread and wine. The reality is Christ Himself.' },
      { type:'h', text:'What Jesus Said — John 6' },
      { type:'quote', text:'My flesh is real food and my blood is real drink. Whoever eats my flesh and drinks my blood remains in me and I in them.', cite:'John 6:55–56' },
      { type:'p', text:'When people walked away because this was too hard, He did not say "I was speaking metaphorically." He turned to the Twelve and said: "Will you also go?" He meant it literally.' },
      { type:'quote', text:'The time you spend with Jesus in the Blessed Sacrament is the best time you will spend on earth.', cite:'St. Mother Teresa' }
      ]},

      { type:'accordion', eyebrow:'Miracles', title:'12 Documented Eucharistic Miracles', subtitle:'Across centuries and continents', blocks:[
      { type:'subsection', title:'Lanciano, Italy', subtitle:'750 AD · The first scientifically examined miracle', blocks:[
        { type:'p', text:'A monk doubting the Real Presence watched the host transform into flesh and the wine into blood at the moment of consecration. The blood coagulated into five pellets — each weighing the same as all five together, a mathematical impossibility.' },
        { type:'callout', tone:'gold', title:'Scientific Analysis — 1970', body:'Human cardiac tissue (myocardium — heart muscle). Blood type AB. No preservatives. No decay after 1,250 years. Tissue shows signs of traumatic death. Both flesh and blood from the same person.' },
        { type:'p', text:'Still exists — Church of San Francesco, Lanciano, Italy. You can visit it.' }
      ]},

      { type:'subsection', title:'Bolsena-Orvieto, Italy', subtitle:'1263 AD · Caused the Feast of Corpus Christi', blocks:[
        { type:'p', text:'A priest doubting the Real Presence watched the host bleed profusely onto the altar linen during Mass. He ran immediately to Pope Urban IV who was staying nearby. This miracle directly caused Pope Urban IV to institute the Feast of Corpus Christi for the entire Church in 1264.' },
        { type:'p', text:'The blood-stained linen is on display in the Cathedral of Orvieto, Italy.' }
      ]},

      { type:'subsection', title:'Santarém, Portugal', subtitle:'1247 AD · Continues bleeding to this day', blocks:[
        { type:'p', text:'A woman tried to steal a consecrated host to give to a sorceress. The host began bleeding in her hands in the street. She hid it at home — that night her room was filled with brilliant light emanating from the cloth. She confessed and returned it to the Church. The host has continued bleeding periodically throughout the centuries, witnessed by thousands.' }
      ]},

      { type:'subsection', title:'Amsterdam, Netherlands', subtitle:'1345 AD · Survived a fire intact', blocks:[
        { type:'p', text:'A dying man vomited up his Communion. Per priest\'s instructions, the family cast it into the fireplace. The next morning the host was found sitting in the flames — completely intact and unharmed. It was retrieved and became the basis for Amsterdam\'s greatest pilgrimage. The annual Silent Procession still takes place every March.' }
      ]},

      { type:'subsection', title:'Siena, Italy', subtitle:'1730 AD · Hosts that never decayed', blocks:[
        { type:'p', text:'Robbers stole over 300 consecrated hosts. Two days later they were found dirty and cobwebbed in another church. Priests set them aside to deteriorate naturally. Decades passed. Then a century. Then almost three centuries. The hosts never decayed. They appear fresh to this day.' },
        { type:'callout', tone:'gold', title:'Testing', body:'Scientists have confirmed no signs of organic decomposition despite nearly 300 years. Normal bread disintegrates within months. Still exists — Basilica of St. Francis, Siena, Italy.' }
      ]},

      { type:'subsection', title:'Buenos Aires, Argentina', subtitle:'1992–1996 · Investigated by Cardinal Bergoglio', blocks:[
        { type:'p', text:'Three incidents over four years at the same parish. Discarded hosts placed in water to dissolve instead transformed into a reddish substance. Overseen by Cardinal Jorge Mario Bergoglio — later Pope Francis — who personally authorized the scientific analysis.' },
        { type:'callout', tone:'gold', title:'Scientific Analysis', body:'Dr. Ricardo Castañón Gómez: human cardiac tissue (left ventricle), blood type AB, white blood cells actively functioning — tissue was still alive. Scientists could not obtain DNA profile despite living tissue — described as scientifically inexplicable. Results matched Lanciano (750 AD).' }
      ]},

      { type:'subsection', title:'Tixtla, Mexico', subtitle:'2006 · One of the most thoroughly investigated miracles in history', blocks:[
        { type:'p', text:'During Communion, a religious sister noticed the host she held began emitting a reddish substance. Two priests witnessed it. The host was secured immediately and examined over three years by experts from four continents.' },
        { type:'callout', tone:'gold', title:'Scientific findings', body:'Human blood confirmed (hemoglobin), blood type AB (matching Lanciano and Buenos Aires). Living cardiac muscle — left ventricular myocardium. White blood cells were actively functioning. Re-examined years later — still shows signs of life. No DNA profile obtainable despite tissue being alive — described as scientifically baffling. Bishop declared it a Eucharistic miracle October 12, 2013 with 19 appendices of lab reports.' }
      ]},

      { type:'subsection', title:'Sokółka, Poland', subtitle:'2008 · Bread and flesh fused at the molecular level', blocks:[
        { type:'p', text:'A host dropped during Mass was placed in water to dissolve. One week later the sacristan opened the safe and smelled bread — and found red stains on the host. It was kept in the tabernacle for three years before analysis.' },
        { type:'callout', tone:'gold', title:'Scientific Analysis', body:'Medical professors at University of Białystok: human cardiac muscle "as if taken from the heart of a living person in agony." Electron microscopy revealed the bread molecules and cardiac tissue were fused at the microscopic level — down to the myofibril filaments. This is scientifically impossible by any known natural process. Results matched Lanciano, Buenos Aires, and Tixtla.' }
      ]},

      { type:'subsection', title:'Legnica, Poland', subtitle:'2013 · Vatican-recognized', blocks:[
        { type:'p', text:'On Christmas Day 2013, a host fell during Communion and was placed in water to dissolve. Instead, red stains formed. Independent laboratories from multiple institutions were commissioned.' },
        { type:'callout', tone:'gold', title:'Vatican Recognition', body:'Forensic Medicine in Szczecin: "cross-striated muscle fragments most similar to heart muscle with alterations typical of agony." Human DNA confirmed. Results presented to the Vatican\'s Congregation for the Doctrine of the Faith, which recognized the supernatural nature of the event — one of the most recently Vatican-acknowledged miracles.' }
      ]},

      { type:'callout', tone:'gold', title:'The Pattern', body:'Across Lanciano (750 AD), Buenos Aires (1992–96), Tixtla (2006), Sokółka (2008), and Legnica (2013) — separated by centuries and continents — scientists independently found: human cardiac tissue, left ventricular myocardium, blood type AB, signs of trauma and agony, living cells. <strong>Blood type AB is most common in the Middle East — the region of Jesus\'s earthly life.</strong>' }
      ]},

      { type:'accordion', eyebrow:'Consecration', title:'What Happens at the Consecration', subtitle:'The most important moment', blocks:[
      { type:'p', text:'The Consecration is the moment during the Mass when the bread and wine become the Body and Blood of Jesus Christ. It is not a reenactment of the Last Supper. It is not a symbol. The Church teaches it is a <strong>making present</strong> of the one sacrifice of Calvary — the same sacrifice, mystically present at every Mass, everywhere in the world, every day.' },
      { type:'p', text:'The priest says the words Jesus said at the Last Supper: <em>"This is my Body"</em> and <em>"This is my Blood."</em> At that moment the substance of the bread and wine changes entirely — what remains is the accidents (appearance, taste, texture) but the reality underneath is now Christ Himself. This is what the Church calls <strong>Transubstantiation</strong> — the most precise theological term for the most astonishing event in the universe.' },
      { type:'callout', tone:'rose', title:'Why it matters', body:'If this is true — and the Church says it is — then every Mass is the most important event happening on earth at that moment. More important than any news headline, any political event, any earthly drama. The Creator of the universe is making Himself physically present and offering Himself for the sins of the world. Every. Single. Day.' },

      { type:'prayer', label:'At the Elevation of the Host', text:'Take this, all of you, and eat of it, for this is my Body, which will be given up for you.' },
      { type:'prayer', label:'At the Elevation of the Chalice', text:'Take this, all of you, and drink from it, for this is the chalice of my Blood, the Blood of the new and eternal covenant, which will be poured out for you and for many for the forgiveness of sins. Do this in memory of me.' }
      ]},

      { type:'accordion', eyebrow:'Receiving', title:'How to Receive Holy Communion', subtitle:'What to know before you go', blocks:[
      { type:'p', text:'Receiving Communion is not a generic welcome gesture. It is a statement of full belief in everything the Catholic Church teaches — including the Real Presence. Here is what the Church requires and why:' },
      { type:'list', items:[
        '<strong>Be baptized Catholic or received into full communion.</strong> Communion is the completion of initiation — it is received by those who have already entered the Church through Baptism and Confirmation.',
        '<strong>Be in a state of grace — no unconfessed mortal sin.</strong> St. Paul warns: "Whoever eats the bread or drinks the cup of the Lord in an unworthy manner will be guilty of sinning against the Body and Blood of the Lord" (1 Cor 11:27). If you are aware of a mortal sin, go to Confession first.',
        '<strong>Fast for one hour before receiving.</strong> No food or drink (water and medicine are fine) for one hour before Communion. A small act of reverence that says: I am about to receive Someone.',
        '<strong>Approaching:</strong> Walk forward reverently. Make a bow of the head as the person before you receives. When the minister says "The Body of Christ" — respond "Amen." That Amen is your personal act of faith in the Real Presence.',
        '<strong>On the hand or tongue — both are valid.</strong> On the hand: extend both hands, one supporting the other like a throne. Receive. Step aside and consume immediately — do not walk away holding it. On the tongue: tilt your head back slightly and extend your tongue. The minister places the host.',
        '<strong>Return to your pew and pray.</strong> This is the most intimate moment in Catholic life — God Himself is physically present inside you. The time immediately after receiving is one of the most powerful prayer moments available to a human being. Don\'t reach for your phone.'
      ]},
      { type:'callout', tone:'gold', title:'If you are not Catholic', body:'You are still completely welcome at Mass. Come, observe, pray, receive a blessing by crossing your arms over your chest when you approach the Communion line. You are not excluded from God\'s house. You are just not yet at the table.' }
      ]},

      { type:'accordion', eyebrow:'Spiritual Communion', title:'Spiritual Communion', subtitle:'When you cannot receive', blocks:[
      { type:'p', text:'When you cannot receive the Eucharist physically — because you are ill, homebound, in a state of sin before Confession, or attending a non-Catholic service — the Church offers Spiritual Communion. It is a prayer expressing your desire to receive Jesus, and the Church teaches it brings real grace.' },
      { type:'prayer', label:'Prayer of Spiritual Communion · St. Alphonsus Liguori',
        text:'My Jesus, I believe that You are present in the Most Holy Sacrament. I love You above all things, and I desire to receive You into my soul. Since I cannot at this moment receive You sacramentally, come at least spiritually into my heart. I embrace You as if You were already there and unite myself wholly to You. Never permit me to be separated from You. Amen.' }
      ]},

      { type:'accordion', eyebrow:'The Mass', title:'What Is Actually Happening at Mass', subtitle:'The full picture', blocks:[
      { type:'p', text:'The Mass is not a service. It is not a lecture or a community gathering. It is a <strong>sacrifice</strong> — the same sacrifice of Calvary, made present through time. Every Mass is Calvary. The priest acts in the person of Christ (<em>in persona Christi</em>). The congregation participates in the eternal offering of the Son to the Father.' },
      { type:'list', items:[
        '<strong>Liturgy of the Word</strong> — Scripture readings, Psalm, Gospel, Homily. God speaks. You listen.',
        '<strong>Liturgy of the Eucharist</strong> — Offertory, Consecration, Communion. Heaven touches earth.',
        '<strong>Creed</strong> — The congregation declares what they believe together.',
        '<strong>Gloria</strong> — The song the angels sang at the Nativity — sung at Mass every Sunday.',
        '<strong>Sanctus</strong> — Holy, Holy, Holy. Isaiah 6 — the song sung before God\'s throne. You sing it at Mass.',
        '<strong>Dismissal · Ite, Missa Est</strong> — "Go, it is the sending." You are sent — not just dismissed. That\'s where "Mass" comes from.'
      ]},
      { type:'callout', tone:'gold', title:'The obligation', body:'Catholics are obligated to attend Mass every Sunday and Holy Day of Obligation. Not because God needs the attendance — but because <em>you</em> need what Mass provides. Missing Mass without serious reason is a mortal sin — not because God is punitive but because it signals that something has become more important to you than God Himself. That is the real issue.' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // EUCHARISTIC MIRACLES — standalone page
  // ────────────────────────────────────────────────────────
  'miracle-eucharist': {
    eyebrow: 'Miracles',
    title: 'Eucharistic Miracles',
    meta: '12 documented · Scientifically examined',
    img: 'img/eucharist-miracle.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'The central mystery of Catholic faith', body:'Not a symbol. Not a memorial. Catholics believe the Eucharist is the literal Body, Blood, Soul, and Divinity of Jesus Christ — present at every Mass worldwide, every single day.' },

      { type:'sectionLabel', text:'— 12 Documented Eucharistic Miracles —' },

      { type:'accordion', eyebrow:'1', title:'Lanciano, Italy', subtitle:'750 AD · The first scientifically examined miracle', open:true, blocks:[
        { type:'p', text:'A monk doubting the Real Presence watched the host transform into flesh and the wine into blood at the moment of consecration. The blood coagulated into five pellets — each weighing the same as all five together, a mathematical impossibility.' },
        { type:'callout', tone:'gold', title:'Scientific Analysis — 1970', body:'Human cardiac tissue (myocardium — heart muscle). Blood type AB. No preservatives. No decay after 1,250 years. Tissue shows signs of traumatic death. Both flesh and blood from the same person.' },
        { type:'p', text:'Still exists — Church of San Francesco, Lanciano, Italy. You can visit it.' }
      ]},

      { type:'accordion', eyebrow:'2', title:'Bolsena-Orvieto, Italy', subtitle:'1263 AD · Caused the Feast of Corpus Christi', blocks:[
        { type:'p', text:'A priest doubting the Real Presence watched the host bleed profusely onto the altar linen during Mass. He ran immediately to Pope Urban IV who was staying nearby. This miracle directly caused Pope Urban IV to institute the Feast of Corpus Christi for the entire Church in 1264.' },
        { type:'p', text:'The blood-stained linen is on display in the Cathedral of Orvieto, Italy.' }
      ]},

      { type:'accordion', eyebrow:'3', title:'Santarém, Portugal', subtitle:'1247 AD · Continues bleeding to this day', blocks:[
        { type:'p', text:'A woman tried to steal a consecrated host to give to a sorceress. The host began bleeding in her hands in the street. She hid it at home — that night her room was filled with brilliant light emanating from the cloth. She confessed and returned it to the Church. The host has continued bleeding periodically throughout the centuries, witnessed by thousands.' }
      ]},

      { type:'accordion', eyebrow:'4', title:'Amsterdam, Netherlands', subtitle:'1345 AD · Survived a fire intact', blocks:[
        { type:'p', text:'A dying man vomited up his Communion. Per the priest\'s instructions, the family cast it into the fireplace. The next morning the host was found sitting in the flames — completely intact and unharmed. It was retrieved and became the basis for Amsterdam\'s greatest pilgrimage. The annual Silent Procession still takes place every March.' }
      ]},

      { type:'accordion', eyebrow:'5', title:'Siena, Italy — Incorrupt Hosts', subtitle:'1730 AD · Hosts that never decayed', blocks:[
        { type:'p', text:'Robbers stole over 300 consecrated hosts. Two days later they were found dirty and cobwebbed in another church. Priests set them aside to deteriorate naturally. Decades passed. Then a century. Then almost three centuries. The hosts never decayed. They appear fresh to this day.' },
        { type:'callout', tone:'gold', title:'Testing', body:'Scientists have confirmed no signs of organic decomposition despite nearly 300 years. Normal bread disintegrates within months. Still exists — Basilica of St. Francis, Siena, Italy.' }
      ]},

      { type:'accordion', eyebrow:'6', title:'Cascia, Italy — The Bleeding Breviary', subtitle:'14th Century', blocks:[
        { type:'p', text:'A priest was reading his breviary when a host he had reserved slipped and fell into the book\'s pages. When he retrieved it, blood had soaked into the pages in the exact shape of the host. The breviary is preserved to this day in the Basilica of St. Rita, Cascia, Italy — the blood stain visible after seven centuries.' }
      ]},

      { type:'accordion', eyebrow:'7', title:'Rimini, Italy — The Mule\'s Adoration', subtitle:'1227 AD · St. Anthony\'s miracle', blocks:[
        { type:'p', text:'St. Anthony of Padua was debating a heretic who denied the Real Presence. The heretic said he would believe if his mule — starved for three days — would adore the Eucharist rather than eat a bucket of grain placed before it. St. Anthony brought the Blessed Sacrament. The mule ignored the grain, knelt, and bowed its head before the host. The heretic converted.' }
      ]},

      { type:'accordion', eyebrow:'8', title:'Buenos Aires, Argentina', subtitle:'1992–1996 · Investigated by Cardinal Bergoglio', blocks:[
        { type:'p', text:'Three incidents over four years at the same parish. Discarded hosts placed in water to dissolve instead transformed into a reddish substance. Overseen by Cardinal Jorge Mario Bergoglio — later Pope Francis — who personally authorized the scientific analysis.' },
        { type:'callout', tone:'gold', title:'Scientific Analysis', body:'Dr. Ricardo Castañón Gómez: human cardiac tissue (left ventricle), blood type AB, white blood cells actively functioning — tissue was still alive. Scientists could not obtain a DNA profile despite living tissue — described as scientifically inexplicable. Results matched Lanciano (750 AD).' }
      ]},

      { type:'accordion', eyebrow:'9', title:'Chirattakonam, India', subtitle:'2001', blocks:[
        { type:'p', text:'During Mass, a host began to emit a reddish fluid visible to the priest and multiple witnesses. The event was documented and the host preserved. Part of a growing pattern of Eucharistic miracles occurring in the modern era across multiple continents — each independently examined.' }
      ]},

      { type:'accordion', eyebrow:'10', title:'Tixtla, Mexico', subtitle:'2006 · One of the most thoroughly investigated miracles in history', blocks:[
        { type:'p', text:'During Communion, a religious sister noticed the host she held began emitting a reddish substance. Two priests witnessed it. The host was secured immediately and examined over three years by experts from four continents.' },
        { type:'callout', tone:'gold', title:'Scientific Findings', body:'Human blood confirmed (hemoglobin), blood type AB (matching Lanciano and Buenos Aires). Living cardiac muscle — left ventricular myocardium. White blood cells were actively functioning. Re-examined years later — still shows signs of life. No DNA profile obtainable despite tissue being alive — described as scientifically baffling. Bishop declared it a Eucharistic miracle October 12, 2013 with 19 appendices of lab reports.' }
      ]},

      { type:'accordion', eyebrow:'11', title:'Sokółka, Poland', subtitle:'2008 · Bread and flesh fused at the molecular level', blocks:[
        { type:'p', text:'A host dropped during Mass was placed in water to dissolve. One week later the sacristan opened the safe and found red stains on the host. It was kept in the tabernacle for three years before analysis.' },
        { type:'callout', tone:'gold', title:'Scientific Analysis', body:'Medical professors at University of Białystok: human cardiac muscle "as if taken from the heart of a living person in agony." Electron microscopy revealed the bread molecules and cardiac tissue were fused at the microscopic level — down to the myofibril filaments. This is scientifically impossible by any known natural process. Results matched Lanciano, Buenos Aires, and Tixtla.' }
      ]},

      { type:'accordion', eyebrow:'12', title:'Legnica, Poland', subtitle:'2013 · Vatican-recognized', blocks:[
        { type:'p', text:'On Christmas Day 2013, a host fell during Communion and was placed in water to dissolve. Instead, red stains formed. Independent laboratories from multiple institutions were commissioned.' },
        { type:'callout', tone:'gold', title:'Vatican Recognition', body:'Forensic Medicine in Szczecin: "cross-striated muscle fragments most similar to heart muscle with alterations typical of agony." Human DNA confirmed. Results presented to the Vatican\'s Congregation for the Doctrine of the Faith, which recognized the supernatural nature of the event — one of the most recently Vatican-acknowledged miracles.' }
      ]},

      { type:'callout', tone:'gold', title:'The Pattern', body:'Across Lanciano (750 AD), Buenos Aires (1992–96), Tixtla (2006), Sokółka (2008), and Legnica (2013) — separated by centuries and continents — scientists independently found: human cardiac tissue, left ventricular myocardium, blood type AB, signs of trauma and agony, living cells. <strong>Blood type AB is most common in the Middle East — the region of Jesus\'s earthly life.</strong>' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // SACRAMENTS — overview of all 7
  // ────────────────────────────────────────────────────────
  'sacraments': {
    eyebrow: 'The Seven Sacraments',
    title: 'The Sacraments',
    meta: 'Seven channels of divine life',
    img: 'img/sacraments.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'Jesus instituted all 7 sacraments', body:'Each one is a real, physical encounter with God — not a symbol, not a ceremony. A channel of divine life that produces actual grace in your soul. Think of them as 7 doors God opened so He could always reach you.' },

      { type:'accordion', eyebrow:'Overview', title:'The 7 Sacraments at a Glance', subtitle:'Start here', open:true, blocks:[
        { type:'list', items:[
          '<strong>Initiation · Baptism</strong> — Born into God\'s family',
          '<strong>Initiation · Eucharist</strong> — You receive Jesus Himself',
          '<strong>Initiation · Confirmation</strong> — Holy Spirit fully received',
          '<strong>Healing · Confession</strong> — Sins completely forgiven',
          '<strong>Healing · Anointing of the Sick</strong> — Healing in suffering',
          '<strong>Vocation · Marriage</strong> — Love as God loves',
          '<strong>Vocation · Holy Orders</strong> — Ordained to serve'
        ]},
        { type:'callout', tone:'gold', title:'The deepest truth', body:'Every sacrament is an encounter with the same Person — Jesus Christ. The water of Baptism is His hands. The bread is His Body. The words of absolution are His voice. The sacraments are Christ\'s gift — seven specific ways He promised to always be physically present and accessible to His people until the end of time.' }
      ]},

      { type:'accordion', eyebrow:'1 · Initiation', title:'Baptism — The Door', subtitle:'Given once', blocks:[
        { type:'quote', text:'No one can enter the Kingdom of God unless they are born of water and the Spirit.', cite:'John 3:5' },
        { type:'h', text:'What Happens — 7 things simultaneously' },
        { type:'list', items:[
          'Original sin completely washed away',
          'You become a literal child of God — adopted into the Trinity',
          'The Holy Spirit enters your soul',
          'You become a member of the universal Church',
          'You are clothed in Christ — He becomes your identity',
          'You receive the light of Christ',
          'An indelible permanent mark placed on your soul — never undone, never repeated'
        ]},
        { type:'callout', tone:'blue', title:'Plain English', body:'Baptism is spiritual birth. Before it you exist physically but not in God\'s family. After it you are His child. Just as you cannot be un-born physically, you cannot be un-baptized spiritually. The mark is permanent. You can wander far — but that mark always calls you home.' }
      ]},

      { type:'accordion', eyebrow:'2 · Initiation', title:'Eucharist — The Source & Summit', subtitle:'Every Mass', blocks:[
        { type:'quote', text:'My flesh is real food and my blood is real drink. Whoever eats my flesh and drinks my blood remains in me and I in them.', cite:'John 6:55–56' },
        { type:'p', text:'At the words of consecration during Mass, through <strong>Transubstantiation</strong>, the bread and wine become the actual Body, Blood, Soul, and Divinity of Jesus Christ. The appearance stays bread and wine. The reality is Christ Himself — fully present.' },
        { type:'list', items:[
          'You receive Jesus Himself — not a symbol, the living Person',
          'Unites you more deeply with Christ and His Church',
          'Forgives everyday (venial) sins',
          'Nourishes your soul the way food feeds your body',
          'Must be in a state of grace — no unconfessed mortal sin — before receiving'
        ]},
        { type:'callout', tone:'gold', title:'Plain English', body:'When you receive Communion you are not eating bread to remember Jesus. You are receiving Jesus — His actual self, entering your body. This is why Catholics kneel, why they bow, why the church goes silent. The most powerful Person in the universe just entered you. That deserves awe.' }
      ]},

      { type:'accordion', eyebrow:'3 · Initiation', title:'Confirmation — The Seal', subtitle:'Given once', blocks:[
        { type:'quote', text:'You will receive power when the Holy Spirit comes on you.', cite:'Acts 1:8' },
        { type:'p', text:'The Bishop anoints your forehead with chrism oil: <em>"Be sealed with the gift of the Holy Spirit."</em> You respond: <em>"Amen."</em> The same Spirit who came on the apostles at Pentecost comes to you in fullness.' },
        { type:'h', text:'The 7 Gifts of the Holy Spirit You Receive' },
        { type:'rolegrid', items:[
          { title:'Wisdom',           body:'See life from God\'s perspective' },
          { title:'Understanding',    body:'Grasp the faith more deeply' },
          { title:'Knowledge',        body:'Know God and His will' },
          { title:'Counsel',          body:'Make right decisions' },
          { title:'Fortitude',        body:'Courage to live the faith' },
          { title:'Piety',            body:'Deep reverence for God' },
          { title:'Fear of the Lord', body:'Awe before God\'s majesty' }
        ]}
      ]},

      { type:'accordion', eyebrow:'4 · Healing', title:'Confession — The Bath of the Soul', subtitle:'As often as needed', blocks:[
        { type:'quote', text:'Whose sins you forgive are forgiven them, and whose sins you retain are retained.', cite:'John 20:23' },
        { type:'p', text:'You confess sins to a priest who acts in the Person of Christ. He pronounces absolution. The sins are gone — completely. As if they never happened.' },
        { type:'h', text:'Two Types of Sin' },
        { type:'list', items:[
          '<strong>🔴 Mortal sin</strong> — grave matter + done knowingly + done freely. Completely breaks friendship with God. Must be confessed before receiving Communion.',
          '<strong>🟡 Venial sin</strong> — lesser sins that weaken but don\'t destroy your relationship with God. Forgiven through Confession or through Mass.'
        ]},
        { type:'callout', tone:'sage', title:'The Seal of Confession', body:'A priest may NEVER reveal what is said in Confession — under any threat, including death. This absolute seal has held for 2,000 years. What you say stays between you, the priest, and God. Period.' }
      ]},

      { type:'accordion', eyebrow:'5 · Healing', title:'Anointing of the Sick — The Comfort Sacrament', subtitle:'Any serious illness', blocks:[
        { type:'quote', text:'Is anyone among you sick? Let them call the elders of the Church to pray over them and anoint them with oil in the name of the Lord.', cite:'James 5:14' },
        { type:'list', items:[
          'Supernatural peace and courage in illness',
          'Can bring physical healing if it is God\'s will',
          'Forgives sins — critical if the person cannot speak',
          'Unites the person\'s suffering with Christ\'s on the Cross',
          'Prepares the soul for death if approaching'
        ]},
        { type:'callout', tone:'sage', title:'Not only for the dying', body:'Request it before surgery, at the start of serious illness, for chronic conditions. The old name "Last Rites" was misleading. Ask proactively — don\'t wait until the final hours.' }
      ]},

      { type:'accordion', eyebrow:'6 · Vocation', title:'Marriage — The Covenant Sacrament', subtitle:'Given once', blocks:[
        { type:'quote', text:'The two will become one flesh. This is a profound mystery — but I am talking about Christ and the Church.', cite:'Ephesians 5:31–32' },
        { type:'p', text:'Marriage between two baptized Catholics is a sacrament — a living, visible sign of the love between Christ and His Church. <strong>The couple themselves are the ministers</strong> — they give the sacrament to each other through their vows. The priest is the Church\'s official witness.' },
        { type:'list', items:[
          '<strong>💍 Unity</strong> — one man and one woman, exclusively',
          '<strong>♾️ Indissolubility</strong> — permanent. A valid Catholic marriage cannot be dissolved.',
          '<strong>🌱 Openness to life</strong> — children are a gift to be welcomed'
        ]}
      ]},

      { type:'accordion', eyebrow:'7 · Vocation', title:'Holy Orders — The Servant Sacrament', subtitle:'Once per degree', blocks:[
        { type:'quote', text:'I remind you to fan into flame the gift of God, which is in you through the laying on of my hands.', cite:'2 Timothy 1:6' },
        { type:'p', text:'The bishop lays hands on the man\'s head in complete silence. This gesture goes back in an unbroken line to the apostles, to Christ Himself. The three degrees:' },
        { type:'list', items:[
          '<strong>Deacon</strong> — baptizes, witnesses marriages, preaches, distributes Communion. Permanent deacons can be married.',
          '<strong>Priest</strong> — celebrates Mass, hears Confession, anoints the sick. Acts "in persona Christi." Latin Rite priests take a vow of celibacy.',
          '<strong>Bishop</strong> — fullness of Holy Orders. Successor to the apostles. Can ordain. The unbroken line of bishops from Peter to today is called <strong>Apostolic Succession</strong>.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Summary', title:'What All 7 Cover Together', subtitle:'The full picture', blocks:[
        { type:'list', items:[
          '<strong>Baptism</strong> — Life. Born into God\'s family. Once.',
          '<strong>Eucharist</strong> — Food. Soul nourished. Regularly.',
          '<strong>Confirmation</strong> — Strength. Equipped for battle. Once.',
          '<strong>Confession</strong> — Healing. Restored and forgiven. As needed.',
          '<strong>Anointing</strong> — Comfort. God\'s grace in suffering. As needed.',
          '<strong>Marriage</strong> — Mission. Love as God loves. Once.',
          '<strong>Holy Orders</strong> — Service. Life given for others. Once per degree.'
        ]}
      ]},

      { type:'accordion', eyebrow:'Why Catholic', title:'Why Catholic — Not Just Christian?', subtitle:'The 6-step argument', blocks:[
        { type:'p', text:'Once you accept that Jesus is God, the next question is: which church did He actually found? This is the argument that moves people from generic Christianity to Catholic Christianity.' },
        { type:'list', items:[
          '<strong>Jesus founded a Church — not a book.</strong> He gave authority to Peter and the Apostles (Matthew 16, John 20, Luke 10). He never said "here is a Bible — figure it out." The Church existed for 300 years before the Bible was compiled. The Church decided which books were Scripture.',
          '<strong>That Church has a traceable line of succession.</strong> Pope Francis is the 266th successor of Peter. Every Catholic bishop can trace their ordination back to the Apostles through the laying on of hands. No other Christian body has this unbroken line.',
          '<strong>The 4 Marks narrow it down.</strong> Jesus said His Church would be One, Holy, Catholic (universal), and Apostolic (founded on Apostles). Check each one against every denomination. Only one body has claimed all four continuously for 2,000 years.',
          '<strong>The Eucharist is the decisive issue.</strong> Jesus said "This is my Body" — not "this represents my body." For the first 1,500 years of Christianity, every Christian believed in the Real Presence. The Protestant Reformation in 1517 introduced the idea of a symbolic Eucharist. The Catholic and Orthodox churches maintained the original teaching.',
          '<strong>Sola Scriptura is self-defeating.</strong> The Protestant principle that "Scripture alone" is the authority cannot itself be found in Scripture. It also requires a Church to tell you which books are Scripture — which 66 (Protestant) or 73 (Catholic) books belong. That decision was made by Catholic councils.',
          '<strong>The miracles follow the sacraments.</strong> Eucharistic miracles, healing at Lourdes and Knock, incorrupt saints — the physical, verifiable miracles of Christianity are overwhelmingly concentrated in the Catholic and Orthodox traditions, not in traditions that deny the sacraments.'
        ]},
        { type:'quote', text:'The Church is not a human society of people united by their natural sympathies, but the Body of Christ, in which all members, however different, must share the common life, complementing and helping one another precisely by their differences.', cite:'C.S. Lewis' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // REVELATION
  // ────────────────────────────────────────────────────────
  'revelation': {
    eyebrow: 'Scripture',
    title: 'The Book of Revelation',
    meta: 'Christ\'s victory revealed',
    img: 'img/revelation.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'rose', title:'The Book of Revelation (The Apocalypse)', body:'Written by St. John the Apostle around 95 AD while exiled on the island of Patmos. It is the final book of the Bible — and the most misunderstood. It is not a newspaper for the future. It is a vision of the ultimate victory of Christ over evil, written in symbolic language to encourage Christians under persecution.' },

      { type:'accordion', eyebrow:'Foundation', title:'What Revelation Actually Is', subtitle:'Start here', open:true, blocks:[
      { type:'h', text:'How the Catholic Church Reads It' },
      { type:'list', items:[
        '<strong>It uses symbolic language</strong> — numbers, beasts, colors, and cosmic events are symbols carrying deep spiritual meaning. They are not meant to be taken literally.',
        '<strong>It is about Christ\'s victory</strong> — the whole book is one long poem declaring that Jesus wins. Evil loses. This is already decided.',
        '<strong>It was written for persecuted Christians</strong> — to give them hope. The message: no matter how powerful evil looks right now, God is in control and you will not be abandoned.',
        '<strong>It is NOT a code to crack</strong> — the Church warns against using it to predict specific future events or dates. Many have tried. All have been wrong.',
        '<strong>It describes every age</strong> — the forces in Revelation (persecution, temptation, the struggle between good and evil) are active in every generation, not just a future one.'
      ]},
      { type:'callout', tone:'rose', title:'Key symbols to know', body:'Numbers are symbolic — 7 means completeness/perfection, 12 means God\'s people, 3½ means incompleteness or a time of trial, 1,000 means a very long time, 144,000 means ALL of God\'s people (12 × 12 × 1,000). Beasts represent evil empires. Babylon means Rome — or any corrupt worldly power. The Lamb always means Jesus.' }
      ]},

      { type:'accordion', eyebrow:'Structure', title:'What Happens — Chapter by Chapter', subtitle:'The full story', blocks:[
      { type:'subsection', title:'Part 1 — Letters to the 7 Churches', subtitle:'Chapters 1–3', blocks:[
        { type:'p', text:'Jesus appears to John in glory and dictates personal letters to seven specific churches in Asia Minor — Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, and Laodicea. Seven = all churches of all time. He speaks to each one directly: "I know your works. I know your struggles. I know where you are failing." Each letter ends with a personal promise to those who remain faithful.' },
        { type:'callout', tone:'rose', title:'What Jesus promises to those who endure', body:'The right to eat from the tree of life · Protection from the second death · Hidden manna and a white stone with a new secret name · Authority over nations · White garments and your name never erased from the Book of Life · To be made a pillar in God\'s temple forever · The right to sit on the throne with Christ.' }
      ]},

      { type:'subsection', title:'Part 2 — The Throne Room of Heaven', subtitle:'Chapters 4–5', blocks:[
        { type:'p', text:'John is taken up to Heaven and sees God on the throne — surrounded by 24 elders, 4 living creatures, and thousands of angels. There is a scroll sealed with 7 seals — the scroll of history. No one is found worthy to open it. Then the Lamb appears — Jesus, looking as if He had been slain. He is the only one worthy. All of Heaven erupts in worship.' },
        { type:'quote', text:'Worthy is the Lamb who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!', cite:'Revelation 5:12 — sung by ten thousand times ten thousand angels' }
      ]},

      { type:'subsection', title:'Part 3 — The 7 Seals, Trumpets & Bowls', subtitle:'Chapters 6–16', blocks:[
        { type:'p', text:'Three sets of seven judgments unfold — the 7 Seals, 7 Trumpets, and 7 Bowls. These are not sequential events happening one after another in the future. They are three overlapping visions of the same spiritual reality — God\'s justice working through history. Each set escalates in intensity and ends at the same point: the Second Coming.' },
        { type:'list', items:[
          '<strong>The 4 Horsemen</strong> — White (conquest), Red (war), Black (famine), Pale (death). These are not future predictions. They represent forces active in every age of human history.',
          '<strong>The 7 Trumpets</strong> — Echo the plagues of Egypt. God is calling the world to repentance through increasing difficulty, just as He called Pharaoh.',
          '<strong>The 7 Bowls</strong> — The final outpouring of God\'s justice. Evil receives the consequences it chose.'
        ]}
      ]},

      { type:'subsection', title:'Part 4 — The Woman, the Dragon & the Beast', subtitle:'Chapters 12–13', blocks:[
        { type:'p', text:'This is the heart of the book — the great cosmic battle behind human history made visible.' },
        { type:'list', items:[
          '<strong>The Woman clothed with the sun</strong> — Catholics identify her as Mary (who gave birth to Jesus), Israel (which gave birth to the Messiah), and the Church (the spiritual mother of all believers). All three are correct — the image holds all three meanings at once.',
          '<strong>The Red Dragon</strong> — Satan. He tries to devour the child (Jesus) at birth — this is Herod\'s massacre of the innocents. He fails. He then wages war on the woman\'s offspring — all who follow Christ.',
          '<strong>The Beast from the sea</strong> — Represents the Roman Empire at the time of writing, and by extension any oppressive worldly power that demands worship and persecutes the faithful. The number 666 means utter incompleteness — evil can never be whole.',
          '<strong>The False Prophet / Beast from the land</strong> — Represents false religion and propaganda that makes people worship earthly power instead of God.'
        ]}
      ]},

      { type:'subsection', title:'Part 5 — The Fall of Babylon', subtitle:'Chapters 17–18', blocks:[
        { type:'p', text:'Babylon the Great — the harlot drunk on the blood of martyrs — represents Rome. But also every civilization, system, or power that is built on exploitation, pride, and the persecution of God\'s people. She falls dramatically. Completely. Suddenly. Every empire that exalts itself against God collapses. This has happened throughout history — and will happen finally at the end.' },
        { type:'quote', text:'Fallen! Fallen is Babylon the Great!', cite:'Revelation 18:2 — The angel\'s announcement' }
      ]},

      { type:'subsection', title:'Part 6 — The Second Coming', subtitle:'Chapter 19', blocks:[
        { type:'p', text:'Heaven opens. A white horse appears. The rider is called Faithful and True — His name is the Word of God. The armies of Heaven follow Him. The beast and the false prophet are captured and thrown into the lake of fire. It is not a long battle. It is not even a contest. The Second Coming of Christ ends evil instantly.' },
        { type:'quote', text:'On His robe and on His thigh He has this name written: KING OF KINGS AND LORD OF LORDS.', cite:'Revelation 19:16' }
      ]},

      { type:'subsection', title:'Part 7 — The Last Judgment', subtitle:'Chapter 20', blocks:[
        { type:'p', text:'Satan is bound for a thousand years — a symbolic number meaning the entire age of the Church, from the Resurrection to the Second Coming. During this time he cannot deceive the nations. Near the end, he is released briefly — this is the final intensification of evil before Christ\'s return. Then comes the Last Judgment: every person who ever lived stands before God. The dead rise. Each soul is judged according to what they did. Death and Hades are thrown into the lake of fire. Satan is defeated permanently — not dead, but eternally separated from God\'s creation, with no more access to any soul.' }
      ]}
      ]},

      { type:'accordion', eyebrow:'The Destination', title:'The New Jerusalem — What God Promises', subtitle:'Chapters 21–22', blocks:[
      { type:'callout', tone:'blue', title:'Is it a literal city?', body:'No — and yes, in a deeper sense. The New Jerusalem is not a city on a map. It is the ultimate union of God and humanity — Heaven and Earth becoming permanently one. The old Jerusalem was where God\'s Temple stood — where Heaven and Earth met. The New Jerusalem is that same idea made complete and eternal. God\'s presence fully dwelling with all of creation forever with no more separation.' },

      { type:'prayer', label:'Revelation 21:1–5',
        text:'Then I saw a new heaven and a new earth; for the first heaven and the first earth had passed away. I saw the Holy City, the new Jerusalem, coming down out of heaven from God, prepared as a bride beautifully dressed for her husband.\n\nAnd I heard a loud voice from the throne saying: "Look! God\'s dwelling place is now among the people, and He will dwell with them. They will be His people, and God Himself will be with them and be their God.\n\nHe will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." He who was seated on the throne said: "I am making everything new."' },

      { type:'h', text:'What Each Promise Means' },
      { type:'list', items:[
        '<strong>"A new heaven and a new earth"</strong> — Not the destruction of creation but its complete renewal and restoration. The same world — but perfected, freed from sin, death, and corruption forever.',
        '<strong>"New Jerusalem coming DOWN from Heaven"</strong> — Important: it comes DOWN to earth. God comes to us. This is not humanity escaping up to somewhere else — it is God bringing Heaven to a renewed earth.',
        '<strong>"God will dwell WITH them"</strong> — Yes — God comes to live with His people. The ultimate answer to every human longing. Emmanuel — God with us — made permanent and complete.',
        '<strong>"He will wipe every tear from their eyes"</strong> — Every grief, every loss, every wound — personally wiped away by God Himself. Not forgotten — healed.',
        '<strong>"No more death"</strong> — The last enemy is destroyed. Death itself dies.',
        '<strong>"I am making everything new"</strong> — Not "I am making all new things." The same creation — renewed from within. Your body, relationships, memories — redeemed and made new, not replaced.'
      ]},
      { type:'h', text:'What Will No Longer Exist' },
      { type:'list', items:[
        'Death · Pain and suffering · Mourning and crying · Sin · Night · Tears',
        'The sun and moon are no longer needed — God Himself is the light.',
        'There is no temple — because God and the Lamb are the temple. No priest is needed to mediate. You see Him face to face.'
      ]}
      ]},

      { type:'accordion', eyebrow:'The Enemy', title:'Satan — What Catholics Actually Believe', subtitle:'Clear truth', blocks:[
      { type:'callout', tone:'rose', title:'Is the earth Satan\'s?', body:'No — but he has real influence over it. This is one of the most misunderstood ideas in all of Christianity. Here is the full truth.' },

      { type:'h', text:'Where the Idea Comes From' },
      { type:'p', text:'Jesus Himself called Satan "the prince of this world" (John 12:31). St. Paul called him "the god of this age" (2 Cor 4:4). When Satan tempted Jesus in the desert, he showed Him all the kingdoms of the world and said: "All this has been given to me — I can give it to whoever I want." Jesus did not dispute it.' },
      { type:'callout', tone:'rose', title:'But here is the crucial distinction', body:'Satan has <em>influence</em> over this world — not <em>ownership.</em> He gained that influence when humanity chose sin in the Garden of Eden. It was a usurpation — a hostile takeover, not a legitimate inheritance. The earth and everything in it belongs to God. Psalm 24:1 is clear: <em>"The earth is the Lord\'s and everything in it."</em> Satan is more like a squatter than an owner — he has real power, but borrowed, temporary, and already defeated at the Cross.' },

      { type:'h', text:'What Satan Actually Is' },
      { type:'list', items:[
        '<strong>A fallen angel</strong> — originally one of the highest angelic beings, called Lucifer (light-bearer). He chose pride over love — "I will not serve" — and was cast out of Heaven with the angels who followed him.',
        '<strong>Highly intelligent</strong> — far more intelligent than any human being. He studies each person and knows your weaknesses better than you do.',
        '<strong>Consumed by hatred and envy</strong> — he cannot love. He attacks humans out of envy — we are made in God\'s image and can receive what he permanently threw away.',
        '<strong>A deceiver above all</strong> — Jesus called him "the father of lies" (John 8:44). He rarely appears frightening. He appears as reason, comfort, good sense, and opportunity. "Did God really say…?"',
        '<strong>Already defeated</strong> — at the Cross, Jesus broke Satan\'s legal claim over humanity. Revelation 12 says Satan was thrown down. He still operates — but like a mortally wounded animal, not a conquering king.',
        '<strong>No power over a soul in God\'s grace</strong> — he can tempt, accuse, and harass — but he cannot take a soul that has chosen God. Period.'
      ]},

      { type:'h', text:'What Happens to Satan at the End' },
      { type:'p', text:'Revelation 20 describes Satan being thrown into the lake of fire — permanently. Not dead (angels are immortal beings) — but permanently exiled from God\'s creation forever. No more access. No more deception. No more accusation. No more temptation. He is finished.' },
      { type:'callout', tone:'rose', title:'His final status', body:'Satan is not God\'s equal — never was. He is a created being operating on a leash whose length God controls. He cannot do anything God does not permit. The story of Job shows this clearly — Satan had to ask God\'s permission before touching Job. He is powerful. He is real. But he is not God\'s rival. He is a defeated enemy serving out the final chapter of a war that was already won.' },

      { type:'h', text:'Do You HAVE to Believe in Satan?' },
      { type:'p', text:'Catholic teaching is clear — yes, the Church teaches that Satan is real. But your instinct to focus on God rather than Satan is exactly right and deeply wise. Here is how the saints handled it:' },
      { type:'list', items:[
        '<strong>St. Thérèse of Lisieux</strong> barely mentioned Satan in her writings. She focused entirely on love and trust in God. She said the best response to evil is running toward God like a child runs to a parent.',
        '<strong>St. Padre Pio</strong> said: "Do not fear Satan — fear only the loss of God."',
        '<strong>St. Augustine</strong> wrote: "Our heart is restless until it rests in Thee" — the entire cure for evil is filling yourself with God, leaving no room for the rest.',
        '<strong>The principle:</strong> Light doesn\'t fight darkness. It just turns on. A room filled with light has no darkness in it — not because darkness was defeated but because it was displaced. Fill yourself with God and evil loses its foothold.'
      ]},
      { type:'callout', tone:'rose', title:'The practical Catholic position on Satan', body:'<strong>Know he exists</strong> — so you\'re not naïve about the source of temptation.<br><strong>Acknowledge his work</strong> — so you recognize the patterns of deception.<br><strong>Don\'t fear him</strong> — he is a defeated enemy with no claim on a soul in God\'s grace.<br><strong>Don\'t obsess over him</strong> — you give power to what you feed your attention.<br><strong>Focus on God</strong> — this is your complete protection, your complete victory, and your complete peace.<br><br>You are doing this correctly.' },

      { type:'h', text:'Protection Against Evil' },
      { type:'prayer', label:'Prayer to St. Michael · Most Powerful Protection Prayer',
        text:'St. Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil. May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.' },
      { type:'prayer', label:'Simple Daily Protection',
        text:'Lord Jesus Christ, I belong to You. Cover me, my family, and all that I love with Your Precious Blood. Send Your angels to guard us. Let nothing that is not from You have any claim on us today. Amen.' }
      ]},

      { type:'accordion', eyebrow:'The Whole Story', title:'The Bible in One Paragraph', subtitle:'The ending', blocks:[
      { type:'p', text:'God created everything good. Humanity chose to turn away. Evil entered the world. God never abandoned His people — He sent prophets, made covenants, and finally sent His own Son. Jesus died and rose — breaking the power of sin and death permanently. The world is now in the in-between time — the battle looks fierce, but the outcome is already decided. At the end, Jesus returns, evil is permanently removed, the dead rise, every soul is judged, and God dwells with His people forever in a creation made entirely new. No more tears. No more death. No more separation from God. Forever.' },

      { type:'callout', tone:'sage', title:'Where are we in the story?', body:'Think of the Bible as a story in five acts:<br><br><strong>Act 1 — Creation:</strong> Everything good. God and humanity together. Eden.<br><strong>Act 2 — The Fall:</strong> Humanity turns away. Sin, death, and separation enter.<br><strong>Act 3 — Redemption (Old Testament):</strong> God pursuing His people. Prophets. Covenants. The long waiting.<br><strong>Act 4 — Jesus (Gospels + Church age):</strong> God comes Himself. Defeats sin and death. Sends the Spirit. The Church carries the message to all nations. <strong>This is where we are now.</strong><br><strong>Act 5 — Consummation (Revelation 21–22):</strong> Christ returns. Evil permanently ended. New creation. God with us. Forever.' },

      { type:'h', text:'The Last Words of the Bible' },
      { type:'prayer', label:'Revelation 22:20–21',
        text:'He who testifies to these things says: "Yes, I am coming soon."\n\nAmen. Come, Lord Jesus.\n\nThe grace of the Lord Jesus be with God\'s people. Amen.' },
      { type:'p', text:'The entire Bible — from Genesis to Revelation — ends with a prayer. Not a doctrine, not a rule, not a warning. A prayer. "Come, Lord Jesus." That is the heartbeat of the whole Christian faith.' },

      { type:'h', text:'What This Means for Daily Life' },
      { type:'list', items:[
        '<strong>You already know the ending</strong> — God wins. You are on the winning side. This is not wishful thinking — it is the settled declaration of the most powerful being in the universe.',
        '<strong>Suffering is not the end of the story</strong> — every pain, every loss, every injustice will be redeemed. Nothing that happened to you is wasted in God\'s hands.',
        '<strong>Your daily prayers matter eternally</strong> — Revelation 5:8 shows the prayers of the saints stored in golden bowls before God\'s throne. Every Rosary, every Mass, every whispered prayer in the dark — all of it is kept.',
        '<strong>How we live matters</strong> — the Last Judgment is real. Not to terrify but to clarify: what we do with the life and grace we are given has eternal weight. This is why daily examination of conscience matters.',
        '<strong>Mary\'s promise at Fatima connects directly to Revelation</strong> — "In the end, my Immaculate Heart will triumph." The Woman clothed with the sun in Revelation 12 is part of this. She is not afraid of the dragon. Neither should you be.'
      ]},
      { type:'quote', text:'Blessed is the one who reads aloud the words of this prophecy, and blessed are those who hear it and take to heart what is written in it, because the time is near.', cite:'Revelation 1:3 — The only book in the Bible that promises a blessing just for reading it' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // KEY SAINTS — most-asked-about
  // ────────────────────────────────────────────────────────
  'saints-canonization': {
    eyebrow: 'How Saints Are Made',
    title: 'How Someone Becomes a Saint',
    meta: 'The 5-stage process',
    gc: 'gc-saints',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'blue', title:'Intercession', body:'Catholics ask saints to carry prayers to God — friends confirmed to be in Heaven standing before Him face to face. Their intercession is powerful.' },
      { type:'list', items:[
        '<strong>Servant of God</strong> — bishop opens investigation after death.',
        '<strong>Venerable</strong> — Pope declares they lived heroic virtue.',
        '<strong>Blessed</strong> — one verified miracle through their intercession required.',
        '<strong>Saint</strong> — second miracle required; Pope formally declares them in Heaven.'
      ]},
      { type:'callout', tone:'blue', title:'Exception', body:'Martyrs who died for the faith can be beatified without a miracle. Their death is the witness.' }
    ]
  },

  'saint-joseph': {
    eyebrow: 'Saint',
    title: 'St. Joseph',
    meta: 'Patron of the Universal Church · Foster Father of Jesus',
    gc: 'gc-saints',
    blocks: [
      { type:'callout', tone:'blue', title:'His extraordinary status', body:'Joseph is the only person in Scripture called <em>dikaios</em> — just, righteous — meaning his entire inner life was aligned with God\'s will. Total interior alignment. Not just good behavior.' },
      { type:'sectionLabel', text:'His Impact on Jesus' },
      { type:'list', items:[
        'Jesus learned carpentry from Joseph — the hands that healed the blind were trained by his hands',
        'Jesus\'s understanding of fatherhood came from Joseph — "Our Father" was modeled on a father He knew',
        'Fled to Egypt overnight to protect Mary and Jesus from Herod — risked everything without hesitation',
        'Never spoke a single recorded word in Scripture. His entire legacy is action and silent faithfulness.'
      ]},
      { type:'sectionLabel', text:'His Power' },
      { type:'p', text:'He is <strong>Patron of the Universal Church</strong> — he intercedes for the entire Church. Also patron of fathers, workers, families, the dying, and a happy death. He died in the arms of Jesus and Mary — the Church calls this the most blessed death possible. Ask him to be present at deathbeds.' },
      { type:'quote', text:'Go to Joseph.', cite:'Genesis 41:55 — God\'s own instruction. The Church applies this to prayer: when you don\'t know what to do, go to Joseph.' },
      { type:'sectionLabel', text:'Ask St. Joseph For' },
      { type:'p', text:'Fathers & fatherhood · Family protection · Work & employment · Housing · A holy death · Conversion of loved ones · Quiet courage to do the right thing.' },
      { type:'prayer', label:'Prayer to St. Joseph',
        text:'O St. Joseph, whose protection is so great, so strong, so prompt before the throne of God, I place in you all my interests and desires. O St. Joseph, do assist me by your powerful intercession and obtain for me from your Divine Son all spiritual blessings through Jesus Christ, Our Lord. So that, having engaged here below your heavenly power, I may offer my thanksgiving and homage to the most loving of Fathers. Amen.' },
      { type:'prayer', label:'Memorare to St. Joseph',
        text:'Remember, O most chaste spouse of the Virgin Mary, that never was it known that anyone who implored your help and sought your intercession was left unaided. Inspired by this confidence, I fly unto you and beg your protection. Despise not my petition, O foster father of the Redeemer, but graciously receive it. Amen.' }
    ]
  },

  'saint-therese-full': {
    eyebrow: 'Saint',
    title: 'St. Thérèse of Lisieux',
    meta: 'The Little Flower · France, 1873–1897 · Doctor of the Church',
    gc: 'gc-saints',
    blocks: [
      { type:'sectionLabel', text:'The Little Way' },
      { type:'p', text:'Holiness is not for heroes only. Do small things with great love — wash the dishes, smile at the difficult person, offer small sufferings to God. That is enough. That is everything.' },
      { type:'quote', text:'Miss no single opportunity of making some small sacrifice — here by a smiling look, there by a kindly word — always doing the smallest right and doing it all for love.', cite:'St. Thérèse' },
      { type:'sectionLabel', text:'Her Promise' },
      { type:'p', text:'"I will spend my heaven doing good on earth — I will let fall a shower of roses." She sends roses as signs to those who ask her help. Look for them.' },
      { type:'prayer', label:'Prayer to St. Thérèse',
        text:'St. Thérèse of the Child Jesus, you said you would spend your heaven doing good on earth. Send me a shower of roses as a sign that my prayer is heard. Help me find holiness through the small, ordinary moments of each day. Amen.' }
    ]
  },

  'saint-padre-pio-full': {
    eyebrow: 'Saint',
    title: 'St. Padre Pio',
    meta: 'Italy, 1887–1968 · Stigmatist',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Bore the stigmata for 50 years. Verified bilocation, reading souls in Confession, thousands of healings. Over 100,000 letters from strangers seeking his prayers.' },
      { type:'quote', text:'Pray, hope, and don\'t worry. Worry is useless. God is merciful and will hear your prayer.', cite:'St. Padre Pio' },
      { type:'prayer', label:'Prayer to Padre Pio',
        text:'Dear Padre Pio, you bore the wounds of Christ and spent your life in prayer. Pray for me now, that I may trust in God\'s mercy and not give in to worry. Intercede for my intentions and help me grow closer to Jesus. Amen.' }
    ]
  },

  'saint-faustina': {
    eyebrow: 'Saint',
    title: 'St. Faustina Kowalska',
    meta: 'Apostle of Divine Mercy · Poland, 1905–1938',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Jesus appeared to her and gave the world the Divine Mercy devotion. No matter how great your sin, God\'s mercy is greater.' },
      { type:'quote', text:'I am Love and Mercy itself. Let no soul fear to draw near to Me, even though its sins be as scarlet.', cite:'Jesus to St. Faustina' },
      { type:'prayer', label:'Prayer to St. Faustina',
        text:'St. Faustina, apostle of Divine Mercy, pray for me that I may trust completely in Jesus\'s mercy. Help me believe that His mercy is greater than all my sins. Amen. Jesus, I trust in You.' }
    ]
  },

  'saint-monica': {
    eyebrow: 'Saint',
    title: 'St. Monica',
    meta: 'Mother of St. Augustine · 330–387 AD',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'She prayed and wept for her wayward son Augustine for <strong>17 years</strong> before his conversion. Patron of mothers with difficult children. Message: <strong>Never stop praying for your children. Never.</strong>' },
      { type:'prayer', label:'Prayer to St. Monica',
        text:'St. Monica, you persevered in prayer for Augustine for 17 years. Give me the same patient, faithful love. Help me never lose hope, never stop interceding, and trust that God hears every tear I cry for those I love. Amen.' }
    ]
  },

  'saint-magdalene': {
    eyebrow: 'Saint',
    title: 'St. Mary Magdalene',
    meta: 'Apostle to the Apostles · First witness of the Resurrection',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Jesus appeared to her first after the Resurrection — not to the apostles. Seven demons were cast out of her. She went from broken to the first herald of the greatest news in history. The message: no matter what your past, you can be the first to carry the Good News.' },
      { type:'prayer', label:'Prayer to St. Mary Magdalene',
        text:'St. Mary Magdalene, you were the first to witness the Risen Lord. Pray for me that I may have the courage to carry the Good News from wherever I stand. Remind me that Jesus seeks out those the world has forgotten. Amen.' }
    ]
  },

  'saint-francis-full': {
    eyebrow: 'Saint',
    title: 'St. Francis of Assisi',
    meta: 'Patron of Creation · Italy, 1181–1226',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Son of a wealthy merchant who renounced everything to serve the poor. Founded the Franciscan order. Received the stigmata. Patron of animals, ecology, and Italy.' },
      { type:'quote', text:'Preach the Gospel always. If necessary, use words.', cite:'Attributed to St. Francis' },
      { type:'prayer', label:'Prayer of St. Francis',
        text:'Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy.\n\nO Divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, it is in pardoning that we are pardoned, and it is in dying that we are born to eternal life. Amen.' }
    ]
  },

  'saint-augustine': {
    eyebrow: 'Saint',
    title: 'St. Augustine of Hippo',
    meta: 'Doctor of the Church · North Africa, 354–430',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Augustine is one of the most brilliant minds in all of human history and one of the most dramatic conversion stories in the Church. He lived a wild youth — he famously prayed "Lord, make me chaste — but not yet." He had a long-term mistress and an illegitimate son. He investigated Manichaeism, Neo-Platonism, and every major philosophy of his day before his mother St. Monica\'s 17 years of tears and prayers finally bore fruit. In 386 AD, reading Paul\'s letter to the Romans in a garden in Milan, he heard a child\'s voice saying "take and read" — and at the words "put on the Lord Jesus Christ," he was converted.' },
      { type:'callout', tone:'blue', title:'Why he matters', body:'Augustine\'s Confessions — written around 400 AD — is still the most widely read autobiography in Western history. His theological writings shaped virtually every major Christian tradition for 1,600 years.' },
      { type:'quote', text:'Our heart is restless, O Lord, until it rests in Thee.', cite:'St. Augustine, Confessions' }
    ]
  },

  'saint-aquinas-full': {
    eyebrow: 'Saint',
    title: 'St. Thomas Aquinas',
    meta: 'Doctor of the Church · 1225–1274 · The Angelic Doctor',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'The greatest theologian of the Middle Ages. His <em>Summa Theologica</em> synthesized faith and reason and remains one of the most important works of philosophy ever written. Aquinas taught at the University of Paris. He had mystical experiences so powerful that near the end of his life he stopped writing, saying "All I have written seems like straw compared to what has been revealed to me." Patron of students and Catholic schools.' },
      { type:'quote', text:'To one who has faith, no explanation is necessary. To one without faith, no explanation is possible.', cite:'St. Thomas Aquinas' }
    ]
  },

  'saint-anthony-padua': {
    eyebrow: 'Saint',
    title: 'St. Anthony of Padua',
    meta: 'Doctor of the Church · 1195–1231 · Patron of lost things',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Born Fernando in Lisbon, Anthony joined the Augustinian order as a teenager, then transferred to the Franciscans after being inspired by the martyrdom of five Franciscan missionaries in Morocco. He went to Morocco himself but fell gravely ill and was rerouted to Italy — where he was discovered accidentally at an ordination ceremony to have an extraordinary gift for preaching. St. Francis of Assisi called him "my bishop." He preached across France and Italy with such power that fish reportedly came to the surface of the water to listen when he preached on the shore.' },
      { type:'callout', tone:'gold', title:'Why he matters', body:'Anthony is one of the most beloved saints in history. He was canonized just 352 days after his death — the fastest in Church history. He is the patron of lost things because a novice once stole his psalter (prayer book) and Anthony prayed for its return — the novice was reportedly confronted by a terrifying vision and returned the book. He holds the record for number of churches named after him worldwide.' },
      { type:'p', text:'Patron of: Lost things and lost people · the poor · travelers · Portugal · Padua · pregnant women.' }
    ]
  },

  'saint-mother-teresa-full': {
    eyebrow: 'Saint',
    title: 'St. Teresa of Calcutta',
    meta: 'Mother Teresa · 1910–1997',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Founded the Missionaries of Charity. Served the poorest of the poor in the slums of India. Nobel Peace Prize 1979. Canonized 2016.' },
      { type:'p', text:'For nearly 50 years she experienced what she called the "darkness" — a profound spiritual dryness in which she felt completely abandoned by God, while continuing to serve Him in the dying and forgotten. She kept smiling. She kept working. The world saw radiant joy. Her diaries, published after her death, revealed she had felt nothing of God\'s presence for decades. She is the saint for those who serve God in spiritual darkness.' },
      { type:'quote', text:'Not all of us can do great things. But we can do small things with great love.', cite:'St. Teresa of Calcutta' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // PATRON SAINTS QUICK GUIDE
  // ────────────────────────────────────────────────────────
  'patron-saints': {
    eyebrow: 'Quick Reference',
    title: 'Patron Saints',
    meta: 'Who to ask for what',
    gc: 'gc-saints',
    hasAudio: false,
    blocks: [
      { type:'p', text:'Every person, every occupation, every cause — there is a saint who has been there. These are the patrons most commonly invoked.' },
      { type:'list', items:[
        '<strong>Universal Church</strong> — St. Joseph (March 19)',
        '<strong>Mothers</strong> — St. Monica (August 27)',
        '<strong>Fathers</strong> — St. Joseph (March 19)',
        '<strong>Children</strong> — St. Nicholas (December 6)',
        '<strong>Teenagers / Youth</strong> — St. Aloysius Gonzaga (June 21)',
        '<strong>Students</strong> — St. Thomas Aquinas (January 28)',
        '<strong>Doctors / Physicians</strong> — St. Luke the Evangelist (October 18)',
        '<strong>Nurses</strong> — St. Camillus de Lellis (July 14)',
        '<strong>Lawyers</strong> — St. Thomas More (June 22)',
        '<strong>Teachers</strong> — St. John Baptist de La Salle (April 7)',
        '<strong>Priests</strong> — St. John Vianney (August 4)',
        '<strong>Missionaries</strong> — St. Francis Xavier (December 3)',
        '<strong>Artists</strong> — St. Luke the Evangelist (October 18)',
        '<strong>Musicians</strong> — St. Cecilia (November 22)',
        '<strong>Writers / Journalists</strong> — St. Francis de Sales (January 24)',
        '<strong>Businesspeople</strong> — St. Homobonus (November 13)',
        '<strong>Builders / Construction</strong> — St. Thomas the Apostle (July 3)',
        '<strong>Travelers</strong> — St. Christopher / St. Raphael (July 25)',
        '<strong>Sick / Ill</strong> — St. Camillus / St. John of God (July 14)',
        '<strong>Healing</strong> — St. Raphael the Archangel (September 29)',
        '<strong>Mental health / Anxiety</strong> — St. Dymphna (May 15)',
        '<strong>Addiction</strong> — St. Maximilian Kolbe (August 14)',
        '<strong>Impossible causes</strong> — St. Jude the Apostle (October 28)',
        '<strong>Lost items</strong> — St. Anthony of Padua (June 13)',
        '<strong>Animals / Environment</strong> — St. Francis of Assisi (October 4)',
        '<strong>Against evil / spiritual warfare</strong> — St. Michael the Archangel (September 29)',
        '<strong>Dying / good death</strong> — St. Joseph (March 19)',
        '<strong>France</strong> — St. Joan of Arc (May 30)',
        '<strong>Italy</strong> — St. Francis of Assisi (October 4)',
        '<strong>Ireland</strong> — St. Patrick (March 17)',
        '<strong>Spain</strong> — St. James the Apostle (July 25)',
        '<strong>Poland</strong> — St. Stanislaus (April 11)',
        '<strong>Americas</strong> — Our Lady of Guadalupe (December 12)',
        '<strong>United States</strong> — Immaculate Conception (December 8)',
        '<strong>Victims of abuse</strong> — St. Maria Goretti (July 6)',
        '<strong>Widows</strong> — St. Paula (January 26)',
        '<strong>Converts</strong> — St. Augustine (August 28)',
        '<strong>Prisoners</strong> — St. Joseph Cafasso (June 23)',
        '<strong>Pregnant women</strong> — St. Gerard Majella (October 16)',
        '<strong>Infertility</strong> — St. Anne and St. Joachim (July 26)'
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // SAINTS LIBRARY — comprehensive A–Z reference
  // ────────────────────────────────────────────────────────
  'saints-library': {
    eyebrow: 'Reference',
    title: 'The Saints',
    meta: 'A–Z library · Lives that changed the world',
    gc: 'gc-saints',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'blue', title:'Intercession', body:'Catholics ask saints to carry prayers to God — friends confirmed to be in Heaven standing before Him face to face. Their intercession is powerful.' },

      { type:'accordion', eyebrow:'Process', title:'How Someone Becomes a Saint', subtitle:'5 stages', blocks:[
        { type:'list', items:[
          '<strong>Servant of God</strong> — bishop opens investigation after death',
          '<strong>Venerable</strong> — Pope declares they lived heroic virtue',
          '<strong>Blessed</strong> — one verified miracle through their intercession required',
          '<strong>Saint</strong> — second miracle required; Pope formally declares them in Heaven'
        ]},
        { type:'callout', tone:'blue', title:'Exception', body:'Martyrs who died for the faith can be beatified without a miracle. Their death is the witness.' }
      ]},

      { type:'sectionLabel', text:'A' },
      { type:'accordion', eyebrow:'c.291–304 · Jan 21', title:'St. Agnes of Rome', subtitle:'Virgin Martyr', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Agnes was a 12-year-old Roman girl of noble birth who had consecrated her virginity to Christ. When the son of a Roman prefect sought her hand in marriage, she refused — declaring she had already given herself to God. The rejected suitor reported her as a Christian to the authorities. She was subjected to torture and attempts to break her faith, including being sent to a brothel — where, the Church teaches, she was miraculously protected. She was eventually beheaded when no other means of execution succeeded.' },
        { type:'callout', tone:'rose', title:'Why she matters', body:'Agnes is one of the most beloved early martyrs — a child who chose death over compromise. Her name means "pure" in Latin and is close to the Latin word for lamb (agnus). She is almost always depicted with a lamb. She is the patron of girls, chastity, and rape survivors. Her feast on January 21st was celebrated with the blessing of two lambs whose wool was later woven into the vestments of bishops — a tradition that still continues.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Girls · chastity · rape survivors · Girl Scouts · engaged couples' }
      ]},

      { type:'accordion', eyebrow:'c.340–397 · Dec 7', title:'St. Ambrose of Milan', subtitle:'Doctor of the Church', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Ambrose was the governor of Milan when the local bishop died. Though he was not yet baptized, the crowd spontaneously began chanting his name to be the next bishop — including, reportedly, the voice of a child in the crowd. Within a week he was baptized, ordained through all the orders, and consecrated bishop. He gave away his entire fortune to the poor and became one of the greatest teachers in the history of the Church. He is the man who taught and baptized St. Augustine.' },
        { type:'callout', tone:'blue', title:'Why he matters', body:'Ambrose stood up to emperors. When Emperor Theodosius ordered the massacre of 7,000 civilians in Thessalonica, Ambrose refused to give him Communion until he publicly repented — and the emperor obeyed. He established that the Church is independent of civil authority. He is one of the four original Doctors of the Western Church.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Milan · bishops · students · bees and beekeepers (bees landed on him as an infant — a sign of his future eloquence)' }
      ]},

      { type:'accordion', eyebrow:'1195–1231 · Jun 13', title:'St. Anthony of Padua', subtitle:'Doctor of the Church · Patron of lost things', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Born Fernando in Lisbon, Anthony joined the Augustinian order as a teenager, then transferred to the Franciscans after being inspired by the martyrdom of five Franciscan missionaries in Morocco. He went to Morocco himself but fell gravely ill and was rerouted to Italy — where he was discovered accidentally at an ordination ceremony to have an extraordinary gift for preaching. St. Francis of Assisi called him "my bishop." He preached across France and Italy with such power that fish reportedly came to the surface of the water to listen when he preached on the shore (a legend recalling Ezekiel).' },
        { type:'callout', tone:'gold', title:'Why he matters', body:'Anthony is one of the most beloved saints in history. He was canonized just 352 days after his death — the fastest in Church history. He is the patron of lost things because a novice once stole his psalter (prayer book) and Anthony prayed for its return — the novice was reportedly confronted by a terrifying vision and returned the book. He holds the record for number of churches named after him worldwide.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Lost things and lost people · the poor · travelers · Portugal · Padua · pregnant women' }
      ]},

      { type:'accordion', eyebrow:'354–430 · Aug 28', title:'St. Augustine of Hippo', subtitle:'Doctor of the Church', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Augustine is one of the most brilliant minds in all of human history and one of the most dramatic conversion stories in the Church. He lived a wild youth — he famously prayed "Lord, make me chaste — but not yet." He had a long-term mistress and an illegitimate son. He investigated Manichaeism, Neo-Platonism, and every major philosophy of his day before his mother St. Monica\'s 17 years of tears and prayers finally bore fruit. In 386 AD, reading Paul\'s letter to the Romans in a garden in Milan, he heard a child\'s voice saying "take and read" — and at the words "put on the Lord Jesus Christ," he was converted.' },
        { type:'callout', tone:'blue', title:'Why he matters', body:'Augustine\'s Confessions — written around 400 AD — is still the most widely read autobiography in Western history. His theological writings shaped virtually every major Christian tradition for 1,600 years. His most famous line: "Our heart is restless, O Lord, until it rests in Thee."' }
      ]},

      { type:'sectionLabel', text:'B' },
      { type:'accordion', eyebrow:'c.480–547 · Jul 11', title:'St. Benedict of Nursia', subtitle:'Father of Western Monasticism', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Benedict left his studies in Rome — disgusted by the moral chaos of the city — and became a hermit for three years in a cave at Subiaco. His reputation for holiness drew followers and he eventually founded twelve small monasteries, then Monte Cassino — the great abbey that became the mother of Western monasticism. His Rule (Regula Benedicti) — a short, practical guide to communal religious life built around prayer, work, and community — became the foundation of virtually every monastic order in the Western Church and still governs thousands of Benedictine communities worldwide.' },
        { type:'callout', tone:'gold', title:'The St. Benedict Medal', body:'One of the most powerful sacramentals in Catholic tradition. The medal is inscribed with exorcism prayers against Satan in Latin (VRSN SMQLIVB — abbreviations for "Vade retro Satana" — "Begone Satan"). It is worn for protection and used in blessings.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Europe · monks · students · farmers · those dying · people in need of protection against evil' }
      ]},

      { type:'accordion', eyebrow:'1844–1879 · Apr 16', title:'St. Bernadette Soubirous', subtitle:'Visionary of Lourdes', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Bernadette was a 14-year-old peasant girl from a desperately poor family in Lourdes, France. Beginning February 11, 1858, she received 18 apparitions of "a beautiful lady" at the grotto of Massabielle. During the ninth apparition, the lady instructed her to dig in the ground — and a spring appeared that has produced 27,000 gallons of water per day ever since. During the 16th apparition, the lady identified herself: "I am the Immaculate Conception" — a theological term that 14-year-old Bernadette did not know existed.' },
        { type:'callout', tone:'rose', title:'The incorruptible body', body:'Bernadette died in 1879 at age 35 from tuberculosis. When her body was exhumed in 1909, 1919, and 1925, it was found to be completely undecayed and uncorrupted — no embalming, no preservatives, 130+ years. Her body is on display today in Nevers, France, perfectly preserved. 70 miraculous healings have been officially verified at Lourdes by an international medical bureau that includes atheist doctors.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Sick and suffering · people mocked for their faith · those in poverty · Lourdes' },
        { type:'prayer', label:'Prayer to St. Bernadette',
          text:'St. Bernadette — you were chosen when you were poor, sick, and uneducated, and God gave you something extraordinary anyway. Help me to believe that God can use me exactly as I am. Help me to suffer well when suffering comes, to offer it to God without bitterness, and to trust that what He is doing in me is worth the difficulty. Pray for me now. Amen.' }
      ]},

      { type:'sectionLabel', text:'C' },
      { type:'accordion', eyebrow:'1347–1380 · Apr 29', title:'St. Catherine of Siena', subtitle:'Doctor of the Church', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Catherine Benincasa was born in 1347 in Siena, Italy — the 24th of 25 children. From the age of 6 she claimed to experience visions of Christ. At 7 she made a private vow of virginity. At 16 she refused marriage and cut off her hair to make herself less attractive to suitors. Her parents eventually surrendered and allowed her to join the Third Order of St. Dominic — a lay order of women who lived at home rather than in a convent.' },
        { type:'p', text:'For three years Catherine lived in almost complete solitude in a small room in her family home — praying, fasting, and experiencing profound mystical encounters. She later described the period as a spiritual battle against temptations and demonic harassment, sustained only by the presence of Christ. Then one day she heard an interior voice: <em>"Go now and show yourself among people. I will be with you."</em>' },
        { type:'p', text:'She emerged from her room and began serving the poor, the sick, and prisoners condemned to death. She cared for plague victims when others fled. She accompanied a man named Niccolò di Toldo to his execution — holding his head in her hands as he died — and described the experience in a letter as a vision of his soul entering eternal life. Her care for the dying converted many.' },
        { type:'p', text:'Then something extraordinary happened: Catherine — an uneducated laywoman who could barely read — began dictating letters to popes, kings, and cardinals that changed the course of Church history. She wrote over 380 letters that survive, including 26 to Pope Gregory XI who had moved the papacy from Rome to Avignon, France. She called him "Babbo" (Papa) and told him with remarkable boldness: <em>"Be a man. Come back to Rome."</em> He did. The papacy returned to Rome in 1377 — largely because of her.' },
        { type:'p', text:'Catherine bore the stigmata — the wounds of Christ — but asked God to make them invisible so she would not attract attention. She dictated her masterpiece, <em>The Dialogue of Divine Providence</em>, to three secretaries simultaneously while in a state of ecstasy. She died at 33 — the same age as Christ — after a stroke.' },
        { type:'callout', tone:'blue', title:'Her message in one line', body:'<em>"Be who God meant you to be and you will set the world on fire."</em> — One of the most quoted lines in all of Catholic spirituality.' },
        { type:'h', text:'What Makes Her Extraordinary' },
        { type:'list', items:[
          'Never formally educated — yet her theological writing is so profound she was declared a Doctor of the Church in 1970, one of only four women to hold this title',
          'Wrote 380+ letters to popes and rulers — and they listened',
          'Brought the papacy back to Rome through spiritual authority alone',
          'Bore the invisible stigmata for years',
          'Named co-patron of Europe and co-patron of Italy',
          'Cared for plague victims, prisoners, and the dying when everyone else ran'
        ]},
        { type:'prayer', label:'Prayer to St. Catherine of Siena',
          text:'St. Catherine of Siena — you spoke truth to power, you loved the poor without flinching, and you followed Christ so completely that His wounds appeared on your body. Give me your courage. Help me speak the truth even when it is difficult. Help me love those around me with the same fierce tenderness you showed the dying. And set my heart on fire for God the way yours was. Amen.' }
      ]},

      { type:'accordion', eyebrow:'c.287–305 · Nov 25', title:'St. Catherine of Alexandria', subtitle:'Virgin Martyr', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Catherine was a young noblewoman of extraordinary intelligence and learning in Alexandria, Egypt. She converted to Christianity after a mystical vision and immediately began publicly refuting pagan philosophy. The Emperor Maxentius summoned 50 of the greatest pagan philosophers in the empire to debate her — and she defeated them all. Some converted on the spot and were immediately martyred. She was sentenced to be tortured on a spiked breaking wheel — but the wheel miraculously shattered at her touch. She was then beheaded, and tradition holds that milk, not blood, flowed from her wound.' },
        { type:'callout', tone:'gold', title:'One of the Fourteen Holy Helpers', body:'Saints venerated since medieval times as particularly powerful intercessors for specific needs. She appeared to St. Joan of Arc as one of her three guiding voices. The "Catherine wheel" firework is named after her instrument of torture. Her shrine on Mount Sinai at St. Catherine\'s Monastery is one of the oldest continuously inhabited Christian monasteries in the world — since the 4th century.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Philosophers · students · educators · lawyers · librarians · nurses · millers · wheelwrights · those who work with wheels' }
      ]},

      { type:'accordion', eyebrow:'c.2nd–3rd century · Nov 22', title:'St. Cecilia', subtitle:'Virgin Martyr · Patron of Music', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Cecilia was a young Roman noblewoman who had consecrated her virginity to God. She was forced into marriage with a pagan named Valerian, but on their wedding night she told him an angel guarded her purity. She led Valerian to Pope Urban I who baptized him — and Valerian returned to find the angel present with Cecilia as she had described, holding two crowns of lilies and roses. Valerian and his brother were eventually martyred. Cecilia was sentenced to death — first by suffocation in her own bath for three days, surviving miraculously. She was then beheaded, but the executioner failed three times to sever her head completely.' },
        { type:'callout', tone:'rose', title:'Why she is the patron of music', body:'During her forced wedding, she "sang in her heart to God" — an image that led to her becoming the symbol of sacred music. Every major composer in history has honored her: Handel, Dryden, Pope, Purcell. The Academies of Music in Rome bear her name. Thanksgiving Day in America coincides near her feast day — and Handel\'s "Ode for St. Cecilia\'s Day" is among the most celebrated choral works ever written.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Music · musicians · singers · poets · organ makers' }
      ]},

      { type:'accordion', eyebrow:'1194–1253 · Aug 11', title:'St. Clare of Assisi', subtitle:'Foundress of the Poor Clares', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Clare was a wealthy noblewoman in Assisi who heard St. Francis preach and was so moved she secretly left her family home in the middle of the night to meet Francis and his brothers. He cut off her hair, gave her a rough habit, and she became the first Franciscan woman. Her family tried to drag her back by force — she clung to the altar and refused. Her younger sister Agnes joined her. Together they founded the Poor Ladies of Assisi — now called the Poor Clares — who live in absolute poverty, prayer, and contemplation to this day. There are over 20,000 Poor Clares in the world today.' },
        { type:'callout', tone:'gold', title:'Defender of the Church', body:'When Saracen soldiers scaled the walls of her monastery to attack — Clare was gravely ill but had herself carried to the wall. She held up the monstrance containing the Blessed Sacrament. The soldiers, reportedly seized with terror, fled. Pope Innocent IV is said to have wept when she finally died — she had been trying to profess her vows for decades while the Church debated the legality of a community that owned absolutely nothing.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Television (she once saw the Christmas Mass on the wall of her cell when too ill to attend — declared patron of TV by Pope Pius XII in 1958) · eyes · needle workers' }
      ]},

      { type:'sectionLabel', text:'D' },
      { type:'accordion', eyebrow:'1170–1221 · Aug 8', title:'St. Dominic de Guzmán', subtitle:'Founder of the Dominicans', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Dominic founded the Order of Preachers (Dominicans) in response to the Albigensian heresy spreading through southern France — a movement that denied the goodness of the material world and rejected the Incarnation. Rather than use force (which the Church was also deploying), Dominic believed the answer was truth — holy, learned preachers who lived in poverty and preached with intellectual rigor. He is credited with popularizing the Rosary as a weapon against heresy, and his order produced St. Thomas Aquinas, St. Albert the Great, and many of the Church\'s greatest theologians.' },
        { type:'callout', tone:'blue', title:'The Rosary and Our Lady', body:'Dominican tradition holds that Our Lady appeared to Dominic and gave him the Rosary as a weapon against heresy. While historians debate the full account, the connection between the Dominicans and the Rosary is ancient and deep. The Rosary\'s formal structure was largely developed through Dominican efforts.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Astronomers · Dominican Republic · falsely accused people' },
        { type:'prayer', label:'Prayer to St. Dominic',
          text:'St. Dominic — you fought error with truth, poverty with your own poverty, and learning with love. Give me your zeal for truth and your gentleness in sharing it. Help me to know the faith so well that I can explain it to anyone, and to live it so completely that my life becomes the argument. Amen.' }
      ]},

      { type:'sectionLabel', text:'E' },
      { type:'accordion', eyebrow:'1207–1231 · Nov 17', title:'St. Elizabeth of Hungary', subtitle:'Princess', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Elizabeth was a princess betrothed at age 4, married at 14, and widowed at 20. Despite being royalty, she spent her wealth caring for the poor and sick — building a hospital at the foot of the castle and personally nursing the most repulsive patients including lepers. Her husband Ludwig IV supported her work, but after his death on Crusade she was driven from the castle by his family. She joined the Franciscan Third Order, renounced all wealth, lived in extreme poverty, and died at 24 from exhaustion. She was canonized just four years after her death — with documented miracles occurring at her tomb.' },
        { type:'callout', tone:'rose', title:'The miracle of the roses', body:'When guards stopped her carrying bread to the poor (her in-laws had forbidden it), she opened her cloak — and the bread had turned to roses. This is the most famous image associated with her and a symbol of how God protects those who serve the poor.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Bakers · charitable workers · hospitals · tertiaries · widows · young brides' }
      ]},

      { type:'sectionLabel', text:'F' },
      { type:'accordion', eyebrow:'1384–1440 · Mar 9', title:'St. Frances of Rome', subtitle:'Wife, Mother, Mystic', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Frances is remarkable because she achieved sainthood while living an entirely ordinary life — as a wife, mother, and noblewoman in Rome. She wanted to be a nun but was married at 13 against her will. She made a life of it anyway — her husband became her best friend. She raised her children, managed a large household, and spent decades caring for the poor of Rome. She survived the deaths of two children during plague, the confiscation of her property, and her husband\'s exile — all without losing her peace. She had a visible guardian angel by her side for 23 years.' },
        { type:'callout', tone:'gold', title:'Patron of drivers', body:'Her guardian angel was reportedly so luminous that he lit her path on dark roads. When she had to stop her prayers to attend to her duties, her angel would hold her place in the book — and she would return to find the text glowing where he had marked it.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Automobile drivers · widows · Benedictine Oblates · Rome' }
      ]},

      { type:'accordion', eyebrow:'1181–1226 · Oct 4', title:'St. Francis of Assisi', subtitle:'Patron of Creation', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Born Giovanni di Pietro di Bernardone into a wealthy merchant family, Francis lived as a young man of pleasure and ambition — dreaming of becoming a knight. After illness, a prisoner-of-war experience, and a profound vision of Christ while praying in the dilapidated church of San Damiano, everything changed. He stripped off his wealthy clothes in the public square, returned them to his father, and declared God alone his Father. He began rebuilding churches physically, then spiritually. He attracted followers and founded the Franciscan Order — committed to absolute poverty, brotherhood, and preaching. He received the stigmata — the first person in recorded history to do so — in 1224, two years before his death.' },
        { type:'callout', tone:'sage', title:'The Canticle of the Sun', body:'Francis composed one of the first poems in the Italian language — the Canticle of Brother Sun — praising God through Brother Sun, Sister Moon, Brother Wind, Sister Water, Brother Fire, and Sister Mother Earth. He saw all of creation as family. The blessing of animals on his feast day (October 4) is celebrated worldwide in Catholic, Anglican, and even secular communities.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Animals · ecology · Italy · merchants · stowaways · zoos · the environment' },
        { type:'prayer', label:'Prayer of St. Francis',
          text:'Lord, make me an instrument of your peace. Where there is hatred, let me sow love; where there is injury, pardon; where there is doubt, faith; where there is despair, hope; where there is darkness, light; where there is sadness, joy.\n\nO Divine Master, grant that I may not so much seek to be consoled as to console, to be understood as to understand, to be loved as to love. For it is in giving that we receive, it is in pardoning that we are pardoned, and it is in dying that we are born to eternal life. Amen.' }
      ]},

      { type:'sectionLabel', text:'G' },
      { type:'accordion', eyebrow:'1922–1962 · Apr 28', title:'St. Gianna Beretta Molla', subtitle:'Doctor, Wife, Mother, Martyr', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Gianna was a modern Italian physician, wife, and mother — canonized in 2004. When she was two months pregnant with her fourth child, doctors discovered a large fibroma on her uterus. She had three options: hysterectomy (saving her life but ending the pregnancy), abortion, or removal of only the fibroma (the most dangerous choice for her). She chose the third option to save her baby. She delivered a healthy girl — Gianna Emanuela — on April 21, 1962. Gianna died one week later from complications, at age 39. Her husband and daughter were present at her canonization.' },
        { type:'callout', tone:'rose', title:'Why she matters', body:'Gianna is the patron of the pro-life movement not because she gave a speech but because she gave her life. She is also the patron of working mothers — she was a physician who attended international pediatric conferences, played piano, skied, and raised four children. She shows that holiness is fully compatible with modern professional life. Her daughter Gianna Emanuela is still alive today and gives talks about her mother worldwide.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Physicians · unborn children · mothers · pro-life movement' }
      ]},

      { type:'accordion', eyebrow:'1256–1302 · Nov 16', title:'St. Gertrude the Great', subtitle:'Mystic, Doctor', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Gertrude entered the Benedictine monastery at Helfta at age 5 and became an extraordinary scholar and theologian. At age 25 she had a vision of Christ that transformed her from an academic into a deep mystic. She was among the first saints to have a special devotion to the Sacred Heart of Jesus — two centuries before St. Margaret Mary Alacoque made it famous. Her visions and writings, especially "The Herald of Divine Love," are considered among the greatest mystical texts in Church history.' },
        { type:'callout', tone:'blue', title:'The prayer for the Holy Souls', body:'A prayer attributed to Gertrude promises that whoever recites it will release 1,000 souls from Purgatory. The Church has not formally endorsed this claim but the prayer has been in continuous use for 700 years: "Eternal Father, I offer Thee the most precious Blood of Thy Divine Son, Jesus, in union with the Masses said throughout the world today, for all the Holy Souls in Purgatory."' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'West Indies · souls in Purgatory · mystics' }
      ]},

      { type:'sectionLabel', text:'I' },
      { type:'accordion', eyebrow:'1491–1556 · Jul 31', title:'St. Ignatius of Loyola', subtitle:'Founder of the Jesuits', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Ignatius was a Spanish soldier with a fiery temperament and ambitions for military glory. In 1521, a cannonball shattered his leg at the Battle of Pamplona. While recovering, he asked for romantic novels to read (the ones he preferred) — only spiritual books were available. He read the life of Christ and the lives of the saints, and during this time began experiencing a new movement in his soul. He noticed that when he thought about worldly glory, he felt pleasure — but it passed. When he thought about imitating the saints, he felt a joy that lasted. He called this movement "consolation" and "desolation" — the beginning of his Spiritual Exercises.' },
        { type:'callout', tone:'blue', title:'The Spiritual Exercises', body:'Ignatius developed a 30-day retreat program — still given in exactly the same form today — that takes a person through their sin, God\'s mercy, the life and passion of Christ, and a complete offering of themselves to God. Thousands of people complete the Spiritual Exercises every year. The Society of Jesus (Jesuits) he founded became the Church\'s great missionaries, educators, and intellectual force — founding 189 universities worldwide including Georgetown, Fordham, and Boston College.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Jesuits · soldiers · retreats · educators · Spain · the Basque people' },
        { type:'prayer', label:'Suscipe — Prayer of Surrender',
          text:'Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will — all that I have and call my own. You have given all to me. To You, Lord, I return it. Everything is Yours — do with it what You will. Give me only Your love and Your grace. That is enough for me. Amen.' }
      ]},

      { type:'sectionLabel', text:'J' },
      { type:'accordion', eyebrow:'1412–1431 · May 30', title:'St. Joan of Arc', subtitle:'Virgin Martyr · Patroness of France', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Joan was a peasant girl from Domrémy, France who from age 13 began hearing the voices of St. Michael, St. Catherine, and St. Margaret directing her to save France from English domination. She presented herself to the uncrowned Dauphin (Prince Charles), convinced him she was sent by God through information she could not have known naturally, was given an army, and led it to victory at Orléans — reversing the tide of the Hundred Years\' War. Charles was crowned King of France at Reims. She was later captured by the English, tried for heresy and witchcraft in a rigged ecclesiastical trial, and burned at the stake at age 19.' },
        { type:'callout', tone:'gold', title:'The rehabilitation', body:'Twenty-five years after her death, Pope Callixtus III ordered a retrial. Every charge was annulled. Joan was officially declared a martyr and in 1920 was canonized. She is one of the nine secondary patrons of France. Mark Twain considered his biography of Joan of Arc to be his finest work — he spent 12 years researching it and said she was "the most extraordinary person the human race has ever produced."' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'France · soldiers · prisoners · people ridiculed for their piety · those who have been abandoned' },
        { type:'prayer', label:'Prayer to St. Joan of Arc',
          text:'St. Joan of Arc — you heard God\'s voice when you were 13 and followed it to the end, even when that end was fire. Give me your courage to obey God even when it costs me everything. Help me to be brave in the face of fear, faithful in the face of opposition, and willing to stand alone for truth when I must. Amen.' }
      ]},

      { type:'accordion', eyebrow:'1786–1859 · Aug 4', title:'St. John Vianney', subtitle:'The Curé of Ars', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'John Vianney was an academically mediocre student who barely passed his theology exams — his bishop ordained him only because of his extraordinary piety. He was assigned to Ars, a tiny, irreligious village of 230 people. He began preaching, visiting every household, spending hours in prayer, and hearing confessions. Within years, people were traveling from across Europe to confess to him. At the height of his ministry, 80,000 people per year were making pilgrimages to Ars — a village accessible only by foot or cart. He spent 16–18 hours a day in the confessional for the last 30 years of his life.' },
        { type:'callout', tone:'gold', title:'Reading of souls', body:'John Vianney was reported to know the sins of people who had never told him — reading their souls before they spoke. He was also reported to have the gift of prophecy. He was physically attacked by the devil for years — experiencing poltergeist phenomena in his bedroom that disturbed his sleep. He called the devil "le grappin" (the grabber) and seemed almost amused by him. "All the evil in the world comes from not knowing God," he said.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Priests · parish priests' }
      ]},

      { type:'sectionLabel', text:'L' },
      { type:'accordion', eyebrow:'c.283–304 · Dec 13', title:'St. Lucy of Syracuse', subtitle:'Virgin Martyr', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Lucy was a wealthy Sicilian girl who consecrated her virginity to Christ and gave her dowry to the poor. Her pagan suitor reported her to the Roman governor Paschasius. She was ordered to renounce her faith and sacrifice to Roman gods — she refused. She was sentenced to be taken to a brothel — but the guards could not move her even when they hitched oxen to her. They attempted to burn her alive — the flames would not touch her. She was finally killed by a sword to the throat while giving her last testimony. Her name means "light" in Latin — symbolizing her festival which falls near the winter solstice.' },
        { type:'callout', tone:'gold', title:'Advent tradition', body:'In Scandinavian countries, St. Lucy\'s Day (December 13) is one of the most beloved celebrations of the year — young girls wear white robes and a wreath of candles on their heads and serve saffron buns before dawn. This tradition of light in darkness is a beautiful expression of her name and her feast falling near the darkest day of the year.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'The blind · those with eye diseases · authors · martyrs · Scandinavia · Sicily' }
      ]},

      { type:'sectionLabel', text:'M' },
      { type:'accordion', eyebrow:'1647–1690 · Oct 16', title:'St. Margaret Mary Alacoque', subtitle:'Visionary of the Sacred Heart', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Margaret Mary was a Visitandine nun in Paray-le-Monial, France who received a series of visions of Jesus Christ between 1673 and 1675 — in which He showed her His Sacred Heart, surrounded by flames and crowned with thorns, and asked for a feast day honoring it, for the practice of First Fridays (nine consecutive First Fridays of Communion as reparation), and for the Holy Hour of prayer on Thursday nights. She was initially doubted and even ridiculed by her community. Her confessor, St. Claude de la Colombière, a Jesuit, investigated and confirmed her visions.' },
        { type:'callout', tone:'rose', title:'The Sacred Heart devotion', body:'What Margaret Mary received in vision has become one of the most widespread Catholic devotions in history. The image of the Sacred Heart — the Heart of Jesus crowned with thorns, with a flame on top — is in millions of Catholic homes worldwide. The First Friday devotion she introduced promises that anyone who receives Communion on nine consecutive First Fridays will not die without receiving all the graces necessary for salvation.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Devotees of the Sacred Heart · those who have lost parents' }
      ]},

      { type:'accordion', eyebrow:'Archangel · Sep 29', title:'St. Michael the Archangel', subtitle:'Defender against evil', blocks:[
        { type:'h', text:'Who He Is' },
        { type:'p', text:'Michael is one of only three angels named in Scripture (Michael, Gabriel, Raphael). His name means "Who is like God?" — a rhetorical question, the answer being "no one." He appears in Daniel 10 and 12 as the great prince who protects God\'s people, in Jude 9 where he disputes with the devil over the body of Moses, and in Revelation 12 where he leads the heavenly army against Satan and casts him out of Heaven.' },
        { type:'callout', tone:'blue', title:'His four missions', body:'(1) To fight against Satan. (2) To rescue souls from the power of the enemy, especially at the hour of death. (3) To be the champion of God\'s people. (4) To escort souls into the presence of God at judgment. Pope Leo XIII had a vision in 1884 of a coming great battle between the Church and the forces of evil — and wrote the St. Michael Prayer to be said after every Mass (a practice restored by many parishes today).' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Police officers · soldiers · grocers · mariners · paratroopers · Germany · the Catholic Church universally' }
      ]},

      { type:'sectionLabel', text:'N' },
      { type:'accordion', eyebrow:'c.270–343 · Dec 6', title:'St. Nicholas of Myra', subtitle:'Bishop · The real Santa Claus', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Nicholas was the Bishop of Myra in what is now Turkey. He was present at the Council of Nicaea in 325 AD — where, tradition holds, he became so angry at the heretic Arius for denying the divinity of Christ that he slapped him across the face (the Council condemned the heresy, not Nicholas). He was known for extraordinary generosity to the poor — he secretly dowried three girls whose father was about to sell them into slavery by throwing bags of gold through their window at night. He also famously restored three murdered boys to life who had been hidden in a brine barrel by an innkeeper.' },
        { type:'callout', tone:'gold', title:'Santa Claus', body:'The Dutch "Sinterklaas" (from Sint Nikolaas) became Santa Claus in America. The connection to gift-giving, children, and secret generosity all trace directly to the historical Nicholas. The real man was a fierce defender of the Trinity, a bishop who attended Councils, and a powerful miracle worker. The gift-giving figure is a shadow of the real thing — and the real thing is far more interesting.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Children · sailors · merchants · pharmacists · Russia · Greece' },
        { type:'prayer', label:'Prayer to St. Nicholas',
          text:'St. Nicholas — you gave everything you had in secret, expecting nothing in return. Help me to be generous without needing to be seen. Help me to give cheerfully, to care for those who have nothing, and to defend the truth of who Jesus is with the same conviction you showed at Nicaea. Amen.' }
      ]},

      { type:'sectionLabel', text:'P' },
      { type:'accordion', eyebrow:'d. c.64 AD · Jun 29', title:'St. Peter the Apostle', subtitle:'First Pope', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Simon was a fisherman on the Sea of Galilee when Jesus called him. Jesus immediately renamed him Peter (Rock) — a name no one had ever been given before — signaling his future role. He was present at the Transfiguration, the Agony in the Garden, and witnessed the Resurrection appearances. He denied Jesus three times on the night of the arrest. He was restored by the Risen Jesus on the beach with the three-fold "Do you love me?" He preached the first Christian sermon at Pentecost, performed the first healing, presided over the first Council. He went to Rome, led the Church there, and was martyred — crucified upside down, declaring himself unworthy to die in the same posture as his Lord.' },
        { type:'callout', tone:'blue', title:"St. Peter's Basilica", body:'Stands directly over the tomb of Peter — confirmed by archaeological excavation beneath the high altar in the 20th century. Every Pope celebrates Mass above the bones of the first Pope. The succession is not merely symbolic — it is physically continuous.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Popes · fishermen · net makers · Rome · the universal Church' },
        { type:'prayer', label:'Prayer to St. Peter',
          text:'St. Peter — you denied Jesus three times and He made you the foundation of His Church anyway. When I feel like I have failed too many times, too badly, too publicly — remind me of your story. Pray for me so I can get back up. Help me to love Jesus even in my weakness, and to trust that He is not finished with me. Amen.' }
      ]},

      { type:'accordion', eyebrow:'c.5–67 AD · Jun 29', title:'St. Paul the Apostle', subtitle:'Apostle to the Gentiles', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Saul of Tarsus was a Pharisee — educated at the feet of the great Rabbi Gamaliel, zealous for the Jewish law, and one of the most enthusiastic persecutors of the early Christians. He approved of the stoning of St. Stephen, the first martyr. He obtained letters authorizing him to arrest Christians in Damascus and drag them back to Jerusalem for punishment.' },
        { type:'p', text:'On the road to Damascus, around noon, a blinding light struck him to the ground and he heard a voice: <em>"Saul, Saul, why do you persecute me?"</em> He asked who it was. The voice answered: <em>"I am Jesus, whom you are persecuting."</em> He was blinded for three days, fasted, and was baptized by a disciple named Ananias. He never looked back.' },
        { type:'p', text:'Paul went on to become the greatest missionary in Christian history — traveling over 10,000 miles across three continents, planting churches in Greece, Turkey, Macedonia, and eventually Rome. He wrote 13 of the 27 books of the New Testament. He was imprisoned, flogged five times (39 lashes each time), beaten with rods three times, shipwrecked three times, stoned once and left for dead, and spent years in prison. He said: <em>"For me, to live is Christ and to die is gain."</em> He was beheaded in Rome around 64–67 AD.' },
        { type:'callout', tone:'blue', title:'The most dramatic conversion in history', body:'The man who killed Christians became the man who could not stop telling everyone Christ was alive. The change was so complete that many early Christians refused to believe it was real.' },
        { type:'prayer', label:'Prayer to St. Paul',
          text:'St. Paul — you were the last person anyone expected God to use, and God chose you anyway. You went from persecutor to proclaimer. Help me to believe that nothing in my past disqualifies me from God\'s future. Give me your fire for the Gospel and your willingness to suffer for what I believe. Amen.' }
      ]},

      { type:'accordion', eyebrow:'1894–1941 · Aug 14', title:'St. Maximilian Kolbe', subtitle:'Martyr of Charity', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Maximilian Kolbe was a Polish Franciscan friar who founded a massively influential Catholic publishing enterprise in the 1930s — using the latest printing technology to spread devotion to Mary worldwide. He was sent to Japan in 1930 where he founded a monastery and published a Japanese Catholic magazine. He returned to Poland and by 1939 was running the largest Catholic publishing operation in the world, with a monthly magazine reaching over a million readers.' },
        { type:'p', text:'When Germany invaded Poland in September 1939, Kolbe\'s monastery sheltered 3,000 Polish refugees — two-thirds of them Jewish. He continued publishing materials critical of the Nazis. He was arrested by the Gestapo in February 1941 and sent to Auschwitz — prisoner number 16670.' },
        { type:'p', text:'In July 1941 a prisoner escaped from Kolbe\'s block. The Nazi protocol was to select ten men from the same block to die in the starvation bunker as a deterrent. One of the ten selected, a Polish sergeant named Franciszek Gajowniczek, cried out: "My wife! My children!" Kolbe stepped forward from the ranks, removed his cap, and said: <em>"I am a Catholic priest. I would like to take his place because he has a wife and children."</em> The SS commandant stared at him. Then he agreed.' },
        { type:'p', text:'Kolbe survived without food or water for two weeks — longer than anyone else in the bunker. He led the other condemned men in prayer and hymns. He was finally killed by a lethal injection of carbolic acid on August 14, 1941 — the eve of the Feast of the Assumption. He was 47. Franciszek Gajowniczek, the man whose place he took, lived until 1995. He spent the rest of his life telling people what Kolbe had done.' },
        { type:'callout', tone:'blue', title:'His act', body:'The purest expression of John 15:13 — "Greater love has no one than this: to lay down one\'s life for one\'s friends." He did it for a stranger.' },
        { type:'prayer', label:'Prayer to St. Maximilian Kolbe',
          text:'St. Maximilian Kolbe — you stepped forward when no one else did, and offered your life for a man you did not know. Give me a fraction of your love. Help me to put others before myself — not in the dramatic moments only, but in the ordinary ones: the patient response, the generous decision, the small sacrifice that costs me something real. Amen.' }
      ]},

      { type:'sectionLabel', text:'R' },
      { type:'accordion', eyebrow:'1381–1457 · May 22', title:'St. Rita of Cascia', subtitle:'Patron of impossible causes', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Rita wanted to be a nun from childhood but was married against her will. She accepted her vocation as wife and mother completely, and through prayer and example converted her harsh, quarrelsome husband — who was eventually murdered in a vendetta. Her two sons vowed to avenge their father\'s death. Rita prayed that God would take them before they could commit murder — and both died of illness within a year. She tried to enter the Augustinian convent three times and was refused. On the third attempt, the doors opened for her supernaturally in the middle of the night.' },
        { type:'callout', tone:'rose', title:'The thorn in her forehead', body:'Rita asked to share in Christ\'s suffering and asked specifically for one thorn from the Crown of Thorns to be placed in her forehead. A wound appeared instantly and remained open and bleeding for 15 years until her death. The wound made her unable to travel to Rome for the Jubilee — and yet, miraculously, she arrived in Rome and returned, with no explanation for how she had traveled. She is called "the saint of impossible causes" — patron of the impossible.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Impossible causes · abused women · widows · loneliness · sick people' }
      ]},

      { type:'sectionLabel', text:'S' },
      { type:'accordion', eyebrow:'c.480–543 · Feb 10', title:'St. Scholastica', subtitle:'Twin sister of St. Benedict', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Scholastica was the twin sister of St. Benedict — the father of Western monasticism. She founded a convent near Monte Cassino and met with her brother once a year to discuss spiritual things. On their last meeting, as evening fell, she asked him to stay and continue talking through the night. He refused, saying the rule required him to sleep in his monastery. She bowed her head in prayer and immediately a violent storm broke out — making travel impossible. Benedict was forced to stay. Three days later, Scholastica died. Gregory the Great wrote: "She was able to do more because she loved more."' },
        { type:'callout', tone:'blue', title:'Love over law', body:'St. Gregory\'s account of Scholastica is one of the most beautiful in the early Church. Her brother, the great lawgiver, was overruled by his sister\'s prayer of love. It is a permanent reminder that love is the fulfillment of the law, and that the heart\'s desire, when it aligns with God\'s, can move the very weather.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Benedictine nuns · those in convulsions · rain' }
      ]},

      { type:'accordion', eyebrow:'d. c.34 AD · Dec 26', title:'St. Stephen the Martyr', subtitle:'First Christian Martyr', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Stephen was one of the first seven deacons ordained by the apostles to care for widows and the poor. He performed miracles and preached with such wisdom that his opponents "could not withstand the wisdom and the Spirit with which he was speaking." He was brought before the Sanhedrin and gave one of the longest recorded speeches in Acts — a sweeping summary of salvation history condemning Israel\'s rejection of God\'s messengers, culminating in the accusation that they had murdered the Messiah. As they stoned him to death, he said "Lord Jesus, receive my spirit" and "Lord, do not hold this sin against them." Among those holding the cloaks of the stoners: a young man named Saul of Tarsus — who would become St. Paul.' },
        { type:'callout', tone:'rose', title:'The first after Christ', body:'Stephen is the protomartyr — the first person to die for Christ after Christ Himself. His feast on December 26 — the day after Christmas — is intentional. We celebrate the birth of the King on December 25; on December 26 we see what following that King costs. Augustine wrote: "If Stephen had not prayed, the Church would not have Paul."' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Deacons · stonemasons · headaches · horses · Hungary · Serbia' }
      ]},

      { type:'sectionLabel', text:'T' },
      { type:'accordion', eyebrow:'1515–1582 · Oct 15', title:'St. Teresa of Ávila', subtitle:'Doctor of the Church', blocks:[
        { type:'h', text:'Her Story' },
        { type:'p', text:'Teresa of Ávila was the first woman ever declared a Doctor of the Church. Born in 1515 to a noble Spanish family, she entered the Carmelite convent at 20 — partly out of genuine vocation, partly out of fear of hell. She later said she entered as a coward. The Carmelite convents of her day had become comfortable social clubs for noble women. Enclosure was rarely enforced. Ladies received visitors and enjoyed privileges. Teresa lived this lukewarm life for 20 years.' },
        { type:'p', text:'Then at 39 she experienced a profound conversion — standing before a statue of the wounded Christ and feeling utterly convicted. She threw herself at His feet and did not get up until she had asked Him to change her completely. The remaining 43 years of her life produced some of the greatest mystical writing and most extraordinary spiritual achievement in Church history.' },
        { type:'p', text:'She reformed the Carmelite order — founding 17 convents across Spain with stricter observance, prayer, and poverty. She did this while in her 50s and 60s, traveling by mule cart across Spain, dealing with hostile Church authorities, financial crises, and constant opposition — while simultaneously experiencing mystical phenomena including levitation, ecstatic prayer, and locutions.' },
        { type:'p', text:'Her friendship with St. John of the Cross produced one of the greatest collaborations in mystical theology. Together they reformed both branches of the Carmelites. She wrote <em>The Interior Castle</em> — a masterpiece describing the soul\'s journey to union with God through seven "dwelling places" — while at the same time running 17 convents. She dictated it at her confessor\'s command in six weeks.' },
        { type:'callout', tone:'blue', title:'Her most famous quote', body:'<em>"Let nothing disturb you, let nothing frighten you, all things are passing away: God never changes. Patience obtains all things. Whoever has God lacks nothing. God alone suffices."</em>' },
        { type:'prayer', label:'Prayer to St. Teresa of Ávila',
          text:'St. Teresa of Ávila — you spent 20 years in lukewarm faith and then caught fire. You show me that it is never too late to begin again. Teach me to pray deeply, to love God without reservation, and to build something for Him with whatever years I have left. Let nothing disturb me. Let nothing frighten me. God alone is enough. Amen.' }
      ]},

      { type:'accordion', eyebrow:'1225–1274 · Jan 28', title:'St. Thomas Aquinas', subtitle:'The Angelic Doctor', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Thomas Aquinas is widely considered the greatest philosopher and theologian in Christian history. Born to a noble Italian family in 1225, his family planned a prestigious career for him as Abbot of the wealthy Monte Cassino monastery. Instead he joined the mendicant Dominican friars — wandering preachers who owned nothing. His family was so outraged they kidnapped him and held him prisoner for over a year, reportedly sending a woman to seduce him and break his vow of chastity. Thomas drove her out of the room with a burning log and spent the rest of the night in prayer.' },
        { type:'p', text:'His teachers at Cologne called him "the dumb ox" because he was heavyset, quiet, and slow to speak in class. His teacher Albert the Great saw through the silence and said: "We call him the dumb ox, but the bellowing of that ox will resound throughout the whole world." He was prophetic. Thomas went on to write the <em>Summa Theologica</em> — a comprehensive synthesis of Christian theology and Aristotelian philosophy that runs to over 3,000 pages and is still the definitive reference for Catholic doctrine today.' },
        { type:'p', text:'Near the end of his life, after experiencing a profound mystical encounter during Mass, he stopped writing entirely. When a companion urged him to continue, he said: <em>"I can write no more. All that I have written seems like straw compared to what I have seen and what has been revealed to me."</em> He died at 49 on his way to the Second Council of Lyon. He was canonized in 1323 and declared a Doctor of the Church in 1567.' },
        { type:'callout', tone:'blue', title:'His method', body:'Faith and reason are not enemies — they are two wings on which the human spirit rises to God. Truth cannot contradict truth.' },
        { type:'prayer', label:'Prayer Before Study',
          text:'Creator of all things, true source of light and wisdom, origin of all being — graciously let a ray of Your light penetrate the darkness of my understanding. Take from me the double darkness in which I have been born — an obscurity of sin and ignorance. Give me a keen understanding, a retentive memory, and the ability to grasp things correctly and fundamentally. Grant me the talent of being exact in my explanations and the ability to express myself with thoroughness and charm. Point out the beginning, direct the progress, and help in the completion. Amen.' }
      ]},

      { type:'sectionLabel', text:'V' },
      { type:'accordion', eyebrow:'1350–1419 · Apr 5', title:'St. Vincent Ferrer', subtitle:'Dominican Preacher', blocks:[
        { type:'h', text:'His Story' },
        { type:'p', text:'Vincent was a Dominican priest in 14th-century Spain who became one of the most powerful preachers in Church history. He preached across Europe for 20 years with crowds so large that sermons had to be preached in open fields. He reportedly preached in Valencian yet was understood by people of every language — a gift of tongues. Over 25,000 conversions were documented in his missions. He is credited with raising the dead on multiple occasions and healing thousands. He spent the final years of his life warning of the coming judgment of God.' },
        { type:'callout', tone:'gold', title:'A sign of the end times', body:'Vincent preached constantly about judgment and repentance, and is sometimes called "the Angel of Judgment" from Revelation. He was the confessor of Pope Benedict XIII during the Western Schism. His preaching brought entire Jewish and Muslim communities into the Church through sheer force of holiness and persuasion — without coercion.' },
        { type:'h', text:'Patron of' },
        { type:'p', text:'Builders · plumbers · Valencia · orphans' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // JOURNAL — personal prayer journal (interactive)
  // ────────────────────────────────────────────────────────
  'journal': {
    eyebrow: 'Personal',
    title: 'My Prayer Journal',
    meta: 'Private · stays on your device',
    gc: 'gc-prayer',
    hasAudio: false,
    isJournal: true,  // special renderer
    blocks: [
      { type:'callout', tone:'gold', title:'Your journal is private', body:'Everything you write stays in your browser only — nothing is uploaded or shared. If you clear your browser data the entries are lost. Save anything precious elsewhere too.' },
      { type:'p', text:'Use this space to write prayers, intentions, gratitude lists, examen reflections, or anything else God puts on your heart. A daily prompt is suggested above to get you started.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // PROSPERITY — God's promises in Scripture
  // ────────────────────────────────────────────────────────
  'prosperity': {
    eyebrow: 'Scripture',
    title: 'Prosperity Scriptures',
    meta: 'God\'s promises of abundance',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'God wants you to prosper', body:'This is not a modern invention or a prosperity gospel shortcut. It is woven through every book of the Bible from Genesis to Revelation. The condition is always the same: seek God first, walk in righteousness, give generously, and work diligently. Prosperity follows as a natural consequence of a life aligned with God.' },

      { type:'accordion', eyebrow:'Foundation', title:'Old Testament Foundations', subtitle:'God\'s original design for abundance', open:true, blocks:[

        { type:'subsection', title:'Genesis 1:28', subtitle:'Be fruitful and increase', blocks:[
          { type:'quote', text:'God blessed them and said to them, "Be fruitful and increase in number; fill the earth and subdue it. Rule over the fish in the sea and the birds in the sky and over every living creature that moves on the ground."', cite:'Genesis 1:28' },
          { type:'p', text:'The very first words God spoke to humanity were a blessing of abundance and dominion. Prosperity was God\'s original design for mankind — not a reward added later.' }
        ]},

        { type:'subsection', title:'Genesis 12:2', subtitle:'I will bless you and make your name great', blocks:[
          { type:'quote', text:'I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing. I will bless those who bless you, and whoever curses you I will curse; and all peoples on earth will be blessed through you.', cite:'Genesis 12:2–3' },
          { type:'p', text:'God\'s very first covenant with Abraham was a covenant of blessing and prosperity. Through Galatians 3:14, this blessing belongs to every believer in Christ.' }
        ]},

        { type:'subsection', title:'Genesis 13:2', subtitle:'Very rich in livestock, silver and gold', blocks:[
          { type:'quote', text:'Abram was very rich in livestock, in silver, and in gold.', cite:'Genesis 13:2' },
          { type:'p', text:'God blessed Abraham — the father of faith — with enormous material wealth. This was not a coincidence. God deliberately prospered the man He chose as the model of faith for all generations.' }
        ]},

        { type:'subsection', title:'Deuteronomy 8:18', subtitle:'He gives you ability to produce wealth', blocks:[
          { type:'quote', text:'But remember the Lord your God, for it is He who gives you the ability to produce wealth, and so confirms His covenant, which He swore to your ancestors, as it is today.', cite:'Deuteronomy 8:18' },
          { type:'p', text:'The power to create wealth is literally a gift from God. Your business mind, your creative ideas, your work ethic — these are divine endowments. Give God credit and stay connected to the source.' }
        ]},

        { type:'subsection', title:'Deuteronomy 28:11–13', subtitle:'Abundant prosperity — head not tail', blocks:[
          { type:'quote', text:'The Lord will grant you abundant prosperity — in the fruit of your womb, the young of your livestock and the crops of your ground… The Lord will open the heavens, the storehouse of His bounty, to send rain on your land in season and to bless all the work of your hands. You will lend to many nations but will borrow from none. The Lord will make you the head, not the tail.', cite:'Deuteronomy 28:11–13' },
          { type:'p', text:'One of the most powerful prosperity declarations in Scripture. "Head not tail" — leader not follower, lender not borrower, above not beneath. This is God\'s declared position for His people.' }
        ]},

        { type:'subsection', title:'Joshua 1:7–8', subtitle:'Meditate on God\'s Word — be prosperous', blocks:[
          { type:'quote', text:'Be careful to obey all the law… do not turn from it to the right or to the left, that you may be successful wherever you go. Keep this Book of the Law always on your lips; meditate on it day and night… Then you will be prosperous and successful.', cite:'Joshua 1:7–8' },
          { type:'p', text:'God\'s formula for success: meditate on His word day and night. This is spiritual programming. What goes into your mind shapes what comes out in your life. The word comes first, prosperity follows.' }
        ]},

        { type:'subsection', title:'1 Kings 3:12–13', subtitle:'Riches and honor beyond any king', blocks:[
          { type:'quote', text:'Moreover, I will give you what you have not asked for — both wealth and honor — so that in your lifetime you will have no equal among kings.', cite:'1 Kings 3:13' },
          { type:'p', text:'Solomon asked for wisdom, not wealth — and God gave him both. When you pursue what God cares about, He adds what you need. Extraordinary wealth was God\'s unsolicited gift to a man who sought wisdom first.' }
        ]}

      ]},

      { type:'accordion', eyebrow:'Psalms', title:'The Psalms on Prosperity', subtitle:'Songs of abundance', blocks:[

        { type:'subsection', title:'Psalm 1:2–3', subtitle:'Whatever they do prospers', blocks:[
          { type:'quote', text:'Whose delight is in the law of the Lord, and who meditates on His law day and night. That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither — whatever they do prospers.', cite:'Psalm 1:2–3' },
          { type:'p', text:'"Whatever they do prospers." Not one business. Not one project. Whatever. This is the person rooted deeply in God\'s word — stable, fruitful, evergreen.' }
        ]},

        { type:'subsection', title:'Psalm 23:1', subtitle:'The Lord is my shepherd — I lack nothing', blocks:[
          { type:'quote', text:'The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, He leads me beside quiet waters, He refreshes my soul.', cite:'Psalm 23:1–3' },
          { type:'p', text:'Complete provision. Not partial, not most things — nothing lacking. The shepherd\'s job is to make sure the sheep want for nothing. This is God\'s declared role toward you.' }
        ]},

        { type:'subsection', title:'Psalm 34:10', subtitle:'Those who seek the Lord lack no good thing', blocks:[
          { type:'quote', text:'The lions may grow weak and hungry, but those who seek the Lord lack no good thing.', cite:'Psalm 34:10' },
          { type:'p', text:'Even the strong go without — but the one who seeks God lacks NO good thing. Seeking God is the most practical financial strategy you can adopt.' }
        ]},

        { type:'subsection', title:'Psalm 35:27', subtitle:'The Lord takes pleasure in your prosperity', blocks:[
          { type:'quote', text:'Shout for joy and be glad… may they always say, "The Lord be exalted, who delights in the well-being of His servant."', cite:'Psalm 35:27' },
          { type:'callout', tone:'gold', title:'The most powerful one', body:'God is not reluctantly tolerating your desire for abundance. He DELIGHTS in it. He takes pleasure in your well-being and prosperity. Your flourishing brings Him joy. This changes everything.' }
        ]},

        { type:'subsection', title:'Psalm 37:4', subtitle:'He will give you the desires of your heart', blocks:[
          { type:'quote', text:'Take delight in the Lord, and He will give you the desires of your heart.', cite:'Psalm 37:4' },
          { type:'p', text:'Not just your needs. Your desires. When your heart is aligned with God, He takes your desires seriously. This is a love relationship, not a transaction.' }
        ]},

        { type:'subsection', title:'Psalm 84:11', subtitle:'No good thing does He withhold', blocks:[
          { type:'quote', text:'For the Lord God is a sun and shield; the Lord bestows favor and honor; no good thing does He withhold from those who walk uprightly.', cite:'Psalm 84:11' },
          { type:'p', text:'No good thing withheld. If you are not experiencing something good that you need, it is not because God is holding it back from you. Walk uprightly and watch the doors open.' }
        ]},

        { type:'subsection', title:'Psalm 112:1–3', subtitle:'Wealth and riches are in their house', blocks:[
          { type:'quote', text:'Blessed are those who fear the Lord, who find great delight in His commands. Their children will be mighty in the land… Wealth and riches are in their houses, and their righteousness endures forever.', cite:'Psalm 112:1–3' },
          { type:'p', text:'This is a description of the person who fears God. Their house has wealth and riches. Their children are mighty. Their righteousness endures. Fear of God produces multi-generational prosperity.' }
        ]}

      ]},

      { type:'accordion', eyebrow:'Proverbs', title:'Wisdom & Wealth in Proverbs', subtitle:'Practical principles', blocks:[

        { type:'subsection', title:'Proverbs 3:9–10', subtitle:'Honor God with wealth — barns overflow', blocks:[
          { type:'quote', text:'Honor the Lord with your wealth, with the firstfruits of all your crops; then your barns will be filled to overflowing, and your vats will brim over with new wine.', cite:'Proverbs 3:9–10' },
          { type:'p', text:'Tithing and first-fruit giving activates overflow. Not trickle. Not adequate. Overflowing. God is very specific about the result: your barns will be FILLED TO OVERFLOWING.' }
        ]},

        { type:'subsection', title:'Proverbs 10:22', subtitle:'God\'s blessing brings wealth without painful toil', blocks:[
          { type:'quote', text:'The blessing of the Lord brings wealth, without painful toil for it.', cite:'Proverbs 10:22' },
          { type:'p', text:'God-blessed prosperity is different from hustle-for-every-dollar striving. When God\'s blessing is on your work, things open up that wouldn\'t otherwise. This doesn\'t mean no work — it means the work is fruitful and not grinding you down.' }
        ]},

        { type:'subsection', title:'Proverbs 11:24–25', subtitle:'The generous person will prosper', blocks:[
          { type:'quote', text:'One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.', cite:'Proverbs 11:24–25' },
          { type:'p', text:'Generosity is a prosperity strategy — not a sacrifice. The one who gives gains more. The one who hoards loses. Kingdom economics run opposite to scarcity thinking.' }
        ]},

        { type:'subsection', title:'Proverbs 13:22', subtitle:'Generational wealth — inheritance for grandchildren', blocks:[
          { type:'quote', text:'A good person leaves an inheritance for their children\'s children, but a sinner\'s wealth is stored up for the righteous.', cite:'Proverbs 13:22' },
          { type:'p', text:'Generational wealth is a biblical goal. God expects you to build something that outlasts you. Even the wealth of the unrighteous is declared to ultimately transfer to the righteous.' }
        ]},

        { type:'subsection', title:'Proverbs 22:4', subtitle:'Humility and fear of God — riches, honor, life', blocks:[
          { type:'quote', text:'Humility is the fear of the Lord; its wages are riches and honor and life.', cite:'Proverbs 22:4' },
          { type:'p', text:'The reward of humility is riches, honor, and life. Not just spiritual rewards — tangible material riches. Humility before God is one of the most powerful prosperity practices you can develop.' }
        ]},

        { type:'subsection', title:'Proverbs 28:25', subtitle:'Those who trust in the Lord will prosper', blocks:[
          { type:'quote', text:'The greedy stir up conflict, but those who trust in the Lord will prosper.', cite:'Proverbs 28:25' },
          { type:'p', text:'Trust vs. greed. Greed brings conflict and destruction. Trust in God brings prosperity. The path to wealth is not hustling harder out of fear — it is trusting deeper.' }
        ]}

      ]},

      { type:'accordion', eyebrow:'Prophets', title:'The Prophets on Abundance', subtitle:'God\'s declared intention', blocks:[

        { type:'subsection', title:'Isaiah 60:5', subtitle:'The wealth of nations will come to you', blocks:[
          { type:'quote', text:'Then you will look and be radiant, your heart will throb and swell with joy; the wealth on the seas will be brought to you, to you the riches of the nations will come.', cite:'Isaiah 60:5' },
          { type:'p', text:'The wealth of the nations coming to you. Resources, clients, opportunities, income — flowing toward you. This is a prophetic picture of divine favor causing abundance to find you.' }
        ]},

        { type:'subsection', title:'Isaiah 61:7', subtitle:'Double portion instead of shame', blocks:[
          { type:'quote', text:'Instead of your shame you will receive a double portion, and instead of disgrace you will rejoice in your inheritance. And so you will inherit a double portion in your land, and everlasting joy will be yours.', cite:'Isaiah 61:7' },
          { type:'p', text:'Double for your trouble. Where you experienced loss, shame, or lack — God promises a double portion restoration. This is not just spiritual restoration. It includes tangible inheritance and material blessing.' }
        ]},

        { type:'subsection', title:'Jeremiah 29:11', subtitle:'Plans to prosper you — hope and a future', blocks:[
          { type:'quote', text:'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.', cite:'Jeremiah 29:11' },
          { type:'p', text:'God\'s plan for you is explicitly called "to prosper you." This is God\'s stated intention for your life — spoken over a people who were in captivity and had nothing. Circumstances don\'t change the plan.' }
        ]},

        { type:'subsection', title:'Malachi 3:10', subtitle:'Floodgates of heaven — overflow of blessing', blocks:[
          { type:'quote', text:'Bring the whole tithe into the storehouse… Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.', cite:'Malachi 3:10' },
          { type:'callout', tone:'gold', title:'God\'s only test', body:'This is the only place in the entire Bible where God says "test Me." He challenges you to try tithing and watch what He does. The promise: not just blessing — so much blessing there isn\'t room to store it.' }
        ]}

      ]},

      { type:'accordion', eyebrow:'New Testament', title:'Jesus & the Apostles on Abundance', subtitle:'The promise made personal', blocks:[

        { type:'subsection', title:'John 10:10', subtitle:'Life to the full — superabundant life', blocks:[
          { type:'quote', text:'The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full.', cite:'John 10:10' },
          { type:'p', text:'"To the full" is the Greek word <em>perissos</em> — superabundant, over and above, more than enough, extraordinary. Jesus did not come to give you a bare minimum existence. He came for extraordinary, overflowing life.' }
        ]},

        { type:'subsection', title:'Matthew 6:33', subtitle:'Seek first His kingdom — all things added', blocks:[
          { type:'quote', text:'But seek first His kingdom and His righteousness, and all these things will be given to you as well.', cite:'Matthew 6:33' },
          { type:'p', text:'Put God first — everything else follows. "All these things" — food, clothing, provision — given as a consequence. This is the master prosperity principle: get the sequence right. God first, everything else in its place.' }
        ]},

        { type:'subsection', title:'Luke 6:38', subtitle:'Give — running over into your lap', blocks:[
          { type:'quote', text:'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.', cite:'Luke 6:38' },
          { type:'p', text:'"Pressed down, shaken together and running over" — this is grain being packed into a container until it overflows. The imagery is extravagant abundance. Your giving determines the measure God uses to give back to you.' }
        ]},

        { type:'subsection', title:'2 Corinthians 8:9', subtitle:'Through His poverty you might become rich', blocks:[
          { type:'quote', text:'You know the grace of our Lord Jesus Christ, that though He was rich, yet for your sake He became poor, so that you through His poverty might become rich.', cite:'2 Corinthians 8:9' },
          { type:'callout', tone:'gold', title:'The most direct', body:'Jesus became poor — so that you might become rich. This is the explicit stated purpose of the Incarnation in this passage. Your prosperity was purchased at the Cross.' }
        ]},

        { type:'subsection', title:'2 Corinthians 9:6–8', subtitle:'God able to bless you abundantly', blocks:[
          { type:'quote', text:'Whoever sows sparingly will also reap sparingly, and whoever sows generously will also reap generously… God loves a cheerful giver. And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.', cite:'2 Corinthians 9:6–8' },
          { type:'p', text:'"In all things at all times" — total, comprehensive sufficiency. God\'s ability to bless you is unlimited. The cheerful giver gets to experience this unlimited blessing in action.' }
        ]},

        { type:'subsection', title:'Philippians 4:19', subtitle:'God will meet ALL your needs', blocks:[
          { type:'quote', text:'And my God will meet all your needs according to the riches of His glory in Christ Jesus.', cite:'Philippians 4:19' },
          { type:'p', text:'Two things: ALL your needs — not most. And the measure is His riches, not your circumstances. God doesn\'t give from your situation. He gives from His limitless abundance in glory.' }
        ]},

        { type:'subsection', title:'Ephesians 3:20', subtitle:'Immeasurably more than all we ask or imagine', blocks:[
          { type:'quote', text:'Now to Him who is able to do immeasurably more than all we ask or imagine, according to His power that is at work within us.', cite:'Ephesians 3:20' },
          { type:'p', text:'Immeasurably more than you can ASK — and more than you can even IMAGINE. God\'s capacity to bless you exceeds both your prayers and your biggest dreams. This is not barely enough God. This is abundance God.' }
        ]},

        { type:'subsection', title:'3 John 1:2', subtitle:'I pray you prosper and enjoy good health', blocks:[
          { type:'quote', text:'Dear friend, I pray that you may enjoy good health and that all may go well with you, even as your soul is getting along well.', cite:'3 John 1:2' },
          { type:'p', text:'The Apostle John\'s prayer for every believer covers three areas: prosperity ("all may go well"), health, and spiritual growth. All three together — this is God\'s complete will for you.' }
        ]}

      ]},

      { type:'accordion', eyebrow:'The Keys', title:'How to Activate God\'s Prosperity Promises', subtitle:'9 conditions', blocks:[
        { type:'callout', tone:'gold', title:'A note on motive', body:'The Bible never promises prosperity to those who chase money for its own sake. It promises prosperity as a byproduct of loving God, walking righteously, giving generously, and working diligently. These are the keys that unlock the promises.' },
        { type:'list', items:[
          '<strong>Seek God first</strong> — Matthew 6:33. Get the sequence right. God first, everything else follows as a consequence.',
          '<strong>Meditate on God\'s Word day and night</strong> — Joshua 1:8. What you put into your mind shapes everything that comes out in your life.',
          '<strong>Tithe faithfully</strong> — Malachi 3:10. The only place God says "test Me." Give 10% of your first fruits and watch the floodgates open.',
          '<strong>Give generously beyond the tithe</strong> — 2 Corinthians 9:6. You reap in proportion to how you sow. Generosity is a seed.',
          '<strong>Walk in righteousness</strong> — Psalm 84:11. God withholds no good thing from those who walk uprightly. Integrity is a prosperity practice.',
          '<strong>Fear the Lord (reverent awe)</strong> — Proverbs 22:4. Humility and reverence produce riches, honor, and life.',
          '<strong>Work with diligence</strong> — Proverbs 13:4. "The soul of the diligent shall be made rich." God blesses the work of your hands — but you have to use your hands.',
          '<strong>Give to the poor</strong> — Proverbs 19:17. "Whoever is kind to the poor lends to the Lord, and He will reward them for what they have done."',
          '<strong>Trust God — not money</strong> — Psalm 37:3–4. Prosperity that comes from frantic money-chasing is unstable. Prosperity rooted in trust in God is enduring.'
        ]},
        { type:'callout', tone:'gold', title:'The most powerful one to memorize', body:'<strong>Psalm 35:27</strong> — "The Lord takes pleasure in the prosperity of His servant." God is not reluctantly tolerating your desire for abundance. He DELIGHTS in it. Your flourishing brings Him joy. Let that be your foundation.' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // INDIVIDUAL SAINT DETAIL PAGES
  // (concise versions linked from home page; full versions in saints-library)
  // ────────────────────────────────────────────────────────
  'saint-bernadette': {
    eyebrow: 'Saint',
    title: 'St. Bernadette Soubirous',
    meta: 'Visionary of Lourdes · France, 1844–1879 · Feast: April 16',
    gc: 'gc-mary',
    blocks: [
      { type:'p', text:'Bernadette was a 14-year-old peasant girl from a desperately poor family in Lourdes, France. Beginning February 11, 1858, she received 18 apparitions of "a beautiful lady" at the grotto of Massabielle. During the ninth apparition, the lady instructed her to dig in the ground — and a spring appeared that has produced 27,000 gallons of water per day ever since. During the 16th apparition, the lady identified herself: "I am the Immaculate Conception" — a theological term that 14-year-old Bernadette did not know existed.' },
      { type:'callout', tone:'rose', title:'The incorruptible body', body:'Bernadette died in 1879 at age 35 from tuberculosis. When her body was exhumed in 1909, 1919, and 1925, it was found to be completely undecayed and uncorrupted — no embalming, no preservatives, 130+ years. Her body is on display today in Nevers, France, perfectly preserved. 70 miraculous healings have been officially verified at Lourdes by an international medical bureau that includes atheist doctors.' },
      { type:'p', text:'<strong>Patron of:</strong> Sick and suffering · people mocked for their faith · those in poverty · Lourdes' },
      { type:'prayer', label:'Prayer to St. Bernadette',
        text:'St. Bernadette — you were chosen when you were poor, sick, and uneducated, and God gave you something extraordinary anyway. Help me to believe that God can use me exactly as I am. Help me to suffer well when suffering comes, to offer it to God without bitterness, and to trust that what He is doing in me is worth the difficulty. Pray for me now. Amen.' }
    ]
  },

  'saint-joan': {
    eyebrow: 'Saint',
    title: 'St. Joan of Arc',
    meta: 'Virgin Martyr · France, 1412–1431 · Feast: May 30',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Joan was a peasant girl from Domrémy, France who from age 13 began hearing the voices of St. Michael, St. Catherine, and St. Margaret directing her to save France from English domination. She presented herself to the uncrowned Dauphin (Prince Charles), convinced him she was sent by God through information she could not have known naturally, was given an army, and led it to victory at Orléans — reversing the tide of the Hundred Years\' War. Charles was crowned King of France at Reims. She was later captured by the English, tried for heresy and witchcraft in a rigged ecclesiastical trial, and burned at the stake at age 19.' },
      { type:'callout', tone:'gold', title:'The rehabilitation', body:'Twenty-five years after her death, Pope Callixtus III ordered a retrial. Every charge was annulled. Joan was officially declared a martyr and in 1920 was canonized. She is one of the nine secondary patrons of France. Mark Twain considered his biography of Joan of Arc to be his finest work — he spent 12 years researching it and said she was "the most extraordinary person the human race has ever produced."' },
      { type:'p', text:'<strong>Patron of:</strong> France · soldiers · prisoners · people ridiculed for their piety · those who have been abandoned' },
      { type:'prayer', label:'Prayer to St. Joan of Arc',
        text:'St. Joan of Arc — you heard God\'s voice when you were 13 and followed it to the end, even when that end was fire. Give me your courage to obey God even when it costs me everything. Help me to be brave in the face of fear, faithful in the face of opposition, and willing to stand alone for truth when I must. Amen.' }
    ]
  },

  'saint-jpii': {
    eyebrow: 'Saint',
    title: 'St. John Paul II',
    meta: 'Pope · Poland, 1920–2005 · Feast: October 22',
    gc: 'gc-pope',
    blocks: [
      { type:'p', text:'Karol Józef Wojtyła was born in Wadowice, Poland in 1920. His mother died when he was 8. His only brother died when he was 12. His father died when he was 20. He later said he felt completely alone — except for God. During the Nazi occupation of Poland, he worked in a quarry and chemical factory while secretly studying for the priesthood in an underground seminary — the penalty for which was death.' },
      { type:'p', text:'He was ordained a priest in 1946, earned two doctorates, became the Archbishop of Kraków in 1964, and was elected Pope on October 16, 1978 — the first non-Italian Pope in 455 years. When he appeared on the balcony of St. Peter\'s and said "Be not afraid" — the Catholic world exhaled.' },
      { type:'p', text:'His papacy lasted 26 years — one of the longest in history. He traveled to 129 countries. He met with leaders of every religion. He was shot in St. Peter\'s Square in 1981 and later visited his would-be assassin in prison and forgave him personally. He played a central role in the peaceful collapse of Communism in Eastern Europe. He canonized 483 saints — more than all previous popes combined. He wrote the Theology of the Body — a theological vision of human sexuality so revolutionary that scholars are still unpacking it.' },
      { type:'p', text:'He died on April 2, 2005. The crowd gathered in St. Peter\'s Square began spontaneously chanting "Santo subito" — "Sainthood now." He was canonized in 2014 alongside John XXIII.' },
      { type:'callout', tone:'blue', title:'His defining message', body:'<em>"Be not afraid."</em> — His first words as Pope. The theme of his entire pontificate.' },
      { type:'prayer', label:'Prayer to St. John Paul II',
        text:'St. John Paul II — you lost everyone you loved and found in God a love that outlasted every loss. You faced bullets, communism, and your own dying body with the same three words: "Be not afraid." Let me carry those words today. In whatever I am facing — be not afraid. God is enough. Amen.' }
    ]
  },

  'saint-michael': {
    eyebrow: 'Archangel',
    title: 'St. Michael the Archangel',
    meta: 'Defender against evil · Feast: September 29',
    gc: 'gc-prayer',
    blocks: [
      { type:'p', text:'Michael is one of only three angels named in Scripture (Michael, Gabriel, Raphael). His name means "Who is like God?" — a rhetorical question, the answer being "no one." He appears in Daniel 10 and 12 as the great prince who protects God\'s people, in Jude 9 where he disputes with the devil over the body of Moses, and in Revelation 12 where he leads the heavenly army against Satan and casts him out of Heaven.' },
      { type:'callout', tone:'blue', title:'His four missions', body:'(1) To fight against Satan. (2) To rescue souls from the power of the enemy, especially at the hour of death. (3) To be the champion of God\'s people. (4) To escort souls into the presence of God at judgment. Pope Leo XIII had a vision in 1884 of a coming great battle between the Church and the forces of evil — and wrote the St. Michael Prayer to be said after every Mass (a practice restored by many parishes today).' },
      { type:'p', text:'<strong>Patron of:</strong> Police officers · soldiers · grocers · mariners · paratroopers · Germany · the Catholic Church universally' },
      { type:'prayer', label:'Prayer to St. Michael · Pope Leo XIII',
        text:'Saint Michael the Archangel, defend us in battle.\nBe our protection against the wickedness and snares of the devil.\nMay God rebuke him, we humbly pray;\nand do thou, O Prince of the Heavenly Host,\nby the power of God,\ncast into hell Satan and all the evil spirits\nwho prowl about the world seeking the ruin of souls. Amen.' }
    ]
  },

  'saint-peter': {
    eyebrow: 'Saint',
    title: 'St. Peter the Apostle',
    meta: 'First Pope · Galilee/Rome, d. c.64 AD · Feast: June 29',
    gc: 'gc-pope',
    blocks: [
      { type:'p', text:'Simon was a fisherman on the Sea of Galilee when Jesus called him. Jesus immediately renamed him Peter (Rock) — a name no one had ever been given before — signaling his future role. He was present at the Transfiguration, the Agony in the Garden, and witnessed the Resurrection appearances. He denied Jesus three times on the night of the arrest. He was restored by the Risen Jesus on the beach with the three-fold "Do you love me?" He preached the first Christian sermon at Pentecost, performed the first healing, presided over the first Council. He went to Rome, led the Church there, and was martyred — crucified upside down, declaring himself unworthy to die in the same posture as his Lord.' },
      { type:'callout', tone:'blue', title:"St. Peter's Basilica", body:'Stands directly over the tomb of Peter — confirmed by archaeological excavation beneath the high altar in the 20th century. Every Pope celebrates Mass above the bones of the first Pope. The succession is not merely symbolic — it is physically continuous.' },
      { type:'p', text:'<strong>Patron of:</strong> Popes · fishermen · net makers · Rome · the universal Church' },
      { type:'prayer', label:'Prayer to St. Peter',
        text:'St. Peter — you denied Jesus three times and He made you the foundation of His Church anyway. When I feel like I have failed too many times, too badly, too publicly — remind me of your story. Pray for me so I can get back up. Help me to love Jesus even in my weakness, and to trust that He is not finished with me. Amen.' }
    ]
  },

  'saint-paul': {
    eyebrow: 'Saint',
    title: 'St. Paul the Apostle',
    meta: 'Apostle to the Gentiles · Died c.64–67 AD · Feast: June 29',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Saul of Tarsus was a Pharisee — educated at the feet of the great Rabbi Gamaliel, zealous for the Jewish law, and one of the most enthusiastic persecutors of the early Christians. He approved of the stoning of St. Stephen, the first martyr. He obtained letters authorizing him to arrest Christians in Damascus and drag them back to Jerusalem for punishment.' },
      { type:'p', text:'On the road to Damascus, around noon, a blinding light struck him to the ground and he heard a voice: <em>"Saul, Saul, why do you persecute me?"</em> He asked who it was. The voice answered: <em>"I am Jesus, whom you are persecuting."</em> He was blinded for three days, fasted, and was baptized by a disciple named Ananias. He never looked back.' },
      { type:'p', text:'Paul went on to become the greatest missionary in Christian history — traveling over 10,000 miles across three continents, planting churches in Greece, Turkey, Macedonia, and eventually Rome. He wrote 13 of the 27 books of the New Testament. He was imprisoned, flogged five times (39 lashes each time), beaten with rods three times, shipwrecked three times, stoned once and left for dead, and spent years in prison. He said: <em>"For me, to live is Christ and to die is gain."</em> He was beheaded in Rome around 64–67 AD.' },
      { type:'callout', tone:'blue', title:'The most dramatic conversion in history', body:'The man who killed Christians became the man who could not stop telling everyone Christ was alive. The change was so complete that many early Christians refused to believe it was real.' },
      { type:'prayer', label:'Prayer to St. Paul',
        text:'St. Paul — you were the last person anyone expected God to use, and God chose you anyway. You went from persecutor to proclaimer. Help me to believe that nothing in my past disqualifies me from God\'s future. Give me your fire for the Gospel and your willingness to suffer for what I believe. Amen.' }
    ]
  },

  'saint-kolbe': {
    eyebrow: 'Saint',
    title: 'St. Maximilian Kolbe',
    meta: 'Martyr of Charity · Poland, 1894–1941 · Feast: August 14',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Maximilian Kolbe was a Polish Franciscan friar who founded a massively influential Catholic publishing enterprise in the 1930s — using the latest printing technology to spread devotion to Mary worldwide. He was sent to Japan in 1930 where he founded a monastery and published a Japanese Catholic magazine. He returned to Poland and by 1939 was running the largest Catholic publishing operation in the world, with a monthly magazine reaching over a million readers.' },
      { type:'p', text:'When Germany invaded Poland in September 1939, Kolbe\'s monastery sheltered 3,000 Polish refugees — two-thirds of them Jewish. He continued publishing materials critical of the Nazis. He was arrested by the Gestapo in February 1941 and sent to Auschwitz — prisoner number 16670.' },
      { type:'p', text:'In July 1941 a prisoner escaped from Kolbe\'s block. The Nazi protocol was to select ten men from the same block to die in the starvation bunker as a deterrent. One of the ten selected, a Polish sergeant named Franciszek Gajowniczek, cried out: "My wife! My children!" Kolbe stepped forward from the ranks, removed his cap, and said: <em>"I am a Catholic priest. I would like to take his place because he has a wife and children."</em> The SS commandant stared at him. Then he agreed.' },
      { type:'p', text:'Kolbe survived without food or water for two weeks — longer than anyone else in the bunker. He led the other condemned men in prayer and hymns. He was finally killed by a lethal injection of carbolic acid on August 14, 1941 — the eve of the Feast of the Assumption. He was 47. Franciszek Gajowniczek, the man whose place he took, lived until 1995. He spent the rest of his life telling people what Kolbe had done.' },
      { type:'callout', tone:'blue', title:'His act', body:'The purest expression of John 15:13 — "Greater love has no one than this: to lay down one\'s life for one\'s friends." He did it for a stranger.' },
      { type:'prayer', label:'Prayer to St. Maximilian Kolbe',
        text:'St. Maximilian Kolbe — you stepped forward when no one else did, and offered your life for a man you did not know. Give me a fraction of your love. Help me to put others before myself — not in the dramatic moments only, but in the ordinary ones: the patient response, the generous decision, the small sacrifice that costs me something real. Amen.' }
    ]
  },

  'saint-rita': {
    eyebrow: 'Saint',
    title: 'St. Rita of Cascia',
    meta: 'Widow, Nun, Mystic · Italy, 1381–1457 · Feast: May 22',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Rita wanted to be a nun from childhood but was married against her will. She accepted her vocation as wife and mother completely, and through prayer and example converted her harsh, quarrelsome husband — who was eventually murdered in a vendetta. Her two sons vowed to avenge their father\'s death. Rita prayed that God would take them before they could commit murder — and both died of illness within a year. She tried to enter the Augustinian convent three times and was refused. On the third attempt, the doors opened for her supernaturally in the middle of the night.' },
      { type:'callout', tone:'rose', title:'The thorn in her forehead', body:'Rita asked to share in Christ\'s suffering and asked specifically for one thorn from the Crown of Thorns to be placed in her forehead. A wound appeared instantly and remained open and bleeding for 15 years until her death. The wound made her unable to travel to Rome for the Jubilee — and yet, miraculously, she arrived in Rome and returned, with no explanation for how she had traveled. She is called "the saint of impossible causes" — patron of the impossible.' },
      { type:'p', text:'<strong>Patron of:</strong> Impossible causes · abused women · widows · loneliness · sick people' }
    ]
  },

  'saint-gianna': {
    eyebrow: 'Saint',
    title: 'St. Gianna Beretta Molla',
    meta: 'Doctor, Wife, Mother, Martyr · Italy, 1922–1962 · Feast: April 28',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Gianna was a modern Italian physician, wife, and mother — canonized in 2004. When she was two months pregnant with her fourth child, doctors discovered a large fibroma on her uterus. She had three options: hysterectomy (saving her life but ending the pregnancy), abortion, or removal of only the fibroma (the most dangerous choice for her). She chose the third option to save her baby. She delivered a healthy girl — Gianna Emanuela — on April 21, 1962. Gianna died one week later from complications, at age 39. Her husband and daughter were present at her canonization.' },
      { type:'callout', tone:'rose', title:'Why she matters', body:'Gianna is the patron of the pro-life movement not because she gave a speech but because she gave her life. She is also the patron of working mothers — she was a physician who attended international pediatric conferences, played piano, skied, and raised four children. She shows that holiness is fully compatible with modern professional life. Her daughter Gianna Emanuela is still alive today and gives talks about her mother worldwide.' },
      { type:'p', text:'<strong>Patron of:</strong> Physicians · unborn children · mothers · pro-life movement' }
    ]
  },

  'saint-ignatius': {
    eyebrow: 'Saint',
    title: 'St. Ignatius of Loyola',
    meta: 'Founder of the Jesuits · Spain, 1491–1556 · Feast: July 31',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Ignatius was a Spanish soldier with a fiery temperament and ambitions for military glory. In 1521, a cannonball shattered his leg at the Battle of Pamplona. While recovering, he asked for romantic novels to read (the ones he preferred) — only spiritual books were available. He read the life of Christ and the lives of the saints, and during this time began experiencing a new movement in his soul. He noticed that when he thought about worldly glory, he felt pleasure — but it passed. When he thought about imitating the saints, he felt a joy that lasted. He called this movement "consolation" and "desolation" — the beginning of his Spiritual Exercises.' },
      { type:'callout', tone:'blue', title:'The Spiritual Exercises', body:'Ignatius developed a 30-day retreat program — still given in exactly the same form today — that takes a person through their sin, God\'s mercy, the life and passion of Christ, and a complete offering of themselves to God. Thousands of people complete the Spiritual Exercises every year. The Society of Jesus (Jesuits) he founded became the Church\'s great missionaries, educators, and intellectual force — founding 189 universities worldwide including Georgetown, Fordham, and Boston College.' },
      { type:'p', text:'<strong>Patron of:</strong> Jesuits · soldiers · retreats · educators · Spain · the Basque people' },
      { type:'prayer', label:'Suscipe — Prayer of Surrender',
        text:'Take, Lord, and receive all my liberty, my memory, my understanding, and my entire will — all that I have and call my own. You have given all to me. To You, Lord, I return it. Everything is Yours — do with it what You will. Give me only Your love and Your grace. That is enough for me. Amen.' }
    ]
  },

  'saint-teresa-avila': {
    eyebrow: 'Saint',
    title: 'St. Teresa of Ávila',
    meta: 'Doctor of the Church · Spain, 1515–1582 · Feast: October 15',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Teresa of Ávila was the first woman ever declared a Doctor of the Church. Born in 1515 to a noble Spanish family, she entered the Carmelite convent at 20 — partly out of genuine vocation, partly out of fear of hell. She later said she entered as a coward. The Carmelite convents of her day had become comfortable social clubs for noble women. Enclosure was rarely enforced. Ladies received visitors and enjoyed privileges. Teresa lived this lukewarm life for 20 years.' },
      { type:'p', text:'Then at 39 she experienced a profound conversion — standing before a statue of the wounded Christ and feeling utterly convicted. She threw herself at His feet and did not get up until she had asked Him to change her completely. The remaining 43 years of her life produced some of the greatest mystical writing and most extraordinary spiritual achievement in Church history.' },
      { type:'p', text:'She reformed the Carmelite order — founding 17 convents across Spain with stricter observance, prayer, and poverty. She did this while in her 50s and 60s, traveling by mule cart across Spain, dealing with hostile Church authorities, financial crises, and constant opposition — while simultaneously experiencing mystical phenomena including levitation, ecstatic prayer, and locutions.' },
      { type:'p', text:'Her friendship with St. John of the Cross produced one of the greatest collaborations in mystical theology. Together they reformed both branches of the Carmelites. She wrote <em>The Interior Castle</em> — a masterpiece describing the soul\'s journey to union with God through seven "dwelling places" — while at the same time running 17 convents. She dictated it at her confessor\'s command in six weeks.' },
      { type:'callout', tone:'blue', title:'Her most famous quote', body:'<em>"Let nothing disturb you, let nothing frighten you, all things are passing away: God never changes. Patience obtains all things. Whoever has God lacks nothing. God alone suffices."</em>' },
      { type:'prayer', label:'Prayer to St. Teresa of Ávila',
        text:'St. Teresa of Ávila — you spent 20 years in lukewarm faith and then caught fire. You show me that it is never too late to begin again. Teach me to pray deeply, to love God without reservation, and to build something for Him with whatever years I have left. Let nothing disturb me. Let nothing frighten me. God alone is enough. Amen.' }
    ]
  },

  'saint-catherine-siena': {
    eyebrow: 'Saint',
    title: 'St. Catherine of Siena',
    meta: 'Doctor of the Church · Italy, 1347–1380 · Feast: April 29',
    gc: 'gc-saints',
    blocks: [
      { type:'p', text:'Catherine Benincasa was born in 1347 in Siena, Italy — the 24th of 25 children. From the age of 6 she claimed to experience visions of Christ. At 7 she made a private vow of virginity. At 16 she refused marriage and cut off her hair to make herself less attractive to suitors. Her parents eventually surrendered and allowed her to join the Third Order of St. Dominic — a lay order of women who lived at home rather than in a convent.' },
      { type:'p', text:'For three years Catherine lived in almost complete solitude in a small room in her family home — praying, fasting, and experiencing profound mystical encounters. She later described the period as a spiritual battle against temptations and demonic harassment, sustained only by the presence of Christ. Then one day she heard an interior voice: <em>"Go now and show yourself among people. I will be with you."</em>' },
      { type:'p', text:'She emerged from her room and began serving the poor, the sick, and prisoners condemned to death. She cared for plague victims when others fled. She accompanied a man named Niccolò di Toldo to his execution — holding his head in her hands as he died — and described the experience in a letter as a vision of his soul entering eternal life. Her care for the dying converted many.' },
      { type:'p', text:'Then something extraordinary happened: Catherine — an uneducated laywoman who could barely read — began dictating letters to popes, kings, and cardinals that changed the course of Church history. She wrote over 380 letters that survive, including 26 to Pope Gregory XI who had moved the papacy from Rome to Avignon, France. She called him "Babbo" (Papa) and told him with remarkable boldness: <em>"Be a man. Come back to Rome."</em> He did. The papacy returned to Rome in 1377 — largely because of her.' },
      { type:'p', text:'Catherine bore the stigmata — the wounds of Christ — but asked God to make them invisible so she would not attract attention. She dictated her masterpiece, <em>The Dialogue of Divine Providence</em>, to three secretaries simultaneously while in a state of ecstasy. She died at 33 — the same age as Christ — after a stroke.' },
      { type:'callout', tone:'blue', title:'Her message in one line', body:'<em>"Be who God meant you to be and you will set the world on fire."</em> — One of the most quoted lines in all of Catholic spirituality.' },
      { type:'prayer', label:'Prayer to St. Catherine of Siena',
        text:'St. Catherine of Siena — you spoke truth to power, you loved the poor without flinching, and you followed Christ so completely that His wounds appeared on your body. Give me your courage. Help me speak the truth even when it is difficult. Help me love those around me with the same fierce tenderness you showed the dying. And set my heart on fire for God the way yours was. Amen.' }
    ]
  },

  // ────────────────────────────────────────────────────────
  // CATHOLIC DICTIONARY — key terms
  // ────────────────────────────────────────────────────────
  'dictionary': {
    eyebrow: 'Reference',
    title: 'Catholic Dictionary',
    meta: '59 essential terms, defined',
    img: 'img/dictionary.jpg',
    hasAudio: false,
    isDictionary: true,  // Special treatment: render with search + A-Z pills
    blocks: [
      { type:'callout', tone:'gold', title:'Catholic words shouldn\'t be a barrier', body:'Every word here appears in prayers, at Mass, or in Catholic teaching — and whose meaning is often assumed but never explained. Look up any word that has confused you.' },

      { type:'subsection', title:'Absolution', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The official forgiveness of sins given by a priest in Confession. The priest acts in the Person of Christ — the sins are truly and completely gone. The key words: <em>"I absolve you from your sins in the name of the Father, and of the Son, and of the Holy Spirit."</em>' },
        { type:'p', text:'<strong>Common confusion:</strong> Absolution is not the priest forgiving you — it is God forgiving you through the priest. The priest is the channel, not the source.' }
      ]},
      { type:'subsection', title:'Advent', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The four weeks before Christmas. Means "coming" or "arrival." A season of waiting, preparation, and hopeful expectation — preparing your heart for the birth of Jesus, and also anticipating His Second Coming. Advent candles (one lit each week) mark the countdown.' },
        { type:'p', text:'<strong>Common confusion:</strong> Advent is NOT just the Christmas countdown. It is a season of fasting, prayer, and preparation — taken seriously, not just a run-up to gifts and parties.' }
      ]},
      { type:'subsection', title:'Agape', subtitle:'A · "ah-GAH-pay"', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Greek for unconditional, sacrificial, divine love — the highest form. The love God has for us and the love we are called to have for each other. Not based on feeling — it is a decision to choose another person\'s good regardless of what you feel.' },
        { type:'p', text:'<strong>Plain English:</strong> Agape is loving someone when it is hard. Loving when they don\'t deserve it. Loving the way God loves you — completely, unconditionally, at great personal cost.' }
      ]},
      { type:'subsection', title:'Alleluia', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Hebrew for "Praise God" or "Praise the Lord." Said and sung at Mass before the Gospel reading. During Lent the Alleluia is not said — it is "buried" as a sign of penance and longing. It returns triumphantly at the Easter Vigil.' }
      ]},
      { type:'subsection', title:'Amen', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Hebrew/Aramaic — "So be it" or "I believe this is true." The most important word you say at Mass. When the priest says "The Body of Christ" and you respond "Amen" — you are declaring: "I believe this is truly Jesus." An act of faith, not a formality.' }
      ]},
      { type:'subsection', title:'Annulment', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A Church declaration that a true sacramental marriage never actually existed — because something essential was missing at the time of the wedding (lack of real freedom, deception, no true intention to be faithful or open to children).' },
        { type:'p', text:'<strong>Common confusion:</strong> An annulment is NOT "Catholic divorce." Divorce says a valid marriage existed and is now ended. An annulment says a valid sacramental marriage never existed in the first place.' }
      ]},
      { type:'subsection', title:'Anointing of the Sick', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> One of the 7 sacraments — the sacrament of healing. A priest anoints the forehead and hands with blessed oil and prays over someone who is seriously ill, facing surgery, or in danger of death. It is not only for the dying.' },
        { type:'p', text:'<strong>What it does:</strong> Strengthens the soul against illness and weakness; forgives sins; can bring physical healing if that is God\'s will; unites suffering to the suffering of Christ.' },
        { type:'p', text:'<strong>Plain English:</strong> This is the Church\'s official "healing sacrament." If someone you love is seriously ill, call a priest. Do not wait until they are actively dying. The grace works better when received earlier.' }
      ]},
      { type:'subsection', title:'Apologetics', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> From Greek "apologia" — a defense or reasoned explanation. Apologetics is the discipline of defending and explaining the faith through reason, evidence, and argument. Not arguing. Explaining.' },
        { type:'p', text:'<strong>Plain English:</strong> Catholic apologetics answers questions like: Why believe Jesus is God? Why Catholic and not Protestant? Does God exist? It uses logic, history, and evidence — not just "you should believe."' }
      ]},
      { type:'subsection', title:'Apostle', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> From Greek "apostolos" — "one who is sent." The 12 men Jesus personally chose, trained, and sent out. After the Resurrection He gave them authority to forgive sins and commissioned them to baptize all nations. Bishops today are their successors.' },
        { type:'p', text:'<strong>Apostle vs. Disciple:</strong> A disciple is any follower of Jesus — there were hundreds. An apostle is specifically one of the Twelve (plus Paul).' }
      ]},
      { type:'subsection', title:'Apostolic Succession', subtitle:'A', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The unbroken chain of ordination from the apostles to every bishop alive today. Every Catholic bishop can trace his ordination back through an unbroken line all the way to Peter and the apostles — to Jesus Himself. This chain has never been broken in 2,000 years and is what guarantees the validity of Catholic sacraments.' }
      ]},
      { type:'subsection', title:'Baptism', subtitle:'B', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The first and foundational sacrament — the doorway to all other sacraments. Water is poured (or the person is immersed) in the name of the Trinity. Original sin is washed away. The person becomes a child of God, a member of the Church, and receives sanctifying grace.' },
        { type:'p', text:'<strong>What it does (7 things simultaneously):</strong> Forgives original sin and all personal sin; infuses sanctifying grace; makes the soul a temple of the Holy Spirit; imprints a permanent spiritual seal; incorporates into the Body of Christ; grants right to all other sacraments; opens the gates of Heaven.' },
        { type:'p', text:'<strong>Plain English:</strong> Baptism changes what you fundamentally are — not just what you believe. You go in one person and come out another.' }
      ]},
      { type:'subsection', title:'Beatification', subtitle:'B', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The second-to-last stage in becoming a saint. After being declared "Venerable," one verified miracle through their intercession is required. The Pope declares them "Blessed" — they can be publicly venerated in a specific region. One more miracle is needed for full canonization (sainthood).' }
      ]},
      { type:'subsection', title:'Blessed Sacrament', subtitle:'B', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The consecrated Eucharist — the host after it has become the Body of Christ at Mass. Kept in the tabernacle (the gold box at the front of the church). The red sanctuary lamp burning nearby means Jesus is present there. <strong>Eucharistic Adoration</strong> is sitting quietly in the presence of the Blessed Sacrament, placed in a special gold stand called a monstrance. You are sitting in the physical presence of Jesus.' }
      ]},
      { type:'subsection', title:'Canonization', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The formal process by which the Pope declares a deceased person to be in Heaven and worthy of universal veneration as a saint. It is the Church\'s highest official declaration about a person\'s eternal state.' },
        { type:'p', text:'<strong>The process:</strong> Servant of God → Venerable → Blessed (beatification, requires 1 miracle) → Saint (canonization, requires 2nd miracle). Martyrs can skip the miracle for beatification.' },
        { type:'p', text:'<strong>Plain English:</strong> Canonization is the Pope officially saying: "This person is definitely in Heaven. You can ask them to pray for you." It is not the Church creating saints — it is recognizing what God already did.' }
      ]},
      { type:'subsection', title:'Catechism', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A comprehensive summary of Catholic teaching. The Catechism of the Catholic Church (CCC), published in 1992, is the official reference. It covers: the Creed (what Catholics believe), the Sacraments (how Catholics worship), the Commandments (how Catholics live), and Prayer (how Catholics pray).' },
        { type:'p', text:'<strong>Plain English:</strong> The Catechism is the Catholic Church\'s "owner\'s manual" — everything you need to know about what the Church teaches and why.' }
      ]},
      { type:'subsection', title:'Catechumen', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> An adult who has formally entered the OCIA/RCIA process and is preparing for Baptism but has not yet been baptized. Once accepted at the Rite of Acceptance they become a catechumen. They attend the first part of Mass but are dismissed before the Eucharist until their Baptism.' }
      ]},
      { type:'subsection', title:'Chrism', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Sacred oil — olive oil mixed with balsam (a fragrant resin) — blessed by the bishop at the Chrism Mass during Holy Week. Used in Baptism (anointing after the water), Confirmation (forehead anointing), and Holy Orders (priest\'s hands). Its fragrance symbolizes the "sweet aroma" of a life given to Christ.' }
      ]},
      { type:'subsection', title:'Communion of Saints', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The spiritual union of all Church members — those living on earth (Church Militant), those being purified in Purgatory (Church Suffering), and those in Heaven (Church Triumphant). All three groups are connected — we can pray for each other across the boundary of death.' },
        { type:'p', text:'<strong>Plain English:</strong> Death does not break God\'s family. When you pray for someone who has died, you are still in relationship with them. When a saint in Heaven prays for you, they are still in relationship with you. The Church is one family — spread across time and eternity.' }
      ]},
      { type:'subsection', title:'Confession', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Also called Reconciliation or Penance — one of the 7 sacraments. You confess your sins to a priest, express contrition, receive absolution, and are given a penance. The priest acts in the person of Christ — it is Christ forgiving through him.' },
        { type:'p', text:'<strong>What it does:</strong> Forgives all sins confessed with genuine contrition. Restores the soul to the state of grace. Removes the eternal punishment of mortal sin. Reduces temporal punishment. Restores peace with God and the Church.' },
        { type:'p', text:'<strong>Plain English:</strong> You are not telling a man your sins so he can judge you. You are telling Christ your sins through a man who has been specifically ordained to forgive in His name. The priest is the instrument — God is the one forgiving.' }
      ]},
      { type:'subsection', title:'Confirmation', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The second sacrament of initiation — completes and strengthens Baptism. The bishop (or delegated priest) anoints with chrism oil and lays hands on the person. The 7 Gifts of the Holy Spirit are given in their fullness.' },
        { type:'p', text:'<strong>The 7 Gifts:</strong> Wisdom · Understanding · Counsel · Fortitude · Knowledge · Piety · Fear of the Lord.' },
        { type:'p', text:'<strong>Plain English:</strong> Confirmation makes you a soldier of Christ — equipped and strengthened to live and defend the faith as a mature Catholic.' }
      ]},
      { type:'subsection', title:'Contrition', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Genuine sorrow for sin. Required for valid Confession. Two types:' },
        { type:'p', text:'<strong>Perfect contrition</strong> — being sorry because you love God and your sin has hurt Him. Forgives sins even before reaching Confession.' },
        { type:'p', text:'<strong>Imperfect contrition</strong> — being sorry because you fear punishment or Hell. Still valid for Confession.' }
      ]},
      { type:'subsection', title:'Creed', subtitle:'C', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A formal statement of belief. From the Latin "credo" — "I believe." Two main creeds: the Apostles\' Creed (simpler, used in the Rosary and Baptism) and the Nicene Creed (longer, said at Sunday Mass, defined at the Council of Nicaea in 325 AD to clarify who Jesus is).' }
      ]},
      { type:'subsection', title:'Diocese', subtitle:'D', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A geographic region governed by a bishop, made up of multiple parishes. Your local church is a parish. The parishes in your area together form a diocese. A larger diocese is called an Archdiocese, led by an Archbishop.' }
      ]},
      { type:'subsection', title:'Doctrine', subtitle:'D', blocks:[
        { type:'p', text:'<strong>What it means:</strong> An official teaching of the Church. All dogmas are doctrines, but not all doctrines are dogmas. Doctrine covers everything the Church officially teaches — about faith, morals, sacraments, Scripture, and life.' },
        { type:'p', text:'<strong>Doctrine vs. Dogma:</strong> Dogma is the highest level — defined solemnly and irreversibly. Doctrine includes dogmas plus other authoritative teachings that may develop in their expression over time (though never contradict themselves).' },
        { type:'p', text:'<strong>Plain English:</strong> What the Church officially teaches. Not personal opinion. Not one bishop\'s view. The formal, authoritative teaching of the Magisterium.' }
      ]},
      { type:'subsection', title:'Dogma', subtitle:'D', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A truth revealed by God and formally defined by the Church as requiring the assent of faith. Not opinions — truths the Church has definitively declared. Examples: the Trinity, the Incarnation, the Real Presence in the Eucharist, the Immaculate Conception.' },
        { type:'p', text:'<strong>Common confusion:</strong> People use "dogma" negatively to mean "rigid rules." In Catholic usage it simply means a definitively revealed truth.' }
      ]},
      { type:'subsection', title:'Ecumenism', subtitle:'E', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The movement toward unity among all Christians. From Greek "oikoumene" — the whole inhabited world. Catholic ecumenism seeks to restore full visible unity among all baptized Christians, while maintaining the fullness of Catholic faith.' },
        { type:'p', text:'<strong>What it is NOT:</strong> Ecumenism is not saying all Christian denominations teach the same thing. It is not relativism. It is honest dialogue, prayer together, and working toward unity — while being clear about where real differences exist.' }
      ]},
      { type:'subsection', title:'Eucharist', subtitle:'E', blocks:[
        { type:'p', text:'<strong>What it means:</strong> From Greek "eucharistia" — thanksgiving. The central sacrament of Catholic faith — the Body, Blood, Soul, and Divinity of Jesus Christ present under the appearance of bread and wine. Also called: Holy Communion, the Blessed Sacrament, the Lord\'s Supper.' },
        { type:'p', text:'<strong>Plain English:</strong> When Catholics say "I received the Eucharist" they mean they received Jesus Himself — physically, truly, completely. Not a symbol. Not bread to remember Him by. The actual Person of Christ.' }
      ]},
      { type:'subsection', title:'Examination of Conscience', subtitle:'E', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A prayerful review of your thoughts, words, and actions to identify where you have sinned. Done before Confession and recommended as a nightly practice. You go through the Ten Commandments asking: "How did I fail here today?" Not self-condemnation — honest spiritual hygiene.' }
      ]},
      { type:'subsection', title:'Grace', subtitle:'G', blocks:[
        { type:'p', text:'<strong>What it means:</strong> God\'s free, unearned gift of His own divine life shared with us. Not a feeling — an actual sharing in God\'s nature.' },
        { type:'p', text:'<strong>Sanctifying grace</strong> — the permanent state of being in right relationship with God. Given at Baptism. Destroyed by mortal sin. Restored by Confession.' },
        { type:'p', text:'<strong>Actual grace</strong> — specific, temporary help from God for a particular moment or decision. The nudge you feel to do good — that is actual grace.' },
        { type:'p', text:'<strong>Plain English:</strong> Grace is God\'s life inside you. Like electricity in a wire — you cannot see it, but everything changes when it is flowing.' }
      ]},
      { type:'subsection', title:'Heresy', subtitle:'H', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The deliberate denial or doubt of a defined dogma of the Catholic faith by a baptized person. From Greek "hairesis" — a choice. Heresy is choosing to reject a specific defined teaching while remaining in the Church.' },
        { type:'p', text:'<strong>Examples in history:</strong> Arianism (denied full divinity of Christ) · Pelagianism (denied original sin and grace) · Gnosticism (matter is evil).' },
        { type:'p', text:'<strong>Plain English:</strong> Heresy is not doubt or questioning. It is a deliberate, sustained rejection of something the Church has definitively defined. Most people who disagree with the Church are not heretics — they are just people who disagree.' }
      ]},
      { type:'subsection', title:'Holy Orders', subtitle:'H', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The sacrament by which men are ordained as deacons, priests, or bishops. Through the laying on of hands and prayer of consecration, the Holy Spirit configures the ordained man to Christ the Head and Priest. It imprints a permanent spiritual character.' },
        { type:'p', text:'<strong>Three degrees:</strong> Diaconate (deacons — serve and assist) · Presbyterate (priests — consecrate the Eucharist, absolve sins) · Episcopate (bishops — fullness of the priesthood, ordain, confirm, govern).' },
        { type:'p', text:'<strong>Plain English:</strong> Holy Orders is what makes a priest a priest. It is not a promotion or a job title — it is a permanent ontological change. An ordained man is different at the level of being, not just function.' }
      ]},
      { type:'subsection', title:'Homily', subtitle:'H', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The priest\'s talk during Mass, given after the Gospel reading. A homily is specifically tied to the Scripture readings of that day — it explains and applies them to your life.' },
        { type:'p', text:'<strong>Sermon vs. Homily:</strong> A sermon can be on any topic. A homily is specifically based on the Scripture readings of that Mass.' }
      ]},
      { type:'subsection', title:'Immaculate Conception', subtitle:'I', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The Catholic dogma that Mary was conceived without original sin — preserved from the stain of original sin from the very first moment of her existence by God\'s grace. This is about MARY\'s conception, not Jesus\'s.' },
        { type:'p', text:'<strong>Common confusion:</strong> Many people think this refers to Jesus being born of a virgin. It does not. The Virgin Birth is a separate teaching. The Immaculate Conception is about Mary — so she would be a worthy vessel for God.' }
      ]},
      { type:'subsection', title:'Incarnation', subtitle:'I', blocks:[
        { type:'p', text:'<strong>What it means:</strong> God becoming human. From Latin "in carne" — "in flesh." The Second Person of the Trinity took on a human body and human nature in Mary\'s womb. Jesus is fully God AND fully human — not half and half, not God wearing a human costume. Fully both.' },
        { type:'p', text:'<strong>Why it matters:</strong> God knows exactly what it is to be you — hungry, tired, afraid, tempted, grieving. He did not observe human life from a distance. He lived it completely.' }
      ]},
      { type:'subsection', title:'Indulgence', subtitle:'I', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The remission of temporal punishment due to sins that have already been forgiven. When a sin is forgiven in Confession the eternal punishment is removed — but temporal consequences (a debt still needing repayment) may remain. An indulgence cancels this remaining temporal punishment through the merits of Christ and the saints.' },
        { type:'p', text:'<strong>Common confusion:</strong> Indulgences do NOT forgive sins — only Confession does that. They also cannot be purchased — the Church abolished that abuse in the 16th century.' }
      ]},
      { type:'subsection', title:'Intercession', subtitle:'I', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Praying to God on behalf of someone else. When Catholics ask saints or Mary to intercede, they are asking them to pray to God for them — the same as asking a friend to pray for you, except saints are confirmed to be with God and their prayers are especially powerful.' },
        { type:'p', text:'<strong>Intercession vs. Worship:</strong> Only God is worshipped. Saints and Mary are asked to intercede — to pray. The request goes through them to God.' }
      ]},
      { type:'subsection', title:'Lent', subtitle:'L', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The 40-day season before Easter during which Catholics fast, pray, and give alms to prepare for Easter. Begins on Ash Wednesday. The 40 days mirror Jesus\'s 40 days fasting in the desert. The three pillars: fasting (denying yourself), prayer (more time with God), almsgiving (giving to the poor).' },
        { type:'p', text:'<strong>Ash Wednesday:</strong> Ashes placed on forehead in sign of cross: "Remember that you are dust, and to dust you shall return."' }
      ]},
      { type:'subsection', title:'Liturgy', subtitle:'L', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The official public worship of the Church — the set prayers, rituals, and sacraments celebrated communally. The Mass is the central liturgy. The Liturgy of the Hours is the daily prayer cycle of morning, midday, evening, and night prayers prayed by priests, religious, and many laypeople worldwide.' },
        { type:'p', text:'<strong>Plain English:</strong> Liturgy is structured, communal worship — the Church doing something specific that Christ commanded, not just expressing feelings.' }
      ]},
      { type:'subsection', title:'Magisterium', subtitle:'M', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The official teaching authority of the Catholic Church — exercised by the Pope and bishops in union with him. From Latin "magister" — teacher. The Magisterium authoritatively interprets Scripture and Tradition, ensuring the faith is passed on accurately across generations.' },
        { type:'p', text:'<strong>Plain English:</strong> The Magisterium is the Church\'s authority to say "this is what the faith teaches" definitively. Without it, every generation would reinterpret the faith however they liked and it would drift beyond recognition.' }
      ]},
      { type:'subsection', title:'Mass', subtitle:'M', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The central act of Catholic worship — the celebration of the Eucharist. Every Mass re-presents (makes present) the one sacrifice of Christ on the Cross. Not a re-sacrifice — the same sacrifice made present across time. Two main parts: the Liturgy of the Word (readings, homily, Creed, prayers) and the Liturgy of the Eucharist (consecration, Communion).' },
        { type:'p', text:'<strong>Why "Mass"?</strong> From Latin "missa" — the dismissal at the end: "Ite, missa est" (Go, it is the dismissal). The whole celebration is named for the moment we are sent out to live what we received.' }
      ]},
      { type:'subsection', title:'Matrimony', subtitle:'M', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The sacrament of Marriage — a covenant between one baptized man and one baptized woman, freely entered, open to children, and indissoluble (permanent). When two baptized Catholics marry in the Church, Christ is present and the marriage itself becomes a sacrament — a visible sign of His love for the Church.' },
        { type:'p', text:'<strong>What makes it a sacrament:</strong> The spouses are the ministers of the sacrament to each other. The priest witnesses in the name of the Church. The consent — "I do" — is the moment of the sacrament.' },
        { type:'p', text:'<strong>Plain English:</strong> Catholic marriage is not a contract that can be dissolved. It is a covenant modeled on Christ\'s covenant with the Church — permanent, faithful, life-giving.' }
      ]},
      { type:'subsection', title:'Monstrance', subtitle:'M', blocks:[
        { type:'p', text:'<strong>What it means:</strong> From Latin "monstrare" — to show. A large, ornate vessel — usually gold, sun-shaped — used to display a consecrated host for adoration. When the Eucharist is placed in a monstrance for public adoration, it is called Benediction or Eucharistic Adoration.' },
        { type:'p', text:'<strong>Adoration:</strong> Sitting or kneeling in silence before the Blessed Sacrament in a monstrance. Many Catholics report profound peace, healing, and clarity from regular Eucharistic Adoration. Some parishes offer Perpetual Adoration — 24 hours a day, 7 days a week.' }
      ]},
      { type:'subsection', title:'Mortal Sin', subtitle:'M', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A serious sin that completely breaks your relationship with God. Three conditions must all be present: (1) grave matter (serious subject), (2) full knowledge (you know it is seriously wrong), (3) deliberate consent (you freely choose it). Must be confessed before receiving Communion.' },
        { type:'p', text:'<strong>Why "mortal"?</strong> Because it kills the spiritual life — sanctifying grace — in the soul.' }
      ]},
      { type:'subsection', title:'Novena', subtitle:'N', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A prayer said for 9 consecutive days, often for a specific intention. From Latin "novem" — nine. Based on the 9 days the apostles and Mary prayed between the Ascension and Pentecost (Acts 1:14) — the first novena. Popular: Novena to the Holy Spirit, Divine Mercy Novena, Novena to St. Jude (for impossible causes).' }
      ]},
      { type:'subsection', title:'Original Sin', subtitle:'O', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The condition of spiritual brokenness inherited by all humans as a result of Adam and Eve\'s sin. Not a personal fault — a state you are born into. Results in death, suffering, tendency toward sin, and separation from God. Completely removed by Baptism.' },
        { type:'p', text:'<strong>Plain English:</strong> Original sin is like being born into a family in debt. You didn\'t cause the debt but you inherit the situation. Baptism pays the debt completely. You start fresh.' }
      ]},
      { type:'subsection', title:'Paschal Mystery', subtitle:'P', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The central events of salvation: the suffering, death, Resurrection, and Ascension of Jesus Christ. "Paschal" comes from Hebrew "Pesach" (Passover) — Jesus is the true Passover Lamb. The Paschal Mystery is made present at every Mass and sacrament. When you receive the Eucharist, you are entering the Paschal Mystery.' }
      ]},
      { type:'subsection', title:'Penance', subtitle:'P', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Two related meanings: (1) The act assigned by the priest after Confession — usually prayers or a charitable act — as spiritual repair. (2) The Sacrament of Penance — another name for Confession/Reconciliation. Also used for voluntary acts of self-denial (fasting, giving something up) offered to God as spiritual discipline.' }
      ]},
      { type:'subsection', title:'Pope', subtitle:'P', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The Bishop of Rome and head of the universal Catholic Church — the successor of St. Peter. Jesus gave Peter the "keys of the kingdom" (Matthew 16:19) and said "you are Peter, and on this rock I will build my Church."' },
        { type:'p', text:'<strong>Papal infallibility:</strong> Does NOT mean the Pope cannot sin or is always right about everything. It means when he speaks formally on matters of faith and morals for the whole Church, the Holy Spirit prevents him from defining error. This has only been used twice formally in modern history.' }
      ]},
      { type:'subsection', title:'Purgatory', subtitle:'P', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The state of purification for souls who die in God\'s grace but are not yet fully purified — still carrying effects of sin that must be cleansed before entering Heaven. Not a second chance — a final preparation. The souls there are saved — they will reach Heaven. We can pray and offer Masses for them.' },
        { type:'p', text:'<strong>Plain English:</strong> Imagine Heaven is a perfectly clean white room. Purgatory is the shower you take before entering. You are definitely getting in — you just need to be fully clean first.' }
      ]},
      { type:'subsection', title:'Reparation', subtitle:'R', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Making amends for sin — repairing the damage done. Forgiveness covers the guilt, but reparation addresses the wound. If you stole something and confess it — you are forgiven. But you should also return what you stole. That is reparation. In the context of Mary\'s requests at Fatima, she asks for reparation to her Immaculate Heart — making amends for offenses against her through prayer, fasting, and the sacraments.' }
      ]},
      { type:'subsection', title:'Rosary', subtitle:'R', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A form of prayer using beads to count repetitions. From "rosarium" — rose garden. You pray decades (sets of ten Hail Marys) while meditating on the Mysteries — scenes from the lives of Jesus and Mary. The beads keep your hands occupied so your mind can meditate. Mary called it her favorite prayer and the most powerful weapon against evil.' }
      ]},
      { type:'subsection', title:'Sacrament', subtitle:'S', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A visible, physical sign instituted by Christ that actually produces the grace it signifies. The classic definition: "an outward sign instituted by Christ to give grace." There are 7. Each uses something physical (water, oil, bread, words) to deliver something supernatural (grace, forgiveness, the Holy Spirit, Jesus Himself).' },
        { type:'p', text:'<strong>Plain English:</strong> A sacrament is not a ceremony that represents a spiritual reality. It IS a spiritual reality. The water of Baptism actually washes away sin. The words of absolution actually forgive. Not symbolically — really.' }
      ]},
      { type:'subsection', title:'Schism', subtitle:'S', blocks:[
        { type:'p', text:'<strong>What it means:</strong> A formal break in communion with the Church — refusing obedience to the Pope or rejecting communion with Church members in communion with him. From Greek "schisma" — a tear.' },
        { type:'p', text:'<strong>Major schisms:</strong> The Great Schism of 1054 — the split between Roman Catholic and Eastern Orthodox churches over papal authority. The Protestant Reformation (1517) — technically a series of schisms and heresies combined.' },
        { type:'p', text:'<strong>Schism vs. Heresy:</strong> Heresy rejects doctrine. Schism rejects Church authority and communion — even if doctrine is mostly intact. The Orthodox Churches are in schism but not heresy on most points.' }
      ]},
      { type:'subsection', title:'Stigmata', subtitle:'S', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Wounds corresponding to the five wounds of Christ\'s crucifixion (hands, feet, and side) that appear supernaturally on a person\'s body as a mystical sharing in Christ\'s Passion. Over 300 cases documented in Church history. The most famous modern case: St. Padre Pio, who bore the wounds visibly and painfully for 50 years until they disappeared completely at his death.' }
      ]},
      { type:'subsection', title:'Tabernacle', subtitle:'T', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The ornate, secure container — usually gold — at the front of a Catholic church where the consecrated hosts (the Blessed Sacrament) are kept. When occupied, a sanctuary lamp (red candle) burns nearby. Catholics genuflect (briefly kneel on one knee) when passing the tabernacle as a sign of reverence for Christ\'s presence.' },
        { type:'p', text:'<strong>Origin:</strong> Named for the Tabernacle in the Old Testament — the tent that housed the Ark of the Covenant (God\'s presence). The Catholic tabernacle holds the true Ark — Jesus Himself.' }
      ]},
      { type:'subsection', title:'Transubstantiation', subtitle:'T', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The change by which the entire substance of bread and wine becomes the Body and Blood of Christ at the words of consecration during Mass — while the appearance (taste, texture, smell) of bread and wine remains. The substance changes. The appearances do not.' },
        { type:'p', text:'<strong>Plain English:</strong> The bread looks, tastes, and smells like bread. But what it IS — its deepest reality — is no longer bread. It is Christ. Same exterior. Completely different interior reality.' }
      ]},
      { type:'subsection', title:'Triduum', subtitle:'T · "TRID-yoo-um"', blocks:[
        { type:'p', text:'<strong>What it means:</strong> The three holiest days of the Catholic year — Holy Thursday, Good Friday, and Holy Saturday/Easter Vigil. One continuous liturgy celebrating the Paschal Mystery. Holy Thursday — Mass of the Lord\'s Supper. Good Friday — the Passion and veneration of the Cross, no Mass (the only day of the year without Mass). Holy Saturday night — the Easter Vigil, the most important liturgy of the year.' }
      ]},
      { type:'subsection', title:'Veneration', subtitle:'V', blocks:[
        { type:'p', text:'<strong>What it means:</strong> Deep honor and respect given to saints and holy objects — distinct from worship which belongs to God alone. When Catholics kiss an icon, bow before a statue, or ask a saint to pray for them — that is veneration, not worship. The Church distinguishes: worship of God (latria), honor of saints (dulia), special honor of Mary (hyperdulia).' }
      ]},
      { type:'subsection', title:'Vocation', subtitle:'V', blocks:[
        { type:'p', text:'<strong>What it means:</strong> From Latin "vocare" — to call. A calling from God — the specific way He is inviting you to love and serve. Every person has a vocation. The primary vocations: Marriage, Holy Orders (priesthood/diaconate), and consecrated life (religious orders).' },
        { type:'p', text:'<strong>Plain English:</strong> Your vocation is not just your job or state of life. It is who God made you to be and what He made you to do. God plants the desires that lead to your vocation — so pay attention to your deepest desires.' }
      ]}
    ]
  },

  // ────────────────────────────────────────────────────────
  // BAPTISM (condensed)
  // ────────────────────────────────────────────────────────
  'baptism-full': {
    eyebrow: 'Sacrament',
    title: 'Catholic Baptism',
    meta: 'A complete guide',
    img: 'img/baptism.jpg',
    hasAudio: false,
    blocks: [
      { type:'callout', tone:'gold', title:'🕊️ A Guide to Catholic Baptism', body:'Baptism is one of the most important moments in a person\'s entire life — the day they become a child of God, receive the Holy Spirit, and are welcomed into the Church. This guide walks you through every step and every word so you feel fully prepared and present.' },

      { type:'accordion', eyebrow:'Foundation', title:'What Baptism Does to the Child', subtitle:'Start here', open:true, blocks:[
      { type:'callout', tone:'gold', title:'Baptism is not just a ceremony', body:'The Catholic Church teaches that something real and permanent happens in the water. Seven things happen the moment the water is poured:' },
      { type:'list', items:[
        '<strong>Original sin is washed away</strong> — the spiritual weight inherited from Adam and Eve is completely gone. He starts clean.',
        '<strong>He becomes a child of God</strong> — not metaphorically. Literally adopted into God\'s family. God becomes his Father in a new, deep way.',
        '<strong>The Holy Spirit comes to live in him</strong> — his body becomes a temple of the Holy Spirit from this moment forward.',
        '<strong>He becomes part of the Church</strong> — not just your local parish, but the universal Church across all time — connected to every saint, every believer, living and dead.',
        '<strong>He is clothed in Christ</strong> — Paul says "as many of you as have been baptized into Christ have put on Christ" (Galatians 3:27). Christ is now his identity.',
        '<strong>He receives the light of Christ</strong> — symbolized by the candle. He is called to walk as a child of light.',
        '<strong>He receives an indelible mark on his soul</strong> — Baptism cannot be undone. Even if he walks away from the faith someday, the mark remains. He can always come home.'
      ]}
      ]},

      { type:'accordion', eyebrow:'Prepare', title:'What to Bring & What to Wear', subtitle:'Practical', blocks:[
      { type:'h', text:'What to Bring' },
      { type:'list', items:[
        '<strong>White garment</strong> — a white outfit or christening gown. Symbolizes the child is now clothed in Christ. Many families use a heirloom gown passed down through generations.',
        '<strong>Baptism candle</strong> — your parish may provide one, or you can bring your own. It will be lit from the Easter (Paschal) candle during the ceremony.',
        '<strong>Godparents confirmed and present</strong> — both must be practicing Catholics (at least one). They need to be physically there.',
        '<strong>His baptism certificate paperwork</strong> — filled in beforehand with his full name if required by your parish.'
      ]},
      { type:'h', text:'Good to Know' },
      { type:'p', text:'Dress him in the white garment after the water is poured — not before, unless the priest instructs otherwise. Have a change of clothes ready since the water will make the top of his head wet.' }
      ]},

      { type:'accordion', eyebrow:'The Ceremony', title:'Step by Step — What Happens & When', subtitle:'Full walkthrough', blocks:[

      { type:'subsection', title:'Step 1 · Reception at the Door', blocks:[
        { type:'p', text:'The priest meets you at the entrance of the church or the baptismal area. He greets you warmly and asks the first question.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"What name do you give your child?"' },
        { type:'callout', tone:'gold', title:'👉 You say', body:'<strong>[Child\'s name]</strong> — say it clearly and with joy. This is the name he will carry as a child of God.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"What do you ask of God\'s Church for [name]?"' },
        { type:'callout', tone:'gold', title:'👉 You say', body:'<strong>Baptism.</strong> One word. Simple and powerful.' }
      ]},

      { type:'subsection', title:'Step 2 · Accepting Your Responsibility', blocks:[
        { type:'p', text:'The priest speaks directly to the parents. Listen carefully — this is the public commitment to raise the child in the faith.' },
        { type:'callout', tone:'blue', title:'Priest says to parents', body:'"You have asked to have your child baptized. In doing so you are accepting the responsibility of training him in the practice of the faith. It will be your duty to bring him up to keep God\'s commandments as Christ taught us, by loving God and our neighbor. Do you clearly understand what you are undertaking?"' },
        { type:'callout', tone:'gold', title:'👉 Parents say', body:'<strong>We do.</strong> The parents are promising to be the child\'s first teachers of faith. The most important yes a parent will ever say.' },
        { type:'callout', tone:'blue', title:'Priest says to godparents', body:'"Are you ready to help the parents of this child in their duty as Christian parents?"' },
        { type:'callout', tone:'gold', title:'👉 Godparents say', body:'<strong>We are.</strong> The godparents are committing to be backup parents in faith. If something happens to you, they raise him Catholic.' }
      ]},

      { type:'subsection', title:'Step 3 · Signing with the Cross', blocks:[
        { type:'p', text:'The priest traces the Sign of the Cross on the child\'s forehead and then invites parents and godparents to do the same.' },
        { type:'callout', tone:'blue', title:'Priest says', body:'"[Name], the Christian community welcomes you with great joy. In its name I claim you for Christ our Savior by the sign of his cross."' },
        { type:'callout', tone:'blue', title:'What to do', body:'After the priest traces the cross, parents and godparents each gently trace the Sign of the Cross on the child\'s forehead with their thumb. This is the first time the child is marked as belonging to Christ. Take a moment — let it be intentional.' }
      ]},

      { type:'subsection', title:'Step 4 · Readings & Homily', blocks:[
        { type:'p', text:'You will process to the altar or a reading area. There is a short reading from Scripture and a brief homily (talk) from the priest about the meaning of Baptism. You just listen during this part.' }
      ]},

      { type:'subsection', title:'Step 5 · Intercessions (Prayers of the Faithful)', blocks:[
        { type:'p', text:'The priest or a reader leads a series of short prayers. The congregation responds after each one.' },
        { type:'callout', tone:'blue', title:'Leader says', body:'"By the mystery of your death and resurrection, bathe this child in light, give him the new life of baptism and welcome him into your holy Church."' },
        { type:'callout', tone:'gold', title:'👉 Everyone responds', body:'<strong>Lord, hear our prayer.</strong> You say this after every petition. It simply means: "Yes, God — please do this."' }
      ]},

      { type:'subsection', title:'Step 6 · Litany of Saints', blocks:[
        { type:'p', text:'The priest calls out the names of saints one by one — asking them to pray for the child as they enter the Church. The congregation responds after each name. The child\'s patron saint and the family\'s patron saints may be included.' },
        { type:'callout', tone:'blue', title:'Priest calls out', body:'Holy Mary, Mother of God…<br>Saint John the Baptist…<br>Saint Joseph…<br>Saint Peter and Saint Paul…<br>[Child\'s patron saint]…<br>All holy men and women…' },
        { type:'callout', tone:'gold', title:'👉 Everyone responds after each name', body:'<strong>Pray for us.</strong> The whole of Heaven is being invited to show up for this baptism. Every saint named is asked to pray for the child right now.' }
      ]},

      { type:'subsection', title:'Step 7 · Renouncing Evil — The 3 Renunciations', blocks:[
        { type:'p', text:'This is one of the most powerful moments. The priest asks parents and godparents — on behalf of the child — to renounce Satan and everything he stands for. Answer three times. Say it clearly and with conviction.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"Do you renounce Satan?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>I do.</strong> You are saying: evil has no claim on my son.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"And all his works?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>I do.</strong> Everything evil does — the lies, the destruction, the temptations — all of it rejected on behalf of this child.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"And all his empty promises?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>I do.</strong> Everything the world promises that leads away from God — rejected. All of it.' }
      ]},

      { type:'subsection', title:'Step 8 · Profession of Faith — The 3 Questions', blocks:[
        { type:'p', text:'Immediately after the renunciations, parents and godparents profess the Christian faith on behalf of the child. Three questions — three "I do"s. This is declaring what the child is being baptized into.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"Do you believe in God, the Father Almighty, Creator of Heaven and earth?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>I do.</strong>' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"Do you believe in Jesus Christ, His only Son, our Lord, who was born of the Virgin Mary, was crucified, died, and was buried, rose from the dead, and is now seated at the right hand of the Father?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>I do.</strong>' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"Do you believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>I do.</strong>' },
        { type:'callout', tone:'blue', title:'Priest says', body:'"This is our faith. This is the faith of the Church. We are proud to profess it, in Christ Jesus our Lord."' },
        { type:'callout', tone:'gold', title:'👉 Everyone responds', body:'<strong>Amen.</strong> "Yes. This is true. We stand behind it."' }
      ]},

      { type:'subsection', title:'Step 9 · The Baptism — THE Moment 🕊️', blocks:[
        { type:'p', text:'The priest asks the final question before pouring the water. A godparent holds the child over the font.' },
        { type:'callout', tone:'blue', title:'Priest asks', body:'"Is it your will that [name] should be baptized in the faith of the Church, which we have all professed with you?"' },
        { type:'callout', tone:'gold', title:'👉 Parents & Godparents say', body:'<strong>It is.</strong> Two words. The child\'s entire spiritual life begins with this answer.' },
        { type:'callout', tone:'blue', title:'Then the priest pours water three times saying', body:'"[Name], I baptize you in the name of the Father" — (water)<br>"and of the Son" — (water)<br>"and of the Holy Spirit." — (water)<br><br><strong>This is the moment.</strong> Your son is born again. The Holy Spirit enters him. Original sin is gone. He is a child of God. Many parents cry here. Let yourself feel it.' }
      ]},

      { type:'subsection', title:'Step 10 · Anointing with Chrism (Sacred Oil)', blocks:[
        { type:'p', text:'Immediately after the water, the priest anoints the crown of the child\'s head with sacred chrism — a perfumed oil. This is their consecration as priest, prophet, and king.' },
        { type:'callout', tone:'blue', title:'Priest says while anointing', body:'"God the Father of our Lord Jesus Christ has freed you from sin, given you a new birth by water and the Holy Spirit, and welcomed you into His holy people. He now anoints you with the chrism of salvation. As Christ was anointed Priest, Prophet, and King, so may you live always as a member of His body, sharing everlasting life."' },
        { type:'callout', tone:'gold', title:'👉 Everyone says', body:'<strong>Amen.</strong> This child is now a priest (able to offer their life to God), a prophet (able to speak God\'s truth), and a king (sharing in Christ\'s authority). All three — sealed right now.' }
      ]},

      { type:'subsection', title:'Step 11 · The White Garment', blocks:[
        { type:'p', text:'The child is dressed in white. The priest speaks as this is done.' },
        { type:'callout', tone:'blue', title:'Priest says', body:'"[Name], you have become a new creation, and have clothed yourself in Christ. See in this white garment the outward sign of your Christian dignity. With your family and friends to help you by word and example, bring that dignity unstained into the everlasting life of heaven."' },
        { type:'callout', tone:'gold', title:'👉 Everyone says', body:'<strong>Amen.</strong> White = clean. New. Belonging to Christ. Your job from now on is to help him keep that dignity alive.' }
      ]},

      { type:'subsection', title:'Step 12 · The Baptism Candle 🕯️', blocks:[
        { type:'p', text:'A family member — traditionally the father or godfather — lights the baptism candle from the large Easter candle. The priest says:' },
        { type:'callout', tone:'blue', title:'Priest says', body:'"Receive the light of Christ. Parents and godparents, this light is entrusted to you to be kept burning brightly. This child of yours has been enlightened by Christ. He is to walk always as a child of the light. May he keep the flame of faith alive in his heart. When the Lord comes, may he go out to meet Him with all the saints in the heavenly kingdom."' },
        { type:'callout', tone:'gold', title:'👉 Everyone says', body:'<strong>Amen.</strong> The candle is now yours to keep. Light it on the child\'s birthday every year. Light it when they receive First Communion. Light it at Confirmation. It is the flame of their faith — you are the keeper.' }
      ]},

      { type:'subsection', title:'Step 13 · The Our Father', blocks:[
        { type:'p', text:'The priest invites everyone to pray the Our Father together — now praying it as the newly baptized child\'s family for the first time.' },
        { type:'callout', tone:'blue', title:'Priest says', body:'"Dearly beloved, this child has been reborn in baptism. He is now called the child of God, for so indeed he is. In the name of this child, in the Spirit of our common sonship, let us pray together in the words our Lord has given us."' },
        { type:'prayer', label:'👉 Everyone prays together · The Our Father',
          text:'Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.' }
      ]},

      { type:'subsection', title:'Step 14 · Final Blessing', blocks:[
        { type:'p', text:'The priest blesses you — mothers, fathers, godparents, and the whole family — separately and with beautiful words. You just bow your head and receive it.' },
        { type:'callout', tone:'blue', title:'Blessing for the Mother', body:'"God is the giver of all life, human and divine. May He bless the mother of this child. She now thanks God for the gift of her child. May she be one with him in thanking Him forever in heaven, in Christ Jesus our Lord."' },
        { type:'callout', tone:'blue', title:'Blessing for the Father', body:'"God is the giver of all life, human and divine. May He bless the father of this child. With his wife he will be the first teacher of his child in the ways of faith. May he also be the best of teachers, bearing witness to the faith by what he says and does, in Christ Jesus our Lord."' },
        { type:'callout', tone:'gold', title:'👉 Everyone responds after each', body:'<strong>Amen.</strong> Receive the blessing. Let it land.' }
      ]}
      ]},

      { type:'accordion', eyebrow:'Cheat Sheet', title:'Your Responses — All in One Place', subtitle:'Print this', blocks:[
      { type:'callout', tone:'sage', title:'Print or screenshot this', body:'Everything you need to say — in order. Bring this with you.' },
      { type:'list', items:[
        '<strong>"What name do you give?"</strong> → [His name] · <em>Parents</em>',
        '<strong>"What do you ask of God\'s Church?"</strong> → Baptism. · <em>Parents</em>',
        '<strong>"Do you clearly understand what you are undertaking?"</strong> → We do. · <em>Parents</em>',
        '<strong>"Are you ready to help the parents?"</strong> → We are. · <em>Godparents</em>',
        '<strong>Intercessions</strong> → Lord, hear our prayer. · <em>All</em>',
        '<strong>Litany of Saints</strong> → Pray for us. · <em>All</em>',
        '<strong>"Do you renounce Satan?" (×3)</strong> → I do. I do. I do. · <em>Parents + Godparents</em>',
        '<strong>"Do you believe in God?" (×3)</strong> → I do. I do. I do. · <em>Parents + Godparents</em>',
        '<strong>"This is our faith…"</strong> → Amen. · <em>All</em>',
        '<strong>"Is it your will that [name] be baptized?"</strong> → It is. · <em>Parents + Godparents</em>',
        '<strong>After anointing with chrism</strong> → Amen. · <em>All</em>',
        '<strong>After white garment</strong> → Amen. · <em>All</em>',
        '<strong>After candle & each blessing</strong> → Amen. · <em>All</em>',
        '<strong>The Our Father</strong> → Our Father… (full prayer) · <em>All</em>'
      ]}
      ]},

      { type:'accordion', eyebrow:'After', title:'What Happens After Baptism', subtitle:'Your new responsibilities', blocks:[
      { type:'h', text:'Parents Are the First Teachers' },
      { type:'p', text:'When parents say "We do" at the baptism, they make a sacred promise before God and the Church. Here is what that means practically:' },
      { type:'list', items:[
        '<strong>Pray with the child every night</strong> — even now as a baby. They hear your voice. They will grow up knowing that prayer is normal.',
        '<strong>Bring them to Sunday Mass</strong> — they can\'t receive Communion yet, but being present, seeing the altar, hearing the prayers — it shapes them.',
        '<strong>Light the baptism candle on their birthday</strong> — a beautiful yearly tradition to remember what happened on baptism day and what it means.',
        '<strong>Make the Sign of the Cross on the child\'s forehead at bedtime</strong> — the same cross the priest traced on the day of their baptism. You are continuing what the Church started.',
        '<strong>Pray the Guardian Angel prayer with him</strong> — once he can repeat words. This one prayer can carry him for life.'
      ]},
      { type:'callout', tone:'rose', title:'A note on godparents', body:'Their role doesn\'t end today. The Church expects godparents to be present in the child\'s spiritual life — not just gift-givers at birthdays. It\'s worth having a conversation with them about what that looks like going forward.' },
      { type:'prayer', label:'A Prayer on Baptism Day',
        text:'Lord Jesus, we place this child in Your hands today. You have claimed them as Your own. You have sealed them with Your Spirit. You have written their name in the Book of Life. Watch over them all the days of their life. When they are lost, find them. When they fall, lift them. When the world tells them they are not enough, remind them that You chose them before the foundation of the world. May they know Your love from their first breath to their last. And may we — as parents and godparents — be worthy of the trust You have placed in us. Amen.' }
      ]},

      { type:'sectionLabel', text:'For Adults — Coming Into the Church' },
      { type:'callout', tone:'rose', title:'You are never too late', body:'The Catholic Church has a complete, beautiful process specifically designed for adults who want to be baptized and receive all the sacraments. It is called <strong>OCIA</strong> (Order of Christian Initiation of Adults) — also widely known as <strong>RCIA</strong>. It is the same ancient process the early Church used for the first 400 years of Christianity.' },

      { type:'accordion', eyebrow:'Start Here', title:'Which Path Is Yours?', subtitle:'Find yourself', blocks:[
      { type:'p', text:'There are four different situations — each has a different path. Find yours:' },
      { type:'list', items:[
        '<strong>1️⃣ Never baptized in any religion</strong> — You go through the full OCIA process and receive all three Sacraments of Initiation (Baptism, Confirmation, First Eucharist) together at the Easter Vigil. This is the complete journey.',
        '<strong>2️⃣ Already baptized in another Christian church</strong> (Baptist, Methodist, Lutheran, Protestant, etc.) — You are NOT re-baptized. Your baptism is valid. You make a Profession of Faith and receive Confirmation and First Eucharist. You are received into full communion.',
        '<strong>3️⃣ Baptized Catholic as a baby but never received further sacraments</strong> — You receive formation and then receive Confirmation and First Eucharist, often at the Easter Vigil.',
        '<strong>4️⃣ Was Catholic, fell away, want to come back</strong> — Your path back is through <strong>Confession</strong>. Go to a priest. That is literally it. One sacrament restores everything. You are home immediately.'
      ]},
      { type:'callout', tone:'rose', title:'Important', body:'The Catholic Church never re-baptizes anyone who has already received a valid Christian baptism. There is only one Baptism. What it gives — the indelible mark on your soul — can never be erased or repeated.' }
      ]},

      { type:'accordion', eyebrow:'The Journey', title:'The OCIA/RCIA Process — Full Walkthrough', subtitle:'~9–12 months', blocks:[
      { type:'callout', tone:'rose', title:'Timeline', body:'The process typically begins in <strong>September or October</strong> and culminates at the <strong>Easter Vigil</strong> the following spring (Holy Saturday — the night before Easter). The whole journey is roughly 9 months to a year. Some journeys take longer — there is no pressure and no deadline.' },

      { type:'subsection', title:'Phase 1 · Inquiry (Pre-Catechumenate)', blocks:[
        { type:'p', text:'<strong>Duration:</strong> A few weeks to several months — as long as you need.<br><strong>What it is:</strong> The "come and see" phase. No commitment required. You show up, ask questions, explore. The Church asks nothing of you except curiosity. You attend sessions at your local parish where a team walks you through who Jesus is, what the Catholic Church teaches, and what the process looks like. You can leave at any point — no pressure, no judgment.' },
        { type:'p', text:'<strong>What you do:</strong> Contact your local Catholic parish and say: <em>"I\'m interested in becoming Catholic."</em> That is the entire first step. They will guide everything from there.' },
        { type:'callout', tone:'rose', title:'You are called an "Inquirer" during this phase', body:'You are exploring. That is all. God honors curiosity. This is the beginning of the most important journey of your life.' }
      ]},

      { type:'subsection', title:'Rite of Acceptance — The First Official Step', blocks:[
        { type:'p', text:'When you feel ready to go deeper and formally enter the process, you celebrate the <strong>Rite of Acceptance</strong> at Sunday Mass before the whole parish community. This is a beautiful, public moment.' },
        { type:'p', text:'The priest asks you: <em>"What do you ask of God\'s Church?"</em><br>You respond: <em>"Faith."</em> or <em>"Eternal life."</em> or simply: <em>"Baptism."</em>' },
        { type:'p', text:'The priest signs the cross on your forehead, ears, eyes, lips, heart, and hands — claiming every part of you for Christ. You are now officially a <strong>Catechumen</strong>.' },
        { type:'callout', tone:'rose', title:'From this moment on', body:'Even if you die before your Baptism, the Church considers you to have received the "Baptism of Desire." Your intent is enough for God.' }
      ]},

      { type:'subsection', title:'Phase 2 · The Catechumenate', blocks:[
        { type:'p', text:'<strong>Duration:</strong> Several months to a year or more.<br><strong>What it is:</strong> The heart of the preparation. You meet weekly — usually Sunday mornings after the Liturgy of the Word — with a formation team and other catechumens. You study:' },
        { type:'list', items:[
          'The Scriptures — Old and New Testament, how it all connects',
          'Who Jesus is — His life, death, resurrection, and what it means for you personally',
          'The Catholic Faith — the Creed, the sacraments, Catholic moral teaching',
          'How to pray — the Mass, the Rosary, personal prayer',
          'How to live — what it means to follow Jesus in daily life'
        ]},
        { type:'p', text:'<strong>At Sunday Mass during this phase:</strong> Catechumens are dismissed after the Liturgy of the Word (the readings and homily) but before the Eucharist. This is intentional — it mirrors the ancient Church practice and makes the Eucharist more sacred when you finally receive it. You go to a separate room for deeper study of the Gospel reading.' },
        { type:'p', text:'<strong>Choose a Sponsor:</strong> You choose one person — a practicing Catholic — to walk with you through this process. This is similar to a godparent. They pray for you, attend sessions with you, and support you on the journey. Many people choose someone who has been an inspiration to them in the faith.' },
        { type:'p', text:'<strong>Choose a Baptism name (optional):</strong> Many adults choose a saint\'s name to take at Baptism — a patron saint who will pray for them and whose life they want to follow. This is not required but is a beautiful tradition.' }
      ]},

      { type:'subsection', title:'Rite of Election — The Point of No Return (in the best way)', blocks:[
        { type:'p', text:'<strong>When:</strong> First Sunday of Lent (February/March)<br><strong>Where:</strong> Usually at the Cathedral, with the Bishop presiding over all catechumens from the entire diocese.' },
        { type:'p', text:'This is a magnificent ceremony. Your name is written in the Book of the Elect — a physical book that represents your name being written in God\'s Book of Life. You publicly declare your desire to be baptized. The Bishop prays over you. You are now officially called <strong>"The Elect."</strong>' },
        { type:'callout', tone:'rose', title:'"Elect" means chosen', body:'Not by your own merit, but by God\'s grace. You were drawn here. That drawing is God choosing you.' }
      ]},

      { type:'subsection', title:'Phase 3 · Purification and Enlightenment (Lent)', blocks:[
        { type:'p', text:'<strong>Duration:</strong> 40 days of Lent.<br><strong>What it is:</strong> The most intense phase. Lent is not just the Church\'s season — it becomes yours in a special way. You fast, pray, and prepare your heart for what is coming.' },
        { type:'p', text:'<strong>The Three Scrutinies:</strong> On the 3rd, 4th, and 5th Sundays of Lent, the Church holds special prayer ceremonies during Mass called Scrutinies. The priest prays over you publicly — asking God to free you from everything that holds you back, heal anything broken in you, and strengthen you for what is coming. These are deeply moving ceremonies. Many people cry. Let yourself feel it.' },
        { type:'p', text:'<strong>The Presentations:</strong> The Creed and the Our Father are formally "handed over" to you — presented as the foundational prayers of your new life. You memorize them and prepare to proclaim them.' }
      ]},

      { type:'subsection', title:'Phase 4 · The Easter Vigil — THE Night 🔥🕯️', blocks:[
        { type:'p', text:'<strong>When:</strong> Holy Saturday — the night before Easter Sunday. Usually begins after dark, around 8–9 PM.<br><strong>Duration:</strong> 2–3 hours.<br><strong>What it is:</strong> The most sacred night of the entire Catholic year — and the night you have been preparing for.' },
        { type:'p', text:'The Easter Vigil is breathtaking. It begins in complete darkness. A single fire is lit outside the church. The Paschal candle is blessed and lit from this fire. The deacon carries it into the dark church chanting <em>"Lumen Christi"</em> (Light of Christ) — and the congregation\'s candles are lit one by one until the whole church glows.' },
        { type:'h', text:'What happens at the Vigil in order' },
        { type:'list', items:[
          '<strong>Service of Light</strong> — New fire blessed, Paschal candle lit, church filled with candlelight',
          '<strong>Exsultet</strong> — The most ancient and beautiful hymn in the Church, sung by the deacon, announcing the Resurrection',
          '<strong>Liturgy of the Word</strong> — Up to 9 Scripture readings spanning the entire story of salvation, from Creation to Resurrection',
          '<strong>Litany of Saints</strong> — All of Heaven called to witness your baptism',
          '<strong>Blessing of Baptismal Water</strong>',
          '<strong>Renunciation of Evil</strong> — Three times: "Do you renounce Satan?" — <em>"I do."</em>',
          '<strong>Profession of Faith</strong> — Three times: "Do you believe?" — <em>"I do."</em>',
          '<strong>BAPTISM</strong> — Water is poured three times. You are born again. The Holy Spirit enters you. Original sin is gone. You are a child of God. The whole church erupts in joy — bells ring, lights come on, Gloria is sung for the first time since Ash Wednesday.',
          '<strong>Anointing with Chrism</strong> — Sacred oil on your forehead. You are priest, prophet, and king.',
          '<strong>Clothing in White</strong> — You put on a white garment or white stole',
          '<strong>CONFIRMATION</strong> — The Bishop or priest lays hands on you and anoints your forehead: <em>"Be sealed with the gift of the Holy Spirit."</em> You say: <em>"Amen."</em> The Holy Spirit is fully received.',
          '<strong>FIRST HOLY EUCHARIST</strong> — For the first time, you receive the Body and Blood of Jesus Christ. This is the moment you have been building toward for the entire year.'
        ]},
        { type:'callout', tone:'rose', title:'You receive all three Sacraments of Initiation in one night', body:'What a child receives spread over 13 years — Baptism at birth, First Communion at 7, Confirmation at 14 — you receive in a single sacred evening. The ancient Church did it this way. You are living the oldest Christian tradition in existence.' }
      ]},

      { type:'subsection', title:'Phase 5 · Mystagogy (Easter to Pentecost)', blocks:[
        { type:'p', text:'<strong>Duration:</strong> 50 days — Easter Sunday to Pentecost Sunday.<br><strong>What it is:</strong> Mystagogy means "reflection on the mysteries." You continue meeting weekly to unpack what you experienced at the Easter Vigil. Now that you have received the sacraments, you understand them differently — from the inside.' },
        { type:'p', text:'You are now called a <strong>Neophyte</strong> — newly planted. Like a new plant, you need watering, sunlight, and time to root. This phase gives you that.' },
        { type:'p', text:'The process officially concludes at Pentecost — the feast of the Holy Spirit. The same Spirit you received at Confirmation is celebrated on the anniversary of the day He first came to the apostles. Your timing is not accidental. You are connected to 2,000 years of Church history.' }
      ]}
      ]},

      { type:'accordion', eyebrow:'What You Learn', title:'What OCIA Teaches You', subtitle:'Full formation', blocks:[
      { type:'p', text:'OCIA is not a test. It is not a class where you have to get the right answers. It is a formation — a shaping of your whole life around Christ. Here is what is covered:' },
      { type:'rolegrid', items:[
        { title:'Scripture',         body:'How the Old and New Testaments connect, how to read the Bible, and how to encounter Jesus through the Word' },
        { title:'The Creed',         body:'What Catholics believe about God, Jesus, the Holy Spirit, the Church, salvation, and eternal life — and why' },
        { title:'The Sacraments',    body:'All 7 — what they are, what they do, how to receive them, and why they matter for daily life' },
        { title:'The Mass',          body:'Every part of the Mass explained — what is happening, what to say, what to do, and the deep spiritual reality behind each moment' },
        { title:'Prayer Life',       body:'How to pray the Rosary, the Liturgy of the Hours, Lectio Divina, Adoration, Confession, and personal daily prayer' },
        { title:'Catholic Moral Life', body:'The Ten Commandments, the Beatitudes, Church social teaching — how to live righteously in the real world' },
        { title:'Mary and the Saints', body:'Who they are, how intercession works, the major apparitions, and how to develop devotion' },
        { title:'Church History',    body:'From Pentecost to today — 2,000 years of the Church\'s story, including the hard parts' }
      ]}
      ]},

      { type:'accordion', eyebrow:'Timeline', title:'The Adult Sacramental Journey at a Glance', subtitle:'Full picture', blocks:[
      { type:'list', items:[
        '<strong>Inquiry</strong> — Fall · Come and ask questions. No commitment.',
        '<strong>Rite of Acceptance</strong> — Fall/Winter · You are signed with the Cross. Become a Catechumen.',
        '<strong>Catechumenate</strong> — Fall → Lent · Weekly formation. Scripture, sacraments, prayer, moral life.',
        '<strong>Rite of Election</strong> — 1st Sunday of Lent · Name written in Book of the Elect. You are chosen.',
        '<strong>Purification</strong> — Lent (40 days) · Three Scrutinies. Fasting, prayer, deep preparation.',
        '<strong>Easter Vigil 🔥</strong> — Holy Saturday · BAPTISM + CONFIRMATION + FIRST EUCHARIST — all in one night.',
        '<strong>Mystagogy</strong> — Easter → Pentecost · Reflect on the mysteries. Root deeper. Find your place in the Church.',
        '<strong>Fully Catholic</strong> — Pentecost onward · All 3 Sacraments of Initiation received. You are fully home.'
      ]}
      ]},

      { type:'accordion', eyebrow:'First Step', title:'How to Actually Begin', subtitle:'Simple', blocks:[
      { type:'p', text:'Here is all you need to do right now:' },
      { type:'list', items:[
        '<strong>Find a Catholic parish near you</strong> — any Catholic church. Every parish runs OCIA.',
        '<strong>Call or walk in and say:</strong> <em>"I\'m interested in becoming Catholic. Can you tell me about your OCIA/RCIA program?"</em> — That is the entire first step.',
        '<strong>Attend the first inquiry session</strong> — usually held in September or October. No commitment, no pressure.',
        '<strong>Start attending Sunday Mass</strong> — even before you are Catholic, you are welcome at Mass. You just don\'t receive Communion yet. Sit, watch, absorb, pray.'
      ]},
      { type:'prayer', label:'A Prayer for Someone Beginning Their Journey',
        text:'Lord Jesus, I don\'t have everything figured out. I don\'t know all the answers. But something is drawing me to You — and I believe that drawing is You. I am willing to follow wherever this leads. Open my heart to receive what You want to give me. Give me the courage to take the next step. And let every step bring me closer to You. Amen.' },
      { type:'callout', tone:'rose', title:'You don\'t have to have it all together to begin', body:'The catechumens of the early Church were often rough around the edges. So were the apostles. God does not wait for you to be perfect to invite you in. He invites you in precisely because you are not perfect — and then He begins the work of transformation. That is what this whole process is.' }
      ]},

      { type:'accordion', eyebrow:'Compare', title:'Child vs. Adult Initiation — Side by Side', subtitle:'Full picture', blocks:[
      { type:'list', items:[
        '<strong>Baptism</strong> · Child: Infancy — parents decide · Adult: Easter Vigil — your own choice',
        '<strong>First Confession</strong> · Child: Age 7–8, before Communion · Adult: During Lent preparation',
        '<strong>First Eucharist</strong> · Child: Age 7–8 (2nd grade) · Adult: Easter Vigil — same night as Baptism',
        '<strong>Confirmation</strong> · Child: Age 13–17 (years later) · Adult: Easter Vigil — same night as Baptism',
        '<strong>Total time</strong> · Child: ~14–17 years · Adult: ~9–12 months',
        '<strong>The difference</strong> · Child: Faith is given and slowly grown into · Adult: Faith is chosen with full understanding and full desire'
      ]},
      { type:'callout', tone:'gold', title:'Neither path is better than the other', body:'The child baptized in infancy receives the same grace as the adult baptized at the Easter Vigil. What differs is the consciousness — the adult receives everything knowing exactly what they are receiving and having chosen it completely. Both are profound gifts from God.' }
      ]}
    ]
  },

  'stations-of-cross': {
    eyebrow: 'Devotion',
    title: 'Stations of the Cross',
    meta: '14 stations · ~20 min · Fridays · Lent',
    img: 'img/stations.jpg',
    hasAudio: false,
    blocks: [
      { type:'p', text:'Walk with Christ through His Passion. 14 moments from Pilate\'s hall to the tomb. Pray the Stations on Fridays, throughout Lent, or whenever you need to walk close to Christ in His suffering.' },

      { type:'accordion', eyebrow:'Station I', title:'Jesus Is Condemned to Death', subtitle:'Mark 15:15', blocks:[
        { type:'quote', text:'Pilate, wishing to satisfy the crowd, released Barabbas to them and, after he had Jesus scourged, handed him over to be crucified.', cite:'Mark 15:15' },
        { type:'p', text:'Jesus stands before Pilate — innocent, yet condemned. How often do we condemn others out of fear or convenience? Jesus accepted this injustice so that we could stand before the Father as beloved children.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, condemned unjustly, You bore the sentence of death for my sins. Teach me to stand firm in truth even when it costs me. Have mercy on all who are judged unfairly. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station II', title:'Jesus Takes Up His Cross', subtitle:'John 19:17', blocks:[
        { type:'quote', text:'Carrying the cross by himself, Jesus went out to what is called the Place of the Skull.', cite:'John 19:17' },
        { type:'p', text:'Jesus receives the Cross and embraces it. He does not flee. He who created wood from nothing now carries wood toward Calvary. Every cross in your life, He already knows — and He carries it with you.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, You took up the Cross for love of me. Help me to take up my own crosses without complaint. When life is heavy, remind me that You are already carrying it with me. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station III', title:'Jesus Falls the First Time', subtitle:'Isaiah 53:5', blocks:[
        { type:'quote', text:'He was crushed for our iniquities; upon him was the chastisement that brought us peace.', cite:'Isaiah 53:5' },
        { type:'p', text:'The weight is immense. Jesus falls. God falls. And in falling, He sanctifies every time we fall — every failure, every relapse, every moment we collapse under the weight of our weakness.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, You fell and rose again. When I fall into sin or discouragement, help me not to stay on the ground. Give me the grace to rise and continue toward You. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station IV', title:'Jesus Meets His Mother', subtitle:'John 19:25', blocks:[
        { type:'quote', text:'Standing by the cross of Jesus were his mother and his mother\'s sister.', cite:'John 19:25' },
        { type:'p', text:'Their eyes meet. No words could carry what passes between them. Mary who said "yes" at the Annunciation now says "yes" again at Calvary. She does not leave. She stands. She loves.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, the sight of Your Mother pierced both Your hearts. May I never cause grief to those who love me. Mary, Mother of Sorrows, stand with me in my trials as you stood with your Son. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station V', title:'Simon of Cyrene Helps Jesus', subtitle:'Mark 15:21', blocks:[
        { type:'quote', text:'They pressed into service a passer-by, Simon of Cyrene… to carry his cross.', cite:'Mark 15:21' },
        { type:'p', text:'Simon did not volunteer — he was pulled from the crowd. Yet this compelled act became a participation in the Redemption. How many of our "unwanted" burdens are, in fact, God calling us to share in His saving work?' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, Simon carried Your Cross reluctantly, yet touched eternity by doing so. Help me to embrace the crosses I did not choose, knowing that in bearing them for love of You, I share in Your redemption. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station VI', title:'Veronica Wipes the Face of Jesus', subtitle:'Matthew 25:35,40', blocks:[
        { type:'quote', text:'The King will say, "I was thirsty and you gave me drink… whatever you did to the least of my brothers, you did to me."', cite:'Matthew 25:35,40' },
        { type:'p', text:'Tradition tells us Veronica stepped out of the crowd — a small, courageous act of love in the face of soldiers and a raging mob. She wiped His face. He left His image on her cloth.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, Veronica risked everything to show You kindness. Give me courage to act when others stand by. Help me to see Your face in the suffering and forgotten ones I meet today. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station VII', title:'Jesus Falls the Second Time', subtitle:'Psalm 22:1', blocks:[
        { type:'quote', text:'My God, my God, why have you forsaken me? Why are you so far from saving me?', cite:'Psalm 22:1' },
        { type:'p', text:'He falls again. The body gives out but the will remains: He rises. Every recovering addict, every person struggling with the same sin again and again — Jesus knows this road. He already walked it.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, You fell again. You know what it feels like to fail the same way twice. Receive all those who fall repeatedly into the same sin. Your mercy is greater than any fall. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station VIII', title:'Jesus Speaks to the Women of Jerusalem', subtitle:'Luke 23:28', blocks:[
        { type:'quote', text:'Daughters of Jerusalem, do not weep for me; weep instead for yourselves and for your children.', cite:'Luke 23:28' },
        { type:'p', text:'Exhausted and bleeding, Jesus pauses to minister. He turns His suffering into pastoral care. Even on the way to His death, He thinks of others. This is love with no self-interest left.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, even in Your agony You thought of others. Free me from the prison of self-focus. When I suffer, help me to notice those around me who suffer more. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station IX', title:'Jesus Falls the Third Time', subtitle:'Psalm 37:24', blocks:[
        { type:'quote', text:'Though he fall, he shall not be utterly cast down, for the LORD upholds his hand.', cite:'Psalm 37:24' },
        { type:'p', text:'Three falls. Each time He rises. He will not stop until it is finished. Calvary is close. The darkest moment is just before the dawn. Whatever you are facing that feels like a third fall — He is rising here too.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, you fell three times and rose three times. May Your perseverance be my strength when I want to give up. Carry me when I cannot carry myself. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station X', title:'Jesus Is Stripped of His Garments', subtitle:'John 19:24', blocks:[
        { type:'quote', text:'They divided his garments among them by casting lots.', cite:'John 19:24' },
        { type:'p', text:'Every human dignity is stripped away. This is the stripping that prepares for resurrection. God is not shamed by nakedness — He entered it fully, so that He might clothe us in His glory.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, they stripped you of everything. You know what it means to be humiliated. Help me to embrace humility, to strip away pride, and to find my dignity only in You. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station XI', title:'Jesus Is Nailed to the Cross', subtitle:'Luke 23:34', blocks:[
        { type:'quote', text:'Father, forgive them, for they know not what they do.', cite:'Luke 23:34' },
        { type:'p', text:'The nails go in. And His first word is not a cry of pain but a prayer of forgiveness. He has come to this moment specifically to say this — not after recovering, not later. Now, in the moment of being killed.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, nailed through with iron, You prayed for those who hammered the spikes. Give me a heart that forgives those who have hurt me most. I cannot do this without You. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station XII', title:'Jesus Dies on the Cross', subtitle:'John 19:30', blocks:[
        { type:'quote', text:'When Jesus had taken the wine, he said, "It is finished." And bowing his head, he handed over the spirit.', cite:'John 19:30' },
        { type:'p', text:'"It is finished." Tetelestai — the Greek word means "paid in full." Every debt, every sin, every wound. The moment that split history in two. God died. And in dying, destroyed death\'s power forever.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, You bowed Your head and gave Your spirit for me. What can I say? Only: thank You. May my whole life be a response to what You did here. It is finished — and I am free. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station XIII', title:'Jesus Is Taken Down from the Cross', subtitle:'Isaiah 53:5', blocks:[
        { type:'quote', text:'He was pierced for our transgressions; by his wounds we are healed.', cite:'Isaiah 53:5' },
        { type:'p', text:'Mary holds her Son again — as she held Him as an infant in Bethlehem, she now holds Him in the silence of Calvary. The Pietà. She does not abandon the body of Christ, even dead. Neither does the Church.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, taken down by loving hands and placed in Your Mother\'s arms. Mary, hold me too in my times of death — when hopes die, when relationships end, when I lose what I love. Amen.' }
      ]},
      { type:'accordion', eyebrow:'Station XIV', title:'Jesus Is Laid in the Tomb', subtitle:'John 19:41', blocks:[
        { type:'quote', text:'Now in the place where he was crucified there was a garden, and in the garden a new tomb in which no one had yet been buried.', cite:'John 19:41' },
        { type:'p', text:'The stone is rolled. The tomb is sealed. It is Saturday. All seems finished. But the disciples did not yet understand: He said He would rise. The stone cannot hold the Author of life. Sunday is coming.' },
        { type:'prayer', label:'Prayer', text:'Lord Jesus, laid in the tomb — the darkest Saturday in history. Help me to trust You in my times of waiting, of silence, of death. You are already working in the dark. I will wait for Your Sunday. Amen.' }
      ]}
    ]
  },


  // ────────────────────────────────────────────────────────
  // SCRIPTURE LIBRARY — 6 Categories
  // ────────────────────────────────────────────────────────

  'scripture-money': {
    eyebrow: "God's Word for You",
    title: 'Money & Provision',
    meta: 'What God says about your finances · 6 topics',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:'What Scripture Says',
        text:'God is not indifferent to your finances. From Proverbs to the Gospels, Scripture has more to say about money than almost any other topic. Here it is — with a Catholic lens.',
        quote:{ text:'The blessing of the Lord makes rich, and he adds no sorrow with it.', cite:'Proverbs 10:22' }
      },

      { type:'subsection', title:'Prosperity', subtitle:'God desires you to flourish — in every dimension of life', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church teaches prosperity as ordered to the common good. True flourishing (<em>beatitudo</em>) includes the spiritual, communal, and material — never one at the expense of others.' },
        { type:'verseList', items:[
          { cite:'3 John 1:2', text:'Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers.' },
          { cite:'Jeremiah 29:11', text:'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' },
          { cite:'Deuteronomy 8:18', text:'Remember the Lord your God, for it is he who gives you the ability to produce wealth.' },
          { cite:'Proverbs 10:22', text:'The blessing of the Lord makes rich, and he adds no sorrow with it.' },
        ]}
      ]},

      { type:'subsection', title:'Provision', subtitle:'God as your source — He meets every need', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'Catholic tradition holds that God\'s <em>providentia</em> extends to every creature. Trust in Providence is not passivity — it is the posture that lets you act without anxiety.' },
        { type:'verseList', items:[
          { cite:'Philippians 4:19', text:'And my God will meet all your needs according to the riches of his glory in Christ Jesus.' },
          { cite:'Psalm 23:1', text:'The Lord is my shepherd; I shall not want.' },
          { cite:'Matthew 6:26', text:'Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?' },
          { cite:'Isaiah 58:11', text:'The Lord will guide you always; he will satisfy your needs in a sun-scorched land.' },
        ]}
      ]},

      { type:'subsection', title:'Stewardship', subtitle:'Managing what God has entrusted to you — wisely', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'Catholic Social Teaching affirms the <em>universal destination of goods</em>: everything you have is ultimately entrusted to you, not permanently owned by you. Stewardship is accountability to God and neighbor.' },
        { type:'verseList', items:[
          { cite:'Luke 16:10', text:'Whoever can be trusted with very little can also be trusted with much.' },
          { cite:'Matthew 25:21', text:'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.' },
          { cite:'Proverbs 21:5', text:'The plans of the diligent lead to profit as surely as haste leads to poverty.' },
          { cite:'1 Corinthians 4:2', text:'Now it is required that those who have been given a trust must prove faithful.' },
          { cite:'Luke 14:28', text:'Suppose one of you wants to build a tower. Won\'t you first sit down and estimate the cost?' },
        ]}
      ]},

      { type:'subsection', title:'Generosity & Giving', subtitle:'You cannot out-give God', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'St. John Chrysostom: <em>"Not to share your goods with the poor is to steal from them."</em> The Church invites generosity as a virtue that shapes the soul, not just a percentage.' },
        { type:'verseList', items:[
          { cite:'Luke 6:38', text:'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.' },
          { cite:'2 Corinthians 9:7', text:'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' },
          { cite:'Malachi 3:10', text:'Bring the whole tithe into the storehouse... Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven.' },
          { cite:'Proverbs 11:24', text:'One person gives freely, yet gains even more; another withholds unduly, but comes to poverty.' },
          { cite:'Proverbs 19:17', text:'Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.' },
        ]}
      ]},

      { type:'subsection', title:'Favor', subtitle:'Divine positioning — doors open, blessings find you', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'<em>Gratia</em> — grace — literally means favor. Every moment of providential alignment in your life is God\'s ongoing grace at work.' },
        { type:'verseList', items:[
          { cite:'Psalm 5:12', text:'Surely, Lord, you bless the righteous; you surround them with your favor as with a shield.' },
          { cite:'Luke 2:52', text:'And Jesus grew in wisdom and stature, and in favor with God and man.' },
          { cite:'Genesis 39:21', text:'But the Lord was with Joseph and showed him steadfast love and gave him favor in the sight of the keeper of the prison.' },
          { cite:'Psalm 90:17', text:'May the favor of the Lord our God rest on us; establish the work of our hands for us.' },
        ]}
      ]},

      { type:'subsection', title:'Debt & Financial Freedom', subtitle:'Breaking cycles of lack', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church has always taken debt seriously — canon law once prohibited usury. The principle: financial freedom enables freedom of conscience and the freedom to be generous.' },
        { type:'verseList', items:[
          { cite:'Proverbs 22:7', text:'The rich rule over the poor, and the borrower is slave to the lender.' },
          { cite:'Romans 13:8', text:'Let no debt remain outstanding, except the continuing debt to love one another.' },
          { cite:'Deuteronomy 15:6', text:'You will lend to many nations but will borrow from none.' },
          { cite:'Psalm 37:21', text:'The wicked borrow and do not repay, but the righteous give generously.' },
        ]}
      ]},
    ]
  },

  'scripture-purpose': {
    eyebrow: "God's Word for You",
    title: 'Purpose & Calling',
    meta: 'Why are you here? God has an answer · 5 topics',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:'What Scripture Says',
        text:'You were not an accident. Before you were formed, God knew you. Your life has a shape — a vocation. Here\'s what Scripture says about finding it.',
        quote:{ text:'Before I formed you in the womb I knew you, before you were born I set you apart.', cite:'Jeremiah 1:5' }
      },

      { type:'subsection', title:'Purpose & Calling', subtitle:'You were created on purpose, for a purpose', blocks:[
        { type:'callout', tone:'blue', title:'Catholic Context', body:'<em>Vocatio</em> — vocation — is central to Catholic identity. Every person has a primary calling to holiness, and a particular calling (marriage, religious life, priesthood, single life) through which that holiness is lived out.' },
        { type:'verseList', items:[
          { cite:'Jeremiah 1:5', text:'Before I formed you in the womb I knew you, before you were born I set you apart.' },
          { cite:'Ephesians 2:10', text:'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.' },
          { cite:'Romans 8:28', text:'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.' },
          { cite:'Isaiah 46:10', text:'I say, "My purpose will stand." — declares the Lord.' },
        ]}
      ]},

      { type:'subsection', title:'Vision & Hope', subtitle:'Without vision, people drift', blocks:[
        { type:'callout', tone:'blue', title:'Catholic Context', body:'Theological hope (<em>spes</em>) is one of the three theological virtues. It is not optimism — it is confident expectation of eternal life and the graces to reach it. That posture changes everything in the present.' },
        { type:'verseList', items:[
          { cite:'Proverbs 29:18', text:'Where there is no vision, the people perish.' },
          { cite:'Habakkuk 2:2', text:'Write down the revelation and make it plain on tablets so that a herald may run with it.' },
          { cite:'Hebrews 11:1', text:'Now faith is confidence in what we hope for and assurance about what we do not see.' },
          { cite:'Isaiah 43:19', text:'See, I am doing a new thing! Now it springs up; do you not perceive it?' },
        ]}
      ]},

      { type:'subsection', title:'Wisdom', subtitle:'Discernment, clarity, and smart decisions', blocks:[
        { type:'callout', tone:'blue', title:'Catholic Context', body:'<em>Sapientia</em> — wisdom — is one of the Seven Gifts of the Holy Spirit. It is not acquired through study alone; it is infused by the Spirit and perfected through prayer, suffering, and humility.' },
        { type:'verseList', items:[
          { cite:'James 1:5', text:'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault.' },
          { cite:'Proverbs 9:10', text:'The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.' },
          { cite:'Colossians 4:5', text:'Be wise in the way you act toward outsiders; make the most of every opportunity.' },
          { cite:'Proverbs 13:20', text:'Walk with the wise and become wise, for a companion of fools suffers harm.' },
        ]}
      ]},

      { type:'subsection', title:'Gifts & Talents', subtitle:'God-given abilities — meant to be used boldly', blocks:[
        { type:'callout', tone:'blue', title:'Catholic Context', body:'The Church distinguishes <em>charisms</em> (gifts for building the Body of Christ) from personal talents. Both come from God. Both carry responsibility. "To whom much is given, much is required."' },
        { type:'verseList', items:[
          { cite:'Romans 12:6', text:'We have different gifts, according to the grace given to each of us.' },
          { cite:'1 Peter 4:10', text:'Each of you should use whatever gift you have received to serve others, as faithful stewards of God\'s grace in its various forms.' },
          { cite:'1 Timothy 4:14', text:'Do not neglect your gift.' },
          { cite:'Proverbs 18:16', text:'A gift opens the way and ushers the giver into the presence of great people.' },
        ]}
      ]},

      { type:'subsection', title:'Work & Excellence', subtitle:'Working as if God is your boss', blocks:[
        { type:'callout', tone:'blue', title:'Catholic Context', body:'Pope St. John Paul II\'s <em>Laborem Exercens</em> argues work is participation in God\'s ongoing creation. Excellence at work is a form of worship. It was never meant to be a curse.' },
        { type:'verseList', items:[
          { cite:'Colossians 3:23', text:'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.' },
          { cite:'Proverbs 22:29', text:'Do you see someone skilled in their work? They will serve before kings.' },
          { cite:'Genesis 2:15', text:'The Lord God took the man and put him in the Garden of Eden to work it and take care of it.' },
          { cite:'Proverbs 14:23', text:'All hard work brings a profit, but mere talk leads only to poverty.' },
        ]}
      ]},
    ]
  },

  'scripture-healing': {
    eyebrow: "God's Word for You",
    title: 'Healing & Peace',
    meta: 'For anxiety, grief, and the weight you carry · 5 topics',
    img: 'img/healing.jpg',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:'What Scripture Says',
        text:'God does not stand at a distance from your pain. He moves into it. He heals — body, soul, and spirit. Here\'s what Scripture promises.',
        quote:{ text:'The Lord is close to the brokenhearted and saves those who are crushed in spirit.', cite:'Psalm 34:18' }
      },

      { type:'subsection', title:'Healing', subtitle:'Physical, emotional, spiritual — He restores', blocks:[
        { type:'callout', tone:'sage', title:'Catholic Context', body:'The Anointing of the Sick is a Sacrament precisely because healing matters to God. The Church does not spiritualize away suffering — she meets it with oil, prayer, and the real presence of Christ.' },
        { type:'verseList', items:[
          { cite:'Isaiah 53:5', text:'But he was pierced for our transgressions... and by his wounds we are healed.' },
          { cite:'Psalm 103:3', text:'Who forgives all your sins and heals all your diseases.' },
          { cite:'James 5:14', text:'Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord.' },
          { cite:'Jeremiah 17:14', text:'Heal me, Lord, and I will be healed; save me and I will be saved, for you are the one I praise.' },
          { cite:'Revelation 21:4', text:'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain.' },
        ]}
      ]},

      { type:'subsection', title:'Peace (Shalom)', subtitle:'Nothing missing, nothing broken — whole and complete', blocks:[
        { type:'callout', tone:'sage', title:'Catholic Context', body:'<em>Pax</em> — peace — is the greeting and closing of every Mass. The kiss of peace is not ceremonial; it is the transmission of Christ\'s actual peace, received in the Eucharist, extended to the community.' },
        { type:'verseList', items:[
          { cite:'John 14:27', text:'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.' },
          { cite:'Philippians 4:7', text:'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' },
          { cite:'Isaiah 26:3', text:'You will keep in perfect peace those whose minds are steadfast, because they trust in you.' },
          { cite:'Numbers 6:24–26', text:'The Lord bless you and keep you; the Lord make his face shine on you... and give you peace.' },
        ]}
      ]},

      { type:'subsection', title:'Anxiety & Fear', subtitle:'"Do not be afraid" — the most repeated command in Scripture', blocks:[
        { type:'callout', tone:'sage', title:'Catholic Context', body:'The Rosary is one of the most clinically supported Catholic practices for anxiety. Repetitive, meditative prayer calms the nervous system — which is not coincidental. God designed us this way.' },
        { type:'verseList', items:[
          { cite:'Isaiah 41:10', text:'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.' },
          { cite:'Philippians 4:6', text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' },
          { cite:'2 Timothy 1:7', text:'For God has not given us a spirit of fear, but of power and love and a sound mind.' },
          { cite:'1 Peter 5:7', text:'Cast all your anxiety on him because he cares for you.' },
          { cite:'Psalm 56:3', text:'When I am afraid, I put my trust in you.' },
        ]}
      ]},

      { type:'subsection', title:'Rest', subtitle:'Sabbath, renewal, and coming to God when you\'re weary', blocks:[
        { type:'callout', tone:'sage', title:'Catholic Context', body:'Sunday rest is built into Catholic identity. The Mass is the center of the Lord\'s Day. Rest is an act of trust, not laziness — and the Church asks Catholics to practice it structurally.' },
        { type:'verseList', items:[
          { cite:'Matthew 11:28', text:'Come to me, all you who are weary and burdened, and I will give you rest.' },
          { cite:'Psalm 23:2', text:'He makes me lie down in green pastures, he leads me beside quiet waters.' },
          { cite:'Exodus 20:10', text:'But the seventh day is a sabbath to the Lord your God. On it you shall not do any work.' },
          { cite:'Psalm 127:2', text:'He grants sleep to those he loves.' },
        ]}
      ]},

      { type:'subsection', title:'Grief & Loss', subtitle:'God meets you in your pain', blocks:[
        { type:'callout', tone:'sage', title:'Catholic Context', body:'The Church offers the entire season of mourning — All Souls\' Day, the Requiem Mass, prayers for the dead. Catholicism does not rush grief. It holds it and sanctifies it.' },
        { type:'verseList', items:[
          { cite:'Psalm 34:18', text:'The Lord is close to the brokenhearted and saves those who are crushed in spirit.' },
          { cite:'Matthew 5:4', text:'Blessed are those who mourn, for they will be comforted.' },
          { cite:'John 11:35', text:'Jesus wept.' },
          { cite:'Isaiah 61:3', text:'To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning.' },
          { cite:'Psalm 30:5', text:'Weeping may stay for the night, but rejoicing comes in the morning.' },
        ]}
      ]},
    ]
  },

  'scripture-identity': {
    eyebrow: "God's Word for You",
    title: 'Identity & Worth',
    meta: 'Who does God say you are? · 5 topics',
    gc: 'gc-rosary',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:'What Scripture Says',
        text:'You are not what you\'ve done, nor what\'s been done to you. Your identity was settled before you took your first breath. Here\'s what God says about who you are.',
        quote:{ text:'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', cite:'1 John 3:1' }
      },

      { type:'subsection', title:'Identity in Christ', subtitle:'Who you are — not your past', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'Baptism is the foundational identity event. At Baptism you were ontologically changed — made a child of God, incorporated into the Body of Christ, anointed priest, prophet, and king. That is not metaphor. That is reality.' },
        { type:'verseList', items:[
          { cite:'Galatians 2:20', text:'I have been crucified with Christ and I no longer live, but Christ lives in me.' },
          { cite:'2 Corinthians 5:17', text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
          { cite:'1 Peter 2:9', text:'But you are a chosen people, a royal priesthood, a holy nation, God\'s special possession.' },
          { cite:'Ephesians 1:4', text:'For he chose us in him before the creation of the world to be holy and blameless in his sight.' },
        ]}
      ]},

      { type:'subsection', title:'Self-Worth & Value', subtitle:'Made in God\'s image — full stop', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'<em>Imago Dei</em> — the image of God — is the irreducible basis of human dignity in Catholic teaching. No achievement adds to it. No sin erases it. Every human being carries this dignity from conception to natural death.' },
        { type:'verseList', items:[
          { cite:'Psalm 139:14', text:'I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.' },
          { cite:'Genesis 1:27', text:'So God created mankind in his own image, in the image of God he created them.' },
          { cite:'Isaiah 43:4', text:'Since you are precious and honored in my sight, and because I love you.' },
          { cite:'Zephaniah 3:17', text:'The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you... and will rejoice over you with singing.' },
        ]}
      ]},

      { type:'subsection', title:'Belonging & Being Loved', subtitle:'Nothing can separate you from the love of God', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'The Communion of Saints means you belong to a family spanning heaven and earth. You are surrounded by a cloud of witnesses who love you and intercede for you. You are never alone — not spiritually, not existentially.' },
        { type:'verseList', items:[
          { cite:'Romans 8:38–39', text:'For I am convinced that neither death nor life, neither angels nor demons... nor anything else in all creation, will be able to separate us from the love of God.' },
          { cite:'1 John 3:1', text:'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!' },
          { cite:'John 3:16', text:'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
        ]}
      ]},

      { type:'subsection', title:'Shame & Forgiveness', subtitle:'Breaking the weight of shame and condemnation', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'The Sacrament of Reconciliation exists precisely because God knew we would struggle with shame. You have access to actual absolution — not just reassurance. You don\'t have to carry it.' },
        { type:'verseList', items:[
          { cite:'Romans 8:1', text:'Therefore, there is now no condemnation for those who are in Christ Jesus.' },
          { cite:'Isaiah 54:4', text:'Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated.' },
          { cite:'Psalm 34:5', text:'Those who look to him are radiant; their faces are never covered with shame.' },
          { cite:'1 John 1:9', text:'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' },
          { cite:'Micah 7:19', text:'You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.' },
        ]}
      ]},

      { type:'subsection', title:'Courage & Boldness', subtitle:'Strong and courageous — even when afraid', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'The martyrs of the Church are the ultimate example of identity producing courage. They did not die because they were fearless — they died because they knew who they were and Whose they were.' },
        { type:'verseList', items:[
          { cite:'Joshua 1:9', text:'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.' },
          { cite:'2 Timothy 1:7', text:'For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.' },
          { cite:'Proverbs 28:1', text:'The wicked flee though no one pursues, but the righteous are as bold as a lion.' },
          { cite:'Hebrews 4:16', text:'Let us then approach God\'s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.' },
        ]}
      ]},
    ]
  },

  'scripture-relationships': {
    eyebrow: "God's Word for You",
    title: 'Relationships',
    meta: 'Love, family, and forgiveness — from Scripture · 5 topics',
    gc: 'gc-eucharist',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:'What Scripture Says',
        text:'You were not designed to do life alone. Marriage, family, friendship, forgiveness — Scripture speaks directly to each one. Here\'s the Catholic lens on all of it.',
        quote:{ text:'Two are better than one, because they have a good return for their labor.', cite:'Ecclesiastes 4:9' }
      },

      { type:'subsection', title:'Marriage & Partnership', subtitle:'God\'s design for covenant love', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'Marriage is one of the Seven Sacraments. It is not merely a legal contract — it is a covenant that images the relationship between Christ and the Church. That changes everything about how you approach it.' },
        { type:'verseList', items:[
          { cite:'Genesis 2:24', text:'That is why a man leaves his father and mother and is united to his wife, and they become one flesh.' },
          { cite:'Ephesians 5:25', text:'Husbands, love your wives, just as Christ loved the church and gave himself up for her.' },
          { cite:'Proverbs 18:22', text:'He who finds a wife finds what is good and receives favor from the Lord.' },
          { cite:'Ecclesiastes 4:9', text:'Two are better than one, because they have a good return for their labor.' },
          { cite:'Song of Solomon 8:6', text:'Place me like a seal over your heart... for love is as strong as death.' },
        ]}
      ]},

      { type:'subsection', title:'Parenting & Family', subtitle:'Raising children, generational blessing', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'The <em>domestic church</em> — the family — is the first school of faith. The Church charges parents with primary responsibility for their children\'s formation. The school and parish support; they don\'t replace.' },
        { type:'verseList', items:[
          { cite:'Proverbs 22:6', text:'Start children off on the way they should go, and even when they are old they will not turn from it.' },
          { cite:'Psalm 127:3', text:'Children are a heritage from the Lord, offspring a reward from him.' },
          { cite:'Deuteronomy 6:6–7', text:'These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home.' },
          { cite:'Ephesians 6:4', text:'Fathers, do not exasperate your children; instead, bring them up in the training and instruction of the Lord.' },
        ]}
      ]},

      { type:'subsection', title:'Friendship & Community', subtitle:'Iron sharpens iron — who you walk with changes you', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'The Church is not a building you visit — it is a body you belong to. The early Church met in homes, ate together, held everything in common. That communal instinct is still the design.' },
        { type:'verseList', items:[
          { cite:'Proverbs 27:17', text:'As iron sharpens iron, so one person sharpens another.' },
          { cite:'John 15:13', text:'Greater love has no one than this: to lay down one\'s life for one\'s friends.' },
          { cite:'Proverbs 13:20', text:'Walk with the wise and become wise, for a companion of fools suffers harm.' },
          { cite:'Hebrews 10:24–25', text:'And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.' },
        ]}
      ]},

      { type:'subsection', title:'Forgiveness of Others', subtitle:'Releasing offense — not for them, but for your freedom', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'In the Lord\'s Prayer — prayed at every Mass — we ask God to forgive us "as we forgive those who trespass against us." We say those words every single day. Forgiveness of others is structural to Catholicism.' },
        { type:'verseList', items:[
          { cite:'Matthew 18:21–22', text:'"Lord, how many times shall I forgive my brother or sister?" Jesus answered, "I tell you, not seven times, but seventy-seven times."' },
          { cite:'Colossians 3:13', text:'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' },
          { cite:'Luke 23:34', text:'Jesus said, "Father, forgive them, for they do not know what they are doing."' },
          { cite:'Ephesians 4:31–32', text:'Get rid of all bitterness, rage and anger... Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.' },
        ]}
      ]},

      { type:'subsection', title:'Loneliness', subtitle:'God with you in isolation — you are never truly alone', blocks:[
        { type:'callout', tone:'rose', title:'Catholic Context', body:'The Desert Fathers, Teresa of Ávila, Thomas Merton — those who knew the most about loneliness describe it as a doorway. Solitude entered willingly becomes the place you discover you are never truly alone.' },
        { type:'verseList', items:[
          { cite:'Deuteronomy 31:8', text:'The Lord himself goes before you and will be with you; he will never leave you nor forsake you.' },
          { cite:'Psalm 68:6', text:'God sets the lonely in families, he leads out the prisoners with singing.' },
          { cite:'Hebrews 13:5', text:'Never will I leave you; never will I forsake you.' },
          { cite:'Matthew 28:20', text:'And surely I am with you always, to the very end of the age.' },
        ]}
      ]},
    ]
  },

  'scripture-faith': {
    eyebrow: "God's Word for You",
    title: 'Faith & Breakthrough',
    meta: 'For hard seasons, doubt, and waiting on God · 5 topics',
    gc: 'gc-prayer',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:'What Scripture Says',
        text:'Faith is not blind. It is the most courageous, rational, and transformative posture a human being can take. Here\'s what Scripture says about living it.',
        quote:{ text:'Now faith is confidence in what we hope for and assurance about what we do not see.', cite:'Hebrews 11:1' }
      },

      { type:'subsection', title:'Faith & Trust', subtitle:'Walking by faith — even without the full picture', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'Faith (<em>fides</em>) in Catholic theology is not just intellectual assent — it is a gift of grace and a theological virtue. It is simultaneously received and chosen. The Council of Trent and Vatican II both affirm this.' },
        { type:'verseList', items:[
          { cite:'Hebrews 11:1', text:'Now faith is confidence in what we hope for and assurance about what we do not see.' },
          { cite:'Proverbs 3:5–6', text:'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
          { cite:'Matthew 17:20', text:'If you have faith as small as a mustard seed, you can say to this mountain, "Move from here to there," and it will move.' },
          { cite:'2 Corinthians 5:7', text:'For we live by faith, not by sight.' },
          { cite:'James 2:17', text:'Faith by itself, if it is not accompanied by action, is dead.' },
        ]}
      ]},

      { type:'subsection', title:'Prayer & Hearing God', subtitle:'How to talk to God — and actually hear back', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church offers five forms of prayer: blessing, petition, intercession, thanksgiving, and praise. The Liturgy of the Hours sanctifies time itself. Prayer is not a supplement to Catholic life — it is the structure of it.' },
        { type:'verseList', items:[
          { cite:'Matthew 6:6', text:'But when you pray, go into your room, close the door and pray to your Father, who is unseen.' },
          { cite:'John 10:27', text:'My sheep listen to my voice; I know them, and they follow me.' },
          { cite:'1 Thessalonians 5:17', text:'Pray continually.' },
          { cite:'Jeremiah 33:3', text:'Call to me and I will answer you and tell you great and unsearchable things you do not know.' },
          { cite:'Psalm 46:10', text:'Be still, and know that I am God.' },
        ]}
      ]},

      { type:'subsection', title:'Waiting & Patience', subtitle:'The wilderness before the promised land', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'Advent is the Church\'s annual school of waiting. Every year, for four weeks, the entire global Church practices active expectation together. Waiting is not passive — it is liturgically structured hope.' },
        { type:'verseList', items:[
          { cite:'Isaiah 40:31', text:'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' },
          { cite:'Galatians 6:9', text:'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.' },
          { cite:'Psalm 27:14', text:'Wait for the Lord; be strong and take heart and wait for the Lord.' },
          { cite:'Romans 8:25', text:'But if we hope for what we do not yet have, we wait for it patiently.' },
        ]}
      ]},

      { type:'subsection', title:'Trials & Perseverance', subtitle:'Hard seasons don\'t mean God left', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'Suffering united to Christ\'s cross is not wasted — it is redemptive. <em>"Offer it up"</em> is not dismissal; it is a profound theological invitation to participate in the saving work of Christ. This is uniquely Catholic.' },
        { type:'verseList', items:[
          { cite:'James 1:2–4', text:'Consider it pure joy whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance.' },
          { cite:'Romans 5:3–4', text:'We also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.' },
          { cite:'2 Corinthians 4:17', text:'For our light and momentary troubles are achieving for us an eternal glory that far outweighs them all.' },
          { cite:'John 16:33', text:'In this world you will have trouble. But take heart! I have overcome the world.' },
        ]}
      ]},

      { type:'subsection', title:'Renewing Your Mind', subtitle:'Breaking old thought patterns through truth', blocks:[
        { type:'callout', tone:'gold', title:'Catholic Context', body:'<em>Lectio Divina</em> — the ancient Catholic practice of sacred reading — is exactly this: slowly saturating the mind with Scripture until it reshapes how you see everything. The most ancient form of mind renewal the Church has.' },
        { type:'verseList', items:[
          { cite:'Romans 12:2', text:'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is.' },
          { cite:'Philippians 4:8', text:'Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely... think about such things.' },
          { cite:'2 Corinthians 10:5', text:'We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.' },
          { cite:'Proverbs 23:7', text:'For as he thinks in his heart, so is he.' },
          { cite:'Isaiah 55:8–9', text:'"For my thoughts are not your thoughts, neither are your ways my ways," declares the Lord.' },
        ]}
      ]},
    ]
  },


  // ── God's Word for You — 31 Individual Topic Pages ──────────────────────

  // MONEY & PROVISION ─────────────────────────────────────────────────────

  'topic-prosperity': {
    eyebrow: "God's Word for You",
    title: 'Prosperity',
    meta: 'God desires you to flourish',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'God is not against your flourishing. Biblical prosperity is not health-and-wealth theology — it is the deep conviction that God wants you whole: spiritually, relationally, and materially. He is a good Father who gives good gifts.',
        quote:{ text:'The blessing of the Lord makes rich, and he adds no sorrow with it.', cite:'Proverbs 10:22' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church teaches that genuine prosperity — <em>beatitudo</em> — is ordered to the common good. True flourishing includes the spiritual and communal. It is never one person\'s gain at another\'s expense.' },
      { type:'verseList', items:[
        { cite:'3 John 1:2', text:'Beloved, I pray that you may prosper in all things and be in health, just as your soul prospers.' },
        { cite:'Jeremiah 29:11', text:'For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.' },
        { cite:'Deuteronomy 8:18', text:'Remember the Lord your God, for it is he who gives you the ability to produce wealth.' },
        { cite:'Proverbs 10:22', text:'The blessing of the Lord makes rich, and he adds no sorrow with it.' },
        { cite:'Psalm 1:3', text:'That person is like a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither — whatever they do prospers.' },
      ]},
      { type:'quote', text:'It is not the man who has too little, but the man who craves more, that is poor.', cite:'Seneca, quoted by St. Thomas Aquinas' },
    ]
  },

  'topic-provision': {
    eyebrow: "God's Word for You",
    title: 'Provision',
    meta: 'God as your source',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'You were not meant to carry the weight of your own provision alone. God is your source — not your job, not the economy, not your savings account. He fed Israel in the desert. He feeds birds who do not plant. He will take care of you.',
        quote:{ text:'The Lord is my shepherd; I shall not want.', cite:'Psalm 23:1' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'Catholic tradition calls this <em>providentia Dei</em> — divine providence. It does not mean passivity, but a deep trust that lets you act without anxiety. God works through natural means, including your own effort.' },
      { type:'verseList', items:[
        { cite:'Philippians 4:19', text:'And my God will meet all your needs according to the riches of his glory in Christ Jesus.' },
        { cite:'Psalm 23:1', text:'The Lord is my shepherd; I shall not want.' },
        { cite:'Matthew 6:26', text:'Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?' },
        { cite:'Isaiah 58:11', text:'The Lord will guide you always; he will satisfy your needs in a sun-scorched land and will strengthen your frame.' },
        { cite:'Matthew 6:33', text:'But seek first his kingdom and his righteousness, and all these things will be given to you as well.' },
        { cite:'Psalm 37:25', text:'I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread.' },
      ]},
    ]
  },

  'topic-stewardship': {
    eyebrow: "God's Word for You",
    title: 'Stewardship',
    meta: 'Managing what God entrusted to you',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Everything you have is on loan. Your money, your time, your gifts — all entrusted to you by God. Stewardship is the posture of a person who knows they are managing what belongs to Another, and doing it with excellence.',
        quote:{ text:'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things.', cite:'Matthew 25:21' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'Catholic Social Teaching calls this the <em>universal destination of goods</em>: everything you hold is ultimately entrusted to you for the good of all. Stewardship is accountability to God and neighbor — not just good financial management.' },
      { type:'verseList', items:[
        { cite:'Luke 16:10', text:'Whoever can be trusted with very little can also be trusted with much, and whoever is dishonest with very little will also be dishonest with much.' },
        { cite:'Matthew 25:21', text:'Well done, good and faithful servant! You have been faithful with a few things; I will put you in charge of many things. Come and share your master\'s happiness!' },
        { cite:'Proverbs 21:5', text:'The plans of the diligent lead to profit as surely as haste leads to poverty.' },
        { cite:'1 Corinthians 4:2', text:'Now it is required that those who have been given a trust must prove faithful.' },
        { cite:'Luke 14:28', text:'Suppose one of you wants to build a tower. Won\'t you first sit down and estimate the cost to see if you have enough money to complete it?' },
      ]},
    ]
  },

  'topic-generosity': {
    eyebrow: "God's Word for You",
    title: 'Generosity & Giving',
    meta: 'You cannot out-give God',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The most financially counterintuitive truth in Scripture: generosity creates more, not less. Giving is not a tax — it is a seed. And it shapes the soul of the giver far more than it impacts the recipient.',
        quote:{ text:'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap.', cite:'Luke 6:38' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'St. John Chrysostom wrote: <em>"Not to share your goods with the poor is to steal from them."</em> The Church invites generosity not as a financial strategy but as a virtue — a habit of the soul that makes you more like God, who gives endlessly.' },
      { type:'verseList', items:[
        { cite:'Luke 6:38', text:'Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you.' },
        { cite:'2 Corinthians 9:7', text:'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' },
        { cite:'Malachi 3:10', text:'Bring the whole tithe into the storehouse... Test me in this, says the Lord Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing.' },
        { cite:'Proverbs 11:24', text:'One person gives freely, yet gains even more; another withholds unduly, but comes to poverty.' },
        { cite:'Proverbs 19:17', text:'Whoever is kind to the poor lends to the Lord, and he will reward them for what they have done.' },
      ]},
    ]
  },

  'topic-favor': {
    eyebrow: "God's Word for You",
    title: 'Favor',
    meta: 'Divine positioning — doors open',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Favor is what happens when God\'s blessing precedes you. Doors open that have no reason to open. The right person appears at the right time. Joseph went from prison to second-in-command of Egypt. That is favor — and it is available to you.',
        quote:{ text:'Surely, Lord, you bless the righteous; you surround them with your favor as with a shield.', cite:'Psalm 5:12' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'<em>Gratia</em> — grace — literally means favor. Every moment of providential alignment in your life is God\'s ongoing grace at work. The sacraments are the primary channel of this grace, but it flows into every area of life.' },
      { type:'verseList', items:[
        { cite:'Psalm 5:12', text:'Surely, Lord, you bless the righteous; you surround them with your favor as with a shield.' },
        { cite:'Luke 2:52', text:'And Jesus grew in wisdom and stature, and in favor with God and man.' },
        { cite:'Genesis 39:21', text:'But the Lord was with Joseph and showed him steadfast love and gave him favor in the sight of the keeper of the prison.' },
        { cite:'Psalm 90:17', text:'May the favor of the Lord our God rest on us; establish the work of our hands for us — yes, establish the work of our hands.' },
        { cite:'Proverbs 3:4', text:'Then you will win favor and a good name in the sight of God and man.' },
      ]},
    ]
  },

  'topic-debt-freedom': {
    eyebrow: "God's Word for You",
    title: 'Debt & Financial Freedom',
    meta: 'Breaking cycles of lack',
    gc: 'gc-scripture',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Debt is not just a financial problem — it is a freedom problem. Scripture takes it seriously. Financial freedom is not about wealth; it is about the ability to be generous, to say yes to God\'s call without financial chains holding you back.',
        quote:{ text:'The rich rule over the poor, and the borrower is slave to the lender.', cite:'Proverbs 22:7' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church historically prohibited usury because it recognized how debt traps people. The principle behind it: freedom of conscience requires financial freedom. A person drowning in debt cannot freely respond to God\'s call.' },
      { type:'verseList', items:[
        { cite:'Proverbs 22:7', text:'The rich rule over the poor, and the borrower is slave to the lender.' },
        { cite:'Romans 13:8', text:'Let no debt remain outstanding, except the continuing debt to love one another, for whoever loves others has fulfilled the law.' },
        { cite:'Deuteronomy 15:6', text:'For the Lord your God will bless you as he has promised, and you will lend to many nations but will borrow from none.' },
        { cite:'Psalm 37:21', text:'The wicked borrow and do not repay, but the righteous give generously.' },
        { cite:'Proverbs 22:26–27', text:'Do not be one who shakes hands in pledge or puts up security for debts; if you lack the means to pay, your very bed will be snatched from under you.' },
      ]},
    ]
  },

  // PURPOSE & CALLING ─────────────────────────────────────────────────────

  'topic-purpose': {
    eyebrow: "God's Word for You",
    title: 'Purpose & Calling',
    meta: 'You were created on purpose',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'You are not an accident. You were not randomly assembled by chance. Before the world began, God had you in mind — and He placed you here, at this moment in history, with a specific shape and calling.',
        quote:{ text:'Before I formed you in the womb I knew you, before you were born I set you apart.', cite:'Jeremiah 1:5' }
      },
      { type:'callout', tone:'blue', title:'Catholic Context', body:'<em>Vocatio</em> — vocation — is central to Catholic identity. Every person has a primary calling to holiness, and a particular calling (marriage, religious life, priesthood, single life) through which that holiness is lived out day by day.' },
      { type:'verseList', items:[
        { cite:'Jeremiah 1:5', text:'Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.' },
        { cite:'Ephesians 2:10', text:'For we are God\'s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.' },
        { cite:'Romans 8:28', text:'And we know that in all things God works for the good of those who love him, who have been called according to his purpose.' },
        { cite:'Isaiah 46:10', text:'"My purpose will stand," declares the Lord.' },
        { cite:'Psalm 57:2', text:'I cry out to God Most High, to God, who vindicates me. He sends from heaven and saves me — God sends forth his love and his faithfulness.' },
      ]},
    ]
  },

  'topic-gifts': {
    eyebrow: "God's Word for You",
    title: 'Gifts & Talents',
    meta: 'What God placed in you is not an accident',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Everything you are naturally good at is a gift — not a coincidence. Your gifts are not for your glory. They are tools God gave you to serve others and to make His presence tangible in the world.',
        quote:{ text:'We have different gifts, according to the grace given to each of us.', cite:'Romans 12:6' }
      },
      { type:'callout', tone:'blue', title:'Catholic Context', body:'The gifts of the Holy Spirit — wisdom, understanding, counsel, fortitude, knowledge, piety, fear of the Lord — are given at Baptism and Confirmation and deepen through the sacraments. They are not talents; they are divine capacities.' },
      { type:'verseList', items:[
        { cite:'Romans 12:6–8', text:'We have different gifts, according to the grace given to each of us. If your gift is prophesying, then prophesy in accordance with your faith; if it is serving, then serve; if it is teaching, then teach.' },
        { cite:'1 Corinthians 12:4–7', text:'There are different kinds of gifts, but the same Spirit distributes them. There are different kinds of service, but the same Lord. Now to each one the manifestation of the Spirit is given for the common good.' },
        { cite:'Matthew 25:14–15', text:'For it will be like a man going on a journey, who called his servants and entrusted to each the management of his possessions... to each according to his ability.' },
        { cite:'1 Peter 4:10', text:'Each of you should use whatever gift you have received to serve others, as faithful stewards of God\'s grace in its various forms.' },
      ]},
    ]
  },

  'topic-work': {
    eyebrow: "God's Word for You",
    title: 'Work & Excellence',
    meta: 'Everything you do can be worship',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'God worked. The first thing we see Him do in Scripture is create — with care, with intention, with excellence. Then He rested. Your work is not separate from your spiritual life. Done with the right heart, it is an act of worship.',
        quote:{ text:'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.', cite:'Colossians 3:23' }
      },
      { type:'callout', tone:'blue', title:'Catholic Context', body:'St. John Paul II\'s encyclical <em>Laborem Exercens</em> teaches that work has a subjective dimension — it shapes the person who does it. You are not just producing something; you are becoming someone. Work is participation in God\'s ongoing creation.' },
      { type:'verseList', items:[
        { cite:'Colossians 3:23', text:'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.' },
        { cite:'Proverbs 16:3', text:'Commit to the Lord whatever you do, and he will establish your plans.' },
        { cite:'Ecclesiastes 9:10', text:'Whatever your hand finds to do, do it with all your might.' },
        { cite:'Proverbs 22:29', text:'Do you see someone skilled in their work? They will serve before kings; they will not serve before officials of low rank.' },
        { cite:'2 Thessalonians 3:10', text:'The one who is unwilling to work shall not eat.' },
      ]},
    ]
  },

  'topic-wisdom': {
    eyebrow: "God's Word for You",
    title: 'Wisdom & Discernment',
    meta: 'How to hear God in the noise',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Wisdom is not intelligence. It is the ability to see what God sees — to judge situations the way Heaven judges them. It is available to anyone who asks. God is not stingy with it.',
        quote:{ text:'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.', cite:'James 1:5' }
      },
      { type:'callout', tone:'blue', title:'Catholic Context', body:'Discernment of spirits is a charism refined by the saints — Ignatius of Loyola systematized it in the <em>Spiritual Exercises</em>. The basic principle: movements toward God (consolation) vs. movements away from Him (desolation) are signs to read in prayer.' },
      { type:'verseList', items:[
        { cite:'James 1:5', text:'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.' },
        { cite:'Proverbs 3:5–6', text:'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
        { cite:'Proverbs 4:7', text:'The beginning of wisdom is this: Get wisdom. Though it cost all you have, get understanding.' },
        { cite:'Psalm 25:4–5', text:'Show me your ways, Lord, teach me your paths. Guide me in your truth and teach me, for you are God my Savior.' },
        { cite:'Colossians 3:16', text:'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom.' },
      ]},
    ]
  },

  'topic-dreams': {
    eyebrow: "God's Word for You",
    title: 'Dreams & Vision',
    meta: 'God plants holy desires in you',
    gc: 'gc-bible',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The desires you cannot shake — the things you keep coming back to, the vision that will not die — are often the echo of what God placed in you before you were born. Holy desires are seeds of vocation.',
        quote:{ text:'Where there is no vision, the people perish.', cite:'Proverbs 29:18 (KJV)' }
      },
      { type:'callout', tone:'blue', title:'Catholic Context', body:'St. Thomas Aquinas taught that rightly ordered desire (<em>appetitus rectus</em>) is itself a participation in divine goodness. The saints were not dreamless people — Francis dreamed of rebuilding the Church, Thérèse dreamed of a little way to holiness that would reach millions.' },
      { type:'verseList', items:[
        { cite:'Proverbs 29:18', text:'Where there is no vision, the people perish; but he that keepeth the law, happy is he.' },
        { cite:'Habakkuk 2:2–3', text:'Write down the revelation and make it plain on tablets so that a herald may run with it. For the revelation awaits an appointed time; it speaks of the end and will not prove false.' },
        { cite:'Joel 2:28', text:'Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions.' },
        { cite:'Psalm 37:4', text:'Take delight in the Lord, and he will give you the desires of your heart.' },
        { cite:'Ephesians 3:20', text:'Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.' },
      ]},
    ]
  },

  // HEALING & PEACE ────────────────────────────────────────────────────────

  'topic-healing': {
    eyebrow: "God's Word for You",
    title: 'Healing',
    meta: 'Jesus healed then — and He heals now',
    gc: 'gc-green',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Healing is not a peripheral theme in Scripture — it is central to who Jesus is. He healed everyone who came to Him. He never said "this is not God\'s will for you." Physical, emotional, and spiritual healing are part of the Gospel.',
        quote:{ text:'He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed.', cite:'1 Peter 2:24' }
      },
      { type:'callout', tone:'sage', title:'Catholic Context', body:'The Sacrament of the Anointing of the Sick is not a death rite — it is a healing sacrament. The Church prays for physical healing while also preparing the soul. Lourdes and other shrines have documented thousands of medically verified healings attributed to prayer.' },
      { type:'verseList', items:[
        { cite:'1 Peter 2:24', text:'He himself bore our sins in his body on the cross, so that we might die to sins and live for righteousness; by his wounds you have been healed.' },
        { cite:'James 5:14–15', text:'Is anyone among you sick? Let them call the elders of the church to pray over them and anoint them with oil in the name of the Lord. And the prayer offered in faith will make the sick person well.' },
        { cite:'Psalm 103:2–3', text:'Praise the Lord, my soul, and forget not all his benefits — who forgives all your sins and heals all your diseases.' },
        { cite:'Jeremiah 17:14', text:'Heal me, Lord, and I will be healed; save me and I will be saved, for you are the one I praise.' },
        { cite:'Isaiah 53:5', text:'But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed.' },
      ]},
    ]
  },

  'topic-peace': {
    eyebrow: "God's Word for You",
    title: 'Peace & Anxiety',
    meta: 'The peace that surpasses understanding',
    gc: 'gc-green',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Anxiety is not a character flaw — it is a human experience. But Scripture does not leave you there. God offers a peace that is not dependent on your circumstances — a peace that guards your heart like a soldier at the gate.',
        quote:{ text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', cite:'Philippians 4:6–7' }
      },
      { type:'callout', tone:'sage', title:'Catholic Context', body:'<em>Pax Christi</em> — the peace of Christ — is not the absence of conflict but the presence of God in the middle of it. St. Thérèse of Lisieux suffered profound interior darkness and anxiety, yet she held her peace by surrendering each moment to God\'s mercy.' },
      { type:'verseList', items:[
        { cite:'Philippians 4:6–7', text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' },
        { cite:'John 14:27', text:'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.' },
        { cite:'Isaiah 26:3', text:'You will keep in perfect peace those whose minds are steadfast, because they trust in you.' },
        { cite:'Psalm 55:22', text:'Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.' },
        { cite:'Matthew 11:28–29', text:'Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.' },
      ]},
    ]
  },

  'topic-rest': {
    eyebrow: "God's Word for You",
    title: 'Rest & Sabbath',
    meta: 'God rested. He commands yours.',
    gc: 'gc-green',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'God did not rest on the seventh day because He was tired. He rested to show you that rest is sacred — that stopping is not laziness, it is a declaration that you are not God, and that is a very good thing.',
        quote:{ text:'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work.', cite:'Genesis 2:2' }
      },
      { type:'callout', tone:'sage', title:'Catholic Context', body:'Sunday Mass is not an obligation tacked onto a busy week — it is the heart of the week. The Catechism calls Sunday the "original feast day," the day that gives meaning to all other days. It is a foretaste of eternal rest, the <em>sabbath</em> that heaven is.' },
      { type:'verseList', items:[
        { cite:'Genesis 2:2–3', text:'By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work. Then God blessed the seventh day and made it holy.' },
        { cite:'Matthew 11:28', text:'Come to me, all you who are weary and burdened, and I will give you rest.' },
        { cite:'Psalm 46:10', text:'Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.' },
        { cite:'Exodus 20:8', text:'Remember the Sabbath day by keeping it holy.' },
        { cite:'Hebrews 4:9–10', text:'There remains, then, a Sabbath-rest for the people of God; for anyone who enters God\'s rest also rests from their works, just as God did from his.' },
      ]},
    ]
  },

  'topic-grief': {
    eyebrow: "God's Word for You",
    title: 'Grief & Suffering',
    meta: 'God does not waste your pain',
    gc: 'gc-green',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Jesus wept at the grave of Lazarus. He did not say "don\'t cry." He cried with them. God does not dismiss your grief — He enters it. And Scripture promises He redeems what it means for something to be lost.',
        quote:{ text:'He heals the brokenhearted and binds up their wounds.', cite:'Psalm 147:3' }
      },
      { type:'callout', tone:'sage', title:'Catholic Context', body:'The theology of the Cross — <em>theologia crucis</em> — holds that suffering is not meaningless. When united to Christ\'s suffering on the Cross, your pain becomes redemptive. It is the most profound mystery of the faith: nothing is wasted.' },
      { type:'verseList', items:[
        { cite:'Psalm 147:3', text:'He heals the brokenhearted and binds up their wounds.' },
        { cite:'Romans 8:18', text:'I consider that our present sufferings are not worth comparing with the glory that will be revealed in us.' },
        { cite:'2 Corinthians 1:3–4', text:'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.' },
        { cite:'Revelation 21:4', text:'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.' },
        { cite:'John 11:35', text:'Jesus wept.' },
      ]},
    ]
  },

  'topic-shalom': {
    eyebrow: "God's Word for You",
    title: 'Shalom',
    meta: 'Biblical wholeness — body, soul, and spirit',
    gc: 'gc-green',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Shalom is the Hebrew word usually translated "peace," but it means so much more. It means wholeness. Nothing missing, nothing broken. It is God\'s vision for your entire life — not just your soul, but your body, your relationships, your work, your home.',
        quote:{ text:'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.', cite:'Numbers 6:24–26' }
      },
      { type:'callout', tone:'sage', title:'Catholic Context', body:'The Catechism describes peace as "the tranquility of order" (<em>tranquillitas ordinis</em> — St. Augustine). It is not the absence of tension, but every part of life in its right relationship: soul rightly ordered to God, body to soul, person to community, community to creation.' },
      { type:'verseList', items:[
        { cite:'Numbers 6:24–26', text:'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.' },
        { cite:'Isaiah 54:10', text:'"Though the mountains be shaken and the hills be removed, yet my unfailing love for you will not be shaken nor my covenant of peace be removed," says the Lord.' },
        { cite:'John 16:33', text:'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.' },
        { cite:'Romans 15:13', text:'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' },
        { cite:'Philippians 4:7', text:'And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' },
      ]},
    ]
  },

  // IDENTITY & WORTH ───────────────────────────────────────────────────────

  'topic-identity': {
    eyebrow: "God's Word for You",
    title: 'Identity in Christ',
    meta: 'Who you are before you do anything',
    gc: 'gc-rosary',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Your identity is not your job, your sin, your past, your family name, or your reputation. It is what God says you are — before you do anything, before you earn anything, before you prove anything.',
        quote:{ text:'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', cite:'1 John 3:1' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'At Baptism, your identity was permanently stamped. You became a child of God, a temple of the Holy Spirit, a member of the Body of Christ. The Church calls this the <em>character</em> of Baptism — it cannot be undone, even by sin.' },
      { type:'verseList', items:[
        { cite:'1 John 3:1', text:'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!' },
        { cite:'Galatians 3:26', text:'So in Christ Jesus you are all children of God through faith.' },
        { cite:'2 Corinthians 5:17', text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
        { cite:'Romans 8:15–16', text:'The Spirit you received does not make you slaves, so that you live in fear again; rather, the Spirit you received brought about your adoption to sonship. And by him we cry, "Abba, Father." The Spirit himself testifies with our spirit that we are God\'s children.' },
        { cite:'Ephesians 1:4–5', text:'For he chose us in him before the creation of the world to be holy and blameless in his sight. In love he predestined us for adoption to sonship through Jesus Christ.' },
      ]},
    ]
  },

  'topic-imago-dei': {
    eyebrow: "God's Word for You",
    title: 'Imago Dei',
    meta: 'Made in the image and likeness of God',
    gc: 'gc-rosary',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'You bear the image of God. Not metaphorically — actually. Something of who God is is inscribed in who you are. This is the foundation of human dignity, and it is why every human life is sacred from conception to natural death.',
        quote:{ text:'So God created mankind in his own image, in the image of God he created them; male and female he created them.', cite:'Genesis 1:27' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'<em>Imago Dei</em> is the bedrock of Catholic Social Teaching. Every human right — the right to life, dignity, fair wages, education, religious freedom — flows from this single truth: that every person bears the image of God. It cannot be erased by sin, poverty, or disability.' },
      { type:'verseList', items:[
        { cite:'Genesis 1:27', text:'So God created mankind in his own image, in the image of God he created them; male and female he created them.' },
        { cite:'Psalm 139:13–14', text:'For you created my inmost being; you knit me together in my mother\'s womb. I praise you because I am fearfully and wonderfully made.' },
        { cite:'Genesis 9:6', text:'Whoever sheds human blood, by humans shall their blood be shed; for in the image of God has God made mankind.' },
        { cite:'James 3:9', text:'With the tongue we praise our Lord and Father, and with it we curse human beings, who have been made in God\'s likeness.' },
      ]},
    ]
  },

  'topic-baptism': {
    eyebrow: "God's Word for You",
    title: 'Baptism & New Life',
    meta: 'You are a new creation',
    gc: 'gc-rosary',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Baptism is not a ceremony. It is a death and a resurrection. You went down into the water with your old identity — and came up with a new one. This is not metaphor. It is the most real thing that has ever happened to you.',
        quote:{ text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!', cite:'2 Corinthians 5:17' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'The Catechism teaches that Baptism is the gateway to the other sacraments. It imprints an indelible spiritual mark — a permanent, unchangeable character — on the soul. You cannot be un-baptized. Even if you walk away, you remain marked as God\'s own.' },
      { type:'verseList', items:[
        { cite:'Romans 6:3–4', text:'Or don\'t you know that all of us who were baptized into Christ Jesus were baptized into his death? We were therefore buried with him through baptism into death in order that, just as Christ was raised from the dead through the glory of the Father, we too may live a new life.' },
        { cite:'2 Corinthians 5:17', text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
        { cite:'John 3:5', text:'Jesus answered, "Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit."' },
        { cite:'Galatians 2:20', text:'I have been crucified with Christ and I no longer live, but Christ lives in me.' },
        { cite:'Titus 3:5', text:'He saved us through the washing of rebirth and renewing by the Holy Spirit.' },
      ]},
    ]
  },

  'topic-courage': {
    eyebrow: "God's Word for You",
    title: 'Courage & Boldness',
    meta: 'The fear of man is a snare — you are free',
    gc: 'gc-rosary',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'God\'s most repeated command in Scripture is not "be good" or "go to church." It is "do not be afraid." He says it over 365 times — one for every day of the year. Fear is the enemy of your calling.',
        quote:{ text:'For God has not given us a spirit of fear, but of power and of love and of a sound mind.', cite:'2 Timothy 1:7 (NKJV)' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'Fortitude is one of the four cardinal virtues. The saints were not people without fear — they were people who acted despite fear. Joan of Arc, Thomas More, Maximilian Kolbe — all terrified, all courageous. Courage is not the absence of fear; it is faith in God stronger than fear.' },
      { type:'verseList', items:[
        { cite:'2 Timothy 1:7', text:'For God has not given us a spirit of fear, but of power and of love and of a sound mind.' },
        { cite:'Joshua 1:9', text:'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.' },
        { cite:'Isaiah 41:10', text:'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.' },
        { cite:'Proverbs 28:1', text:'The wicked flee though no one pursues, but the righteous are as bold as a lion.' },
        { cite:'Romans 8:31', text:'What, then, shall we say in response to these things? If God is for us, who can be against us?' },
      ]},
    ]
  },

  'topic-worth': {
    eyebrow: "God's Word for You",
    title: 'Worth & Dignity',
    meta: 'You were worth dying for',
    gc: 'gc-rosary',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The cross is God\'s definitive statement about your worth. He did not send an angel. He came Himself. He went through every human suffering — rejection, betrayal, physical agony, death — and He said it was worth it. For you.',
        quote:{ text:'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.', cite:'Romans 5:8' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'Human dignity is not earned — it is inherent. The <em>Catechism</em> states: "The dignity of the human person is rooted in his creation in the image and likeness of God." No sin, failure, or circumstance can erase what God has inscribed on you.' },
      { type:'verseList', items:[
        { cite:'Romans 5:8', text:'But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.' },
        { cite:'Luke 12:6–7', text:'Are not five sparrows sold for two pennies? Yet not one of them is forgotten by God. Indeed, the very hairs of your head are all numbered. Don\'t be afraid; you are worth more than many sparrows.' },
        { cite:'Psalm 139:17–18', text:'How precious to me are your thoughts, God! How vast is the sum of them! Were I to count them, they would outnumber the grains of sand — when I awake, I am still with you.' },
        { cite:'Isaiah 43:4', text:'Since you are precious and honored in my sight, and because I love you, I will give people in exchange for you, nations in exchange for your life.' },
      ]},
    ]
  },

  // RELATIONSHIPS ──────────────────────────────────────────────────────────

  'topic-love': {
    eyebrow: "God's Word for You",
    title: 'Love',
    meta: 'Agape — the love that lays down its life',
    gc: 'gc-eucharist',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The Greek word <em>agape</em> describes a love that is not a feeling — it is a decision. It is the kind of love that shows up when it is inconvenient, costly, and not returned. It is the love that crucified Jesus.',
        quote:{ text:'Greater love has no one than this: to lay down one\'s life for one\'s friends.', cite:'John 15:13' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'The Eucharist is the school of love. In the Mass, Christ does not merely remember His sacrifice — He makes it present. You receive Love itself in the Host. The more frequently you receive the Eucharist, the more you become capable of loving as He loves.' },
      { type:'verseList', items:[
        { cite:'1 Corinthians 13:4–7', text:'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres.' },
        { cite:'John 15:13', text:'Greater love has no one than this: to lay down one\'s life for one\'s friends.' },
        { cite:'1 John 4:19', text:'We love because he first loved us.' },
        { cite:'Romans 8:38–39', text:'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.' },
      ]},
    ]
  },

  'topic-marriage': {
    eyebrow: "God's Word for You",
    title: 'Marriage & Family',
    meta: 'The domestic church',
    gc: 'gc-eucharist',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Marriage is not a contract — it is a covenant. The difference is massive. A contract is broken when one party fails. A covenant holds even then. It is a living icon of Christ\'s love for the Church — total, faithful, fruitful, and free.',
        quote:{ text:'Husbands, love your wives, just as Christ loved the church and gave himself up for her.', cite:'Ephesians 5:25' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'Marriage is one of the seven sacraments. The spouses are the ministers of the sacrament to each other — God uses your marriage as a channel of grace. Your home is a <em>domestic church</em> — the first and most important place where faith is lived and handed on.' },
      { type:'verseList', items:[
        { cite:'Ephesians 5:25', text:'Husbands, love your wives, just as Christ loved the church and gave himself up for her.' },
        { cite:'Genesis 2:24', text:'That is why a man leaves his father and mother and is united to his wife, and they become one flesh.' },
        { cite:'Proverbs 31:10', text:'A wife of noble character who can find? She is worth far more than rubies.' },
        { cite:'Colossians 3:13–14', text:'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you. And over all these virtues put on love, which binds them all together in perfect unity.' },
        { cite:'Psalm 127:3', text:'Children are a heritage from the Lord, offspring a reward from him.' },
      ]},
    ]
  },

  'topic-friendship': {
    eyebrow: "God's Word for You",
    title: 'Friendship',
    meta: 'Iron sharpens iron',
    gc: 'gc-eucharist',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'You were not made to do life alone. The people around you are not accessories — they are essential to who you become. The wrong friends pull you down. The right ones make you someone you could not be by yourself.',
        quote:{ text:'As iron sharpens iron, so one person sharpens another.', cite:'Proverbs 27:17' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'The saints almost always traveled in pairs or groups. Francis had Clare. Basil had Gregory. Teresa of Ávila had John of the Cross. Spiritual friendship — what Aelred of Rievaulx called <em>amicitia spiritualis</em> — is a profound path to holiness.' },
      { type:'verseList', items:[
        { cite:'Proverbs 27:17', text:'As iron sharpens iron, so one person sharpens another.' },
        { cite:'Ecclesiastes 4:9–10', text:'Two are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up.' },
        { cite:'John 15:15', text:'I no longer call you servants, because a servant does not know his master\'s business. Instead, I have called you friends, for everything that I learned from my Father I have made known to you.' },
        { cite:'Proverbs 17:17', text:'A friend loves at all times, and a brother is born for a time of adversity.' },
      ]},
    ]
  },

  'topic-forgiveness': {
    eyebrow: "God's Word for You",
    title: 'Forgiveness',
    meta: 'The most countercultural act in the world',
    gc: 'gc-eucharist',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Forgiveness is not saying what happened was okay. It is releasing your claim to revenge and letting God be the judge. It is the most counterintuitive thing Jesus asks you to do — and the most freeing.',
        quote:{ text:'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.', cite:'Colossians 3:13' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'The Sacrament of Confession is how Catholics receive God\'s forgiveness — but the forgiveness we extend to others is just as important. Jesus connects the two explicitly in the Our Father: "Forgive us our trespasses, as we forgive those who trespass against us." The condition is unsettling. It is also liberating.' },
      { type:'verseList', items:[
        { cite:'Colossians 3:13', text:'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' },
        { cite:'Matthew 18:21–22', text:'Then Peter came to Jesus and asked, "Lord, how many times shall I forgive my brother or sister who sins against me? Up to seven times?" Jesus answered, "I tell you, not seven times, but seventy-seven times."' },
        { cite:'Ephesians 4:31–32', text:'Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.' },
        { cite:'Matthew 6:14–15', text:'For if you forgive other people when they sin against you, your heavenly Father will also forgive you. But if you do not forgive others their sins, your Father will not forgive your sins.' },
      ]},
    ]
  },

  'topic-unity': {
    eyebrow: "God's Word for You",
    title: 'Unity & Community',
    meta: 'You were not made to do this alone',
    gc: 'gc-eucharist',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The Trinity is a community. God Himself is not alone — He is Father, Son, and Spirit in eternal relationship. He made you in His image, which means He made you for community. Isolation is not holy. It is a wound.',
        quote:{ text:'And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.', cite:'Hebrews 10:24–25' }
      },
      { type:'callout', tone:'rose', title:'Catholic Context', body:'The Church is not an institution — it is the Body of Christ. When you receive the Eucharist, you are incorporated more deeply into that Body. You cannot be a Catholic alone. The sacraments are communal by nature. Your holiness and your neighbor\'s holiness are inseparable.' },
      { type:'verseList', items:[
        { cite:'Hebrews 10:24–25', text:'And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together, as some are in the habit of doing, but encouraging one another — and all the more as you see the Day approaching.' },
        { cite:'Acts 2:42', text:'They devoted themselves to the apostles\' teaching and to fellowship, to the breaking of bread and to prayer.' },
        { cite:'Romans 12:4–5', text:'For just as each of us has one body with many members, and these members do not all have the same function, so in Christ we, though many, form one body, and each member belongs to all the others.' },
        { cite:'1 Corinthians 12:26–27', text:'If one part suffers, every part suffers with it; if one part is honored, every part rejoices with it. Now you are the body of Christ, and each one of you is a part of it.' },
      ]},
    ]
  },

  // FAITH & BREAKTHROUGH ───────────────────────────────────────────────────

  'topic-faith': {
    eyebrow: "God's Word for You",
    title: 'Faith',
    meta: 'The substance of things hoped for',
    gc: 'gc-prayer',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Faith is not blind hope. It is the conviction that what God has said is more real than what you can see. It is the ability to act on the unseen — to build the ark before it rains.',
        quote:{ text:'Now faith is confidence in what we hope for and assurance about what we do not see.', cite:'Hebrews 11:1' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'Faith is the first of the three theological virtues — faith, hope, and charity — infused at Baptism. Unlike the natural virtues, faith cannot be acquired by human effort alone. It is a gift. But it must be freely accepted and actively lived. <em>Fides quaerens intellectum</em> — faith seeking understanding.' },
      { type:'verseList', items:[
        { cite:'Hebrews 11:1', text:'Now faith is confidence in what we hope for and assurance about what we do not see.' },
        { cite:'Mark 9:23', text:'"Everything is possible for one who believes." Immediately the boy\'s father exclaimed, "I do believe; help me overcome my unbelief!"' },
        { cite:'James 2:17', text:'In the same way, faith by itself, if it is not accompanied by action, is dead.' },
        { cite:'Romans 10:17', text:'Consequently, faith comes from hearing the message, and the message is heard through the word about Christ.' },
        { cite:'Matthew 17:20', text:'"Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, \'Move from here to there,\' and it will move. Nothing will be impossible for you."' },
      ]},
    ]
  },

  'topic-prayer': {
    eyebrow: "God's Word for You",
    title: 'Prayer',
    meta: 'Ask, seek, knock',
    gc: 'gc-prayer',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Prayer is not a spiritual discipline you perform to earn God\'s attention. It is a conversation with someone who is already leaning in. He is not waiting for you to get it right. He is just waiting for you.',
        quote:{ text:'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.', cite:'Matthew 7:7' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church offers four types of prayer: adoration, contrition, thanksgiving, and supplication (ACTS). The Liturgy of the Hours — prayed seven times a day by religious — is the Church\'s continuous conversation with God. Every Catholic is invited to join it.' },
      { type:'verseList', items:[
        { cite:'Matthew 7:7–8', text:'Ask and it will be given to you; seek and you will find; knock and the door will be opened to you. For everyone who asks receives; the one who seeks finds; and to the one who knocks, the door will be opened.' },
        { cite:'1 Thessalonians 5:17', text:'Pray continually.' },
        { cite:'Philippians 4:6', text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.' },
        { cite:'Romans 8:26', text:'In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.' },
        { cite:'Jeremiah 33:3', text:'Call to me and I will answer you and tell you great and unsearchable things you do not know.' },
      ]},
    ]
  },

  'topic-spiritual-warfare': {
    eyebrow: "God's Word for You",
    title: 'Spiritual Warfare',
    meta: 'You are in a battle — here is your armor',
    gc: 'gc-prayer',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The spiritual life is not a retreat from conflict — it is a battlefield. There are forces actively working against your holiness, your joy, your relationships, and your calling. Scripture does not tiptoe around this. It gives you armor.',
        quote:{ text:'For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.', cite:'Ephesians 6:12' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'The Church teaches the real existence of the devil — not as a metaphor, but as a fallen angel with real influence. The Rite of Baptism includes a formal renunciation of Satan. Confession, the Eucharist, the Rosary, and sacred scapulars are among the Church\'s traditional weapons against spiritual attack.' },
      { type:'verseList', items:[
        { cite:'Ephesians 6:11–13', text:'Put on the full armor of God, so that you can take your stand against the devil\'s schemes. For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world and against the spiritual forces of evil in the heavenly realms.' },
        { cite:'1 Peter 5:8', text:'Be sober-minded; be watchful. Your adversary the devil prowls around like a roaring lion, seeking someone to devour.' },
        { cite:'James 4:7', text:'Submit yourselves, then, to God. Resist the devil, and he will flee from you.' },
        { cite:'Romans 8:37', text:'No, in all these things we are more than conquerors through him who loved us.' },
        { cite:'Revelation 12:11', text:'They triumphed over him by the blood of the Lamb and by the word of their testimony.' },
      ]},
    ]
  },

  'topic-waiting': {
    eyebrow: "God's Word for You",
    title: 'Waiting & Patience',
    meta: 'Holy waiting is not passive — it is powerful',
    gc: 'gc-prayer',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'The waiting seasons of your life are not wasted seasons. Every major figure in Scripture waited: Abraham waited 25 years for Isaac. Joseph waited 13 years in slavery and prison. Mary waited 30 years before Jesus\'s ministry began. God uses the waiting.',
        quote:{ text:'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.', cite:'Isaiah 40:31' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'Advent is the Church\'s annual school of holy waiting. Four weeks of leaning into the silence, of resisting the culture of immediate gratification, of practicing the deep conviction that what God has promised will come. Advent teaches you how to wait well.' },
      { type:'verseList', items:[
        { cite:'Isaiah 40:31', text:'But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' },
        { cite:'Psalm 27:14', text:'Wait for the Lord; be strong and take heart and wait for the Lord.' },
        { cite:'Lamentations 3:25–26', text:'The Lord is good to those whose hope is in him, to the one who seeks him; it is good to wait quietly for the salvation of the Lord.' },
        { cite:'Romans 5:3–4', text:'Not only so, but we also glory in our sufferings, because we know that suffering produces perseverance; perseverance, character; and character, hope.' },
        { cite:'Hebrews 6:15', text:'And so after waiting patiently, Abraham received what was promised.' },
      ]},
    ]
  },

  'topic-mind': {
    eyebrow: "God's Word for You",
    title: 'Mind & Renewal',
    meta: 'What you think shapes who you become',
    gc: 'gc-prayer',
    hasAudio: false,
    blocks: [
      { type:'lead', eyebrow:"What God Says",
        text:'Your mind is a battlefield. The thoughts you entertain, the voices you listen to, the content you consume — they are not neutral. They are forming you. Scripture calls you to take every thought captive and to be transformed by the renewing of your mind.',
        quote:{ text:'Do not conform to the pattern of this world, but be transformed by the renewing of your mind.', cite:'Romans 12:2' }
      },
      { type:'callout', tone:'gold', title:'Catholic Context', body:'<em>Lectio Divina</em> — sacred reading — is the Church\'s ancient practice of letting Scripture reshape the mind from the inside. You read slowly, listen, respond, and rest in the Word. Over time, your thoughts begin to sound less like the world and more like God.' },
      { type:'verseList', items:[
        { cite:'Romans 12:2', text:'Do not conform to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God\'s will is — his good, pleasing and perfect will.' },
        { cite:'Philippians 4:8', text:'Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things.' },
        { cite:'2 Corinthians 10:5', text:'We demolish arguments and every pretension that sets itself up against the knowledge of God, and we take captive every thought to make it obedient to Christ.' },
        { cite:'Proverbs 23:7', text:'For as he thinks in his heart, so is he.' },
        { cite:'Isaiah 55:8–9', text:'"For my thoughts are not your thoughts, neither are your ways my ways," declares the Lord. "As the heavens are higher than the earth, so are my ways higher than your ways and my thoughts than your thoughts."' },
      ]},
    ]
  },

};
