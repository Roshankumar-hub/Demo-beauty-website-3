# Client Delivery Process

How to deliver the tracker, the drafts and the report professionally — online, from home, with free tools.

**Time budget:** 8–11 hours total across 7 days. The steps below are in the exact order to do them.

---

## 0. Before delivery starts

| Check | Done |
|---|---|
| ₹400 advance verified in your account | ☐ |
| Scope confirmation message sent and replied "agreed" | ☐ |
| Full agreement sent | ☐ |
| Onboarding questionnaire returned, complete | ☐ |
| At least 3 real sample messages received | ☐ |
| Enquiry list: 15 rows or fewer, initials only, "do not contact" flagged | ☐ |
| Delivery dates written down and confirmed to the client | ☐ |

**If the client hasn't sent the questionnaire within 48 hours:** one short message — *"Hi `[Name]`, no rush — want me to hold the slot until you send the form?"* Do not start work from a verbal description; you will end up redoing it.

---

## 1. Set up the delivery folder (10 minutes)

Create this structure inside the **client's** Google Drive (or in your own Drive as a folder shared with them — but the client's account is preferred for privacy):

```
[Studio Name] — Enquiry Recovery Sprint/
├── 00 START HERE — Handover Guide
├── 01 [Studio Name] — Enquiry Tracker        (Google Sheet)
├── 02 Follow-Up Drafts — [Month Year]        (Google Doc)
├── 03 7-Day Follow-Up Workflow               (Doc or PDF)
└── 04 Results Summary (added at day 14)
```

**Why "00 START HERE":** a photographer opening five files after a wedding day will not guess where to begin. Tell them.

---

## 2. Build the tracker (Day 1, ~1.5 hours)

1. Copy `03-demo-materials/enquiry-tracker/enquiry-tracker-BLANK.csv` into the client's Google Sheet (import replaces the blank rows), or copy the sample XLSX and delete the example rows.
2. Enter every enquiry: ID, Received Date, initials, Requested Service, Event Date, Source.
3. Notes column: max 25 words each, using the client's own words where you have them ("loved the teaser reel", "asked about travel charges").
4. Re-add the dropdowns and the three auto-columns if the import lost them — full instructions are in `03-demo-materials/enquiry-tracker/google-sheets-setup-guide.md`.
5. Add conditional formatting (red = overdue, blue = new, green = booked, grey = closed).
6. Check the Dashboard tab numbers are counting properly.
7. **Phone check:** open the sheet in the Google Sheets mobile app. If it's unreadable on a phone, widen or hide columns until the important four columns fit.

**Quality gate:** every row has a status, a next action and a due date (except Booked/Closed rows).

---

## 3. Write the drafts (Days 3–4, ~3–4 hours)

**Method (do not skip step 1 — it is what makes the drafts sound human):**

1. Run prompt **P0 (Voice Card)** on the client's sample messages. Save the output.
2. For each enquiry needing action, run prompt **P2** with the Voice Card + that one enquiry's details. **One enquiry per prompt.**
3. Draft batch 1: the enquiries that need action *now* (unanswered, overdue, clarification needed) — up to 15.
4. Self-review every draft with prompt **P6** before sending anything.
5. Send batch 1 to the client.
6. After approval, draft batch 2: the follow-ups for the second week — the total must not exceed 30.

**Format inside the Google Doc — use this exact layout:**

```
=========================================
ENQ-003 · M. & K. · Candid + cinematic video
Situation: asked for a call, no slot confirmed (4 days ago)
Send on: Day 1 (or immediately)
=========================================

WHATSAPP (short)
[the message]

EMAIL (if you prefer)
[the longer version]

⚠️ CHECK BEFORE SENDING: confirm you are free on [date] before offering it.
-----------------------------------------
```

**Why this format:** the client can work down the page like a to-do list. Include the "CHECK BEFORE SENDING" line wherever you made an assumption — that is how you stay honest with an AI-assisted workflow.

---

## 4. Personalise the workflow and handover documents (Day 5, ~1.5 hours)

