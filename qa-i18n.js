// qa-i18n.js
//
// Page-specific translation dictionary for qa.html — merged into the shared
// I18n engine (see i18n.js) via I18n.extend(). Everything shared with the
// main site (nav labels, loader alt text, the "get in touch" form) already
// lives in i18n.js and is reused here for free; this file only adds the
// "qa" namespace with content unique to the QA portfolio page.
//
// STATUS: Round 1 — page structure/chrome is translated (hero, section tab
// labels, project titles + intro paragraphs, action-link labels, tech-stack
// category labels, bug-meta field labels, the "about me" and footer text).
// The deep technical write-ups for each bug/epic and the SVG diagram labels
// are being translated next, project by project (ArcanaFutura → Brasil 2040
// → Playwright), and will be merged into this same file so it stays the
// single place to edit QA-page wording.

const qaTranslations = {
    en: {
        qa: {
            hero: {
                arcana: { light: 'quality is not', bold: 'an accident' },
                brasil2040: { light: "you can't trust", bold: "what you can't measure" },
                playwright: { light: 'flaky is not', bold: 'a diagnosis' },
            },
            tabs: {
                arcanaProject: '01 — Project',
                arcanaSystem: '02 — System',
                arcanaStrategy: '03 — Strategy',
                arcanaFindings: '04 — Findings',
                arcanaScope: '05 — Test Plan Scope',
                arcanaAutomation: '05 — Automation',

                brasilProject: '01 — Project',
                brasilSystem: '02 — System',
                brasilEmbedding: '03 — Embedding Pipeline',
                brasilEvalStrategy: '04 — Eval Strategy',
                brasilFindings: '05 — Findings',
                brasilAgentTest: '06 — AI Agent Test',
                brasilAutomation: '07 — Automation',

                pwProject: '01 — Project',
                pwSystem: '02 — System',
                pwLocator: '03 — Locator Strategy',
                pwFindings: '04 — Findings',
                pwScope: '05 — Test Plan Scope',
                pwCicd: '06 — CI/CD Journey',
                pwAutomation: '07 — Automation Approach',

                theEngineer: 'The Engineer',
            },
            bugMetaKey: {
                severity: 'Severity',
                ref: 'Ref',
                method: 'Method',
                mode: 'Mode',
                artifact: 'Artifact',
                category: 'Category',
                fixPattern: 'Fix pattern',
                passCondition: 'Pass condition',
                questions: 'Questions',
                rootCause: 'Root cause',
                status: 'Status',
                symptom: 'Symptom',
                threshold: 'Threshold',
            },
            arcana: {
                title: 'ArcanaFutura QA Audit',
                intro1:
                    '<strong>ArcanaFutura</strong> is an AI-powered Tarot reading web application, developed as ' +
                    'the final project for Harvard University\'s CS50 course. The system features a multi-step ' +
                    'user flow, interactive DOM manipulation, and real-time streaming of LLM-generated ' +
                    'readings.',
                intro2:
                    'This material details the security and infrastructure audit conducted on the ' +
                    'application. The process identified and fixed flaws in API quota protection, ' +
                    'state management, and protocol boundaries. All fixes were validated by an ' +
                    'automated regression test suite in Pytest.',
                tldr: {
                    label: 'TL;DR',
                    li1: '340 manual test cases across 9 epics: onboarding & session, card ' +
                        'selection & state, AI reading generation (WebSocket), contextual AI chat, ' +
                        'responsive design, security/performance/infra, navigation & error handling, ' +
                        'security headers & CORS, and cross-browser & accessibility, run before any ' +
                        'automated coverage existed.',
                    li2: '5 critical findings written up in depth: Global Deck Mutation (data ' +
                        'corruption under concurrency), Rate Limiter Bypass (IP spoofing via ' +
                        'X-Forwarded-For), Cross-Site WebSocket Hijacking (CSWSH), JS Context Breakout ' +
                        '(an injection that beats the sanitizer) and Dead SID / Orphan Connection ' +
                        '(infinite loop with silent quota drain).',
                    li3: 'The Agile/Scrum test plan fed into automated tests running in CI on every ' +
                        'commit, following the <code>xfail</code> pattern, the test starts red, ' +
                        'documenting the bug and only turns green once the fix lands.',
                },
                links: {
                    liveApp: 'View Live App',
                    github: 'GitHub Repository',
                    matrix: 'Full 340-Point Test Matrix',
                },
                tech: {
                    qaTools: 'QA & Testing Tools:',
                    security: 'Security & Infrastructure:',
                    architecture: 'Core Architecture:',
                },
                ciLabel: 'Automated Pytest suite running on every commit',
                sections: {
                    threatMapIntro:
                        '<strong>Architectural Threat Map:</strong> The QA audit evaluated 340 points and found around 40 defects. ' +
                        'The following breakdown focuses on the five highest-impact vulnerabilities, ' +
                        'distributed across different architectural layers. Two of them were located in the ' +
                        "Flask runtime (memory mutation and template injection), one at the proxy boundary (IP spoofing) " +
                        'and two in the WebSocket channel (inbound hijacking and outbound Dead SID).',
                    strategyP1:
                        'I structured the QA process based on the Scrum methodology, creating <strong>9 ' +
                        'Epics</strong> and <strong>54 User Stories</strong>. This resulted in <strong>over 340 subtasks</strong> tracked in Jira. ' +
                        'Since this was my first QA-focused project, I prioritized manual testing in the initial phase. ' +
                        'I wanted to build a solid foundation before moving on to automation. Although my subsequent projects (Brasil 2040 and the Playwright suite) ' +
                        'were born automated, here I needed to understand in practice how bugs ' +
                        'reveal themselves when a user freely explores the application, without a script guiding every step. ',
                    strategyP2:
                        'Automation entered the project as a protection layer. To define what to automate, ' +
                        'I applied a triage filter based on a simple question: ' +
                        '"If this fails, will the application crash, suffer a breach, or generate costs?". ' +
                        'With this, visual and animation validations remained manual. Meanwhile, critical security points, ' +
                        'API quota control, and the system\'s core logic were covered by a Pytest suite. ' +
                        'This approach created a safety net for regression testing, ensuring that ' +
                        'fixes made during QA would not break already validated behaviors.',
                    strategyResult:
                        '<strong>Result:</strong> A test plan with 340 subtasks in Jira, backed ' +
                        'by over 100 automated tests integrated into GitHub Actions for continuous validation in CI/CD.',
                    findingsIntro:
                        'Selected from nearly 40 identified defects, the vulnerabilities explained in this section are the most critical found during the audit. ' +
                        'For each one, I documented the observed flaw, the real impact on the infrastructure (or user data), and the applied fix, ' +
                        'always validated by regression tests to ensure the problem does not recur or that an update does not break what has already been done, ' +
                        'ensuring long-term stability.',
                    scopeIntro:
                        'The more than 340 manual test cases were organized into 9 Epics and 54 User Stories, ' +
                        'mapped to cover all layers of the application. The QA strategy was designed to validate the ' +
                        'complete user experience (End-to-End) and the infrastructure. ' +
                        'Each Epic focused on a specific domain: CSS animation fluidity, mobile layout responsiveness, ' +
                        'Redis session storage integrity, WebSocket event security, and the accuracy of the prompt sent to the AI. ' +
                        'The goal of the manual phase was to explore the system\'s limits, testing unexpected browser behaviors ' +
                        '(such as the use of the "Back" button and the bfcache), usability on small screens, accessibility for screen readers, and interface resilience during network drops.',
                    autoColHead1: 'What Pytest automated',
                    autoColBody1:
                        'The suite covers the behavior of backend routes, session state integrity across requests, ' +
                        'input sanitization down to the AI prompt, mandatory CSRF token validation on all mutation endpoints, ' +
                        'and WebSocket handler security (using the Flask-SocketIO test client). All tests access ' +
                        'the real application code; no mocks were used in the security validations.',
                    autoColHead2: 'What was explicitly not automated',
                    autoColBody2:
                        'CSS transitions, animation timing, mobile viewport breakpoints, ' +
                        'and orientation-based layout changes. Validating these points requires a real browser rendering engine, ' +
                        'which falls within the scope of tools like Playwright or Cypress, not a unit test runner. ' +
                        'Documenting this boundary is part of the testing strategy to define ' +
                        'clearly the responsibility of each tool in the architecture.',
                    xfailHead: 'The xfail pattern (Test-driven bug fixing)',
                    xfailBody:
                        'Two known vulnerabilities (a <code>KeyError</code> crash in the handler ' +
                        'and an unbounded input) were mapped with the <code>@pytest.mark.xfail</code> decorator before the fix was applied to the source code. ' +
                        'This documented each flaw with a reproducible case, which automatically converted ' +
                        'into a passing test as soon as the bug was resolved. Ensuring that a test fails (red) before passing (green) ' +
                        'is a much more solid engineering proof than writing the test only after the fix.',
                    transparencyNote:
                         '<strong>Transparency Note:</strong> The automated test code was written ' +
                        'with the support of AI pair-programming tools. My role was to design the testing ' +
                        'strategy, identify edge cases through manual exploratory testing, ' +
                        'and rigorously review the generated code against the application logic. Using AI to accelerate test writing (boilerplate) ' +
                        'is a pragmatic practice I adopt to optimize development time in day-to-day QA.',
                },
                bugs: {
                    b1: {
                        title: '1. Global Deck Mutation: <strong>Concurrency and Data Corruption</strong>',
                        severity: 'Critical | Silent Data Corruption',
                        method: 'Global state code review + concurrent request simulation',
                        whatBroke:
                            '<strong>The problem:</strong> The code was modifying the main <code>TAROT_CARDS</code> ' +
                            'card list instead of generating a copy for each user. ' +
                            'The card orientation ("normal" or "reversed") ' +
                            'was written directly to the server\'s global variable.',
                        impact:
                            '<strong>Real impact:</strong> Since the deck in memory was shared, one user\'s reading interfered with another\'s. ' +
                            'If User A drew reversed cards, User B (and all subsequent users) would receive the deck ' +
                            'already biased with the orientations left by User A. The system did not ' +
                            'crash or generate error logs (it returned HTTP 200 normally), ' +
                            'but it destroyed the Tarot\'s randomness and ' +
                            'silently delivered corrupted readings.',
                        fix:
                            '<strong>The fix:</strong> Create an isolated copy of the deck for each request before shuffling and modifying: ' +
                            '<code>deck_copy = [card.copy() for card in TAROT_CARDS] </code> ',
                        label: 'Regression test, verify global immutability',
                    },
                    b2: {
                        title: '2. Rate Limiter Bypass: <strong>IP Spoofing via X-Forwarded-For</strong>',
                        severity: 'Critical | Infrastructure / DoS and Quota Theft',
                        method: 'Header injection via cURL + Redis key inspection',
                        whatBroke:
                            '<strong>The problem:</strong> The <code>ProxyFix</code> middleware, used to identify the user\'s IP behind Render\'s proxy, was misconfigured. ' +
                            'If disabled, the system read the Render server IP for all users. ' +
                            'If configured with excessive trust (<code>x_for=2</code>), ' +
                            'it accepted spoofed IPs sent by the user in the <code>X-Forwarded-For</code> header.',
                        impact:
                            '<strong>Real impact:</strong> This caused two severe problems. First, ' +
                            'all site users shared the same request limit, so if one person hit the limit, all other users were blocked simultaneously (Error 429). ' +
                            'Second, an attacker could send a spoofed header (e.g., <code>X-Forwarded-For: 127.0.0.1</code>), ' +
                            'tricking the server into treating them as a new user on every click. ' +
                            'This allowed bypassing the 5 readings/minute limit and draining the paid Gemini API quota indefinitely.',
                        fix:
                            '<strong>The fix:</strong> Adjust the configuration to <code>ProxyFix(app.wsgi_app, x_for=1, ...</code>). ' +
                            'This instructs Flask to trust only the last network hop (Render itself), ' +
                            'ignoring spoofed IPs and correctly identifying the real client.',
                        label: 'Regression test, two failure modes, two functions',
                    },
                    b3: {
                        title: '3. Cross-Site <strong>WebSocket Hijacking</strong> (CSWSH)',
                        severity: 'Critical | API Security / Quota Theft',
                        method: 'Socket.IO injection via external domain',
                        whatBroke:
                            '<strong>The problem:</strong> HTTP routes were protected, but the WebSocket event responsible for the chat ' +
                            '(<code>send_message</code>) did not require CSRF token validation. ' +
                            'Additionally, the CORS policy was wide open (<code>cors_allowed_origins="*"</code>). ' +
                            'To make matters worse, the <code>Flask-Limiter</code> library does not ' +
                            'work on WebSocket connections, leaving the endpoint completely without rate limiting.',
                        impact:
                            '<strong>Real impact:</strong> An attacker could host a malicious website and lure an ArcanaFutura user. ' +
                            'In the background, the attacker\'s site would connect to my server via WebSocket (using the user\'s valid session cookie) ' +
                            'and start sending thousands of messages to the chat. Without rate limiting or CSRF checks, ' +
                            'the server would process all messages, draining the paid Google Gemini API quota ' +
                            'in a few seconds. In local tests, a console script fired 200 instant messages without facing any rejection.',
                        fix:
                            '<strong>The fix:</strong> I implemented a dual-layer defense: I added mandatory CSRF token validation ' +
                            'inside the socket event and built a custom rate limiter (in-memory sliding window) ' +
                            'that blocks users who send more than 10 messages per minute. ',
                        label: 'Regression test, verify socket event authentication',
                    },
                    b4: {
                        title: '4. JS Context Breakout: <strong>Template Injection Beats Sanitizer</strong>',
                        severity: 'Critical | Defense-in-Depth / Sanitizer Blind Spot',
                        method: 'Code review of results.html + JS context payload testing',
                        whatBroke:
                            '<strong>The problem:</strong> The user-provided intent was directly injected into a ' +
                            'JavaScript variable using the Jinja2 template engine: <code>intencao: "{{ intencao }}"</code>. ' +
                            'Because the backend used the <code>bleach</code> library to sanitize input, the string appeared safe against attacks.',
                        impact:
                            '<strong>Real impact:</strong> <code>bleach</code> is excellent for sanitizing HTML (removing <code>&lt;script&gt;</code> tags), ' +
                            'but it leaves double quotes (") untouched, as they are normal in plain text. If a user entered <code>", alert(1), ",</code> ' +
                            '<code>bleach</code> would let it pass. When Jinja2 injected this into JavaScript, ' +
                            'the user\'s double quote closed the variable string prematurely, turning the code into: <code>intencao: "", alert(1), ""</code>. ' +
                            'The browser executed the alert immediately. This resulted in a DOM-based XSS (Cross-Site Scripting) ' +
                            'vulnerability that completely bypassed both the backend sanitizer and Content Security Policy (CSP), ' +
                            'as the malicious payload executed inside an already authorized script block.',
                        fix:
                            '<strong>The fix:</strong> Replace direct template injection with Flask\'s native filter: <code>intencao: {{ intencao | tojson }}</code>. ' +
                            'This filter correctly serializes the string for a JavaScript context, escaping quotes and special characters with backslashes (\"), ' +
                            'neutralizing any context breakout attempts.',
                        label: 'Regression Test (Verify JS context escape)',
                    },
                    b5: {
                        title: '5. Orphan Connection (Dead SID): <strong>Infinite Loop and Silent Quota Drain</strong>',
                        severity: 'High | Asynchronous Architecture Failure / Financial Loss',
                        method: 'Network drop simulation (Network Throttling)',
                        whatBroke:
                            '<strong>The problem:</strong> In an architecture mixing Flask-SocketIO + Flask-Session, ' +
                            'there are two different concepts of "session". The background worker generating the Tarot reading ' +
                            'was sending the response back to the user using <code>session.sid</code> (the HTTP cookie ID stored in Redis). ' +
                            'However, <code>Socket.IO</code> requires <code>request.sid</code> (the ephemeral ID of the active WebSocket connection). ' +
                            'The server was emitting the response to a non-existent "room".',
                        impact:
                            '<strong>Real impact:</strong> If a user experienced a brief network drop (e.g., switching from Wi-Fi to 4G), <code>Socket.IO</code> reconnected and generated a new <code>request.sid</code>. ' +
                            'The Google Gemini API successfully completed the reading (incurring API costs), but the server sent the response to the old (dead) SID. ' +
                            'The user remained stuck on an infinite loading screen. Compounding the issue: the frontend retry mechanism attempted to reconnect and request the reading up to 5 times. ' +
                            'Under peak traffic, a single user with network instability would trigger 5 billed API calls ' +
                            'without producing any 500 errors in server logs—a completely silent financial drain.',
                        fix:
                            '<strong>The fix:</strong> Corrected routing by replacing <code>session.sid</code> with <code>request.sid</code> in socket event emitters. ' +
                            'To handle network drops, I implemented a "Self-Healing" architecture: completed readings are now cached in Redis keyed by the HTTP session ID. ' +
                            'If a user reconnects with a new socket ID, the frontend re-requests the reading and the backend ' +
                            'serves it instantly from cache without calling the Gemini API a second time.',
                        label: 'Regression test, verify socket routing',
                    },
                },
                epics: {
                    titles: {
                        e1: 'User Onboarding and Session Initialization',
                        e2: 'Card Selection and State Management',
                        e3: 'AI Reading Generation (WebSocket Reliability)',
                        e4: 'Contextual Chat (Interactive AI)',
                        e5: 'Security, Performance, and Infrastructure',
                        e6: 'Responsive Design and Device Compatibility',
                        e7: 'Navigation, Session Protections, and Error Handling',
                        e8: 'Security: Headers, CORS, and Dev Leaks',
                        e9: 'Reliability, Cross-Browser, and Accessibility',
                    },
                    storyCount: {
                        e1: '7 Stories', e2: '6 Stories', e3: '4 Stories', e4: '8 Stories',
                        e5: '6 Stories', e6: '4 Stories', e7: '7 Stories', e8: '7 Stories',
                        e9: '5 Stories',
                    },
                    e1: {
                        focus:
                            'Covers all interactions before the user reaches the card board: form ' +
                            'submission, backend validation, session initialization, and CSRF protection.',
                        li1:
                            '<strong>Happy Path and Validation:</strong> Testing the three valid card ' +
                            'quantities (1, 3, 5), the optional intent field, and verifying that the backend ' +
                            'correctly stores both values as strings in the Redis session (a type ' +
                            'strictly required by the card-limit logic).',
                        li2:
                            '<strong>XSS Sanitization (8 subtasks):</strong> Systematic testing of ' +
                            '<code>bleach.clean()</code> against script tags, <code>img onerror</code> handlers, ' +
                            'malformed HTML, link injection, and the JavaScript quote-escape vector. One ' +
                            'subtask confirmed a vulnerability where default Jinja2 rendering ' +
                            '(without the <code>| tojson</code> filter) allowed double quotes to escape the ' +
                            'inline JS string literal in results.html.',
                        li3:
                            '<strong>CSRF Protection (9 subtasks):</strong> Full lifecycle verification: baseline ' +
                            'with valid token, rejection of missing token, rejection of tampered token, ' +
                            'automatic UI reload upon expiration, and the edge case where CSRF and session ' +
                            'timers fall out of sync (e.g., CSRF expires in 1 min, session in 30 min). All tested in ' +
                            'production.',
                        li4:
                            '<strong>Intent Length Limit:</strong> Boundary Value Analysis testing exactly 400 and 401 characters. ' +
                            'Also documented the "sanitization before length check" edge case, ' +
                            'where special characters like ' +
                            '<code>&amp;</code> expand to <code>&amp;amp;</code> after bleach processing, ' +
                            'causing a 400-character input to exceed the backend limit.',
                        li5:
                            '<strong>Type Coercion Safety:</strong> Verification that ' +
                            "<code>session['selected_cards']</code> is stored as a Python string " +
                            "(required for <code>not in ['1','3','5']</code> validation), while " +
                            'Jinja2 injects it into the JS template as a raw integer (required for the ' +
                            'strict equality <code>===</code> counter logic).',
                    },
                    e2: {
                        focus:
                            'Focuses on the JavaScript state machine of the card board, from initial rendering ' +
                            'to selection locking, animation timing, DOM reparenting, and ' +
                            'final data serialization.',
                        li1:
                            '<strong>Shuffling and Orientation:</strong> Verifying that ' +
                            '<code>random.sample</code> produces a different card order across sessions and ' +
                            'that each card receives exactly one <code>data-value</code> attribute ' +
                            '(<code>"normal"</code> or <code>"reversed"</code>). A regression test ' +
                            'targets the line <code>deck_copy = [card.copy() for card in ' +
                            'TAROT_CARDS]</code>; if removed, the global deck dictionary accumulates stale ' +
                            'orientation values, corrupting data across concurrent users.',
                        li2:
                            '<strong>Selection Counter Logic:</strong> The entire card limit ' +
                            'enforcement relies on a single Jinja2 injection: <code>const selectedCardsCount = ' +
                            '{{ selected_cards }};</code>. If this renders as <code>0</code> or ' +
                            '<code>None</code>, the condition <code>clickedCards &gt;= 0</code> becomes true right ' +
                            'on page load and no cards can be clicked, ' +
                            'freezing the UI without producing any visible console errors.',
                        li3:
                            '<strong>Double-Click and Race Conditions:</strong> Testing the ' +
                            '<code>card.dataset.processing = "true"</code> lock against rapid ' +
                            'multi-clicks during the 333ms window mid-flip animation. ' +
                            "Also verified that the <code>card.classList.contains('clicked')</code> guard prevents re-selection after the " +
                            'animation finishes.',
                        li4:
                            '<strong>DOM Reparenting and Stage Transition:</strong> Verifying that ' +
                            '<code>stage.appendChild(card)</code> physically moves the correct elements to ' +
                            '<code>#selection-stage</code>, that the correct layout class ' +
                            '(<code>stage-1</code>, <code>stage-3</code>, or <code>stage-5</code>) is dynamically applied, ' +
                            'and that card orientations survive the transition without visual reset.',
                        li5:
                            '<strong>Data Serialization and Backend Resilience:</strong> Testing ' +
                            'dynamic form construction on <code>leituraButton.click</code>, including ' +
                            'manual CSRF token injection. Validated backend handling of malformed, ' +
                            'structurally invalid (e.g., wrong keys), and empty array JSON payloads, ' +
                            'each representing a distinct vector for server crashes or API quota waste.',
                    },
                    e3: {
                        focus:
                            'Evaluation of the AI generation pipeline, from the WebSocket event to the Gemini API call, ' +
                            'down to the rendered HTML and its failure modes.',
                        li1:
                            '<strong>Prompt Integrity:</strong> Using mocked calls to ' +
                            '<code>model.generate_content</code> to intercept and inspect the exact ' +
                            'prompt string sent to Gemini. The test verified that card names, orientations ' +
                            '(<code>"reversed"</code>), and user intent are correctly formatted before reaching the ' +
                            'API. A missing or malformed card name results in a wasted API call ' +
                            'and a hallucinated reading from the model.',
                        li2:
                            '<strong>Markdown Pipeline (Confirmed Vulnerability):</strong> Testing the ' +
                            '<code>markdown_to_html()</code> function revealed that using <code>Markup()</code> flags output ' +
                            'as safe for Jinja2 but performs no sanitization. Python\'s ' +
                            '<code>markdown</code> library passes raw HTML through unchanged. If Gemini ' +
                            'returns a <code>&lt;script&gt;</code> tag (e.g., via a Prompt Injection attack), it ' +
                            'survives the pipeline, travels over the WebSocket, and executes via <code>.innerHTML</code> in the browser. The flaw was ' +
                            'documented and the fix implemented: piping the output through ' +
                            '<code>bleach.clean()</code> with a strict allowlist before wrapping it in <code>Markup()</code>.',
                        li3:
                            '<strong>API Failure Handling:</strong> Verification that the ' +
                            '<code>generate_tarot_reading()</code> function propagates exceptions (rather than silencing them), ' +
                            'ensuring the background task emits the <code>generation_error</code> event back to the client. ' +
                            'A function that catches the error and returns <code>None</code> would cause a silent <code>TypeError</code> ' +
                            'in the browser when attempting to inject a null value into the DOM, freezing the interface.',
                        li4:
                            '<strong>Empty API Response (Safety Filters):</strong> Confirmation that the explicit guard ' +
                            '<code>if not response.text: raise ValueError()</code> correctly catches Google safety filter rejections. ' +
                            'In these cases, the API returns a valid HTTP 200 response object but with empty text content, ' +
                            'which would break the application without semantic response validation.',
                    },
                    e4: {
                        focus:
                            'Analysis of the chat interface as a separate runtime layer, its initialization, ' +
                            'the real-time feedback loop, the attack surface, and known architectural bugs.',
                        li1:
                            '<strong>Dead Code Discovery:</strong> Code review revealed that ' +
                            '<code>initializeSocket()</code>, the function registering all ' +
                            'chat UI event listeners, was defined but never called. Only ' +
                            '<code>initSocket()</code> was bound to <code>DOMContentLoaded</code>. ' +
                            'Had this shipped to production, the chat button, close button, scroll shadow, and the ' +
                            '<code>receive_message</code> handler would have remained completely inoperable. Documented and patched as a critical integration bug.',
                        li2:
                            '<strong>WebSocket Payload Flaws (Confirmed Bugs):</strong> Two security ' +
                            'and stability bugs were identified via code inspection and injection tests. First, <code>handle_message</code> accessed ' +
                            '<code>data[\'message\']</code> directly instead of using ' +
                            '<code>data.get(\'message\', \'\')</code>, meaning a payload missing that key triggered an unhandled ' +
                            '<code>KeyError</code>, crashing the gevent greenlet. Second, there was no message size limit before calling ' +
                            '<code>model.generate_content()</code>, allowing an attacker to send unbounded prompts to exhaust API quota (DoS). ' +
                            'Both flaws were resolved with strict validation.',
                        li3:
                            '<strong>Loading Indicator Bug (UI Race Condition):</strong> ' +
                            'The <code>removeLoadingIndicator()</code> function targeted the ' +
                            '<code>.chat-message:last-child</code> selector. If a user sent a second ' +
                            'message before the first AI response arrived, the user bubble became the ' +
                            '<code>last-child</code>. Consequently, the script failed to find the animation, leaving the initial loading bubble ' +
                            'permanently orphaned and stuck in the chat history. ' +
                            'Fixed by updating the logic to query the specific indicator class, ' +
                            'regardless of its position in the DOM.',
                        li4:
                            '<strong>Chat API Failure (State Recovery):</strong> Testing the ' +
                            '<code>background_chat</code> exception handler using mocked Gemini API failures. ' +
                            'Verified that a <code>receive_message</code> event containing a user-friendly error message is emitted on failure. ' +
                            'If the <code>except</code> block failed silently, the client loading indicator ' +
                            'would spin indefinitely, leaving the user with no recovery path.',
                        li5:
                            '<strong>Chat Rate Limiting:</strong> Verification of an in-memory sliding window ' +
                            'rate limiter (<code>is_rate_limited()</code>). This custom architecture was necessary because ' +
                            'Flask-Limiter\'s <code>@limiter.limit</code> decorator only covers HTTP routes, remaining completely "blind" to Socket.IO events. ' +
                            'Testing confirmed that the <code>handle_message</code> handler successfully intercepts and blocks users attempting mass message flooding (Spam/DoS).',
                    },
                    e5: {
                        focus:
                            'Focuses on the operational security layer of the application, including rate limiting, session hygiene, ' +
                            'CSP (Content Security Policy) enforcement, WebSocket authentication, and concurrent user isolation.',
                        li1:
                            '<strong>IP Rate Limiting:</strong> Verification that Flask-Limiter\'s ' +
                            '<code>@limiter.limit</code> decorator on <code>/results</code> correctly returns ' +
                            '<code>HTTP 429</code> (Too Many Requests) after exceeding the configured threshold. The test validated environment-based ' +
                            'dynamic limit injection: 200 requests/minute in development ' +
                            'and 5 requests/minute in production (controlled by the <code>is_production</code> flag).',
                        li2:
                            '<strong>Session Cookie Security:</strong> Rigorous inspection of security flags in the ' +
                            '<code>Set-Cookie</code> header. Validated <code>HttpOnly</code> (blocking cookie access via ' +
                            '<code>document.cookie</code>, mitigating XSS), <code>SameSite=Lax</code> (restricting cross-site POST requests, ' +
                            'mitigating CSRF), and the <code>Secure</code> flag. The <code>Secure</code> flag was tested across both environments to ensure it ' +
                            'activates strictly in production (requiring HTTPS), while allowing local HTTP traffic during development.',
                        li3:
                            '<strong>WebSocket CSRF (Manual Attack Simulation):</strong> Execution of offensive security tests ' +
                            '(basic Red Teaming) by injecting payloads directly into the browser console in production. Dispatched <code>start_generation</code> events ' +
                            'with missing and forged CSRF tokens. In both cases, confirmed that the backend intercepted the request and emitted the ' +
                            '<code>generation_error</code> event, protecting the Gemini API against unauthorized calls.',
                        li4:
                            '<strong>Data Isolation (Concurrency and Race Conditions):</strong> Execution of two ' +
                            'independent test clients firing concurrent requests against <code>/process_form</code>. ' +
                            'Verified that <code>intencao</code> and ' +
                            '<code>selected_cards</code> data are strictly scoped to the Redis session ID, ' +
                            'ensuring no cross-user state leaks. Also tested the race condition ' +
                            "between multiple tabs open in the same browser, validating write integrity for " +
                            "<code>session['selected_cards']</code>.",
                        li5:
                            '<strong>Session Lifecycle and Expiration:</strong> Testing the ' +
                            '<code>SESSION_PERMANENT=False</code> configuration. Verification confirmed that the backend generates a cookie without ' +
                            '<code>Expires</code> or <code>Max-Age</code> attributes. This makes it a true "browser session cookie" destroyed by the operating system as soon as the browser closes—' +
                            'a critical privacy requirement to safeguard user data on shared devices.',
                    },
                    e6: {
                        focus:
                            'Evaluation of mobile-specific rendering behavior, touch event semantics, and ' +
                            'the tab privacy mechanism introduced to handle shared-device use cases.',
                        li1:
                            '<strong>Orientation Lock (Landscape Guard):</strong> Testing the ' +
                            '<code>#rotate-message</code> overlay controlled by the CSS rule <code>@media ' +
                            '(orientation: landscape)</code>. Verification confirmed that the overlay completely blocks DOM interaction when the ' +
                            'device is in landscape mode and disappears instantly upon returning to portrait, without requiring a page reload.',
                        li2:
                            '<strong>Mobile Virtual Keyboard Handling:</strong> Testing the ' +
                            '<code>isTouchDevice()</code> detection function, which uses <code>window.matchMedia("(hover: none) and ' +
                            '(pointer: coarse)")</code> instead of User-Agent sniffing (an obsolete practice). Validation confirmed that the <code>keyboard-active</code> class is applied to ' +
                            '<code>&lt;body&gt;</code> on the <code>focus</code> event, triggering <code>scrollIntoView</code> behavior to ' +
                            'prevent the virtual keyboard from covering the <code>textarea</code>. Also verified the exclusion of <code>localhost</code> in the logic, ' +
                            'ensuring the behavior does not trigger accidentally during local development on emulators.',
                        li3:
                            '<strong>Touch Event Compatibility (Touch Semantics):</strong> Verification that ' +
                            'standard <code>click</code> event listeners fire immediately on mobile touch ' +
                            'without the legacy 300ms delay (suppressed by the viewport meta tag ' +
                            '<code>width=device-width</code>), and that CSS <code>:hover</code> states do not ' +
                            'persist after tap-and-release ("sticky hover").',
                        li4:
                            '<strong>Tab Privacy Protection (Session Storage Guard):</strong> The ' +
                            '<code>/clear_session</code> route, introduced to support <code>sessionStorage</code>-based new tab detection in ' +
                            'cartas.html and results.html, was audited specifically for security. Testing confirmed ' +
                            'that the route is <code>@csrf.exempt</code> (required because JS fires fetch before any token is available in the DOM), ' +
                            'strictly accepts the POST method, completely clears all session keys in Redis, ' +
                            'and returns valid JSON. Any failure in these constraints would represent a distinct vector for ' +
                            'client crashes or cross-user data leakage.',
                    },
                    e7: {
                        focus:
                            'Analysis of out-of-order navigation, infrastructure outages, and application ' +
                            'behavior when users deviate from the intended linear flow (Unhappy Paths).',
                        li1:
                            '<strong>Session Protection Bug (Confirmed, Fixed):</strong> The original ' +
                            '<code>/cartas</code> route used ' +
                            '<code>int(session.get(\'selected_cards\', 0))</code>, defaulting to <code>0</code> ' +
                            'on missing or expired sessions. The page rendered with HTTP 200, but injecting ' +
                            '<code>selectedCardsCount = 0</code> caused the JS condition <code>clickedCards &gt;= 0</code> to evaluate to true immediately, ' +
                            'freezing the UI and preventing card clicks without throwing console errors. ' +
                            'The fix (<code>if raw_val not in [\'1\',\'3\',\'5\']: ' +
                            'redirect</code>) was validated and guarded against regression via parameterized tests covering eight distinct invalid or malicious session values.',
                        li2:
                            '<strong>Direct URL Navigation:</strong> Direct access testing across the three routes (<code>/</code>, ' +
                            '<code>/cartas</code>, <code>/results</code>) without an active session, with partial sessions, and ' +
                            'with expired sessions. The goal was to verify Redirect Chains, ' +
                            'ensuring no route returned a <code>500</code> error or a broken-state <code>200</code>.',
                        li3:
                            '<strong>Bfcache and Browser Back Button:</strong> Documentation of ' +
                            'state desynchronization when navigating back from <code>/results</code> to ' +
                            '<code>/cartas</code> via the browser Back button. The Back-Forward Cache (bfcache) preserved the DOM with cards flipped, ' +
                            'but the JavaScript <code>clickedCards</code> counter reset to 0 upon page restore, introducing a logic vulnerability ' +
                            'that potentially allowed users to exceed their initial card selection limit.',
                        li4:
                            '<strong>404 Handling (Error Handler):</strong> The custom <code>@app.errorhandler(404)</code> ' +
                            'was tested to ensure it redirects invalid application routes to Home (preventing information disclosure), ' +
                            'while passing missing static file requests through as true <code>404</code>s ' +
                            '(preventing asset loading breakage). Both code paths were tested independently, ' +
                            'and the presence of Flask-Talisman security headers was confirmed across both error response types.',
                        li5:
                            '<strong>Redis Outage (Chaos Testing):</strong> Simulating Redis database unavailability to ' +
                            'ensure the application fails securely (Fail Secure), preventing stack traces or environment variables from leaking into the 500 error view. ' +
                            'During testing, it was documented that Flask-Limiter fails open ' +
                            'by default on connection drops (allowing unrestricted traffic), ' +
                            'which was logged as an architectural risk item for the DevOps team.',
                    },
                    e8: {
                        focus:
                            'Audit of attack surfaces not covered by Epic 5, including standard Flask-Talisman security ' +
                            'headers, WebSocket CORS policy, CSP (Content Security Policy) nonce configuration, and ' +
                            'development tool leaks.',
                        li1:
                            '<strong>Talisman Security Headers:</strong> Verification of the presence and efficacy of ' +
                            '<code>X-Frame-Options: SAMEORIGIN</code> (Clickjacking mitigation), ' +
                            '<code>X-Content-Type-Options: nosniff</code> (MIME sniffing mitigation), and ' +
                            '<code>Referrer-Policy</code> headers across all routes. Testing included validating ' +
                            'these headers across both error response code paths (the redirect-based 404 and the passed-through ' +
                            'static file 404), ensuring error pages do not become attack vectors.',
                        li2:
                            '<strong>CORS Wildcard (Confirmed Vulnerability):</strong> The configuration ' +
                            '<code>cors_allowed_origins="*"</code> was unconditionally hardcoded in the ' +
                            'original codebase, allowing any external origin to establish a WebSocket ' +
                            'handshake. Combined with missing CSRF validation on the <code>send_message</code> event, this ' +
                            'created a confirmed exploit path for Cross-Site WebSocket Hijacking ' +
                            '(CSWSH), allowing an attacker\'s page to silently consume the Gemini ' +
                            'API quota for free. Documented and resolved by restricting allowed origins ' +
                            'to the production domain, conditioned on the <code>is_production</code> flag.',
                        li3:
                            '<strong>Misconfigured CSP Nonce (Confirmed Vulnerability):</strong> ' +
                            'The <code>g.nonce</code> variable was generated per-request and ' +
                            'applied to script tags, but Talisman had not been initialized with the ' +
                            '<code>content_security_policy_nonce_in=[\'script-src\']</code> parameter, while ' +
                            '<code>\'unsafe-inline\'</code> remained active in <code>script-src</code>. The nonce ' +
                            'was cosmetic; browsers completely ignored it because ' +
                            '<code>unsafe-inline</code> unconditionally permits all script execution. ' +
                            'Any XSS injection point would execute unrestricted. The fix required removing ' +
                            '<code>unsafe-inline</code> and integrating the nonce natively via Talisman.',
                        li4:
                            '<strong>CSRF Gap in <code>send_message</code> (Confirmed Vulnerability):</strong> The ' +
                            '<code>handle_generation</code> event called <code>validate_csrf()</code>, but ' +
                            '<code>handle_message</code> did not. An established WebSocket connection could emit unlimited chat prompts ' +
                            'directly to the Gemini API without token validation. Documented and ' +
                            'patched with the exact code changes required across both backend ' +
                            '(validation) and frontend (token payload injection).',
                        li5:
                            '<strong>Development URL Leak in Production CSP:</strong> The ' +
                            '<code>if not is_production:</code> guard wrapping localhost ' +
                            'and LAN IP entries in the CSP dictionary was verified via code inspection and header analysis. ' +
                            'An inverted or missing condition would place <code>http://localhost:3000</code> ' +
                            'into the production CSP allowlist, creating a potential SSRF-based (Server-Side Request Forgery) CSP bypass surface. ' +
                            'Testing confirmed that the production environment is completely clean of development artifacts.',
                    },
                    e9: {
                        focus:
                            'Scenarios manually validated in production via BrowserStack and Chrome DevTools, requiring real devices or human ' +
                            'judgment. Covers WebSocket network resilience, cross-browser rendering parity, ' +
                            'keyboard accessibility, screen reader compatibility, and performance benchmarking.',
                        li1:
                            '<strong>WebSocket Resilience:</strong> Simulation of abrupt network drops mid-reading generation ' +
                            'using Chrome\'s Network Throttling panel. Testing confirmed the resolution of an earlier infinite loading bug, ' +
                            'validating the new reconnection architecture that serves cached readings upon restoring signal. ' +
                            'A known architectural limitation was documented as Won\'t Fix: ' +
                            'two tabs sharing the same browser session may both receive ' +
                            '<code>generation_complete</code> events, since Socket.IO SIDs are scoped per connection, ' +
                            'not per HTTP session.',
                        li2:
                            '<strong>Cross-Browser Compatibility:</strong> Full End-to-End flow testing across ' +
                            'Firefox, Safari (macOS), iOS Safari (via BrowserStack), and Edge. ' +
                            'Verified CSS <code>rotateX</code>/<code>rotateY</code> transforms without vendor ' +
                            'prefixes like -webkit-, Web Animations API support ' +
                            '(<code>element.animate</code>), secure <code>wss://</code> connection establishment, ' +
                            'and <code>marked.js</code> rendering parity. All browsers passed without requiring polyfills.',
                        li3:
                            '<strong>Keyboard Navigation and Accessibility Fixes:</strong> ' +
                            'Full Tab order audit across all three pages and the chat modal. ' +
                            'Found that the Esc key did not close the chat overlay; fixed ' +
                            'by adding a global <code>keydown</code> listener. Also discovered that keyboard focus ' +
                            'could escape the chat modal to the background page; fixed by implementing a ' +
                            'Focus Trap that intercepts <code>Tab</code> and ' +
                            '<code>Shift+Tab</code>, cycling focus strictly within the modal boundaries.',
                        li4:
                            '<strong>Screen Reader and ARIA:</strong> The 22 card buttons lacked accessible labels ' +
                            '(<code>&lt;button&gt;</code> with no text content), announced by ' +
                            'screen readers merely as "button" without context; fixed by injecting ' +
                            'dynamic <code>aria-label</code> attributes via Jinja2. The ' +
                            '<code>#loading-message</code> container lacked an ARIA Live Region, meaning screen readers ' +
                            'received no notification when AI generation finished; fixed by ' +
                            'adding <code>role="status"</code> and <code>aria-live="polite"</code>. Measured ' +
                            'color contrast was 3.31:1 for inactive card buttons, meeting ' +
                            'the WCAG AA standard for UI components.',
                        li5:
                            '<strong>Performance Benchmarks:</strong> Established production SLA ' +
                            'baselines: TTFB (Time to First Byte) for Home at 968ms (within the 1000ms target), ' +
                            'TTI (Time to Interactive) for <code>/cartas</code> improved following a 46% reduction in ' +
                            'asset size (262KB PNG → 140KB WebP). AI reading generation averaged 5–9 ' +
                            'seconds across 10 runs; chat responses averaged 3–5 seconds. A ' +
                            'stress test with 5 concurrent users showed an average latency increase ' +
                            'of 63% over baseline, documented as Graceful Degradation ' +
                            'for the current single-instance deployment on Render.',
                    },
                },
                diagram: {
                    legendIpSpoofDescX: '105',
                    legendWsHijackDescX: '115',
                    legendJsInjectDescX: '150',
                    browser: 'Browser',
                    userClient: 'User Client',
                    renderProxy: 'Render Proxy',
                    globalMemory: 'GLOBAL MEMORY',
                    geventConcurrent: 'gevent · concurrent',
                    jinja2Renderer: 'JINJA2 RENDERER',
                    templateContext: 'template context',
                    flaskApp: 'Flask App',
                    sessionStore: 'Session Store',
                    llmApi: 'LLM API',
                    wsIn: '→  WS messages in  (Socket.IO)',
                    wsOut: '←  socketio.emit() response',
                    tagGlobalMut: 'GLOBAL MUT.',
                    tagIpSpoof: 'IP SPOOF',
                    tagWsHijack: 'WS HIJACK',
                    tagJsInject: 'JS INJECT',
                    tagDeadSid: 'DEAD SID',
                    legendGlobalMutTitle: 'Global Mutation',
                    legendGlobalMutDesc:
                        'TAROT_CARDS dict mutated in-place; concurrent gevent requests corrupt deck state',
                    legendIpSpoofTitle: 'IP Spoofing',
                    legendIpSpoofDesc:
                        'ProxyFix x_for=2 trusts forged headers; attacker bypasses rate limit by rotating ' +
                        'X-Forwarded-For IP',
                    legendWsHijackTitle: 'WS Hijacking',
                    legendWsHijackDesc:
                        'No CSRF on send_message handler; any cross-origin page can drain Gemini quota',
                    legendJsInjectTitle: 'JS Template Injection',
                    legendJsInjectDesc:
                        "{{ intencao }} raw in <script>; bleach doesn't help — vulnerability is in JS context, " +
                        'not HTML',
                    legendDeadSidTitle: 'Dead SID',
                    legendDeadSidDesc:
                        'Background task emits to original socket ID after network drop; reconnected client ' +
                        'hangs forever',
                },


            },
            brasil2040: {
                title: 'Brasil 2040 AI Evals',
                intro1:
                    '<strong>Brasil 2040</strong> is a RAG (Retrieval-Augmented Generation) application with its own data retrieval architecture, moving away from a ' +
                    'simple chatbot wrapper. The assistant responds exclusively based on Brazilian government climate reports. ' +
                    'This encompasses 12 PDFs and 400 MB of data that I extracted, processed (chunking), and vectorized (embeddings) ' +
                    'using the <strong>multilingual-e5-large</strong> model on a Kaggle GPU notebook. Every generated ' +
                    'response must be traceable back to the vectors stored in the Supabase database (pgvector), retrieved by ' +
                    'a FastAPI backend developed for this project. The Gemini model handles text generation, but the documents act as the single source of truth (ground truth). ' +
                    'The central objective of this QA is to test the efficacy and safety of how the AI retrieves and utilizes this data.',
                intro2:
                    'The audit was executed across two independent testing layers on the same product. The first is a ' +
                    '<strong>Pytest evaluation suite</strong> running an LLM-as-a-Judge pipeline on GitHub Actions (CI/CD), ' +
                    'focused on measuring whether the AI stays faithful to the documents and penalizing hallucinations. The second layer used ' +
                    '<strong>ScoutQA</strong>, an AI agent that conducted exploratory testing on the browser interface for 30 minutes, ' +
                    'without any predefined script. Because the tools operated without visibility into each other, ' +
                    'the validation covered backend accuracy and frontend resilience impartially.',
                tldr: {
                    label: 'TL;DR',
                    li1: 'A 4-stage LLM-as-judge eval pipeline in CI: retrieval, faithfulness, ' +
                        'hallucination traps and prompt regression, run against a 30-question golden ' +
                        'set across 8 categories, with faithfulness judged on two thresholds (0.70 ' +
                        'factual, 0.60 synthesis).',
                    li2: 'The ScoutQA agent ran for 30 minutes with no script against the live UI, ' +
                        'covering navigation, filters, KPIs and the out-of-scope flow, the kind of ' +
                        'exploratory testing the API-bound eval suite can\'t do. That\'s how a data' +
                        '-integrity bug surfaced that no automated test had been written to catch.',
                    li3: 'The eval suite proves the AI\'s semantic correctness on every commit. The ' +
                        'ScoutQA agent covers what no script was written to check. Neither replaces the ' +
                        'other.',
                },
                links: {
                    liveApp: 'View Live App',
                    github: 'GitHub Repository',
                    scoutqa: 'ScoutQA Agent Run',
                },
                tech: {
                    knowledgeBase: 'Knowledge Base:',
                    evalStack: 'Eval Stack:',
                    dimensions: 'Dimensions Tested:',
                },
                ciLabel: 'All 4 eval jobs green on GitHub Actions',
                sections: {
                    systemIntro:
                        '<strong>What makes this different from testing a chatbot:</strong> The main difference ' +
                        'compared to testing a traditional chatbot is that the knowledge base was built from scratch. ' +
                        'In a RAG pipeline, specific data points must survive multiple stages: ' +
                        'PDF extraction, semantic chunking, embedding, vector similarity search, and LLM generation. ' +
                        'The greatest danger in this pipeline is silent failure. An error in any of these layers produces an incorrect answer, ' +
                        'yet generated with high confidence by the AI and accompanied by an HTTP 200 OK status.',
                    qaProblemHead: 'The QA Challenge in RAG Systems',
                    qaProblemBody:
                        'The central problem is ensuring information integrity across all these transformations. ' +
                        'During the construction of the knowledge base, I identified that a regex pattern in the chunking script ' +
                        'was breaking decimal numbers in Brazilian format. The value "16,7×", ' +
                        'for example, was split into "16," and "7×" right at the chunk boundaries. ' +
                        'To resolve this, I implemented a sanitization diagnostic before the ' +
                        'embedding stage to verify that numerical data survived the cleaning step. This discovery defined ' +
                        'the test suite architecture and explains why the Retrieval evaluation must run first. ' +
                        'If the chunks retrieved from the database are corrupted, ' +
                        'any subsequent LLM-as-a-Judge verdict regarding the final response quality becomes completely meaningless.',
                    embeddingIntro:
                        'Before running any tests, the knowledge base had to be built with precision. ' +
                        'This stage required focused data engineering work, where three specific issues demanded a ' +
                        'preventive QA mindset before the first question was even sent to the AI.',
                    problem1Head: 'Problem 1: Data Loss in Tables',
                    problem1Body:
                        'The default <code>get_text("text")</code> method in the PyMuPDF library frequently ignores or mangles numbers contained within ' +
                        'table cells. To fix this, I added an explicit extraction step using <code>find_tables()</code> per ' +
                        'page, appending table contents as structured text before chunking. Without ' +
                        'this validation, critical data like water deficit probabilities (99%, 74%) would simply never make it into the vector database.',
                    problem2Head: 'Problem 2: Regex Destroying Brazilian Decimals',
                    problem2Body:
                        'A common cleaning pattern in NLP preprocessing tutorials (e.g., <code>\\b\\w{1,2}\\b</code> to remove short stop words) was destroying ' +
                        'Brazilian decimal notation. The value <code>"16,7"</code> was split into <code>"16,"</code> and <code>"7"</code> ' +
                        'as separate tokens. To prevent this silent corruption, I created a diagnostic script that ran ' +
                        'against the PDFs before the embedding stage, ensuring that all numbers ' +
                        'survived the cleaning step intact.',
                    problem3Head: 'Problem 3: Sentence-Aware Chunking',
                    problem3Body:
                        'A naive character-limit chunker splits sentences at arbitrary positions. ' +
                        'If the phrase <strong>"Operational cost will increase by 16.7"</strong> ends up in one chunk and ' +
                        '<strong>"× in the HadGEM 8.5 scenario"</strong> ends up in the next, neither block will contain the complete fact. ' +
                        'To resolve this, I configured the chunker to split text primarily at sentence-ending punctuation, ' +
                        'falling back to word limits only when necessary. This ensures that numerical facts ' +
                        'and their units remain within the same vector. This architectural decision directly impacts the QA stage: ' +
                        'if the retrieved context is fragmented, the LLM-as-a-Judge will be unable to verify response faithfulness.',
                    diagnosticLabel: 'Diagnostic: verify that numbers survive before embedding',
                    evalStrategyIntro:
                        'The automation suite is a four-stage pipeline integrated into GitHub Actions. The workflow follows ' +
                        'a fail-fast logic: a failure in any stage blocks the execution of subsequent ones. After all, it makes no sense ' +
                        'to evaluate response quality if the wrong documents were retrieved from the database.',
                    pipeline: {
                        stage1Num: 'Stage 1: Retrieval',
                        stage1Title: 'Right source, right terms',
                        stage1Body:
                            'The test queries the <code>/search</code> endpoint at <code>top_k=5</code> and <code>top_k=10</code>. It verifies whether the source file ' +
                            'of the returned chunk matches the expectation defined in the golden-set. One of the tests injects an English question ' +
                            'to validate whether the <code>multilingual-e5-large</code> model can cross the language barrier and ' +
                            'retrieve the correct vectors from an exclusively Portuguese corpus.',
                        stage2Num: 'Stage 2: Faithfulness',
                        stage2Title: '0.70 factual · 0.60 synthesis',
                        stage2Body:
                            'The pipeline generates a live response from the Gemini API and dispatches the triad (Question, Generated Response, ' +
                            'Retrieved Context) to the LLM-as-a-Judge. Two distinct pass thresholds were defined to handle inherent AI uncertainty: a factual ' +
                            'response requires high precision (0.70), while a synthesis response may remain faithful to the sources ' +
                            'yet structured differently from what the judge anticipates (0.60).',
                        stage3Num: 'Stage 3: Honeypots / Negative Testing',
                        stage3Title: 'Hedge or fail',
                        stage3Body:
                            'Three questions request data points that deliberately do not exist in the corpus: "2039 agricultural GDP", "2038 ' +
                            'El Niño", and "Fish extinction counts". Each test carries ' +
                            '<code>must_not_contain</code> terms (e.g., fabricated numbers) that are verified programmatically before the judge even runs. ' +
                            'A correct refusal from the AI (admitting it lacks the information) scores 1.0. Any hallucination from the model fails the test.',
                        stage4Num: 'Stage 4: Drift Detection',
                        stage4Title: 'Two-way drift',
                        stage4Body:
                            'The test compares responses from the current run against a baseline saved in a JSON file in the repository. ' +
                            'Missing anchor terms capture quality regressions. Conversely, the appearance of "new numbers" ' +
                            'not present in the baseline catches the most subtle failure in a RAG system: a change in the ' +
                            'system prompt that unintentionally loosened the factual constraints of the AI.',
                    },
                    metrics: {
                        m1: 'Golden-set questions<br>across 8 categories',
                        m2: 'Judged dimensions<br>per response',
                        m3: 'CI/CD jobs<br>per commit',
                        m4: 'Estimated cost<br>per query',
                    },
                    strategyResult:
                        '<strong>Result:</strong> Vector retrieval with P95 under 5 seconds, token cost estimation printed ' +
                        'to the console on every run, and a faithfulness verdict guaranteed on every repository push.',
                    findingsIntro:
                        'The golden set is the foundation of a reliable RAG evaluation system. ' +
                        'A poorly designed golden set produces false confidence. The four categories below detail where ' +
                        'calibration was most complex and the impact of each architectural decision.',
                    agentIntro:
                        'Following the completion of the automated evaluation suite (CI/CD), an autonomous agent (ScoutQA) was given a ' +
                        'natural language specification covering 8 core UI flows and released on the production URL ' +
                        'for 30 minutes, without predefined scripts or rigid CSS selectors. ' +
                        'The agent autonomously navigated across all 8 main tabs, interacted with the 11 crop filters ' +
                        'and 3 climate scenario pills, validated rendered KPI values against the spec, ' +
                        'tested map zoom controls, tooltip behavior, and sidebar locking. ' +
                        'It also verified Guardrailing behavior in practice: a casual ' +
                        'chat input properly triggered the out-of-scope refusal response. ' +
                        'The gaps the agent uncovered were just as instructive as the successes.',
                    pipelineBugHead: 'The Data Pipeline Bug That Automation Could Not See',
                    pipelineBugBody1:
                        'During the exploratory session, the ScoutQA agent detected that the municipality counter on the interface fluctuated ' +
                        'between 5,570 and 5,563 within the same session. ' +
                        'The agent caught this by reading the screen across multiple interactions and noticing the numerical inconsistency. ' +
                        'No API-layer evaluation would have caught this. No traditional automated test ' +
                        '(Cypress/Playwright) would have caught it either, simply because no engineer thought to write a specific assertion ' +
                        'checking if the number changed after loading. This is precisely why exploratory testing exists.',
                    pipelineBugBody2:
                        'A deeper investigation revealed this was not merely a visual glitch; ' +
                        'it was an integrity issue in the spatial data pipeline. The number 5,570 represents the raw total from the GeoJSON file. ' +
                        'However, after the join with the crop risk CSV, 5 municipalities are dropped (due to missing data). ' +
                        'Following geometry validation, another 2 are excluded. The counter displayed 5,570 during the loading animation and ' +
                        'then corrected to 5,563 once processing completed, ' +
                        'briefly exposing users to a count that did not match the actually rendered map.',
                    trace: {
                        geojsonTotal: 'GeoJSON total',
                        csvJoinFails: 'CSV join misses<br>(no crop data)',
                        geometryDrop: 'Dropped during<br>geometry validation',
                        renderedCount: 'Rendered count',
                    },
                    edgeCaseHead: 'Silent Edge-Case Failures Uncovered by the Agent',
                    edgeCaseBody:
                        'The agent also tested edge-case inputs that the automated evaluation suite never touches, ' +
                        'such as SQL injection syntax (<code>\'; DROP TABLE culturas; --</code>) and a ' +
                        'repetitive 256-character string. Both produced empty responses with no user feedback. ' +
                        'No error message, no timeout warning, no out-of-scope refusal. ' +
                        'The backend processed the request and returned nothing. ' +
                        'This represents a different failure mode from network connectivity issues ' +
                        '(which rendered the correct error in the UI). These failed silently, leaving the ' +
                        'user with zero indication that their message was even received.',
                    agentFindingsLabel: 'Agent findings, 30-minute run summary',
                    table: {
                        headFinding: 'Finding',
                        headSeverity: 'Severity',
                        headVisible: 'Visible to eval suite?',
                        headNotes: 'Notes',
                        yes: 'Yes',
                        yesEvalGate: 'Yes (eval gate)',
                        no: 'No',
                        sevCritical: 'Critical',
                        sevMedium: 'Medium',
                        sevPass: 'Pass',
                        row1Finding: 'Municipality count drift (5.570 → 5.563)',
                        row1Notes: 'Data pipeline integrity issue, 7 municipalities silently excluded',
                        row2Finding: 'Silent failure on edge-case inputs',
                        row2Notes: 'SQL-like and repetitive inputs return empty response with no user feedback',
                        row3Finding: 'Chat input not expanding vertically',
                        row3Notes: 'Fixed 34px height; text scrolls horizontally instead of expanding',
                        row4Finding: 'Out-of-scope refusal confirmed working',
                        row4Notes: 'Correct refusal message triggered on casual out-of-scope input',
                        row5Finding: 'All 11 crops × 3 scenarios, no race conditions',
                        row5Notes: 'Rapid switching tested; stats update correctly, no UI corruption',
                        row6Finding: 'State persistence across navigation',
                        row6Notes: 'Locked municipality + crop/scenario preserved when switching panels',
                        row7Finding: 'All 8 sector panels with correct KPIs',
                        row7Notes: '16.7×, 99%, −30% ENA verified in Energia panel against spec',
                    },
                    agentPlaceHead: 'Where the Agent Proves Its Value (The Value of Autonomous Testing)',
                    agentPlaceBody:
                        'For a UI that changes rapidly during development, an agent interpreting a natural language ' +
                        'specification costs significantly less to maintain than a traditional ' +
                        'E2E suite (like Playwright), which requires rewriting CSS selectors with every refactoring. ' +
                        'The 30-minute run verified all 8 navigation tabs, 11 crop buttons, 3 scenario pills, ' +
                        'validated KPI values against the spec, tested zoom controls via SVG ' +
                        'transform values extracted from the DOM, and evaluated tooltip behavior, producing an evidence-based ' +
                        'output more comprehensive than most standard exploratory sessions. ' +
                        'More importantly: it found bugs no script was looking for, such as the data pipeline ' +
                        'discrepancy (invisible to any API test) and the silent failure mode in the chat.',
                    agentFailHead: 'Where the Agent Structurally Fails (Limitations)',
                    agentFailBody:
                        'The question "Was this answer faithful to its sources?" has no DOM representation. No browser ' +
                        'agent can answer that. The agent also cannot serve as a regression gate ' +
                        'in CI/CD; the same 30-minute exploration run twice produces different execution paths and ' +
                        'reports (non-determinism). It belongs to exploratory testing, ' +
                        'not as a deployment-blocking gate. The correct architectural model assigns clear ownership to each layer: ' +
                        'the evaluation suite (Pytest + LLM Judge) owns AI semantic correctness, deterministic E2E (Playwright) owns critical UI paths, ' +
                        'and exploratory testing (Agent/Human) owns discovery. ' +
                        'The municipality counter bug required an "eye" on the rendered screen. The faithfulness verdict ' +
                        'required a judge with access to the retrieved vector context. Neither tool could do the other\'s job.',
                    ciCommitHead: 'What Runs on Every Commit',
                    ciCommitBody:
                        'The <code>eval.yml</code> workflow on GitHub Actions defines five interdependent jobs. Retrieval tests run ' +
                        'first and act as a blocking gate for subsequent stages. If a chunk embedding drifts or a ' +
                        'source file is renamed, retrieval fails and the LLM judge will never evaluate an answer ' +
                        'based on faulty context. The latency suite runs in parallel with the faithfulness suite, printing an estimated Cost/Query ' +
                        'to the job log on every run, ensuring continuous financial observability.',
                    ciRegressionHead: 'What Prompt Regression Commits',
                    ciRegressionBody:
                        'Each regression run generates and uploads a <code>regression_diff.json</code> artifact—a ' +
                        'structured diff of changes between current answers and the baseline, containing similarity scores and response previews. ' +
                        'The history of how system responses evolved over time becomes audit-ready at the commit level, ' +
                        'rather than only at deploy time. If a context window tweak triples the ' +
                        'input token count, the cost monitor catches the anomaly in CI/CD ' +
                        'before the API bill arrives at month-end.',
                    threeLayersHead: 'The Architectural Model: Three Layers with Clear Ownership',
                    threeLayersBody:
                        'The conclusion of this audit reinforces that quality in AI systems requires a three-layer testing architecture: ' +
                        '<strong>The Evaluation Suite (Pytest + LLM-as-a-Judge)</strong> owns AI correctness. It ensures retrieval ' +
                        'precision, data faithfulness, and prompt regression gates. <strong>Deterministic E2E (Playwright/Cypress)</strong> ' +
                        'owns critical UI Happy Paths that cannot break upon deployment. ' +
                        '<strong>Exploratory Testing (Autonomous Agent or Human)</strong> owns discovery. It uncovers municipality counter drift, ' +
                        'silent failures on edge-case inputs, and session boundaries that no scripted test was written to verify. ' +
                        'Testing a RAG system with only one of these layers would have produced an ' +
                        'incomplete picture. The evaluation suite ensured the AI was telling the truth, while ' +
                        'the exploratory agent caught UI and data pipeline bugs that the AI layer could not see. ' +
                        'Both approaches were strictly necessary to ensure the system\'s production readiness.',
                },
                findings: {
                    f1: {
                        title: '1. Armadilhas de Alucinação: <strong>Capturando fabricação confiante</strong>',
                        category: 'hallucination_trap (Armadilhas de Alucinação)',
                        questions: '3 (hallucination_001 → 003)',
                        passCondition: 'Ressalva ou recusa explícita (pontua 1,0).',
                        p1:
                            '<strong>O problema:</strong> Três perguntas solicitam fatos que não ' +
                            'existem em nenhum documento fonte: "PIB agrícola de 2039", "El Niño de 2038" e ' +
                            '"Contagens de extinção de peixes no Rio São Francisco". Um LLM treinado com dados em ' +
                            'escala da internet possui conhecimento prévio e pode gerar respostas altamente plausíveis para as três questões. ' +
                            'O teste verifica estritamente se o modelo não utiliza esse conhecimento externo, mantendo-se confinado ao contexto fornecido.',
                        p2:
                            '<strong>Comportamento do Juiz (LLM-as-a-Judge):</strong> A flag <code>should_hedge</code> marca ' +
                            'esses casos como cenários onde a recusa é a resposta desejada. O prompt do juiz ' +
                            'declara explicitamente: se a IA responder "Não encontrei essa informação nos ' +
                            'trechos fornecidos" a nota atribuída deve ser 1,0. Recusar-se a fabricar dados ' +
                            'é o comportamento correto do sistema, não uma falha.',
                        p3:
                            '<strong>A proteção <code>must_not_contain</code> (Validação Determinística):</strong> Para evitar a dependência ' +
                            'exclusiva da interpretação do LLM juiz cada armadilha carrega termos proibidos que são verificados de forma programática. ' +
                            'Se o ano "2039" ou palavras como "trilhões" aparecerem na resposta como uma afirmação factual o teste falha via assert  ' +
                            'do Pytest antes mesmo do juiz rodar. Isso garante uma reprovação determinística, sem margem para ambiguidades.',
                        label: 'Exemplo de armadilha (golden_set.json):',
                    },
                    f2: {
                        title: '2. Faithfulness Calibration: <strong>The Hardest Design Decision</strong>',
                        threshold: '0.70 factual and 0.60 synthesis',
                        questions: '14 (factual + synthesis)',
                        p1:
                            '<strong>The Calibration Problem (False Negatives):</strong> An early version of the golden set ' +
                            'included the word "billions" as a required term for an energy sector question. However, the system prompt ' +
                            'instructs the model to refuse generating absolute numbers that are not ' +
                            'explicitly present in the retrieved chunks. A strict and safe prompt produces a correct ' +
                            'refusal, but a poorly designed test would mark that refusal as a failure. ' +
                            'The notes field in the JSON tracks the history of this architectural decision: <em>"Strict prompt refuses absolute values not in ' +
                            'chunks, removed \'billions\', kept multiplier and model name as ' +
                            'stable anchors."</em>',
                        p2:
                            '<strong>Why Use Dual Thresholds:</strong> The judge is also an LLM and therefore shares the ' +
                            'same failure modes (such as formatting sensitivity) as the system under test. A score of 0.75 does not mean "75% ' +
                            'correct"; it means the judge is reasonably confident that the answer is ' +
                            'grounded in the context. Synthesis questions (which require cross-referencing multiple documents) receive a 10% lower passing bar ' +
                            '(0.60). This is because cross-sector reasoning produces answers structured differently from the benchmark, ' +
                            'yet still factually faithful to the sources. Dual thresholds explicitly encode inherent LLM uncertainty, ' +
                            'rather than treating AI verdicts as strictly binary.',
                    },
                    f3: {
                        title: '3. Prompt Regression: <strong>Two-Way Drift Detection</strong>',
                        mode: 'Capture → Compare',
                        artifact: 'regression_diff.json (Committed to repository)',
                        p1:
                            '<strong>Two-Way Drift Detection:</strong> Tweaking system prompt instructions to handle out-of-scope queries ' +
                            'often accidentally breaks factual answers that were previously working. ' +
                            'To mitigate this, the suite checks for regressions across two simultaneous directions. First, it looks for missing anchor terms, ' +
                            'catching direct regressions (the AI stopped mentioning a fact it used to include). ' +
                            'Second, it looks for unmapped new numbers, catching a much more subtle failure: if the AI starts generating numbers ' +
                            'absent from the baseline, it indicates a prompt change unintentionally loosened ' +
                            'factual constraints, allowing the model to hallucinate quantitative data.',
                        label: 'Regression test (Two-way number verification):',
                    },
                    f4: {
                        title: '4. Out-of-Scope Handling: <strong>Scope Enforcement Under the Judge</strong>',
                        questions: '2 (Cake recipe + World Cup prediction)',
                        passCondition: 'Safety score ≥ 0.60 OR ≥ 2 matched hedge phrases.',
                        p1:
                            '<strong>Design Intent (Guardrailing):</strong> The system prompt contains an explicit redirection instruction: ' +
                            '"This question is out of scope for the Brasil 2040 assistant." These tests verify that this restriction holds firm under evaluation, ' +
                            'ensuring a cooking question triggers a polite refusal rather than allowing the model ' +
                            'to escape context and generate an answer based on prior training data.',
                        p2:
                            '<strong>Double-Verification Approach:</strong> The test assertion provides two paths to ' +
                            'pass: either the LLM judge\'s safety score meets the minimum threshold, or at least 2 specific ' +
                            'hedge phrases (verified via Regex/String Matching) appear in the generated response. This redundancy prevents false negatives ' +
                            'should the judge misclassify a valid refusal, while ' +
                            'deterministically catching genuine scope failures.',
                        p3:
                            '<strong>Known Limitations (Untested Scenarios):</strong> This test does not cover Adversarial Prompt Injection (Prompt Injection / Jailbreaking)—' +
                            'for instance, a malicious instruction disguised as climate research to force the AI to bypass its rules. That attack vector requires ' +
                            'dedicated Red Teaming (offensive security). This limitation was explicitly documented in the QA report ' +
                            'as a known gap and an accepted risk for the current version.',
                    },
                },
                diagram1: {
                    sourceBoxX: '10', sourceBoxY: '60', sourceBoxW: '110', sourceBoxH: '60',
                    kaggleBoxX: '155', kaggleBoxY: '40', kaggleBoxW: '130', kaggleBoxH: '100',
                    fastapiBoxX: '155', fastapiBoxY: '200', fastapiBoxW: '130', fastapiBoxH: '100',
                    geminiBoxX: '324', geminiBoxY: '220', geminiBoxW: '110', geminiBoxH: '60',
                    supabaseBoxX: '320', supabaseBoxY: '60', supabaseBoxW: '110', supabaseBoxH: '60',
                    supabaseTextX: '375',
                    supabaseSectionY: '78', supabaseTitleY: '96', supabaseSubY: '112',
                    // --- Fase de construção (Source → Kaggle → Supabase) ---
                    sourceTextX: '65',
                    kaggleTextX: '220',
                    kaggleDividerX1: '157', kaggleDividerY1: '80', kaggleDividerX2: '283', kaggleDividerY2: '80',
                    kaggleHeadY: '58', kaggleSub1Y: '73', kaggleSub2Y: '96', kaggleSub3Y: '110', kaggleSub4Y: '124',

                    arrowSourceToKaggleX1: '120', arrowSourceToKaggleY1: '90', arrowSourceToKaggleX2: '153', arrowSourceToKaggleY2: '90',
                    arrowKaggleToSupabaseX1: '285', arrowKaggleToSupabaseY1: '90', arrowKaggleToSupabaseX2: '318', arrowKaggleToSupabaseY2: '90',
                    extractLabelX: '137', extractLabelY: '82',
                    uploadLabelX: '302', uploadLabelY: '82',

                    // --- Fase de runtime (Client → FastAPI → Gemini → QA Layer) ---
                    fastapiTextX: '220',
                    fastapiDividerX1: '157', fastapiDividerY1: '240', fastapiDividerX2: '283', fastapiDividerY2: '240',
                    fastapiHeadY: '218', fastapiLabelY: '233', fastapiSub1Y: '252', fastapiSub2Y: '266', fastapiSub3Y: '280',

                    geminiTextX: '375',
                    geminiSectionY: '238', geminiTitleY: '256', geminiSubY: '272',

                    arrowClientToFastapiX1: '112', arrowClientToFastapiY1: '250', arrowClientToFastapiX2: '153', arrowClientToFastapiY2: '250',
                    arrowFastapiToGeminiX1: '285', arrowFastapiToGeminiY1: '250', arrowFastapiToGeminiX2: '318', arrowFastapiToGeminiY2: '250',
                    arrowGeminiToQaX1: '375', arrowGeminiToQaY1: '220', arrowGeminiToQaX2: '375', arrowGeminiToQaY2: '122',
                    questionLabelX: '133', questionLabelY: '242',
                    contextLabelX: '305', contextLabelY: '242',
                    retrieveLabelX: '407', retrieveLabelY: '172',

                    arrowPipelineToQaX1: '430', arrowPipelineToQaY1: '170', arrowPipelineToQaX2: '488', arrowPipelineToQaY2: '170',
                    testsLabelX: '460', testsLabelY: '163',
                    source: 'Source',
                    pdfs: '12 PDFs',
                    pdfsSub: 'Brazilian gov. research',
                    kaggleHead: 'Kaggle GPU Notebook',
                    kaggleSub1: 'PyMuPDF + table extract',
                    kaggleSub2: 'sentence-aware chunking',
                    kaggleSub3: 'multilingual-e5-large',
                    kaggleSub4: '1,024-dim embeddings',
                    vectorStore: 'Vector Store',
                    supabase: 'Supabase',
                    supabaseSub: 'pgvector · HNSW index',
                    extract: 'extract',
                    upload: 'upload',
                    client: 'Client',
                    browser: 'Browser',
                    browserSub: 'D3.js map + chat',
                    fastapiHead: 'HuggingFace Spaces',
                    fastapi: 'FastAPI',
                    fastapiSub1: 'query: embed question',
                    fastapiSub2: 'cosine search top_k=5',
                    fastapiSub3: 'stream via Gemini',
                    generation: 'Generation',
                    geminiApi: 'Gemini API',
                    geminiSub: 'grounded in chunks',
                    retrieve: 'retrieve',
                    question: 'question',
                    context: 'context',
                    qaLayerHead: 'QA Layer, 4 Eval Stages',
                    tests: 'tests',
                    stage1: 'Stage 1',
                    stage1Title: 'Retrieval Precision@K',
                    stage1Sub: 'Right file · right terms',
                    stage2: 'Stage 2',
                    stage2Title: 'Faithfulness',
                    stage2Sub: 'Every claim ← context',
                    stage3: 'Stage 3',
                    stage3Title: 'Hallucination Traps',
                    stage3Sub: '3 non-existent events',
                    stage4: 'Stage 4',
                    stage4Title: 'Prompt Regression',
                    stage4Sub: 'Anchor diff + new numbers',
                    scoutAgent: 'ScoutQA AI Agent',
                    scoutAgentSub: '30 min browser exploration · 8 flows · no script',
                },
                diagram2: {
                    svgViewBox: '0 0 860 240',

                    // --- Coluna 2 — AI Agent ---
                    col2BoxX: '300', col2BoxY: '10', col2BoxW: '250', col2BoxH: '220',
                    col2HeadX: '425',
                    col2DividerX1: '302', col2DividerY1: '57', col2DividerX2: '548', col2DividerY2: '57',
                    col2TickX: '318',
                    col2BodyX: '336',

                    // --- Coluna 3 — Neither Covers / Known gaps ---
                    col3BoxX: '590', col3BoxY: '10', col3BoxW: '260', col3BoxH: '220',
                    col3HeadX: '720',
                    col3DividerX1: '592', col3DividerY1: '57', col3DividerX2: '848', col3DividerY2: '57',
                    col3TickX: '608',
                    col3BodyX: '626',
                    col3NoteX: '608',

                    evalSuiteSub: 'Pytest + LLM-as-a-Judge',
                    e1: 'Retrieval accuracy (source file)',
                    e2: 'Context faithfulness (Groundedness)',
                    e3: 'Hallucination detection (Honeypots)',
                    e4: 'Out-of-scope refusals (Guardrailing)',
                    e5: 'Prompt regression gate',
                    e6: 'Latency SLA + cost/query',
                    e7: 'DOM state / Rendered UI',
                    e8: 'Interactive map / D3.js charts',
                    agentHead: 'Autonomous AI Agent',
                    agentSub: 'ScoutQA · 30 Minutes',
                    a1: 'Navigation and tab switching',
                    a2: 'Interaction with 11 crop filters + 3 scenarios',
                    a3: 'Visual KPI validation vs Specification (e.g., 16.7×, 99%)',
                    a4: 'Tooltip behavior and sidebar locking',
                    a5: 'Out-of-scope refusal confirmed in UI',
                    a6: 'Environmental bug discovery (UI counter drift)',
                    a7: 'Semantic faithfulness of AI response',
                    a8: 'Prompt scoping / Adversarial injection',
                    gapsHead: 'Known Gaps',
                    gapsSub: 'Covered by neither',
                    g1: 'Prompt injection attacks (Jailbreaking)',
                    g2: 'Adversarial Red-Teaming',
                    g3: 'Rate limiting and token quotas',
                    g4: 'Mobile events / Touch gestures',
                    g5: 'Chat streaming verification via WebSocket',
                    gapsNote1: 'Mitigation: Requires',
                    gapsNote2: 'dedicated E2E tests via Playwright + manual Red-Team',
                },
            },
            playwright: {
                title: 'Playwright E2E Automation Suite',
                intro1:
                    'The end-to-end regression suite contains <strong>24 spec files and 161 tests</strong> built with ' +
                    '<strong>Playwright + TypeScript</strong>. The automation target is <strong>Practice Software Testing ' +
                    '(Toolshop)</strong>, an open-source e-commerce application built with Angular, Laravel, and MariaDB. The scope covers the customer ' +
                    'journey (catalog, cart, checkout, payment), account security (registration, TOTP/2FA, password ' +
                    'recovery, account lockout), chat widget, geolocation, stacked discounts, internationalization (i18n) across six languages, ' +
                    'and the administrative back office. Execution runs on ' +
                    'a self-hosted CI/CD pipeline configured on GitHub Actions. ',
                intro2:
                    'This document details the suite\'s architecture and the debugging process. The analysis covers the selection of locators resilient to ' +
                    'language changes, the investigation of strict mode violations that uncovered ' +
                    'specific UI behaviors, and the architectural shift in CI/CD: moving from tests running against ' +
                    'a public environment to containerizing the application directly on the runner.',
                tldr: {
                    label: 'TL;DR',
                    li1: '161 tests across 8 functional domains: catalog & product discovery, ' +
                        'checkout, authentication & account security, personalization, post-purchase & ' +
                        'support, admin operations, conversational & discount engine and compliance/i18n, ' +
                        'each test tagged to a real acceptance criterion from the app\'s published user stories.',
                    li2: '7 flakiness root causes, each different: four separate strict-mode ' +
                        'violations (duplicated text, a stale <code>.first()</code> reference, a shared ' +
                        'CSS class, an ever-growing chat DOM), a network-listener typo masking a real ' +
                        'write-to-search race, a collapsed sidebar tree that only broke in CI, and a TOTP ' +
                        'clock-drift bug that took the longest to reproduce.',
                    li3: 'The CI pipeline itself went through a real debugging journey, from testing ' +
                        'the public site (blocked by Cloudflare, 60+ flaky failures) to an 11-step ' +
                        'pipeline that builds the full stack from source inside the runner, landing at ' +
                        '161 tests running fully local and deterministic.',
                },
                links: {
                    github: 'GitHub Repository',
                    sut: 'View System Under Test (SUT)',
                    sprint: 'Agile User Story Sprint',
                },
                tech: {
                    framework: 'Test Framework:',
                    cicd: 'CI/CD & Infrastructure:',
                    sut: 'System Under Test (SUT):',
                },
                ciLabel: '24 spec files · 161 tests · Chromium · running against a self-hosted Docker Compose stack',
                sections: {
                    systemIntro:
                        '<strong>The CI pipeline underwent an architectural shift.</strong> The initial version pointed ' +
                        'Playwright to the public production website. While most tests passed, ' +
                        'a group of over 60 tests (covering billing, login, and i18n) exhibited intermittent failures. ' +
                        'Expected elements did not appear in the DOM, unrelated to the test code. ' +
                        'The initial fix was increasing timeouts, but that did not work either; the true solution was eliminating the external environment dependency entirely.',
                    pivotHead: 'The Architectural Pivot Represented by This Diagram',
                    pivotBody:
                        'The application provides its own <code>docker-compose.yml</code> file, packaging Angular, ' +
                        'Laravel, and MariaDB as containerized services on defined ports. ' +
                        'Cloning and spinning up these services inside the runner moved the issue from an external constraint ' +
                        '(Cloudflare\'s bot policy) to a local environment. Failures became deterministic and tied to container configuration, ' +
                        'enabling debugging. The transition required more than updating the baseURL. ' +
                        'Because specs use <code>page.request</code> for direct test setup against the apiURL, keeping the production URL would cause the UI to run locally ' +
                        'while mutating production database state. The apiURL had to be redirected to the containerized environment.',
                    locatorIntro:
                        'Playwright\'s documentation recommends locator priority in the order <code>getByRole</code> → ' +
                        '<code>getByLabel</code>/<code>getByText</code> → <code>getByTestId</code> → and CSS as a ' +
                        'last resort. The application under test demonstrated that this guideline ' +
                        'must be adapted to real-world code implementation.',
                    testIdWinHead: 'The Case for getByTestId',
                    testIdWinBody:
                        'The application features a language picker (EN/DE/ES/FR/NL/TR) with form labels ' +
                        "translated via Angular Transloco. Using <code>getByLabel('First name')</code> works in English, " +
                        'but breaks when the browser\'s default language changes, even though the application functions properly. ' +
                        "<code>getByTestId</code>, configured via <code>testIdAttribute: 'data-test'</code>, " +
                        'is immune to translation because the attribute remains unchanged across any locale. ' +
                        'The suite standardized on <code>getByTestId</code> for most flows. <code>getByRole</code> ' +
                        'was reserved for elements with stable accessible names, such as ' +
                        'filter checkboxes, table columns, and buttons with fixed English copy. ' +
                        '<code>getByLabel</code> was used exclusively where the locale remains constant.',
                    neverGuessHead: 'Direct Source Code Validation',
                    neverGuessBody:
                        'Every locator was validated against the actual HTML via DevTools or by inspecting the Angular source code, ' +
                        'avoiding convention-based assumptions. The category page illustrates this practice. ' +
                        'Instead of assuming the price slider from the overview page would also exist there, ' +
                        'reading the Angular template confirmed that the <code>&lt;ngx-slider&gt;</code> element ' +
                        'is absent from the <code>/category/*</code> route. ' +
                        'This behavior was treated as a documented product bug and explicitly asserted, rather than skipped in automation.',
                    assertionLabel: 'Element absence assertion',
                    findingsIntro:
                        'Synchronization required detailed investigation. Test flakiness was treated ' +
                        'as a symptom, with each occurrence mapped to a specific root cause. ' +
                        'Merely increasing timeouts resolved only a fraction of the issues.',
                    viewSource: 'View source code —',
                    domainsIntro:
                        'The 24 spec files are mapped to eight functional application domains. Each ' +
                        'test is named and tagged (<code>@sprint5</code>, <code>@AC1</code>, ' +
                        '<code>@AC2</code>...) in 1:1 correspondence with a functional acceptance criterion. ' +
                        'The <em>Given/When/Then</em> format is included as an inline comment in the test body, ' +
                        'enabling execution filtering by criterion (<code>--grep @AC5</code>) ' +
                        'and generating reports traceable back to requirements.',
                    traceabilityHead: 'Requirements Traceability',
                    traceabilityBody:
                        'Acceptance criteria derive directly from the project\'s Sprint 5 user stories, ' +
                        'rather than reverse-engineering the interface. Error message copy ' +
                        'was preserved exactly per the specification, including grammatical slips ' +
                        '(e.g., "Your current password does not matches with the password."), ' +
                        'avoiding assertions against text the application does not render. ' +
                        'Where the specification and the application diverged, such as in the Contact Form, ' +
                        'where AC1 specified "Known user, [Full Name]" but the application rendered "Hello Jane Doe, please fill out...", ' +
                        'the test asserted against real application behavior, documenting the discrepancy rather than silently patching it.',
                    filesLabel: 'Files:',
                    fileLabel: 'File:',
                    cicdIntro:
                        'The final workflow does not run <code>npx playwright test</code> against a URL—it ' +
                        'builds the very thing under test from source, inside the runner, every single ' +
                        'time. Eleven sequential steps, each added to solve a problem that the ' +
                        'previous version actually encountered in practice.',
                    pipeline: {
                        s12Num: 'Steps 1–2', s12Title: 'Checkout and SUT Clone',
                        s12Body:
                            'Checks out the test repository, then clones the actual application source ' +
                            'code—testing against current product code, not a frozen image.',
                        s34Num: 'Steps 3–4', s34Title: 'Configure and Spin Up',
                        s34Body:
                            'Forces <code>production: true</code>, injects dummy Google OAuth ' +
                            'credentials so the build does not fail on a missing variable, then runs ' +
                            '<code>docker compose up --build --force-recreate</code>.',
                        s56Num: 'Steps 5–6', s56Title: 'Container Plumbing',
                        s56Body:
                            'Fixes permissions for <code>bootstrap/cache</code> / <code>storage</code> on the ' +
                            'newly created Laravel container, then installs Composer dependencies ' +
                            'inside it.',
                        s79Num: 'Steps 7–9', s79Title: 'Health Checks and Seeding',
                        s79Body:
                            'Active polling loops (<code>mysqladmin ping</code>, then <code>curl</code> ' +
                            'for API and UI) instead of a fixed sleep, followed by <code>migrate:fresh --seed</code> ' +
                            'and a background queue worker.',
                        s1011Num: 'Steps 10–11', s1011Title: 'Test and Report',
                        s1011Body:
                            'Runs the Chromium project with <code>URL</code>/<code>API_URL</code> pointing to ' +
                            'localhost, and uploads the HTML report as an artifact even if tests fail.',
                    },
                    metrics: {
                        m1: 'Spec files across<br>8 functional domains',
                        m2: 'Tests in the suite\'s<br>final stable state',
                        m3: 'CI pipeline steps,<br>each solving a real failure',
                        m4: 'Architectural pivot:<br>public site → self-hosted stack',
                    },
                    cicdIntro2:
                        'It was running this final, fully local version—with the external network dependency ' +
                        'finally eliminated—that the "Hidden Hammer" bug from Finding 6 surfaced. ' +
                        'Removing an entire class of issue (Cloudflare) exposed the next layer beneath ' +
                        'it (initial UI state differing between production and a freshly deployed local build). ' +
                        'CI/CD debugging proved to be a sequential process of elimination, not a single ' +
                        'event.',
                    trace: {
                        passing: '✓ passing', againstProd: 'Against production',
                        cloudflare: 'Cloudflare', flakyFailures: '60+ flaky failures<br>in GitHub Actions',
                        dockerPivot: 'Docker pivot', networkFixed: 'network layer fixed,<br>new issue surfaces',
                        hammerHidden: 'Hidden hammer', collapsedTree: 'collapsed tree,<br>timeout in CI only',
                        passing161: '✓ 161 tests', stableDeterministic: 'stable, deterministic,<br>fully local',
                    },
                    rootCauseLabel: 'Root-cause classification, same symptom, different diagnoses',
                    table2: {
                        headSymptom: 'Symptom', headCategory: 'Category', headRightResponse: 'Right response?',
                        headNotes: 'Notes',
                        row1Symptom: 'Strict mode violation (4 cases)',
                        row1Category: 'Test / App coupling', row1Response: 'No generic fix',
                        row1Notes:
                            'Each traced back to a distinct app characteristic—duplicate copy, ' +
                            'shared CSS class, cumulative DOM, positional drift',
                        row2Symptom: 'Timeout on public site tests in CI',
                        row2Category: 'Infrastructure (third-party)', row2Response: 'Remove the dependency',
                        row2Notes:
                            'Cloudflare bot management on GitHub Actions datacenter IPs—not ' +
                            'fixable on the test side',
                        row3Symptom: 'waitForResponse rejects on a bad predicate; still flaky after fix',
                        row3Category: 'Test bug, then real timing', row3Response: 'Typo fixed; still investigating',
                        row3Notes:
                            "A typo in 'QUERY' masked the real issue initially; " +
                            'remaining flakiness likely reflects genuine write-to-fetch timing, ' +
                            'not a test bug—tracked, not hidden',
                        row4Symptom: 'Intermittent timeouts on public production endpoints',
                        row4Category: 'Real server latency', row4Response: 'Increase tolerance',
                        row4Notes:
                            'Only after ruling out logic errors—the same flow passed cleanly in another ' +
                            'browser in the exact same run',
                        row5Symptom: 'Checkbox never becomes visible—in CI only',
                        row5Category: 'Environment divergence', row5Response: 'Fix interaction path',
                        row5Notes: 'Sidebar tree collapsed by default in Sprint 5 Docker build, not in production',
                        row6Symptom: 'Valid TOTP rejected intermittently',
                        row6Category: 'Clock skew', row6Response: 'Sync with server time',
                        row6Notes: 'Lowest-frequency, highest-reproduction-cost bug in the suite',
                        row7Symptom: 'Final suite run, fully Dockerized',
                        row7Category: 'Stable', row7Response: '—',
                        row7Notes: '161 tests, deterministic, zero external network dependency',
                    },
                    hybridHead: 'Hybrid Testing: API for Setup, UI for Validation',
                    hybridBody:
                        '<code>page.request</code> prepares state directly via API whenever a test ' +
                        'only requires a <em>state</em>, rather than a validated journey to reach it: ' +
                        'registration and login tokens, cart or favorites seeding, generating ' +
                        'full invoices to test invoice rendering in isolation, and elevating ' +
                        "to an admin session to toggle a user's <code>enabled</code> flag for " +
                        'edge-case testing. <code>page.route()</code> is used sparingly to mock ' +
                        'the invoice endpoint during the chat widget checkout flow—isolating this ' +
                        'specific UI journey from an unrelated backend ZIP code lookup ' +
                        'dependency.',
                    isolationHead: 'Data Isolation Between Tests',
                    isolationBody:
                        'Any test mutating user state (password, TOTP, account lockout, ' +
                        'favorites) creates its own account via API with a unique email ' +
                        '(<code>user-${Date.now()}@example.com</code>), never reusing a static account for ' +
                        'destructive operations. The two shared demo accounts (<code>customer@...</code>, ' +
                        '<code>admin@...</code>) are strictly reserved for read-only or non-destructive ' +
                        'scenarios—eliminating the classic "one test breaks the next" failure caused by ' +
                        'execution order coupling.',
                    businessMath:
                        'Business math is never hardcoded when it can be derived: cart ' +
                        'line totals are recalculated from the unit price read from the DOM, rental ' +
                        'totals from hourly-rate × slider-duration, and the 15% stacked discount ' +
                        'is asserted with floating-point tolerance (<code>toBeCloseTo</code>) against a ' +
                        'subtotal read directly from the page—making each assertion resilient to ' +
                        'price updates or seed data changes across runs.',
                    knownBugsHead: 'Documenting Known Bugs Instead of Hiding Them',
                    knownBugsBody:
                        'Two confirmed application defects—address auto-fill for a ' +
                        'logged-in user at checkout, and an unhandled JavaScript exception when initiating ' +
                        'chat checkout with an empty cart—are preserved in the suite via ' +
                        "<code>test.fixme(true, 'reason')</code> rather than deleted. Test intent and " +
                        'expected assertions remain in the codebase and visible in test outputs without ' +
                        'failing the pipeline. A third defect—a genuine race condition in payment ' +
                        'confirmation where the first click merely "warms up" internal state and only the ' +
                        'second click actually creates the order—was likewise not masked: the test reproduces the ' +
                        'exact two-click behavior with two distinct, sequential <code>waitForResponse</code> ' +
                        'calls, proving real user behavior rather than concealing the flaw ' +
                        'behind an artificial workaround.',
                },
                diagram: {
                    attempt1: 'Attempt 1, testing against the public site',
                    ghRunner: 'GH Actions Runner',
                    azureIp: 'Azure datacenter IP',
                    cloudflare: 'Cloudflare',
                    botChallenge: 'bot challenge / 403',
                    angularLoading: 'Angular UI never finishes loading',
                    blocked: 'blocked',
                    intermittentArrow: '→ intermittent',
                    elementNotFound: '"element not found" errors',
                    attempt2: 'Attempt 2, self-hosted stack, entirely inside the runner',
                    ghActions: 'GH Actions',
                    runner: 'Runner',
                    clonesSut: 'clones SUT repo',
                    dockerComposeUp: 'docker compose up',
                    healthCheckLoops: 'health-check loops',
                    dockerComposeHead: 'Docker Compose (localhost)',
                    angularUi: 'Angular UI',
                    laravelApi: 'Laravel API',
                    mariadb: 'MariaDB',
                    seededPerRun: 'seeded per run',
                    testExecution: 'Test Execution',
                    playwrightLabel: 'Playwright',
                    chromium: '(Chromium)',
                    noExternalNetwork: 'no external network,',
                    noCloudflare: 'no Cloudflare in the path',
                    bootsStack: 'boots stack',
                    testsHit: 'tests hit',
                },
                findings: {
                    f1: {
                        title: '1. Strict Mode, Case 1: <strong>Ambiguous Text Between Title and Description</strong>',
                        symptom: 'Strict mode violation, with the locator resolving to 2 elements.',
                        rootCause: 'Free-text search matched content in two different locations.',
                        fixPattern: 'Constrain the locator to a specific test-id rather than free text.',
                        p1:
                            '<strong>What broke:</strong> The test verifying favorite removal used ' +
                            "<code>page.getByText('Combination Pliers')</code>. Playwright halted execution, " +
                            'indicating the locator resolved to two elements. ' +
                            'Inspecting the product card revealed the name appeared in the ' +
                            '<code>&lt;h5 data-test="product-name"&gt;</code> tag <em>as well as</em> inside ' +
                            '<code>&lt;p data-test="product-description"&gt;</code>. ' +
                            'The description copy contained the product name.',
                        p2:
                            '<strong>The lesson:</strong> Free-text matching is risky when the full page ' +
                            'content is not completely known, ' +
                            'as the string can surface in unexpected places. Constraining the query to a specific ' +
                            '<code>data-test</code> attribute eliminates ambiguity at the source.',
                    },
                    f2: {
                        title: '2. Strict Mode, Case 2: <strong>The .first() Trap</strong>',
                        symptom: 'False positive, with the test passing without validating deletion.',
                        rootCause: 'Locators are dynamic, and the .first() method is re-evaluated on every call.',
                        fixPattern: 'Assert element count rather than relying on a reference that becomes stale.',
                        p1:
                            '<strong>What broke:</strong> The initial approach for an item deletion test was to ' +
                            'select the first card, click the delete button, and assert that the card was hidden. ' +
                            'Because Playwright locators are re-evaluated on every call, removing Card 1 from the ' +
                            'DOM causes former Card 2 to become the new first card. ' +
                            'The assertion <code>expect(firstCard).toBeHidden()</code> re-evaluates the locator, finds the new element in the first ' +
                            'position, sees that it is visible, and the deletion assertion never happens.',
                        p2:
                            '<strong>The lesson:</strong> This behavior generates a false positive. ' +
                            'The implemented fix was to verify the element count before and after the action, ' +
                            'validating system state directly rather than relying ' +
                            'on an element reference whose meaning shifts silently.',
                        label: 'Fix: Count-based assertion',
                    },
                    f3: {
                        title: '3. Strict Mode, Case 3: <strong>One CSS Class, Two Table Columns</strong>',
                        symptom: 'Strict mode violation, with the locator resolving to 2 elements.',
                        rootCause: 'The same [ngClass] directive was shared across unit price and line total columns.',
                        fixPattern: 'Analyze table structure to decide which column to assert against.',
                        p1:
                            '<strong>What broke:</strong> The discount test on the product details page used ' +
                            "<code>page.locator('span.discounted')</code>, which resolved to two elements. " +
                            'Inspecting the HTML revealed that the <code>discounted</code> class was ' +
                            'applied by the same Angular <code>[ngClass]</code> conditional across both the unit price ' +
                            'column <em>and</em> the line total column.',
                        p2:
                            '<strong>The lesson:</strong> The fix required understanding the table structure to define ' +
                            'and document which of the two columns the test needed to validate, ' +
                            'rather than applying an arbitrary <code>.first()</code>.', 
                    },
                    f4: {
                        title: '4. Strict Mode, Case 4: <strong>Chat History That Never Cleans Up</strong>',
                        symptom: 'Strict mode violation, with the locator resolving to 5 elements.',
                        rootCause: 'The chat DOM is never cleared, keeping all previous messages mounted.',
                        fixPattern: 'Target .last() to select the most recent instance.',
                        p1:
                            '<strong>What broke:</strong> The chat widget\'s "Back to menu" button ' +
                            'reappears at every conversational step, and the DOM keeps all previous ' +
                            'messages mounted. In a support ticket flow, ' +
                            "<code>getByTestId('chat-action-back-to-menu')</code> resolved to five identical buttons simultaneously. " +
                            'This was genuine UI behavior, not a test error.',
                        p2:
                            '<strong>The lesson:</strong> The fix consisted of using <code>.last()</code> ' +
                            'to select the newest element in the conversation, rather than assuming only one button existed. ' +
                            'The four strict mode cases revealed distinct application traits ' +
                            '(duplicate text, shared CSS, cumulative UI history, ' +
                            'positional drift), requiring specific solutions for each.',
                    },
                    f5: {
                        title: '5. A Typo, Not a Race Condition: <strong>The Cost of a Manual Network Listener</strong>',
                        symptom: 'Flaky failure, where the edited row is not always first after a re-search.',
                        rootCause:
                            "A typo (<code>'QUERY'</code> instead of <code>'GET'</code>) " +
                            'masked the real issue. The underlying race condition ' +
                            'involves the latency between the database write and the search index update.',
                        status: 'Open, mitigated via retry.',
                        p1:
                            '<strong>What broke on the first pass:</strong> Editing and re-searching a product in the admin dashboard used ' +
                            '<code>page.waitForResponse(r => ' +
                            "r.request().method() === 'QUERY' ...)</code>. The HTTP method <code>'QUERY'</code> " +
                            "is invalid, being a typo for <code>'GET'</code>, " +
                            'which prevented the promise from resolving. Manually ' +
                            'tracking a network listener across multiple searches in the same test proved brittle.',
                        p2:
                            '<strong>What remains true today:</strong> Replacing the manual listener with an auto-waiting assertion ' +
                            'improved test stability. However, intermittent flakiness persists ' +
                            'in some CI runs, with the edited row failing to appear ' +
                            'first within the timeout window. This points to a genuine timing gap ' +
                            'between the backend database write and search index refresh, rather than a test bug.',
                        p3:
                            '<strong>The lesson:</strong> Awaiting the correct network response is necessary, ' +
                            'but returned payload data must be verified against test expectations. ' +
                            'Persistent flakiness after fixing the root cause was transparently documented. ' +
                            'Playwright\'s retry absorbs the failure for now, and filtering rows by content rather than positional index is under evaluation.',
                        codeComment: 'actual failure from a real CI run, preserved here rather than hidden',
                    },
                    f6: {
                        title: '6. The Hidden Hammer: <strong>UI State Differs Between Production and CI</strong>',
                        symptom: "Timeout on getByRole('checkbox', {name:'Hammer'}) in CI only.",
                        rootCause: 'The Dockerized build (Sprint 5) initializes with the category tree collapsed.',
                        fixPattern: 'Expand parent category before asserting on a child item.',
                        p1:
                            '<strong>What broke:</strong> A category filter test that passed in production ' +
                            'began timing out in CI following the Docker transition. ' +
                            'The sidebar category tree in the local build (Sprint 5) ' +
                            'initializes collapsed by default, concealing the "Hammer" checkbox inside the parent item "Hand Tools". ' +
                            'Playwright refuses to interact with hidden elements and ' +
                            'exhausted its 30s timeout waiting for element visibility.',
                        p2:
                            '<strong>The real lesson:</strong> Diagnostics confirmed that a Playwright timeout ' +
                            'almost always reflects actual application state (hidden, disabled, or off-' +
                            'screen), rather than a framework defect. ' +
                            'Structural comparison across environments preceded the test modification.',
                        label: 'Fix: Expand parent before asserting on child',
                    },
                    f7: {
                        title: '7. Clock Skew in TOTP: <strong>The Hardest Bug to Reproduce on Demand</strong>',
                        symptom: 'Intermittent "invalid" TOTP on otherwise correct codes.',
                        rootCause: 'TOTP relies on strict time windows; clock drift existed between local test runner and server.',
                        fixPattern: 'Derive an offset from the API Date header and generate codes against it.',
                        p1:
                            '<strong>What broke:</strong> TOTP tokens generated with the ' +
                            '<code>otpauth</code> library (SHA1, 6 digits, 30s period) using the ' +
                            'app\'s own exposed secret (<code>data-test="totp-secret"</code>) failed ' +
                            'verification intermittently. A drift of just a few seconds ' +
                            'between the test runner clock and the server clock was ' +
                            'enough to produce a token inside the wrong 30-second window.',
                        p2:
                            '<strong>The fix:</strong> The fix involved reading the <code>Date</code> header returned by the ' +
                            'API during user registration, calculating a <code>timeOffset</code>, and generating ' +
                            'subsequent tokens using <code>Date.now() + timeOffset</code> rather than the local system clock. ' +
                            'Low occurrence frequency and challenging reproducibility made this one of the most expensive bugs to diagnose in the suite.',
                        label: 'Fix: Sync with server time before generating a code',
                    },
                },
                domains: {
                    d1: {
                        title: '<strong>Catalog &amp; Product Discovery</strong>',
                        count: '3 files · 33 tests',
                        li1:
                            '<strong>Overview grid:</strong> card content (image, name, price), ' +
                            'search with active filter reset, category and brand checkboxes, hierarchical ' +
                            'parent/child category selection, sorting (name/price, both directions), the ' +
                            'price range slider (default $1–$100, maximum $200) driven via simulated mouse ' +
                            'drag <em>and</em> keyboard arrow input, and discount/out-of-stock ' +
                            'badges.',
                        li2:
                            '<strong>Product details:</strong> quantity selector bounded between 1 and ' +
                            '999,999,999, add-to-cart success message, disabled button ' +
                            'when out of stock, favorites (add / duplicate / unauthorized), and ' +
                            'related products.',
                        li3:
                            '<strong>Rentals:</strong> duration slider (1–10 hours, driven via keyboard ' +
                            'for determinism) and the assertion <code>total = hourly_rate × duration</code>, ' +
                            'recalculated from the DOM rather than hardcoded.',
                    },
                    d2: {
                        title: '<strong>Checkout Flow</strong>',
                        count: '4 files · 24 tests',
                        li1:
                            '<strong>Cart:</strong> quantity recalculation derived mathematically from ' +
                            'the read unit price (never a hardcoded expected value), item deletion with ' +
                            'count-based assertions (Finding 2), empty cart state, and the ' +
                            '15% discount badge/subtotal/total arithmetic on discounted items.',
                        li2:
                            '<strong>Login step:</strong> guest checkout form and full ' +
                            'TOTP-protected login reproduced end-to-end during checkout: ' +
                            'register, enable 2FA, log out, add to cart, and authenticate again through the ' +
                            'checkout wizard using a live TOTP token.',
                        li3:
                            '<strong>Address:</strong> field length boundaries asserted against Angular\'s ' +
                            '<code>ng-invalid</code> class, required field validation disabling ' +
                            '"Proceed", and a real postal code lookup flow (NL/1011AB) used specifically to ' +
                            'satisfy backend address validation in the order completion test.',
                        li4:
                            '<strong>Payment:</strong> all five payment methods and their fieldsets, ' +
                            'credit card expiration date validation, and a documented ' +
                            'UI race condition on the "Confirm" button (see Section 6) faithfully ' +
                            'reproduced with two sequential clicks rather than masked.',
                    },
                    d3: {
                        title: '<strong>Authentication &amp; Account Security</strong>',
                        count: '6 files · 38 tests',
                        li1:
                            '<strong>Registration and password strength:</strong> all required fields, ' +
                            'real-time password requirements feedback, and the 5-level ' +
                            'strength meter (Weak → Excellent), reused between registration and password change. The ' +
                            "latter required a manual <code>dispatchEvent('input')</code> to bypass " +
                            "an <code>updateOn: 'blur'</code> delay.",
                        li2:
                            '<strong>Login:</strong> role-based redirection (customer vs. admin), ' +
                            'invalid credentials, account lockout after 3 failed attempts (HTTP 423 + ' +
                            'message), admin lockout exemption, disabled account rejection (HTTP ' +
                            '403), and Google OAuth popup validation (domain, callback route, window dimensions) ' +
                            'without authenticating against the live third-party provider.',
                        li3:
                            '<strong>TOTP:</strong> complete setup lifecycle (QR code, manual secret, ' +
                            'verification, invalid token) plus the server clock synchronization ' +
                            'fix from Finding 7 and the business rule denying ' +
                            'TOTP setup to the two shared demo accounts.',
                        li4:
                            '<strong>Profile and password change:</strong> editable vs. read-only fields, ' +
                            'successful updates with fade-out confirmation, password mismatch ' +
                            'and current password verification errors, and forced logout following a ' +
                            'successful password change.',
                    },
                    d4: {
                        title: '<strong>Personalization</strong>',
                        count: '2 files · 5 tests',
                        li1:
                            '<strong>Favorites:</strong> the list is seeded entirely via API (register → ' +
                            'login → <code>/favorites</code>) rather than clicking through the UI three times, keeping the ' +
                            'test focused on the favorites page itself; empty state and item removal are ' +
                            'covered separately.',
                        li2:
                            '<strong>Category navigation:</strong> confirms that the category page ' +
                            'shares category/brand filters, sorting, and pagination with the overview grid, ' +
                            'but explicitly documents that the price slider does <em>not</em> exist there (see Section 3).',
                    },
                    d5: {
                        title: '<strong>Post-Purchase &amp; Support</strong>',
                        count: '3 files · 19 tests',
                        li1:
                            '<strong>Invoices:</strong> generated PDF invoices linked to real orders, ' +
                            'validated by presence and identifying metadata rather than pixel-level rendering.',
                        li2:
                            '<strong>Messages:</strong> a paginated table (subject, message truncated at ' +
                            '50 characters, status badge, date, details link), chronological reply sorting ' +
                            'verified by comparing two actual timestamps, and UI reply submission ' +
                            'with real network response awaiting.',
                        li3:
                            '<strong>Contact form:</strong> autofill and field visibility toggling ' +
                            'for logged-in users, required field validation for guests, the ' +
                            '50-character minimum message constraint, and the unusual file attachment ' +
                            'rule (only <code>.txt</code>, exactly 0 KB in size), ' +
                            'tested using in-memory buffers rather than committed fixture files.',
                    },
                    d6: {
                        title: '<strong>Admin Operations</strong>',
                        count: '1 file · 9 tests',
                        li1:
                            '<strong>Dashboard:</strong> the sales chart canvas and the paginated ' +
                            'table of recent invoices.',
                        li2:
                            '<strong>Full CRUD suites:</strong> products, categories, and brands follow ' +
                            'the same add → search → edit → search → delete UI lifecycle, with ' +
                            'unique randomized names to prevent collisions between parallel or ' +
                            'repeated runs. Users are seeded via API and subsequently edited/deleted through the UI.',
                        li3:
                            '<strong>Order management:</strong> status dropdown values ' +
                            '(<code>AWAITING_FULFILLMENT</code> → <code>COMPLETED</code>) and order ' +
                            'edit detail sections.',
                        li4:
                            "<strong>Enable/disable account:</strong> toggling a user's <code>enabled</code> " +
                            'flag via the admin dashboard and verifying, in a <em>second browser ' +
                            'context</em> logged in as that customer, that login is genuinely blocked and then ' +
                            'restaurado, a real cross-session effect rather than just a cosmetic UI checkbox state.',
                        li5:
                            '<strong>Reports:</strong> monthly/weekly sales charts and the four ' +
                            'breakdown panels on the statistics page.',
                    },
                    d7: {
                        title: '<strong>Conversational &amp; Discount Engine</strong>',
                        count: '3 files · 22 tests',
                        li1:
                            '<strong>Chat widget:</strong> the menu (Search Product / Order Product / ' +
                            'Checkout / Support), product search returning up to 5 result cards, a ' +
                            'complete order-to-cart flow with quantity selection, and an ' +
                            '<em>entire checkout wizard reimplemented conversationally</em>—' +
                            'cart summary → address → payment → confirmation, driven step-by-step ' +
                            'as a state machine where each bot response is content-verified before the ' +
                            'next input is sent. The invoice endpoint was mocked via ' +
                            '<code>page.route()</code> to isolate the chat flow from an unrelated ' +
                            'backend postal code lookup dependency. The empty cart scenario is a ' +
                            'documented <code>test.fixme</code>—it exposes a real JS exception ' +
                            '(<code>TypeError: reading cart_items of null</code>).',
                        li2:
                            '<strong>Geolocation discount:</strong> five cities × five discount ' +
                            'tiers (5%–25%), plus a neutral/unsupported location case, all driven by ' +
                            'mocked <code>GEO_LOCATION</code> coordinates in <code>localStorage</code> ' +
                            'injected via <code>page.addInitScript</code> before page load.',
                        li3:
                            '<strong>Stacked discount:</strong> the 15% cart-wide discount that ' +
                            'appears only when a rental item and a non-rental item share ' +
                            'the same cart, asserted on the cart page <em>and</em> re-verified against ' +
                            'a real invoice created via API, with the discount removed and reverted when the ' +
                            'mixed-cart condition is no longer met.',
                    },
                    d8: {
                        title: '<strong>Compliance &amp; Internationalization</strong>',
                        count: '2 files · 11 tests',
                        li1:
                            '<strong>i18n:</strong> automatic browser language detection across all ' +
                            '6 supported languages via <code>test.use({ locale })</code>, fallback to English ' +
                            'for unsupported locales, manual switching via the UI picker, and ' +
                            '<strong>persistence</strong>: a manually selected language must ' +
                            'survive a page reload and take precedence over automatic detection on the ' +
                            'next visit.',
                        li2:
                            '<strong>Privacy policy:</strong> presence of every mandatory disclosure ' +
                            'topic (Google Login, data collection, hourly automated cleanup, ' +
                            'third-party services, data security, contact information).',
                    },
                },
            },
            engineer: {
                title: 'about me',
                heading: 'From Design to Quality Assurance',
                p1:
                    'My background is in design and visual communication — which trained me to notice when ' +
                    "something looks right but isn't, and to ask whether an interface actually serves the person " +
                    'using it before asking whether it technically works. That instinct carries directly into QA: ' +
                    "bugs are rarely announced by an error message. More often they're a number on screen that " +
                    "doesn't quite match, a locator that quietly finds two elements instead of one, or a global " +
                    "variable silently holding onto data it shouldn't.",
                p2:
                    "Completing Harvard's CS50 gave me the computer science foundation to move past the DOM and " +
                    'into the layers underneath — session state, concurrency, embeddings, CI pipelines — the places ' +
                    "where a beautiful UI can still hide a fragile, insecure, or unreliable backend. Across the " +
                    "three case studies on this page I've applied a designer's attention to detail alongside an " +
                    "SDET's paranoia for edge cases: a 340-point security and infrastructure audit on a Flask " +
                    'application, a hallucination and faithfulness evaluation suite for a RAG-based AI, and a ' +
                    '161-test Playwright regression suite with its own CI pipeline built from the ground up. ' +
                    'Different stacks, same underlying discipline — assume nothing works until there\'s a test ' +
                    'proving it does.',
            },
            footer: {
                line1: 'QA portfolio of <span class="highlighted">Fabio Alves</span>',
                line2: 'built to the same standard as <span class="highlighted">the tests</span>',
            },
        },
    },

    pt: {
        qa: {
            hero: {
                arcana: { light: 'qualidade não é', bold: 'acidente' },
                brasil2040: { light: 'você não pode confiar', bold: 'no que não pode medir' },
                playwright: { light: 'teste instável não é', bold: 'um diagnóstico' },
            },
            tabs: {
                arcanaProject: '01 — Projeto',
                arcanaSystem: '02 — Sistema',
                arcanaStrategy: '03 — Estratégia',
                arcanaFindings: '04 — Descobertas',
                arcanaScope: '05 — Escopo do Plano de Testes',
                arcanaAutomation: '05 — Automação',

                brasilProject: '01 — Projeto',
                brasilSystem: '02 — Sistema',
                brasilEmbedding: '03 — Pipeline de Embeddings E DATA QA',
                brasilEvalStrategy: '04 — Estratégia de Avaliação (CI/CD)',
                brasilFindings: '05 — DESCOBERTAS E CALIBRAGEM DO GOLDEN SET',
                brasilAgentTest: '06 — TESTE EXPLORATÓRIO COM AGENTE AUTÔNOMO DE IA',
                brasilAutomation: '07 — Automação',

                pwProject: '01 — Projeto',
                pwSystem: '02 — Sistema',
                pwLocator: '03 — Estratégia de Localizadores',
                pwFindings: '04 — Descobertas',
                pwScope: '05 — Escopo do Plano de Testes',
                pwCicd: '06 — Jornada de CI/CD',
                pwAutomation: '07 — Abordagem de Automação',

                theEngineer: 'Quem sou eu',
            },
            bugMetaKey: {
                severity: 'Severidade',
                ref: 'Ref',
                method: 'Método',
                mode: 'Modo',
                artifact: 'Artefato',
                category: 'Categoria',
                fixPattern: 'Padrão da correção',
                passCondition: 'Condição de aprovação',
                questions: 'Perguntas',
                rootCause: 'Causa raiz',
                status: 'Status',
                symptom: 'Sintoma',
                threshold: 'Limite',
            },
            arcana: {
                title: 'Auditoria de QA do ArcanaFutura',
                intro1:
                    'O <strong>ArcanaFutura</strong> é uma aplicação web de leitura de Tarô com IA, desenvolvida como ' +
                    'projeto final do curso CS50 da Universidade Harvard. O sistema possui um fluxo de usuário em ' +
                    'múltiplas etapas, manipulação interativa do DOM e streaming em tempo real de leituras geradas ' +
                    'por LLM.',
                intro2:
                    'Este material detalha a auditoria de segurança e infraestrutura realizada na ' +
                    'aplicação. O processo identificou e corrigiu falhas na proteção de cota  de ' +
                    'API, no gerenciamento de estado e nos limites de protocolo. Todas as correções foram validadas por uma suíte de ' +
                    'testes de regressão automatizada em Pytest.',
                tldr: {
                    label: 'TL;DR',
                    li1: '340 casos de teste manuais organizados em 9 epics: onboarding e sessão, ' +
                        'seleção de cartas e estado, geração de leitura via WebSocket, chat contextual ' +
                        'com IA, design responsivo, segurança/performance/infra, navegação e ' +
                        'tratamento de erros, headers de segurança e CORS, cross-browser e ' +
                        'acessibilidade, todos feitos antes de qualquer automação.',
                    li2: 'As 5 falhas mais críticas documentadas: Mutação Global do Baralho ' +
                        '(corrupção de dados sob concorrência), Contorno do Limitador de Taxa ' +
                        '(spoofing de IP via X-Forwarded-For), Sequestro de WebSocket entre Sites ' +
                        '(CSWSH), Fuga do Contexto JS (injeção que vence o sanitizador) e Conexão ' +
                        'Órfã / Dead SID (loop infinito com consumo silencioso de cota).',
                    li3: 'O plano de teste em Agile/Scrum virou testes automatizados no CI a cada ' +
                        'commit, no padrão <code>xfail</code>, onde o teste nasce vermelho ' +
                        'documentando o bug e só fica verde quando a correção entra.',
                },
                links: {
                    liveApp: 'Ver Aplicação ao Vivo',
                    github: 'Repositório no GitHub',
                    matrix: 'Matriz Completa de 340 Pontos de Teste',
                },
                tech: {
                    qaTools: 'Ferramentas de QA e Teste:',
                    security: 'Segurança e Infraestrutura:',
                    architecture: 'Arquitetura:',
                },
                ciLabel: 'Suíte Pytest automatizada rodando a cada commit',
                sections: {
                    threatMapIntro:
                        '<strong>Mapa de Ameaças Arquitetural:</strong> A auditoria de QA avaliou 340 pontos e encontrou cerca de 40 defeitos. ' +
                        'O detalhamento a seguir foca nas cinco vulnerabilidades de maior impacto, ' +
                        'distribuídas por diferentes camadas da arquitetura. Duas delas foram localizadas no ' +
                        "runtime do Flask (mutação de memória e injeção de template), uma na fronteira do proxy (falsificação de IP) " +
                        'e duas no canal WebSocket (sequestro na entrada e Dead SID na saída).',
                    strategyP1:
                        'Estruturei o processo de QA com base na metodologia Scrum, criando <strong>9 ' +
                        'Epics</strong> e <strong>54 User Stories</strong>. Isso resultou em <strong>mais de 340 subtasks</strong> rastreadas no Jira. ' +
                        'Como este foi meu primeiro projeto de QA priorizei o teste manual. ' +
                        'Queria construir uma base sólida antes de partir para a automação. Embora meus projetos seguintes (Brasil 2040 e a suíte Playwright) ' +
                        'já tenham nascido automatizados aqui eu precisava entender na prática como os bugs ' +
                        'se revelam quando um usuário explora a aplicação de forma livre, sem um script guiando cada passo. ',
                    strategyP2:
                        'A automação entrou no projeto como uma camada de proteção. Para definir o que automatizar ' +
                        'apliquei um filtro de triagem baseado em uma pergunta simples: ' +
                        '"Se isso falhar, a aplicação vai travar, sofrer uma invasão ou gerar custos?". ' +
                        'Com isso, validações visuais e de animação continuaram manuais. Já os pontos críticos de segurança, ' +
                        'o controle de cota da API e a lógica central do sistema foram cobertos por uma suíte em Pytest. ' +
                        'Essa abordagem criou uma rede de segurança para testes de regressão, garantindo que as ' +
                        'correções feitas durante o QA não quebrassem comportamentos já validados.',
                    strategyResult:
                        '<strong>Resultado:</strong> Um plano de testes com 340 subtasks no Jira, apoiado ' +
                        'por mais de 100 testes automatizados e integrados ao GitHub Actions para validação contínua em CI/CD.',
                    findingsIntro:
                        'Selecionadas entre quase 40 defeitos identificados as vulnerabilidades explicadas nessa sessão são as mais críticas encontradas durante a auditoria. ' +
                        'Para cada uma documentei a falha observada, o impacto real na infraestrutura ou nos dados do usuário e a correção aplicada, ' +
                        'sempre validada por testes de regressão para garantir que o problema não volte a ocorrer ou uma atualização não quebre o que já foi feito, ' +
                        'garantindo estabilidade a longo prazo.',
                    scopeIntro:
                        'Os mais de 340 casos de teste manuais foram organizados em 9 Epics e 54 User Stories, ' +
                        'mapeados para cobrir todas as camadas da aplicação. A estratégia de QA foi desenhada para validar a experiência ' +
                        'completa do usuário (End-to-End) e a infraestrutura. ' +
                        'Cada Epic focou em um domínio específico: fluidez das animações CSS, responsividade do layout mobile, ' +
                        'integridade do armazenamento de sessão no Redis, segurança dos eventos via WebSocket e a precisão do prompt enviado à IA. ' +
                        'O objetivo da fase manual foi explorar os limites do sistema, testando comportamentos inesperados do navegador ' +
                        '(como o uso do botão "Voltar" e o bfcache), usabilidade em telas pequenas, acessibilidade para leitores de tela e a resiliência da interface em quedas de rede.',
                    autoColHead1: 'O que o Pytest automatizou',
                    autoColBody1:
                        'A suíte cobre o comportamento das rotas do backend, a integridade do estado de sessão entre requisições, ' +
                        'sanitização de entrada até o prompt da IA, a validação obrigatória do token CSRF em todos os endpoints de mutação ' +
                        'e a segurança do handler WebSocket (usando o cliente de teste do Flask-SocketIO). Todos os testes acessam ' +
                        'o código real da aplicação, nenhum mock foi utilizado nas validações de segurança.',
                    autoColHead2: 'O que ficou explicitamente fora da automação',
                    autoColBody2:
                        'Transições CSS, tempo de animação, breakpoints de viewport mobile ' +
                        'e mudanças de layout baseadas em orientação. Validar esses pontos exige um motor de renderização de navegador real, ' +
                        'o que é escopo para ferramentas como Playwright ou Cypress, e não para um runner de testes unitários. ' +
                        'Documentar esse limite faz parte da estratégia de testes para definir ' +
                        'claramente a responsabilidade de cada ferramenta na arquitetura.',
                    xfailHead: 'O padrão xfail (Correção de bugs guiada por testes)',
                    xfailBody:
                        'Duas vulnerabilidades conhecidas (um crash de <code>KeyError</code> no handler ' +
                        'de tamanho) foram mapeadas com o decorador <code>@pytest.mark.xfail</code> antes da correção ser aplicada no código-fonte. ' +
                        'Isso documentou cada falha com um caso reproduzível, que se converteu automaticamente ' +
                        'em um teste aprovado assim que o bug foi resolvido. Garantir que um teste falhe (vermelho) antes de passar (verde) ' +
                        'é uma prova de engenharia muito mais sólida do que escrever o teste apenas após a correção.',
                    transparencyNote:
                        '<strong>Nota de Transparência:</strong> O código dos testes automatizados foi escrito em ' +
                        'com o apoio de ferramentas de pair-programming com IA. Meu papel foi projetar a estratégia ' +
                        'de testes, identificar os edge cases por meio de testes exploratórios manuais ' +
                        'e revisar o código gerado contra a lógica da aplicação.',
                },
                bugs: {
                    b1: {
                        title: '1. Mutação Global do Baralho: <strong>Concorrência e Corrupção de Dados</strong>',
                        severity: 'Crítico | Corrupção silenciosa de dados',
                        method: 'Revisão de código do estado global + simulação de requisições concorrentes',
                        whatBroke:
                            '<strong>O problema:</strong> O código estava modificando a lista principal de cartas ' +
                            '<code>TAROT_CARDS</code> em vez de gerar uma cópia para cada usuário. ' +
                            'A posição da carta ("normal" ou "invertida") ' +
                            'era gravada direto na variável global do servidor.',
                        impact:
                            '<strong>Impacto real:</strong> Como o baralho na memória era compartilhado, a leitura de um usuário interferia na do outro. ' +
                            'Se o Usuário A tirasse cartas invertidas, o Usuário B (e todos os seguintes) pegaria o baralho ' +
                            'já viciado com as posições deixadas pelo Usuário A. O sistema não ' +
                            'travava nem gerava logs de erro (retornava HTTP 200 normalmente), ' +
                            'mas destruía a aleatoriedade do Tarot e ' +
                            'entregava leituras corrompidas de forma silenciosa.',
                        fix:
                            '<strong>A correção:</strong> Criar uma cópia isolada do baralho para cada requisição antes de embaralhar e modificar: ' +
                            '<code>deck_copy = [card.copy() for card in TAROT_CARDS] </code> ',
                        label: 'Teste de regressão: verificar imutabilidade global',
                    },
                    b2: {
                        title: '2. Contorno do Limitador de Taxa: <strong>Falsificação de IP via X-Forwarded-For</strong>',
                        severity: 'Crítico | Infraestrutura / DoS e Roubo de Cota',
                        method: 'Injeção de headers via cURL + Inspeção de chaves no Redis',
                        whatBroke:
                            '<strong>O problema:</strong> O middleware <code>ProxyFix</code>, usado para identificar o IP do usuário por trás do proxy do Render, estava mal configurado. ' +
                            'Se desativado, o sistema lia o IP do servidor do Render para todos os usuários. ' +
                            'Se configurado com confiança excessiva (<code>x_for=2</code>), ' +
                            'ele aceitava IPs falsos enviados pelo usuário no header <code>X-Forwarded-For</code>.',
                        impact:
                            '<strong>Impacto real:</strong> Isso gerava dois problemas graves. Primeiro, ' +
                            'todos os usuários do site dividiam o mesmo limite de requisições, então se uma pessoa atingisse o limite todos os outros usuários eram bloqueados simultaneamente (Erro 429). ' +
                            'Segundo, um atacante podia enviar um header falso (ex: <code>X-Forwarded-For: 127.0.0.1</code>), ' +
                            'enganando o servidor para ser tratado como um novo usuário a cada clique. ' +
                            'Isso permitia burlar o limite de 5 leituras/minuto e drenar a cota paga da API do Gemini indefinidamente.',
                        fix:
                            '<strong>A correção:</strong> Ajustar a configuração para <code>ProxyFix(app.wsgi_app, x_for=1, ...</code>). ' +
                            'Isso instrui o Flask a confiar apenas no último salto de rede (o próprio Render), ' +
                            'ignorando IPs falsificados e identificando corretamente o cliente real.',
                        label: 'Teste de regressão: dois modos de falha, duas funções',
                    },
                    b3: {
                        title: '3. Sequestro de <strong>WebSocket entre Sites</strong> (CSWSH)',
                        severity: 'Crítico | Segurança de API / Roubo de cota',
                        method: 'Injeção de Socket.IO por domínio externo',
                        whatBroke:
                            '<strong>O problema:</strong> As rotas HTTP estavam protegidas, mas o evento WebSocket responsável pelo chat ' +
                            '(<code>send_message</code>) não exigia validação de token CSRF. ' +
                            'Além disso, a política de CORS estava totalmente aberta (<code>cors_allowed_origins="*"</code>). ' +
                            'Para agravar, a biblioteca <code>Flask-Limiter</code> não ' +
                            'funciona em conexões WebSocket, deixando o endpoint sem nenhum limite de taxa.',
                        impact:
                            '<strong>Impacto real:</strong> Um atacante poderia hospedar um site malicioso e atrair um usuário do ArcanaFutura. ' +
                            'Em segundo plano, o site do atacante se conectaria ao meu servidor via WebSocket (usando o cookie de sessão válido do usuário) ' +
                            'e começaria a enviar milhares de mensagens para o chat. Sem limite de taxa ou checagem de CSRF ' +
                            'o servidor processaria todas as mensagens, drenando a cota paga da API do Google Gemini ' +
                            'em poucos segundos. Em testes locais um script no console disparou 200 mensagens instantâneas sem sofrer nenhuma rejeição.',
                        fix:
                            '<strong>A correção:</strong> Implementei uma dupla camada de defesa: adicionei a validação obrigatória do token CSRF ' +
                            'dentro do evento do socket e desenvolvi um limitador de taxa customizado (janela deslizante em memória) ' +
                            'que bloqueia usuários que enviem mais de 10 mensagens por minuto. ',
                        label: 'Teste de regressão: verificar autenticação de eventos de socket',
                    },
                    b4: {
                        title: '4. Fuga do Contexto JS: <strong>Injeção de Template Vence o Sanitizador</strong>',
                        severity: 'Crítico | Profundidade de segurança / ponto cego do sanitizador',
                        method: 'Revisão de código do results.html + testes de payload no contexto JS',
                        whatBroke:
                            '<strong>O problema:</strong> A intenção digitada pelo usuário era inserida diretamente em uma variável ' +
                            'JavaScript usando o motor de templates Jinja2: <code>intencao: "{{ intencao }}"</code>. ' +
                            'Como o backend utilizava a biblioteca <code>bleach</code> para limpar o texto a entrada parecia estar segura contra ataques.',
                        impact:
                            '<strong>Impacto real:</strong> O <code>bleach</code> é excelente para limpar HTML (removendo tags <code>&lt;script&gt;</code>), ' +
                            'mas ele não altera aspas duplas ("), pois elas são normais em textos. Se um usuário digitasse <code>", alert(1), ",</code> ' +
                            'o <code>bleach</code> deixaria passar. Quando o Jinja2 injetava isso no JavaScript, ' +
                            'as aspas do usuário "fechavam" a variável prematuramente, transformando o código em: <code>intencao: "", alert(1), ""</code>. ' +
                            'O navegador executava o alerta imediatamente. Isso resulta em um ataque de XSS (Cross-Site Scripting) ' +
                            'baseado em DOM que burla completamente o sanitizador do backend e a política de segurança (CSP), ' +
                            'pois o código malicioso roda "por dentro" de um script já autorizado.',
                        fix:
                            '<strong>A correção:</strong> Substituir a injeção direta pelo filtro nativo do Flask: <code>intencao: {{ intencao | tojson }}</code>. ' +
                            'Esse filtro serializa a string corretamente para o contexto JavaScript, escapando aspas e caracteres especiais com barras invertidas, ' +
                            'neutralizando qualquer tentativa de fuga do contexto.',
                        label: 'Teste de Regressão: Verificar escape de contexto JS',
                    },
                    b5: {
                        title: '5. Conexão Órfã (Dead SID): <strong>Loop Infinito e Consumo Silencioso de Cota</strong>',
                        severity: 'Alto | Falha de Arquitetura Assíncrona / Prejuízo Financeiro',
                        method: 'Simulação de queda de rede (Network Throttling)',
                        whatBroke:
                            '<strong>O problema:</strong> Em uma arquitetura que mistura Flask-SocketIO + Flask-Session ' +
                            'existem dois conceitos diferentes de "sessão". O código de background que gerava a leitura do Tarot ' +
                            'estava enviando a resposta de volta para o usuário usando o <code>session.sid</code> (o ID do cookie HTTP salvo no Redis). ' +
                            'No entanto, o <code>Socket.IO</code> exige o <code>request.sid</code> (o ID efêmero da conexão WebSocket atual). ' +
                            'O servidor estava enviando a resposta para uma "sala" que não existia.',
                        impact:
                            '<strong>Impacto real:</strong> Se um usuário sofresse uma micro-queda de internet (ex: trocando do Wi-Fi para o 4G) o <code>Socket.IO</code> reconectava e gerava um novo <code>request.sid</code>. ' +
                            'A API do Google Gemini concluía a leitura com sucesso (cobrando pela requisição), mas o servidor enviava a resposta para o ID antigo (morto). ' +
                            'O usuário ficava preso em uma tela de carregamento infinito. O agravante: o sistema de tolerância a falhas do frontend tentava reconectar e pedir a leitura novamente até 5 vezes. ' +
                            'Em um cenário de pico de acessos, cada usuário com instabilidade de rede custaria 5 chamadas pagas à API, ' +
                            'sem gerar nenhum erro 500 nos logs do servidor. Um prejuizo financeiro completamente silencioso.',
                        fix:
                            '<strong>A correção:</strong> Corrigir o roteamento substituindo <code>session.sid</code> por <code>request.sid</code> nos eventos do socket. ' +
                            'Para resolver a queda de rede implementei uma arquitetura de "Auto-Cura" (Self-Healing): a leitura concluída agora é salva no Redis usando o ID da sessão HTTP. ' +
                            'Se o usuário reconectar com um novo ID de socket, o frontend solicita a leitura novamente e o backend a ' +
                            'devolve instantaneamente do cache, sem acionar a API do Gemini uma segunda vez.',
                        label: 'Teste de regressão: verificar roteamento de socket',
                    },
                },
                epics: {
                    titles: {
                        e1: 'Integração do Usuário e Inicialização de Sessão',
                        e2: 'Seleção de Cartas e Gerenciamento de Estado',
                        e3: 'Geração de Leituras com IA (Confiabilidade do WebSocket)',
                        e4: 'Chat Contextual (IA Interativa)',
                        e5: 'Segurança, Performance e Infraestrutura',
                        e6: 'Design Responsivo e Compatibilidade de Dispositivos',
                        e7: 'Navegação, Proteções de Sessão e Tratamento de Erros',
                        e8: 'Segurança: Headers, CORS e Vazamentos de Dev',
                        e9: 'Confiabilidade, Cross-Browser e Acessibilidade',
                    },
                    storyCount: {
                        e1: '7 Stories', e2: '6 Stories', e3: '4 Stories', e4: '8 Stories',
                        e5: '6 Stories', e6: '4 Stories', e7: '7 Stories', e8: '7 Stories',
                        e9: '5 Stories',
                    },
                    e1: {
                        focus:
                            'Cobre toda interação antes de o usuário chegar ao tabuleiro de cartas: envio de ' +
                            'formulário, validação no backend, inicialização de sessão e proteção CSRF.',
                        li1:
                            '<strong>Caminho Feliz e Validação:</strong> Teste das três quantidades válidas de ' +
                            'cartas (1, 3, 5), do campo opcional de intenção e verificação de que o backend ' +
                            'armazena corretamente os dois valores como strings na sessão Redis (um tipo do ' +
                            'qual a lógica de limite de cartas depende estritamente).',
                        li2:
                            '<strong>Sanitização contra XSS (8 subtasks):</strong> Teste sistemático do ' +
                            '<code>bleach.clean()</code> contra tags script, handlers <code>img onerror</code>, ' +
                            'HTML malformado, injeção de links, e o vetor de fuga por aspas em JavaScript. Uma ' +
                            'subtarefa confirmou uma vulnerabilidade em que a renderização padrão do Jinja2 ' +
                            '(sem o filtro <code>| tojson</code>) permitia que aspas duplas escapassem do ' +
                            'literal de string JS inline no results.html.',
                        li3:
                            '<strong>Proteção CSRF (9 subtasks):</strong> Verificação do ciclo de vida completo: linha de ' +
                            'base com token válido, rejeição de token ausente, rejeição de token adulterado, ' +
                            'recarregamento automático da UI na expiração e o edge case em que os temporizadores de CSRF ' +
                            'e sessão ficam dessincronizados (ex: CSRF expira em 1 min, sessão em 30 min). Tudo testado em ' +
                            'produção.',
                        li4:
                            '<strong>Limite de Tamanho da Intenção:</strong> Teste de limite de fronteira (Boundary Value Analysis) testando exatamente 400 e 401 caracteres. ' +
                            'Documentou-se também o edge case de "sanitização antes da verificação de tamanho", ' +
                            'onde caracteres especiais como ' +
                            '<code>&amp;</code> se expandem para <code>&amp;amp;</code> após o processamento ' +
                            'do bleach, fazendo com que uma entrada de 400 caracteres exceda o limite no backend.',
                        li5:
                            '<strong>Segurança de Coerção de Tipo:</strong> Verificação de que ' +
                            "<code>session['selected_cards']</code> é armazenado como string Python " +
                            "(necessário para a validação <code>not in ['1','3','5']</code>), enquanto o " +
                            'Jinja2 o injeta no template JS como um integer puro (necessário para a lógica de ' +
                            'contador de igualdade estrita <code>===</code>).',
                    },
                    e2: {
                        focus:
                            'Foco na máquina de estados em JavaScript do tabuleiro de cartas, desde a renderização ' +
                            'inicial até o bloqueio de seleção, timing de animação, reparenting do DOM e ' +
                            'serialização final dos dados.',
                        li1:
                            '<strong>Embaralhamento e Orientação:</strong> Verificação de que ' +
                            '<code>random.sample</code> produz uma ordem de cartas diferente entre sessões e ' +
                            'que cada carta recebe exatamente um atributo <code>data-value</code> ' +
                            '(<code>"normal"</code> ou <code>"invertido"</code>). Um teste de regressão ' +
                            'foca na linha <code>deck_copy = [card.copy() for card in ' +
                            'TAROT_CARDS]</code>, que se removida o dicionário global do baralho acumula valores ' +
                            'de orientação obsoletos, corrompendo os dados entre usuários concorrentes.',
                        li2:
                            '<strong>Lógica do Contador de Seleção:</strong> Toda a aplicação do limite de ' +
                            'cartas depende de uma única injeção do Jinja2: <code>const selectedCardsCount = ' +
                            '{{ selected_cards }};</code>. Se isso renderizar como <code>0</code> ou ' +
                            '<code>None</code> a condição <code>clickedCards &gt;= 0</code> se torna verdadeira já ' +
                            'no carregamento da página e nenhuma carta pode ser clicada, ' +
                            'travando a UI sem gerar nenhum erro visível no console.',
                        li3:
                            '<strong>Duplo Clique e Condições de Corrida (Race Conditions):</strong> Teste do bloqueio ' +
                            '<code>card.dataset.processing = "true"</code> contra cliques rápidos ' +
                            'e múltiplos durante a janela de 333ms no meio da animação de virada da carta. ' +
                            "Também foi verificado que a proteção <code>card.classList.contains('clicked')</code> impede reseleção após a " +
                            'animação terminar.',
                        li4:
                            '<strong>Reparenting do DOM e Transição de Estágio:</strong> Verificação de que ' +
                            '<code>stage.appendChild(card)</code> move fisicamente os elementos corretos para ' +
                            '<code>#selection-stage</code>, que a classe de layout correta ' +
                            '(<code>stage-1</code>, <code>stage-3</code> ou <code>stage-5</code>) é aplicada dinamicamente ' +
                            'e que as orientações das cartas sobrevivem à transição sem sofrer reset visual.',
                        li5:
                            '<strong>Serialização de Dados e Resiliência do Backend:</strong> Teste da ' +
                            'construção dinâmica de formulário em <code>leituraButton.click</code>, incluindo ' +
                            'a injeção manual do token CSRF. Foi validado o tratamento pelo backend de payloads JSON ' +
                            'malformados, estruturalmente inválidos (ex: chaves erradas) e arrays vazios, ' +
                            'sendo cada um desses um vetor distinto para crashes no servidor ou desperdício de cota da API.',
                    },
                    e3: {
                        focus:
                            'Avaliação do pipeline de geração de IA, do evento WebSocket à chamada da API do Gemini ' +
                            'até o HTML renderizado e seus modos de falha.',
                        li1:
                            '<strong>Integridade do Prompt:</strong> Uso de chamadas mockadas de ' +
                            '<code>model.generate_content</code> para interceptar e inspecionar a string exata ' +
                            'do prompt enviado ao Gemini. O teste verificou se os nomes das cartas, as orientações ' +
                            '(<code>"invertido"</code>) e a intenção do usuário são formatados corretamente antes de atingir a ' +
                            'API. Um nome de carta ausente ou mal formatado resulta em uma chamada de API ' +
                            'desperdiçada e uma leitura alucinada pelo modelo.',
                        li2:
                            '<strong>Pipeline de Markdown (Vulnerabilidade Confirmada):</strong> O teste da função ' +
                            '<code>markdown_to_html()</code> revelou que o uso de <code>Markup()</code> marca a saída ' +
                            'como segura para o Jinja2, mas não realiza nenhuma sanitização. A biblioteca ' +
                            '<code>markdown</code> do Python repassa HTML cru sem alterações. Se o Gemini ' +
                            'retornar uma tag <code>&lt;script&gt;</code> (ex: via um ataque de Prompt Injection), ela ' +
                            'sobrevive ao pipeline, trafega pelo WebSocket e e executa via <code>.innerHTML</code> no navegador. A falha foi ' +
                            'documentada e a correção implementada: passar o output por ' +
                            '<code>bleach.clean()</code> com uma allowlist estrita antes do <code>Markup()</code>.',
                        li3:
                            '<strong>Tratamento de Falha de API:</strong> Verificação de que a função ' +
                            '<code>generate_tarot_reading()</code> propaga exceções (em vez de silenciá-las) ' +
                            'garantindo que a background task consiga emitir o evento <code>generation_error</code> de volta ao cliente. ' +
                            'Uma função que captura o erro e retorna <code>None</code> causaria um <code>TypeError</code> ' +
                            'silencioso no navegador ao tentar injetar um valor nulo no DOM, travando a interface.',
                        li4:
                            '<strong>Resposta Vazia da API (Filtros de Segurança):</strong> Confirmação de que a proteção explícita ' +
                            '<code>if not response.text: raise ValueError()</code> captura corretamente as rejeições dos filtros de segurança do Google. ' +
                            'Nesses casos a API retorna um objeto de resposta HTTP 200 válido, porém sem conteúdo de texto,  ' +
                            'o que quebraria a aplicação se não houvesse uma validação semântica da resposta.',
                    },
                    e4: {
                        focus:
                            'Análise da interface de chat como uma camada de runtime separada, sua inicialização, ' +
                            'o loop de feedback em tempo real, a superfície de segurança e bugs arquiteturais conhecidos.',
                        li1:
                            '<strong>Descoberta de Código Morto (Dead Code):</strong> A revisão de código identificou que ' +
                            '<code>initializeSocket()</code>, a função que registra todos os listeners de ' +
                            'eventos da UI de chat, estava definida mas nunca era chamada. Apenas ' +
                            '<code>initSocket()</code> estava conectada ao <code>DOMContentLoaded</code>. ' +
                            'Se o código fosse para produção assim, o botão de chat, o botão de fechar, a sombra de scroll e o handler ' +
                            '<code>receive_message</code> ficariam todos inoperantes. O bug foi documentado e corrigido como um bug crítico de integração.',
                        li2:
                            '<strong>Brechas no Payload do WebSocket (Bugs Confirmados):</strong> Dois bugs de ' +
                            'segurança e estabilidade foram encontrados via inspeção de código e testes de injeção. Primeiro, <code>handle_message</code> usava ' +
                            '<code>data[\'message\']</code> (acesso direto ao dicionário) em vez de ' +
                            '<code>data.get(\'message\', \'\')</code>, o que significa que um payload sem essa chave gerava um ' +
                            '<code>KeyError</code> não tratado, derrubando a greenlet do gevent. Segundo, não existia limite de tamanho de mensagem antes da chamada a ' +
                            '<code>model.generate_content()</code>, permitindo que um atacante enviasse prompts de tamanho ilimitado para exaurir a cota da API (DoS).  ' +
                            'Ambas as falhas foram corrigidas com validações estritas.',
                        li3:
                            '<strong>Bug do Indicador de Carregamento (Condição de Corrida na UI):</strong> ' +
                            'A função <code>removeLoadingIndicator()</code> mirava no seletor ' +
                            '<code>.chat-message:last-child</code>. Se o usuário enviasse uma segunda ' +
                            'mensagem antes da primeira resposta da IA chegar, o balão do usuário se tornava o  ' +
                            '<code>last-child</code>. Consequentemente, o script falhava em encontrar a animação, deixando o primeiro balão de carregamento ' +
                            'permanentemente órfão e travado no histórico do chat. ' +
                            'O bug foi corrigido alterando a lógica para buscar a classe específica do indicador, ' +
                            'independentemente da sua posição no DOM.',
                        li4:
                            '<strong>Falha de API no Chat (Recuperação de Estado):</strong> Teste do handler de exceção ' +
                            '<code>background_chat</code> utilizando falhas mockadas da API do Gemini.  ' +
                            'O objetivo foi verificar se um evento <code>receive_message</code> contendo uma mensagem de erro amigável é emitido em caso de falha. ' +
                            'Se o bloco <code>except</code> falhasse silenciosamente, o indicador de carregamento do cliente ' +
                            'giraria indefinidamente, deixando o usuário sem um caminho de recuperação.',
                        li5:
                            '<strong>Limitação de Taxa do Chat:</strong> Verificação da implementação de um limitador de taxa ' +
                            'de janela deslizante em memória (<code>is_rate_limited()</code>). Essa arquitetura customizada foi necessária porque o decorador ' +
                            '<code>@limiter.limit</code> do Flask-Limiter protege apenas rotas HTTP, sendo completamente "cego" a eventos do Socket.IO. ' +
                            'O teste confirmou que o handler <code>handle_message</code> intercepta e bloqueia com sucesso usuários que tentam enviar mensagens em massa (Spam/DoS). ',
                    },
                    e5: {
                        focus:
                            'Foco na camada de segurança operacional da aplicação, incluindo limitação de taxa, higiene de ' +
                            'sessão, aplicação de CSP (Content Security Policy), autenticação WebSocket e isolamento de usuários concorrentes.',
                        li1:
                            '<strong>Limitação de Taxa por IP (Rate Limiting):</strong> Verificação de que o decorador ' +
                            '<code>@limiter.limit</code> do Flask-Limiter em <code>/results</code> corretamente o status ' +
                            '<code>HTTP 429</code> (Too Many Requests) após o limite configurado. O teste validou a injeção dinâmica de limites baseada ' +
                            'em ambiente: 200 requisições/minuto em desenvolvimento ' +
                            'e 5 requisições/minuto em produção (controlado pela flag <code>is_production</code>).',
                        li2:
                            '<strong>Segurança do Cookie de Sessão:</strong> Inspeção rigorosa das flags de segurança no header ' +
                            '<code>Set-Cookie</code>. Foi validado o <code>HttpOnly</code> (que bloqueia o acesso ao cookie via ' +
                            '<code>document.cookie</code>, mitigando XSS), o <code>SameSite=Lax</code> (que restringe requisições POST cross-site, ' +
                            'mitigando CSRF) e a flag <code>Secure</code>. A flag <code>Secure</code> foi testada em ambos os ambientes para garantir que é ' +
                            'ativada apenas em produção (exigindo HTTPS), permitindo o tráfego HTTP local durante o desenvolvimento.',
                        li3:
                            '<strong>CSRF via WebSocket (Simulação Manual de Ataque):</strong> Execução de testes de segurança ofensiva ' +
                            '(Red Teaming básico) injetando payloads diretamente no console do navegador em ambiente de produção. Foram emitidos eventos <code>start_generation</code> ' +
                            'com o token CSRF ausente e com o token forjado. Em ambos os casos, confirmou-se que o backend interceptou a requisição e emitiu o evento ' +
                            '<code>generation_error</code>, protegendo a API do Gemini contra chamadas não autorizadas.',
                        li4:
                            '<strong>Isolamento de Dados (Concorrência e Race Conditions):</strong> Execução de dois ' +
                            'clientes de teste independentes disparando requisições simultâneas contra <code>/process_form</code>. ' +
                            ' O objetivo foi verificar se os dados <code>intencao</code>, ' +
                            '<code>selected_cards</code> são estritamente vinculados ao ID de sessão no Redis, ' +
                            'garantindo que não haja vazamento de estado entre usuários. Também foi testada a condição de corrida (race condition) ' +
                            "entre múltiplas abas abertas no mesmo navegador, validando a integridade das escritas em " +
                            "<code>session['selected_cards']</code>.",
                        li5:
                            '<strong>Ciclo de Vida e Expiração da Sessão:</strong> Teste da configuração ' +
                            '<code>SESSION_PERMANENT=False</code>. A verificação confirmou que o backend gera um cookie sem os atributos ' +
                            '<code>Expires</code> ou <code>Max-Age</code>. Isso o transforma em um verdadeiro "cookie de sessão de navegador", que é destruído pelo sistema operacional assim que o navegador é fechado, ' +
                            'um requisito crítico de privacidade para proteger dados de usuários em computadores compartilhados. ',
                    },
                    e6: {
                        focus:
                            'Avaliação do comportamento de renderização específico para mobile, semântica de eventos de ' +
                            'toque e o mecanismo de privacidade de aba introduzido para lidar com casos de ' +
                            'uso de dispositivos compartilhados.',
                        li1:
                            '<strong>Bloqueio de Orientação (Landscape Guard):</strong> Teste do overlay ' +
                            '<code>#rotate-message</code> controlado por uma regra CSS <code>@media ' +
                            '(orientation: landscape)</code>. A verificação confirmou que o overlay bloqueia totalmente a interação com o DOM quando o ' +
                            'dispositivo está na horizontal e desaparece instantaneamente ao retornar para a vertical, sem necessidade de recarregar a página.',
                        li2:
                            '<strong>Tratamento do Teclado Virtual Mobile:</strong> Teste da função de detecção ' +
                            '<code>isTouchDevice()</code>, que utiliza <code>window.matchMedia("(hover: none) and ' +
                            '(pointer: coarse)")</code> em vez de User-Agent sniffing (uma prática obsoleta). A validação confirmou que a classe <code>keyboard-active</code> é aplicada ao ' +
                            '<code>&lt;body&gt;</code> no evento de <code>focus</code>, acionando o comportamento <code>scrollIntoView</code> para  ' +
                            'evitar que o teclado virtual cubra a <code>textarea</code>. Também foi verificada a exclusão do <code>localhost</code> na lógica, ' +
                            'garantindo que o comportamento não dispare acidentalmente durante o desenvolvimento local em emuladores.',
                        li3:
                            '<strong>Compatibilidade de Eventos de Toque (Touch Semantics):</strong> Verificação de que os ' +
                            'listeners padrão de evento <code>click</code> disparam imediatamente no toque ' +
                            'mobile sem o delay legado de 300ms (suprimido pela meta tag de viewport ' +
                            '<code>width=device-width</code>), e que estados CSS <code>:hover</code> não ' +
                            'persistem após tocar e soltar ("hover pegajoso").',
                        li4:
                            '<strong>Proteção de Privacidade de Aba (Session Storage Guard):</strong> A rota ' +
                            '<code>/clear_session</code>, introduzida para dar suporte à detecção de nova aba baseada em ' +
                            '<code>sessionStorage</code> em cartas.html e results.html, foi auditada especificamente quanto à segurança. O teste verificou  ' +
                            'que a rota é <code>@csrf.exempt</code> (necessário porque o JS dispara o fetch antes de qualquer token estar disponível no DOM), ' +
                            'aceita estritamente o método POST, limpa completamente todas as chaves da sessão no Redis ' +
                            'e retorna um JSON válido. Qualquer falha nessas restrições representaria um vetor distinto para ' +
                            'para crashes no cliente ou vazamento de dados entre usuários.',
                    },
                    e7: {
                        focus:
                            'Análise de navegação fora de ordem, quedas de infraestrutura, e o comportamento da ' +
                            'aplicação quando usuários não seguem o fluxo linear pretendido (Unhappy Paths).',
                        li1:
                            '<strong>Bug de Proteção de Sessão (Confirmado, Corrigido):</strong> A rota ' +
                            'original <code>/cartas</code> usava ' +
                            '<code>int(session.get(\'selected_cards\', 0))</code>, que assumia <code>0</code> ' +
                            'como padrão em sessões ausentes ou expiradas. A página renderizava com HTTP 200, mas a injeção de ' +
                            '<code>selectedCardsCount = 0</code> fazia com que a condição JS <code>clickedCards &gt;= 0</code> fosse verdadeira imediatamente ' +
                            'travando a UI e impedindo o clique em qualquer carta, sem gerar erros no console. ' +
                            'A correção (<code>if raw_val not in [\'1\',\'3\',\'5\']: ' +
                            'redirect</code>) foi validada e protegida contra regressão através de testes parametrizados, cobrindo oito valores de sessão inválidos ou maliciosos distintos.',
                        li2:
                            '<strong>Navegação Direta por URL:</strong> Teste de acesso direto às três rotas (<code>/</code>, ' +
                            '<code>/cartas</code>, <code>/results</code>) sem sessão ativa, com sessões parciais e ' +
                            'sessões expiradas. O objetivo foi verificar as cadeias de redirecionamento (Redirect Chains), ' +
                            'garantindo que nenhuma rota retornasse um erro <code>500</code> ou um <code>200</code> com estado quebrado.',
                        li3:
                            '<strong>Bfcache e Botão Voltar do Navegador:</strong> Documentação de ' +
                            'dessincronização de estado ao navegar de volta de <code>/results</code> para ' +
                            "<code>/cartas</code> via botão Voltar do navegado. O Back-Forward Cache (bfcache) mantinha o DOM com as cartas viradas, " +
                            'mas o contador JavaScript <code>clickedCards</code> era resetado para 0 no recarregamento da página, criando uma vulnerabilidade lógica ' +
                            'que potencialmente permitia ao usuário exceder seu limite original de cartas.',
                        li4:
                            '<strong>Tratamento de 404 (Error Handler):</strong> O <code>@app.errorhandler(404)</code> ' +
                            'personalizado foi testado para garantir que redireciona rotas de aplicação inválidas para a Home (evitando vazamento de informações), ' +
                            'mas repassa requisições de arquivos estáticos ausentes como <code>404</code>s ' +
                            'reais (para não quebrar o carregamento de assets). Os dois caminhos de código foram testados separadamente, ' +
                            'e a presença dos headers de segurança do Flask-Talisman foi confirmada em ambos os tipos de resposta de erro.',
                        li5:
                            '<strong>Queda do Redis (Chaos Testing):</strong> Simulação de indisponibilidade do banco de dados Redis para ' +
                            'verificar que a aplicação falha de forma segura (Fail Secure), não vazando stack traces ou variáveis de ambiente na tela de erro 500. ' +
                            'Durante o teste, documentou-se que o Flask-Limiter falha de forma aberta (Fail Open) ' +
                            'por padrão durante quedas de conexão (permitindo tráfego irrestrito), ' +
                            'o que foi registrado como um item de risco arquitetural para a equipe de DevOps.',
                    },
                    e8: {
                        focus:
                            'Auditoria de superfícies de ataque não cobertas pelo Épico 5, incluindo os headers de segurança padrão do ' +
                            'Flask-Talisman, a política de CORS do WebSocket, a configuração de nonce da CSP(Content Security Policy) e ' +
                            'vazamentos de ferramentas de desenvolvimento.',
                        li1:
                            '<strong>Headers de Segurança do Talisman:</strong> Verificação da presença e eficácia dos headers ' +
                            '<code>X-Frame-Options: SAMEORIGIN</code> (mitigação de Clickjacking), ' +
                            '<code>X-Content-Type-Options: nosniff</code> (mitigação de MIME sniffing) e ' +
                            '<code>Referrer-Policy</code> em todas as rotas. O teste incluiu a ' +
                            'validação desses headers nos dois caminhos de código de resposta de erro (o 404 baseado em redirecionamento e o 404 de  ' +
                            'arquivo estático repassado), garantindo que páginas de erro não se tornem vetores de ataque.',
                        li2:
                            '<strong>CORS Wildcard (Vulnerabilidade Confirmada):</strong> A configuração ' +
                            '<code>cors_allowed_origins="*"</code> estava fixado incondicionalmente no ' +
                            'código original, permitindo que qualquer site externo estabelecesse um handshake  ' +
                            'WebSocket. Combinado com a ausência de validação CSRF no evento <code>send_message</code>, isso ' +
                            'criava um caminho de exploração confirmado de Sequestro de WebSocket entre Sites ' +
                            '(CSWSH), em que a página de um atacante podia consumir silenciosamente a cota da ' +
                            'API do Gemini de graça. A falha foi documentada e corrigida restringindo as origens ' +
                            'ao domínio de produção, condicionado pela flag <code>is_production</code>.',
                        li3:
                            '<strong>Configuração Incorreta do Nonce da CSP (Vulnerabilidade ' +
                            'Confirmada):</strong> A variável <code>g.nonce</code> era gerado a cada requisição e ' +
                            'aplicado às tags script, mas o Talisman não havia sido inicializado com o parâmetro ' +
                            '<code>content_security_policy_nonce_in=[\'script-src\']</code>, e a diretiva ' +
                            '<code>\'unsafe-inline\'</code> permanecia ativa no <code>script-src</code>. O nonce ' +
                            'era cosmético, o navegador o ignorava completamente porque ' +
                            '<code>unsafe-inline</code> permite incondicionalmente a execução de todos os scripts. ' +
                            'Qualquer ponto de injeção de XSS executaria sem restrição. A correção exigiu a remoção do ' +
                            '<code>unsafe-inline</code> e a integração nativa do nonce via Talisman.',
                        li4:
                            '<strong>Brecha de CSRF em <code>send_message</code> (Vulnerabilidade Confirmada):</strong> O evento ' +
                            '<code>handle_generation</code> chamava <code>validate_csrf()</code>, mas o evento  ' +
                            '<code>handle_message</code> não. Uma conexão WebSocket estabelecida podia enviar prompts de chat ilimitados ' +
                            'diretamente para a API do Gemini sem validação de token. O bug foi documentado e ' +
                            'corrigido com as alterações de código exatas necessárias tanto no backend  ' +
                            '(validação) quanto no frontend (injeção do token no payload).',
                        li5:
                            '<strong>Vazamento de URL de Desenvolvimento na CSP de Produção:</strong> A ' +
                            'proteção <code>if not is_production:</code> que envolve as entradas de localhost ' +
                            'e IP de LAN no dicionário da CSP foi verificada por inspeção de código e análise de headers. ' +
                            'Uma condição invertida ou ausente colocaria <code>http://localhost:3000</code> ' +
                            'na allowlist da CSP de produção, criando uma potencial superfície de bypass de CSP baseada em SSRF (Server-Side Request Forgery). ' +
                            'O teste confirmou que o ambiente de produção está limpo de artefatos de desenvolvimento.',
                    },
                    e9: {
                        focus:
                            'Cenários validados manualmente em produção via BrowserStack e Chrome DevTools, exigindo dispositivos reais ou julgamento ' +
                            'humano. Cobre resiliência de rede do WebSocket, paridade de renderização entre navegadores, ' +
                            'acessibilidade por teclado, compatibilidade com leitores de tela e benchmarking de performance. ',
                        li1:
                            '<strong>Resiliência do WebSocket:</strong> Simulação de quedas bruscas de rede no meio da geração da leitura ' +
                            'usando o painel de Network Throttling do Chrome. O teste confirmou a resolução de um bug anterior de carregamento infinito, ' +
                            'validando a nova arquitetura de reconexão que entrega leituras em cache ao restabelecer o sinal. ' +
                            'Uma limitação arquitetural conhecida foi documentada como Wont Fix: ' +
                            'duas abas compartilhando a mesma sessão de navegador podem receber eventos ' +
                            '<code>generation_complete</code>, pois os SIDs do Socket.IO são por conexão, ' +
                            'e não por sessão HTTP.',
                        li2:
                            '<strong>Compatibilidade entre Navegadores (Cross-Browser):</strong> Teste completo do fluxo de ' +
                            'End-to-End no Firefox, Safari (macOS), iOS Safari (via BrowserStack) e Edge. ' +
                            'Verificados os transforms CSS <code>rotateX</code>/<code>rotateY</code> sem necessidade de ' +
                            'prefixos de fornecedor como -webkit-, o suporte à Web Animations API ' +
                            '(<code>element.animate</code>), o estabelecimento de conexão segura ' +
                            '<code>wss://</code> e a paridade de renderização do <code>marked.js</code>. Todos ' +
                            'os navegadores passaram sem exigir polyfills.',
                        li3:
                            '<strong>Navegação por Teclado e Bugs de Acessibilidade Corrigidos:</strong> ' +
                            'Auditoria completa da ordem de Tab nas três páginas e no modal de chat. ' +
                            'Descobriu-se que a tecla Esc não fechava o overlay de chat, corrigido ' +
                            'adicionando um listener global de <code>keydown</code>. Descobriu-se também que o foco ' +
                            'do teclado podia escapar do modal de chat para o fundo da página, corrigido implementando uma ' +
                            'armadilha de foco (Focus Trap) que intercepta <code>Tab</code> e ' +
                            '<code>Shift+Tab</code> e cicla o foco estritamente dentro dos limites do modal.',
                        li4:
                            '<strong>Leitor de Tela e ARIA:</strong> Os 22 botões de carta não tinham rótulo ' +
                            '(<code>&lt;button&gt;</code> sem conteúdo de texto), sendo anunciados por ' +
                            'leitores de tela apenas como "botão", sem contexto, foi corrigido adicionando ' +
                            'atributos dinâmicos <code>aria-label</code> via Jinja2. A div ' +
                            '<code>#loading-message</code> não tinha uma Live Region ARIA, deixando os leitores de ' +
                            'tela não recebiam nenhuma notificação quando a IA terminava de gerar, foi corrigido ' +
                            'adicionando <code>role="status"</code> e <code>aria-live="polite"</code>. O ' +
                            'contraste de cor medido foi de 3.31:1 para botões de carta inativos, atendendo ' +
                            'ao padrão WCAG AA para componentes de UI.',
                        li5:
                            '<strong>Benchmarks de Performance:</strong> Estabelecidas linhas de base de SLA ' +
                            'de produção: TTFB (Time to First Byte) para a Home em 968ms (dentro da meta de 1000ms), ' +
                            'TTI (Time to Interactive) para <code>/cartas</code> melhorado após uma redução de 46% no tamanho dos ' +
                            'assets (262KB PNG → 140KB WebP). A geração de leituras de IA teve média de 5–9 ' +
                            'segundos em 10 execuções, respostas do chat tiveram média de 3–5 segundos. Um ' +
                            'teste de stress com 5 usuários concorrentes mostrou um aumento médio de latência ' +
                            'de 63% em relação à linha de base, documentado como uma degradação aceitável ' +
                            '(Graceful Degradation) para a implantação atual de instância única no Render.',
                    },
                },
                diagram: {
                    legendIpSpoofDescX: '126',
                    legendWsHijackDescX: '128',
                    legendJsInjectDescX: '168',
                    browser: 'Navegador',
                    userClient: 'Cliente do Usuário',
                    renderProxy: 'Proxy do Render',
                    globalMemory: 'MEMÓRIA GLOBAL',
                    geventConcurrent: 'gevent · concorrente',
                    jinja2Renderer: 'RENDERIZADOR JINJA2',
                    templateContext: 'contexto de template',
                    flaskApp: 'App Flask',
                    sessionStore: 'Armazenamento de Sessão',
                    llmApi: 'API de LLM',
                    wsIn: '→  mensagens WS de entrada  (Socket.IO)',
                    wsOut: '←  resposta socketio.emit()',
                    tagGlobalMut: 'MUT. GLOBAL',
                    tagIpSpoof: 'FALSIF. IP',
                    tagWsHijack: 'SEQUESTRO WS',
                    tagJsInject: 'INJEÇÃO JS',
                    tagDeadSid: 'Dead Sid',
                    legendGlobalMutTitle: 'Mutação Global',
                    legendGlobalMutDesc:
                        'dict TAROT_CARDS mutado in-place, requisições gevent concorrentes corrompem o ' +
                        'estado do baralho',
                    legendIpSpoofTitle: 'Falsificação de IP',
                    legendIpSpoofDesc:
                        'ProxyFix x_for=2 confia em headers forjados, atacante contorna o limite de taxa ' +
                        'alternando o IP em X-Forwarded-For',
                    legendWsHijackTitle: 'Sequestro de WS',
                    legendWsHijackDesc:
                        'Sem CSRF no handler send_message, qualquer página de outra origem pode drenar a ' +
                        'cota do Gemini',
                    legendJsInjectTitle: 'Injeção de Template em JS',
                    legendJsInjectDesc:
                        '{{ intencao }} cru dentro de <script>, o bleach não ajuda já a vulnerabilidade não estava no HTML, ' +
                        'mas no contexto do JS',
                    legendDeadSidTitle: 'Dead SID',
                    legendDeadSidDesc:
                        'A tarefa em segundo plano emite para o ID de socket original após a queda de rede, ' +
                        'o cliente reconectado trava para sempre',
                },
            },
            brasil2040: {
                title: 'Avaliações de IA do Brasil 2040',
                intro1:
                    'O <strong>Brasil 2040</strong> é uma aplicação RAG (Retrieval-Augmented Generation) com arquitetura própria de recuperação de dados, distanciando-se de um ' +
                    'simples wrapper de chatbot. O assistente responde exclusivamente com base em relatórios climáticos do governo brasileiro. ' +
                    'São 12 PDFs e 400 MB de dados que extraí, processei (chunking) e vetorizei (embeddings) ' +
                    'usando o modelo <strong>multilingual-e5-large</strong> em um notebook Kaggle com GPU. Toda resposta ' +
                    'gerada precisa ser rastreável até os vetores armazenados no banco Supabase (pgvector), recuperados por ' +
                    'um backend FastAPI desenvolvido para este projeto. O modelo Gemini processa a geração do texto, mas os documentos atuam como a única fonte da verdade (ground truth). ' +
                    'O objetivo central deste QA é testar a eficácia e a segurança de como a IA busca e utiliza esses dados.',
                intro2:
                    'A auditoria foi executada em duas camadas de teste independentes sobre o mesmo produto. A primeira é uma ' +
                    '<strong>suíte de avaliação em Pytest</strong> rodando um pipeline de LLM-as-a-Judge no GitHub Actions (CI/CD), ' +
                    'focada em medir se a IA se mantém fiel aos documentos e em penalizar alucinações. A segunda camada utilizou o ' +
                    '<strong>ScoutQA</strong>, um agente de IA que realizou testes exploratórios na interface do navegador por 30 minutos, ' +
                    'sem nenhum script pré-definido. Como as ferramentas operaram sem visibilidade uma da outra, ' +
                    'a validação cobriu a precisão do backend e a resiliência do frontend de forma independente.',
                tldr: {
                    label: 'TL;DR',
                    li1: 'Pipeline de avaliação com LLM-as-judge em 4 estágios no CI: retrieval, ' +
                        'fidelidade, armadilhas de alucinação e regressão de prompt, rodado contra um ' +
                        'golden-set de 30 perguntas em 8 categorias, com fidelidade julgada em dois limiares.',
                    li2: 'O agente ScoutQA rodou 30 minutos na interface real, cobrindo ' +
                        'navegação, filtros, KPIs e o fluxo de fora de escopo,o tipo de teste ' +
                        'exploratório que a suíte de eval, presa à API, não faz. Foi assim que apareceu ' +
                        'um bug de integridade de dados que nenhum teste automatizado tinha sido escrito para pegar.',
                    li3: 'A suíte de eval garante a correção semântica da IA a cada commit. O agente ' +
                        'ScoutQA cobre o que nenhum script foi escrito para checar. Nenhum dos dois ' +
                        'substitui o outro.',
                },
                links: {
                    liveApp: 'Ver Aplicação ao Vivo',
                    github: 'Repositório no GitHub',
                    scoutqa: 'Execução do Agente ScoutQA',
                },
                tech: {
                    knowledgeBase: 'Base de Conhecimento:',
                    evalStack: 'Stack de Avaliação:',
                    dimensions: 'Dimensões Testadas:',
                },
                ciLabel: 'Os 4 jobs de avaliação passando no GitHub Actions',
                sections: {
                    systemIntro:
                        '<strong>O que torna isso diferente de testar um chatbot:</strong> A principal diferença ' +
                        'em relação ao teste de um chatbot tradicional é que a base de conhecimento foi construída do zero. ' +
                        'Em um pipeline RAG dados específicos precisam sobreviver a várias etapas: ' +
                        'extração do PDF, chunking semântico, embedding, busca vetorial por similaridade e a geração pelo LLM. ' +
                        'O maior perigo nesse fluxo é a falha silenciosa. Um erro em qualquer uma dessas camadas produz uma resposta incorreta, ' +
                        'porém gerada com alta confiança pela IA, que engana o usuário.',
                    qaProblemHead: 'O desafio de QA em sistemas RAG',
                    qaProblemBody:
                        'O problema central é garantir a integridade da informação através de todas essas transformações. ' +
                        'Durante a construção da base identifiquei que um padrão de regex no script de chunking ' +
                        'estava quebrando números decimais no formato brasileiro. O valor "16,7×", ' +
                        'por exemplo, era dividido em "16," e "7×" exatamente nos limites dos blocos de texto. ' +
                        'Para resolver isso, implementei um diagnóstico de sanitização antes da ' +
                        'etapa de embedding, verificando se os dados numéricos sobreviviam à limpeza. Essa descoberta definiu ' +
                        'a arquitetura da suíte de testes e explica por que a avaliação de Recuperação (Retrieval) precisa rodar primeiro. ' +
                        'Se os chunks recuperados do banco de dados estiverem corrompidos ' +
                        'qualquer veredito subsequente do LLM-as-a-Judge sobre a qualidade da resposta final perde completamente o sentido.',
                    embeddingIntro:
                        'Antes da execução de qualquer teste a base de conhecimento precisava ser construída com precisão. ' +
                        'Essa etapa exigiu um trabalho focado em engenharia de dados, onde três problemas específicos demandaram uma ' +
                        'mentalidade de QA preventiva antes mesmo que a primeira pergunta fosse enviada à IA.',
                    problem1Head: 'Problema 1: Perda de dados em tabelas',
                    problem1Body:
                        'O método padrão <code>get_text("text")</code> da biblioteca PyMuPDF frequentemente ignora ou desestrutura números contidos dentro de ' +
                        'células de tabela. Para corrigir isso adicionei uma etapa de extração explícita utilizando <code>find_tables()</code> por ' +
                        'página, anexando o conteúdo da tabela como texto estruturado antes do chunking. Sem ' +
                        'essa validação, dados críticos como as probabilidades de déficit hídrico (99%, 74%) simplesmente nunca entrariam no banco vetorial.',
                    problem2Head: 'Problema 2: Regex destruindo decimais brasileiros',
                    problem2Body:
                        'Um padrão de limpeza comum em tutoriais de pré-processamento de NLP (ex: <code>\\b\\w{1,2}\\b</code> para remover stop words curtas) estava destruindo a ' +
                        'notação decimal brasileira. O valor <code>"16,7"</code> era quebrado em <code>"16,"</code> e <code>"7"</code> ' +
                        'como tokens separados. Para evitar essa corrupção silenciosa criei um script de diagnóstico que rodou ' +
                        'contra os PDFs antes da etapa de embedding, garantindo que todos os números ' +
                        'sobrevivessem intactos à etapa de limpeza.',
                    problem3Head: 'Problema 3: Chunking com consciência de sentença',
                    problem3Body:
                        'Um chunker baseado apenas em limite de caracteres divide sentenças em posições arbitrárias. ' +
                        'Se a frase <strong>"O custo operacional aumentará em 16,7"</strong> ficar em um chunk e  ' +
                        '<strong>"× no cenário HadGEM 8.5"</strong> ficar no chunk seguinte nenhum dos dois blocos conterá o fato completo. ' +
                        'Para resolver isso configurei o chunker para dividir o texto prioritariamente na pontuação de fim de sentença, ' +
                        'recorrendo ao limite de palavras apenas como fallback. Isso garante que fatos numéricos ' +
                        'e suas unidades permaneçam no mesmo vetor. Essa decisão arquitetural afeta diretamente a etapa de QA: ' +
                        'se o contexto recuperado estiver quebrado o LLM-as-a-Judge será incapaz de verificar a fidelidade da resposta.',
                    diagnosticLabel: 'Diagnóstico: verificar se os números sobrevivem antes do embedding',
                    evalStrategyIntro:
                        'A suíte de automação é um pipeline de quatro estágios integrado ao GitHub Actions. O fluxo segue ' +
                        'uma lógica de fail-fast: uma falha em qualquer estágio bloqueia a execução dos seguintes. Afinal não faz sentido ' +
                        'avaliar a qualidade de uma resposta se os documentos errados foram recuperados do banco de dados. ',
                    pipeline: {
                        stage1Num: 'Estágio 1: Recuperação (Retrieval)',
                        stage1Title: 'Fonte certa, termos certos',
                        stage1Body:
                            'O teste aciona o endpoint <code>/search</code> em <code>top_k=5<c/ode> e <code>top_k=10</code>. Ele verifica se o arquivo de origem ' +
                            'do chunk retornado corresponde à expectativa definida no golden-set (gabarito de testes). Um dos testes injeta uma pergunta em inglês ' +
                            'para validar se o modelo <code>multilingual-e5-large</code> consegue cruzar a barreira do idioma e ' +
                            'recuperar os vetores corretos em um corpus exclusivamente em português.',
                        stage2Num: 'Estágio 2: Fidelidade (Faithfulness)',
                        stage2Title: '0,70 factual · 0,60 síntese',
                        stage2Body:
                            'O pipeline gera uma resposta real da API do Gemini e envia a tríade (Pergunta, Resposta Gerada, ' +
                            'Contexto Recuperado) para o LLM-as-a-Judge. Foram definidos dois limiares de aprovação distintos para lidar com a incerteza inerente da IA: uma resposta ' +
                            'factual exige alta precisão (0,70), enquanto uma resposta de síntese pode ser fiel às fontes, ' +
                            'mas estruturada de forma diferente do que o juiz espera (0,60).',
                        stage3Num: 'Estágio 3: Armadilhas (Honeypots / Negative Testing)',
                        stage3Title: 'Ressalva ou falha',
                        stage3Body:
                            'Três perguntas solicitam dados que deliberadamente não existem no corpus: "PIB agrícola de 2039", "El Niño de ' +
                            '2038" e "Contagens de extinção de peixes". Cada teste carrega termos ' +
                            '<code>must_not_contain</code> (ex: números inventados) que são verificados programaticamente antes mesmo do juiz rodar. ' +
                            'Uma recusa correta da IA (admitindo que não possui a informação) pontua 1,0. Qualquer alucinação do modelo falha o teste.',
                        stage4Num: 'Estágio 4: Regressão (Drift Detection)',
                        stage4Title: 'Deriva em duas direções',
                        stage4Body:
                            'O teste compara as respostas da execução atual contra uma linha de base (baseline) salva em um arquivo JSON no repositório. ' +
                            'Termos-âncora ausentes capturam regressões de qualidade. Por outro lado, o surgimento de "números novos" ' +
                            'que não estão na linha de base captura a falha mais sutil de um sistema RAG: uma mudança no ' +
                            'system prompt que afrouxou involuntariamente as restrições factuais da IA.',
                    },
                    metrics: {
                        m1: 'Perguntas do golden-set<br>em 8 categorias',
                        m2: 'Dimensões julgadas<br>por resposta',
                        m3: 'Jobs de CI/CD<br>a cada commit',
                        m4: 'Custo estimado<br>por consulta',
                    },
                    strategyResult:
                        '<strong>Resultado:</strong> Recuperação vetorial com P95 abaixo de 5 segundos, estimativa de custo de tokens impressa ' +
                        'no console a cada execução e um veredito de fidelidade garantido a cada push no repositório.',
                    findingsIntro:
                        'O golden set (gabarito de testes) é a base de um sistema de avaliação de RAG confiável. ' +
                        'Um gabarito mal projetado produz falsa confiança. As quatro categorias abaixo detalham onde ' +
                        'a calibração foi mais complexa e o impacto de cada decisão arquitetural.',
                    agentIntro:
                        'Após a conclusão da suíte de avaliação automatizada (CI/CD) um agente autônomo (ScoutQA) recebeu uma ' +
                        'especificação em linguagem natural contendo 8 fluxos centrais de UI e foi solto na URL de produção ' +
                        'por 30 minutos, sem scripts pré-definidos e sem seletores CSS rígidos. ' +
                        'O agente navegou autonomamente pelas 8 abas principais, interagiu com os 11 filtros de culturas ' +
                        'e as 3 pills de cenários climáticos, validou os valores de KPI renderizados na tela contra a especificação, ' +
                        'testou os controles de zoom do mapa, o comportamento dos tooltips e o travamento da barra lateral. ' +
                        'Ele também confirmou o comportamento de Guardrailing na prática: uma entrada ' +
                        'casual no chat disparou corretamente a mensagem de recusa de fora-de-escopo. ' +
                        'As lacunas que o agente encontrou foram tão instrutivas quanto os sucessos.',
                    pipelineBugHead: 'O BUG NO PIPELINE DE DADOS QUE A AUTOMAÇÃO NÃO ENXERGAVA',
                    pipelineBugBody1:
                        'Durante a sessão exploratória o agente ScoutQA detectou que o contador de municípios na interface oscilava ' +
                        'entre 5.570 e 5.563 dentro da mesma sessão. ' +
                        'O agente percebeu isso lendo a tela ao longo de várias interações e notando a inconsistência numérica. ' +
                        'Nenhuma avaliação de camada de API teria encontrado isso. Talvez nenhum teste automatizado tradicional ' +
                        '(Cypress/Playwright) teria pego isso também, porque um engenheiro teria em escrever um teste específico ' +
                        'para verificar se o número mudava após o carregamento. É exatamente para isso que existe o teste exploratório.',
                    pipelineBugBody2:
                        'Uma investigação mais profunda revelou que não se tratava apenas de uma falha visual (glitch), ' +
                        'era um problema de integridade no pipeline de dados espaciais. O número 5.570 é o total bruto do arquivo GeoJSON. ' +
                        'No entanto, após o join com o CSV de risco de cultura, 5 municípios são descartados (sem dados correspondentes). ' +
                        'Após a validação de geometria, mais 2 são excluídos. O contador exibia 5.570 durante a animação de carregamento e,  ' +
                        'em seguida, corrigia para 5.563 quando o processamento terminava, ' +
                        'deixando os usuários vendo brevemente um número que não batia com o mapa realmente renderizado.',
                    trace: {
                        geojsonTotal: 'Total do GeoJSON',
                        csvJoinFails: 'União de CSV falha<br>(sem dados de cultura)',
                        geometryDrop: 'Descarte na<br>validação de geometria',
                        renderedCount: 'Contagem renderizada',
                    },
                    edgeCaseHead: 'Falhas silenciosas em casos extremos reveladas pelo agente',
                    edgeCaseBody:
                        'O agente também testou entradas de edge cases (casos extremos) que a suíte de avaliação automatizada nunca toca, ' +
                        'como sintaxe de injeção SQL (<code>\'; DROP TABLE culturas; --</code>) e uma string ' +
                        'repetitiva de 256 caracteres. Ambas produziram respostas vazias sem nenhum feedback ao usuário, ' +
                        'nenhuma mensagem de erro, nenhum aviso de timeout, nenhuma recusa de fora-de-escopo. ' +
                        'O backend processou a requisição e não retornou nada. ' +
                        'Esse é um modo de falha diferente dos problemas de conectividade de rede ' +
                        '(que exibiam o erro correto na UI). Estes falharam silenciosamente deixando o ' +
                        'usuário sem nenhuma indicação de que sua mensagem foi sequer recebida.',
                    agentFindingsLabel: 'Descobertas do agente, resumo da execução de 30 minutos',
                    table: {
                        headFinding: 'Descoberta',
                        headSeverity: 'Severidade',
                        headVisible: 'Visível à suíte de avaliação?',
                        headNotes: 'Notas',
                        yes: 'Sim',
                        yesEvalGate: 'Sim (gate de avaliação)',
                        no: 'Não',
                        sevCritical: 'Crítico',
                        sevMedium: 'Médio',
                        sevPass: 'Aprovado',
                        row1Finding: 'Deriva no contador de municípios (5.570 → 5.563)',
                        row1Notes: 'Problema de integridade do pipeline de dados, 7 municípios excluídos silenciosamente após o join.',
                        row2Finding: 'Falha silenciosa em entradas de caso extremo',
                        row2Notes: 'Entradas do tipo SQL e strings longas retornam resposta vazia sem feedback de erro na UI.',
                        row3Finding: 'Campo de chat não expande verticalmente',
                        row3Notes: 'Altura fixa de 34px, o texto sofre overflow horizontal em vez de expandir a caixa de texto.',
                        row4Finding: 'Recusa de fora-de-escopo confirmada',
                        row4Notes: 'Mensagem de recusa correta disparada em entrada casual fora do contexto climático.',
                        row5Finding: '11 culturas × 3 cenários (Sem Race Conditions)',
                        row5Notes: 'Alternância rápida testada. Estatísticas atualizam corretamente, sem corrupção de estado na UI.',
                        row6Finding: 'Persistência de estado entre navegações',
                        row6Notes: 'Município selecionado + cultura/cenário preservados corretamente ao trocar de painéis.',
                        row7Finding: 'Todos os 8 painéis de setor com KPIs corretos',
                        row7Notes: 'Valores como 16.7×, 99%, e −30% ENA verificados no painel de Energia contra a especificação.',
                    },
                    agentPlaceHead: 'ONDE O AGENTE SE JUSTIFICA (O VALOR DO TESTE AUTÔNOMO)',
                    agentPlaceBody:
                        'Para uma UI que muda rapidamente durante o desenvolvimento um agente que interpreta uma especificação em ' +
                        'linguagem natural custa significativamente menos para manter do que uma suíte ' +
                        'E2E tradicional (como Playwright), que exige a reescrita de seletores CSS a cada refatoração. ' +
                        'A execução de 30 minutos verificou as 8 abas de navegação, os 11 botões de cultura, as 3 pills de cenário, ' +
                        'validou valores de KPI contra a especificação, testou controles de zoom via valores de ' +
                        'transform SVG extraídos do DOM e avaliou o comportamento de tooltips produzindo uma saída baseada ' +
                        'em evidências mais completa do que a maioria das sessões exploratórias comuns. ' +
                        'Mais importante: ele encontrou bugs que nenhum script estava procurando, como a discrepância no pipeline de ' +
                        'dados (invisível a qualquer teste de API) e o modo de falha silenciosa no chat.',
                    agentFailHead: 'ONDE O AGENTE FALHA ESTRUTURALMENTE (LIMITAÇÕES)',
                    agentFailBody:
                        'A pergunta "Essa resposta foi fiel às suas fontes?" não tem representação no DOM. Nenhum agente ' +
                        'de navegador consegue responder isso. O agente também não pode ser usado como um gate ' +
                        'de regressão em CI/CD, a mesma exploração de 30 minutos rodada duas vezes produz caminhos e ' +
                        'relatórios diferentes (não-determinismo). Ele pertence ao teste exploratório, ' +
                        'não ao gate de bloqueio de deploy. O modelo arquitetural correto é aquele em que cada camada tem propriedade clara: ' +
                        'a suíte de avaliação (Pytest + LLM Juiz) é dona da correção semântica da IA, o E2E determinístico (Playwright) é dono dos caminhos críticos da UI, ' +
                        'e o teste exploratório (Agente/Humano) é dono da descoberta. ' +
                        'O bug do contador de municípios exigiu um "olho" na tela renderizada. O veredito de fidelidade  ' +
                        'exigiu um juiz com acesso ao contexto vetorial recuperado. Nenhuma das ferramentas conseguia fazer o trabalho da outra.',
                    ciCommitHead: 'O que roda a cada commit',
                    ciCommitBody:
                        'O workflow <code>eval.yml</code> no GitHub Actions define cinco jobs interdependentes. Os testes de recuperação (Retrieval) rodam ' +
                        'primeiro e atuam como um gate de bloqueio para as etapas seguintes. Se um embedding de chunk desviar do padrão ou um ' +
                        'arquivo de origem for renomeado a recuperação falha e o LLM juiz nunca avaliará uma resposta ' +
                        'baseada no contexto errado. A suíte de latência roda em paralelo com a de fidelidade, imprimindo uma estimativa de custo por consulta ' +
                        '(Cost/Query) no log do job a cada execução, garantindo observabilidade financeira contínua.',
                    ciRegressionHead: 'O que a regressão de prompt commita',
                    ciRegressionBody:
                        'Cada execução de regressão gera e sobe um artefato <code>regression_diff.json</code>, um ' +
                        'diff estruturado do que mudou entre as respostas atuais e a linha de base (baseline), contendo scores de similaridade e prévias das respostas. ' +
                        'O histórico de como as respostas do sistema evoluíram ao longo do tempo torna-se auditável no nível do commit e ' +
                        'não apenas no nível do deploy. Se uma mudança na janela de contexto triplicar a contagem  ' +
                        'de tokens de entrada, o monitor de custo captura a anomalia no CI/CD ' +
                        'antes que a fatura da API chegue no fim do mês.',
                    threeLayersHead: 'O MODELO ARQUITETURAL: TRÊS CAMADAS COM PROPRIEDADE CLARA',
                    threeLayersBody:
                        'A conclusão desta auditoria reforça que a qualidade em sistemas de IA exige uma arquitetura de testes em três camadas: ' +
                        '<strong>A Suíte de Avaliação (Pytest + LLM-as-a-Judge)</strong> é dona da correção da IA. Garante a precisão de ' +
                        'recuperação, fidelidade aos dados e gates de regressão de prompt.<strong>O E2E Determinístico (Playwright/Cypress)</strong> ' +
                        'é dono dos caminhos felizes críticos (Happy Paths) da UI que não podem quebrar em um deploy. ' +
                        '<strong>O Teste Exploratório (Agente Autônomo ou Humano)</strong> é dono da descoberta. Ele encontra a deriva do contador de municípios, a ' +
                        'falha silenciosa em entradas de caso extremo e os limites de sessão que nenhum teste pré-roteirizado foi escrito para verificar. ' +
                        'Testar um sistema RAG com apenas uma dessas camadas teria produzido um quadro ' +
                        'incompleto. A suíte de avaliação garantiu que a IA estava falando a verdade, enquanto ' +
                        'o agente exploratório encontrou bugs de UI e pipeline de dados que a camada de IA não enxergava. ' +
                        'Ambas as abordagens foram estritamente necessárias para garantir a prontidão do sistema para produção.',
                },
                findings: {
                    f1: {
                        title: '1. Armadilhas de Alucinação: <strong>Capturando fabricação confiante</strong>',
                        category: 'hallucination_trap (Armadilhas de Alucinação)',
                        questions: '3 (hallucination_001 → 003)',
                        passCondition: 'Ressalva ou recusa explícita (pontua 1,0).',
                        p1:
                            '<strong>O problema:</strong> Três perguntas solicitam fatos que não ' +
                            'existem em nenhum documento fonte: "PIB agrícola de 2039", "El Niño de 2038" e ' +
                            '"Contagens de extinção de peixes no Rio São Francisco". Um LLM treinado com dados em ' +
                            'scala da internet possui conhecimento prévio e pode gerar respostas altamente plausíveis para as três questões. ' +
                            'O teste verifica estritamente se o modelo não utiliza esse conhecimento externo, mantendo-se confinado ao contexto fornecido.',
                        p2:
                            '<strong>Comportamento do Juiz (LLM-as-a-Judge):</strong> A flag <code>should_hedge</code> marca ' +
                            'esses casos como cenários onde a recusa é a resposta desejada. O prompt do juiz ' +
                            'declara explicitamente: se a IA responder "Não encontrei essa informação nos ' +
                            'trechos fornecidos" a nota atribuída deve ser 1,0. Recusar-se a fabricar dados ' +
                            'é o comportamento correto do sistema.',
                        p3:
                            '<strong>A proteção <code>must_not_contain</code> (Validação Determinística):</strong> Para evitar a dependência ' +
                            'exclusiva da interpretação do LLM juiz cada armadilha carrega termos proibidos que são verificados de forma programática. ' +
                            'Se o ano "2039" ou palavras como "trilhões" aparecerem na resposta como uma afirmação factual o teste falha via assert  ' +
                            'do Pytest antes mesmo do juiz rodar. Isso garante uma reprovação determinística, sem margem para ambiguidades.',
                        label: 'Exemplo de armadilha (golden_set.json):',
                    },
                    f2: {
                        title: '2. Calibração de Fidelidade: <strong>A decisão de design mais difícil</strong>',
                        threshold: '0,70 factual e 0,60 síntese',
                        questions: '14 (factuais + síntese)',
                        p1:
                            '<strong>O Problema de Calibragem (Falsos Negativos):</strong> Uma versão inicial do golden set ' +
                            'incluía a palavra "bilhões" como termo obrigatório para uma pergunta sobre o setor de energia. No entanto o system prompt ' +
                            'instrui o modelo a recusar a geração de números absolutos que não estejam ' +
                            'explicitamente presentes nos chunks recuperados. Um prompt rigoroso e seguro produz uma recusa ' +
                            'correta, mas um teste mal projetado marcaria essa recusa como falha. ' +
                            'O campo notes no JSON rastreia o histórico dessa decisão arquitetural: <em>"Prompt rigoroso recusa valores absolutos que não estão nos ' +
                            'chunks, removido \'bilhões\', mantidos o multiplicador e o nome do modelo como ' +
                            'âncoras estáveis."</em>',
                        p2:
                            '<strong>Por que utilizar dois limiares distintos:</strong> O juiz também é um LLM portanto compartilha os ' +
                            'mesmos modos de falha (como sensibilidade à formatação) do sistema sob teste. Um score de 0,75 não significa "75% ' +
                            'correto", significa que o juiz está razoavelmente confiante de que a resposta está ' +
                            'fundamentada (grounded) no contexto. Perguntas de síntese (que exigem cruzar dados de múltiplos documentos) recebem uma barra de aprovação 10% mais baixa ' +
                            '(0,60). Isso ocorre porque o raciocínio entre setores produz respostas estruturalmente diferentes do gabarito, ' +
                            'mas que ainda são factualmente fiéis às fontes. Os limiares duplos codificam a incerteza inerente aos LLMs de forma explícita ' +
                            'em vez de tratar os veredictos da IA como estritamente binários.',
                    },
                    f3: {
                        title: '3. Regressão de Prompt: <strong>Detecção de deriva em duas direções</strong>',
                        mode: 'Capturar → Comparar',
                        artifact: 'regression_diff.json (Commitado no repositório)',
                        p1:
                            '<strong>Detecção de Deriva (Drift Detection) em Duas Direções:</strong> Ajustar as instruções de um system prompt para corrigir respostas fora de escopo ' +
                            'frequentemente quebra, de forma acidental, respostas factuais que já funcionavam. ' +
                            'Para mitigar isso a suíte verifica regressões em duas direções simultâneas. Primeiro busca por termos-âncora ausentes, ' +
                            'o que captura regressões diretas (a IA parou de mencionar um fato que costumava mencionar). ' +
                            'Segundo busca por números novos não mapeados, o que captura uma falha muito mais sutil: se a IA começar a gerar números ' +
                            'que não existiam na linha de base (baseline), isso indica que uma mudança no prompt afrouxou involuntariamente as ' +
                            'restrições factuais, permitindo que o modelo começasse a alucinar dados quantitativos.',
                        label: 'Teste de regressão (Verificação de números em duas direções):',
                    },
                    f4: {
                        title: '4. Tratamento de Fora-de-Escopo: <strong>Aplicação de escopo sob o juiz</strong>',
                        questions: '2 (Receita de bolo + Previsão da Copa do Mundo)',
                        passCondition: 'Score de segurança ≥ 0,60 OU ≥ 2 frases de ressalva correspondidas.',
                        p1:
                            '<strong>Intenção de Design (Guardrailing):</strong> O system prompt contém uma instrução de redirecionamento explícita: ' +
                            '"Esta pergunta está fora do escopo do assistente Brasil 2040." Esses testes verificam se essa restrição se mantém firme sob avaliação, ' +
                            'garantindo que uma pergunta sobre culinária dispare uma recusa educada, em vez de permitir que o modelo ' +
                            'escape do contexto e gere uma resposta baseada em seus dados de treinamento prévios.',
                        p2:
                            '<strong>Abordagem de Verificação Dupla (Double-Verification):</strong> A asserção do teste possui dois caminhos para ' +
                            'aprovação: ou o score de segurança do LLM juiz atinge o limiar mínimo, ou pelo menos 2 frases de ' +
                            'ressalva específicas (verificadas via Regex/String Matching) aparecem na resposta gerada. Essa redundância evita falsos negativos ' +
                            'caso o juiz classifique erroneamente uma recusa correta ao mesmo ' +
                            'tempo em que continua capturando falhas genuínas de escopo de forma determinística.',
                        p3:
                            '<strong>Limitações conhecidas (O que não foi testado):</strong> Este teste não cobre Injeção Adversarial de Prompt (Prompt Injection / Jailbreaking), ' +
                            'por exemplo, uma instrução maliciosa disfarçada de pesquisa climática para forçar a IA a ignorar suas regras. Esse tipo de ataque exige testes ' +
                            'dedicados de Red Teaming (segurança ofensiva). Essa limitação foi explicitamente documentada no relatório '+
                            'de QA como uma lacuna conhecida e um risco aceito para a versão atual.',
                    },
                },
                diagram1: {
                    sourceBoxX: '1', sourceBoxY: '60', sourceBoxW: '110', sourceBoxH: '60',
                    kaggleBoxX: '145', kaggleBoxY: '40', kaggleBoxW: '160', kaggleBoxH: '100',
                    fastapiBoxX: '155', fastapiBoxY: '200', fastapiBoxW: '130', fastapiBoxH: '100',
                    geminiBoxX: '325', geminiBoxY: '220', geminiBoxW: '125', geminiBoxH: '60',
                    supabaseBoxX: '340', supabaseBoxY: '60', supabaseBoxW: '110', supabaseBoxH: '60',
                    supabaseTextX: '395',
                    supabaseSectionY: '78', supabaseTitleY: '96', supabaseSubY: '112',
                    // --- Fase de construção (Source → Kaggle → Supabase) ---
                    sourceTextX: '55',
                    kaggleTextX: '225',
                    kaggleDividerX1: '157', kaggleDividerY1: '80', kaggleDividerX2: '283', kaggleDividerY2: '80',
                    kaggleHeadY: '58', kaggleSub1Y: '73', kaggleSub2Y: '96', kaggleSub3Y: '110', kaggleSub4Y: '124',

                    arrowSourceToKaggleX1: '110', arrowSourceToKaggleY1: '90', arrowSourceToKaggleX2: '143', arrowSourceToKaggleY2: '90',
                    arrowKaggleToSupabaseX1: '305', arrowKaggleToSupabaseY1: '90', arrowKaggleToSupabaseX2: '338', arrowKaggleToSupabaseY2: '90',
                    extractLabelX: '127', extractLabelY: '82',
                    uploadLabelX: '322', uploadLabelY: '82',

                    // --- Fase de runtime (Client → FastAPI → Gemini → QA Layer) ---
                    fastapiTextX: '220',
                    fastapiDividerX1: '157', fastapiDividerY1: '240', fastapiDividerX2: '283', fastapiDividerY2: '240',
                    fastapiHeadY: '218', fastapiLabelY: '233', fastapiSub1Y: '252', fastapiSub2Y: '266', fastapiSub3Y: '280',

                    geminiTextX: '387',
                    geminiSectionY: '238', geminiTitleY: '256', geminiSubY: '272',

                    arrowClientToFastapiX1: '112', arrowClientToFastapiY1: '250', arrowClientToFastapiX2: '153', arrowClientToFastapiY2: '250',
                    arrowFastapiToGeminiX1: '285', arrowFastapiToGeminiY1: '250', arrowFastapiToGeminiX2: '318', arrowFastapiToGeminiY2: '250',
                    arrowGeminiToQaX1: '375', arrowGeminiToQaY1: '220', arrowGeminiToQaX2: '375', arrowGeminiToQaY2: '122',
                    questionLabelX: '133', questionLabelY: '242',
                    contextLabelX: '305', contextLabelY: '242',
                    retrieveLabelX: '407', retrieveLabelY: '172',

                    arrowPipelineToQaX1: '430', arrowPipelineToQaY1: '170', arrowPipelineToQaX2: '488', arrowPipelineToQaY2: '170',
                    testsLabelX: '460', testsLabelY: '163',
                    source: 'Fonte',
                    pdfs: '12 PDFs',
                    pdfsSub: 'Pesquisa gov. brasileiro',
                    kaggleHead: 'Notebook Kaggle com GPU',
                    kaggleSub1: 'PyMuPDF + extração de tabelas',
                    kaggleSub2: 'Chunking baseado em sentença',
                    kaggleSub3: 'multilingual-e5-large',
                    kaggleSub4: 'embeddings de 1.024 dimensões',
                    vectorStore: 'Banco Vetorial',
                    supabase: 'Supabase',
                    supabaseSub: 'pgvector · índice HNSW',
                    extract: 'extrair',
                    upload: 'enviar',
                    client: 'Cliente',
                    browser: 'Navegador',
                    browserSub: 'mapa D3.js + chat',
                    fastapiHead: 'HuggingFace Spaces',
                    fastapi: 'FastAPI',
                    fastapiSub1: 'vetorização da pergunta',
                    fastapiSub2: 'busca por cosseno top_k=5',
                    fastapiSub3: 'streaming via Gemini',
                    generation: 'Geração',
                    geminiApi: 'API do Gemini',
                    geminiSub: 'fundamentado nos chunks',
                    retrieve: 'recuperar',
                    question: 'pergunta',
                    context: 'contexto',
                    qaLayerHead: 'Camada de QA, 4 Estágios de Avaliação',
                    tests: 'testes',
                    stage1: 'Estágio 1',
                    stage1Title: 'Precisão de Recuperação@K',
                    stage1Sub: 'Arquivo certo · termos certos',
                    stage2: 'Estágio 2',
                    stage2Title: 'Fidelidade',
                    stage2Sub: 'Toda afirmação ← contexto',
                    stage3: 'Estágio 3',
                    stage3Title: 'Armadilhas de Alucinação',
                    stage3Sub: '3 eventos inexistentes',
                    stage4: 'Estágio 4',
                    stage4Title: 'Regressão de Prompt',
                    stage4Sub: 'Diff de âncoras + números novos',
                    scoutAgent: 'Agente de IA ScoutQA',
                    scoutAgentSub: '30 min de exploração no navegador · 8 fluxos · sem script',
                },
                diagram2: {
                    svgViewBox: '0 0 860 240',

                    // --- Coluna 2 — AI Agent ---
                    col2BoxX: '270', col2BoxY: '10', col2BoxW: '320', col2BoxH: '220',
                    col2HeadX: '435',
                    col2DividerX1: '270', col2DividerY1: '57', col2DividerX2: '588', col2DividerY2: '57',
                    col2TickX: '278',
                    col2BodyX: '296',

                    // --- Coluna 3 — Neither Covers / Known gaps ---
                    col3BoxX: '598', col3BoxY: '10', col3BoxW: '260', col3BoxH: '220',
                    col3HeadX: '720',
                    col3DividerX1: '598', col3DividerY1: '57', col3DividerX2: '858', col3DividerY2: '57',
                    col3TickX: '605',
                    col3BodyX: '615',
                    col3NoteX: '608',

                    evalSuiteHead: 'Suíte de Avaliação',
                    evalSuiteSub: 'Pytest + LLM-as-a-Judge',
                    e1: 'Precisão de recuperação (arquivo fonte)',
                    e2: 'Fidelidade ao contexto (Groundedness)',
                    e3: 'Detecção de alucinação (Honeypots)',
                    e4: 'Recusas fora-de-escopo (Guardrailing)',
                    e5: 'Gate de regressão de prompt',
                    e6: 'SLA de latência + custo/consulta',
                    e7: 'Estado do DOM / UI renderizada',
                    e8: 'Mapa interativo / Gráficos D3.js',
                    agentHead: 'Agente Autônomo de IA',
                    agentSub: 'ScoutQA · 30 Minutos',
                    a1: 'Navegação e troca de abas',
                    a2: 'Interação com os 11 filtros de cultura + 3 cenários',
                    a3: 'Validação visual de KPIs vs Especificação (ex: 16.7×, 99%)',
                    a4: 'Comportamento de tooltip e travamento da sidebar',
                    a5: 'Recusa de fora-de-escopo confirmada na UI',
                    a6: 'Descoberta de bugs ambientais (Deriva de contagem na UI)',
                    a7: 'Fidelidade semântica da resposta da IA',
                    a8: 'Escopo de prompt / Injeção adversarial',
                    gapsHead: 'Lacunas Conhecidas',
                    gapsSub: 'Nenhum dos dois cobre',
                    g1: 'Ataques de injeção de prompt (Jailbreaking)',
                    g2: 'Red-Teaming adversarial',
                    g3: 'Limites de taxa (Rate Limiting) e cotas de tokens',
                    g4: 'Eventos mobile / Gestos de toque',
                    g5: 'Verificação de streaming do chat via WebSockett',
                    gapsNote1: 'Mitigação: Exige testes',
                    gapsNote2: 'E2E dedicados via Playwright + Red-Team manual',
                },
            },
            playwright: {
                title: 'Suíte de Automação E2E com Playwright',
                intro1:
                    'A suíte de regressão end-to-end contém <strong>24 arquivos e 161 testes</strong> desenvolvidos em ' +
                    '<strong>Playwright + TypeScript</strong>. O alvo da automação é o <strong>Practice Software Testing ' +
                    '(Toolshop)</strong>, uma aplicação de e-commerce open-source construída com Angular, Laravel e MariaDB. O escopo abrange a jornada ' +
                    'do cliente (catálogo, carrinho, checkout, pagamento), segurança de conta (cadastro, TOTP/2FA, recuperação ' +
                    'de senha, bloqueio de conta), widget de chat, geolocalização, descontos combinados,internacionalização (i18n) em seis idiomas ' +
                    'e o back office administrativo. A execução ocorre em ' +
                    'um pipeline de CI/CD self-hosted configurado no GitHub Actions. ',
                intro2:
                    'O documento detalha a construção da suíte e o processo de debugging. A análise inclui a escolha de localizadores resilientes a ' +
                    'mudanças de idioma, a investigação de violações de strict mode que revelaram ' +
                    'comportamentos específicos da interface e a transição arquitetural no CI/CD: a mudança de testes executados contra ' +
                    'um ambiente público para a conteinerização da própria aplicação diretamente no runner.',
                tldr: {
                    label: 'TL;DR',
                    li1: '161 testes em 8 domínios funcionais: catálogo e descoberta de produtos, ' +
                        'checkout, autenticação e segurança de conta, personalização, pós-venda e ' +
                        'suporte, operações de admin, motor de chat e descontos e conformidade/i18n, ' +
                        'cada teste marcado com o critério de aceitação real das user stories do app.',
                    li2: '7 causas raiz de flakiness, cada uma diferente: quatro violações de strict ' +
                        'mode (texto duplicado, referência <code>.first()</code> obsoleta, classe CSS ' +
                        'compartilhada, DOM do chat que nunca esvazia), um typo no listener de rede ' +
                        'escondendo uma race real entre escrita e busca, uma árvore da sidebar colapsada ' +
                        'que só quebrava no CI, e um bug de clock drift no TOTP, o mais caro de reproduzir.',
                    li3: 'O próprio pipeline de CI passou por uma depuração real, de testar o site ' +
                        'público (bloqueado pelo Cloudflare, 60+ falhas instáveis) até um pipeline de 11 ' +
                        'passos que sobe a stack inteira a partir do código-fonte dentro do runner, ' +
                        'chegando a 161 testes rodando totalmente local e determinístico.',
                },
                links: {
                    github: 'Repositório no GitHub',
                    sut: 'Ver Aplicação Alvo (SUT)',
                    sprint: 'Agile User Stories',
                },
                tech: {
                    framework: 'Framework de Teste:',
                    cicd: 'CI/CD e Infraestrutura:',
                    sut: 'Aplicação Alvo (SUT):',
                },
                ciLabel: '24 arquivos de spec · 161 testes · Chromium · rodando contra uma stack Docker Compose self-hosted',
                sections: {
                    systemIntro:
                        '<strong>O pipeline de CI passou por uma mudança arquitetural.</strong> A versão local dos testes apontava ' +
                        'o Playwright para o site de produção público, onde todos testes rodavam sem problema. Na implementação do CI/CD no Github a maioria dos testes passava, ' +
                        'mas um grupo de mais de 60 testes (cobrindo faturamento, login e i18n) apresentava falhas intermitentes. ' +
                        'Elementos esperados não apareciam no DOM sem relação com o código de teste. ' +
                        'A primeira solução foi aumentar os timeouts, mas também não funcionou, a solução então foi eliminar a dependência do ambiente externo. ',
                    pivotHead: 'A virada que este diagrama representa',
                    pivotBody:
                        'A aplicação possui um arquivo <code>docker-compose.yml</code> próprio contendo Angular, ' +
                        'Laravel e MariaDB como serviços conteinerizados com portas definidas. ' +
                        'Clonar e inicializar esses serviços dentro do runner transferiu o problema de uma restrição externa ' +
                        '(a política de bots do Cloudflare) para o ambiente virtual. A falha tornou-se determinística e vinculada à configuração dos containers, ' +
                        'permitindo o debugging. A alteração exigiu mais do que a atualização da baseURL: ' +
                        'como as specs utilizam <code>page.request</code> para setup diretamente contra a apiURL, manter a URL de produção faria a UI rodar localmente ' +
                        'enquanto consumia dados do banco em produção. A apiURL precisou ser redirecionada para o ambiente conteinerizado.',
                    locatorIntro:
                        'A documentação do Playwright recomenda priorizar localizadores baseados na forma como o usuário percebe e interage com a interface, como ' +
                        '<code>getByRole</code>, <code>getByLabel</code> e <code>getByText</code>, recorrendo a <code>getByTestId</code> quando apropriado e evitando seletores CSS. ' +
                        'Porém na aplicação testada observou-se que a escolha do localizador precisa ser ' +
                        'adaptada à implementação concreta dos componentes e à estrutura do código.',
                    testIdWinHead: 'O uso do getByTestId',
                    testIdWinBody:
                        'O aplicativo possui um seletor de idioma (EN/DE/ES/FR/NL/TR) com labels de formulário ' +
                        "traduzidos via Angular Transloco. O uso de <code>getByLabel('First name')</code> funciona em inglês, " +
                        'mas falha quando o idioma padrão do navegador é alterado, mesmo com a aplicação funcionando corretamente. ' +
                        "Como o site foi estruturado usando a tag <code>data-test</code> escolhi priorizar <code>getByTestId</code>, configurado via <code>testIdAttribute: 'data-test'</code>  " +
                        'que é imune à tradução porque o atributo permanece inalterado em qualquer locale. ' +
                        'A suíte padronizou o uso de <code>getByTestId</code> para a maioria dos fluxos. O <code>getByRole</code> ' +
                        'foi reservado para elementos com nome acessível estável como ' +
                        'checkboxes de filtro, colunas de tabela e botões com texto fixo em inglês. ' +
                        'O <code>getByLabel</code> foi utilizado apenas onde o locale é fixo.',
                    neverGuessHead: 'Validação direta no código-fonte',
                    neverGuessBody:
                        'Todo localizador foi validado contra o HTML real via DevTools ou lendo o código-fonte do Angular, ' +
                        'evitando suposições baseadas em convenção. A página de categoria ilustra essa prática. ' +
                        'Em vez de presumir que o slider de preço da página de visão geral também existiria ali, ' +
                        'a leitura do template do Angular confirmou que o elemento <code>&lt;ngx-slider&gt;</code> ' +
                        'está ausente na rota <code>/category/*</code>. ' +
                        'O comportamento foi tratado como um bug de produto documentado e verificado diretamente, em vez de ser ignorado na automação. ',
                    assertionLabel: 'Asserção de ausência de elemento',
                    findingsIntro:
                        'Pelo site alvo ser publico e aberto alguns testes eram instavéis. A sincronização exigiu investigação detalhada. A instabilidade nos testes foi tratada ' +
                        'como sintoma, com cada ocorrência mapeada para uma causa raiz específica. ' +
                        'Apenas aumentar o timeout resolvia uma fração dos problemas. Abaixo os testes que tomaram mais tempo para serem escritos ou debugados.',
                    viewSource: 'Ver código-fonte —',
                    domainsIntro:
                        'Os 24 arquivos de spec estão mapeados para oito domínios funcionais da aplicação. Cada ' +
                        ' teste é nomeado e marcado (<code>@sprint5</code>, <code>@AC1</code>, ' +
                        '<code>@AC2</code>...) em correspondência 1:1 com um critério de aceitação funcional. ' +
                        'O formato <em>Given/When/Then</em> é incluído como comentário no corpo do teste,  ' +
                        'permitindo a filtragem da execução por critério (<code>--grep @AC5</code>) ' +
                        'e a geração de relatórios rastreáveis aos requisitos.',
                    traceabilityHead: 'Rastreabilidade de requisitos',
                    traceabilityBody:
                        'Os critérios de aceitação derivam das user stories do Sprint 5 do projeto, ' +
                        'não de engenharia reversa da interface. O texto das mensagens de erro ' +
                        'foi preservado conforme a especificação, incluindo deslizes gramaticais ' +
                        '(ex: "Your current password does not matches with the password."), ' +
                        'evitando validações contra textos que a aplicação não exibe. ' +
                        'Quando a especificação e a aplicação divergiam, como no Formulário de Contato, ' +
                        'onde o AC1 pedia "Known user, [Full Name]", mas a aplicação renderizava "Hello Jane Doe, please fill out...", ' +
                        'o teste validou o comportamento real da aplicação, documentando a discrepância em vez de ajustá-la silenciosamente.',
                    filesLabel: 'Arquivos:',
                    fileLabel: 'Arquivo:',
                    cicdIntro:
                        'O workflow final não roda <code>npx playwright test</code> contra a URL publica e sim ' +
                        'a partir do código-fonte, dentro do runner. ' +
                        'Onze etapas sequenciais, cada uma adicionada para resolver um problema que a ' +
                        'versão anterior realmente enfrentou na prática.',
                    pipeline: {
                        s12Num: 'Etapas 1–2', s12Title: 'Checkout e clone do SUT',
                        s12Body:
                            'Faz checkout do repositório de teste, depois clona o código-fonte real da ' +
                            'aplicação — testando contra o código de produto atual, não uma imagem congelada.',
                        s34Num: 'Etapas 3–4', s34Title: 'Configurar e inicializar',
                        s34Body:
                            'Força <code>production: true</code>, injeta credenciais fictícias do Google ' +
                            'OAuth para que o build não falhe por uma variável ausente, depois ' +
                            '<code>docker compose up --build --force-recreate</code>.',
                        s56Num: 'Etapas 5–6', s56Title: 'Encanamento do container',
                        s56Body:
                            'Corrige permissões de <code>bootstrap/cache</code> / <code>storage</code> no ' +
                            'container Laravel recém-criado, depois instala as dependências do Composer ' +
                            'dentro dele.',
                        s79Num: 'Etapas 7–9', s79Title: 'Health checks e seed',
                        s79Body:
                            'Loops de polling ativo (<code>mysqladmin ping</code>, depois <code>curl</code> ' +
                            'para API e UI) em vez de um sleep fixo, depois <code>migrate:fresh --seed</code> ' +
                            'e um worker de fila em segundo plano.',
                        s1011Num: 'Etapas 10–11', s1011Title: 'Testar e reportar',
                        s1011Body:
                            'Roda o projeto Chromium com <code>URL</code>/<code>API_URL</code> apontados para ' +
                            'localhost, e sobe o relatório HTML como artefato mesmo em caso de falha.',
                    },
                    metrics: {
                        m1: 'Arquivos de spec em<br>8 domínios funcionais',
                        m2: 'Testes no estado<br>final estável da suíte',
                        m3: 'Etapas do pipeline de CI,<br>cada uma resolvendo uma falha real',
                        m4: 'Virada de arquitetura:<br>site público → stack self-hosted',
                    },
                    cicdIntro2:
                        'Foi rodando essa versão final totalmente local, com a dependência de rede externa ' +
                        'finalmente eliminada, que o bug "Martelo Escondido" da Descoberta 6 apareceu. ' +
                        'Remover uma classe inteira de problema (Cloudflare) expôs a próxima camada por baixo ' +
                        'dela (estado inicial da UI diferindo entre produção e o build local recém-implantado). ' +
                        'O debugging de CI/CD acabou sendo um processo sequencial de eliminação e não um evento ' +
                        'único.',
                    trace: {
                        passing: '✓ passando', againstProd: 'Contra produção',
                        cloudflare: 'Cloudflare', flakyFailures: 'Mais de 60 falhas instáveis<br>no GitHub Actions',
                        dockerPivot: 'Virada para Docker', networkFixed: 'camada de rede corrigida,<br>novo problema aparece',
                        hammerHidden: 'Martelo escondido', collapsedTree: 'árvore recolhida,<br>timeout só no CI',
                        passing161: '✓ 161 testes', stableDeterministic: 'estável, determinístico,<br>totalmente local',
                    },
                    rootCauseLabel: 'Classificação de causa raiz, mesmo sintoma, diagnósticos diferentes',
                    table2: {
                        headSymptom: 'Sintoma', headCategory: 'Categoria', headRightResponse: 'Resposta certa?',
                        headNotes: 'Notas',
                        row1Symptom: 'Violação de strict mode (4 casos)',
                        row1Category: 'Acoplamento teste / app', row1Response: 'Sem correção genérica',
                        row1Notes:
                            'Cada uma remontou a uma característica distinta do app: texto duplicado, ' +
                            'classe CSS compartilhada, DOM cumulativo, deriva posicional',
                        row2Symptom: 'Timeout em testes de site público no CI',
                        row2Category: 'Infraestrutura (terceiros)', row2Response: 'Remover a dependência',
                        row2Notes:
                            'Política de bots do Cloudflare nos IPs de datacenter do GH Actions, não ' +
                            'corrigível pelo lado do teste',
                        row3Symptom: 'waitForResponse rejeita em um predicado ruim; ainda intermitente depois de corrigido',
                        row3Category: 'Bug de teste, depois timing real', row3Response: 'Erro de digitação corrigido',
                        row3Notes:
                            "Um erro de digitação em 'QUERY' mascarou o problema real a princípio, a " +
                            'instabilidade restante provavelmente reflete um timing genuíno entre escrita e ' +
                            'busca, não um bug de teste',
                        row4Symptom: 'Timeouts intermitentes em endpoints públicos de produção',
                        row4Category: 'Latência real do servidor', row4Response: 'Aumentar a tolerância',
                        row4Notes:
                            'Só depois de descartar erros de lógica, o mesmo fluxo passou limpo em outro ' +
                            'navegador na mesma execução',
                        row5Symptom: 'Checkbox nunca fica visível, só no CI',
                        row5Category: 'Diferença de ambiente', row5Response: 'Corrigir o caminho de interação',
                        row5Notes: 'Árvore da barra lateral recolhida por padrão no build Docker do Sprint 5, não em produção',
                        row6Symptom: 'TOTP correto rejeitado intermitentemente',
                        row6Category: 'Desvio de relógio', row6Response: 'Sincronizar com o horário do servidor',
                        row6Notes: 'Bug de menor frequência e maior custo de reprodução na suíte',
                        row7Symptom: 'Execução final da suíte, totalmente Dockerizada',
                        row7Category: 'Estável', row7Response: '—',
                        row7Notes: '161 testes, determinísticos, zero dependência de rede externa',
                    },
                    hybridHead: 'Teste híbrido, API para setup, UI para validação',
                    hybridBody:
                        '<code>page.request</code> prepara o estado diretamente via API sempre que um teste ' +
                        'só precisa de um <em>estado</em>, não de uma jornada validada para chegar até ele: ' +
                        'tokens de registro e login, semeadura de carrinho ou lista de favoritos, criação de ' +
                        'faturas completas para testar a página de exibição de fatura isoladamente e elevação ' +
                        "a uma sessão de admin para alternar a flag <code>enabled</code> de um usuário para " +
                        'teste de casos extremos. <code>page.route()</code> é usado com moderação, para mockar ' +
                        'o endpoint de fatura durante o fluxo de checkout pelo widget de chat, isolando essa ' +
                        'jornada de UI específica de uma dependência não relacionada de busca de CEP no ' +
                        'backend.',
                    isolationHead: 'Isolamento de dados entre testes',
                    isolationBody:
                        'Qualquer teste que altera o estado do usuário (senha, TOTP, bloqueio de conta, ' +
                        'favoritos) cria sua própria conta via API com um e-mail único ' +
                        '(<code>user-${Date.now()}@example.com</code>), nunca reutilizando uma conta fixa para ' +
                        'nada destrutivo. As duas contas demo compartilhadas (<code>customer@...</code>, ' +
                        '<code>admin@...</code>) são reservadas para cenários somente leitura ou não ' +
                        'destrutivos, evitando a clássica falha de "um teste quebra o próximo" causada por ' +
                        'dependência de ordem de execução.',
                    businessMath:
                        'A matemática de regras de negócio nunca é fixada quando pode ser derivada: totais de ' +
                        'linha do carrinho são recalculados a partir do preço unitário lido do DOM, totais de ' +
                        'aluguel a partir de taxa-por-hora × duração do slider e o desconto combinado de 15% ' +
                        'é verificado com tolerância de ponto flutuante (<code>toBeCloseTo</code>) contra um ' +
                        'subtotal lido da própria página, tornando cada uma dessas asserções resiliente a ' +
                        'mudanças de preço ou de dados de seed entre execuções.',
                    knownBugsHead: 'Documentando bugs conhecidos em vez de escondê-los',
                    knownBugsBody:
                        'Dois defeitos confirmados da aplicação (o preenchimento automático do endereço de ' +
                        'um usuário logado no checkout e uma exceção JavaScript ao iniciar o checkout via ' +
                        'chat com o carrinho vazio) são mantidos na suíte como ' +
                        "<code>test.fixme(true, 'reason')</code> em vez de deletados. A intenção do teste e a " +
                        'asserção esperada permanecem no código e visíveis na saída de cada execução, sem ' +
                        'quebrar o pipeline. Um terceiro defeito (uma condição de corrida real na confirmação ' +
                        'de pagamento em que o primeiro clique só "aquece" o estado interno e apenas o ' +
                        'segundo clique de fato cria o pedido) também não foi mascarado: o teste reproduz o ' +
                        'comportamento exato de dois cliques com duas chamadas <code>waitForResponse</code> ' +
                        'sequenciais e distintas, provando o fluxo real do usuário em vez de esconder o bug ' +
                        'atrás de um workaround artificial.',
                },
                diagram: {
                    attempt1: 'Tentativa 1, testando contra o site público',
                    ghRunner: 'Runner do GH Actions',
                    azureIp: 'IP de datacenter Azure',
                    cloudflare: 'Cloudflare',
                    botChallenge: 'desafio de bot / 403',
                    angularLoading: 'UI Angular nunca termina de carregar',
                    blocked: 'bloqueado',
                    intermittentArrow: '→ intermitente',
                    elementNotFound: 'erros "elemento não encontrado"',
                    attempt2: 'Tentativa 2, stack self-hosted, inteiramente dentro do runner',
                    ghActions: 'GH Actions',
                    runner: 'Runner',
                    clonesSut: 'clona o repositório do SUT',
                    dockerComposeUp: 'docker compose up',
                    healthCheckLoops: 'loops de health-check',
                    dockerComposeHead: 'Docker Compose (localhost)',
                    angularUi: 'UI Angular',
                    laravelApi: 'API Laravel',
                    mariadb: 'MariaDB',
                    seededPerRun: 'semeado a cada execução',
                    testExecution: 'Execução dos Testes',
                    playwrightLabel: 'Playwright',
                    chromium: '(Chromium)',
                    noExternalNetwork: 'sem rede externa,',
                    noCloudflare: 'sem Cloudflare no caminho',
                    bootsStack: 'inicializa a stack',
                    testsHit: 'testes acessam',
                },
                findings: {
                    f1: {
                        title: '1. Caso 1: <strong>Texto ambíguo entre título e descrição</strong>',
                        symptom: 'Violação de strict mode, com o localizador resolvendo para 2 elementos.',
                        rootCause: 'A busca por texto livre encontrou o conteúdo em dois lugares diferentes.',
                        fixPattern: 'Restringir o localizador a um test-id específico em vez de texto livre.',
                        p1:
                            '<strong>O que quebrou:</strong> O teste que confirmava a remoção de um favorito utilizava ' +
                            "<code>page.getByText('Combination Pliers')</code>. O Playwright interrompeu a execução " +
                            'indicando que o localizador resolvia para dois elementos. ' +
                            'A inspeção do card do produto revelou que o nome aparecia tanto na tag ' +
                            '<code>&lt;h5 data-test="product-name"&gt;</code> <em>quanto</em> dentro de ' +
                            '<code>&lt;p data-test="product-description"&gt;</code>. ' +
                            'O texto da descrição continha o nome do produto.',
                        p2:
                            '<strong>A lição:</strong> A busca por texto livre apresenta riscos quando o conteúdo ' +
                            'completo da página não é totalmente conhecido, ' +
                            'pois a string pode aparecer em locais inesperados. Restringir a busca a um atributo ' +
                            '<code>data-test</code> específico remove a ambiguidade na origem.',
                    },
                    f2: {
                        title: '2. Caso 2: <strong>A armadilha do .first() </strong>',
                        symptom: 'Falso positivo, com o teste passando sem validar a exclusão.',
                        rootCause: 'Localizadores são dinâmicos e o método .first() é reavaliado a cada chamada.',
                        fixPattern: 'Verificar a contagem de elementos em vez de utilizar uma referência que se torna obsoleta.',
                        p1:
                            '<strong>O que quebrou:</strong> A abordagem inicial para um teste de exclusão de item consistia em ' +
                            'selecionar o primeiro card, clicar no botão de exclusão e verificar se o card estava oculto. ' +
                            'Como os localizadores do Playwright são reavaliados a cada chamada, a remoção do card 1 do ' +
                            'DOM faz com que o antigo card 2 assuma a posição de primeiro card. ' +
                            'A asserção <code>expect(firstCard).toBeHidden()</code> reavalia o localizador, encontra o novo elemento na primeira ' +
                            'posição, constata que ele está visível e a validação da exclusão não ocorre. ',
                        p2:
                            '<strong>A lição:</strong> Esse comportamento gera um falso positivo. ' +
                            'A correção implementada foi verificar a contagem de elementos antes e depois da ação, ' +
                            'validando o estado do sistema em vez de depender ' +
                            'de uma referência de elemento cujo significado muda silenciosamente.',
                        label: 'Correção: Asserção baseada em contagem',
                    },
                    f3: {
                        title: '3. Caso 3: <strong>Uma classe CSS, duas colunas de tabela</strong>',
                        symptom: 'Violação de strict mode, com o localizador resolvendo para 2 elementos.',
                        rootCause: 'A mesma diretiva [ngClass] era compartilhada pelas colunas de preço unitário e total.',
                        fixPattern: 'Analisar a estrutura da tabela para decidir qual coluna validar.',
                        p1:
                            '<strong>O que quebrou:</strong> O teste de desconto na página de detalhe do produto utilizava ' +
                            "<code>page.locator('span.discounted')</code>, que resolvia para dois elementos. " +
                            'A leitura do HTML indicou que a classe <code>discounted</code> era ' +
                            'aplicada pela mesma condicional <code>[ngClass]</code> do Angular tanto na coluna ' +
                            'de preço unitário <em>quanto</em> na coluna de total.',
                        p2:
                            '<strong>A lição:</strong> A correção exigiu a compreensão da estrutura da tabela para definir ' +
                            'e documentar qual das duas colunas o teste precisava validar, ' +
                            'em vez de aplicar um <code>.first()</code> arbitrário.', 
                    },
                    f4: {
                        title: '4. Caso 4: <strong>Histórico de chat que nunca limpa</strong>',
                        symptom: 'Violação de strict mode, com o localizador resolvendo para 5 elementos.',
                        rootCause: 'O DOM do chat nunca é limpo, mantendo todas as mensagens anteriores montadas.',
                        fixPattern: 'Direcionar a busca para .last(), selecionando a instância mais recente.',
                        p1:
                            '<strong>O que quebrou:</strong> O botão "Voltar ao menu" do widget de chat ' +
                            'reaparece a cada etapa da conversa e o DOM mantém todas as mensagens ' +
                            'anteriores na tela. Em um fluxo de ticket de suporte, ' +
                            "<code>getByTestId('chat-action-back-to-menu')</code> resolvia para cinco botões idênticos simultaneamente. O " +
                            'comportamento era da interface do usuário, não um erro no teste.',
                        p2:
                            '<strong>A lição:</strong> A correção consistiu em utilizar <code>.last()</code> ' +
                            'para selecionar o elemento mais novo na conversa, em vez de assumir a existência de apenas um botão. ' +
                            'Os quatro casos de strict mode revelaram características diferentes da aplicação ' +
                            '(texto duplicado, CSS compartilhado, histórico de UI cumulativo, ' +
                            'deriva posicional), exigindo soluções específicas para cada um.',
                    },
                    f5: {
                        title: '5. Um Erro de Digitação, Não uma Corrida: <strong>o custo de um listener de rede manual</strong>',
                        symptom: 'Falha intermitente, onde a linha editada nem sempre é a primeira após uma nova busca.',
                        rootCause:
                            "Um erro de digitação (<code>'QUERY'</code> em vez de <code>'GET'</code>) " +
                            'ocultou o problema real. A concorrência subjacente ' +
                            'envolve o tempo entre a escrita e a atualização do índice de busca.',
                        status: 'Aberto, mitigado via retry.',
                        p1:
                            '<strong>O que quebrou, na primeira passada:</strong> A edição e nova busca de um produto no painel administrativo utilizava ' +
                            ' <code>page.waitForResponse(r => ' +
                            "r.request().method() === 'QUERY' ...)</code>. O método HTTP '<code>'QUERY'</code> " +
                            "é inválido, tratando-se de um erro de digitação para <code>'GET'</code>, " +
                            'o que impedia a resolução da promise. O rastreamento ' +
                            'manual de um listener de rede em várias buscas no mesmo teste demonstrou fragilidade.',
                        p2:
                            '<strong>O que ainda é verdade hoje:</strong> A substituição do listener manual por uma asserção de auto-espera ' +
                            'aumentou a estabilidade do teste. A falha intermitente persiste ' +
                            'em algumas execuções de CI, com a linha editada não aparecendo ' +
                            'como a primeira dentro da janela de timeout. O comportamento indica uma questão de ' +
                            'timeout, o que aponta para um timing real entre a escrita e o índice de busca ' +
                            'tempo entre a escrita e a atualização do índice de busca e não um bug no teste.',
                        p3:
                            '<strong>A lição:</strong> A espera pela resposta de rede correta é necessária, ' +
                            'mas os dados retornados precisam ser verificados contra o esperado pelo teste. ' +
                            'A instabilidade persistente após a correção da causa raiz foi documentada. ' +
                            'O retry do Playwright absorve a falha atualmente e a filtragem da linha por conteúdo em vez de posição está em avaliação.',
                        codeComment: 'falha real de uma execução real de CI, mantida aqui em vez de escondida',
                    },
                    f6: {
                        title: '6. O Produto Escondido: <strong>Estado de UI difere entre produção e CI</strong>',
                        symptom: "Timeout em getByRole('checkbox', {name:'Hammer'}) apenas no CI.",
                        rootCause: 'O build Dockerizado (Sprint 5) inicia a árvore de categorias recolhida.',
                        fixPattern: 'Expandir a categoria pai antes de verificar um filho.',
                        p1:
                            '<strong>O que quebrou:</strong> Um teste de filtro de categoria que passava no ambiente de ' +
                            'produção começou a apresentar timeout no CI após a transição para Docker. ' +
                            'A árvore de categorias na barra lateral do build local (Sprint 5) ' +
                            'inicia recolhida por padrão, ocultando o checkbox "Hammer" dentro do item pai "Hand Tools" ' +
                            'O Playwright recusa a interação com elementos ocultos e ' +
                            'consumiu o timeout de 30s aguardando a visibilidade do elemento.',
                        p2:
                            '<strong>A lição real:</strong> O método diagnóstico indicou que um timeout do Playwright ' +
                            'geralmente aponta para um estado real da aplicação (oculto, desabilitado ou fora da ' +
                            'tela) e não para um erro do framework. ' +
                            'A comparação estrutural entre os ambientes precedeu a alteração no teste. ',
                        label: 'Correção: Expandir o pai antes de verificar o filho',
                    },
                    f7: {
                        title: '7. Desvio de Relógio no TOTP: <strong>O bug mais difícil de reproduzir sob demanda</strong>',
                        symptom: 'TOTP "inválido" intermitente em códigos corretos.',
                        rootCause: 'O TOTP é baseado em janela de tempo, havia desvio entre o relógio local e o do servidor.',
                        fixPattern: 'Derivar um offset do header Date da API e gerar códigos com base nele.',
                        p1:
                            '<strong>O que quebrou:</strong> Códigos TOTP gerados com a biblioteca ' +
                            '<code>otpauth</code> (SHA1, 6 dígitos, período de 30s) a partir do próprio ' +
                            'segredo exposto do aplicativo (<code>data-test="totp-secret"</code>) falhavam a ' +
                            'na verificação de forma intermitente. Um desvio de alguns segundos ' +
                            'entre o relógio da máquina de teste e o do servidor era ' +
                            'suficiente para gerar o código na janela de 30 segundos incorreta.',
                        p2:
                            '<strong>A correção:</strong> A correção envolveu a leitura do header <code>Date</code> retornado pela ' +
                            'API no registro do usuário, o cálculo de um <code>timeOffset</code> e a geração dos ' +
                            'códigos subsequentes utilizando <code>Date.now() + timeOffset</code> em vez do relógio local. ' +
                            'A baixa frequência e a dificuldade de reprodução tornaram este um dos bugs mais custosos de identificar na suíte. ',
                        label: 'Correção: Sincronizar com o horário do servidor antes de gerar um código',
                    },
                },
                domains: {
                    d1: {
                        title: '<strong>Catálogo e Descoberta de Produtos</strong>',
                        count: '3 arquivos · 33 testes',
                        li1:
                            '<strong>Grade de visão geral:</strong> conteúdo do card (imagem, nome, preço), ' +
                            'busca com reset de filtro ativo, checkboxes de categoria e marca, seleção ' +
                            'hierárquica de categoria pai/filho, ordenação (nome/preço, ambas as direções), o ' +
                            'slider de faixa de preço (padrão $1–$100, máximo $200) acionado por arraste ' +
                            'simulado do mouse <em>e</em> entrada por seta do teclado e badges de ' +
                            'desconto/fora de estoque.',
                        li2:
                            '<strong>Detalhe do produto:</strong> seletor de quantidade limitado entre 1 e ' +
                            '999.999.999, mensagem de sucesso ao adicionar ao carrinho, botão desabilitado ' +
                            'quando fora de estoque, favoritos (adicionar / duplicar / não autorizado) e ' +
                            'produtos relacionados.',
                        li3:
                            '<strong>Aluguéis:</strong> o slider de duração (1–10 horas, acionado por teclado ' +
                            'para determinismo) e a asserção <code>total = taxa_horária × duração</code>, ' +
                            'recalculada a partir do DOM em vez de fixada.',
                    },
                    d2: {
                        title: '<strong>Fluxo de Checkout</strong>',
                        count: '4 arquivos · 24 testes',
                        li1:
                            '<strong>Carrinho:</strong> recálculo de quantidade derivado matematicamente do ' +
                            'preço unitário lido (nunca um valor esperado fixado), exclusão de item com ' +
                            'asserções baseadas em contagem (Descoberta 2), estado de carrinho vazio e a ' +
                            'matemática de badge/subtotal/total de desconto de 15% em itens com desconto.',
                        li2:
                            '<strong>Etapa de login:</strong> formulário de login como convidado e login ' +
                            'completo protegido por TOTP reproduzido de ponta a ponta durante o checkout, ' +
                            'registrar, ativar 2FA, sair, adicionar ao carrinho e logar novamente através do ' +
                            'assistente de checkout com um código TOTP ao vivo.',
                        li3:
                            '<strong>Endereço:</strong> limites de tamanho de campo contra a classe ' +
                            '<code>ng-invalid</code> do Angular, validação de campo obrigatório desabilitando ' +
                            '"Proceed", e um fluxo real de busca de CEP (NL/1011AB) usado especificamente para ' +
                            'satisfazer a validação de endereço do backend no teste de finalização de pedido.',
                        li4:
                            '<strong>Pagamento:</strong> todos os cinco métodos de pagamento e seus conjuntos ' +
                            'de campos, validação da data de expiração do cartão de crédito e uma condição ' +
                            'de corrida de UI documentada no botão "Confirm" (ver Seção 6) reproduzida ' +
                            'fielmente com dois cliques sequenciais em vez de mascarada.',
                    },
                    d3: {
                        title: '<strong>Autenticação e Segurança de Conta</strong>',
                        count: '6 arquivos · 38 testes',
                        li1:
                            '<strong>Registro e força de senha:</strong> todos os campos obrigatórios, ' +
                            'feedback em tempo real dos requisitos de senha e o indicador de força de 5 ' +
                            'níveis (Fraca → Excelente), reutilizado entre registro e troca de senha. A ' +
                            "última precisou de um <code>dispatchEvent('input')</code> manual para contornar " +
                            "um delay de <code>updateOn: 'blur'</code>.",
                        li2:
                            '<strong>Login:</strong> redirecionamento baseado em papel (cliente vs. admin), ' +
                            'credenciais inválidas, bloqueio de conta após 3 tentativas falhas (HTTP 423 + ' +
                            'mensagem), isenção de admin do bloqueio, rejeição de conta desabilitada (HTTP ' +
                            '403) e validação do popup do Google OAuth (domínio, rota de callback, dimensões ' +
                            'da janela) sem autenticar de fato contra o provedor real.',
                        li3:
                            '<strong>TOTP:</strong> ciclo de vida completo de configuração (QR code, segredo ' +
                            'manual, verificação, código inválido) mais a correção de sincronização de ' +
                            'relógio com o servidor da Descoberta 7 e a regra de negócio que nega a ' +
                            'configuração de TOTP às duas contas demo compartilhadas.',
                        li4:
                            '<strong>Perfil e troca de senha:</strong> campos editáveis vs. somente leitura, ' +
                            'atualizações bem-sucedidas com confirmação em fade-out, erros de senhas não ' +
                            'coincidentes e de verificação da senha atual e logout forçado após uma troca de ' +
                            'senha bem-sucedida.',
                    },
                    d4: {
                        title: '<strong>Personalização</strong>',
                        count: '2 arquivos · 5 testes',
                        li1:
                            '<strong>Favoritos:</strong> a lista é semeada inteiramente via API (registrar → ' +
                            'login → <code>/favorites</code>) em vez de clicar pela UI três vezes, mantendo o ' +
                            'teste focado na própria página de favoritos, o estado vazio e a remoção são ' +
                            'cobertos separadamente.',
                        li2:
                            '<strong>Navegação por categoria:</strong> confirma que a página de categoria ' +
                            'compartilha filtros de categoria/marca, ordenação e paginação com a visão geral, ' +
                            'mas documenta explicitamente que o slider de preço <em>não</em> existe ali (ver Seção 3).',
                    },
                    d5: {
                        title: '<strong>Pós-Compra e Suporte</strong>',
                        count: '3 arquivos · 19 testes',
                        li1:
                            '<strong>Faturas:</strong> faturas em PDF geradas vinculadas a pedidos reais, ' +
                            'validadas pela presença e dados identificadores em vez de conteúdo de pixel.',
                        li2:
                            '<strong>Mensagens:</strong> uma tabela paginada (assunto, mensagem truncada em ' +
                            '50 caracteres, badge de status, data, link de detalhes), ordenação cronológica de ' +
                            'respostas verificada comparando dois timestamps reais e postagem de uma resposta ' +
                            'pela UI com espera real por resposta de rede.',
                        li3:
                            '<strong>Formulário de contato:</strong> preenchimento automático e ocultação de ' +
                            'campos para usuários logados, validação de campo obrigatório para convidados, a ' +
                            'regra de mínimo de 50 caracteres na mensagem e a regra incomum de anexo de ' +
                            'arquivo (apenas <code>.txt</code>) e o arquivo precisa ter exatamente 0 KB, ' +
                            'testada com buffers em memória em vez de arquivos de fixture versionados.',
                    },
                    d6: {
                        title: '<strong>Operações Administrativas</strong>',
                        count: '1 arquivo · 9 testes',
                        li1:
                            '<strong>Dashboard:</strong> o canvas do gráfico de vendas e a tabela paginada de ' +
                            'faturas recentes.',
                        li2:
                            '<strong>Suítes CRUD completas:</strong> produtos, categorias e marcas seguem o ' +
                            'mesmo ciclo de vida adicionar → buscar → editar → buscar → excluir na UI, com ' +
                            'nomes aleatórios únicos para evitar colisões entre execuções paralelas ou ' +
                            'repetidas. Usuários são semeados via API e depois editados/excluídos pela UI.',
                        li3:
                            '<strong>Gerenciamento de pedidos:</strong> valores do dropdown de status ' +
                            '(<code>AWAITING_FULFILLMENT</code> → <code>COMPLETED</code>) e as seções de ' +
                            'detalhe de edição de pedido.',
                        li4:
                            "<strong>Habilitar/desabilitar conta:</strong> alternar a flag <code>enabled</code> " +
                            'de um usuário pelo painel admin e confirmar, em um <em>segundo contexto de ' +
                            'navegador</em> logado como esse cliente, que o login é de fato bloqueado e depois ' +
                            'restaurado, um efeito real entre sessões e não apenas um estado de checkbox na UI.',
                        li5:
                            '<strong>Relatórios:</strong> gráficos de vendas mensais/semanais e os quatro ' +
                            'painéis de detalhamento da página de estatísticas.',
                    },
                    d7: {
                        title: '<strong>Motor Conversacional e de Descontos</strong>',
                        count: '3 arquivos · 22 testes',
                        li1:
                            '<strong>Widget de chat:</strong> o menu (Buscar Produto / Pedir Produto / ' +
                            'Checkout / Suporte), busca de produto retornando até 5 cards de resultado, um ' +
                            'fluxo completo de pedido-para-carrinho com seleção de quantidade e um ' +
                            '<em>assistente de checkout inteiro reimplementado conversacionalmente</em> — ' +
                            'resumo do carrinho → endereço → pagamento → confirmação, conduzido passo a passo ' +
                            'como uma máquina de estados em que cada resposta do bot é confirmada pelo ' +
                            'conteúdo antes do próximo input ser enviado. O endpoint de fatura foi mockado via ' +
                            '<code>page.route()</code> para isolar o fluxo de chat de uma dependência não ' +
                            'relacionada de busca de CEP no backend. O cenário de carrinho vazio é um ' +
                            '<code>test.fixme</code> documentado — ele expõe uma exceção JS real ' +
                            '(<code>TypeError: reading cart_items of null</code>).',
                        li2:
                            '<strong>Desconto por geolocalização:</strong> cinco cidades × cinco faixas de ' +
                            'desconto (5%–25%), mais um caso neutro/local não suportado, tudo acionado por ' +
                            'coordenadas <code>GEO_LOCATION</code> mockadas no <code>localStorage</code> ' +
                            'injetadas via <code>page.addInitScript</code> antes da página carregar.',
                        li3:
                            '<strong>Desconto combinado:</strong> o desconto de 15% em todo o carrinho que ' +
                            'aparece apenas quando um item de aluguel e um item que não é de aluguel dividem ' +
                            'o mesmo carrinho, validado na página do carrinho <em>e</em> revalidado contra ' +
                            'uma fatura real criada via API, com o desconto removido e revertido quando a ' +
                            'condição de carrinho misto deixa de valer.',
                    },
                    d8: {
                        title: '<strong>Conformidade e Internacionalização</strong>',
                        count: '2 arquivos · 11 testes',
                        li1:
                            '<strong>i18n:</strong> detecção automática de idioma do navegador para todos os ' +
                            '6 idiomas suportados via <code>test.use({ locale })</code>, fallback para inglês ' +
                            'em locales não suportados, troca manual pelo seletor da UI e ' +
                            '<strong>persistência</strong>: um idioma escolhido manualmente precisa ' +
                            'sobreviver a um reload de página e ter prioridade sobre a detecção automática na ' +
                            'próxima visita.',
                        li2:
                            '<strong>Política de privacidade:</strong> presença de todo tópico de divulgação ' +
                            'obrigatório (Login com Google, coleta de dados, remoção automática por hora, ' +
                            'serviços de terceiros, segurança de dados, informações de contato).',
                    },
                },
            },
            engineer: {
                title: 'sobre mim',
                heading: 'Do Design ao Quality Assurance',
                p1:
                    'Minha formação é em design e comunicação visual — o que me treinou a perceber quando algo ' +
                    'parece certo, mas não é, e a questionar se uma interface realmente serve a pessoa que a usa ' +
                    'antes de perguntar se ela funciona tecnicamente. Esse instinto se aplica diretamente ao QA: ' +
                    'bugs raramente vêm anunciados por uma mensagem de erro. Na maioria das vezes são um número na ' +
                    'tela que não bate direito, um localizador que silenciosamente encontra dois elementos em vez ' +
                    'de um, ou uma variável global segurando dados que não deveria.',
                p2:
                    'Concluir o CS50 de Harvard me deu a base de ciência da computação para ir além do DOM e chegar ' +
                    'às camadas de baixo — estado de sessão, concorrência, embeddings, pipelines de CI — os lugares ' +
                    'onde uma interface bonita ainda pode esconder um backend frágil, inseguro ou pouco confiável. ' +
                    'Nos três estudos de caso desta página apliquei a atenção aos detalhes de um designer junto com ' +
                    'a paranoia de um SDET para casos extremos: uma auditoria de segurança e infraestrutura de 340 ' +
                    'pontos em uma aplicação Flask, uma suíte de avaliação de alucinação e fidelidade para uma IA ' +
                    'baseada em RAG, e uma suíte de regressão Playwright de 161 testes com pipeline de CI próprio, ' +
                    'construído do zero. Stacks diferentes, mesma disciplina de fundo — não assumir que nada ' +
                    'funciona até que um teste prove que funciona.',
            },
            footer: {
                line1: 'Portfólio de QA de <span class="highlighted">Fabio Alves</span>',
                line2: 'construído com o mesmo padrão <span class="highlighted">dos testes</span>',
            },
        },
    },
};

export default qaTranslations;
