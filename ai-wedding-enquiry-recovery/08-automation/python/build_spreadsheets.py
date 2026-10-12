#!/usr/bin/env python3
"""
build_spreadsheets.py
=====================
Builds the spreadsheets for the "AI Wedding Enquiry Recovery" business:

  1. 03-demo-materials/enquiry-tracker/AWER-Enquiry-Tracker-SAMPLE.xlsx
  2. 03-demo-materials/enquiry-tracker/enquiry-tracker-import.csv      (for Google Sheets)
  3. 03-demo-materials/enquiry-tracker/enquiry-tracker-BLANK.csv       (empty client version)
  4. 05-prospecting/prospect-tracker.xlsx

The XLSX files contain DROPDOWNS, live FORMULAS, CONDITIONAL FORMATTING and FILTERS.
Dropdown option lists live on a "Lists" sheet and are referenced by range, because
inline lists in Excel are limited to 255 characters.

All data inside is 100% FICTIONAL sample data and is labelled as such.

Requirements: python3 + openpyxl        (pip install openpyxl)
Run from the project root:              python3 08-automation/python/build_spreadsheets.py
"""

import csv
import os
from datetime import date, timedelta

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import FormulaRule

# ----------------------------------------------------------------------------
# Paths
# ----------------------------------------------------------------------------
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
TRACKER_DIR = os.path.join(ROOT, "03-demo-materials", "enquiry-tracker")
TRACKER_OUT = os.path.join(TRACKER_DIR, "AWER-Enquiry-Tracker-SAMPLE.xlsx")
TRACKER_CSV = os.path.join(TRACKER_DIR, "enquiry-tracker-import.csv")
TRACKER_BLANK_CSV = os.path.join(TRACKER_DIR, "enquiry-tracker-BLANK.csv")
PROSPECT_OUT = os.path.join(ROOT, "05-prospecting", "prospect-tracker.xlsx")

# ----------------------------------------------------------------------------
# Styling
# ----------------------------------------------------------------------------
INK = "1F2A37"
BRAND = "7C2D4A"
HEADER_FILL = PatternFill("solid", fgColor=BRAND)
HEADER_FONT = Font(bold=True, color="FFFFFF", size=11)
NOTE_FONT = Font(italic=True, color="6B7280", size=9)
THIN = Side(style="thin", color="E5E7EB")
BORDER = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)

FILL_RED = PatternFill("solid", fgColor="FDE2E1")
FILL_AMBER = PatternFill("solid", fgColor="FDF3D7")
FILL_GREEN = PatternFill("solid", fgColor="DCF5E3")
FILL_GREY = PatternFill("solid", fgColor="F1F2F4")
FILL_BLUE = PatternFill("solid", fgColor="E3F0FD")

TODAY = date.today()


def style_header(ws, row, ncols, height=34):
    ws.row_dimensions[row].height = height
    for c in range(1, ncols + 1):
        cell = ws.cell(row=row, column=c)
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        cell.alignment = Alignment(vertical="center", horizontal="left", wrap_text=True)
        cell.border = BORDER


def set_widths(ws, widths):
    for col, width in widths.items():
        ws.column_dimensions[col].width = width


# ============================================================================
# OPTION LISTS
# ============================================================================
REQUESTED_SERVICE = [
    "Full wedding photography (1 day)",
    "Full wedding photography (2+ days)",
    "Wedding + reception",
    "Candid + cinematic video",
    "Pre-wedding shoot",
    "Engagement only",
    "Reception only",
    "Destination wedding",
    "Other (see notes)",
]
ENQUIRY_SOURCE = [
    "Instagram DM",
    "Instagram comment / story reply",
    "Website form",
    "WhatsApp (direct)",
    "Referral (past client)",
    "Referral (vendor)",
    "Wedding portal",
    "Google / search",
    "Other",
]
ENQUIRY_STATUS = [
    "New enquiry",
    "Awaiting reply",
    "Quote sent",
    "Call requested",
    "Call scheduled",
    "Clarification needed",
    "Deciding / comparing",
    "Booked",
    "Dormant - no reply",
    "Closed - not proceeding",
]
NEXT_ACTION = [
    "Reply with welcome message + 3 questions",
    "Share availability for their dates",
    "Send price list / packages",
    "Send personalised quote",
    "Send portfolio of similar wedding",
    "Confirm call slot",
    "Clarify package inclusions",
    "Gentle nudge (no price talk)",
    "Send final follow-up",
    "Send booking confirmation + next steps",
    "Send thank-you / stay in touch",
    "No action needed",
    "Manual review - decide yourself",
]
FOLLOWUP_STATUS = [
    "Not started",
    "Due today",
    "Due",
    "Overdue",
    "Waiting on client",
    "Completed",
    "No follow-up needed",
]
OUTCOME = [
    "Open",
    "Booked",
    "Closed - chose another vendor",
    "Closed - date unavailable",
    "Closed - budget",
    "Closed - no response",
    "Postponed by couple",
    "Not proceeding (other)",
]

