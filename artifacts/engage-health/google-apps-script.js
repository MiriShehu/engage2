/**
 * Google Apps Script — Engage Health Get a Quote leads
 *
 * HOW TO DEPLOY:
 * 1. Open the Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1DuAUR1d1IDazojFHI1P4_rvQbGG7uNJahFPjmHgVewU/edit
 * 2. Click Extensions > Apps Script
 * 3. Paste this entire file, replacing any existing code
 * 4. Click Save (floppy disk icon)
 * 5. Click Deploy > New Deployment
 *    - Type: Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Click Deploy, then Authorise access when prompted
 * 7. Copy the Web App URL
 * 8. Add it to your .env file on the server:
 *    VITE_SHEETS_WEBHOOK_URL=<paste URL here>
 */

const SHEET_ID = "1DuAUR1d1IDazojFHI1P4_rvQbGG7uNJahFPjmHgVewU";

const HEADERS = [
  "Submitted At",
  "First Name",
  "Last Name",
  "Email",
  "Phone",
  "Job Title",
  "Company",
  "Company Address",
  "Industry",
  "Country",
  "Cover Types",
  "Employee Range",
  "Budget",
  "Timeline",
  "Notes",
  "GDPR Consent",
];

function doPost(e) {
  try {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getActiveSheet();

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    }

    const raw = e.parameter.data || e.postData.contents;
    const data = JSON.parse(raw);

    sheet.appendRow([
      data.submittedAt || new Date().toISOString(),
      data.firstName || "",
      data.lastName || "",
      data.email || "",
      data.phone || "",
      data.jobTitle || "",
      data.company || "",
      data.companyAddress || "",
      data.industry || "",
      data.country || "",
      data.coverTypes || "",
      data.employeeRange || "",
      data.budget || "",
      data.timeline || "",
      data.notes || "",
      data.gdprConsent ? "Yes" : "No",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Test via GET — visit the web app URL in your browser to confirm it's working
function doGet() {
  return ContentService
    .createTextOutput("Engage Health Sheets webhook is live.")
    .setMimeType(ContentService.MimeType.TEXT);
}
