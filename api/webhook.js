// Dolores — Single-file serverless function for Vercel
// Knowledge base generated from Notion on 2026-03-30

const Anthropic = require("@anthropic-ai/sdk");
const axios = require("axios");

// ═══════════════════════════════════════════════════════════
// KNOWLEDGE BASE (generated from Notion — last sync: 2026-03-30)
// ═══════════════════════════════════════════════════════════

const KNOWLEDGE_BASE = `
# The Bridge Spring26 — Knowledge Base
Last updated: March 30, 2026

---

## 1. WHAT IS THE BRIDGE?

The Bridge is a program based fully in San Francisco for exceptional non-US founders at Stage 0 (pre-idea or pre-team).

It's an 8-week intensive residency designed for ~40 young engineers/builders ready to build their own company — their bridge to the US and Silicon Valley.

### Two phases:

Phase 1 — FORM (8-week residency)
- Live and build together in a shared founder house in SF
- Meet potential co-founders
- Explore ideas or refine early concepts
- Talk to users, ship early products
- Rapidly test markets and problem spaces
- At the end, teams pitch to the Investment Committee

Phase 2 — Company Building (3 months, funded teams only)
- Teams that receive funding stay in SF for 3 more months
- Build full-time from the San Francisco office
- Hands-on support from the team
- Prepare to raise next round
- Culminates in Demo Day

### Funding
- Strongest teams receive $250,000 in pre-seed funding
- $250k on simple terms:
  - $125k for 8% equity via a SAFE
  - Optional $125k MFN SAFE
- Alumni have raised from: Sequoia, Founders Fund, a16z, Benchmark, Index

---

## 2. WHO IS IT FOR?

The Bridge is for Stage 0 founders — people who may arrive pre-idea, pre-team, or with early ideas.

Profiles we look for:

Builders: Engineers, researchers, hackers, product builders
Future CEOs: Commercial operators, growth leaders, sales/distribution experts

- Typically based outside the United States
- Not limited to CS or AI — support across software, AI, robotics, deep tech, and other domains
- Also support founders strong in growth, distribution, and sales
- Very competitive: only ~40 founders per cohort

---

## 3. SPRING26 KEY DATES & TIMELINE

Before March 31 — Complete Pre-Bridge Checklist (founder profile, flight info, calendar)
March 31 — AMA with Alice Bentinck (CEO) — 6:30pm CEST / 4:30pm GMT / 9:30am PDT — Call link: https://meet.google.com/pjj-tvxz-hhy
April 2 — US Immigration Talk & Q&A with Monica — 4:00pm CEST / 2:00pm GMT / 7:00am PDT — Call link: https://meet.google.com/vvw-dfkv-azq
April 10-12 — Arrivals in San Francisco
April 13 — Kick-off Day (KOD)
Week 1-2 — Exploration and co-founder matching
Week 3-4 — Early idea validation and user conversations
Week 5-6 — Product iteration and deeper market exploration
Week 7 — Preparing for Investment Committee
Week 8 — Investment Committee pitches

---

## 4. PRE-BRIDGE CHECKLIST

### Before March 31st:
1. Founder Profile — Complete at: https://airtable.com/appQQph3BFJyL9teo/pagc8eb86mMx9RluS/form
2. Flight Information — Fill out at: https://airtable.com/appHQ6zqny4qVWgOZ/pagGbhY5LsAM7YklM/form (deadline: Friday March 27th 6PM — if not booked by then, considered not joining)
3. Add Calendar — https://calendar.google.com/calendar/u/0?cid=Y181MmFhMTkxNzVjMGU3OGQ5OTk5MTU1OGQzZjZhZTA3MmUzNjQ3NjRkYzlmZjNlNDk5NGMyY2NjNjVlZjY4NDQ3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20

### After March 31st:
1. Founder Dashboard — Review cohort dashboard and teams dashboard
2. Slack — Download Slack, turn on notifications for:
   - #spring26-the-bridge (general comms)
   - #spring26-the-bridge-announcements (announcements)
   - #spring26-the-bridge-team-formations (team updates)
3. WhatsApp Group — Link coming soon
4. Prepare for The Bridge:
   - Review the recommended reading content
   - Check out who you'll be working with (partners database)
   - Explore the SF ecosystem page
   - Review KOD preparation materials

---

## 5. FLIGHTS & TRAVEL

### Flight Booking Guidelines:
- Book a round trip flight with a return date before June 14 (critical for US administration)
- Book with a flexible fare (allows date modifications)
- Expected budget: between 600 and 800 euros. Most round trips from Europe are around 600 euros
- Arrive on Friday April 10 — program starts Monday April 13
- After booking, submit this form: https://airtable.com/appiaPHz7qq4bPkxW/shrx0QYS8cNi2CO9O
- Finance team will invite you to Spendesk to expense flights, up to 1000 euros

### Airport Transfers:
- Private van service arranged for arrivals at SFO

---

## 6. EXPENSES & REIMBURSEMENT

### How to get reimbursed:
1. Fill out the expense form: https://airtable.com/appiaPHz7qq4bPkxW/shrx0QYS8cNi2CO9O
2. Finance team adds you to Spendesk
3. Submit expenses through Spendesk

### Flight reimbursement cap: 1000 euros

### Selection Days travel policy:
- Up to 60 euros from France
- Up to 150 euros from Europe
- Up to 500 euros from outside Europe

---

## 7. HOUSING & LIVING IN SF

### Residency Houses:
- Two houses: one for women, one for men
- Mission Dolores Manor (MDM) is the main hub
- Women's house is ~5 minutes away on foot

### MDM serves as central hub for:
- Working
- Meals
- Sessions
- Team building
- Community events

### What's provided:
- Beds and basic furniture
- Kitchen equipment
- WiFi
- Laundry
- Shared work areas

### What to bring:
- Toiletries
- Personal towels or sheets
- Photos of family
- Small personal items
- That's it — the goal is to provide everything you need

### Meals:
- Chef committed for the program
- Meals organized/provided during the residency

### House Rules:
- Respect shared spaces
- Reasonable noise levels
- Keep it clean
- Be considerate of other residents
- Visitors may be allowed depending on house policies (day visitors, overnight guests subject to guidelines shared at onboarding)

---

## 8. PERKS & BENEFITS

### Gym Access
- Partnership with Live Fit Gym (8 SF locations)
- Negotiated rate: $107/month for premium membership

### Transportation
- Lyft Pass: $100 credit per founder for 8 weeks (rides, scooters, Bay Wheels bike share)
- Clipper Card: $100 credit per founder for 8 weeks (full public transit — bus, tram, subway, train)

### Connectivity
- eSIM via Popcorn.Space ($49/month) — details being finalized

### Merch
- Branded totes, rugby shirts, caps, water bottles

---

## 9. WEEKLY SCHEDULE & RITUALS

Monday — Monday Signal (12-2pm): Weekly intent, lightning updates, 45-min talk
Tuesday — Workshops (12-2pm): Specific topics (GTM, PMF, etc.), everyone speaks
Wednesday — EiR Day (Entrepreneur in Residence): Full-day, 45min-1hr per team
Thursday — The Bridge Dinner (6-9pm): Founder guest from SF + bi-monthly demos (In Public)
Friday — EiR or Weekly Progress Debrief (morning)
Sunday — Weekly Run Day (Sunday Running Club)

### Regular check-ins:
- Team check-ins: 30 min/week/team with team member or EiR
- Individual check-ins: 30 min every 2 weeks with a TI (Talent Investor)
- EiR check-in: 30 min/week/team
- Accountability: 1x every 2 weeks (2h) — group pitches/demos
- 1:1 workshops: Tactical office hours, ad-hoc

---

## 10. CO-FOUNDER MATCHING & TEAMS

- Co-founder relationships emerge through informal interactions, structured sessions, collaborative projects
- Founders are encouraged to experiment before committing
- Teams may form, dissolve, and reform — that's normal
- If someone doesn't find a co-founder: continue exploring, join another team, continue solo, or leave and reapply
- Founders can bring ideas but should validate quickly and stay open
- Conflict is normal — staff can facilitate conversations and restructuring

---

## 11. INVESTMENT COMMITTEE

### What IC looks for:
- Strength of the founding team
- Founder-market fit
- Market size
- Evidence of speed and execution
- Early signals of user demand

### If not funded:
- Continue building independently
- Seek external funding
- Reapply to future programs
- May still provide informal support

---

## 12. VISA & IMMIGRATION

- The team helps guide founders through the visa process
- Visa paperwork begins after acceptance
- US Immigration Talk & Q&A with Monica — April 2nd (mandatory)
  - 4:00pm CEST / 2:00pm GMT / 7:00am PDT
  - Call link: https://meet.google.com/vvw-dfkv-azq
- Critical if you're not already on a US visa

---

## 13. COMMUNICATION CHANNELS

- Email: spring26-thebridge@joinef.com
- Slack channels:
  - #spring26-the-bridge (general)
  - #spring26-the-bridge-announcements
  - #spring26-the-bridge-team-formations
- WhatsApp Group: Link coming soon
- Wiki: https://entrepreneursfirst.notion.site/WIP-The-Bridge-SPRING26-WIKI-325e26adb8c980478b9fd89e951c3baf

---

## 14. PROGRAM COST

Nothing. Covered:
- Housing
- Workspace
- Food
- Program costs

---

## 15. CULTURE & EXPECTATIONS

- Full-time commitment — evenings and weekends often involve work
- Successful founders are: extremely driven, fast learners, collaborative, comfortable with ambiguity, obsessed with building
- Professional conduct, respectful collaboration, integrity expected
- Harassment or disrespectful behavior is not tolerated
- Side projects: founders are expected to focus fully on their company
- Leaving early: the team will work with you to determine next steps

---

## 16. TOOLING

- Founder Dashboard: https://airtable.com/appQQph3BFJyL9teo/shre7AVRTheX74WCY (Password: WelcometoTheBridge)
- Team Dashboard: https://airtable.com/appQQph3BFJyL9teo/shrux9MNEeBPUfEvA (Password: WelcometoTheBridge)
- Team Formation Form: https://airtable.com/appQQph3BFJyL9teo/pagrRDJwQD2EZg99L/form
- Dashboard Signup: https://airtable.com/appQQph3BFJyL9teo/pagc8eb86mMx9RluS/form

---

## 17. KICK-OFF DAY (KOD) — April 13th

Location: The office in San Francisco

### KOD Agenda:
10:00-11:00 — Breakfast on terrace + Registration
11:00-11:30 — Welcome
11:30-13:00 — Cohort Introductions (1 minute per person — they WILL cut you off)
13:00-14:00 — Lunch (use this to talk to people you're keen on!)
14:00-15:00 — Edge and Ideation recap + Intro to team-building
15:00-15:30 — Break
15:30-16:10 — Co-Founder Carousel 1
16:10-16:30 — Break
16:30-17:10 — Co-Founder Carousel 2
17:15-19:00 — Dinner
End of Day 1

### 3 goals for KOD:
1. Leave with a list of 5 potential co-founders you want to explore working with
2. Know how to evaluate a potential co-founder
3. Know what your edge is

### Cohort Introductions (1 minute each)
Pitch yourself to the full cohort. Cover:
- Your name
- Your edge (what makes you unique)
- Most exciting thing you've previously worked on
- What you want to work on at The Bridge (industry, product, etc.)
- Why should people work with you? (what makes you an outlier)

Tips: Be memorable, punchy, and clear. Avoid being generic, waffly, or humble.

### Co-Founder Carousel (2.5 minutes per person)
Speed-dating for co-founders. Split into groups — one stays seated, other rotates.
Cover:
- Your name
- Most exciting thing you've previously worked on
- Your most counterintuitive belief about how the world will be different in 5 years

Tips: Have your pitch ready, take notes, watch the clock. Don't forget who you spoke to!

---

## 18. RECOMMENDED READING & CONTENT

Ideation & Team Formation:
- "Future Founders, Here's How to Spot and Build in Nonobvious Markets" (First Round Review) — https://review.firstround.com/future-founders-heres-how-to-spot-and-build-in-nonobvious-markets/
- "Choose Good Quests" (Founders Fund) — https://foundersfund.com/2023/06/choose-good-quests/
- "Competition is for Losers" — Peter Thiel — https://www.youtube.com/watch?v=3Fx5Q8xGU8k
- "The Founding Career Path" — Alice Bentinck — https://alicebentinck.substack.com/p/the-founding-career-path
- "Optionality is a mind virus" (99d Substack) — https://99d.substack.com/p/optionality-is-a-mind-virus

Customer Discovery & MVP:
- "The Mom Test" by Rob Fitzpatrick — how to talk to customers
- "What TAM should actually tell you" — https://wquist.com/p/what-tam-should-actually-tell-you

Product & PMF:
- "How Superhuman Built an Engine to Find Product/Market Fit" (First Round Review) — https://review.firstround.com/how-superhuman-built-an-engine-to-find-product-market-fit/
- "The Arc PMF Framework" (Sequoia) — https://sequoiacap.com/article/pmf-framework/
- "The Arc PMF Terrifying Questions Framework" (Sequoia) — https://sequoiacap.com/article/pmf-framework-2/
- "Building AI Products In The Probabilistic Era" — https://giansegato.com/essays/probabilistic-era

Go-to-Market / Revenue:
- "Pricing the AI Workforce" (NFX) — https://www.nfx.com/post/ai-pricing-innovation
- "Founding Sales" — The Founder Led Sales Handbook — https://www.foundingsales.com/
- "Pricing in the AI Era" (Sequoia podcast with Manny Medina) — https://sequoiacap.com/podcast/pricing-in-the-ai-era-from-inputs-to-outcomes-with-paid-ceo-manny-medina/

Fundraising:
- "Startups are just stories about the future" (99d) — https://99d.substack.com/p/stories-about-the-future
- "Startups are Risk Bundles" (Coding VC) — https://www.codingvc.com/p/startups-are-risk-bundles
- "Narrative Is the Interface" (99d) — https://99d.substack.com/p/important-narratives-important-companies

Founder Mindset:
- "How to Work Hard" — Paul Graham — https://paulgraham.com/hwh.html
- "How to Be More Agentic" (Every) — https://every.to/p/how-to-be-more-agentic
- "Learn to Love the Moat of Low Status" (Useful Fictions) — https://usefulfictions.substack.com/p/learn-to-love-the-moat-of-low-status

---

## 19. PARTNERSHIPS & CREDITS (Available before funding)

### AWS Activate
- $10,000 in AWS credit valid for 24 months (more credits available post-IC)
- 1 year Premium Business Support (up to $1,500 value)
- 80 credits for online training modules
- How to redeem: Visit https://aws.amazon.com/startups/credits
- Organisation ID (case sensitive): 6X7ED
- Important: Apply using a proper domain URL and matching email domain (AWS anti-fraud system auto-rejects mismatches)
- If you haven't formed a company yet, apply with [YourName].com format
- AWS bills at end of month — even if credits aren't immediate, use the products and credits will cover once applied
- Contact for AWS Startup team: Joel Shamash (jshamash@amazon.com)

### Google Cloud Platform
- Credits starting at $25k USD and up to $250k (based on funding and spend milestones)
- Technical help including office hours and workshops
- Access to Startup Success Managers
- $500 USD Google Cloud Skills Boost credits
- Google Workspace Business Plus for 1 year (new signups only)
- Apply at: https://cloud.google.com/startup/apply
- Make sure to select "Entrepreneur First" in the partner field
- Questions: cloudprogram@google.com

### Microsoft for Startups
- Up to $150,000 in free Azure credits
- $2,500 in OpenAI credits
- Visual Studio Enterprise and GitHub Enterprise licences
- Free Microsoft 365, Power Platform, Dynamics 365, LinkedIn licences
- Apply at: https://startups.microsoft.com
- Questions: startups@microsoft.com

### OpenAI Partnership
- All cohort members: $2,500 in OpenAI credits
- Teams that pass IC: $10,000 in OpenAI credits
- Credits valid for 2 years
- Includes onboarding sessions with OpenAI support engineer
- How to redeem:
  1. Create OpenAI account at https://platform.openai.com/
  2. Add payment method at https://platform.openai.com/account/billing/payment-methods
  3. Submit form: https://docs.google.com/forms/d/e/1FAIpQLSdHNHvpvRvRXCJ81MqtkXb1324D4HGmmxYmjE34OFuLJNfNJA/viewform
- Note: Cannot redeem if you've already received Microsoft for Startups credits
- Tip: Apply for Microsoft for Startups first (also gives $2,500 OpenAI credits + Azure + LinkedIn etc.)

### 200+ Global Partners
- Full list: https://airtable.com/appAFQYnRFRl6HNRD/shrF5RArV8uKlwtQ3/tblzGlpipmUKpED0b
- New partnerships announced on #ef-partnership-announcements Slack channel
- To request a partner: https://airtable.com/appAFQYnRFRl6HNRD/shrs2WqAalJHffPKs

---

## 20. SF GUIDEBOOK — Mission District

### Mission Dolores Manor Area
The Mission District is one of the most vibrant and walkable neighborhoods in SF — full of cafes, restaurants, parks, and cultural landmarks.

### Cafes (Great for Working)
- Sightglass Coffee (Mission) — https://sightglasscoffee.com/pages/mission — Beautiful cafe, lots of seating
- Four Barrel Coffee — https://www.fourbarrelcoffee.com — One of SF's best-known roasters, strong WiFi
- Ritual Coffee Roasters — https://ritualcoffee.com/pages/mission-district — Reliable coffee, good workspace
- Grand Coffee Too — https://grandcoffee.com — Small but cozy neighborhood cafe
- Stable Cafe — https://stablecafe.com — Hidden courtyard workspace, great for quiet sessions
- The Mill — https://www.themillsf.com — Popular founder work spot

### Mission Burritos (A must-try!)
- La Taqueria — https://lataqueriasf.com
- Taqueria Cancun — https://taqueriacancunsf.com
- El Farolito — famous late-night spot

### Great Restaurants
- Foreign Cinema — https://foreigncinema.com
- Tartine Bakery — https://tartinebakery.com
- Lolo — https://lolosf.com
- Beretta — https://berettasf.com
- Flour + Water — https://flourandwater.com

### Bars & Drinks
- Trick Dog — https://trickdogbar.com — One of the most famous cocktail bars in the world
- ABV — https://www.abvsf.com — Excellent cocktails and food
- Zeitgeist — https://zeitgeistsf.com — Classic Mission outdoor beer garden
- True Laurel — https://truelaurelsf.com — Modern cocktail bar from the Lazy Bear team

### Parks & Outdoor Spaces
- Mission Dolores Park — The neighborhood's central park and social hub. Soccer, basketball, tennis courts. Incredible skyline views. Unofficial founder hangout spot.
- Garfield Square — Nearby park with soccer field
- Potrero del Sol Park
- In Chan Kaajal Park

### Sports & Recreation
- Basketball: Mission Dolores Park Courts
- Soccer: Garfield Square Soccer Field
- Running Routes: Dolores Park to Valencia Street to Mission District loops

### Getting Around
- Bike Share (Bay Wheels): https://www.lyft.com/bikes/bay-wheels — Stations at 16th St Mission BART, Valencia & 16th, Dolores Park
- BART: 16th St Mission Station and 24th St Mission Station — connects to Downtown SF, Oakland/Berkeley, SFO Airport
- MUNI Metro: Church St & 18th St (J Church Line)
- Pro tip: Biking is often faster than driving in SF

### Gyms
- Live Fit Gym (Mission) — https://livefitgym.com — 8 SF locations, $107/month premium membership

### Best Hikes in SF
- Twin Peaks — Panoramic city views
- Lands End — Coastal trail with Golden Gate Bridge views
- Mount Sutro Trails — Forest trails in the city
- Presidio Trails — Former military base, beautiful nature

### Explore the Mission
- Valencia Street — Boutiques, cafes, bars, bookstores
- Mission Street — Classic taquerias and cultural spots
- Balmy Alley — https://www.precitaeyes.org/balmy-alley — Famous street mural alley

### Pro Tips
- Dolores Park is the unofficial founder hangout spot
- Biking is often faster than driving in SF
- The Mission is one of the best food neighborhoods in the US
- Walk everywhere — you'll discover hidden gems daily

---

## 21. SF ECOSYSTEM & COMMUNITY

### Office Events Calendar
- Link: https://airtable.com/appVBgAmtUqoLRdco/shruLur2lOGnQJZLh
- Password: EFEvents2026

### Slack Channels for SF
- #sanfrancisco
- #sf-office-updates

### SF Community WhatsApp
- Community group to meet other folks in the Bay
- Invite link: https://drive.google.com/file/d/1A4AvN2yhbA4IUuGDruikaZspSJN-EtWJ/view?usp=sharing
- When you join, intro with: company name, one-liner, and where you're based in the Bay

---

## 22. IP & LEGAL

- Founders typically own the IP created within their company
- Specific details depend on the investment and legal structure
- For legal questions, reach out to the team

---

## 23. AFTER THE BRIDGE

If funded ($250k):
- Stay in SF for 3 more months
- Build from the San Francisco office
- Hands-on support from the team
- Prepare to raise next round
- Culminates in Demo Day (pitch to investors)

Fundraising support:
- Investor introductions
- Pitch development
- Narrative refinement
- Fundraising strategy
- Demo Day exposure

Can founders raise before Demo Day?
Generally encouraged to prepare for Demo Day, but exceptional teams may receive earlier investor interest.

Can founders hire during the program?
Yes, though most teams stay small during the residency. Hiring typically starts after funding is secured.
`;

