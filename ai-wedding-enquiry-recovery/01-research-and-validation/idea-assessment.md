# Business Assessment, Risks and Assumptions

**Business:** AI Wedding Enquiry Recovery
**Service:** 7-Day Enquiry Recovery Sprint — ₹799 (introductory pilot price)
**Written:** 12 October 2026
**Status:** Idea tested on paper only. **Zero customer contact so far. Zero revenue so far.**

This is the honest document. Read it before you spend a single rupee or a single hour on outreach.

---

## 1. Verdict

> **Worth a strictly time-boxed, ₹0 test. Not proven. Not a business yet.**

| Question | Answer |
|---|---|
| Is the problem real? | **Probably yes**, for a subset of photographers. Public evidence shows couples failing to get replies and photographers admitting enquiries go unanswered. But no interview data exists yet. |
| Will they pay a stranger ₹799? | **Unknown.** This is the actual bet. Only payments settle it. |
| Can it be delivered with ₹0 and no special skills? | **Yes.** Google Sheets + a text editor + a phone. The full delivery is designed for that in `02-offer/`. |
| Can it grow into something bigger? | **Maybe.** If 3+ clients in 60 days and clients use the tracker after handover, then consider paid tools, automation, or higher tiers. Not before. |
| Is the 7-day goal realistic? | **No, treat it as a target.** See §5. |

---

## 2. Why this might actually work

1. **It works on money that already exists.** The photographer already paid (often ₹50,000+) to receive these enquiries. We are not asking them to spend on marketing; we are asking them to stop wasting spend they already made. (Lead-cost evidence: [`market-research.md` §2.4](market-research.md).)
2. **The price is trivial against one booking.** ₹799 vs ₹30,000–₹1,30,000 per wedding.
3. **Nothing cheap and done-for-you exists in the gap.** Free tools are DIY; paid CRMs are US$16–49/month **and** require self-setup; a Fiverr CRM setup is ~US$80 and assumes a paid CRM already. A ₹799 flat, no-software, done-for-you sprint is a distinct spot.
4. **Legitimate and low-risk to deliver.** We write drafts; the photographer sends them. No bulk messaging, no automation, no policy violations.
5. **Genuinely deliverable by one beginner.** The whole thing is: sort a list, classify it, write about 30 short messages, explain a 7-day habit.
6. **Seasonality is on our side right now.** Peak Indian wedding season starts within weeks. The honest pitch — "fix the process before the rush" — is timely, not fabricated.

---

## 3. Why it might fail (top 10 risks, ranked)

| # | Risk | Likelihood | Impact | Early warning sign | Mitigation |
|---|---|---|---|---|---|
| 1 | **Outreach gets ignored.** Photographers are pitched constantly; one public account reports 100+ Instagram DMs → 0 replies. | **High** | Fatal if unmanaged | <2 replies from your first 30 contacts | Use **email + website contact forms** as the primary channel (photographers themselves say the website form and email are the reliable channels), not just DMs. Volume: 40–60 contacts, not 10. Give before you ask. |
| 2 | **The problem is real but not urgent** ("I'll do it after the season"). | High | High | "Nice idea, let me get back" repeatedly | Pitch *before* the season, and make the ask tiny: a 5-minute Enquiry Health Check, not a 30-minute call. |
| 3 | **Trust gap.** A stranger with no portfolio offering "AI" services reads as spam. | High | High | Questions like "who else have you worked with?" | Be openly a first-time pilot service. Show a *working sample tracker* and a *sample report* in the first message. Never fake a portfolio. |
| 4 | **The buyer already has a CRM** and believes the problem is solved. | Medium | Medium | "I use Studio Ninja" | Ask what their 5 oldest open enquiries are and what the next action is. If they can answer instantly, they are not a customer — move on fast. |
| 5 | **The buyer has too few enquiries** (under ~10/month) so the sprint fixes nothing. | Medium | Medium | "I get maybe 4 enquiries a month" | Qualify on volume: 10+ enquiries in the last 60–90 days. Under that, offer the free health check and stay in touch. |
| 6 | **Client shares their data, then gets nervous** about privacy. | Medium | High | Hesitation about WhatsApp screenshots | Privacy-by-design: no phone numbers, no emails, initials/first names only, work inside *their* Google account, delete your copies in 30 days, keep it in the agreement. |
| 7 | **Scope creep** — they expect you to message couples, design a website, run ads, edit photos. | High | Medium | "Can you also just…" in week 1 | Written scope + exclusions + a one-line script for saying no (see `06-sales-system/objection-handling.md`). |
| 8 | **Delivery takes far longer than expected** because data arrives as messy screenshots. | Medium | Medium | Day 2 and you still can't read their enquiry list | Give them a *fixed input format* on day 0 (the onboarding questionnaire asks for one list, one time). Bill time by capping at 15 enquiries / 30 drafts. |
| 9 | **Zero repeat / no referral** because we cannot prove outcomes (outcomes need 30–60 days). | High | Medium | Client says "thanks, it's nice" and disappears | Build a **Day 14 check-in** into delivery. Track outcomes in *their* tracker (you get the numbers without keeping the data). |
| 10 | **You stop after three rejections.** | High | Fatal | You haven't contacted anyone for 2 days | Daily quota: 10 new contacts/day for the first 4 days. Track it in `05-prospecting/prospect-tracker.csv`. |

---

## 4. Assumption register (write these on your desk)

Every assumption gets tested, and every assumption has a **kill signal**. If a kill signal fires, change the plan — do not argue with it.