- Open `03-demo-materials/follow-up-workflow.md` and `04-brand-and-sales/handover-document.md`.
- Replace the generic bits with the client's reality: their channels, their statuses, the days they're busiest, their season.
- Suggest actual recurring slots: *"Wednesday 11 am and Friday 5 pm — those look like your quietest windows, based on when you post."*
- Put the client's file links into the handover document.
- Test every link in an incognito window. **A broken link on delivery day is the fastest way to look amateur.**

---

## 5. Final quality check (Day 6, ~1 hour)

Run the checklist in `04-brand-and-sales/delivery-checklist.md` STAGE 5. The ones people skip and regret:

- [ ] Read every draft **out loud** once
- [ ] Every date consistent (enquiry, event, follow-up)
- [ ] Every price matches the client's own price list
- [ ] No draft addresses someone on the "do not contact" list
- [ ] The tracker opens correctly on a phone
- [ ] The client can open everything without asking you for help

---

## 6. Handover (Day 7, 15–30 minutes)

**Send this message with the folder link** (Message 9 in `06-sales-system/sales-messages.md`), then do a walkthrough.

### The 20-minute walkthrough script

Keep it this short. Don't teach features; teach the habit.

1. **"Open the Dashboard tab."** *(1 min)* — point at the overdue count. *"That number is your to-do list."*
2. **"Open the Tracker tab and filter Priority for 'P1 - today'."** *(3 min)* — show them exactly how. *"That's the whole morning routine."*
3. **"Here's your first row to send."** *(3 min)* — copy the draft, change one thing together, and have them send it *while you're on the call*. A client who sends one message during onboarding will send the rest.
4. **"Here's your drafts document."** *(3 min)* — show the layout, show the CHECK BEFORE SENDING lines.
5. **"The stop rule."** *(2 min)* — three follow-ups maximum, stop instantly if they decline. Explain *why* it protects their reputation.
6. **"Two reminders in your calendar: Wednesday and Friday."** *(3 min)* — help them create the recurring events right there.
7. **"Any questions?"** *(5 min)* — let them talk. Whatever they ask is what you should have explained better in the document; fix the document for the next client.

**Then:** request the ₹399 balance. Then remove your own access to the tracker, or ask them to remove you.

---

## 7. After handover

| When | What |
|---|---|
| Same day | Invoice sent. Balance confirmed in your account. Ledger updated. |
| Day 14 | Check-in message (Message 10). Log their reported outcomes. |
| Day 14–15 | Results Summary (or `03-demo-materials/sample-client-report.md` as the template) — **their numbers only**. |
| Day 16–17 | Feedback request, then testimonial request if the feedback is positive. |
| Day 20 | One gentle referral ask. |
| Within 30 days | Delete working copies of enquiry data. Send the written confirmation. |
| Same week | Internal review: how long did it take? What cost you the most time? Update your templates so client #2 takes 4 hours instead of 10. |

---

## 8. Delivery quality standards (hold yourself to these)

| Standard | Why |
|---|---|
| Answer client messages within 24 hours on working days | You are selling reliability; behave reliably |
| Never send a draft containing a price the client didn't give you | One wrong price and the client must re-read everything you produced |
| Every assumption flagged with ⚠️ | Honest AI-assisted work says what it isn't sure about |
| Deliver on or before the promised date, or tell them first | Late + silent is the worst combination |
| One revision round done generously | Word of mouth is the only marketing you'll have for a while |
| Delete their data on time and say so | It is the promise that makes the whole service easy to say yes to |

---

## 9. Handling the four things that will actually go wrong

| Problem | Response |
|---|---|
| **Input arrives as messy screenshots** | Extract it yourself this once and send the finished list back for checking. Then ask them to keep adding enquiries as rows. |
| **Client stops responding mid-sprint** | One message: *"No rush — want me to pause the clock and pick it up on `[date]`?"* Don't keep working on a paused project. |
| **Drafts need a full tone rewrite** | Ask for 3 more sample messages, then redo them once inside the revision round. Never charge for fixing your own misread of their voice. |
| **Client is unhappy with the tracker** | Ask what specifically: too many columns? too complicated on the phone? Then cut it down — a 6-column tracker they use beats a 16-column one they don't. |
