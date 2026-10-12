# Master Progress Log

**Purpose:** a single place that records what has actually been built, what has been verified, what is still untested, and who does what next.
**Last updated:** 12 October 2026

> **Note on verification:** everything marked ✅ below was actually created and (where possible) programmatically checked in this session. Nothing in this project has been tested with a real customer, because there is no customer yet. Claims about market behaviour are labelled in `01-research-and-validation/` as **[SOURCED]**, **[REPORTED]** or **[ASSUMPTION]**.

---

## 1. Build status

| Area | Status | Notes |
|---|---|---|
| Research & validation | ✅ Complete | Public-source research only. **Zero interviews conducted.** |
| Offer & pricing | ✅ Complete | ₹799 / ₹400 advance / ₹399 balance / 15 enquiries / 30 drafts |
| Privacy & data handling | ✅ Complete | Six rules, consent wording, retention, deletion checklist |
| Enquiry tracker (XLSX + CSV) | ✅ Built and verified | Dropdowns, 3 formulas, 10 conditional-format rules, filters, dashboard, status guide, Google-Sheets tab |
| Google Sheets setup guide | ✅ Complete | Import, dropdowns, formulas, formatting, sharing, troubleshooting |
| Message templates (client-facing) | ✅ Complete | 12 templates with when-to-use / when-not-to-use |
| AI prompt pack | ✅ Complete | P0–P7 including the Voice Card prompt |
| Follow-up workflow | ✅ Complete | 7-day process, two weekly blocks, stop rules |
| Sample report | ✅ Complete | Clearly labelled fictional; shows how to avoid claiming results |
| Brand + logo | ✅ Complete and rendered | `logo.svg`, `logo-mark.svg`, verified `logo-mark-512.png` (512×512, visually inspected) |
| Service description / proposal | ✅ Complete | |
| Onboarding questionnaire | ✅ Complete | 31 questions, 6 sections, consent tick |
| Customer agreement | ✅ Complete | 14 clauses, internal notes on what never to concede |
| Delivery checklist / handover doc | ✅ Complete | Stages 0–7 + red flags; 11-section client handover |
| Invoice template | ✅ Complete | Non-GST format, payment record, extension invoice |
| Feedback / testimonial / referral | ✅ Complete | Includes negative-feedback and refund guidance |
| Prospecting playbook + scripts | ✅ Complete | 16 scripts, scoring model, ethics rules |
| Prospect tracker (XLSX) | ✅ Built and verified | 15 columns, 7 dropdowns, 6 conditional-format rules, rules tab |
| Sales message library | ✅ Complete | 17 messages + conversation map + timing table |
| Objection handling | ✅ Complete | 20 objections with responses |
| Payments & delivery guides | ✅ Complete | UPI verified **setup instructions**; GST/TDS context with sources |
| Automation scripts (Apps Script) | ✅ Written, **not executed** | Cannot be run outside Google's servers. Needs testing inside a real Google account |
| Future automation roadmap | ✅ Complete | Deliberately gated behind three delivered clients |
| Launch plan + checklists | ✅ Complete | Day-by-day with fallbacks; printable execution checklist |
| Demo website | ✅ Built | Single file, no dependencies, structural checks passed |
| Package README + this log | ✅ Complete | |

---

## 2. What has actually been verified (and how)

| Item | How it was checked |
|---|---|
| Spreadsheet structure | Reloaded the generated `.xlsx`; confirmed 6 sheets, 16 headers, **6 data validations pointing at the Lists sheet**, 5 conditional-format ranges, autofilter `A2:P500`, frozen panes `C3`, and live formulas in columns N/O/P |
| CSV exports | Parsed and printed; the auto columns resolve correctly (verified rows: `ENQ-001` → 37 days, `P1 - today`, `OVERDUE`; `ENQ-007` → booked → `-`) |
| Priority logic | Fixed a real ordering bug (booked rows were being shown as `P1` because a stale follow-up status outranked the status check). Now: overdue/due-today → `P1`, booked/closed → `-`, otherwise the 7-day rule |
| Date handling | Fixed a bug where CSV "days since contact" was empty because sample dates were plain `date` objects; now handled via a normalising helper |
| Prospect tracker | Reloaded; confirmed 3 sheets and **7 data validations** |
| Logo | Rendered to PNG with a purpose-written stdlib script, then **visually inspected three times**. First render had the bubble touching the ring; second had a tail tip poking outside the ring; the third is clean. The SVG and the PNG use identical geometry |
| Website | Structural checks: single `<h1>`, balanced `<div>`/`<section>`/`<details>`, no external dependencies, no fake testimonial language |
| Consistency | Price, scope, revision policy and boundary language cross-checked across offer, proposal, agreement, invoice, website and sales messages |

---

## 3. What is NOT verified (be honest with yourself)

