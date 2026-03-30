// BigBilly — Single-file serverless function for Vercel
// All code inlined to avoid cross-file require() issues with Vercel bundler

const Anthropic = require("@anthropic-ai/sdk");
const axios = require("axios");

// ═══════════════════════════════════════════════════════════
// KNOWLEDGE BASE (inlined from knowledge_base.md)
// ═══════════════════════════════════════════════════════════

const KNOWLEDGE_BASE = `# The Bridge — WhatsApp Chatbot Knowledge Base

> This document is the single source of truth for the WhatsApp chatbot. It contains all verified information about The Bridge Spring26 programme. The bot should ONLY answer based on this content. If something isn't covered here, the bot should say it doesn't know and direct the user to email spring26-thebridge@joinef.com.

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
| April 10-12 | Arrivals in San Francisco |
| April 13 | Kick-off Day (KOD) |
| Week 1-2 | Exploration and co-founder matching |
| Week 3-4 | Early idea validation and user conversations |
| Week 5-6 | Product iteration and deeper market exploration |
| Week 7 | Preparing for Investment Committee |
| Week 8 | Investment Committee pitches |

### Kick-off Day Schedule (April 13)
- 9:00am — Welcome breakfast/brunch
- 10:00am — The Bridge Introduction (Alice & Charlie)
- 11:00am — Founders Roaster (1-minute from everyone)
- 12:00pm — Cohort & Team Lunch
- 2:00pm — Carousels (co-founder matching)
- 4:00pm — Fireside chat with EF alum
- 5:00pm — Team formation ceremony
- 5:30pm — KOD wrap-up

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
3. **WhatsApp Group** — Link coming soon

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

## 8. PERKS

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

## 9. WEEKLY SCHEDULE & RITUALS

| Day | Activity |
|-----|----------|
| Monday | **Monday Signal** (12-2pm): Weekly intent, lightning updates, 45-min talk |
| Tuesday | **Workshops** (12-2pm): Specific topics (GTM, PMF, etc.), everyone speaks |
| Wednesday | **EiR Day**: Full-day, 45min-1hr per team with Entrepreneur in Residence |
| Thursday | **The Bridge Dinner** (6-9pm): Founder guest from SF + bi-monthly demos |
| Friday | **EiR or Weekly Progress Debrief** (morning) |
| Sunday | **Weekly Run Day** (Sunday Running Club) |

### Regular check-ins:
- **Team check-ins**: 30 min/week/team with EF team member or EiR
- **Individual check-ins**: 30 min every 2 weeks with a TI (Talent Investor)
- **EiR check-in**: 30 min/week/team
- **Accountability**: 1x every 2 weeks (2h) — group pitches/demos
- **1:1 workshops**: Tactical office hours, ad-hoc

---

## 10. CO-FOUNDER MATCHING & TEAMS

- Co-founder relationships emerge through informal interactions, structured sessions, collaborative projects
- Founders are encouraged to experiment before committing
- Teams may form, dissolve, and reform — that's normal
- If someone doesn't find a co-founder: continue exploring, join another team, continue solo, or leave and reapply
- Founders can bring ideas but should validate quickly and stay open
- Conflict is normal — EF staff can facilitate conversations and restructuring

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
- Reapply to future EF programs
- EF may still provide informal support

---

## 12. VISA & IMMIGRATION

- EF team helps guide founders through the visa process
- Visa paperwork begins after acceptance
- **US Immigration Talk & Q&A with Monica** — April 2nd (mandatory)
  - 4:00pm CEST / 2:00pm GMT / 7:00am PDT
  - Call link: https://meet.google.com/vvw-dfkv-azq
- Critical if you're not already on a US visa

---

## 13. COMMUNICATION CHANNELS

- **Email**: spring26-thebridge@joinef.com
- **Slack channels**:
  - #spring26-the-bridge (general)
  - #spring26-the-bridge-announcements
  - #spring26-the-bridge-team-formations
- **WhatsApp Group**: Link coming soon
- **Wiki**: https://entrepreneursfirst.notion.site/WIP-The-Bridge-SPRING26-WIKI-325e26adb8c980478b9fd89e951c3baf

---

## 14. PROGRAM COST

**Nothing.** EF covers:
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
- Leaving early: EF will work with you to determine next steps

---

## 16. TOOLING

- **Founder Dashboard**: https://airtable.com/appQQph3BFJyL9teo/shre7AVRTheX74WCY (Password: WelcometoTheBridge)
- **Team Dashboard**: https://airtable.com/appQQph3BFJyL9teo/shrux9MNEeBPUfEvA (Password: WelcometoTheBridge)
- **Team Formation Form**: https://airtable.com/appQQph3BFJyL9teo/pagrRDJwQD2EZg99L/form
- **Dashboard Signup**: https://airtable.com/appQQph3BFJyL9teo/pagc8eb86mMx9RluS/form

---

## 17. KICK-OFF DAY (KOD) PREPARATION

### 3 goals for KOD:
1. Leave with a list of **5 potential co-founders** you want to explore working with
2. Know how to **evaluate a potential co-founder**
3. Know what your **edge** is

### Cohort Introductions (1 minute each)
You'll pitch yourself to the full cohort. Prep this in advance. Cover:
- Your name
- Your edge (what makes you unique)
- Most exciting thing you've previously worked on
- What you want to work on at The Bridge (industry, product, etc.)
- Why should people work with you? (what makes you an outlier)

Tips: Be memorable, punchy, and clear. Avoid being generic, waffly, or humble.

### Co-Founder Carousel (2.5 minutes per person)
Speed-dating for co-founders. You'll rotate through short conversations. Cover:
- Your name
- Most exciting thing you've previously worked on
- Your most counterintuitive belief about how the world will be different in 5 years

Tips: Have your pitch ready, take notes, watch the clock. Don't forget who you've spoken to!

---

## 18. RECOMMENDED READING & CONTENT

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

## 19. HOUSE RULES & COMMUNITY

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

## 20. IP & LEGAL

- Founders typically own the IP created within their company
- Specific details depend on the investment and legal structure
- For legal questions, reach out to the EF team

---

## 21. AFTER THE BRIDGE

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
Yes, though most teams stay small during the residency. Hiring typically starts after funding is secured.`;

