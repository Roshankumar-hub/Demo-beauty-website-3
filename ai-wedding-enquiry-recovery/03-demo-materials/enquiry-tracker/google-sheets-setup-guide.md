# Google Sheets Setup Guide (7 minutes, ₹0)

Use this if you or your client prefer Google Sheets over Excel. Excel users can just open the `.xlsx` file — everything is already inside.

**Files you have:**

| File | Use it for |
|---|---|
| `AWER-Enquiry-Tracker-SAMPLE.xlsx` | The full version: dropdowns, colours, formulas, dashboard. Open in Excel, or upload to Google Drive and open with Google Sheets (dropdowns and formulas survive). |
| `enquiry-tracker-import.csv` | Import into Google Sheets, then add dropdowns yourself (steps below). Contains 10 fictional sample enquiries. |
| `enquiry-tracker-BLANK.csv` | Same columns, no data — the version you send to a **client** so they paste their own enquiries. |

---

## Option A — Fastest (recommended for beginners)

1. Open **Google Sheets** → **Blank spreadsheet**.
2. **File → Import → Upload** → choose `enquiry-tracker-import.csv`.
3. Import location: **Replace spreadsheet**. Separator type: **Comma**. → **Import data**.
4. Rename the sheet (bottom left) to **Tracker**.
5. Check that column A holds `ENQ-001 … ENQ-010` and row 1 holds the headers. Done — add the dropdowns next (Part 2 below).

---

## Option B — Keep all formatting (upload the Excel file)

1. Go to **Google Drive → New → File upload** → select `AWER-Enquiry-Tracker-SAMPLE.xlsx`.
2. Right-click the uploaded file → **Open with → Google Sheets**.
3. Google converts it: dropdowns, formulas, colours and the Dashboard tab all come across.
4. If any colour looks off, reapply that single conditional-format rule and it will match exactly.
5. **File → Save as Google Sheets** so it becomes a native Sheet.

---

## Part 2 — Add the dropdowns (5 minutes, do it once per column)

Select the column → **Data → Data validation → Add rule** → Criteria: **Dropdown** → paste the options below (one per line) → **Done**.

Do this for rows **2 to 500** so new enquiries keep the dropdowns
(when selecting, click the column letter, or type `D2:D500` in the range box).

**Column D — Requested Service**
```
Full wedding photography (1 day)
Full wedding photography (2+ days)
Wedding + reception
Candid + cinematic video
Pre-wedding shoot
Engagement only
Reception only
Destination wedding
Other (see notes)
```

**Column F — Enquiry Source**
```
Instagram DM
Instagram comment / story reply
Website form
WhatsApp (direct)
Referral (past client)
Referral (vendor)
Wedding portal
Google / search
Other
```

**Column G — Enquiry Status**
```
New enquiry
Awaiting reply
Quote sent
Call requested
Call scheduled
Clarification needed
Deciding / comparing
Booked
Dormant - no reply
Closed - not proceeding
```

**Column I — Next Action**
```
Reply with welcome message + 3 questions
Share availability for their dates
Send price list / packages
Send personalised quote
Send portfolio of similar wedding
Confirm call slot
Clarify package inclusions
Gentle nudge (no price talk)
Send final follow-up
Send booking confirmation + next steps
Send thank-you / stay in touch
No action needed
Manual review - decide yourself
```

**Column K — Follow-Up Status**
```
Not started
Due today
Due
Overdue
Waiting on client
Completed
No follow-up needed
```

**Column L — Outcome**
```
Open
Booked
Closed - chose another vendor
Closed - date unavailable
Closed - budget
Closed - no response
Postponed by couple
Not proceeding (other)
```

---

## Part 3 — Add the three auto columns (2 minutes)

The CSV has **static numbers** in columns N, O and P (so they display immediately). To make them **live**, replace row 2 of each column with these formulas, then drag down (or select `N2:N500` and press **Ctrl+D** after typing the formula in N2):

