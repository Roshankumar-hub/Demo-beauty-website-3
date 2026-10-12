# AI Wedding Enquiry Recovery — Complete Starter Package

**The service:** a 7-Day Enquiry Recovery Sprint for independent wedding photographers and small studios in India.
**The price:** ₹799 (₹400 advance, ₹399 at handover).
**The objective:** attempt to obtain one paying customer within seven days. **This is a target, not a promise.** Nobody can guarantee a customer, a booking, or a revenue figure.

Everything in this folder was built to be used, not read. Replace the `[placeholders]`, delete what you don't need, and start talking to photographers.

---

## 1. Start here (in this order)

| # | Open this | Why |
|---|---|---|
| 1 | **`HOW-TO-USE-THIS-PACKAGE.md`** | A guided walkthrough: what to do first, second, third — and what to ignore for now |
| 2 | **`09-launch-plan/seven-day-launch-plan.md`** | Your day-by-day plan for this week |
| 3 | **`02-offer/service-offer.md`** | The exact offer you'll sell. Read it twice — every other file matches this one |
| 4 | **`01-research-and-validation/idea-assessment.md`** | The honest risk list. Read it before spending money on anything |
| 5 | **`05-prospecting/playbook.md`** | How to find photographers to talk to |

If you read only one file, read the **seven-day launch plan**. If you read only one page, read **Day 4** — outreach is the whole business.

---

## 2. What's in the package

### `01-research-and-validation/` — Is this worth doing?
| File | What it is |
|---|---|
| `market-research.md` | Full research: market size, pricing context, problem evidence from both couples and photographers, competitors, legal context. Three labels used throughout: **[SOURCED]**, **[REPORTED]**, **[ASSUMPTION]** |
| `sources.md` | Every source, with what it supports and how reliable it is |
| `idea-assessment.md` | Honest verdict, top 10 risks, assumption register with kill signals, unit economics, decision rules |
| `validation-experiment.md` | The ₹0 test: 12 discovery questions, scoring, decision rules, ethics rules |
| `interview-log.md` | Log template (with a filled fictional example) + weekly summary table |
| `business-plan.md` | One-page 90-day plan + a 5-level validation checklist |

### `02-offer/` — What you actually sell
| File | What it is |
|---|---|
| `service-offer.md` | **The source of truth.** Deliverables, exclusions, timeline, input needed, responsibilities, revisions, payment terms, success definition, sales one-liners |
| `privacy-and-data-handling.md` | Six privacy rules, what you collect and for how long, consent wording, security basics, deletion checklist, client-facing privacy paragraph |

### `03-demo-materials/` — The work you show and deliver
| File | What it is |
|---|---|
| `enquiry-tracker/AWER-Enquiry-Tracker-SAMPLE.xlsx` | **Real spreadsheet** with dropdowns, formulas, conditional formatting, filters, dashboard, status guide and a Google-Sheets tab. 10 fictional enquiries. *(Rebuild any time with `08-automation/python/build_spreadsheets.py`)* |
| `enquiry-tracker/enquiry-tracker-import.csv` | Same data as CSV for a one-click Google Sheets import |
| `enquiry-tracker/enquiry-tracker-BLANK.csv` | Empty version you send to a **client** so they paste their own enquiries |
| `enquiry-tracker/google-sheets-setup-guide.md` | Click-by-click setup: import, dropdowns, formulas, conditional formatting, sharing, troubleshooting |
| `message-templates/client-message-templates.md` | 12 client-facing follow-up templates (new enquiry, quote sent, call requested, clarification, still deciding, final follow-up, decline, booking confirmation, stay-in-touch, no-show, price-only enquiry) each with "when to use / when NOT to use" |
| `message-templates/ai-prompt-templates.md` | Prompts P0–P7: the **Voice Card**, list classification, per-enquiry drafting, first replies, messy-notes clean-up, client summaries, self-review, lesson extraction — plus what never to automate |
| `follow-up-workflow.md` | The 7-day process the client keeps: two work blocks a week, a 5-minute daily glance, and the stop rules |
| `sample-client-report.md` | Fictional day-14 report showing the exact format — and showing how it refuses to claim results |