| Unverified | Why it matters | How it gets resolved |
|---|---|---|
| Anyone will pay ₹799 | The entire business depends on this | Make 3+ explicit offers in week one |
| Photographers experience this problem at scale | Public evidence suggests it exists; nobody has confirmed it for *your* audience | 20 discovery conversations |
| Delivery actually takes 8–11 hours | Based on a task breakdown, not a real client | Time your first delivery |
| Photographers will reply to cold outreach | Public accounts of DM outreach to photographers report very poor response rates | Track replies by channel; switch channels if replies stay at zero |
| The Apps Script files run correctly | Never executed — they need a Google account | Run `setupDailyReminder` in your own Google account when you reach client #2 |
| Google Sheets renders the XLSX exactly as intended | Google's converter is good but not identical | Import it once and reapply a single conditional-format rule if anything looks off |
| Any tax/legal position | Written from public sources, not professional advice | Get a CA's opinion once money flows |

---

## 4. Decisions made in this build (and why)

1. **15 enquiries, not 20.** The original brief proposed 20 for ₹799. At 20, the effective rate drops to roughly ₹57–₹73/hour and the 7-day promise gets risky. 15 keeps quality high and gives a clean reason to sell the +₹399 extension instead of silently overworking.
2. **The provider never messages the client's couples.** This is the single most important design decision. It makes the service legitimate under WhatsApp/Meta policy, keeps the provider out of DPDP-based consent problems, and stops the "unknown number" trust problem that would hurt the client anyway.
3. **Drafts, not automation.** We write; the photographer sends. No bulk senders, no modded clients, no unofficial APIs.
4. **Non-GST invoicing.** Below the ₹20 lakh services threshold, no GST is charged and no GSTIN appears. Stated consistently in the invoice, the website FAQ and the sales scripts.
5. **50/50 payment split** (₹400 / ₹399) rather than all-upfront. Easier yes, and it aligns incentives.
6. **A non-contactable, downloadable report** rather than a live dashboard. Spreadsheets and WhatsApp are where the clients actually are.
7. **Refuse fake urgency and discounts.** A smaller ₹399 version exists instead of discounting the main offer, so the price never looks invented.
8. **Automation is gated behind three delivered clients.** Stated openly in `08-automation/future-automation.md`.
9. **The logo was corrected twice rather than shipped as-is.** Small thing; it is what a client actually sees first.
10. **A working-name brand, not a registered one.** `AI Wedding Enquiry Recovery` is descriptive and searchable; warmer alternatives are listed in the brand guide, with the recommendation to use descriptive copy and say "7-Day Enquiry Recovery Sprint" out loud instead of "AI".

---

## 5. Work completed by AI vs work only you can do

### ✅ Already done for you (in this package)

- All research, with sources and honest labelling of what is proven vs assumed
- The finalised offer, scope, exclusions, timeline, revision and payment terms
- Privacy and data-handling policy, with client-facing wording
- A working enquiry tracker: spreadsheet with dropdowns, live formulas, colour rules, filters, dashboard, status guide, and Google Sheets instructions
- Both CSV versions (client blank + sample import)
- 12 client-facing message templates and 8 AI prompt templates
- The 7-day follow-up workflow and the stop rules
- A fictional sample report that demonstrates the exact format
- Brand: name options, taglines, palette, typography, and three logo files including a verified PNG
- 30/60/100-word service descriptions and a one-page proposal
- A 31-question onboarding questionnaire with consent wording
- A 14-clause agreement, a stage-by-stage delivery checklist and an 11-section handover document
- A non-GST invoice template and a feedback/testimonial/referral sequence
- A prospecting playbook, 16 outreach scripts, and a working prospect tracker
- 17 sales messages and 20 handled objections
- Payment-setup instructions (with the ₹1 verification step), scope-agreement wording, and non-payment handling
- Two optional Apps Script automations and an explicit automation roadmap
- A day-by-day launch plan with fallbacks, a daily checklist, and a printable execution checklist
- A single-file demo website and publishing instructions
- This progress log and the package README

### ⚠️ Only you can do these

1. **Paste your real details** into every `[placeholder]` — name, WhatsApp, email, city, UPI ID.
2. **Verify your UPI works** by sending yourself ₹1 and seeing it arrive. Then, and only then, tell a client you can accept payment.
3. **Send the outreach messages.** 10 per day for four days. This is not automatable and it is the whole business.
4. **Have the conversations** — 5+ real ones, using the discovery questions.
5. **Ask for the money** in plain words, with the payment link.
6. **Read every AI-assisted draft** before it reaches a client. You are the sender; the responsibility is yours.
7. **Deliver on time**, and tell the client before the deadline if you're slipping.
8. **Delete their data within 30 days**, and confirm it in writing.
9. **Log the numbers honestly** — contacts, replies, conversations, offers, payments — even (especially) when they're bad.
10. **Make the week-1 decision**: continue, change the offer, or change the audience. Write it down.

---

## 6. Next action

**Do not read anything else in this folder until you have done the first item in
`09-launch-plan/seven-day-execution-checklist.md`.**

Open `HOW-TO-USE-THIS-PACKAGE.md` and work through Phase 1. It takes 90 minutes, and at the end of it you'll be able to describe your offer from memory and go find someone to tell it to.

The next genuinely hard thing is not a document. It is sending the first message to a stranger.
