# Delivery Checklist (print this or keep it open)

Run this top to bottom for **every** client. It is the difference between a professional delivery and a rushed one.

**Target:** all eight deliverables checked off within 7 days of receiving the advance **and** the completed questionnaire.

---

## STAGE 0 — Before you start (Day 0)

- [ ] Advance **₹400** received and verified in your UPI/bank app (not "screenshot promised" — actually credited)
- [ ] Onboarding questionnaire received, all sections answered
- [ ] At least **3 real sample messages** from the client received (if not, ask once more)
- [ ] Enquiry list received, **15 rows or fewer**, initials only
- [ ] "Do not contact" couples flagged and excluded
- [ ] Price list understood — no contradictions possible in drafts
- [ ] Unavailable dates recorded
- [ ] Consent tick-box received
- [ ] Tracker file **created in the client's Google account** (or shared to their email), not only in yours
- [ ] Start date confirmed to the client in one message: *"Got everything, thank you. I'll send your tracker by [date] and the first draft batch by [date]."*
- [ ] A folder created for this client: `Clients/[name]/` (agreement, invoice, notes)

## STAGE 1 — Build the tracker (Day 1, ~1.5 h)

- [ ] Copy `enquiry-tracker-BLANK.csv` (or the sample XLSX) into the client's Google Sheet
- [ ] Delete the example rows
- [ ] Enter every enquiry (ID, received date, initials, service, event date, source)
- [ ] Notes column: 25 words max per enquiry, in the client's own words where possible
- [ ] Add dropdowns (statuses, sources, actions) — see `google-sheets-setup-guide.md`
- [ ] Add the three auto-columns (days since contact, priority, overdue)
- [ ] Add conditional formatting (overdue red, new blue, booked green, closed grey)
- [ ] Add the Dashboard tab
- [ ] **Verify:** every row shows a sensible priority. Any row showing "MANUAL REVIEW" needs your judgement, not a formula.

## STAGE 2 — Classify and prioritise (Day 2, ~2 h)

- [ ] Set Enquiry Status for every row
- [ ] Set Next Action for every row (only from the dropdown list)
- [ ] Set Follow-Up Due Date for every row with an open status
- [ ] Set Follow-Up Status (Not started / Due / Overdue)
- [ ] Sort mentally and personally check: **who has been waiting longest with no reply?** Those rows go first
- [ ] Sanity check: does this list match what the client told you? If something looks wrong, ask — do not assume

## STAGE 3 — Write the drafts (Days 3–4, ~3–4 h)

- [ ] Run the **Voice Card** prompt (P0 in `ai-prompt-templates.md`) on the client's sample messages
- [ ] Write batch 1 (up to 15 drafts) — one per enquiry needing action
  - [ ] Each draft: names the client's initials, references their actual situation
  - [ ] Each draft: exactly one question or none
  - [ ] Each draft: no invented prices, discounts, dates or availability
  - [ ] Each draft: sounds like the client, not like AI
  - [ ] Each draft: **labelled with its Enquiry ID and suggested send date**
- [ ] Self-review with prompt P6 (critique pass) — fix every flagged issue
- [ ] Send batch 1 to the client with clear instructions on how to approve
- [ ] Client approves/edits; you apply their edits
- [ ] Write and send batch 2 (follow-ups for the second week, up to 30 total)
- [ ] **Final cap check:** no more than 30 drafts in total, no more than 3 follow-ups per enquiry

## STAGE 4 — Workflow and handover documents (Day 5, ~1.5 h)

- [ ] Personalise the 7-Day Follow-Up Workflow (their statuses, their channels, their season)
- [ ] Fill in the handover guide with **their** file links and their two weekly blocks (suggest real days/times)
- [ ] Write the summary so far — what changed, how many enquiries were sitting unanswered when you started
- [ ] Check every link opens for someone else (test in an incognito window)

## STAGE 5 — Final quality check (Day 6, ~1 h)

- [ ] Read every draft out loud once. Anything you stumble on gets rewritten
- [ ] Check every date is correct and consistent (enquiry date, event date, follow-up date)
- [ ] Check every price matches the client's price list
- [ ] Check no draft refers to a couple who asked not to be contacted
- [ ] Check the tracker formulas still work with real data in 200+ rows
- [ ] Check the tracker opens cleanly on a **phone** (they will read it on a phone)
- [ ] Check spelling of every couple's initials and every venue name
- [ ] Confirm the client can open and edit the file without asking you

## STAGE 6 — Handover (Day 7, 15–30 min)

- [ ] Send the complete package with a short covering message (template in `07-payments-and-delivery/client-delivery-process.md`)
- [ ] Balance **₹399** requested and received
- [ ] Video/voice walkthrough or call done
- [ ] Client can answer, unaided: *"what do I do every morning?"* and *"how many follow-ups before I stop?"*
- [ ] Client knows the copy-paste routine for drafts
- [ ] Client knows the stop rule (why it protects them)
- [ ] Next step agreed: Day-14 check-in date
- [ ] You remove your access (or the client removes you) from the tracker
- [ ] Invoice sent

## STAGE 7 — After delivery

- [ ] Day 14: check-in done, outcomes logged using **their** numbers only
- [ ] Results Summary sent (facts only, no invented numbers)
- [ ] Feedback + testimonial request sent (`feedback-request-template.md`)
- [ ] Referral ask made (once, gently)
- [ ] Within 30 days: working copies of enquiry data deleted, deletion confirmed in writing
- [ ] Internal review: how long did this take? What will make client #2 faster? Update your templates
- [ ] Anything you learned added to the objection list

---

## Red flags to watch for (and what to do)

| Red flag | What it usually means | Action |
|---|---|---|
| Client sends screenshots instead of a list | They're busy or not confident with Sheets | Offer to extract it yourself this once, and clean it up for them — then ask them to keep it updated |
| Client's "list" is 40 enquiries | Scope creep | Deliver 15, show them the clean-up, offer +10 for ₹399 |
| Client stops replying during the sprint | Life happened | One message: *"No rush — want me to pause the clock and resume on Friday?"* |
| Client asks you to message their couples | Most common request | Decline warmly, explain the design (you draft, they send), offer to prepare everything so sending takes 30 seconds |
| Client wants daily updates | Anxiety, not a problem | Send a one-line progress note at the end of each day without being asked |
| Client says the drafts "don't sound like me" | Voice Card was thin | Ask for 3 more messages, redo the drafts once — free, inside the revision round |
