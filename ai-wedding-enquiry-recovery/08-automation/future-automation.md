# Automation & Future Development

> **Read this first.** None of this should be built before you have delivered **three paid clients**. Automation is how you scale a validated service — it is not how you find out whether the service should exist. Everything below is deliberately optional.

---

## 0. The rule

**Do not build a feature because it sounds impressive. Build it only when you can point at a specific client who asked for it, or a specific hour of your own time it saves every week.**

Before building anything, answer these five questions in writing:

1. What exact problem does this solve, for whom?
2. Is it necessary — or just nice?
3. Can it be implemented for **free**?
4. What skills does it require, and do I have them?
5. What consent, privacy or platform-permission implications does it have?

If you cannot answer all five, don't build it yet.

---

## 1. The honest priority order

| Priority | Feature | Build it when | Why |
|---|---|---|---|
| **P0 — never** | Automated WhatsApp/Instagram sending on the client's behalf | Never | Breaches platform policy, requires opt-in and approved templates, risks the client's number, and destroys the trust position you're selling |
| **P0 — now, free** | Reusable document templates | Immediately | Copy-paste, not code. This is where 80% of your time savings live |
| **P1** | Google Sheets auto-refresh of priority/overdue columns | After client #1 (offered free in the tracker already) | Already built — formulas do this with no code |
| **P2** | Internal reminder emails to **yourself** (delivery deadlines, Day-14 check-ins) | After client #2 | Free, saves you from forgetting a promised date. No client data involved |
| **P3** | AI-assisted classification of a client's raw enquiry dump | After client #3, if you're spending 2+ hours per client on intake | Saves real time, but you must review every output |
| **P4** | A "client intake" Google Form that writes directly into the tracker | If you get 5+ clients | Removes the copy-paste between the form and the sheet |
| **P5** | Multi-client dashboard for **you** (which client's delivery is due) | If you run 4+ clients at once | Process management, not product |
| **P6 — deprioritise** | Integrations with HoneyBook / Dubsado / Studio Ninja / Pixieset | Only if 3+ clients ask for the same integration | Most of your target segment doesn't use a CRM. Building an integration for a minority is a waste |
| **P7 — deprioritise** | A real app / web dashboard for clients | Probably never for this segment | Your clients live in WhatsApp and Sheets. An app adds support burden and buys nothing |

---

## 2. Feature-by-feature evaluation (the five questions answered)

### 2.1 Automatic internal reminders (your own to-dos)

| Question | Answer |
|---|---|
| Problem solved | You forget to send the Day-14 check-in, or to delete client data within 30 days — which you promised in writing |
| Necessary? | **Yes**, once you have 2+ clients. Missing a promised date is the fastest way to lose a referral |
| Free? | Yes — Google Calendar recurring reminders, or the Apps Script in `08-automation/apps-script/` |
| Skills needed | None if you use Calendar. Basic JavaScript if you use the script |
| Consent needed | None (it's your own data) |
| Privacy implications | None — keep no client data in the reminder, just the client name and date |

### 2.2 AI-assisted lead categorisation

| Question | Answer |
|---|---|
| Problem solved | Sorting a client's messy 60-row enquiry dump takes 2–3 hours, and it is the least interesting part of delivery |
| Necessary? | **Only after client #3.** Before that, you're learning what the categories should even be |
| Free? | Yes — use the prompt **P1** in `03-demo-materials/message-templates/ai-prompt-templates.md` with any free AI chat tool |
| Skills needed | Prompt writing only (already done for you) |
| Consent needed | Client's permission to use an AI tool on their data, and the data must be minimised first (initials only, no phone numbers) |
| Privacy implications | **Real.** Free AI tiers may use inputs for training. Open the tool's settings and check, or use a paid tier with training off, or de-identify before pasting. Document what you chose in the agreement notes |

### 2.3 Draft follow-up message generation

| Question | Answer |
|---|---|
| Problem solved | Writing 30 personalised messages takes 3–4 hours |
| Necessary? | Already partly solved with the prompts (P0/P2/P6). It consumes real delivery time, so it's the highest-value automation for **you** |
| Free? | Yes |
| Skills needed | Prompt discipline — one enquiry per prompt, always with the Voice Card |
| Consent needed | Client must know and agree that AI assists the drafting (state it plainly in the proposal) |
| Privacy implications | Same as above: minimise data before pasting. Never paste phone numbers, emails or full names |

**The honest limitation:** AI-written messages that sound like AI cost the client the booking. Your review *is* the product. Never remove the human step.

### 2.4 Follow-up scheduling (inside the client's own tracker)

| Question | Answer |
|---|---|
| Problem solved | The client forgets who is due |
| Necessary? | Already solved — the tracker computes `Follow-Up Due Date`, `Priority` and `OVERDUE` automatically |
| Free? | Yes, already built |
| Skills needed | None |
| Consent needed | None |
| Privacy implications | None |
| **Do not** | Build anything that sends the client's messages *for* them. Auto-sending is where this stops being a service and starts being back-alley automation |

### 2.5 Simple status summaries for the client

| Question | Answer |
|---|---|
| Problem solved | Clients don't read dashboards; they read one-paragraph updates |
| Necessary? | Yes — a **monthly recap message** for past clients keeps you in mind and creates repeat work. Free, and takes 5 minutes |
| Free? | Yes — prompt **P5** |
| Skills needed | None |
| Consent needed | None |
| Privacy implications | Send only aggregate numbers, never couple details, over WhatsApp/email |

### 2.6 Integrations with existing CRM tools

| Question | Answer |
|---|---|
| Problem solved | Clients who already pay for a CRM want the tracker to live there instead |
| Necessary? | **No, not yet.** Most of your segment has no CRM, and integrations are where a one-person business drowns |
| Free? | Mostly no — most CRMs charge or restrict API access |
| Skills needed | API/OAuth — a different skill level entirely |
| Consent needed | Client account access (risk), plus platform terms |
| Privacy implications | High — you'd be touching their full client database |
| **Verdict** | Say no politely until 3 clients ask. Then reconsider, and price it separately as an advanced service |

### 2.7 A "keep it clean" monthly subscription

| Question | Answer |
|---|---|
| Problem solved | The tracker decays. Two weeks after handover, most clients stop updating it. Their enquiries go stale again — and you've lost the upsell |
| Necessary? | **Yes, once you have 2+ past clients.** This is the most realistic path from ₹799 one-offs to ₹4,000+/month |
| Free? | Yes to run (it's just your time) |
| Skills needed | None |
| Consent needed | The client's renewed consent each month to process their enquiry data |
| Privacy implications | Same as the sprint — and the deletion promise must be rewritten (data can no longer be deleted every 30 days) |
| **How it would work** | ₹399 or ₹499/month: a monthly 30-minute review of their tracker, 10 fresh drafts, a one-paragraph status summary, and deletion of your copies. Pitch it only at the Day-14 check-in of a happy client |
| **Do not build this** | Before you've delivered 3 sprints. You don't yet know if anyone wants it, and a subscription you can't service properly is worse than no subscription |

---

## 3. What the included scripts do (and don't do)

| File | What it does | What it never does |
|---|---|---|
| `08-automation/apps-script/reminders.gs` | Sends **you** an email listing your clients whose delivery is due, whose balance is pending, or whose Day-14/30-day actions are due | It never touches client enquiry data, never emails clients, never sends any message on anyone's behalf |
| `08-automation/apps-script/daily-priority-digest.gs` | Emails **the tracker's owner** a morning digest of `P1 - today` items from their own sheet | It never sends messages to couples, never posts anywhere, never leaves the sheet owner's account |
| `08-automation/python/build_spreadsheets.py` | Rebuilds the tracker and prospect spreadsheets | It runs on your computer only, on fictional data |
| `08-automation/python/render_logo_png.py` | Renders the logo mark to PNG | — |

**Setup instructions are in `08-automation/apps-script/README.md`.** They are optional: the spreadsheets work fully without them.

---

## 4. Platform rules you must respect in anything you build

- **WhatsApp:** business-initiated messages need prior opt-in, and at scale the official Business API with approved templates. Unofficial bulk senders and modded clients violate Meta's terms, risk **permanent number bans**, and create exposure under India's DPDP Act. **Never build a bulk sender and never offer one to a client.**
- **Instagram/Meta:** automation that scrapes or auto-DMs violates platform terms. Manual, personal outreach only.
- **Email:** no purchased lists. If you ever send bulk email, use a legitimate provider with an unsubscribe option — but for a business of your size, one-to-one email is better in every way.
- **Google:** if you build Apps Script for a client, request only the scopes you need, and tell the client exactly what the script can access.
- **DPDP Act:** know your role. The photographer collected the couple's data; you process it on their instruction, for a limited purpose, for a limited time, then delete it. See `02-offer/privacy-and-data-handling.md`.

---

## 5. The technology decision tree

```
Is there a specific client who asked for this, or a specific hour of my week it saves?
├── No  → Don't build it. Write it on the "later" list and move on.
└── Yes
     ├── Can a Google Sheet formula or a saved template do it?   → Do that. Free, 10 minutes.
     ├── Can a copy-paste AI prompt do it?                       → Do that. Free, already written for you.
     ├── Does it involve sending messages to someone else's customers?
     │    └── YES → Do not build it. Ever.
     └── Otherwise, is it free, and can I build it in under 4 hours without touching client data?
          ├── Yes → Build it after your three delivered clients.
          └── No  → Charge for it as a separate, priced service, or say no.
```

---

## 6. What to do with this file right now

**Nothing.** Print the rule at the top and put it near your desk. Come back to this page after you have **delivered three paid sprints** — at which point you'll know which of these ideas is real, and more importantly, which is not.

**The current priority is not automation. It is twenty conversations and one ₹400 payment.**
