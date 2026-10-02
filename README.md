# "Request a Private Consultation" Lead Form

A high-converting, serverless lead capture form that writes directly into a Google Sheet using Google Apps Script as the backend (no paid services, no external backend server required).

---

## 3. Deployment Steps

1. **Create Google Sheet & Script:**
   - Create a new Google Sheet at [sheets.new](https://sheets.new).
   - Go to **Extensions** → **Apps Script**.
   - Delete any placeholder code and paste the complete content of `Code.gs`.
   - Save the project (Ctrl + S).

2. **Deploy as Web App:**
   - Click **Deploy** → **New deployment**.
   - Click the gear icon next to "Select type" and choose **Web app**.
   - Set **Execute as:** `Me (your_email@gmail.com)`.
   - Set **Who has access:** `Anyone` *(Crucial: allows public form submissions without Google login)*.
   - Click **Deploy**.

3. **Authorize & Configure:**
   - Authorize permissions when prompted by Google.
   - Copy the generated Web App URL (ends with `/exec`).
   - Open `index.html` and set `const SCRIPT_URL = 'YOUR_EXEC_URL';` at the top of the `<script>` tag.

4. **Managing Updates:**
   - *Note:* Every time you edit `Code.gs`, go to **Deploy** → **Manage deployments** → **Edit (Pencil)** → select **New version** → **Deploy**. Otherwise, the older version continues running.

5. **Test Submission:**
   - Submit the form on `index.html`.
   - Open your Google Sheet and confirm that the `Leads` sheet has been created and populated with your test lead.

---

## Architecture & Specifications

### Frontend (`index.html`)
- **Card**: White card, max-width 560px, border-radius 24px, soft shadow, 32px padding.
- **Typography**: Google Font *Libre Baskerville* (bold, 28px, `#0F172A`) & *Inter* (16px, `#64748B`).
- **Fields**: 64px tall inputs & selects, border-radius 14px, background `#F8FAFC`, border 1px `#E2E8F0`, font Inter 17px, focus border `#16A34A` with light green focus ring.
- **Button**: Full width, 64px tall, background `#16A34A`, hover `#15803D`, text "Schedule an Appointment →".
- **Mobile (< 480px)**: Columns stack to single column with 16px side padding.
- **Validation**: Inline red error messages (min 3 letters name, 10-digit Indian mobile starting 6-9, standard email, required dropdowns).
- **Honeypot & UTMs**: Hidden `website` field to block bot spam, auto-captures `utm_source`, `utm_medium`, `utm_campaign`, and `pageUrl`.
- **CORS-Free Submission**: Sent with `Content-Type: text/plain;charset=utf-8`.

### Backend (`Code.gs`)
- Concurrency lock with `LockService.getScriptLock()` (`waitLock(10000)`).
- Automatically creates and styles `Leads` sheet headers if not present.
- Sanitizes and prepends `'` to phone numbers so leading zeros are retained in Google Sheets.
- Formats timestamp to Asia/Kolkata timezone (`dd-MMM-yyyy HH:mm:ss`).
- Optional notification email sent to `admin@fortuneinvestment.in`.
- Health check supported via `doGet(e)` returning `OK`.
