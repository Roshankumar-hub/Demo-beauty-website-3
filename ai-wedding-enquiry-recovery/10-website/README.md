# Demo Website

A single-file, dependency-free landing page: `index.html`.

**Why it's built this way:** one file, no build step, no frameworks, no external fonts or CDNs. It loads instantly on a slow phone connection, works offline, and can be published free in about five minutes.

---

## 1. What's on the page

| Section | Purpose |
|---|---|
| Hero | Value proposition, ₹799 price, what's included, and the four honesty lines (you send the messages, no leads, no guarantees) |
| "The part that slips" | The problem, plus what you found talking to studios — written as *patterns from conversations*, not invented statistics |
| What ₹799 gets you | The six deliverables |
| How the sprint runs | The day-by-day timeline, including "the clock starts when I have payment AND your form" |
| Sample of the actual work | A **fictional** tracker excerpt styled like a real spreadsheet, plus a sample draft |
| Who it's for / not for | Explicit qualification — this reduces wasted conversations and builds trust |
| Start | Call to action, payment terms table, privacy paragraph |
| FAQ | Eleven honest answers, including "will this get me bookings?" (answer: I won't claim that) and "I already use a CRM" |
| Footer | Honest disclosure that there are no testimonials yet |

**What it deliberately does NOT have:** fake testimonials, invented client numbers, countdown timers, "limited slots" claims, stock photography, or any promise of bookings.

---

## 2. Before you publish — replace these

| Placeholder | Where | Replace with |
|---|---|---|
| `91XXXXXXXXXX` | "WhatsApp me" button and footer | Your WhatsApp number with country code, no spaces or `+` (e.g. `919876543210`) |
| `yourname@example.com` | Email button and footer | Your real business email |
| `[your city]` | Footer | Your city |
| The `wa.me` prefilled text | "WhatsApp me" button | Optional — edit the `?text=` part to change the opening message |

Search the file for `91XXXXXXXXXX`, `yourname@example.com` and `[your city]` — those three strings are the only ones you must change.

**Do not** put your UPI ID on the public page. Payment details go in the invoice, sent privately, after a conversation.

---

## 3. Publish it free (choose one)

### Option A — GitHub Pages (free, permanent, custom-prefix URL)
1. Create a public GitHub account if you don't have one.
2. Create a repository named e.g. `enquiry-desk`.
3. Upload `index.html` (drag and drop in the browser works).
4. Repository → **Settings → Pages** → Source: `main` branch, folder `/ (root)` → **Save**.
5. Wait 1 minute. Your page is live at `https://<username>.github.io/enquiry-desk/`.

### Option B — Netlify Drop (free, fastest, no account needed to start)
1. Go to `app.netlify.com/drop`.
2. Drag the whole `10-website` folder onto the page.
3. You get a live URL immediately (something like `random-name.netlify.app`).
4. Create a free account to keep it permanently and rename the site.

### Option C — Cloudflare Pages (free)
1. Cloudflare dashboard → **Workers & Pages → Create → Pages → Upload assets**.
2. Upload the folder. Live in under a minute.

**All three are free and good enough. Do not buy a domain until you have three paying clients.** A `github.io` or `netlify.app` link is perfectly respectable for a new service.

---

## 4. Linking the sample tracker from the page (optional)

If you want the "See the sample first" button to open the actual sample spreadsheet:

1. Open your copy of the sample tracker in Google Sheets.
2. **Share → Anyone with the link → Viewer → Copy link.**
   *(Safe, because the sample contains only fictional data. Never share a real client's tracker publicly.)*
3. In `index.html`, find the "See the sample first" button and change:
   `href="#sample"` → `href="https://docs.google.com/spreadsheets/d/.../view" target="_blank" rel="noopener"`.
4. Do the same for a sample report link (publish your sample report as a Google Doc, set to "Anyone with the link → Viewer").

---

## 5. Local preview (how the live preview in this workspace works)

From the `ai-wedding-enquiry-recovery` folder:

```bash
python3 -m http.server 8080 --bind 0.0.0.0
```

Then open `http://localhost:8080/10-website/` — or, inside this sandbox, the preview URL shown by the running process.

**Note:** the page references `../04-brand-and-sales/logo-mark.svg` for the favicon. That works when served from the project root (as above). If you publish only the `10-website` folder, the favicon simply won't load — the page works fine without it. To fix it, copy `logo-mark.svg` next to `index.html` and change the href to `logo-mark.svg`.

---

## 6. Things to improve later (not now)

- Add 2–3 real screenshots of the tracker (crop out all data) once you have permission
- Add one or two **real** testimonials with written permission — including an anonymised option ("a wedding photographer in Indore")
- Add a short "who I am" paragraph if you're comfortable being visible
- Add a `<meta property="og:image">` with a picture of the sample tracker so WhatsApp link previews look better

**Rule:** nothing gets added to this page until it is true.