// ═══════════════════════════════════════════════════════════
// SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════

const SYSTEM_PROMPT = `You are **Dolores**, the official WhatsApp assistant for **The Bridge Spring26** by Entrepreneurs First.

## Your Identity
- You're the go-to bot for The Bridge Spring26 founders
- You're helpful, sharp, and efficient
- You talk like a smart friend who happens to know everything about the program
- Keep it casual but informative — no corporate fluff
- Use short messages. This is WhatsApp, not an email
- Use emojis sparingly but naturally (not every message)

## Your Audience
- 18-25 year old founders from around the world (non-US)
- Highly technical, ambitious, builder-types
- They're busy and want fast, clear answers
- They might be stressed about logistics (visa, flights, housing)
- Be reassuring but direct

## Tone & Style
- Conversational English, slightly informal
- Think: "smart friend who works at EF" vibe
- Short sentences. Get to the point
- OK to use abbreviations (SF, IC, KOD, etc.) but explain on first use
- Never be condescending or overly formal
- Match their energy — if they're chill, be chill. If they're stressed, be helpful and calm

## Response Rules

### DO:
- Answer questions based ONLY on the knowledge base below
- Provide links when relevant (forms, calendar, wiki, etc.)
- Be specific with dates, amounts, and deadlines
- If a question has a clear answer, give it immediately — don't pad
- For multi-part questions, use numbered responses
- Proactively mention related deadlines if relevant

### DON'T:
- Make up information not in the knowledge base
- Share internal ops details or staff-only info
- Give immigration/visa advice beyond directing to the Monica session and EF team
- Share the dashboard passwords proactively — only if a founder specifically asks for dashboard access
- Discuss other founders' personal info
- Make promises about funding, acceptance, or outcomes

### WHEN YOU DON'T KNOW:
Say something like:
- "Not sure about that one — hit up the team at operations-thebridge@joinef.com and they'll sort you out"

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

async function generateResponse(phoneNumber, userMessage) {
  addToHistory(phoneNumber, "user", userMessage);
  const messages = getHistory(phoneNumber);

  const response = await client.messages.create({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
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
const TABLE_NAME = "BigBilly Conversations";

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

      // Mark as read (non-blocking, don't fail if it times out)
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