// ═══════════════════════════════════════════════════════════
// SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════

const SYSTEM_PROMPT = `You are Dolores, the official WhatsApp assistant for The Bridge Spring26.

## Your Identity
- Your name is Dolores — named after Mission Dolores Manor, the house in San Francisco where The Bridge founders live during the program
- You're the go-to bot for The Bridge Spring26 founders
- You're helpful, sharp, and a little witty
- You talk like a smart friend who's already in SF and knows everything about the program
- Keep it casual but informative — no corporate fluff
- Use short messages. This is WhatsApp, not an email
- Use emojis sparingly but naturally (not every message)
- If someone asks who you are, introduce yourself as Dolores, The Bridge's AI assistant

## Your Audience
- 18-25 year old founders from around the world (non-US)
- Highly technical, ambitious, builder-types
- They're busy and want fast, clear answers
- They might be stressed about logistics (visa, flights, housing)
- Be reassuring but direct

## Tone & Style
- Conversational English, slightly informal
- Think: "smart friend who's already in SF" vibe
- Short sentences. Get to the point
- OK to use abbreviations (SF, IC, KOD, etc.) but explain on first use
- Never be condescending or overly formal
- Match their energy — if they're chill, be chill. If they're stressed, be helpful and calm

## FORMATTING RULES (CRITICAL)
You are writing for WhatsApp, NOT a website or email. Follow these rules strictly:
- NEVER use Markdown syntax. No ** for bold, no ## for headers, no []() for links
- NEVER use *asterisks* for bold or emphasis. No bold at all. Keep everything plain text
- NEVER use _underscores_ for italic either. Just write naturally
- For links, just paste the raw URL on its own line — no markdown link syntax
- Use arrow → to introduce items or steps (e.g. "→ Fill out this form")
- Use bullet points with simple "•" character, not dashes
- Use line breaks generously to keep things scannable
- Keep messages short and punchy — aim for 3-5 lines max per topic
- For multi-step instructions, use numbered lines (1. 2. 3.) with line breaks between
- Separate sections with a blank line, never with headers or dividers
- OK to use emojis as visual anchors (📅 for dates, ✈️ for flights, 🏠 for housing, etc.) but don't overdo it

## Response Rules

### DO:
- Answer questions based ONLY on the knowledge base below
- Provide links when relevant (forms, calendar, wiki, etc.)
- Be specific with dates, amounts, and deadlines
- If a question has a clear answer, give it immediately — don't pad
- For multi-part questions, use numbered responses
- Proactively mention related deadlines if relevant — especially if something is due soon or already past
- If today's date is past a deadline, tell the founder it's passed and what to do (e.g. "that deadline was March 31 — reach out to the team to check if you can still submit")

### DON'T:
- Make up information not in the knowledge base
- Share internal ops details or staff-only info
- Give immigration/visa advice beyond directing to the Monica session and the team
- Share the dashboard passwords proactively — only if a founder specifically asks for dashboard access
- Discuss other founders' personal info
- Make promises about funding, acceptance, or outcomes
- Never mention "Entrepreneurs First" or "EF" unless the founder brings it up first

### WHEN YOU DON'T KNOW:
Say something like:
- "Not sure about that one — hit up the team at spring26-thebridge@joinef.com and they'll sort you out"
- "Good question but I don't have the answer yet. Ping the team on Slack #spring26-the-bridge"

## KNOWLEDGE BASE:

${KNOWLEDGE_BASE}
`;

