/**
 * daily-priority-digest.gs — morning digest for a TRACKER OWNER
 * ============================================================
 * Emails the sheet's owner a short morning summary of the enquiries they
 * should act on today:
 *   • every enquiry marked "New enquiry" (nobody has replied yet)
 *   • every row whose Priority column says "P1 - today"
 *   • counts of overdue follow-ups
 *
 * WHO IT EMAILS: only the Google account that owns the sheet, and/or the
 * email address you type into RECIPIENT below. It never emails clients,
 * couples, or anyone you have not named. It never sends WhatsApp or
 * Instagram messages and never contacts anyone on anyone's behalf.
 *
 * ---------------------------------------------------------------------------
 * SETUP (4 minutes, free)
 * ---------------------------------------------------------------------------
 * 1. Open the client's tracker sheet (or a copy) in Google Sheets.
 * 2. Extensions > Apps Script > paste this file > save.
 * 3. Set RECIPIENT to the email address that should get the digest
 *    (the photographer's own email, or your own if you are testing).
 * 4. Run > setupDigest  → approve permissions → check the email arrives.
 * 5. Optional: share this script with the client's account if they want to
 *    control it themselves. Do not keep access you no longer need.
 *
 * SHEET LAYOUT EXPECTED (same as AWER-Enquiry-Tracker):
 *   A=Enquiry ID  C=Client(initials)  D=Service  E=Event Date  G=Status  I=Next Action
 *   J=Follow-Up Due  M=Notes  O=Priority
 * ---------------------------------------------------------------------------
 */

var SHEET_NAME = 'Tracker';
var HEADER_ROW = 2;          // row 1 is the warning banner in the sample file
var RECIPIENT = 'you@example.com';   // <-- CHANGE THIS
var SEND_HOUR = 8;

function setupDigest() {
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'sendDigest') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('sendDigest')
    .timeBased().atHour(SEND_HOUR).everyDays(1).inTimezone('Asia/Kolkata').create();
  sendDigest();   // send one now to verify
}

function sendDigest() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sheet) throw new Error('Tab "' + SHEET_NAME + '" not found.');

  var lastRow = sheet.getLastRow();
  if (lastRow <= HEADER_ROW) {
    MailApp.sendEmail(RECIPIENT, 'Enquiry digest — no data yet',
      'The tracker has no enquiry rows yet.');
    return;
  }

  var first = HEADER_ROW + 1;
  var rows = sheet.getRange(first, 1, lastRow - HEADER_ROW, 16).getValues();

  var newEnquiries = [];
  var p1 = [];
  var overdueCount = 0;

  rows.forEach(function (r) {
    var id = r[0];
    if (!id) return;
    var initials = r[2];
    var service = r[3];
    var eventDate = r[4];
    var status = r[6];
    var nextAction = r[8];
    var due = r[9];
    var priority = r[14];
    var overdueFlag = r[15];

    if (overdueFlag === 'OVERDUE') overdueCount++;

    var line = id + ' · ' + (initials || 'unnamed') +
               (eventDate ? ' · ' + fmt(eventDate) : '') +
               (service ? ' · ' + service : '') +
               '  →  ' + (nextAction || 'set a next action');

    if (status === 'New enquiry') newEnquiries.push(line);
    else if (priority === 'P1 - today') p1.push(line + (due ? '  (due ' + fmt(due) + ')' : ''));
  });

  var body = [];
  body.push('Your enquiry digest for ' + fmt(new Date()));
  body.push('');
  body.push('OVERDUE FOLLOW-UPS: ' + overdueCount + (overdueCount === 0 ? '  ✅ nothing late' : '  ⚠️'));
  body.push('');

  if (newEnquiries.length) {
    body.push('NEW ENQUIRIES WAITING FOR A REPLY (' + newEnquiries.length + ') — these are the most valuable messages of your day:');
    newEnquiries.forEach(function (l) { body.push('   • ' + l); });
    body.push('');
  }

  if (p1.length) {
    body.push('DO THESE TODAY (' + p1.length + '):');
    p1.forEach(function (l) { body.push('   • ' + l); });
    body.push('');
  }

  if (!newEnquiries.length && !p1.length) {
    body.push('Nothing needs you today. Your list is under control. 👏');
    body.push('');
  }

  body.push('---');
  body.push('Reminders:');
  body.push('  • Maximum 3 follow-ups per enquiry, then stop.');
  body.push('  • If someone declines or asks you to stop — mark it closed and never message them again.');
  body.push('  • Send every message yourself. This email never sends anything.');
  body.push('');
  body.push('This digest was generated inside your own Google account by Apps Script.');

  MailApp.sendEmail(RECIPIENT,
    'Enquiry digest — ' + (newEnquiries.length + p1.length) + ' action(s) today',
    body.join('\n'));
}

function fmt(d) {
  if (!(d instanceof Date)) return String(d || '');
  return Utilities.formatDate(d, 'Asia/Kolkata', 'dd-MMM');
}