TRACKER_HEADERS = [
    "Enquiry ID", "Received Date", "Client (initials)", "Requested Service",
    "Event Date", "Enquiry Source", "Enquiry Status", "Last Contact Date",
    "Next Action", "Follow-Up Due Date", "Follow-Up Status", "Outcome",
    "Notes (what was discussed, what they asked)",
    "Days Since Last Contact (auto)", "Priority (auto)", "Overdue? (auto)",
]


def d(days_ago):
    return TODAY - timedelta(days=days_ago)


def d_future(days):
    return TODAY + timedelta(days=days)


SAMPLE_ROWS = [
    ["ENQ-001", d(40), "A. & S.", "Full wedding photography (2+ days)", d_future(57),
     "Instagram DM", "Quote sent", d(37), "Gentle nudge (no price talk)", d(1),
     "Overdue", "Open",
     "Loved the teaser reel. Asked about 2-day coverage. Price list sent; no reply since."],
    ["ENQ-002", d(36), "R.", "Pre-wedding shoot", d_future(102), "Website form",
     "Clarification needed", d(24), "Clarify package inclusions", TODAY,
     "Due today", "Open",
     "Asked whether travel + stay is included for an outstation shoot. Needs a clear yes/no."],
    ["ENQ-003", d(33), "M. & K.", "Candid + cinematic video", d_future(47), "WhatsApp (direct)",
     "Call requested", d(4), "Confirm call slot", d(2), "Overdue", "Open",
     "Wants a call before deciding. Prefers after 7pm on weekdays."],
    ["ENQ-004", d(28), "T.", "Reception only", d_future(68), "Instagram DM",
     "Deciding / comparing", d(22), "Send portfolio of similar wedding", d(-3),
     "Due", "Open",
     '"Still deciding between two photographers." Budget seems fine. Comparing album quality.'],
    ["ENQ-005", d(21), "P. & N.", "Full wedding photography (2+ days)", d_future(115),
     "Referral (past client)", "Awaiting reply", d(12), "Send final follow-up", d(-2),
     "Due", "Open",
     "Referred by a 2025 client. First reply was warm, then went quiet for 12 days."],
    ["ENQ-006", d(62), "D.", "Engagement only", d_future(13), "Wedding portal",
     "Dormant - no reply", d(49), "Send final follow-up", d(2), "Overdue", "Open",
     "No reply to 2 messages. Send ONE final polite message, then close the enquiry."],
    ["ENQ-007", d(43), "V. & A.", "Wedding + reception", d_future(34), "Instagram DM",
     "Booked", d(41), "Send booking confirmation + next steps", d(40), "Completed",
     "Booked", "Advance received and date blocked. Style reference folder shared."],
    ["ENQ-008", d(85), "S.", "Wedding + reception", d(8), "Website form",
     "Closed - not proceeding", d(79), "Send thank-you / stay in touch", d(78),
     "Completed", "Closed - chose another vendor",
     "Booked a family friend. Explicitly said to stay in touch for 2027 - keep the door open."],
    ["ENQ-009", d(6), "H. & J.", "Destination wedding", d_future(151),
     "Instagram comment / story reply", "New enquiry", d(6),
     "Reply with welcome message + 3 questions", d(1), "Overdue", "Open",
     "Commented on a Goa wedding reel, then DMed. Needs a first reply - highest priority."],
    ["ENQ-010", d(17), "N. & B.", "Full wedding photography (1 day)", d_future(76),
     "Google / search", "Call scheduled", d(5), "Send price list / packages", d(-6),
     "Due", "Open",
     "Call booked for next week. Asked for the price list before the call."],
]


# ============================================================================
# helper: compute the "auto" columns in Python (used for the CSV files)
# ============================================================================
def as_date(value):
    """Accept a date or a datetime and return a plain date."""
    if hasattr(value, "date") and not isinstance(value, date):
        return value.date()
    if isinstance(value, date):
        return value
    if hasattr(value, "date"):
        return value.date()
    return value


def compute_auto(row):
    """row = the 13 manual values. Returns (days_since, priority, overdue).

    Priority rule (same order as the spreadsheet formula):
      1. follow-up Overdue or Due today        -> P1 - today
      2. status Booked or Closed               -> -
      3. status Dormant                        -> P3 - when free
      4. 7 or more days since last contact     -> P2 - this week
      5. otherwise                             -> P3 - when free
    """
    status = row[6]
    last_contact = as_date(row[7])
    due = as_date(row[9])
    followup = row[10]

    days_since = (TODAY - last_contact).days if isinstance(last_contact, date) else ""

    if followup in ("Overdue", "Due today"):
        priority = "P1 - today"
    elif status == "Booked" or status.startswith("Closed"):
        priority = "-"
    elif status.startswith("Dormant"):
        priority = "P3 - when free"
    elif isinstance(days_since, int) and days_since >= 7:
        priority = "P2 - this week"
    else:
        priority = "P3 - when free"

    overdue = ""
    if followup == "Overdue":
        overdue = "OVERDUE"
    elif (isinstance(due, date) and due < TODAY
          and not status.startswith("Closed") and status != "Booked"):
        overdue = "OVERDUE"

    return days_since, priority, overdue