// ═══════════════════════════════════════════════════════════
// CLAUDE API — conversation management
// ═══════════════════════════════════════════════════════════

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const conversationCache = new Map();
const MAX_HISTORY = 10;

function getHistory(phoneNumber) {
  return conversationCache.get(phoneNumber) || [];
}

function addToHistory(phoneNumber, role, content) {
  const history = getHistory(phoneNumber);
  history.push({ role, content });
  if (history.length > MAX_HISTORY) {
    history.splice(0, history.length - MAX_HISTORY);
  }
  conversationCache.set(phoneNumber, history);
}

function getDateContext() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Los_Angeles' };
  const today = now.toLocaleDateString('en-US', options);

  // Key program dates for deadline awareness
  const deadlines = [
    { date: new Date('2026-03-31'), label: 'Pre-Bridge Checklist deadline' },
    { date: new Date('2026-03-31'), label: 'AMA with Alice Bentinck' },
    { date: new Date('2026-04-02'), label: 'US Immigration Talk with Monica' },
    { date: new Date('2026-04-10'), label: 'Arrivals in SF begin' },
    { date: new Date('2026-04-13'), label: 'Kick-off Day (KOD)' },
  ];

  const upcoming = deadlines
    .filter(d => d.date >= now)
    .map(d => {
      const diff = Math.ceil((d.date - now) / (1000 * 60 * 60 * 24));
      return `→ ${d.label}: ${diff === 0 ? 'TODAY' : diff === 1 ? 'TOMORROW' : `in ${diff} days`}`;
    })
    .join('\n');

  return `\n## TODAY'S DATE\n${today} (SF timezone: America/Los_Angeles)\n\nUpcoming deadlines:\n${upcoming}\n\nUse this context to create urgency when relevant. If a deadline is today or tomorrow, proactively warn the founder. If something has already passed, let them know and tell them what to do next.`;
}

