/**
 * reminders.gs — INTERNAL reminder script (for YOU, the service provider)
 * ======================================================================
 * Sends *you* a daily email listing:
 *   • clients whose 7-day delivery is due soon or overdue
 *   • balances still pending
 *   • Day-14 check-ins due
 *   • 30-day data-deletion deadlines due
 *
 * It NEVER contacts clients or couples, NEVER reads enquiry data, and NEVER
 * sends anything on anyone's behalf. It only emails an address you control,
 * using a sheet YOU own that contains only your own business-admin columns.
 *
 * ---------------------------------------------------------------------------
 * SETUP (5 minutes, free)
 * ---------------------------------------------------------------------------
 * 1. Create a new Google Sheet. Name the tab exactly:  MyClients
 * 2. Put these headers in row 1 (order matters):
 *      A: Client        B: StartDate      C: DeliverBy      D: HandoverDate
 *      E: BalancePaid   F: Day14Date      G: DeleteBy       H: Notes
 *    (Dates as DD-MM-YYYY. BalancePaid: YES or NO.)
 * 3. Add one row per client. Example:
 *      Studio A | 05-10-2026 | 12-10-2026 | 11-10-2026 | NO | 19-10-2026 | 10-11-2026 | 15 enquiries
 * 4. Extensions > Apps Script. Delete the sample code, paste this file, save.
 * 5. Run > setupDailyReminder  → approve the permissions when prompted.
 * 6. Done. You'll get one email each morning at about 8am with only what's due.
 *
 * Everything here runs inside YOUR Google account. No third party, no cost.
 */

/** Change this if you want the digest sent at a different hour (24h, Asia/Kolkata). */
var DIGEST_HOUR = 8;

/** How many days ahead to warn you about a deadline. */
var WARN_DAYS = 2;

function setupDailyReminder() {
  // Remove any previous triggers so we never send two emails a day.
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'sendDailyReminder') {
      ScriptApp.deleteTrigger(t);
    }
  });

  ScriptApp.newTrigger('sendDailyReminder')
    .timeBased()
    .atHour(DIGEST_HOUR)
    .everyDays(1)
    .inTimezone('Asia/Kolkata')
    .create();

  sendDailyReminder(); // send one now so you can see it working
}

function sendDailyReminder() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('MyClients');
  if (!sheet) {
    throw new Error('Tab "MyClients" not found. See the setup notes at the top of this script.');
  }

  var values = sheet.getDataRange().getValues();
  if (values.length < 2) {
    MailApp.sendEmail(Session.getEffectiveUser().getEmail(),
      'Enquiry Desk — daily reminder', 'No clients in the sheet yet.');
    return;
  }

  var today = stripTime(new Date());
  var overdue = [];
  var dueSoon = [];
  var actions = [];

  for (var i = 1; i < values.length; i++) {
    var row = values[i];
    if (!row[0]) continue;

    var client = row[0];
    var deliverBy = toDate(row[2]);
    var handover = toDate(row[3]);
    var balancePaid = String(row[4] || '').toUpperCase() === 'YES';
    var day14 = toDate(row[5]);
    var deleteBy = toDate(row[6]);

    if (deliverBy) {
      var d = daysBetween(today, deliverBy);
      if (d < 0) overdue.push(client + ' — delivery was due ' + (-d) + ' day(s) ago');
      else if (d <= WARN_DAYS) dueSoon.push(client + ' — delivery due in ' + d + ' day(s)');
    }

    if (handover && !balancePaid) {
      var h = daysBetween(today, handover);
      if (h <= 0) actions.push(client + ' — balance ₹399 still pending (handover was ' +
        (h === 0 ? 'today' : Math.abs(h) + ' day(s) ago') + ')');
    }

    if (day14) {
      var f = daysBetween(today, day14);
      if (f <= 0 && f >= -10) actions.push(client + ' — Day-14 check-in due (was due ' + Math.abs(f) + ' day(s) ago)');
    }

    if (deleteBy) {
      var z = daysBetween(today, deleteBy);
      if (z <= WARN_DAYS && z >= -5) {
        actions.push(client + ' — DELETE working copies of user data by ' +
          Utilities.formatDate(deleteBy, 'Asia/Kolkata', 'dd-MMM-yyyy') +
          (z < 0 ? ' (OVERDUE — you promised this in writing)' : ''));
      }
    }
  }

  var body = buildBody(overdue, dueSoon, actions);
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(),
    'Enquiry Desk — today\'s actions (' + Utilities.formatDate(new Date(), 'Asia/Kolkata', 'dd-MMM') + ')',
    body);
}

function buildBody(overdue, dueSoon, actions) {
  var lines = ['Your internal to-do list for the Enquiry Desk business.', ''];

  if (overdue.length) {
    lines.push('OVERDUE');
    overdue.forEach(function (x) { lines.push('  • ' + x); });
    lines.push('');
  }
  if (dueSoon.length) {
    lines.push('DUE SOON');
    dueSoon.forEach(function (x) { lines.push('  • ' + x); });
    lines.push('');
  }
  if (actions.length) {
    lines.push('ACTIONS');
    actions.forEach(function (x) { lines.push('  • ' + x); });
    lines.push('');
  }
  if (!overdue.length && !dueSoon.length && !actions.length) {
    lines.push('Nothing due today. If you have fewer than 20 conversations logged,');
    lines.push('the real task is outreach — send five first messages.');
    lines.push('');
  }

  lines.push('---');
  lines.push('Prospecting reminder: 10 new contacts and 10 follow-ups per day.');
  lines.push('This email is generated by your own Apps Script. It never contacts clients.');
  return lines.join('\n');
}

/* ----------------------------- small helpers ----------------------------- */

function toDate(value) {
  if (!value) return null;
  if (value instanceof Date) return stripTime(value);
  if (typeof value === 'string') {
    var parts = value.split(/[-\/]/);
    if (parts.length === 3) {
      // DD-MM-YYYY
      var d = parseInt(parts[0], 10), m = parseInt(parts[1], 10) - 1, y = parseInt(parts[2], 10);
      if (y < 100) y += 2000;
      return new Date(y, m, d);
    }
  }
  return null;
}

function stripTime(d) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function daysBetween(a, b) {
  return Math.round((b - a) / 86400000);
}