# ============================================================================
# FILE 1 — ENQUIRY TRACKER (xlsx)
# ============================================================================
def build_tracker():
    wb = Workbook()
    LAST_ROW = 500

    # ---------------- READ ME ----------------
    ws_info = wb.active
    ws_info.title = "READ ME"
    ws_info["A1"] = "7-DAY ENQUIRY RECOVERY SPRINT - ENQUIRY TRACKER"
    ws_info["A1"].font = Font(bold=True, size=16, color=BRAND)
    ws_info["A2"] = ("SAMPLE FILE - every enquiry below is fictional, created for demonstration only. "
                     "No real customer data is used anywhere in this file.")
    ws_info["A2"].font = Font(italic=True, size=11, color="B91C1C")
    lines = [
        "",
        "HOW TO USE",
        "1. Open the 'Tracker' tab. It is filled with fictional examples (ENQ-001 to ENQ-010).",
        "2. For real use: delete rows 3 to 12, then paste YOUR enquiries into the same columns.",
        "   Dropdowns, colours and formulas already cover rows 3 to 500.",
        "3. Update only four things per enquiry: Enquiry Status, Last Contact Date,",
        "   Next Action and Follow-Up Status. Outcome is filled when something final happens.",
        "4. Columns N, O and P calculate by themselves. Do not type in them.",
        "5. Colours are automatic: red = overdue or urgent, amber = due today/soon,",
        "   blue = new enquiry, green = booked, grey = closed or dormant.",
        "",
        "THE 30-SECOND DAILY RULE",
        "Filter Priority = 'P1 - today' -> send those messages -> update the rows.",
        "Then filter Enquiry Status = 'New enquiry' -> reply to those. Nothing else needs daily attention.",
        "",
        "OTHER TABS:  'Status Guide' = what each status means and the stop rules",
        "             'Dashboard'    = live counts   'Lists' = dropdown options (edit with care)",
        "             'How to use in Google Sheets' = the same setup in 8 clicks",
        "",
        "PRIVACY: use initials or first names only. Never store phone numbers or email addresses here.",
    ]
    for i, text in enumerate(lines, start=3):
        ws_info.cell(row=i, column=1, value=text)
    for r in (4, 12, 18, 22):
        ws_info.cell(row=r, column=1).font = Font(bold=True, size=12, color=INK)
    ws_info.column_dimensions["A"].width = 112

    # ---------------- Lists sheet ----------------
    ws_l = wb.create_sheet("Lists")
    ws_l["A1"] = ("DROPDOWN OPTION LISTS - the dropdowns on the Tracker tab point at these columns. "
                  "You may rename an option, but then update existing rows too, otherwise the Dashboard counts break.")
    ws_l["A1"].font = Font(italic=True, size=9, color="B91C1C")
    list_columns = [
        ("A", "Requested Service", REQUESTED_SERVICE),
        ("C", "Enquiry Source", ENQUIRY_SOURCE),
        ("E", "Enquiry Status", ENQUIRY_STATUS),
        ("G", "Next Action", NEXT_ACTION),
        ("I", "Follow-Up Status", FOLLOWUP_STATUS),
        ("K", "Outcome", OUTCOME),
    ]
    for col, title, values in list_columns:
        cell = ws_l[f"{col}1"]
        cell.value = title
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        for i, value in enumerate(values, start=2):
            ws_l[f"{col}{i}"] = value
        ws_l.column_dimensions[col].width = 46
    for col in ("B", "D", "F", "H", "J", "L"):
        ws_l.column_dimensions[col].width = 3

    def list_ref(col, values):
        return f"Lists!${col}$2:${col}${len(values) + 1}"

    # ---------------- Tracker ----------------
    ws = wb.create_sheet("Tracker")
    ws["A1"] = ("FICTIONAL SAMPLE DATA - illustrative only. Replace with your own enquiries. "
                "Rule: initials or first names only - never phone numbers or email addresses.")
    ws["A1"].font = Font(italic=True, size=9, color="B91C1C")
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=len(TRACKER_HEADERS))
    ws.row_dimensions[1].height = 18

    for c, header in enumerate(TRACKER_HEADERS, start=1):
        ws.cell(row=2, column=c, value=header)
    style_header(ws, 2, len(TRACKER_HEADERS), height=40)

    for r, row in enumerate(SAMPLE_ROWS, start=3):
        for c, value in enumerate(row, start=1):
            cell = ws.cell(row=r, column=c, value=value)
            cell.border = BORDER
            cell.alignment = Alignment(vertical="top", wrap_text=(c == 13))
            if c in (2, 5, 8, 10):
                cell.number_format = "DD-MMM-YYYY"
        ws.cell(row=r, column=14, value=f'=IF(H{r}="","",TODAY()-H{r})').number_format = "0"
        ws.cell(row=r, column=15, value=(
            f'=IF(OR(K{r}="Overdue",K{r}="Due today"),"P1 - today",'
            f'IF(OR(G{r}="Booked",LEFT(G{r},6)="Closed"),"-",'
            f'IF(LEFT(G{r},7)="Dormant","P3 - when free",'
            f'IF(AND(N{r}<>"",N{r}>=7),"P2 - this week","P3 - when free"))))'))
        ws.cell(row=r, column=16, value=(
            f'=IF(OR(K{r}="Overdue",AND(J{r}<>"",J{r}<TODAY(),NOT(LEFT(G{r},6)="Closed"),'
            f'G{r}<>"Booked")),"OVERDUE","")'))
        for c in (14, 15, 16):
            cell = ws.cell(row=r, column=c)
            cell.border = BORDER
            cell.alignment = Alignment(vertical="top", horizontal="center")
            cell.font = Font(size=10, color="6B7280")

    set_widths(ws, {"A": 11, "B": 13, "C": 16, "D": 27, "E": 12, "F": 22, "G": 19,
                    "H": 13, "I": 34, "J": 13, "K": 15, "L": 20, "M": 52,
                    "N": 12, "O": 15, "P": 11})
    ws.freeze_panes = "C3"
    ws.auto_filter.ref = f"A2:P{LAST_ROW}"

    def add_dv(column, ref, title, prompt):
        dv = DataValidation(type="list", formula1=ref, allow_blank=True, showDropDown=False)
        dv.errorTitle = "Use the dropdown"
        dv.error = "Please choose one of the standard values so the dashboard keeps working."
        dv.promptTitle = title
        dv.prompt = prompt
        ws.add_data_validation(dv)
        dv.add(f"{column}3:{column}{LAST_ROW}")

    add_dv("D", list_ref("A", REQUESTED_SERVICE), "Requested service", "Pick the closest match.")
    add_dv("F", list_ref("C", ENQUIRY_SOURCE), "Enquiry source", "Where did this enquiry come from?")
    add_dv("G", list_ref("E", ENQUIRY_STATUS), "Enquiry status",
           "Where does this enquiry stand right now?")
    add_dv("I", list_ref("G", NEXT_ACTION), "Next action", "What is the very next thing to do?")
    add_dv("K", list_ref("I", FOLLOWUP_STATUS), "Follow-up status",
           "Has the follow-up been done, is it due, or is it late?")
    add_dv("L", list_ref("K", OUTCOME), "Outcome", "Open until something final happens.")

    ws.conditional_formatting.add(f"G3:G{LAST_ROW}",
        FormulaRule(formula=['$G3="New enquiry"'], fill=FILL_BLUE))
    ws.conditional_formatting.add(f"G3:G{LAST_ROW}",
        FormulaRule(formula=['$G3="Booked"'], fill=FILL_GREEN, font=Font(bold=True, color="12703A")))
    ws.conditional_formatting.add(f"G3:G{LAST_ROW}",
        FormulaRule(formula=['OR($G3="Dormant - no reply",$G3="Closed - not proceeding")'], fill=FILL_GREY))
    ws.conditional_formatting.add(f"G3:G{LAST_ROW}",
        FormulaRule(formula=['OR($G3="Call requested",$G3="Clarification needed")'], fill=FILL_AMBER))
    ws.conditional_formatting.add(f"G3:G{LAST_ROW}",
        FormulaRule(formula=['OR($G3="Quote sent",$G3="Deciding / comparing",$G3="Awaiting reply")'],
                    fill=PatternFill("solid", fgColor="F7F3E3")))
    ws.conditional_formatting.add(f"P3:P{LAST_ROW}",
        FormulaRule(formula=['$P3="OVERDUE"'], fill=FILL_RED, font=Font(bold=True, color="B91C1C")))
    ws.conditional_formatting.add(f"O3:O{LAST_ROW}",
        FormulaRule(formula=['$O3="P1 - today"'], fill=FILL_RED, font=Font(bold=True, color="B91C1C")))
    ws.conditional_formatting.add(f"O3:O{LAST_ROW}",
        FormulaRule(formula=['$O3="P2 - this week"'], fill=FILL_AMBER))
    ws.conditional_formatting.add(f"J3:J{LAST_ROW}",
        FormulaRule(formula=['AND($J3<>"",$J3<TODAY())'], fill=FILL_RED))
    ws.conditional_formatting.add(f"J3:J{LAST_ROW}",
        FormulaRule(formula=['$J3=TODAY()'], fill=FILL_AMBER))
    ws.conditional_formatting.add(f"E3:E{LAST_ROW}",
        FormulaRule(formula=['AND($E3<>"",$E3>=TODAY(),$E3<=TODAY()+30)'],
                    fill=FILL_AMBER, font=Font(bold=True, color="9A3412")))

    # ---------------- Status Guide ----------------
    ws_g = wb.create_sheet("Status Guide")
    ws_g["A1"] = "STATUS, NEXT ACTION AND FOLLOW-UP GUIDE"
    ws_g["A1"].font = Font(bold=True, size=14, color=BRAND)
    for c, h in enumerate(["Enquiry Status", "What it means", "Default next action",
                           "Follow-up timing", "Auto priority"], start=1):
        ws_g.cell(row=3, column=c, value=h)
    style_header(ws_g, 3, 5)
    guide = [
        ["New enquiry", "Arrived and has had no reply from you yet",
         "Reply with welcome message + 3 questions", "Within 24 hours, ideally same day", "P1 - today"],
        ["Awaiting reply", "You replied; they have not come back", "Gentle nudge (no price talk)",
         "3-4 days after your reply", "P2 - this week"],
        ["Quote sent", "Price list or personalised quote is with them", "Gentle nudge (no price talk)",
         "3 days, then 7 days", "P2 - this week"],
        ["Call requested", "They asked to talk; no confirmed slot yet", "Confirm call slot",
         "Same day", "P1 - today"],
        ["Call scheduled", "A date and time is fixed", "Send price list / packages",
         "Before the call", "P2 - this week"],
        ["Clarification needed", "A specific question is unanswered (album, travel, hours)",
         "Clarify package inclusions", "Within 24-48 hours", "P1 - today"],
        ["Deciding / comparing", "Comparing you with other photographers; no decision yet",
         "Send portfolio of similar wedding", "3 days, then 7 days", "P2 - this week"],
        ["Booked", "Advance received / date blocked", "Send booking confirmation + next steps",
         "No selling follow-up needed", "-"],
        ["Dormant - no reply", "Silent after your final message", "Send final follow-up",
         "ONE final message, then STOP and close", "P3 - when free"],
        ["Closed - not proceeding", "Final no, or they booked elsewhere", "Send thank-you / stay in touch",
         "None. Do not chase.", "-"],
    ]
    for r, row in enumerate(guide, start=4):
        for c, value in enumerate(row, start=1):
            cell = ws_g.cell(row=r, column=c, value=value)
            cell.border = BORDER
            cell.alignment = Alignment(vertical="top", wrap_text=True)
    set_widths(ws_g, {"A": 22, "B": 44, "C": 34, "D": 30, "E": 14})

    ws_g["A16"] = "THE STOP RULES (never break these)"
    ws_g["A16"].font = Font(bold=True, size=12, color="B91C1C")
    for i, text in enumerate([
        "1. If someone says they are not interested, or asks you to stop messaging: stop. Mark it Closed and never message them again.",
        "2. Maximum 3 follow-ups per enquiry after your first reply. Then close it.",
        "3. Never send two messages to the same person in one day.",
        "4. Never send price-related follow-ups more than twice. If they wanted the price, they already have it.",
        "5. Zero pressure. If an enquiry needs pressure to survive, it was never a booking.",
    ], start=17):
        ws_g.cell(row=i, column=1, value=text).font = Font(size=10)

    # ---------------- Dashboard ----------------
    ws_d = wb.create_sheet("Dashboard")
    ws_d["A1"] = "DASHBOARD - live counts from the Tracker tab"
    ws_d["A1"].font = Font(bold=True, size=14, color=BRAND)
    ws_d["A2"] = "These numbers change automatically when you change the dropdowns on the Tracker tab."
    ws_d["A2"].font = NOTE_FONT
    ws_d["A4"] = "Enquiries by status"
    ws_d["A4"].font = Font(bold=True, size=12)
    for i, status in enumerate(ENQUIRY_STATUS, start=5):
        ws_d.cell(row=i, column=1, value=status).border = BORDER
        cell = ws_d.cell(row=i, column=2, value=f'=COUNTIF(Tracker!$G$3:$G${LAST_ROW},A{i})')
        cell.border = BORDER
        cell.alignment = Alignment(horizontal="center")
    kpis = [
        ("Total enquiries tracked", f'=COUNTA(Tracker!$A$3:$A${LAST_ROW})'),
        ("Open enquiries (need attention)", f'=COUNTIF(Tracker!$L$3:$L${LAST_ROW},"Open")'),
        ("OVERDUE follow-ups", f'=COUNTIF(Tracker!$P$3:$P${LAST_ROW},"OVERDUE")'),
        ("Due today", f'=COUNTIF(Tracker!$K$3:$K${LAST_ROW},"Due today")'),
        ("P1 - do today", f'=COUNTIF(Tracker!$O$3:$O${LAST_ROW},"P1 - today")'),
        ("New enquiries not yet answered", f'=COUNTIF(Tracker!$G$3:$G${LAST_ROW},"New enquiry")'),
        ("Booked", f'=COUNTIF(Tracker!$L$3:$L${LAST_ROW},"Booked")'),
        ("Closed - no response", f'=COUNTIF(Tracker!$L$3:$L${LAST_ROW},"Closed - no response")'),
        ("Weddings in the next 30 days",
         f'=SUMPRODUCT((Tracker!$E$3:$E${LAST_ROW}>=TODAY())*(Tracker!$E$3:$E${LAST_ROW}<=TODAY()+30))'),
    ]
    ws_d["D4"] = "At-a-glance numbers"
    ws_d["D4"].font = Font(bold=True, size=12)
    for i, (label, formula) in enumerate(kpis, start=5):
        ws_d.cell(row=i, column=4, value=label).border = BORDER
        cell = ws_d.cell(row=i, column=5, value=formula)
        cell.border = BORDER
        cell.alignment = Alignment(horizontal="center")
        cell.font = Font(bold=True)
    ws_d["A17"] = ("How to read this: if 'OVERDUE follow-ups' and 'P1 - do today' are both zero, your list is "
                   "under control. If they keep growing, the 7-day workflow is not being run - "
                   "open 7-Day-Follow-Up-Workflow and do the Wednesday and Friday blocks.")
    ws_d["A17"].font = NOTE_FONT
    ws_d.merge_cells("A17:E18")
    ws_d["A17"].alignment = Alignment(wrap_text=True, vertical="top")
    set_widths(ws_d, {"A": 34, "B": 12, "C": 3, "D": 38, "E": 12})

    # ---------------- Google Sheets instructions ----------------
    ws_s = wb.create_sheet("Google Sheets")
    ws_s["A1"] = "HOW TO USE THIS IN GOOGLE SHEETS (your clients probably will)"
    ws_s["A1"].font = Font(bold=True, size=14, color=BRAND)
    steps = [
        "",
        "Option 1 - import the CSV (fastest, recommended):",
        "  1. Google Sheets > File > Import > Upload > choose 'enquiry-tracker-import.csv'",
        "  2. Import location: 'Replace spreadsheet'. Separator: comma. Click Import data.",
        "  3. Select column G > Data > Data validation > Add rule > Dropdown > paste the status list",
        "     (the full lists are on the 'Lists' tab of the Excel file, or in the setup guide).",
        "  4. Repeat step 3 for columns D, F, I, K, L.",
        "  5. Select columns N, O, P > paste the three formulas from row 3 and press Ctrl+D to fill down.",
        "  6. Select row 2 > View > Freeze > 1 row. Then Data > Create a filter.",
        "  7. Format > Conditional formatting > 'Text contains' > OVERDUE > red.",
        "",
        "Option 2 - upload the Excel file:",
        "  1. Google Drive > New > File upload > AWER-Enquiry-Tracker-SAMPLE.xlsx",
        "  2. Right-click the file > Open with > Google Sheets. Dropdowns and formulas survive this.",
        "  3. If colours look different, reapply one conditional formatting rule and it will match.",
        "",
        "Sharing with your client (do this):",
        "  Share button > give THEIR email Editor access > they click 'Make a copy' or use it directly.",
        "  Do not share as 'anyone with the link'.",
    ]
    for i, text in enumerate(steps, start=2):
        ws_s.cell(row=i, column=1, value=text)
    ws_s.column_dimensions["A"].width = 110
    ws_s["A3"].font = Font(bold=True, size=12, color=INK)
    ws_s["A13"].font = Font(bold=True, size=12, color=INK)
    ws_s["A19"].font = Font(bold=True, size=12, color=INK)

    os.makedirs(TRACKER_DIR, exist_ok=True)
    wb.save(TRACKER_OUT)
    print("wrote", os.path.relpath(TRACKER_OUT, ROOT))