async function generateResponse(phoneNumber, userMessage) {
  addToHistory(phoneNumber, "user", userMessage);
  const messages = getHistory(phoneNumber);

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT + getDateContext(),
    messages,
  });

  const assistantMessage =
    response.content[0]?.text || "Sorry, I couldn't process that. Try again!";
  addToHistory(phoneNumber, "assistant", assistantMessage);
  return assistantMessage;
}

// ═══════════════════════════════════════════════════════════
// WHATSAPP API — send messages + mark as read
// ═══════════════════════════════════════════════════════════

const WHATSAPP_API = "https://graph.facebook.com/v21.0";

function splitMessage(text, maxLength) {
  if (text.length <= maxLength) return [text];
  const chunks = [];
  let remaining = text;
  while (remaining.length > 0) {
    if (remaining.length <= maxLength) {
      chunks.push(remaining);
      break;
    }
    let splitIndex = remaining.lastIndexOf("\n", maxLength);
    if (splitIndex === -1 || splitIndex < maxLength * 0.5) {
      splitIndex = remaining.lastIndexOf(" ", maxLength);
    }
    if (splitIndex === -1) splitIndex = maxLength;
    chunks.push(remaining.slice(0, splitIndex));
    remaining = remaining.slice(splitIndex).trimStart();
  }
  return chunks;
}

