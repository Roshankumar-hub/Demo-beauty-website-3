# Google Apps Script Automation (optional, free)

Two small scripts that can save you time. **Neither is required** — the spreadsheets work perfectly without them, and you should not touch these until you have delivered at least one client.

---

## What these scripts do and don't do

| Script | It does | It never does |
|---|---|---|
| `reminders.gs` | Emails **you** a daily list of your own admin to-dos: deliveries due, balances pending, Day-14 check-ins due, 30-day data-deletion deadlines | It never emails clients or couples. It never reads enquiry data. It never sends messages on anyone's behalf |
| `daily-priority-digest.gs` | Emails **the sheet owner** a morning digest of new enquiries and P1 items from their own tracker | It never contacts anyone. It never sends WhatsApp or Instagram messages. It never leaves the owner's Google account |

**Both scripts run inside a Google account you control, use only free Google services, and contact nobody except the email address you type in.**

---

## Setup — `reminders.gs` (your own admin to-dos)

**Time: 5 minutes. Best run: after your first paying client.**

1. Go to [sheets.new](https://sheets.new) and create a new spreadsheet.
2. Rename the **tab** (not just the file) to exactly `MyClients`.
3. Put these headers in **row 1**:

| A | B | C | D | E | F | G | H |
|---|---|---|---|---|---|---|---|
| Client | StartDate | DeliverBy | HandoverDate | BalancePaid | Day14Date | DeleteBy | Notes |

4. Add one row per client. Dates as `DD-MM-YYYY`. `BalancePaid` should be `YES` or `NO`.

Example row:
```
Studio A | 05-10-2026 | 12-10-2026 | 11-10-2026 | NO | 19-10-2026 | 10-11-2026 | 15 enquiries
```

5. **Extensions → Apps Script**.
6. Delete whatever sample code is there. Open `reminders.gs` from this folder, copy everything, paste it in. **Save.**
7. In the toolbar, choose the function **`setupDailyReminder`** from the dropdown and click **Run**.
8. Google asks for permissions → **Review permissions → choose your Google account → Allow**. (It needs to send email as you and create a daily trigger. Nothing else.)
9. Check your inbox — you should already have one digest email.

**Change the hour:** edit `DIGEST_HOUR` at the top (24-hour clock, Asia/Kolkata).

**To stop it:** run `setupDailyReminder` after deleting the trigger from the Apps Script "Triggers" (clock) icon, or delete the script.

---

## Setup — `daily-priority-digest.gs` (for a client's tracker)

**Time: 4 minutes. Best run: only if a client asks for a morning reminder.**

1. Open the client's tracker in Google Sheets.
2. **Extensions → Apps Script** → delete the sample code → paste `daily-priority-digest.gs`.
3. At the top, change `RECIPIENT = 'you@example.com'` to the email that should receive the digest — **the photographer's own email**, or your own for testing.
4. Save. Choose **`setupDigest`** from the function dropdown → **Run** → approve permissions.
5. Confirm the email arrives and looks right.

**Assumptions:** the sheet tab is named `Tracker`, the headers are in row 2 (as in our tracker files), and the columns match: `A=ID, C=Initials, D=Service, E=Event date, G=Status, I=Next action, J=Follow-up due, O=Priority, P=Overdue flag`. If your client's sheet differs, edit the `HEADER_ROW` and the column indexes at the bottom.

**If the client wants it:** share the script project with their Google account (or send them this file and walk them through it once). Do not keep yourself in their script with access you no longer need.

---

## Common problems

| Problem | Fix |
|---|---|
| "Tab MyClients not found" | Rename the **sheet tab**, not the file. Google Sheets files have multiple tabs — the script needs the tab name |
| "You do not have permission to call MailApp" | Re-run the setup function and click **Allow** on the permission screen. If nothing appears, open the Apps Script editor directly and run it from there |
| No email arrives | Check spam. Then check that `setupDailyReminder` actually created a trigger (clock icon in the left sidebar of Apps Script) |
| Digest shows wrong dates | Your sheet has dates as **text**, not real dates. Select the column → Format → Number → Date |
| Emails stop after a while | Google may disable a trigger if the script errors repeatedly. Open the script, run it manually once, and check the **Executions** tab for the error |
| "Exceeded email quota" | Free Google accounts can send ~100 emails/day. You will never hit this with a handful of clients |

---

## Privacy notes

- `reminders.gs` should contain **only your own admin data** — client names, dates, balance status. **Never put a couple's name, phone number, or any enquiry detail in that sheet.**
- `daily-priority-digest.gs` reads the client's tracker, which does contain enquiry rows (initials only). It emails a **summary** to an address the sheet owner chooses. Tell the client exactly what it does before you set it up.
- Both scripts are visible to anyone with edit access to the file. Share carefully.
- Neither script stores data anywhere new. Everything stays in the Google account that runs it.

---

## When NOT to use these

- **Before your first paying client.** These save minutes; selling saves the business.
- **If you don't check email daily.** Use Google Calendar reminders instead — 30 seconds to set up, zero code.
- **If a script breaks and you can't fix it.** Delete it and go back to manual reminders. Your client should never depend on a script you can't maintain.