# ============================================================================
# FILE 2 & 3 — CSV versions
# ============================================================================
def build_tracker_csvs():
    with open(TRACKER_CSV, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(TRACKER_HEADERS)
        for row in SAMPLE_ROWS:
            days_since, priority, overdue = compute_auto(row)
            out = []
            for i, value in enumerate(row):
                if i in (1, 4, 7, 9) and hasattr(value, "strftime"):
                    out.append(value.strftime("%d-%b-%Y"))
                elif i == 12:
                    out.append("[FICTIONAL SAMPLE] " + str(value))
                else:
                    out.append(value)
            out += [days_since, priority, overdue]
            w.writerow(out)
    print("wrote", os.path.relpath(TRACKER_CSV, ROOT))

    with open(TRACKER_BLANK_CSV, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow(TRACKER_HEADERS)
        for _ in range(3):
            w.writerow([""] * len(TRACKER_HEADERS))
    print("wrote", os.path.relpath(TRACKER_BLANK_CSV, ROOT))


# ============================================================================
# FILE 4 — PROSPECT TRACKER
# ============================================================================
PROSPECT_HEADERS = [
    "Business Name", "City", "Public Website", "Public Instagram Profile",
    "Public Business Contact Method", "Evidence of Relevant Business Activity",
    "Personalised Observation (their words/their work)", "Outreach Channel Used",
    "Outreach Date", "Response", "Interest Level", "Next Action", "Next Action Date",
    "Status", "Notes",
]
CONTACT_METHOD = [
    "Website contact form", "Business email (published on site)",
    "Instagram DM (business account)", "Facebook page message",
    "WhatsApp number published on site", "Phone (published on site)", "None found - skip",
]
EVIDENCE = [
    "Posted wedding work in last 30 days", "Posted wedding work in last 60 days",
    "Website lists wedding packages", "Website blog / gallery updated this year",
    "Directory listing active (Google Maps / portal)", "No visible recent activity - low priority",
]
RESPONSE = [
    "No reply yet", "Seen, no reply", "Replied - not interested", "Replied - asked for details",
    "Replied - wants a call", "Replied - asked for sample", "Replied - asked price",
    "Replied - asked to stop", "Bounced / wrong contact",
]
INTEREST = [
    "0 - Not a fit", "1 - Polite no", "2 - Curious", "3 - Wants the sample",
    "4 - Wants to talk", "5 - Asked how to pay",
]
PROSPECT_NEXT = [
    "Send first outreach", "Send follow-up #1 (day 4)", "Send sample tracker",
    "Send the 799 offer", "Send payment link", "Book a 10-minute call",
    "Wait until agreed date", "No further contact (stopped)", "Add to 30-day nurture list",
]
STATUS = [
    "Not contacted", "Contacted", "In conversation", "Sample sent", "Offer sent",
    "Customer", "Not now", "DO NOT CONTACT",
]
EXAMPLE_ENTRIES = [
    ["Studio A (example)", "Indore", "studioA-example.in (fictional)", "@studioA_example (fictional)",
     "Website contact form", "Posted wedding work in last 30 days",
     "Recent reel from a lakeside wedding; bio says 'booking 2027 dates'",
     "Website contact form", d(3), "No reply yet", "0 - Not a fit", "Send follow-up #1 (day 4)",
     d(-1), "Contacted", "Illustrative row only - not a real business."],
    ["Studio B (example)", "Kochi", "", "@studiob_example (fictional)",
     "Business email (published on site)", "Website lists wedding packages",
     "Their site promises a reply within 24 hours but the form is the only way in",
     "Business email", d(6), "Replied - asked for sample", "3 - Wants the sample",
     "Send sample tracker", d(-1), "Sample sent", "Illustrative row only - not a real business."],
    ["Studio C (example)", "Jaipur", "", "@studioc_example (fictional)",
     "Instagram DM (business account)", "Posted wedding work in last 60 days",
     "Highlight says 'dates open for February' - they are actively selling right now",
     "Instagram DM (business account)", d(2), "Seen, no reply", "2 - Curious",
     "Send follow-up #1 (day 4)", d(2), "Contacted", "Illustrative row only - not a real business."],
    ["Studio D (example)", "Hyderabad", "studiod-example.in (fictional)", "@studiod_example (fictional)",
     "Website contact form", "Website blog / gallery updated this year",
     "Team of 3, posts client testimonials, no CRM mentioned anywhere",
     "Website contact form", d(10), "No reply yet", "0 - Not a fit",
     "Add to 30-day nurture list", d(-20), "Not now", "Illustrative row only - not a real business."],
]


def build_prospect_tracker():
    wb = Workbook()
    LAST_ROW = 400
    ws = wb.active
    ws.title = "Prospects"
    ws["A1"] = ("PROSPECT LIST - built by hand from public business information only. Never paste contact details "
                "you did not find published, and never contact anyone marked DO NOT CONTACT. Rows marked "
                "'example' show the format; they are not real businesses.")
    ws["A1"].font = Font(italic=True, size=9, color="B91C1C")
    ws.merge_cells(start_row=1, start_column=1, end_row=1, end_column=len(PROSPECT_HEADERS))
    ws.row_dimensions[1].height = 26
    ws["A1"].alignment = Alignment(wrap_text=True, vertical="center")

    for c, header in enumerate(PROSPECT_HEADERS, start=1):
        ws.cell(row=2, column=c, value=header)
    style_header(ws, 2, len(PROSPECT_HEADERS), height=44)

    for r, row in enumerate(EXAMPLE_ENTRIES, start=3):
        for c, value in enumerate(row, start=1):
            cell = ws.cell(row=r, column=c, value=value)
            cell.border = BORDER
            cell.alignment = Alignment(vertical="top", wrap_text=(c in (6, 7, 15)))
            if c in (9, 13):
                cell.number_format = "DD-MMM-YYYY"
        ws.cell(row=r, column=7).font = Font(italic=True, color="6B7280")

    set_widths(ws, {"A": 24, "B": 14, "C": 30, "D": 28, "E": 28, "F": 30, "G": 46,
                    "H": 24, "I": 13, "J": 22, "K": 20, "L": 26, "M": 14, "N": 18, "O": 40})
    ws.freeze_panes = "C3"
    ws.auto_filter.ref = f"A2:O{LAST_ROW}"

    # option lists on its own sheet
    ws_l = wb.create_sheet("Lists")
    ws_l["A1"] = "DROPDOWN OPTIONS - referenced by the Prospects tab. Edit with care."
    ws_l["A1"].font = Font(italic=True, size=9, color="B91C1C")
    list_columns = [("A", "Contact Method", CONTACT_METHOD), ("C", "Evidence", EVIDENCE),
                    ("E", "Response", RESPONSE), ("G", "Interest Level", INTEREST),
                    ("I", "Next Action", PROSPECT_NEXT), ("K", "Status", STATUS)]
    for col, title, values in list_columns:
        cell = ws_l[f"{col}1"]
        cell.value = title
        cell.fill = HEADER_FILL
        cell.font = HEADER_FONT
        for i, value in enumerate(values, start=2):
            ws_l[f"{col}{i}"] = value
        ws_l.column_dimensions[col].width = 40
    for col in ("B", "D", "F", "H", "J", "L"):
        ws_l.column_dimensions[col].width = 3

    def add_dv(column, ref):
        dv = DataValidation(type="list", formula1=ref, allow_blank=True, showDropDown=False)
        dv.errorTitle = "Use the dropdown"
        dv.error = "Please choose one of the standard values."
        ws.add_data_validation(dv)
        dv.add(f"{column}3:{column}{LAST_ROW}")

    add_dv("E", "Lists!$A$2:$A$8")
    add_dv("F", "Lists!$C$2:$C$7")
    add_dv("H", "Lists!$A$2:$A$8")
    add_dv("J", "Lists!$E$2:$E$10")
    add_dv("K", "Lists!$G$2:$G$7")
    add_dv("L", "Lists!$I$2:$I$10")
    add_dv("N", "Lists!$K$2:$K$9")

    ws.conditional_formatting.add(f"N3:N{LAST_ROW}",
        FormulaRule(formula=['$N3="DO NOT CONTACT"'], fill=FILL_RED, font=Font(bold=True, color="B91C1C")))
    ws.conditional_formatting.add(f"N3:N{LAST_ROW}",
        FormulaRule(formula=['$N3="Customer"'], fill=FILL_GREEN, font=Font(bold=True, color="12703A")))
    ws.conditional_formatting.add(f"K3:K{LAST_ROW}",
        FormulaRule(formula=['OR($K3="4 - Wants to talk",$K3="5 - Asked how to pay")'],
                    fill=FILL_GREEN, font=Font(bold=True)))
    ws.conditional_formatting.add(f"J3:J{LAST_ROW}",
        FormulaRule(formula=['OR($J3="Replied - asked to stop",$J3="Replied - not interested")'], fill=FILL_GREY))
    ws.conditional_formatting.add(f"M3:M{LAST_ROW}",
        FormulaRule(formula=['AND($M3<>"",$M3<=TODAY(),$N3<>"DO NOT CONTACT",$N3<>"Customer")'], fill=FILL_AMBER))
    ws.conditional_formatting.add(f"I3:I{LAST_ROW}",
        FormulaRule(formula=['AND($I3<>"",TODAY()-$I3>=4,$J3="No reply yet")'], fill=FILL_AMBER))

    ws_r = wb.create_sheet("Rules & Daily Quota")
    ws_r["A1"] = "PROSPECTING RULES"
    ws_r["A1"].font = Font(bold=True, size=14, color=BRAND)
    rules = [
        "",
        "WHERE TO FIND PROSPECTS (free, public sources only):",
        "  Google Maps - search 'wedding photographer <city>', sort by rating, check recent reviews.",
        "  Instagram - hashtags and location tags: #indianweddingphotographer, #candidweddingindia, #<city>wedding",
        "  Search engines - 'wedding photographer <city> packages', 'candid wedding photographer <city>'",
        "  Public photography communities and Facebook groups - participate for a week before pitching.",
        "  Public business directories and wedding marketplaces - shows who is actively selling.",
        "",
        "NEVER DO THIS:",
        "  x Buy, scrape or guess contact details. If it is not published on their business page, do not use it.",
        "  x Message personal (non-business) accounts, or contact the same person twice in a week.",
        "  x Contact anyone marked DO NOT CONTACT, for any reason, ever.",
        "  x Send identical copy-paste messages to dozens of people in one day.",
        "",
        "DAILY QUOTA (launch days 3-7):",
        "  Research: 20 new prospects/day  ~  First outreach: 10/day with one specific personal detail each",
        "  Follow-ups: 10/day (only where the 4-day wait has passed)  ~  Total: about 90 minutes",
        "",
        "WHEN TO STOP:",
        "  - They say no or ask you to stop -> Status = DO NOT CONTACT immediately. Never message again.",
        "  - One follow-up, no reply after 4 days -> Status = Not now; next action = 30-day nurture list.",
        "  - Two messages with no reply, ever -> stop. Do not send a third.",
    ]
    for i, text in enumerate(rules, start=2):
        ws_r.cell(row=i, column=1, value=text)
    for r in (3, 10, 16, 20):
        ws_r.cell(row=r, column=1).font = Font(bold=True, size=12, color=INK)
    ws_r.column_dimensions["A"].width = 105

    wb.save(PROSPECT_OUT)
    print("wrote", os.path.relpath(PROSPECT_OUT, ROOT))


if __name__ == "__main__":
    build_tracker()
    build_tracker_csvs()
    build_prospect_tracker()
    print("done.")