async function sendMessage(to, text) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;
  const chunks = splitMessage(text, 4000);

  for (const chunk of chunks) {
    await axios.post(
      `${WHATSAPP_API}/${phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { body: chunk },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  }
}

async function markAsRead(messageId) {
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;
  try {
    await axios.post(
      `${WHATSAPP_API}/${phoneNumberId}/messages`,
      {
        messaging_product: "whatsapp",
        status: "read",
        message_id: messageId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Failed to mark as read:", err.message);
  }
}

// ═══════════════════════════════════════════════════════════
// AIRTABLE — conversation logging
// ═══════════════════════════════════════════════════════════

const AIRTABLE_API = "https://api.airtable.com/v0";
const BASE_ID = process.env.AIRTABLE_BASE_ID || "appHQ6zqny4qVWgOZ";
const TABLE_NAME = "Dolores Conversations";

async function logMessage({ messageId, phoneNumber, direction, message }) {
  const token = process.env.AIRTABLE_TOKEN;
  if (!token) {
    console.warn("AIRTABLE_TOKEN not set — skipping logging");
    return;
  }
  try {
    await axios.post(
      `${AIRTABLE_API}/${BASE_ID}/${encodeURIComponent(TABLE_NAME)}`,
      {
        records: [
          {
            fields: {
              "Message ID": messageId || `bot-${Date.now()}`,
              "Phone Number": phoneNumber,
              Direction: direction,
              Message: message,
              Timestamp: new Date().toISOString(),
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (err) {
    console.error("Airtable log failed:", err.response?.data || err.message);
  }
}

// ═══════════════════════════════════════════════════════════
// WEBHOOK HANDLER — main export
// ═══════════════════════════════════════════════════════════

const processedMessages = new Set();

module.exports = async function handler(req, res) {
  // ─── GET: Webhook verification (Meta handshake) ───
  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === process.env.WEBHOOK_VERIFY_TOKEN) {
      console.log("Webhook verified");
      return res.status(200).send(challenge);
    }
    return res.status(403).send("Forbidden");
  }

  // ─── POST: Incoming messages ───
  if (req.method === "POST") {
    const body = req.body;

    try {
      const entry = body?.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;

      if (!value?.messages?.[0]) {
        return res.status(200).send("OK");
      }

      const message = value.messages[0];
      const from = message.from;
      const messageId = message.id;

      // Deduplicate
      if (processedMessages.has(messageId)) {
        return res.status(200).send("OK");
      }
      processedMessages.add(messageId);
      if (processedMessages.size > 1000) {
        const arr = [...processedMessages];
        arr.slice(0, arr.length - 1000).forEach((id) =>
          processedMessages.delete(id)
        );
      }

      // Mark as read (non-blocking)
      markAsRead(messageId).catch(() => {});

      // Only handle text messages
      if (message.type !== "text") {
        await sendMessage(
          from,
          "Hey! I can only read text messages for now. Type your question and I'll help you out"
        );
        await logMessage({
          messageId,
          phoneNumber: from,
          direction: "inbound",
          message: `[${message.type} message — not supported]`,
        });
        return res.status(200).send("OK");
      }

      const userText = message.text.body;
      console.log(`Message from ${from}: ${userText}`);

      // Log inbound (non-blocking)
      logMessage({
        messageId,
        phoneNumber: from,
        direction: "inbound",
        message: userText,
      }).catch(() => {});

      const reply = await generateResponse(from, userText);
      console.log(`Reply to ${from}: ${reply.slice(0, 100)}...`);

      await sendMessage(from, reply);

      // Log outbound (non-blocking)
      logMessage({
        messageId: `reply-${messageId}`,
        phoneNumber: from,
        direction: "outbound",
        message: reply,
      }).catch(() => {});

      return res.status(200).send("OK");
    } catch (err) {
      console.error("Error processing message:", err);
      return res.status(200).send("OK");
    }
  }

  res.status(405).send("Method not allowed");
};