| Column | Header | Formula (paste into row 2, assuming the header row is row 1) |
|---|---|---|
| N | Days Since Last Contact (auto) | `=IF(H2="","",TODAY()-H2)` |
| O | Priority (auto) | `=IF(OR(K2="Overdue",K2="Due today"),"P1 - today",IF(OR(G2="Booked",LEFT(G2,6)="Closed"),"-",IF(LEFT(G2,7)="Dormant","P3 - when free",IF(AND(N2<>"",N2>=7),"P2 - this week","P3 - when free"))))` |
| P | Overdue? (auto) | `=IF(OR(K2="Overdue",AND(J2<>"",J2<TODAY(),NOT(LEFT(G2,6)="Closed"),G2<>"Booked")),"OVERDUE","")` |

**Note:** the CSV import puts data starting at row 2, while the Excel file starts data at row 3 (it has a warning banner in row 1). Use the version that matches your file — check where your first enquiry actually sits before pasting formulas.

---

## Part 4 — Conditional formatting (colours that do the thinking for you)

Select the whole data range → **Format → Conditional formatting** → repeat for each rule:

| Range | Condition | Format |
|---|---|---|
| G2:G500 | Text is exactly `New enquiry` | Blue background `#E3F0FD` |
| G2:G500 | Text is exactly `Booked` | Green background `#DCF5E3`, bold |
| G2:G500 | Text contains `Closed` | Grey background `#F1F2F4` |
| G2:G500 | Text contains `Dormant` | Grey background `#F1F2F4` |
| P2:P500 | Text is exactly `OVERDUE` | Red background `#FDE2E1`, bold red text |
| O2:O500 | Text is exactly `P1 - today` | Red background `#FDE2E1`, bold |
| J2:J500 | Custom formula `=AND($J2<>"",$J2<TODAY())` | Red background |
| J2:J500 | Custom formula `=$J2=TODAY()` | Amber background `#FDF3D7` |
| E2:E500 | Custom formula `=AND($E2<>"",$E2>=TODAY(),$E2<=TODAY()+30)` | Amber background, bold (wedding coming up soon) |

**In Google Sheets, "Custom formula is" always uses the top-left cell of your range.** If your data starts on row 3, use `$J3` instead of `$J2`.

---

## Part 5 — Freeze, filter, tidy (1 minute)

1. **View → Freeze → 1 row** (keep headers visible while scrolling).
2. **Data → Create a filter** (row of dropdown arrows appears).
3. Optional but recommended: hide the `Lists` tab (right-click → Hide sheet) and re-add it if you need to edit options.

---

## Part 6 — Sharing with a client (do this properly)

1. Click **Share** → type **their email** → set to **Editor**.
2. **Do not** use "Anyone with the link".
3. Send this message with it:

> Hi [Name], here is your enquiry tracker: [link]. It is in **your** Google account, so it stays under your control — I will remove my access at handover. Start on the **Dashboard** tab to see the counts, then use the **Tracker** tab. Filter column O by `P1 - today` each morning; that is your daily to-do list. Any questions, just reply here.

4. At handover: **you remove your own access** (or they remove you) → *File → Share → your name → Remove*.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Dropdowns disappear after adding new rows | Re-select the column, extend the data-validation range to row 500+ |
| Formulas show `#NAME?` or `#ERROR!` | The formula was pasted with smart quotes. Retype the quotation marks, or copy from this file again |
| `TODAY()` not updating | Google Sheets recalculates on open/edit. In Excel press **Ctrl+Alt+F9** |
| Colours applied to the wrong rows | Your range starts at row 3 but the formula references row 2. Change `$J2` → `$J3` |
| Client cannot see the file | They need to be signed into the Google account you shared it with |
| Numbers look wrong after renaming a status | The Dashboard counts exact text. Rename an option only if you also update the existing rows |
