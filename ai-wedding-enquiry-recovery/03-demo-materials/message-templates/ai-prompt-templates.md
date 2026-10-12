# AI Prompt Templates

Copy-paste prompts that turn a messy enquiry list into a sorted tracker, personalised drafts, and a client report. Written so that a beginner can use them with any free AI chat tool.

**Two hard rules before you start:**

1. **Privacy:** never paste couples' phone numbers, email addresses or full names into an AI tool. Use initials or first names only. Turn off "improve the model for everyone" / training options in your AI tool's settings where that option exists, and check the tool's data policy yourself — do not assume. If unsure, work with a de-identified list.
2. **You are responsible for the output.** AI drafts sound confident even when wrong. Read every draft and check every price, date and promise before a client ever sees it.

---

## P0 — The "Voice Card" (build this once per client, reuse in every other prompt)

This is the most valuable prompt in the pack. It converts "AI-sounding" text into the photographer's own voice. Run it once per client and save the output.

**Prompt:**

```
You are helping me write messages in the voice of a wedding photographer.

Below are 5-8 real messages the photographer has sent to couples (WhatsApp/Instagram/email).
Analyse them and produce a compact "Voice Card" with these fields:

1. Tone (3 adjectives, e.g. warm, direct, playful)
2. Typical sentence length and message length
3. Greeting style and sign-off style (exact examples)
4. Common phrases they actually use (list them verbatim)
5. Words or phrases they NEVER use
6. Language mix (English only / Hinglish / regional words used, with examples)
7. Emoji use (none / rarely / often, and which ones)
8. How they talk about money (blunt / soft / indirect) with an example
9. How they create a next step without pressure, with an example
10. Three rules for writing any new message as this photographer

Rules for your output:
- Quote the photographer's real phrasing instead of describing it in your own words
- Do not invent quotes that are not in the sample
- If the samples are too few to judge something, say "not enough data"
- Output as a plain list I can copy and paste into future prompts

MESSAGES:
"""
[Paste 5-8 real messages here, with any personal data removed]
"""
```

**How to use it:** paste the resulting Voice Card at the top of every drafting prompt (P2, P3, P5) as `MY VOICE CARD: ...`. It is the difference between a draft the photographer will actually send and one they rewrite from scratch.

---

## P1 — Classify and prioritise a client's enquiry list

**Prompt:**

```
You are assisting a wedding photographer in India who is organising their booking enquiries.

Below is my enquiry list. For each enquiry, determine:
1. Enquiry Status — choose exactly one:
   New enquiry | Awaiting reply | Quote sent | Call requested | Call scheduled |
   Clarification needed | Deciding / comparing | Booked | Dormant - no reply | Closed - not proceeding
2. Next Action — choose exactly one from this list:
   Reply with welcome message + 3 questions | Share availability for their dates |
   Send price list / packages | Send personalised quote | Send portfolio of similar wedding |
   Confirm call slot | Clarify package inclusions | Gentle nudge (no price talk) |
   Send final follow-up | Send booking confirmation + next steps | Send thank-you / stay in touch |
   No action needed | Manual review - decide yourself
3. Follow-Up Due Date — suggest a number of days from today, using these defaults:
   New enquiry = today; Clarification needed = today; Call requested = today;
   Quote sent = 3 days; Awaiting reply = 3-4 days; Deciding = 3 days; Dormant = 7 days;
   Booked or Closed = no follow-up needed
4. Priority — P1 - today / P2 - this week / P3 - when free
5. Why — one short line of reasoning, maximum 15 words

Constraints:
- If the information for a row is unclear or missing, put "Manual review - decide yourself" and say what is missing. Do not guess.
- Never invent dates, prices or customer details. Use only what I have given you.
- Output as a table with columns: ID, Status, Next Action, Follow-Up Due (days from today), Priority, Why.

TODAY'S DATE: [date]
ENQUIRY LIST:
"""
[Paste the list: ID, initials, source, received date, event date, what was discussed, last contact, anything sent]
"""
```

---

## P2 — Write personalised follow-up drafts for one enquiry

Run this **one enquiry at a time**. Batching several enquiries into one prompt is exactly how you get generic, copy-paste-sounding messages.

**Prompt:**

```
MY VOICE CARD:
[Paste the Voice Card from P0]

Write ONE WhatsApp message for a wedding photography studio in India to send to an enquiry.
Then write a slightly longer email version of the same message.

THE ENQUIRY:
- Client (initials): [e.g. A. & S.]
- Enquired on: [date]
- Event date and venue: [date, city/venue]
- Service they asked about: [service]
- Channel they used: [WhatsApp / Instagram / email]
- What has already happened: [what was sent, what they asked, when they last replied]
- What we want to happen next: [confirm a call / get a reply to the quote / clarify the package]
- Price context: [packages start at X; this enquiry is about Y]
- Availability: [available / date already booked / holding]
- Useful detail I know: [e.g. they loved a lakeside wedding reel; they are comparing two photographers]

HARD RULES for the message:
- 90 words maximum for the WhatsApp version
- Warm, human, professional Indian English. Match my Voice Card exactly.
- Open with something specific to THEIR situation, not a generic greeting
- Give them something NEW (information, an option, a link, a next step) — never just "just checking in"
- Exactly one question, or zero questions if it is a closing message
- No pressure, no fake urgency, no "limited slots", no guilt
- No invented facts, offers, prices, discounts or availability. If something is unknown, leave a clearly marked blank like [confirm with photographer] instead of guessing
- No emojis unless my Voice Card says I use them
- End with a low-effort way to reply (one word is enough) or a clear next step
- If I am closing the enquiry, make it respectful and final

Output format:
WHATSAPP DRAFT: ...
EMAIL VERSION: ...
PLACEHOLDERS TO CHECK: ...   (list every blank or assumption I must verify)
WHY THIS WORKS: ...          (2 lines, so I learn the pattern)
```