### `04-brand-and-sales/` — Your brand and paperwork
| File | What it is |
|---|---|
| `brand-guide.md` | Name options, taglines, colour palette, typography, logo rules, voice and tone, assets checklist |
| `logo.svg` · `logo-mark.svg` · `logo-mark-512.png` | Logo lockup, square mark (profile picture/favicon), and a ready-to-use 512×512 PNG |
| `service-description.md` | 30 / 60 / 100-word descriptions, one-sentence pitch, answer-table for common questions, social-proof policy |
| `one-page-proposal.md` | The proposal you send after a conversation (scope, exclusions, timeline, price, privacy, next step) |
| `onboarding-questionnaire.md` | 31 questions in 6 sections + consent confirmation + your intake checklist |
| `customer-agreement.md` | 14-clause plain-English agreement, plus internal notes on what never to concede |
| `delivery-checklist.md` | Stages 0–7 with checkboxes and a red-flag table |
| `handover-document.md` | The 11-section client-facing document that teaches them to run it themselves |
| `invoice-template.md` | Non-GST invoice format, payment record, extension invoice, practical rules, a filled fictional example |
| `feedback-request-template.md` | Feedback request → testimonial request → referral ask, plus negative-feedback and refund script |

### `05-prospecting/` — Finding people to talk to
| File | What it is |
|---|---|
| `playbook.md` | Qualification scoring, five free sources (Google Maps, Instagram, search, communities, directories), what to record and never record, how to write the personalised observation, channel ranking, daily quota, ethics rules |
| `outreach-scripts.md` | 16 scripts: first DMs, business email subject lines and body, website-form version, WhatsApp opener, follow-up #1, "tell me more", "how much", sample delivery, the offer, call request, "we use a CRM", "not yet", graceful close, "message my couples for me" refusal, plus a timing table |
| `prospect-tracker.xlsx` | **Real spreadsheet**: 15 columns, dropdowns, conditional formatting, do-not-contact warnings, and a Rules & Daily Quota tab. Four clearly-labelled illustrative rows — *not* real businesses |

### `06-sales-system/` — What to say at every stage
| File | What it is |
|---|---|
| `sales-messages.md` | Conversation map + 17 messages from "they replied" through payment, delivery, day-14 feedback, referral and graceful close |
| `objection-handling.md` | 20 real objections, what each one means, what to say — including "send the payment link" silence and "I already have a CRM" |

### `07-payments-and-delivery/` — Getting paid and delivering
| File | What it is |
|---|---|
| `payment-guide-india.md` | UPI setup and verification (test with ₹1 before claiming it works), payment links, what NOT to do, GST/tax/TDS reality, the 9-step setup, scope-agreement script, non-payment handling |
| `client-delivery-process.md` | Folder structure, the 20-minute handover script, quality standards, and the four things that realistically go wrong |

### `08-automation/` — Optional, and only after three clients
| File | What it is |
|---|---|
| `future-automation.md` | Feature-by-feature evaluation, priority order, and the rule: build nothing that messages someone else's customers |
| `apps-script/reminders.gs` | Sends **you** a daily admin digest (deliveries due, balances, day-14, 30-day deletion deadlines) |
| `apps-script/daily-priority-digest.gs` | Emails a **tracker owner** their morning P1 list and new enquiries |
| `apps-script/README.md` | Setup, permissions, privacy notes, troubleshooting |
| `python/build_spreadsheets.py` | Rebuilds both spreadsheets and the CSVs (requires `openpyxl`) |
| `python/render_logo_png.py` | Renders the logo mark to PNG using only the Python standard library |