| # | Assumption | Confidence | How it gets tested | Kill signal |
|---|---|---|---|---|
| A1 | Independent Indian wedding photographers have 10+ enquiries in the last 60–90 days that are not fully resolved | Medium | Discovery question Q3–Q4 | Fewer than 5 of 20 can name a specific unresolved enquiry |
| A2 | Handling enquiries costs them real time and causes real stress | Medium | Discovery questions Q5–Q7 | They shrug and say "it's fine, it's not much work" |
| A3 | They would pay ₹799 to have it sorted once, by someone else | **Low** | The actual offer | 5+ expressed pain, then 0 payments after 20 clear offers |
| A4 | Outreach that leads with a *specific* observation about their business beats copy-paste messages | Medium | Compare reply rates of 2 message styles | Both get <5% replies → the channel is wrong, not the message |
| A5 | Email / website form outperforms Instagram DM for this audience in India | Medium | Log replies by channel | DMs outperform → switch the channel mix |
| A6 | Delivery can genuinely be completed in 7 days around a beginner's schedule | Medium | Do the dry run with fictional data (`09-launch-plan` Day 2) | Dry run takes more than 12 hours → cut the scope to 10 enquiries |
| A7 | A sample tracker + sample report in the first message increases trust | **Low** | Count how many prospects open/ask for the sample | Nobody asks for it after 30 outreach attempts |
| A8 | The ₹799 price is low enough to be an easy yes and high enough to be taken seriously | Low | Payments | Everyone hesitates → test ₹499 or ₹1,499 (see §6) |

---

## 5. Honest unit economics

**Cost to deliver one Sprint (with your current tools): ₹0 cash** — but not free.

| Item | Realistic number | Notes |
|---|---|---|
| Set-up and client onboarding | 30–45 min | Questionnaire review, requesting their enquiry list in the right format |
| Building and filling the tracker | 2–3 hours | Depends entirely on how messy their input is |
| Classifying 15 enquiries + writing up to 30 drafts | 3–4 hours | The core skilled work |
| Workflow + handover doc + report | 1.5–2 hours | Mostly reusable templates |
| Support and revisions | 45–60 min | One round included |
| **Total effort** | **≈ 8–11 hours** | |
| **Effective rate at ₹799** | **≈ ₹73–₹100 per hour** | Roughly minimum-wage territory for skilled work — **this is intentional, because it is a pilot, not a career**. |

**So the real value of the ₹799 sprint is not the money. It is:**
1. Proof that someone will pay.
2. A real (anonymised) case study.
3. Reusable assets that make client #2 take 4 hours instead of 10.
4. A learned script and objection list.

**When to raise the price:** after **3 paid clients delivered without a complaint**, and delivery time drops under 6 hours. Then test **₹1,499–₹1,999** with a wider scope (30 enquiries), or keep ₹799 for a stripped version. Do not raise the price before you have delivered three.

**Maximum spend rule:** spend **nothing** until the first payment lands. After the first ₹799 arrives, the only optional spends worth considering are: a domain name (~₹700–₹1,200/year — only if you plan to keep this beyond 3 months), and nothing else. Never buy ads, lead lists, tools, or courses.

---

## 6. What must be true before you spend any of the ₹1,000 optional budget

Tick **all four**:
- [ ] You have contacted at least 40 photographers personally.
- [ ] At least 5 described a specific, dated enquiry problem.
- [ ] At least 1 has paid ₹799 (or paid an advance).
- [ ] You have delivered that first client successfully and they said something positive in writing.

If any box is empty: **do not spend**. Keep using free Google Sheets, free Gmail, UPI, and the free website in `10-website/`.

---

## 7. Decision rules (also in `validation-experiment.md` — keep them identical)

Decide these **now**, while nothing is at stake:

| Situation | Decision |
|---|---|
| 20 conversations, **0–4** describe a concrete tracked problem | **The problem is not widespread enough in this niche.** Either narrow to the *paid-lead buyers* subgroup (photographers who've bought listings — they demonstrably spend), or move to the next niche in `market-research.md` §10. |
| 20 conversations, **5+** describe real pain, **0** pay | **The problem is real; the offer is wrong.** Diagnose in this order: (1) ask what they'd expect to pay for "someone sorts my enquiries and writes the follow-ups"; (2) test a ₹499 minimal version; (3) test selling to studios rather than solos; (4) test a different niche. **One** pivot, then re-decide. |
| 20 conversations, **1 pay** | **Continue exactly as-is.** Same niche, same offer, next 30 contacts. Do not add features. |
| **3+ pay** within 30 days | You have a small business. Raise price to ₹1,499 for client #4, and only then consider automation (`08-automation/`). |
| 40 contacts, **<5 replies total** | **Channel problem, not idea problem.** Shift from DM to email + website forms + relevant WhatsApp/photographer communities where you give before asking. |

**Stop-work rules for the whole experiment:**
- **Time:** 14 days. If nothing at all has moved by day 14, stop and re-decide — do not grind for a month on an untested premise.
- **Money:** never exceed ₹1,000 total. Never borrow, never spend the client's money on tools.
- **Ethics:** if at any point the only way to close a sale is a lie, the answer is no.

---

## 8. The one-sentence bet

> **Bet:** Photographers in India who already receive 10+ enquiries a month will pay ₹799 once to have a stranger sort those enquiries, write their follow-ups, and hand over a simple process — because doing it themselves costs them more time than the fee.

**If that sentence survives 20 conversations and one payment, the business is real. If it doesn't, we learned it for ₹0 in two weeks.**
