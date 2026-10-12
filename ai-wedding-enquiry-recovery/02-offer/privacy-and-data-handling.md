# Privacy & Data Handling

**Applies to:** the 7-Day Enquiry Recovery Sprint (₹799)
**Written:** 12 October 2026
**Important:** this is a practical, good-faith policy written in plain English. It is **not legal advice**. If you start handling large amounts of data or bigger clients, get a lawyer or a data-protection consultant to review it.

---

## 1. Why this file exists

India's **Digital Personal Data Protection Act, 2023 (DPDP Act)** applies to any organisation that processes digital personal data in India — **including freelancers and sole proprietors, with no turnover or employee-count exemption**. It requires a lawful purpose and consent for processing personal data, a notice explaining what is collected and why, security safeguards, and honouring rights to access, correction and erasure. Reported penalties run into hundreds of crores, and reported enforcement milestones begin in late 2026 with full substantive compliance expected by mid-2027 (verify the current position before quoting these dates).

Sources: [PRS India](https://prsindia.org/billtrack/digital-personal-data-protection-bill-2023), [Carnegie Endowment](https://carnegieendowment.org/research/2023/10/understanding-indias-new-data-protection-law), [TekyTec DPDP guide](https://www.tekytec.com/blog/dpdp-compliance-india-small-business-guide).

**The most important sentence in this document:** the couple's data was collected by the **photographer**. They are the data fiduciary for their own leads. You process it **on their instruction, for their purpose, for a short, fixed period**. Your job is to make that safe, minimal and documentable — and to never become a second database of Indian wedding couples.

---

## 2. The six rules (put these on your wall)

| # | Rule | Why |
|---|---|---|
| 1 | **Never ask for phone numbers, email addresses, or any couple's personal documents.** | You don't need them to classify an enquiry or write a draft. The biggest privacy risk is the data you never receive. |
| 2 | **Use initials or first names only** in the tracker and drafts. | Enough to personalise a message; not enough to be a usable database. |
| 3 | **Work inside the client's own Google account** — the tracker is created in *their* Drive, shared with you, and you lose access at handover. | Their data stays theirs. Your exposure is temporary and provable. |
| 4 | **Never contact their couples.** No calls, no WhatsApp, no email, no comments. | Avoids consent issues entirely, and prevents "who are you?" confusion. |
| 5 | **One folder, no copies.** Don't download, re-share, forward, or leave their data in your WhatsApp or email for longer than needed. Delete chat attachments after use. | Fewer copies = fewer places to leak. |
| 6 | **Delete within 30 days and confirm in writing.** Something like: *"All copies of your enquiry data have been deleted from my devices and accounts as of [date]."* | DPDP-aligned erasure, and it builds trust you can show other clients. |

---

## 3. What you collect, why, and for how long

| Data | Collected? | Purpose | Where it's stored | Retention |
|---|---|---|---|---|
| **Client's own business details**: name, phone, email, city, tone preferences | Yes | To deliver the service and invoice them | Your Gmail/WhatsApp (client relationship data — legitimate) | Keep while you're in business; delete on request |
| **Enquiry records**: initials/first name, source, enquiry date, event date, what was discussed, status | Yes (minimum) | To build and fill the tracker | **In the client's Google Sheet**, not yours | Lives with the client; your copies deleted within 30 days of handover |
| **Message drafts** | Yes | To be sent by the client | In the client's Google Doc / your working copy | Your working copy deleted within 30 days |
| **Couple's phone number / email / address / ID** | **No — refuse politely** | Not needed | — | — |
| **Couple's photographs, contracts or payment details** | **No** | Not needed | — | — |
| **Screenshots of WhatsApp/Instagram chats** | Avoid where possible | Only if the client prefers screenshots over a list; prefer they retype the summary | Client's own folder only | Deleted from your device within 7 days of transfer |

**If a client insists on sending a full export with phone numbers:** reply with this line, then proceed only after they agree:

> *"Please remove phone numbers and email addresses before sending. I only need initials/first name, the source, dates and what was discussed. I don't store contact details at all — that keeps your couples' data safer and keeps me out of scope for handling their personal contact information."*

If they send it anyway: delete the contact columns immediately, tell them you've done so, and note it in the delivery email.

---

## 4. Consent: what you actually ask for

We do not ask couples for anything. The photographer does. Give them one paragraph to reuse with their team, and record their confirmation in the onboarding form:

> **Client confirmation (to be ticked in the onboarding questionnaire):**
> *"I confirm that these enquiries came to me directly through my own channels, that the couples contacted me first, and that I am permitted to review and contact them. I authorise [your name] to process this enquiry information only for the purpose of organising my enquiries and preparing message drafts for me, and to delete it within 30 days after delivery."*

- Do not use this to send anything promotional.
- If an enquiry arrived from a third-party portal, tell the client to check that portal's rules before any follow-up. Follow that platform's terms — not our template.
- Verify directly with each client that they have permission to contact each enquiry. If the client cannot confirm, we do not include that record.

---

## 5. Consent to be contacted by *us* (the photographer's own data)

We only contact photographers who are publicly listed businesses (a business email, a website contact form, a public business Instagram profile). Rules we follow:

1. Message about their **business**, never their personal life.
2. **One** follow-up maximum. If they don't reply, stop.
3. Honour every stop signal, instantly and permanently: "not interested", "remove me", "don't message again", or any block/unfollow → the row in `05-prospecting/prospect-tracker.csv` is marked `DO NOT CONTACT` and never touched again.
4. Never send to a scraped or purchased list. We build the list by hand.
5. Our own messages always state who we are and how to opt out: *"If this isn't relevant, tell me and I won't message again."*

This is simply good manners — and it happens to be what platform policy and the DPDP's purpose-limitation idea ask for anyway.

---

## 6. Security basics that cost ₹0

- **Two-factor authentication ON** for your Google account, and for anything that will hold client data.
- **A separate Gmail account** for this business (not your personal one). Free. Keeps client data out of your personal life and vice versa.
- **Screenshots:** avoid saving them to your phone gallery; if you must, delete after use.
- **Shared links:** in Google Drive, share to **specific email addresses**, not "anyone with the link", unless the client asks otherwise.
- **Devices:** a screen lock on your phone/laptop is enough at this scale. Don't work on shared/public computers.
- **Backups:** the tracker lives in the client's Drive — that is the backup. Do not keep your own long-term copies.
- **Breach plan (write it down now):** if your account is compromised — change passwords, revoke sessions, tell the affected client within 72 hours with exactly what was exposed, what you did, and what they should do. Don't hide it. Hiding it is what turns a small incident into a serious one.

---

## 7. Deleting data at the end (checklist)

- [ ] Tracker and drafts live in the client's Drive; your access is removed at handover
- [ ] Your working copies (Docs/Sheets export, notes file) deleted
- [ ] WhatsApp/email attachments containing enquiry details deleted
- [ ] Screenshots deleted from phone/work folder
- [ ] Client email sent: *"Data deleted as of [date]."*
- [ ] Kept only: their **business** contact details and one invoice record, for tax and future support

---

## 8. Client-facing privacy paragraph (paste into the proposal and the agreement)

> **Privacy and data handling.** I process your enquiry information only to deliver this Sprint. I do not need, and do not accept, couples' phone numbers, email addresses, or documents — please remove them before sharing. I work inside a folder that you own. I never contact your clients. Any working copies on my side are deleted within 30 days after delivery, and I confirm the deletion in writing. I do not publish, resell, or reuse your data, and I do not use any of your enquiries as a public case study without your written permission. If you want data removed earlier, one message from you is enough and I will confirm within 24 hours.
