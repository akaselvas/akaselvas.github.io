// backlog-results.js — execution results (Jira export) and fix commits (GitHub history).
// Key = Epic-Story-Subtask position, e.g. 'E02-S01-T06'. Safe to edit by hand.
//   runs: [{ s: 'PASS'|'FAIL'|'NOTE', q: qualifier, e: environment, d: 'YYYY-MM-DD', n: notes (optional) }]
//   fix : short hashes of the commits that fixed the issue found by that test
const RESULTS = {
  'E01-S01-T07': {
    fix: ['525aaa1'],
  },
  'E01-S03-T01': {
    runs: [
      { s: 'NOTE', q: '', e: '', d: '2026-04-03', n: `Actual Results: The intention input was successfully sanitized. Upon submitting the form with the malicious payload <script>alert('XSS')</script>Minha intenção, the backend sanitize_input() function using bleach.clean(strip=True) successfully stripped the <script> tags and safely HTML-encoded the single quotes.  The resulting payload stored in the session and sent via WebSocket reads: "alert('XSS')Minha intenção"` },
    ],
  },
  'E01-S03-T05': {
    fix: ['76cee4f'],
  },
  'E01-S04-T02': {
    runs: [
      { s: 'NOTE', q: '', e: '', d: '2026-04-07', n: `Interception: After deleting the csrf_token hidden input, the backend correctly rejected the POST request.
Status Code: Verified HTTP 400 Bad Request in the Network tab.
UX Behavior: The page successfully triggered an automatic reload.

Verification of Payload: By using a breakpoint in the Sources tab to pause execution before the reload, the response payload was confirmed to be: {"error":"CSRF token validation failed. Please refresh the page.", "success":false}.` },
    ],
  },
  'E01-S04-T04': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S04-T05': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S04-T06': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S04-T07': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S04-T08': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S04-T09': {
    runs: [
      { s: 'PASS', q: '/', e: 'Local Dev (Simulated Desync)', d: '2026-04-07' },
    ],
  },
  'E01-S05-T01': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S05-T02': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S05-T03': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S05-T04': {
    runs: [
      { s: 'NOTE', q: '', e: 'Production (Render) / Chrome', d: '2026-04-07', n: `Status: PASS  (/) (Behavior Documented)
Verified that bleach sanitization occurs before the length check. Special characters like &, <, and > are expanded into HTML entities (e.g., &), increasing the total character count. As a result, a 400-character typed input was correctly rejected as "Intention too long" because its sanitized length exceeded the limit. The app handled this edge case with a 400 error and UI alert.` },
    ],
  },
  'E01-S05-T05': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S06-T01': {
    runs: [
      { s: 'PASS', q: '/', e: 'Production (Render) / Chrome', d: '2026-04-07' },
    ],
  },
  'E01-S06-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Local Logs', d: '2026-04-08' },
    ],
    fix: ['da514cf'],
  },
  'E01-S07-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-08' },
    ],
  },
  'E01-S07-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-08' },
    ],
  },
  'E02-S01-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S01-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-08' },
    ],
  },
  'E02-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S01-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S01-T06': {
    runs: [
      { s: 'FAIL', q: '', e: '', d: '2026-04-08', n: `Actual Results:
During the execution of Subtask 6 (navigating back and forth between Home and Results), the server crashed with a 500 Internal Server Error.

Root Cause Analysis:
The server logs reveal a redis.exceptions.ConnectionError: max number of clients reached. This indicates that the rapid navigation and form re-submission exceeded the connection limit of the Redis free-tier plan. This is an infrastructure bottleneck, not a logic error in the Tarot deck copying code.

Action Taken:

Implemented a redis.ConnectionPool in app.py to limit and reuse connections.
Restarted the Render service to clear stale connections.
Next Steps:
Re-run Subtask 6 once the connection pooling is confirmed stable.` },
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-09', n: `Logic Verified: Consecutive readings do not corrupt the global Tarot deck. The deck_copy fix works perfectly; exactly 22 cards render correctly across multiple sessions without data accumulation.

Infrastructure Stabilized: During this test, two critical server crashes were identified and permanently resolved:
Redis Pool: Implemented a ConnectionPool to fix "max clients reached" database crashes during rapid page navigation.
AI Timeout: Configured the Gemini API with transport='rest' to resolve a gevent/gRPC conflict that was causing memory spikes and SIGKILL server timeouts.

Future Action: Frontend button locks (to prevent double-clicks) will be implemented at the end of the QA phase as an additional UX/stability improvement.` },
    ],
    fix: ['879ecd4', '01aaf26', '68ab100', '113fbc3'],
  },
  'E02-S02-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S02-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-08' },
    ],
  },
  'E02-S02-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S02-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S03-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S03-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-09' },
    ],
  },
  'E02-S03-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-09' },
    ],
  },
  'E02-S04-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S04-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome (Touch Emulation)', d: '2026-04-09' },
    ],
  },
  'E02-S04-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S04-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S05-T07': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S06-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S06-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S06-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S06-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S06-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-09' },
    ],
  },
  'E02-S06-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-09' },
    ],
  },
  'E02-S06-T07': {
    runs: [
      { s: 'FAIL', q: '', e: '', d: '2026-04-09', n: `Summary:
The backend successfully catches malformed JSON, but it fails to validate the content of the JSON. It currently accepts objects with arbitrary keys (e.g., {"evil": "injection"}) and passes them to the AI, which then attempts to interpret the malicious strings as Tarot cards.

Reproduction Steps:

Navigate to the /cartas page.

Open the browser Console (F12).

Retrieve a valid csrf_token from the page source.

Paste and execute the following "Hacker Script" to bypass the UI and send semantically incorrect data:

code JavaScript

[script omitted]

Actual Results:
Backend Behavior: The server returned an HTTP 200 OK. The json.loads check passed because the structure was valid JSON, but the logic failed to verify that the required keys (name, value) were present.
AI Behavior: The AI received the string "injection" and attempted to interpret it as a Tarot card, stating: "As três cartas que você tirou são: Injeção (Injection)... A carta 'Injeção' não é uma carta tradicional do Tarot."
Logs: INFO - Choosed Cards Data (POST): [{"evil": "injection"}]` },
      { s: 'PASS', q: 'Bug Fixed & Verified', e: 'Production (Render) / Chrome Console', d: '2026-04-10', n: `Summary:
The semantic validation bug identified in the previous test run has been successfully resolved. The backend now strictly enforces a schema check on the card payload, ensuring that only valid Tarot card objects reach the AI model.

Verification Methodology:
The "Hacker Script" used in the previous failure report was executed again to attempt a bypass. A payload with valid JSON structure but incorrect keys ([{"evil": "injection"}]) was submitted manually.

Actual Results:

Validation Enforcement: The backend correctly identified that the payload root was a list but the internal objects lacked the mandatory name and value keys.

Security Response: The server successfully intercepted the ValueError, logged the attempt, and blocked the transition to the results page.

Redirection: The user was immediately redirected back to /cartas, preventing the AI from processing the malicious data.

AI Integrity: Verified that the AI generation was never triggered, protecting the model from "Injection" style prompts.

Design …` },
    ],
    fix: ['8b91e7b'],
  },
  'E02-S06-T08': {
    runs: [
      { s: 'PASS', q: 'Fixed by Subtask 7 Implementation', e: 'Production (Render) / Chrome Console', d: '2026-04-10', n: `Summary:
Verified that the backend correctly rejects empty card objects [{}]. This ensures that "garbage" data does not reach the AI model, preventing useless readings and saving API quota.

Methodology:
Used the manual console "Hacker Script" to bypass the UI and submit a payload containing an empty object: [{}].

Actual Results:

Validation Logic: The backend identified that the object {} was missing the required name and value keys.

Security Response: The server raised a ValueError, logged the rejection, and triggered the except block.

Redirection: The user was successfully redirected back to /cartas.

AI Protection: Confirmed via Render logs that no request was sent to the Gemini API, proving the validation successfully intercepted the semantically empty payload.
Render Logs: 2026-04-10 23:59:11,602 - WARNING - Card payload rejected: One or more cards have an invalid structure | Raw payload: [{}]
Network Tab: POST /results -> 302 Found (Redirect to /cartas).` },
    ],
  },
  'E03-S01-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-10' },
    ],
    fix: ['fd76b0a'],
  },
  'E03-S01-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-10' },
    ],
  },
  'E03-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-10' },
    ],
  },
  'E03-S01-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S01-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-10' },
    ],
  },
  'E03-S02-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-10' },
    ],
  },
  'E03-S02-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S02-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S02-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S02-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-10' },
    ],
  },
  'E03-S03-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Dev (Simulated API Failure)', d: '2026-04-10' },
    ],
  },
  'E03-S03-T02': {
    runs: [
      { s: 'FAIL', q: 'Infinite Loading Bug', e: 'Production (Render) / Chrome', d: '2026-04-10', n: `Actual Results:
The application failed to recover from a network interruption.

Scenario: Disconnected client-side Wi-Fi during the "Estamos gerando sua leitura" phase.

Observation: The UI remained stuck on the loading screen indefinitely.

Recovery Failure: Upon reconnecting the Wi-Fi, the UI did not update, and the reading never arrived. The user was left in an infinite loading loop.

Root Cause: The frontend lacks a "Watchdog Timer" or Timeout mechanism. If the WebSocket connection is interrupted or the server response is lost, there is no client-side logic to surface an error to the user.` },
      { s: 'PASS', q: 'Resolved Previous "Infinite Loading" Bug', e: 'Production (Render) / Chrome (Network Throttling)', d: '2026-04-13', n: `Summary of Fix:
The previous vulnerability to network drops (which caused infinite loading screens) has been resolved by implementing a Self-Healing WebSocket Architecture.

Backend: Implemented a Redis-backed caching system (reading_cache:{session.sid}) that stores the AI output. If a user disconnects during generation, the server finishes the task and saves it.

Frontend: Implemented http://Socket.IO   lifecycle listeners (disconnect, reconnect_attempt, reconnect_failed) with a dynamic, non-intrusive UI status bar and a 2-minute soft timeout.

Test Execution & Verification:

Scenario 1: Baseline Regression (PASS)

Executed a standard end-to-end reading. The new logic did not interfere with the happy path.

Scenario 2: Reconnect with Cached Reading (PASS)

Action: Disconnected network immediately after submission. Waited 10 seconds (allowing AI to finish in the background), then …` },
    ],
    fix: ['ac3e3b6', '8748bce', '604829d', 'adf892a', 'd5f43ac'],
  },
  'E03-S03-T03': {
    runs: [
      { s: 'PASS', q: 'Behavior Documented', e: 'Production (Render)', d: '2026-04-13' },
    ],
  },
  'E03-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-13' },
    ],
    fix: ['a9ea2e6'],
  },
  'E03-S03-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome (Network Throttling)', d: '2026-04-15' },
    ],
    fix: ['46bd6ac'],
  },
  'E03-S04-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E03-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E03-S04-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E03-S04-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E03-S04-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E03-S04-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome (CPU Throttling: 4x Slowdown)', d: '2026-04-15' },
    ],
  },
  'E04-S01-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S01-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S01-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S01-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S02-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-15' },
    ],
  },
  'E04-S02-T04': {
    fix: ['1db376c'],
  },
  'E04-S02-T05': {
    runs: [
      { s: 'FAIL', q: 'Vulnerability Identified', e: '', d: '2026-04-15', n: `Actual Results:
During initial testing, a Client-Side XSS vulnerability was discovered.

Vulnerability: The addMessage function used .innerHTML to render user-provided chat messages.
Exploit: Submitting the payload <img src=x onerror="alert('Local XSS')"> resulted in the immediate execution of the JavaScript alert.
Root Cause: While the backend correctly sanitizes the input for the AI, the frontend was injecting the raw, unsanitized string directly into the DOM.` },
      { s: 'PASS', q: 'Vulnerability Patched', e: 'Production (Render) / Chrome', d: '2026-04-15', n: `Verified chat input sanitization and resolved a critical Client-Side XSS vulnerability.

Initial Failure: Confirmed that using .innerHTML allowed for the execution of injected scripts (e.g., onerror events).
Fix Implemented: Refactored the addMessage function in results.html.
Bot Messages: Continue to use marked.parse() and .innerHTML to support intended Markdown formatting.
User Messages: Switched to .textContent to ensure all user input is treated as literal text and never parsed as HTML.
Verification: Re-tested with the payload <img src=x onerror="alert('Local XSS')">. The script failed to execute, and the payload was safely rendered as plain text in the chat bubble.
Backend Sync: Confirmed that the backend sanitize_input (bleach) continues to protect the AI prompt, providing "Defense in Depth" for both the UI and the LLM.
Input: <script>alert(1)</script>
UI Output: Displays literal string <script>alert(1)</script>
Console: No scripts executed.` },
    ],
    fix: ['309bbe0'],
  },
  'E04-S02-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-16' },
    ],
  },
  'E04-S03-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S03-T05': {
    runs: [
      { s: 'PASS', q: 'Bug Prevented by Prior Fix', e: 'Production (Render) / Chrome', d: '2026-04-16', n: `Verified loading indicator removal under rapid user input. The previously identified bug (stranded loading dots due to .last-child targeting) was successfully prevented by the UI locking mechanism implemented in a prior subtask. Because the input field and send button are disabled while the AI is "thinking," the user cannot send a second message to disrupt the DOM order. The loading indicator is consistently and cleanly removed upon the AI's response.` },
    ],
  },
  'E04-S03-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S04-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S04-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S04-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S04-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-16' },
    ],
  },
  'E04-S04-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome (Network Blocking)', d: '2026-04-16' },
    ],
    fix: ['67ac685'],
  },
  'E04-S05-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-16' },
    ],
  },
  'E04-S05-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-16' },
    ],
  },
  'E04-S05-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-16' },
    ],
  },
  'E04-S05-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-16' },
    ],
  },
  'E04-S05-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Desktop', d: '2026-04-16' },
    ],
  },
  'E04-S05-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Localhost / Chrome Mobile Emulation', d: '2026-04-16' },
    ],
  },
  'E04-S05-T07': {
    runs: [
      { s: 'FAIL', q: 'Bug Identified', e: 'Local Dev (127.0.0.1) / Chrome Mobile Emulation', d: '2026-04-16', n: `Verified that the localhost bypass logic is too narrow. While the function correctly ignores the string "localhost", it fails to account for the loopback IP 127.0.0.1. As a result, the chat-focus-mode is incorrectly triggered when developing locally via IP.

Action Item: Logged a bug to update the isTouchDevice() check to:
window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1'` },
      { s: 'PASS', q: 'Bug Fixed', e: 'Local Dev (127.0.0.1) / Chrome Mobile Emulation', d: '2026-04-16', n: `Successfully resolved the bypass logic bug.

Fix: Updated isTouchDevice() to explicitly exclude the 127.0.0.1 hostname alongside localhost.
Verification: Confirmed that when accessing the application via the loopback IP, the mobile-specific layout shifts are correctly suppressed, even when touch emulation is active.
Result: This ensures a consistent developer experience across all local access methods while maintaining correct behavior for production users on real mobile devices.
Hostname: 127.0.0.1
Touch Emulation: ON
chat-focus-mode applied: NO (Success)` },
    ],
    fix: ['4543e9e'],
  },
  'E04-S06-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S06-T02': {
    runs: [
      { s: 'PASS', q: 'Vulnerability Prevented by Prior Fix', e: 'Production (Render) / Chrome', d: '2026-04-17', n: `Verified protection against Client-Side DOM XSS. The previously implemented fix (using .textContent for user messages instead of .innerHTML) successfully neutralized the malicious payload <img src="x" onerror="alert('Frontend XSS')">. The input was safely rendered as a literal string in the chat bubble, and no JavaScript execution occurred. Frontend security is robust.` },
    ],
  },
  'E04-S06-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S06-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S06-T05': {
    runs: [
      { s: 'PASS', q: 'Behavior Updated to Plain Text Enforcement', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S06-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17', n: `Verified the system's resilience against extremely long chat messages (Token Limit Stress Test).

Methodology: Submitted a 5,000-character string via the chat interface to simulate a Denial of Service (DoS) attempt or a prompt exceeding the LLM token limit.

Backend Resilience: The Gemini API rejected the oversized prompt, raising an exception. The backend except block successfully caught the error, preventing a server crash (No 500 Error).
Graceful Degradation: The bot returned the predefined fallback message ("Ocorreu um erro ao processar sua mensagem...").
State Recovery: Confirmed that the WebSocket connection remained stable. A subsequent, normal-length question was processed and answered successfully by the AI.` },
      { s: 'NOTE', q: '', e: '', d: '2026-04-17', n: `UPDATE
During the execution of Subtask 6 (Denial of Service / Token Limit Stress Test), it was identified that the chatbot lacked an explicit input length restriction. To prevent API quota abuse and ensure optimal LLM performance, a strict 500-character limit was implemented across both the client and server layers.

Modifications Implemented:

Frontend (UX): Added the maxlength="500" attribute to the #user-input HTML element to provide immediate, native browser feedback and prevent users from typing excessively long queries.
Backend (Security): Added a hard boundary check (if len(message) > 500:) inside the handle_message WebSocket event in app.py. This ensures that even if the frontend validation is bypassed, the server will reject the payload before it reaches the Gemini API.
Verification Methodology (Backend Bypass Test):
To verify the backend security enforcement, the frontend maxlength attribute was bypassed by manually emitting an oversized payload directly via the browser console:
socket.emit('send_message', { message: 'A'.repeat(600), tarot_reading: '' });

Actual …` },
    ],
    fix: ['f1a19dc', 'f1ae37e'],
  },
  'E04-S06-T07': {
    runs: [
      { s: 'PASS', q: 'Natively Secure', e: 'Production (Render) / Chrome Console', d: '2026-04-17' },
    ],
  },
  'E04-S07-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S07-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S07-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S07-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S07-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-17' },
    ],
  },
  'E04-S08-T01': {
    runs: [
      { s: 'PASS', q: 'Bug Identified & Patched', e: 'Production (Render) / Chrome Console', d: '2026-04-17', n: `Verified backend resilience against malformed WebSocket payloads (Missing Keys).

Initial Failure: Confirmed that emitting a send_message event without the message key caused a KeyError exception in the Python backend, as the code was using direct dictionary access (data['message']).
Fix Implemented: Updated handle_message in app.py to use the .get() method and added a validation guard.
Verification: Re-tested by emitting { tarot_reading: '...' } via the console.
Result: The server successfully intercepted the missing key, logged a warning, and aborted the function gracefully without crashing or throwing an exception.
Before Fix: KeyError: 'message' in logs.
After Fix: WARNING - Chat message rejected: Missing or empty 'message' key.` },
    ],
    fix: ['c50bf3a'],
  },
  'E04-S08-T02': {
    runs: [
      { s: 'PASS', q: 'Bug Identified & Patched', e: 'Production (Render) / Chrome Console', d: '2026-04-17', n: `Verified that the WebSocket handler now correctly rejects empty card payloads.

Initial Vulnerability: Confirmed that while the HTTP /results route was protected, the start_generation WebSocket event was still accepting empty choosed_cards arrays, leading to unnecessary Gemini API calls and quota waste.

Fix Implemented: Added a length check (if not choosed_cards:) inside the handle_generation event in app.py.

Verification: Manually emitted a start_generation event with choosed_cards: [] via the browser console.

Result: The backend successfully intercepted the empty payload, logged a security warning, and emitted a generation_error back to the client. No request was sent to the Gemini API, successfully protecting the service quota.
Console Input: socket.emit('start_generation', { ..., choosed_cards: [] })
Backend Log: WARNING - Generation rejected: choosed_cards array is empty.
UI Output: Displayed error message to the user.` },
    ],
    fix: ['9e7a4b0'],
  },
  'E05-S01-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-20' },
    ],
    fix: ['01668c6'],
  },
  'E05-S01-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-20' },
    ],
  },
  'E05-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-device', d: '2026-04-20' },
    ],
  },
  'E05-S01-T04': {
    runs: [
      { s: 'PASS', q: 'Configuration Bug Fixed', e: 'Production (Render) / Chrome Console', d: '2026-04-20', n: `Summary:
Verified the Global Default Limits (100 per hour) on standard routes. During initial testing, a configuration bug was discovered where the rate limiter failed to block abusive traffic. The issue was traced to Render's reverse proxy architecture and successfully resolved by updating the ProxyFix middleware.

Root Cause & Fix:

The Bug: Render routes incoming traffic through multiple internal load balancers before it reaches the Flask application. With the original configuration (x_for=1), get_remote_address was reading the IP address of Render's internal proxy (e.g., 10.25.142.7) instead of the actual user. Because the internal IP changed on almost every request, the rate limiter thought 100 different users were visiting the site, rendering the limit useless.
The Fix: Updated app.py to ProxyFix(..., x_for=2, ...). This instructs Flask to look two layers deep into the X-Forwarded-For headers, successfully bypassing Render's internal network and extracting the true client IP (e.g., [IP]).
Verification …` },
    ],
    fix: ['14c5747', '78d2a53'],
  },
  'E05-S01-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / RedisInsight GUI', d: '2026-04-20' },
    ],
  },
  'E05-S01-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Dev (localhost)', d: '2026-04-20' },
    ],
  },
  'E05-S01-T07': {
    runs: [
      { s: 'PASS', q: 'Behavior Documented & Accepted', e: 'Production (Render) / Chrome', d: '2026-04-20' },
    ],
  },
  'E05-S02-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-20' },
    ],
  },
  'E05-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-20' },
    ],
  },
  'E05-S02-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Development (localhost)', d: '2026-04-20' },
    ],
  },
  'E05-S02-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-20' },
    ],
  },
  'E05-S02-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-20' },
    ],
  },
  'E05-S02-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-20' },
    ],
  },
  'E05-S03-T01': {
    runs: [
      { s: 'PASS', q: 'Bug Fixed', e: 'Production (Render) / Chrome', d: '2026-04-21', n: `Resolved the "Stuck UI" bug on the /cartas route caused by expired sessions.

Logic Update: Replaced the loose try/except block with an explicit validation check: if raw_selected not in ['1', '3', '5'].

Security/Robustness: The route now strictly enforces the presence of a valid card selection. If a user attempts to access /cartas without a valid session (or with an expired one), they are immediately and safely redirected to the Home page.

Verification: Simulated session expiry by deleting the session cookie. Confirmed that refreshing /cartas now triggers an immediate redirect to home rather than rendering a locked/broken board.` },
    ],
    fix: ['d04ebd2'],
  },
  'E05-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / RedisInsight', d: '2026-04-21' },
    ],
  },
  'E05-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / RedisInsight', d: '2026-04-21' },
    ],
  },
  'E05-S03-T05': {
    runs: [
      { s: 'PASS', q: 'Advanced Privacy Architecture Implemented', e: 'Production (Render) / Chrome', d: '2026-04-21', n: `Resolved the browser "Session Restore" privacy vulnerability by implementing a hybrid Client/Server session validation pattern.

The Vulnerability: Modern browsers ignore SESSION_PERMANENT=False when "Continue where you left off" is enabled, allowing subsequent users on shared devices to access protected routes (e.g., /cartas) via direct URL navigation after a browser restart.

The Fix: Implemented a sessionStorage guard. Because sessionStorage is strictly tied to the tab lifecycle and cannot be restored by the browser, it acts as a reliable "Tab Alive" heartbeat.

Execution: If a protected route is accessed without the tab_active flag in sessionStorage, the frontend immediately fires a POST request to a new @csrf.exempt /clear_session endpoint, destroying the Redis session and redirecting the user to the Home page.

Verification: Confirmed that copying a protected URL, closing the tab, and pasting it into a new tab successfully triggers the session wipe and redirect, guaranteeing absolute privacy between sessions.` },
    ],
    fix: ['3b5ab04'],
  },
  'E05-S04-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S04-T03': {
    runs: [
      { s: 'PASS', q: 'Vulnerability Patched', e: 'Production (Render) / Chrome Console', d: '2026-04-21', n: `Verified the enforcement of the Content Security Policy against unauthorized inline scripts.

Initial Vulnerability (FAIL): Confirmed that the presence of 'unsafe-inline' in the script-src directive allowed arbitrary DOM-injected scripts to execute.

Fix Implemented: Removed 'unsafe-inline' from the CSP dictionary. Refactored the application to use Flask-Talisman's native nonce generation (content_security_policy_nonce_in=['script-src']).

Template Refactor: Removed the redundant g.nonce generation and updated all HTML templates to use Talisman's native  csp_nonce()  injection.

Verification (PASS): Re-tested the script injection via the browser console. The browser successfully blocked the execution, throwing a CSP violation error. Legitimate application scripts continue to function perfectly.

Conclusion: The application is now fully protected against DOM-based XSS attacks via strict, native CSP nonce enforcement.` },
    ],
    fix: ['2a5c41a', 'f246843', 'ee418f8', 'b27cd3d', '315a048'],
  },
  'E05-S04-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-21' },
    ],
  },
  'E05-S04-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S04-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Development (localhost) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S04-T07': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21', n: `Verified the impact of 'unsafe-eval' within the script-src directive. Navigated through the full application flow (Home -> Cartas -> Results -> Chat). No CSP violation errors or warnings were triggered in the console, confirming that the directive correctly permits necessary JavaScript execution patterns (e.g., within third-party libraries like marked.js or http://socket.io ) without breaking functionality.

(Note: 'unsafe-inline' was previously removed and replaced with strict nonce enforcement; this test confirms the remaining directives are correctly balanced for functionality).` },
      { s: 'NOTE', q: '', e: '', d: ' ' },
    ],
  },
  'E05-S05-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S05-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-21' },
    ],
  },
  'E05-S05-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-21' },
    ],
  },
  'E05-S05-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S05-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-21' },
    ],
  },
  'E05-S05-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome (Normal + Incognito)', d: '2026-04-21' },
    ],
  },
  'E05-S06-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-browser (Chrome + Firefox)', d: '2026-04-21' },
    ],
  },
  'E05-S06-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Redis Insight', d: '2026-04-21' },
    ],
  },
  'E05-S06-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-browser', d: '2026-04-21' },
    ],
  },
  'E05-S06-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-browser (Firefox + Chrome)', d: '2026-04-21' },
    ],
  },
  'E05-S06-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Concurrent Multi-browser', d: '2026-04-21' },
    ],
  },
  'E05-S06-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-browser', d: '2026-04-21' },
    ],
  },
  'E05-S06-T07': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Same-browser Multi-tab', d: '2026-04-21' },
    ],
  },
  'E06-S01-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome / Android', d: '2026-04-22' },
    ],
  },
  'E06-S01-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
  },
  'E06-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production /  Android (Chrome/Firefox)', d: '2026-04-22' },
    ],
  },
  'E06-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Desktop', d: '2026-04-22' },
    ],
  },
  'E06-S01-T05': {
    runs: [
      { s: 'PASS', q: 'Behavior Documented', e: 'Tablet Emulation (iPad Air)', d: '2026-04-22' },
    ],
  },
  'E06-S01-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Mobile Landscape', d: '2026-04-22' },
    ],
    fix: ['407e0ef', 'ff2214a'],
  },
  'E06-S02-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile', d: '2026-04-22' },
    ],
  },
  'E06-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
    fix: ['3e54785'],
  },
  'E06-S02-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile', d: '2026-04-22' },
    ],
  },
  'E06-S02-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Desktop', d: '2026-04-22' },
    ],
  },
  'E06-S02-T05': {
    runs: [
      { s: 'PASS', q: 'Test Rewritten to match new UI Logic', e: 'Production (Render) / Chrome Mobile', d: '2026-04-22' },
    ],
  },
  'E06-S02-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Mobile (Android/iOS)', d: '2026-04-22' },
    ],
  },
  'E06-S03-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation (iPhone SE - 320px)', d: '2026-04-22' },
    ],
  },
  'E06-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
  },
  'E06-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
  },
  'E06-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
  },
  'E06-S03-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Desktop (Resizing)', d: '2026-04-22' },
    ],
  },
  'E06-S04-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
  },
  'E06-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Mobile Emulation', d: '2026-04-22' },
    ],
  },
  'E06-S04-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Android (Chrome & Firefox)', d: '2026-04-22' },
    ],
  },
  'E06-S04-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Android (Chrome & Firefox)', d: '2026-04-22' },
    ],
  },
  'E06-S04-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Android (Chrome & Firefox)', d: '2026-04-22' },
    ],
  },
  'E06-S04-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Real Mobile Device', d: '2026-04-22' },
    ],
  },
  'E06-S04-T07': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / iOS & Mobile Emulation', d: '2026-04-22' },
    ],
    fix: ['4877a4a'],
  },
  'E07-S01-T01': {
    runs: [
      { s: 'PASS', q: 'Bug Fixed', e: 'Production (Render) / Chrome', d: '2026-04-23', n: `Verified that the previously identified "Stuck UI" bug on the /cartas route has been resolved.

Fix Verification: The backend now includes a strict session guard (if raw_val not in ['1', '3', '5']).
Result: Attempting to navigate directly to /cartas without an active session (or with an expired one) no longer renders a broken, non-interactive page. Instead, the server correctly identifies the missing state and triggers an immediate redirect to the Home page (/).

UX: This ensures users are always guided back to the start of the flow if their session data is lost, preventing a "dead-end" user experience.
Direct URL access to /cartas -> HTTP 302 Redirect to /.
No visually broken board is rendered.` },
    ],
  },
  'E07-S01-T02': {
    runs: [
      { s: 'PASS', q: 'Robustness Verified', e: 'Production (Render) / Chrome', d: '2026-04-23' },
    ],
  },
  'E07-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-23' },
    ],
  },
  'E07-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-23' },
    ],
  },
  'E07-S01-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Postman', d: '2026-04-23' },
    ],
  },
  'E07-S02-T02': {
    runs: [
      { s: 'PASS', q: 'UI Hang Resolved', e: 'Production (Render) / Chrome', d: '2026-04-23', n: `Verified the fix for a "stuck" UI state during history navigation.

The Problem: During testing, I discovered that navigating back from /cartas to the Home page left the "vamos começar" button permanently disabled and stuck with the "carregando..." text. This happened because modern browsers use bfcache to save a snapshot of the page; since the user left the page while the button was processing, it remained in that state upon return.
The Solution: I implemented a pageshow event listener. Unlike DOMContentLoaded (which only runs on the first load), pageshow fires every time the page is displayed, even when restored from the browser's cache.
Result: The code now explicitly "unlocks" the submit button and resets the visual state of the card selection buttons whenever the user returns to the page. This ensures the form is always fresh and interactive, preventing the user from being trapped in a "loading" state.
Action: Click "Back" from /cartas.
Result: Button instantly reverts to "vamos começar" and all card selections are visually cleared. Form is ready for a new session.` },
    ],
    fix: ['d98fd08'],
  },
  'E07-S02-T03': {
    runs: [
      { s: 'PASS', q: 'State Machine & Navigation Saga Resolved', e: 'Production (Render) / Chrome', d: '2026-04-23', n: `Verified the final "One Reading Per Session" architecture across all navigation scenarios.

Persistence (Tests 1 & 2): Confirmed that readings survive page reloads and Forward navigation. The Redis cache successfully serves the original reading instantly, preventing redundant API calls.

UI Integrity: Verified that navigating Back to /cartas correctly displays the "leitura já iniciada" locked state via the pageshow listener and reading_committed flag.

The "Bfcache" Fix (Test 3): Resolved a critical bug where the browser's Back button bypassed the server-side reset. By moving the Redis deletion logic (reading_cache and chat_history) to the /process_form POST route, we guaranteed a synchronous, unbreakable reset the exact moment a new game begins.

Conclusion: The application is now fully resilient to browser history quirks (bfcache), ensuring a consistent gameplay loop and 100% accurate state management.
Test 1: Instant reload from Redis (Success).
Test 2: Back/Forward persistence (Success).
Test 3: Full reset on new game without manual refresh (Success).` },
    ],
    fix: ['12c90a4', '00424e3', '47c118f'],
  },
  'E07-S02-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-23' },
    ],
  },
  'E07-S02-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-23' },
    ],
  },
  'E07-S02-T06': {
    runs: [
      { s: 'PASS', q: 'State Management & Navigation Saga Resolved', e: 'Production (Render) / Chrome', d: '2026-04-24', n: `Summary of the Problem & Fix:
Resolved a complex series of state-mismatch bugs caused by browser history (bfcache) and page refreshes across the / ↔ /cartas ↔ /results flow. Previously, refreshing /cartas unlocked a dead board, and starting a new game from a cached Home page incorrectly loaded old cards.

Final Implementation:

Accurate Privacy Guard: Upgraded to the PerformanceNavigationTiming API to correctly distinguish between tab closures, page refreshes, and Back/Forward navigation.

SSR "Locked" Board: Used Jinja2 branching in cartas.html to natively render a read-only, locked stage if choosed_cards already exists in the session.

Bulletproof Reset: Centralized the game reset logic inside the un-cacheable /process_form POST route (session.pop('choosed_cards') + Redis clears). This guarantees a 100% clean slate when starting a new game, bypassing bfcache limitations.

Conclusion: The "One Reading Per Session" rule is now strictly enforced. Users can safely use Back, Forward, and Refresh without corrupting the game state or leaking data between sessions.` },
    ],
    fix: ['ff9108b', '4016ca6'],
  },
  'E07-S03-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S03-T05': {
    runs: [
      { s: 'PASS', q: 'Behavior Updated via Caching Architecture', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S03-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S04-T01': {
    runs: [
      { s: 'PASS', q: 'Behavior Optimized via Redirect', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S04-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S04-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S05-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Development (localhost)', d: '2026-04-24' },
    ],
  },
  'E07-S05-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-24' },
    ],
  },
  'E07-S05-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-24' },
    ],
  },
  'E07-S05-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Server Logs', d: '2026-04-24' },
    ],
    fix: ['ec937bf'],
  },
  'E07-S06-T01': {
    runs: [
      { s: 'PASS', q: 'Behavior Documented', e: 'Production (Render) / Simulated Outage', d: '2026-04-24' },
    ],
  },
  'E07-S06-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-24' },
    ],
    fix: ['289cc18'],
  },
  'E07-S06-T03': {
    runs: [
      { s: 'PASS', q: 'Behavior Documented', e: 'Production (Render) / Simulated Outage', d: '2026-04-24' },
    ],
  },
  'E07-S06-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / http://Redis.io', d: '2026-04-24' },
    ],
  },
  'E07-S07-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S07-T02': {
    runs: [
      { s: 'PASS', q: 'Privacy Guard Verified', e: 'Production (Render) / Chrome', d: '2026-04-24' },
    ],
  },
  'E07-S07-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-27' },
    ],
    fix: ['0fe3b85', 'b8e11b3'],
  },
  'E07-S07-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / RedisInsight', d: '2026-04-27' },
    ],
  },
  'E08-S01-T01': {
    runs: [
      { s: 'PASS', q: 'Test Methodology Improved', e: 'Production (Render) / Chrome Console', d: '2026-04-27' },
    ],
  },
  'E08-S01-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-27' },
    ],
  },
  'E08-S01-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-27' },
    ],
  },
  'E08-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-27' },
    ],
  },
  'E08-S01-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Development (localhost)', d: '2026-04-27' },
    ],
  },
  'E08-S01-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-27' },
    ],
  },
  'E08-S02-T01': {
    runs: [
      { s: 'PASS', q: 'Finding Confirmed', e: 'Production (Render) / http://example.com  Console', d: '2026-04-28', n: `Verified that the WebSocket server allows connections from unauthorized origins.

Methodology: Injected the http://Socket.IO  client into a neutral third-party domain (http://example.com ) and attempted to establish a connection to the production server.
Result: The connection was successfully established, and the server issued a valid Socket ID (SID).
Conclusion: This confirms that the cors_allowed_origins="*" configuration in app.py successfully bypasses the browser's Same-Origin Policy for WebSockets. While this allows any site to connect, the security of the application now relies entirely on the manual CSRF token validation within specific events (to be verified in Subtask 2).
Console Output: SUCCESS: Connected to ArcanaFutura! Your SID is: Crtgr1kHGgAKYaGOAAAB` },
    ],
  },
  'E08-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / http://example.com  Console', d: '2026-04-28' },
    ],
  },
  'E08-S02-T03': {
    runs: [
      { s: 'FAIL', q: 'Critical Vulnerability Confirmed', e: 'Production (Render) / http://example.com  Console', d: '2026-04-28', n: `Confirmed a Cross-Site WebSocket Hijacking (CSWSH) vulnerability on the send_message endpoint.

Execution: Emitted a send_message payload from an unauthorized external origin (http://example.com ).

Result: The backend successfully processed the request and returned an AI-generated response (a joke).

Root Cause: The send_message event in app.py lacks the manual CSRF validation check that protects the start_generation event. Combined with the cors_allowed_origins="*" configuration, this allows any external website to silently connect to the WebSocket and consume the application's Gemini API quota.

Action Item: Implement CSRF validation on the send_message event to match the security posture of start_generation.` },
      { s: 'PASS', q: 'Vulnerability Patched', e: 'Production (Render) / example.com Console', d: '2026-04-28', n: `Verified the resolution of the Cross-Site WebSocket Hijacking (CSWSH) vulnerability on the send_message endpoint.

Fix Implemented: Added CSRF token validation to the handle_message backend event and updated the frontend payload to include the token.
Verification: Re-executed the exploit script from an external origin (example.com).
Result: The backend successfully intercepted the unauthorized request, blocked the AI generation, and returned a generation_error with the message: "CSRF token missing." The API quota is now fully protected against external WebSocket abuse.` },
    ],
    fix: ['78799f3'],
  },
  'E08-S02-T04': {
    runs: [
      { s: 'FAIL', q: 'Security Vulnerability Confirmed', e: 'Code Review / Production', d: '2026-04-28', n: `Confirmed that cors_allowed_origins="*" is currently hardcoded in app.py during SocketIO initialization. This wildcard policy allows any external domain to establish a WebSocket connection to the production server. While individual events are protected by CSRF tokens, the open connection policy leaves the server vulnerable to connection-exhaustion (DDoS) attacks.

Action Item: Update app.py to dynamically restrict cors_allowed_origins to "https://arcanafutura.onrender.com in production, while allowing * for local development.` },
      { s: 'PASS', q: 'Vulnerability Patched', e: 'Production (Render) / Code Review', d: '2026-04-28', n: `Verified and resolved the wildcard CORS vulnerability on the WebSocket server.

Code Audit: Confirmed that cors_allowed_origins="*" was hardcoded, allowing any external domain to establish a WebSocket handshake with the server.

Fix Implemented: Refactored app.py to dynamically assign CORS origins based on the environment. The is_production flag was hoisted above the SocketIO initialization.

Security Posture: In production, cors_allowed_origins is now strictly limited to "https://arcanafutura.onrender.com. This prevents unauthorized domains from establishing connections, mitigating connection-exhaustion (DDoS) attacks and providing Defense in Depth alongside the existing CSRF event guards.

Dev Experience: Local development remains unaffected, as the policy safely falls back to * when the RENDER environment variable is absent.` },
    ],
  },
  'E08-S03-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-28' },
    ],
  },
  'E08-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-28' },
    ],
  },
  'E08-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Development (localhost)', d: '2026-04-28' },
    ],
  },
  'E08-S04-T01': {
    runs: [
      { s: 'PASS', q: 'Bug Fixed', e: 'Production (Render) / Chrome Console', d: '2026-04-28', n: `Verified the resolution of the CSRF vulnerability on the send_message endpoint.

Verification: Manually emitted a send_message event via the console without a csrf_token.
Result: The backend successfully intercepted the request and returned a generation_error ("CSRF token missing") instead of processing the message.

Conclusion: The security gap has been closed; the chat interface now requires a valid, session-bound token for every interaction, matching the security posture of the initial reading generation.
Console Input: socket.emit("send_message", { message: "...", tarot_reading: "" });
Server Response: Message: CSRF token missing. (Success)` },
    ],
  },
  'E08-S04-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome Console', d: '2026-04-28' },
    ],
  },
  'E08-S04-T03': {
    runs: [
      { s: 'FAIL', q: 'Security Gap Confirmed', e: 'Production (Render) / Chrome Console', d: '2026-04-28', n: `Confirmed that the application's rate limiting does not extend to WebSocket events.

Execution: Performed a stress test by emitting 200 send_message events rapidly via the browser console.

Result: The application attempted to process the requests without triggering an HTTP 429 error.

Root Cause: Flask-Limiter is designed for standard HTTP routes and does not natively intercept http://Socket.IO  event handlers.

Risk: An authenticated user (with a valid CSRF token) could script a loop to drain the Gemini API quota or perform a Denial of Service (DoS) attack on the background worker threads.

Action Item: Implement manual rate limiting inside the WebSocket event handlers using the existing Redis backend.` },
      { s: 'PASS', q: 'Security Gap Resolved', e: 'Production (Render) / Chrome Console', d: '2026-04-28', n: `Verified the implementation of a custom in-memory sliding window rate limiter to protect WebSocket events, which previously bypassed standard HTTP limits.

Implementation: Developed a robust is_rate_limited function in app.py using a defaultdict to track message timestamps. This enforces a strict "10 messages per 60 seconds" rolling window per session.

Verification: Executed a stress test via the browser console, emitting 12 send_message events simultaneously.

Actual Results: The backend successfully processed exactly 10 messages and invoked the Gemini API for each. The 11th and 12th messages were correctly intercepted and blocked by the limiter.

Security Impact: Confirmed that the application is now protected against automated WebSocket spam, successfully preventing API quota exhaustion and potential DoS attacks on background worker threads.
Sent: 12 messages.
AI Responses Received: 10 (Limit enforced).
Backend Logs: Confirmed rate-limit logic triggered for attempts 11 and 12.` },
    ],
    fix: ['979009d', '2bbf0be'],
  },
  'E08-S04-T04': {
    runs: [
      { s: 'PASS', q: 'Recommendation Implemented', e: 'Production (Render) / Code Review', d: '2026-04-28', n: `The security recommendation to implement CSRF validation on the WebSocket chat endpoint has been fully executed.

Backend Fix: Updated handle_message in app.py to include a mandatory validate_csrf(csrf_token) check. The handler now correctly emits a generation_error and aborts if the token is missing or invalid.
Frontend Fix: Updated the sendMessage() function in results.html to include the csrf_token in the JSON payload, ensuring legitimate users can communicate with the AI.
Verification: Confirmed via the "Hacker Script" from an external origin (http://example.com ) that unauthorized chat attempts are now successfully blocked.
Conclusion: The CSWSH (Cross-Site WebSocket Hijacking) vulnerability is resolved. The chat interface now meets the application's high security standards.` },
    ],
  },
  'E08-S05-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-28' },
    ],
  },
  'E08-S05-T02': {
    runs: [
      { s: 'PASS', q: 'Security Verified / Bug Resolved', e: 'Production (Render) / Chrome', d: '2026-04-28', n: `Verified the synchronization between the HTML nonce and the HTTP CSP header.

Header Inspection: Confirmed that the content-security-policy header now explicitly includes the dynamic nonce within the script-src directive (e.g., 'nonce-u2EaMDdzo...').
Security Hardening: Verified that 'unsafe-inline' has been successfully removed from the policy.
Conclusion: The previous "decoration only" vulnerability is resolved. The browser now strictly requires a matching nonce for all inline scripts, providing robust protection against XSS. The implementation is 100% correct.
CSP Header: script-src 'self' https://cdnjs.cloudflare.com  'nonce-...' (Confirmed).` },
    ],
  },
  'E08-S05-T03': {
    runs: [
      { s: 'PASS', q: 'Security Enforcement Verified', e: 'Production (Render) / Chrome Console', d: '2026-04-29' },
    ],
  },
  'E08-S05-T04': {
    runs: [
      { s: 'PASS', q: 'Remediation Implemented', e: 'Production (Render) / Code Review', d: '2026-04-29', n: `The security recommendation to implement dynamic CSP nonces has been fully executed.

Implementation: Instead of the manual function approach, the application now uses Flask-Talisman's native content_security_policy_nonce_in=['script-src'] feature.
Hardening: The dangerous 'unsafe-inline' directive was removed from app.py.
Template Integration: All HTML templates were updated to use the native  csp_nonce()  helper.
Result: Per-request cryptographic nonces are now strictly enforced, successfully closing the XSS vulnerability identified during the audit.` },
    ],
  },
  'E08-S05-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-29' },
    ],
  },
  'E08-S06-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-29' },
    ],
  },
  'E08-S06-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Local Development (localhost)', d: '2026-04-29' },
    ],
  },
  'E08-S06-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Localhost:3000 (BrowserSync Proxy)', d: '2026-04-29' },
    ],
  },
  'E08-S06-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-29' },
    ],
  },
  'E08-S07-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render)', d: '2026-04-29' },
    ],
  },
  'E08-S07-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-device', d: '2026-04-29' },
    ],
  },
  'E08-S07-T03': {
    runs: [
      { s: 'FAIL', q: 'Rate Limit Bypass Confirmed', e: 'Production (Render) / Terminal (curl)', d: '2026-04-29', n: `Actual Results:
The application failed to prevent X-Forwarded-For header spoofing, allowing the rate limit to be bypassed.

Execution: Sent 10 rapid requests to /results using curl, injecting a fake IP header: -H "X-Forwarded-For: 1.2.3.4".
Observation: All 10 requests were accepted by the server (returning HTTP 302 redirects to /cartas). The expected HTTP 429 Too Many Requests error was never triggered, even after exceeding the 5-request limit.
Root Cause: The current ProxyFix(x_for=2) configuration is too trusting. By trusting two hops, the application allows the client to manipulate the IP address chain. This results in the rate limiter seeing a rotating internal proxy IP or the spoofed IP as a "trusted" source, effectively nullifying the protection.
Security Risk: A malicious actor can use this technique to perform a Distributed Denial of Service (DDoS) attack or exhaust the Gemini API quota by simply rotating the IP address in the header.
Command: curl -I -H "X-Forwarded-For: 1.2.3.4" ...
Result: 10 consecutive HTTP/2 302 responses. No 429 detected.` },
      { s: 'PASS', q: 'Vulnerability Patched', e: 'Production (Render) / Terminal (curl)', d: '2026-04-29', n: `Verified that ProxyFix(x_for=1) successfully prevents X-Forwarded-For header spoofing.

Execution: Sent rapid requests using curl while injecting a fake IP address (1.2.3.4) into the headers.
Result: The server ignored the spoofed IP and correctly tracked the real client origin.
Enforcement: After the 7th request, the server successfully returned HTTP 429 Too Many Requests, proving the rate limiter is now un-hackable via header manipulation.
Requests 1-7: HTTP/2 302 (Accepted/Redirected)
Request 8+: HTTP/2 429 (Blocked)` },
    ],
    fix: ['7ba8af0'],
  },
  'E08-S07-T04': {
    runs: [
      { s: 'FAIL', q: 'Infrastructure Limitation Documented', e: 'Production (Render) / RedisInsight', d: '2026-04-29', n: `Verified the IP format stored in the Redis rate-limit keys.

Observation: Confirmed that the Redis keys (e.g., LIMITS:LIMITER/10.31.46.2/...) are currently storing Render's internal load balancer IP instead of the client's public IP ([IP]).
Root Cause: This is a direct result of the security hardening performed in Subtask 3. By setting ProxyFix(x_for=1) to prevent header spoofing, the application now only trusts the final hop in the proxy chain.
Security Trade-off: While this configuration ensures the rate limiter cannot be bypassed by malicious headers, it results in a "Global Rate Limit" where multiple users may be grouped under the same internal IP.
Recommendation: For the scope of this project, the current configuration is accepted as it prioritizes Security (Anti-Spoofing) over IP Granularity. In a high-traffic production environment, a more complex proxy trust-list or the use of the CF-Connecting-IP header would be required.
Real IP: [IP]
Redis Key IP: 10.31.46.2 (Render Internal)` },
    ],
  },
  'E09-S01-T01': {
    runs: [
      { s: 'PASS', q: 'Bug Fixed & Architecture Upgraded', e: 'Production (Render) / Chrome (Network Throttling)', d: '2026-04-29', n: `Verified the application's recovery from a hard network disconnect during the loading state.

Previous Bug Resolved: The "infinite loading" vulnerability has been completely patched by the new WebSocket lifecycle architecture.

Execution: Disconnected Wi-Fi immediately after clicking "vamos fazer a leitura".

UI Feedback: The frontend successfully detected the drop, displaying the "Conexão perdida. Tentando reconectar..." status bar instead of leaving the user guessing.

Auto-Recovery: Upon restoring the Wi-Fi, the http://Socket.IO  client successfully reconnected, automatically re-emitted the start_generation payload, and instantly retrieved the completed reading from the backend Redis cache.
Infinite loading prevented.
Seamless recovery without requiring a manual page refresh.` },
    ],
  },
  'E09-S01-T02': {
    runs: [
      { s: 'PASS', q: 'Bug Fixed via Reconnection Architecture', e: 'Production (Render) / Chrome Console', d: '2026-04-29', n: `Verified the UI and Backend handling of http://Socket.IO  reconnection events and SID (Socket ID) rotation.

Previous Bug Resolved: The issue where the server emitted the reading to a "dead" SID (leaving the new connection hanging) has been completely resolved.
Execution: Manually executed socket.disconnect() followed by socket.connect() in the console during the generation phase to force a new SID assignment.
Recovery Flow: The frontend socket.on('connect') listener successfully detected the new connection and automatically re-emitted the start_generation payload.
Backend Routing: The backend successfully identified the user via their persistent Flask session cookie, retrieved the reading from the Redis cache, and emitted the generation_complete event to the newly assigned SID.
Console: socket.disconnect() -> socket.connect()
Result: Reading successfully delivered to the new connection. No infinite loading.` },
    ],
  },
  'E09-S01-T03': {
    runs: [
      { s: 'FAIL', q: 'Known Architectural Limitation - Won\'t Fix', e: 'Production (Render) / Same-Browser Multi-Tab', d: '2026-04-29', n: `Verified concurrent WebSocket isolation across multiple tabs sharing the same browser session.

Observation: When running two concurrent game loops in separate tabs within the same browser, severe state contamination occurred. Both tabs ultimately received the exact same AI reading, which contained a mix of prompts from both tabs.
Root Cause Analysis (State Overwrite): Because Flask uses a single session cookie per browser, Tab B's form submission overwrote Tab A's intencao and selected_cards in the session store.
Root Cause Analysis (Cache Collision): Because the Redis reading_cache uses the Flask Session ID as its key to support page reloads, both tabs queried the exact same cache key. Tab B hit the cache generated by Tab A and returned it instantly.
Product Decision: This is a standard limitation of cookie-based session architecture in multi-step web forms. Refactoring to a stateless, game_id-based architecture is out of scope. Users are not expected to perform simultaneous distinct Tarot readings in parallel …` },
    ],
  },
  'E09-S01-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-29' },
    ],
  },
  'E09-S01-T05': {
    runs: [
      { s: 'PASS', q: 'Behavior Updated via Robust Recovery Architecture', e: 'Production (Render) / Chrome (Network Throttling)', d: '2026-04-29' },
    ],
  },
  'E09-S02-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Mozilla Firefox', d: '2026-04-29' },
    ],
  },
  'E09-S02-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Safari (macOS)', d: '2026-04-29' },
    ],
  },
  'E09-S02-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / iOS Safari (via BrowserStack)', d: '2026-04-29' },
    ],
  },
  'E09-S02-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Safari (macOS/iOS via BrowserStack)', d: '2026-04-29' },
    ],
  },
  'E09-S02-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Firefox, Safari, Edge', d: '2026-04-29' },
    ],
  },
  'E09-S02-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Firefox & Safari', d: '2026-04-29' },
    ],
  },
  'E09-S03-T02': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-29' },
    ],
  },
  'E09-S03-T03': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-29' },
    ],
  },
  'E09-S03-T04': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-29' },
    ],
  },
  'E09-S03-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-29' },
    ],
  },
  'E09-S03-T06': {
    runs: [
      { s: 'PASS', q: 'Accessibility Bug Fixed', e: 'Production (Render) / Chrome', d: '2026-04-29', n: `Resolved keyboard accessibility issues within the Chat Interface.

Escape Key Support: Implemented a global keydown listener to ensure the "Escape" key successfully dismisses the chat modal and background overlay.
Focus Management: Updated the chat initialization logic to automatically focus the #user-input field upon opening. This ensures a logical Tab order (Input → Send → Close) for keyboard-only users.
Verification: Confirmed that the chat can be opened, navigated, and closed entirely via keyboard without the use of a mouse.
Action: Press Esc while chat is open -> Chat closes.
Action: Open chat -> Cursor is active in input field.
Action: Press Tab -> Focus moves to "Enviar" then "X".` },
    ],
    fix: ['7e8ac26'],
  },
  'E09-S03-T07': {
    runs: [
      { s: 'PASS', q: 'Accessibility Hardening Complete', e: 'Production (Render) / Chrome', d: '2026-04-29', n: `Implemented a "Focus Trap" to ensure the Chat Interface meets WCAG accessibility standards.

Focus Containment: Added a keydown listener to the #chat-interface that intercepts the Tab and Shift+Tab keys. Focus is now strictly contained within the modal loop (Close Button ↔ Input ↔ Send Button).
Context Preservation: Updated the closeChatButton logic to return focus to the #open-chat trigger upon dismissal. This prevents "focus loss," allowing keyboard users to maintain their position on the page after closing the chat.
Verification: Confirmed that focus cannot escape to the background elements while the chat is active.
Action: Tab from "Enviar" -> Focus moves to "X".
Action: Shift+Tab from "X" -> Focus moves to "Enviar".
Action: Close chat -> Focus returns to "quer conversar mais..." button.` },
    ],
    fix: ['3b57d58'],
  },
  'E09-S04-T01': {
    runs: [
      { s: 'PASS', q: 'Accessibility Improved', e: 'Production (Render) / Chrome Accessibility Pane', d: '2026-04-29' },
    ],
    fix: ['aa4eaeb'],
  },
  'E09-S04-T02': {
    runs: [
      { s: 'PASS', q: 'Accessibility Hardening', e: 'Production (Render) / Chrome Accessibility Pane', d: '2026-04-29', n: `Implemented ARIA Live Regions to ensure non-visual users are notified of asynchronous content updates.

Loading State: Added role="status" and aria-live="polite" to the #loading-message. Verified that screen readers now prioritize and announce the loading status upon landing on the results page.
Content Arrival: Added aria-live="polite" to the #tarot-reading container. This ensures that the AI-generated interpretation is automatically announced the moment it is injected into the DOM via WebSocket, eliminating "silent" content updates.
Verification: Confirmed via DevTools that the elements are correctly identified as live regions by the browser's accessibility tree.
Loading Message: aria-live="polite" (Confirmed).
Reading Container: aria-live="polite" (Confirmed).` },
    ],
    fix: ['ef99f0c'],
  },
  'E09-S04-T04': {
    runs: [
      { s: 'PASS', q: 'WCAG AA UI Component Standard Met', e: 'Production (Render) / Chrome DevTools Contrast Tool', d: '2026-04-30' },
    ],
    fix: ['28946f5', 'af3a3a4'],
  },
  'E09-S04-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome DevTools (Vision Emulation)', d: '2026-04-30' },
    ],
  },
  'E09-S05-T01': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-30' },
    ],
  },
  'E09-S05-T02': {
    runs: [
      { s: 'PASS', q: 'Performance Baseline Accepted', e: 'Production (Render) / Lighthouse Mobile Audit', d: '2026-04-30' },
    ],
    fix: ['3ed2446'],
  },
  'E09-S05-T03': {
    runs: [
      { s: 'PASS', q: 'Performance Baseline Established', e: 'Production (Render) / Gemini 3-12b-it / WebSocket', d: '2026-04-30' },
    ],
  },
  'E09-S05-T04': {
    runs: [
      { s: 'PASS', q: 'Performance Baseline Established', e: 'Production (Render) / Gemini 3-12b-it / WebSocket Chat', d: '2026-04-30' },
    ],
  },
  'E09-S05-T05': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Chrome', d: '2026-04-30' },
    ],
  },
  'E09-S05-T06': {
    runs: [
      { s: 'PASS', q: '', e: 'Production (Render) / Multi-browser Stress Test', d: '2026-04-30' },
    ],
  },
  'E09-S05-T07': {
    runs: [
      { s: 'PASS', q: 'Intentional Configuration', e: 'Production (Render) / Chrome', d: '2026-04-30' },
    ],
  },
};