---

## P3 — Write the first reply to a new enquiry (speed matters)

**Prompt:**

```
MY VOICE CARD:
[Paste Voice Card]

A new wedding enquiry just arrived. Write the first reply.

ENQUIRY: [paste exactly what they wrote, with personal details removed]
CHANNEL: [WhatsApp / Instagram / website form]
WHAT I ALREADY KNOW: [event date, city, number of days, photo or video, budget hints]
WHAT I STILL NEED TO KNOW: [list the 2-3 things I must ask]
AVAILABILITY: [available / booked on that date]

Rules:
- Reply as if sent within 30 minutes of the enquiry (that is the goal)
- Warm, short, human. Maximum 80 words for WhatsApp.
- At most 2 questions. Never more.
- If the date is available, say so plainly. If it is booked, say that honestly in the first line.
- Do not attach prices if I usually send a price list for their scale of wedding; instead say you will send the right options once you know X.
- Never promise anything not in the details above.
- Include one human touch that shows I read their message.

Output: WHATSAPP DRAFT / EMAIL DRAFT / PLACEHOLDERS TO CHECK
```

---

## P4 — Turn a messy enquiry dump into a clean tracker worksheet

**Prompt:**

```
Convert the messy notes below into a clean spreadsheet row per enquiry.

Use EXACTLY these columns, in this order:
Enquiry ID | Received Date | Client (initials) | Requested Service | Event Date |
Enquiry Source | Enquiry Status | Last Contact Date | Next Action | Follow-Up Due Date |
Follow-Up Status | Outcome | Notes

Rules:
- Output as a comma-separated table I can paste into Google Sheets (one row per enquiry, no merged cells, no bullet points inside cells)
- Client field: initials or first name ONLY. Remove phone numbers, email addresses and any other contact details.
- Dates as DD-MMM-YYYY (e.g. 04-Mar-2027). If a date is unknown, leave blank and add it to a "missing information" list at the end.
- Notes: maximum 25 words, focusing on what they want and what was discussed.
- Do not guess anything. Unknown values stay blank.
- At the end, list every piece of information I still need to ask the photographer for.

RAW NOTES:
"""
[Paste the messy WhatsApp exports / screenshots typed out / notebook scribbles]
"""
```

---

## P5 — One-page status summary for the client

**Prompt:**

```
Write a factual one-page summary of this photographer's enquiry pipeline.

DATA: [paste the tracker rows OR the dashboard numbers]

Include only these sections:
1. Snapshot — total enquiries, how many are open, how many need action today, how many are overdue (numbers only, no adjectives)
2. Where enquiries came from — table of source vs count vs current stage
3. Enquiries needing action this week — up to 5, with the specific next action each
4. Enquiries with no reply from the studio — list them. If this number is zero, say so.
5. Enquiries closed and why (only if the data shows it)
6. Three process observations — each one must be visibly linked to the numbers above
7. One thing to do differently next week

Strict rules:
- No invented numbers. If a figure is missing, write "not available".
- Never claim results, revenue recovered, bookings won, or improvements that the data does not support.
- Descriptive, neutral language. No marketing tone.
- Do not use the words "guaranteed", "proven", "boost", "roi".
- Maximum 400 words plus the tables.
```

---

## P6 — Review my own draft before I send it (self-check)

**Prompt:**

```
Review this message I am about to send to a wedding enquiry in India.

Critique it against these rules and then give me a corrected version:
1. Does it open with something specific to them?
2. Does it give them something new, or is it just "checking in"?
3. Is there exactly one question or fewer?
4. Does it sound like a human studio, or like a template?
5. Does it contain any invented claim, price, discount, deadline or urgency? (flag every one)
6. Is it under 90 words for WhatsApp?
7. Does it pressure them? Does it respect a possible "no"?
8. Is there an easy, low-effort way to reply?

Output: VERDICT (send / fix first), TOP 3 PROBLEMS, REWRITTEN VERSION.

MESSAGE: """
[paste]
"""
```

---

## P7 — Turn an outcome into a reusable lesson (for you, not the client)

**Prompt:**

```
Here is what happened on one enquiry and what we did:
[enquiry summary + messages sent + result]

Answer these:
1. At which exact point did this enquiry lose momentum? (quote the message or the gap)
2. Was the failure a timing problem, a message problem, a pricing problem, or an availability problem?
3. What would I write differently the next time this exact situation occurs?
4. Is there a reusable rule or template worth adding to my library? Give me the rule in one sentence and the template in under 80 words.

Be honest and specific. If the data is too thin to conclude anything, say so.
```

---

## What NOT to automate with AI (important)

| Don't | Why |
|---|---|
| Don't paste couples' full personal data into AI tools | Privacy. Use initials; minimise everything. DPDP Act duties apply to you and the photographer. |
| Don't send AI-written messages to couples without reading them | An invented discount, wrong date or wrong price will cost the photographer the booking and cost you the client. |
| Don't let AI send messages automatically from the photographer's WhatsApp | Bulk/automated messaging needs opt-in and, at scale, the official WhatsApp Business API. Violations risk a permanent number ban. |
| Don't ask AI to predict conversion or write "results" | It will invent plausible numbers. Your report must contain only numbers the client gave you. |
| Don't use AI to write the apology when something goes wrong | Write that yourself, short and plain. |