### `09-launch-plan/` — This week
| File | What it is |
|---|---|
| `seven-day-launch-plan.md` | Day-by-day tasks, time estimates, outputs, checklists, and a fallback for each day when it doesn't work |
| `daily-checklist.md` | The 90-minute daily routine and weekly totals to hit |
| `seven-day-execution-checklist.md` | One printable page: every day's boxes plus a week scorecard and a non-negotiables list |

### `10-website/` — Free landing page
| File | What it is |
|---|---|
| `index.html` | Single-file, dependency-free landing page: offer, timeline, sample tracker preview, honest FAQ, disclosures |
| `README.md` | Three free publishing options, the three placeholders to replace, and how to link the sample |

---

## 3. The 60-second summary

1. **The offer:** up to 15 existing enquiries organised into one tracker (status, next action, due date, priority, dashboard) + up to 30 personalised follow-up drafts + the workflow + a handover guide + a day-14 factual summary. **₹799, 7 days.**
2. **The boundary:** you never contact their couples. They send every message.
3. **The promise:** the work, done in 7 days. **Never** bookings, leads, revenue, or a percentage.
4. **The plan:** 40+ personalised contacts, 5+ real conversations, 3+ explicit offers, and a serious attempt at one ₹400 advance.
5. **The budget:** ₹0. Do not spend anything until money has come in.

---

## 4. Rebuilding the generated files

If you change the sample data, the dropdown lists or the logo geometry, regenerate:

```bash
# requires: pip install openpyxl   (the only third-party dependency, used offline)
python3 08-automation/python/build_spreadsheets.py     # both spreadsheets + both CSVs
python3 08-automation/python/render_logo_png.py        # logo-mark-512.png (stdlib only, ~6 s)
```

Re-run `build_spreadsheets.py` after editing sample rows or option lists. Re-run `render_logo_png.py` only after changing the logo geometry — the same shapes are duplicated in the script, so **update both the SVG and the script** if you change the design.

---

## 5. Consistency rules (these files must never contradict each other)

If you change one of these, change it **everywhere**:

| Must stay identical | Where it appears |
|---|---|
| **₹799 total, ₹400 advance, ₹399 balance** | offer, proposal, agreement, invoice, website, sales messages, checklist |
| **Up to 15 enquiries, up to 30 drafts** | offer, proposal, agreement, tracker scope, website, sales messages |
| **7-day delivery, clock starts on payment + form** | offer, proposal, agreement, website, launch plan |
| **+₹399 for 10 more enquiries** | offer, agreement, invoice, website, handover |
| **One free revision within 5 days** | offer, agreement, invoice, website |
| **One round of draft approval within 48 hours** | offer, agreement, onboarding, delivery checklist |
| **No contact with the client's couples, ever** | offer, privacy, agreement, website, every outreach script |
| **No guarantee of bookings or revenue** | offer, agreement, website, sales messages, report, checklist |

---

## 6. Honesty rules (non-negotiable)

- Never claim to generate leads, bookings, or revenue.
- Never tell a photographer they're losing customers unless *they* said so first.
- Never invent a testimonial, a client, a case study, or a number.
- The sample data in the tracker, the report and the prospect list is **fictional and labelled as such**.
- Never claim a payment method, account, or integration works until you've verified it yourself (send yourself ₹1 first).
- Never contact anyone who asked you to stop. Mark them `DO NOT CONTACT`, permanently.
- Never message someone else's customers on their behalf — it's why this service is legitimate.

---

## 7. Where the honest gaps are

This package is thorough, but it is **not** validation:

- **Zero customer interviews** have been conducted. Everything in `01-research-and-validation/` is public-source research and reasoning.
- **Zero payments** have been received.
- **No testimonial or case study** exists, because there is no client yet.
- The pricing rests on published market prices and one documented Fiverr comparison — not on anyone agreeing to pay ₹799.
- The 7-day goal is a **target**, chosen because it forces action, not because seven days is proven to work.

**The next 40 conversations are what turn this folder into a business.**
