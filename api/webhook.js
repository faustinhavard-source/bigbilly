// Dolores — Single-file serverless function for Vercel
// Knowledge base generated from Notion on 2026-04-02

const Anthropic = require("@anthropic-ai/sdk");
const axios = require("axios");

// ═══════════════════════════════════════════════════════════
// KNOWLEDGE BASE (generated from Notion — last sync: 2026-04-02)
// ═══════════════════════════════════════════════════════════

const KNOWLEDGE_BASE = `
# The Bridge — WhatsApp Chatbot Knowledge Base

> This document is the single source of truth for the WhatsApp chatbot. It contains all verified information about The Bridge Spring26 programme. The bot should ONLY answer based on this content. If something isn't covered here, the bot should say it doesn't know and direct the user to email spring26-thebridge@joinef.com.

Last updated: April 2, 2026

---

## 1. WHAT IS THE BRIDGE?

The Bridge is a program by Entrepreneurs First (EF) based fully in San Francisco for exceptional non-US founders at Stage 0 (pre-idea or pre-team).

It's an 8-week intensive residency designed for ~40 young engineers/builders ready to build their own company — their bridge to the US and Silicon Valley.

EF has just raised $200M to back the next generation of founders. The Bridge is the flagship program for that mission.

### Two phases:

**Phase 1 — FORM (8-week residency)**
- Live and build together in a shared founder house in SF
- Meet potential co-founders
- Explore ideas or refine early concepts
- Talk to users, ship early products
- Rapidly test markets and problem spaces
- At the end, teams pitch to the Investment Committee

**Phase 2 — Company Building (3 months, funded teams only)**
- Teams that receive funding stay in SF for 3 more months
- Build full-time from the EF San Francisco office
- Hands-on support from the EF team
- Prepare to raise next round
- Culminates in Demo Day

### Funding
- Strongest teams receive **$250,000 in pre-seed funding**
- EF invests $250k on simple terms:
  - $125k for 8% equity via an EF SAFE
  - Optional $125k MFN SAFE
- EF alumni have raised from: Sequoia, Founders Fund, a16z, Benchmark, Index
- EF is backed by: Patrick & John Collison, Demis Hassabis, Reid Hoffman, Eric Schmidt, Mati Staniszewski (ElevenLabs), and more

---

## 2. WHO IS IT FOR?

The Bridge is for **Stage 0 founders** — people who may arrive pre-idea, pre-team, or with early ideas.

Profiles we look for:

**Builders:** Engineers, researchers, hackers, product builders
**Future CEOs:** Commercial operators, growth leaders, sales/distribution experts

- Typically based outside the United States
- Not limited to CS or AI — we support founders across software, AI, robotics, deep tech, and other domains
- Also support founders strong in growth, distribution, and sales
- Very competitive: only ~40 founders per cohort

---

## 3. SPRING26 KEY DATES & TIMELINE

| Date | Event |
|------|-------|
| Before March 31 | Complete Pre-Bridge Checklist (founder profile, flight info, calendar) |
| March 31 | AMA with Alice Bentinck (CEO) — 6:30pm CEST / 4:30pm GMT / 9:30am PDT |
| April 2 | US Immigration Talk & Q&A with Monica — 4:00pm CEST / 2:00pm GMT / 7:00am PDT |
| April 9-11 | Arrivals (some early on April 9, bulk on April 10, final on April 11) |
| April 13-14 | Kick-off Days (TWO days) |
| April 18 | The Bridge Offsite at Stinson Beach (8:30am-3:00pm) |
| Week 1-2 | Exploration and co-founder matching |
| Week 3-4 | Early idea validation and user conversations |
| Week 5-6 | Product iteration and deeper market exploration |
| Week 7 | Preparing for Investment Committee |
| Week 8 | Investment Committee pitches |
| Week of June 9 | IC week |

---

## 4. PRE-BRIDGE CHECKLIST

### Before March 31st:
1. **Founder Profile** — Complete at: https://airtable.com/appQQph3BFJyL9teo/pagc8eb86mMx9RluS/form
2. **Flight Information** — Fill out at: https://airtable.com/appHQ6zqny4qVWgOZ/pagGbhY5LsAM7YklM/form (deadline: Friday March 27th 6PM — if not booked by then, considered not joining)
3. **Add Calendar** — https://calendar.google.com/calendar/u/0?cid=Y181MmFhMTkxNzVjMGU3OGQ5OTk5MTU1OGQzZjZhZTA3MmUzNjQ3NjRkYzlmZjNlNDk5NGMyY2NjNjVlZjY4NDQ3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20

### After March 31st:
1. **Founder Dashboard** — Review cohort dashboard and teams dashboard
2. **Slack** — Download Slack, turn on notifications for:
   - #spring26-the-bridge (general comms)
   - #spring26-the-bridge-announcements (announcements)
   - #spring26-the-bridge-team-formations (team updates)
3. **WhatsApp Group** — https://chat.whatsapp.com/LIJnR9Z3h9uCWGkhhWlDMP?mode=gi_t

---

## 5. FLIGHTS & TRAVEL

### Flight Booking Guidelines:
- Book a **round trip flight** with a return date **before June 14** (critical for US administration)
- Book with a **flexible fare** (allows date modifications)
- Expected budget: **€600–€800** (most round trips from Europe are ~€600)
- Arrive on **Friday April 10** — program starts Monday April 13
- After booking, submit this form: https://airtable.com/appiaPHz7qq4bPkxW/shrx0QYS8cNi2CO9O
- Finance team will invite you to **Spendesk** to expense flights (up to €800)

### Airport Transfers:
- Private van service arranged for arrivals at SFO

---

## 6. EXPENSES & REIMBURSEMENT

### How to get reimbursed:
1. Fill out the expense form: https://airtable.com/appiaPHz7qq4bPkxW/shrx0QYS8cNi2CO9O
2. Finance team adds you to **Spendesk**
3. Submit expenses through Spendesk

### Flight reimbursement cap: **€800**

### Selection Days travel policy:
- Up to €60 from France
- Up to €150 from Europe
- Up to €500 from outside Europe

---

## 7. HOUSING & LIVING IN SF

### Residency Houses:
- Two houses: one for women, one for men
- **Mission Dolores Manor (MDM)** is the main hub
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

---

## 8. KEY LOCATIONS

- **MDM House**: 822 S. Van Ness Ave, San Francisco, CA — https://maps.app.goo.gl/jNHde4iQeJuAXUn78
- **EF Office**: 501 Folsom St, San Francisco, CA — https://maps.app.goo.gl/ms6BrbmBW7k34oMn9

---

## 9. PERKS

### Gym Access
- Partnership with **Live Fit Gym** (8 SF locations)
- EF-negotiated rate: $107/month for premium membership

### Transportation
- **Lyft Pass**: $100 credit per founder for 8 weeks (rides, scooters, Bay Wheels bike share)
- **Clipper Card**: $100 credit per founder for 8 weeks (full public transit — bus, tram, subway, train)

### Connectivity
- **eSIM** via Popcorn.Space ($49/month) — details being finalized

### Merch
- Branded totes, rugby shirts, caps, water bottles

---

## 10. WEEKLY SCHEDULE & RITUALS

### Weekly cadence:

**Monday Morning Standup** (at the house)
Coffee, breakfast, and short updates from each team. Each team gets 5 minutes:
- What you're working on (two sentences)
- Your goal by IC
- The best thing you shipped last week
- The most important thing you learned about your customer last week
- The most important tech unlock you had last week (if any)

**Team Check-ins** (once per week, 30 min)
Assigned weekly slot, typically midweek (Tue-Thu). Focus on:
- What's working and what's not
- Clarifying priorities for the week
- Making sure you're not stuck on something that doesn't matter

**Individual Check-ins** (every 2 weeks, 30 min)
Focus on: market fit, cofounder dynamics, individual strengths, what to improve.

**Tactical Workshops** (ad hoc, on request)
Examples: customer discovery feedback, outreach message workshopping, product demo rewrite, market framing sessions.

**Optional Sunday Run**
Weekly, founder-led Sunday morning run through SF hills.

---

## 11. PROGRAM STRUCTURE: WEEK-BY-WEEK FOCUS

**Pre-program weekend (April 9-11)**
Arrive, settle into the house, get oriented, get over jet lag. Meet everyone, talk about what you might want to build and who you might want to build with.

**Week 1 (learn about the foundations)**
First two days are Kick-off Days at the office. Covers ideation frameworks, markets, cofounders. By end of week 1, if you didn't arrive in a team, you should have formed a first one with an initial direction. Includes Offsite on Saturday April 18.

**Week 2 (learn how to execute)**
Focus on operational effectiveness: customer discovery, outreach, selling, pitching, distinguishing real traction from fake. Ideally by end of week 2: set on a team, a market, and a problem space.

**Weeks 3-7 (build mode)**
Calendar should look like a founder's calendar: talking to customers, building, iterating, shipping. The Bridge team stays close through check-ins and tactical workshops.

**Week 8 (IC prep + Investment Committee)**
Translating progress into a concise, credible story. Dedicated sessions on fundraising mindset and IC preparation.

---

## 12. CO-FOUNDER MATCHING & TEAMS

- Co-founder relationships emerge through informal interactions, structured sessions, collaborative projects
- Founders are encouraged to experiment before committing
- Teams may form, dissolve, and reform — that's normal
- If someone doesn't find a co-founder: continue exploring, join another team, continue solo, or leave and reapply
- Founders can bring ideas but should validate quickly and stay open
- Conflict is normal — EF staff can facilitate conversations and restructuring

---

## 13. INVESTMENT COMMITTEE

### What IC looks for:
- Strength of the founding team
- Founder-market fit
- Market size
- Evidence of speed and execution
- Early signals of user demand

### What IC actually is:
- 30-minute meeting with 2-3 people from the EF team or advisor network
- They will have read/watched your materials beforehand
- Time is used to go deeper: what you're building, what you've learned, how you think about the market, team dynamics
- After all panels, EF partners meet for final decisions
- Your panel is one input; your trajectory over the 8 weeks is also considered

### What happens if funded:
- Top teams receive $250k from EF
- Move from The Bridge (Form phase) into EF Launch program
- Build towards Demo Day and first round of institutional investment

### If not funded:
- Continue building independently
- Seek external funding
- Reapply to future EF programs
- EF may still provide informal support

---

## 14. VISA & IMMIGRATION

- EF team helps guide founders through the visa process
- Visa paperwork begins after acceptance
- **US Immigration Talk & Q&A with Monica** — April 2nd (mandatory)
  - 4:00pm CEST / 2:00pm GMT / 7:00am PDT
  - Call link: https://meet.google.com/vvw-dfkv-azq
- Critical if you're not already on a US visa

---

## 15. COMMUNICATION CHANNELS

- **Email**: spring26-thebridge@joinef.com
- **Slack channels**:
  - #spring26-the-bridge (general)
  - #spring26-the-bridge-announcements
  - #spring26-the-bridge-team-formations
- **WhatsApp Group**: https://chat.whatsapp.com/LIJnR9Z3h9uCWGkhhWlDMP?mode=gi_t
- **Wiki**: https://entrepreneursfirst.notion.site/WIP-The-Bridge-SPRING26-WIKI-325e26adb8c980478b9fd89e951c3baf

---

## 16. PROGRAM COST

**Nothing.** EF covers:
- Housing
- Workspace
- Food
- Program costs

---

## 17. CULTURE & EXPECTATIONS

- Full-time commitment — evenings and weekends often involve work
- Successful founders are: extremely driven, fast learners, collaborative, comfortable with ambiguity, obsessed with building
- Professional conduct, respectful collaboration, integrity expected
- Harassment or disrespectful behavior is not tolerated
- Side projects: founders are expected to focus fully on their company
- Leaving early: EF will work with you to determine next steps

---

## 18. TOOLING

- **Founder Dashboard**: https://airtable.com/appQQph3BFJyL9teo/shre7AVRTheX74WCY (Password: WelcometoTheBridge)
- **Team Dashboard**: https://airtable.com/appQQph3BFJyL9teo/shrux9MNEeBPUfEvA (Password: WelcometoTheBridge)
- **Team Formation Form**: https://airtable.com/appQQph3BFJyL9teo/pagrRDJwQD2EZg99L/form
- **Dashboard Signup**: https://airtable.com/appQQph3BFJyL9teo/pagc8eb86mMx9RluS/form
- **Break up / pivot form**: Coming soon
- **Pocket letter form**: https://airtable.com/appVOkfxMJIjwVZcj/pag5FFGW6TAJYDec1/form

---

## 19. KICK-OFF DAYS (KOD)

**Day 1 - Monday April 13 (at EF Office)**
- 9:00-10:00 — Breakfast + expectation setting
- 10:15-11:15 — Talk: Ideation frameworks
- 11:30-12:30 — Talk: Markets
- 12:30-2:00 — Cohort lunch
- 2:00-3:00 — Talk: Cofounders
- 3:00-6:00 — Cofounder Carousel

**Day 2 - Tuesday April 14 (at EF Office)**
- 9:00-10:00 — Talk: Customers
- 10:15-11:15 — Talk: Customer discovery
- 11:30-12:30 — Talk: Outreach

---

## 20. FIRST WEEK DETAILED SCHEDULE

**Friday April 10 - Arrival Day** (MDM House)
- 8:00 AM-12:00 PM: Arrivals + check-in
- 9:40-11:30 AM: Breakfast
- 1:00-2:00 PM: Lunch
- 2:00-5:30 PM: Free time
- 5:30-6:30 PM: Optional walk
- 7:00-8:30 PM: Dinner
- 8:30-10:00 PM: Casual hang
- 10:30 PM: Quiet hours

**Saturday April 11** (MDM House)
- 8:30-9:30 AM: Breakfast
- 9:30-10:30 AM: House orientation
- 10:30 AM-12:30 PM: Work/build
- 12:30-1:30 PM: Lunch
- 1:30-3:30 PM: Founder Orientation Sessions
- 3:30-6:00 PM: Neighborhood walk
- 6:30-8:00 PM: Dinner
- 8:00 PM onwards: Optional night out

**Sunday April 12** (MDM House)
- 8:30-9:30 AM: Breakfast
- 9:30-11:30 AM: Work/build
- 12:00-1:00 PM: Lunch
- 1:00-3:00 PM: Founder Orientation Sessions
- 3:00-6:00 PM: Outdoor block
- 6:30-8:00 PM: Dinner
- 8:00-9:30 PM: Founder hang

**Wednesday April 15** (MDM House)
Work/build day. Breakfast, lunch, dinner provided.

**Thursday April 16** (EF Office)
Standup, check-ins, cofounder matching round 2, work/build.

**Friday April 17** (EF Office)
Standup, work/build all day.

**Saturday April 18 - The Bridge Offsite**
Location: Stinson Beach, CA
8:30 AM - 3:00 PM

---

## 21. PROGRAM TALKS & LEARNING RESOURCES

Most talks happen in Weeks 1 and 2, then become occasional from Week 3 onwards. Written material and slides are shared as pre-reads before each talk. Speakers include founders, operators, Tier 1 investors, and domain experts.

---

## 22. RECOMMENDED READING & CONTENT

### Ideation & Team Formation
- "Future Founders, Here's How to Spot and Build in Nonobvious Markets" (First Round Review)
- "Choose Good Quests" (Founders Fund)
- "Competition is for Losers" — Peter Thiel (How to Start a Startup)
- "The Founding Career Path" — Alice Bentinck
- "Optionality is a mind virus" (99d Substack)

### Customer Discovery & MVP
- "The Mom Test" by Rob Fitzpatrick — how to talk to customers
- "What TAM should actually tell you" (wquist.com)

### Product & PMF
- "How Superhuman Built an Engine to Find Product/Market Fit" (First Round Review)
- "The Arc PMF Framework" (Sequoia)
- "Building AI Products In The Probabilistic Era"

### Go-to-Market / Revenue
- "Pricing the AI Workforce" (NFX)
- "Founding Sales" — The Founder Led Sales Handbook
- "Pricing in the AI Era" (Sequoia podcast with Manny Medina)

### Fundraising
- "Startups are just stories about the future" (99d)
- "Startups are Risk Bundles" (Coding VC)
- "Narrative Is the Interface" (99d)

### Founder Mindset
- "How to Work Hard" — Paul Graham
- "How to Be More Agentic" (Every)
- "Learn to Love the Moat of Low Status" (Useful Fictions)

---

## 23. HOUSE RULES & COMMUNITY

### House expectations:
- Respect shared spaces
- Reasonable noise levels
- Keep it clean
- Be considerate of other residents

### Visitors:
- Visitors may be allowed depending on house policies
- Day visitors, overnight guests subject to guidelines shared at onboarding

### Community culture built through:
- Founder dinners (Thursday nights)
- Group sessions
- Demo nights
- Informal collaboration
- Shared housing experiences
- Sunday Running Club

---

## 24. IP & LEGAL

- Founders typically own the IP created within their company
- Specific details depend on the investment and legal structure
- For legal questions, reach out to the EF team

---

## 25. AFTER THE BRIDGE

### If funded ($250k):
- Stay in SF for 3 more months
- Build from EF San Francisco office
- Hands-on support from the EF team
- Prepare to raise next round
- Culminates in Demo Day (pitch to investors)

### EF fundraising support:
- Investor introductions
- Pitch development
- Narrative refinement
- Fundraising strategy
- Demo Day exposure

### Can founders raise before Demo Day?
Generally encouraged to prepare for Demo Day, but exceptional teams may receive earlier investor interest.

### Can founders hire during the program?
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

## FORMATTING RULES (CRITICAL — YOUR #1 PRIORITY)
You are writing for WhatsApp. Your output will be displayed raw in a chat bubble. Any special characters you use WILL show up visually.

BANNED CHARACTERS — if ANY of these appear in your output, the message is broken:
1. The asterisk character — do not use it. Not once. Not for bullet points, not around words, not for any reason. If you catch yourself about to type one, stop and rephrase.
2. The underscore character around words — do not use it for emphasis.
3. Double brackets or parentheses for links — just paste the raw URL.
4. Hash symbols for headers — no headers at all.

WHAT TO USE INSTEAD:
→ Use arrows like this to introduce items or steps
• Use bullet dots like this for lists
Use CAPS for emphasis (e.g. "arrive FRIDAY April 10")
Use emojis as visual anchors: 📅 dates, ✈️ flights, 🏠 housing, 💰 money, 🔗 links
Use numbers (1. 2. 3.) for sequential steps
Use blank lines between ideas to keep things scannable
Paste raw URLs on their own line

GOOD example:
"📅 You should arrive FRIDAY April 10

The program kicks off Monday April 13 (Kick-off Day), so arriving Friday gives you the weekend to settle in.

→ April 10-12 is the official arrival window
→ KOD is Monday April 13 at the SF office

✈️ Book a round trip with return before June 14."

BAD example (NEVER do this):
"You should arrive on **Friday April 10th**."
"Don't forget to fill out the *flight form*"

TONE:
→ Short and punchy — 3-5 lines max per topic
→ Simple question = simple answer (1-3 lines)
→ No corporate preamble, no "Great question!", just answer

## Response Rules

### DO:
- Answer questions based ONLY on the knowledge base below
- Provide links when relevant (forms, calendar, wiki, etc.)
- Be specific with dates, amounts, and deadlines
- If a question has a clear answer, give it immediately — don't pad
- For multi-part questions, use numbered responses
- Proactively mention related deadlines if relevant — especially if something is due soon or already past
- CRITICAL: Always check TODAY'S DATE (injected at the end of this prompt) before mentioning any deadline. If a date has ALREADY PASSED, do NOT present it as upcoming. Instead say it's passed and tell them to contact the team. For example if today is March 30 and the flight form deadline was March 27, say "that deadline was March 27 — it's already passed, reach out to the team at operations-thebridge@joinef.com to check if you can still submit"

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
- "Not sure about that one — hit up the team at operations-thebridge@joinef.com and they'll sort you out"
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

  const passed = deadlines
    .filter(d => d.date < now)
    .map(d => `→ ${d.label}: ALREADY PASSED`)
    .join('\n');

  return `\n\n## TODAY'S DATE (USE THIS — DO NOT IGNORE)\nToday is ${today} (SF timezone).\n\nUpcoming:\n${upcoming || 'None'}\n\nAlready passed:\n${passed || 'None'}\n\nRULES:\n→ If a founder asks about something with a PASSED deadline, tell them it already passed and to email operations-thebridge@joinef.com\n→ If a deadline is TODAY or TOMORROW, warn them with urgency\n→ Never present a past date as if it's still in the future`;
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
