// 사례 7개 영어 원고 — 한국어 원고(cases.ko.js)를 문장 단위로 옮겼다. reelFlow·headline 은 쇼릴과 목록이 쓴다.
const casesEn = [
  {
    "id": "status-board",
    "slug": "status-board",
    "logo": "/images/v3/status-board-screen-a.jpg",
    "status": "live",
    "title": "Status Board · Operations Ledger",
    "shortTitle": "Status Board",
    "subtitle": "Pick one counterpart and its KakaoTalk, email, and order sheets land on one calendar; the deal stage of all 352 counterparts fits on one screen",
    "meta": [
      {
        "label": "Period",
        "value": "Built 2026.10.19~10.23 (5 days), in production"
      },
      {
        "label": "Role",
        "value": "Design: ledger schema (a table that stores each record exactly once), counterpart matching rules / Build: intake API, email collector, 6 UI tabs / Verification: DB tests, production screens. I used AI coding tools; I set the scope and checked the results with tests"
      },
      {
        "label": "Repositories",
        "value": "Status Board commits: about 100 in brand-tool + about 50 in agent-company"
      }
    ],
    "background": "Conversations with counterparts are split across KakaoTalk rooms, the order@ mailbox, and Slack, and Excel order sheets arrive separately as email attachments. The Status Board summarizes these records per day and places them in date order on a per-counterpart calendar. Pick one brand, vendor, or seller, and every record exchanged with that counterpart comes together on one screen. The Communication Status tab shows where each of the 352 counterparts stands, from first contact to settlement. Records the rules could not match, and stages that are unclear, are decided by staff.",
    "stack": [
      "Next.js 16.2·React 19.2·Tailwind 4·Vitest 4",
      "Python 3.12·Pydantic v2",
      "Postgres RLS (DB rules that limit who can see each row)",
      "Gemini Flash family (via LiteLLM)"
    ],
    "scale": [
      "Communication Status: first contact 46, proposal 119, negotiation 9, contract 16, in progress 162, settlement 0 (2026-10-24)",
      "352 counterparts = 147 brands + 135 vendors + 70 sellers (2026-10-24)",
      "Roughly 100–200 records per weekday, 421 awaiting counterpart matching (2026-10-24)"
    ],
    "flow": [
      "KakaoTalk comes in 3 times a day (09:15·13:00·17:55), order@ email every 5 minutes, and Slack through a generic connector. However many times the same record arrives, the ledger keeps it once.",
      "Newsletters are filtered out by rules before any LLM call. In order-sheet tables, columns such as recipient are located and buyer names are masked. If a phrase the summary cites as evidence is not in the original text, the summary is discarded.",
      "Counterpart matching uses rules only, no LLM. It checks email thread, business registration number, KakaoTalk room, email, phone, domain, account code, and alias, in that order. If keys disagree, the record goes to Unclassified.",
      "In-progress deals are built by grouping KakaoTalk contract signals and email signals under a counterpart·target·round key. A stage is applied automatically when the rule evidence is clear; the rest go to 'awaiting review' for staff to decide.",
      "Every day at 18:05, summaries for up to 300 counterparts are rewritten in 3–6 lines. If spend passes ₩2,000 for the day or the cost ledger cannot be read, that day's batch stops."
    ],
    "diagram": {
      "src": "/images/v3/diagram-status-board-en.png",
      "alt": "Status Board architecture diagram"
    },
    "diagramCaption": "KakaoTalk·email·Slack → agent-company (masking, LLM extraction, check against original text) → idempotent intake (stored once no matter how many times it arrives) → brand-tool ledger (RLS, rule matching) → staff review",
    "screens": [
      {
        "label": "Screen A",
        "text": "Per-counterpart calendar. Pick one brand, vendor, or seller, and KakaoTalk summaries, emails, and Excel order sheets sit on a single calendar in date order. Above it are a stage bar, a combined summary (now/recent/open items), in-progress deals, and the counterpart wiki.",
        "image": "/images/v3/status-board-screen-a.jpg"
      },
      {
        "label": "Screen B",
        "text": "Communication Status. Shows counterpart counts per stage (first contact 46 to in progress 162) and 'awaiting review' proposals; staff click apply or reject.",
        "image": "/images/v3/status-board-screen-b.jpg"
      },
      {
        "label": "Screen C",
        "text": "KakaoTalk conversation and email tabs. Raw records shown as tables. The email tab also summarizes the contents of attached Excel order sheets.",
        "image": null
      },
      {
        "label": "Screen D",
        "text": "Counterpart matching. Staff attach the 421 records that could not be matched automatically to a counterpart. Records from the same room and the same thread are attached along with them, and those keys are used for later matching.",
        "image": null
      }
    ],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "All 107 summaries rejected (2026-10-23).",
        "text": "The app role had no execute permission on the DB function that stores summaries. All 107 summaries that day failed at the save step with db_error. A one-line GRANT giving execute permission on that one function fixed it."
      },
      {
        "title": "Too many 'in progress' proposals in the rehearsal (2026-10-23).",
        "text": "The cause was a rule that read any mention of words like 'shipping·inventory·sales' as a deal signal. I kept only real deal-signal words, and changed matching to strip negative phrases such as '판매중단' (sales halted) and '발주문의' (order inquiry) first."
      },
      {
        "title": "Shared chatbot shown as the contact person (2026-10-23).",
        "text": "The shared chatbot's name ended up in the contact-person field for 64 counterparts. The top 5 most active speakers in a KakaoTalk room were taken as contacts, and the chatbot was among them. Now only company email accounts (@styleseller.co.kr) count as contacts; if there is none, the contact from the account profile is used."
      }
    ],
    "highlights": [
      {
        "title": "The screen stays the same when the same record arrives again.",
        "text": "Collectors resend the same record any number of times. It is stored with a single upsert statement that updates when (source, source_ref) matches. Rows edited by staff, and rows whose content is unchanged, are left alone. When content is unchanged the trigger does not bump the sequence number or timestamp either, so the screen stays the same after a resend."
      },
      {
        "title": "The author value is never taken from the caller.",
        "text": "The intake function drops the author value the caller sends and rebuilds it as 'ingest:source'. The manual source is staff-only, so it is rejected. The 'edited by staff' flag is set by a trigger, not the app, and hidden records cannot be restored with UPDATE. The app role gets only execute permission on functions."
      },
      {
        "title": "When keys disagree, nothing is matched.",
        "text": "The matching order is fixed: thread, business registration number, KakaoTalk room, email, phone, domain, account code, alias. If a business registration number or phone points to a different counterpart than the other evidence, it is flagged as a conflict and left in Unclassified. 13 public domains such as gmail and naver are not used as evidence."
      },
      {
        "title": "Concurrent collection does not create a counterpart twice.",
        "text": "Only when creating a new counterpart, an advisory lock (a named lock shared across transactions) is taken per evidence value in sorted order, then the lookup runs again. If another transaction created the counterpart in the meantime, that one is used. Staff stage updates follow the same lock order as collection (counterpart → proposal), so there are no deadlocks."
      },
      {
        "title": "LLM output is checked against the original text.",
        "text": "A stage evidence phrase is kept only if it is a substring of the masked body. Deal terms are stricter. Every number in the value must appear in the quote, and the keywords and units for that term type must match too. A company name is used only if its normalized name appears in the evidence line."
      },
      {
        "title": "Order-sheet tables are masked by column.",
        "text": "Order sheets usually arrive as tables. Header columns such as 'recipient·orderer' are located, and values in those columns are masked only on rows with the same cell count as the header row. Product names and quantities therefore stay in the summary. A name next to a corporate marker such as '㈜' is treated as a company name and not masked."
      },
      {
        "title": "Cost is reserved before the call.",
        "text": "The balance check and the reservation are one SQL statement, so two concurrent calls cannot both pass the limit. The reserved amount is the larger of an estimate based on maximum input/output and a floor (the minimum reservation). If settlement fails, later calls stop. A late retried summary fails the date comparison and cannot overwrite a newer summary."
      },
      {
        "title": "The mail cursor moves only after the ledger has received everything.",
        "text": "Emails go into a local queue first and are then sent to the ledger. The Gmail history cursor moves only when every delivery in that round succeeds. If the cursor expires, the gap is backfilled by listing from the last successful time. An email that fails twice is quarantined and raises an alert."
      }
    ],
    "status3": [
      "In production. The 6 tabs, KakaoTalk·email·Slack intake, and the 18:05 summary batch are running (checked on the production screens on 2026-10-24).",
      "Python, TS, and SQL share one golden file for name and phone normalization. CI runs the tests under `__tests__/content` on PGlite as the real app role; UI tests run outside CI.",
      "Limits: I have not measured the share of 'awaiting review' proposals that staff applied, i.e. proposal accuracy. The server does not recheck evidence phrases; it trusts the checks on the intake side.",
      "If I did it again: I would ship a test that calls each new DB function as the app role. The 107 rejected summaries on 10-23 would have been caught before deploy by that one test."
    ],
    "decisions": [
      "Counterpart matching uses an ordered rule list instead of an LLM. When keys disagree, it does not match automatically and hands the record to staff.",
      "Automatic stage updates are turned on one at a time through a (source, stage) rule table. The first one enabled is KakaoTalk shipment·order·group buy → 'in progress'. LLM self-reported confidence is not calibrated, so it is not used.",
      "A stage that staff rejected is never proposed again. So the review queue holds only proposals nobody has judged yet."
    ],
    "reelFlow": [
      {
        "label": "KakaoTalk · email · Slack",
        "note": ""
      },
      {
        "label": "Masking · LLM extraction",
        "note": "agent-company"
      },
      {
        "label": "Staff confirms",
        "note": ""
      }
    ],
    "headline": {
      "value": "352",
      "label": "counterparts on the board"
    }
  },
  {
    "id": "vendor-cs",
    "slug": "vendor-cs",
    "logo": "/images/v2/logo10.png",
    "status": "live",
    "title": "Vendor CS Agent",
    "shortTitle": "Vendor CS Agent",
    "subtitle": "A KakaoTalk chatbot that answers only tagged questions, never hands off, and rewrites any number or brand that does not match the evidence",
    "meta": [
      {
        "label": "Period",
        "value": "2026.06–present"
      },
      {
        "label": "Role",
        "value": "Design: intake path, counterpart gate, evidence-matching rules / Implementation: server agent, send and delivery confirmation in a kakaocli fork (a CLI that reads and sends via the Mac KakaoTalk DB), Windows collector / Operations: incident response, the 09-02 switch in answering mode. I used AI coding tools; I set the scope and checked the results with tests and measurements"
      },
      {
        "label": "Repositories",
        "value": "agent-company (vendor agent), kakaocli fork, CS Copilot extension and local sender"
      }
    ],
    "background": "KakaoTalk has no official API, so a server alone cannot read or send counterpart conversations. Staff PCs collect the conversations and upload them to the server, and replies also go out from staff Macs. The server agent writes answers by searching per-counterpart records and the LightRAG knowledge hub (graph RAG over entities and relations, 13 workspaces). Since 2026-09-02 it no longer asks follow-up questions and answers only tagged questions, with no handoff. In exchange, it checks amounts, percentages, and brands against the evidence, and if they do not match it searches again and rewrites.",
    "stack": [
      "macOS kakaocli fork (Swift)",
      "Windows read-only memory collector (Python)",
      "Python 3.12",
      "Gemini Flash family (via LiteLLM)",
      "LightRAG 1.5.6",
      "Google Sheets and Drive"
    ],
    "scale": [
      "Vendor agent code, tests, and config: 61K lines total, 600 commits, 107 test files (2026-09-23)",
      "CS Copilot extension and local sender: 631 commits, 20,596 lines, 56 tests (2026-09-23)",
      "Tests: counterpart gate 20, evidence judgment 16, liveness markers 30, Mac Swift 34, Windows Python 72"
    ],
    "flow": [
      "On Mac, kakaocli reads only what comes after the last logId in the KakaoTalk DB. On Windows, a collector that only reads memory uploads it. The position advances only after the server answers with 2xx.",
      "The server drops the same message if it arrives again within 15 seconds. It stores records in per-counterpart ledgers, Sheets, and Drive, and twice a day (09:30, 18:10) compiles them into a wiki that goes into the knowledge hub.",
      "The counterpart ID or name in the room name is checked against the brand-tool list of counterparts to serve. If no counterpart is found on the list, it does not answer.",
      "It accepts only questions tagged @스타일셀러_AI. The regex only detects the tag; the model does the search and writes the answer. Other counterparts' names are masked as [다른 벤더].",
      "Amounts, percentages, and brands in the draft are checked against the evidence, and on a mismatch it searches again and rewrites. The reply is sent from a staff Mac, and delivery is confirmed by whether the KakaoTalk DB count went up."
    ],
    "diagram": {
      "src": "/images/v3/diagram-vendor-cs-en.png",
      "alt": "Vendor CS agent architecture diagram"
    },
    "diagramCaption": "Staff PC intake → server ledger and wiki → knowledge hub → answer drafted for tagged question → evidence check and rewrite → Mac send and delivery confirmation",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Rules hijacked the judgment (until 2026-08-30).",
        "text": "Some messages were silently blocked without any LLM judgment. The regex meant as a trigger was also doing the blocking. I cut the regex down to tag detection only and moved the decision on whether to answer to the model."
      },
      {
        "title": "Sends never finished (2026-08-17–18).",
        "text": "On macOS 15, when the KakaoTalk window was in the background, Accessibility (AX) calls ignored their timeout and hung. 31 of 147 sends (21%) ended as permanent failures. I moved the calls to a separate thread and put a 3-second deadline on them with a semaphore (past that, the wait is cut off). Since 09-08 it also re-checks delivery after sending."
      },
      {
        "title": "Flood of past conversations (2026-09-16).",
        "text": "Three Windows PCs uploaded 2,500 records in 50 minutes, the Sheets API was blocked with 429, and rows for the 2 people installed later stayed empty for over an hour. An old collector build had uploaded entire past conversations. I made the server drop records older than a cutoff date and answer 200. Answering with 5xx makes the collector upload the same records again."
      }
    ],
    "highlights": [
      {
        "title": "A similar name does not decide the counterpart.",
        "text": "The '(2670)' at the start of a room name is read as the ID. If the name part points better to a different vendor, at jamo similarity 0.80 or higher, it is treated as an ID typo and blocked. Without an ID, only a single name that is an exact match or a containment match is accepted. Sharing just a common suffix already scored 0.81–0.88, so I dropped fuzzy matching."
      },
      {
        "title": "One message came in 51 times.",
        "text": "kakaocli resends the latest message of an unread room every 2 seconds. When I counted, it was 51 times for 1 message, 170–200 per minute. A (room, message, unread count, sent by me) key drops resends within 15 seconds. Because the unread count is in the key, the signal from closing and reopening a room still gets through."
      },
      {
        "title": "Numbers and brands are checked in code.",
        "text": "Amounts and percentages in the draft are normalized ('3만원' is 30000원). Values not in the retrieved evidence, and words one character off from an evidence brand, are flagged as violations. If the LLM judgment fails or is ambiguous, it counts as no evidence. When a violation is found, it searches again with the reason attached and rewrites."
      },
      {
        "title": "'Sent' is written only when it is true.",
        "text": "If the send API was not called in that turn, completed-action sentences like '제안서 보내드렸습니다' (\"I've sent the proposal\") are removed. When a retry arrives with the same idempotency key, it checks the actual queue state. Items in progress or already sent are not re-queued; only failed ones are retried. If the state is unknown, it returns an error instead of success."
      },
      {
        "title": "Other counterparts' cases are masked.",
        "text": "If a vendor name other than the current counterpart appears in search results, it is replaced with [다른 벤더], and the model is told that the replacement happened. All 11 Spark tools that query company-wide data are blocked in external rooms. The vendor name passed to the product recommendation lookup is set by the server, not the model."
      },
      {
        "title": "Delivery is counted from the KakaoTalk DB.",
        "text": "A baseline count is taken before sending. After sending, it counts how many text messages and photos were added in the local DB and resends only what is missing. Photos get an extra 60 seconds. In a 70-person room, the same photo arriving twice is worse than one photo missing. Completion is reported to the server only after this check."
      },
      {
        "title": "The checkpoint moves only after 2xx.",
        "text": "The Windows collector only reads KakaoTalk process memory with VM_READ access; it does no injection or hooking. The uploader moves the offset only after receiving 2xx. 422 and 413 are skipped; on 5xx or 429 it stops without committing and uploads again on the next run."
      },
      {
        "title": "The processing path leaves its own liveness markers.",
        "text": "It leaves one marker when a tagged message is accepted and one when it reaches a result. If no result marker appears past a business-hours threshold, the monitor catches it. The earlier approach, where the monitor guessed from outside that 'no draft means it stalled,' was removed in review. This path has 30 tests."
      }
    ],
    "status3": [
      "Since 2026.06, intake, ledger and wiki compilation, and answers to tagged questions have been running. Replies that staff send directly in a room are learned right away, and older answers to the same question are marked as superseded by the new one and demoted in search.",
      "Measured: the resend was 51 requests for 1 real message, and during the AX hang 31 of 147 sends failed. Answer accuracy and rewrite rate after the 09-02 switch were not measured.",
      "Vendor and influencer CS calls are excluded from the company daily cost cap. The Windows collector has no auto-updater, so new builds are deployed by reinstalling.",
      "If I did it again: I would put auto-update and the cutoff date into the first build of the Windows collector. The 09-16 flood of past conversations came from an old collector build, and there was no way to fix it except reinstalling."
    ],
    "decisions": [
      "On 2026-09-02 I turned off follow-up questions and changed it to answer only tagged questions, with no handoff. In exchange, number and brand checks are done in code, not left to the LLM. The old handoff branch stays in the code, guarded by tests.",
      "The regex handles only tag detection, and judgment went to the model. The approach where the regex also did the blocking was removed on 2026-08-30.",
      "I took fuzzy matching out of counterpart checks. Not answering is better than answering in someone else's room because a name looked similar."
    ],
    "reelFlow": [
      {
        "label": "Staff-PC collection",
        "note": ""
      },
      {
        "label": "Knowledge hub search",
        "note": ""
      },
      {
        "label": "Mac send · delivery check",
        "note": ""
      }
    ],
    "headline": {
      "value": "107",
      "label": "test files"
    }
  },
  {
    "id": "ss-worktool",
    "slug": "ss-worktool",
    "logo": "/images/logo7.png",
    "status": "live",
    "title": "Internal Work Tool · Pricing, Matching, Personalized KakaoTalk",
    "shortTitle": "Internal Work Tool",
    "subtitle": "Code computes the amounts; the LLM only returns candidates and the fields to change",
    "meta": [
      {
        "label": "Period",
        "value": "Late 2026.03 – present"
      },
      {
        "label": "Role",
        "value": "Design: pricing calculation structure, rules for merging match candidates, send-approval criteria / Implementation: pricing code, catalog extraction, matching, send automation, PC worker / Verification & operations: sheet-comparison tests, running sends and workers (seller recommendation logic is a colleague's CRM)"
      },
      {
        "label": "Repositories",
        "value": "brand-tool, agent-company (staff PC worker)"
      }
    ],
    "background": "Pricing lived in Google Sheets formulas, and every proposal was reconciled by hand. When I moved those formulas into code, I added tests that compare each field against the sheet values for real products. In catalog product extraction and sales partner matching, the LLM only produces candidates. Registering and reviewing them is the staff's job. For personalized KakaoTalk, a CRM built by a colleague decides each seller's recommendations; I built the send automation that takes those targets and sends.",
    "stack": [
      "Next.js 16.2·React 19.2·Tailwind 4·Vitest 4",
      "Postgres+PostgREST (a REST server that exposes tables directly)",
      "Gemini Flash family (via LiteLLM)",
      "Knowledge hub RAG search (finds material and attaches it to the answer)",
      "kakaocli",
      "Staff PC worker"
    ],
    "scale": [
      "Personalized KakaoTalk sent to 261 people in one day (2026-09-22)",
      "43 pricing test cases, some compared field by field against sheet values for real products",
      "Seller-finder worker on 9 staff PCs (2026-09-18)"
    ],
    "flow": [
      "Pricing: I ported the sheet formulas to code, down to the rounding units. When an edit request comes in, the LLM only emits a JSON of input values to change, and code recomputes the amounts.",
      "Catalog: the LLM extracts product candidates from PDFs, images, Excel files, and URLs. They are registered only after staff confirm them.",
      "Matching: rule-score candidates and RAG candidates are merged, and the LLM scores them 0–10 in batches of 30. Staff see only those scoring 5 or higher, and anyone pitched in the same category within 3 days is excluded.",
      "Personalized KakaoTalk: operators send, schedule, and pause from the UI. Sends to 500 or more people go to an approval queue, and scheduled sends go out a little at a time, every minute, from the server.",
      "Seller finder: the staff PC worker runs one PC per account, within a daily action cap. I did not include any auto-DM code."
    ],
    "diagram": {
      "src": "/images/v3/diagram-ss-worktool-en.png",
      "alt": "Internal work tool architecture diagram"
    },
    "diagramCaption": "Sheet formulas→code calculation · Catalog & partner pool→LLM candidates→staff confirmation · CRM targets→server assembly→send / approval queue",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Missing match candidates (2026-07-15).",
        "text": "In 3 of 6 chunks (the batches sent to the LLM separately), the LLM ended its response before judging all candidates. Since 07-16, candidates are collected as a union and then split for querying, and since 08-07 only the missing candidates are re-queried, up to 3 times. The count that still goes unjudged is shown separately in the UI."
      },
      {
        "title": "Shared worker key (2026-09-10).",
        "text": "Every staff PC worker was sharing a single key. I changed it so each PC gets its own key through a 30-minute one-time install token. The server stores only the key's sha256, and comparison uses timingSafeEqual."
      },
      {
        "title": "Six runs cancelled at once (2026-09-20).",
        "text": "When the server came back after being down for two days, 6 in-progress runs were cancelled at once. The 'worker not seen for 3 minutes' rule read the server gap as workers dropping out. If the interval between cleanup runs exceeds 2 minutes, it is now treated as a server gap and the reference time is reset."
      }
    ],
    "highlights": [
      {
        "title": "I defined which fields the LLM may change.",
        "text": "If the LLM back-calculates a request like \"set seller earnings to 1500\", other amounts shift too. So the 6 computed values, such as supply price and earnings, are blocked from the edit list. For such requests, it only points to the input values that need to change. If asked to change only the margin rate, it does not return the sale price."
      },
      {
        "title": "I ported the sheet formulas down to the rounding units.",
        "text": "Partner supply price rounds up to the nearest 10 won, and the payment fee is 3.96%. I added tests that compare each field for 2 real products in the sheet (BAWANG at 30,190 won, among others). The tests also check two properties: changing the split ratio leaves total profit unchanged, and the two shares always sum to total profit."
      },
      {
        "title": "It looks for the original photo inside the PDF first.",
        "text": "Pages go to the LLM one at a time, and it returns photo coordinates. If those coordinates overlap an original image embedded in the PDF with IoU (the ratio of the overlapping area of two boxes) above 0.5, the original is used. Backgrounds covering more than 80% of the page are dropped from the candidates, and the page is cropped only when no matching original exists. For products that appear on several pages, empty price fields are filled from each other."
      },
      {
        "title": "Excel still yields results when the LLM fails.",
        "text": "If LLM parsing returns 0 items, the UI does not show an empty screen; a rule-based parser re-reads the same file. Images inside the file are attached to products in order. Icons under 750 bytes are not counted as product photos and are discarded."
      },
      {
        "title": "RAG can only add candidates, not create new ones.",
        "text": "Rule scores are assigned by category, group-buy history, product requests, and proposals, in that order, and the results of a 4-sentence RAG query are added as a union. IDs returned by RAG are accepted only if they are in the existing partner pool. This logic used to live in n8n; I moved it into code so it could be tested with vitest."
      },
      {
        "title": "Automatic sends and UI sends use the same rules.",
        "text": "The server assembler loads the same product-selection and template modules as the UI, so the same person never gets different products. A CRM lookup failure and 0 results are handled separately. Only on 0 results does it fill in popular products. The new-seller card is built only once. On 09-22, when a card was built for each person, the renderer threw 980 500 errors."
      },
      {
        "title": "Scheduled sends go out a little every minute, without overlapping.",
        "text": "Per tick, it assembles up to 3 targets that get personalized recommendations and up to 30 without them. If 5 or more queued items have not gone out, that tick is skipped. Once the send window passes, nothing new starts, so sends do not pile up at night. To keep ticks from overlapping, each schedule has a lock row, and it can only be released with the token left when it was acquired."
      },
      {
        "title": "One account runs on only one PC.",
        "text": "Checking the install token and marking it used are combined into a single conditional UPDATE, so two PCs cannot register with the same token at the same time. If the same Instagram account is on two PCs, the one that logged in more recently wins. The server's job-assignment function follows the same rule. The daily action volume is redrawn within a range every morning."
      }
    ],
    "status3": [
      "In operation. Personalized KakaoTalk is sent from the UI (261 people on 2026-09-22), and scheduled sends go out from the server every minute. Per-slot on/off values live in the DB.",
      "Judgment call: after a server gap, job cancellation waits 3 more minutes. I judged that being 3 minutes late is cheaper than cancelling by mistake.",
      "Limits: brand-tool CI runs only some of the tests. I have not measured how well match scores agree with what staff actually pick.",
      "If I did it again: I would make CI run the full test suite and make the 43 pricing test cases a deploy gate."
    ],
    "decisions": [
      "Amounts are not left to the LLM. Code ported from the sheet computes them, and the LLM only returns input values to change.",
      "RAG search is used only to widen the candidate set. Companies outside the existing partner pool cannot get in.",
      "Sends to 500 or more people are not sent immediately; they wait in the approval queue."
    ],
    "reelFlow": [
      {
        "label": "Catalog · partner pool",
        "note": ""
      },
      {
        "label": "LLM candidates",
        "note": ""
      },
      {
        "label": "Staff confirms",
        "note": ""
      }
    ],
    "headline": {
      "value": "43",
      "label": "price-calculation test cases"
    }
  },
  {
    "id": "email-agent",
    "slug": "email-agent",
    "logo": "/images/logo8.png",
    "status": "live",
    "title": "LightRAG Knowledge Hub · Email Agent",
    "shortTitle": "Knowledge Hub · Email Agent",
    "subtitle": "Four agents pull evidence from one knowledge hub, and only evidence-backed email drafts reach staff drafts folders",
    "meta": [
      {
        "label": "Period",
        "value": "2026.03.31~present"
      },
      {
        "label": "Role",
        "value": "Design: workspace registry, search-planning and evidence-judgment stages, draft verification order / Implementation: email-agent server, checkers, sent-mail learning cursor / Operations: drafts-folder rollout, incident analysis and recovery"
      },
      {
        "label": "Repositories",
        "value": "email-agent"
      }
    ],
    "background": "Vendor CS, influencer CS, Spark, and sales partner matching share one LightRAG knowledge hub (13 workspaces). It is a RAG store: for each question it finds material first and answers with it attached. Every workspace carries a description, owner, channel, and sensitivity level, and a write to an unknown workspace fails immediately. For inquiries to the shared mailbox, it puts an evidence-backed reply draft in the owner's Gmail drafts folder. Staff do the sending.",
    "stack": [
      "Python 3.12·FastAPI·Pydantic v2",
      "LightRAG 1.5.6 (Postgres/pgvector + Neo4j 5)",
      "RAG-Anything/MinerU",
      "FlashRank (lightweight rerank model)",
      "Gemini Flash family (via LiteLLM)",
      "Gmail",
      "pytest"
    ],
    "scale": [
      "~1,470 commits · ~47,000 lines of product code · ~33,600 lines of tests (10-24)",
      "27 routers · ~1,750 test functions · 13 workspaces (10-24)",
      "Search eval set of 18 cases (query, expected workspace, required evidence, forbidden claims)"
    ],
    "flow": [
      "An LLM planner (temperature 0) reads the workspace descriptions and data catalog and builds up to 12 queries. A plan that fails validation is discarded and the rule router takes over.",
      "Code pins the search mode (mix, which uses vector and graph together) at each call site. Agent searches use top_k (number of results fetched) 8, and identical queries are cached for 60 seconds.",
      "Evidence is judged by rules. Live values such as price, stock, and settlement are forbidden claims. Refund confirmation, contracts, and bulk sends get a human approval flag, and only the missing evidence items are searched once more.",
      "Results are grouped by topic using rerank (the step that re-orders results) scores. Within a group, official corrections and the newest documents go first, and output alternates one result per group.",
      "A checker and an LLM verifier compare up to 6 claims in the email draft against the evidence. If a claim has no evidence the draft is rewritten, and if the problem remains the draft is discarded."
    ],
    "diagram": {
      "src": "/images/v3/diagram-email-agent-en.png",
      "alt": "Architecture diagram of the LightRAG knowledge hub and email agent"
    },
    "diagramCaption": "Sent-mail facts · KakaoTalk wiki · PDFs → knowledge hub (entities · relations) → LLM planner → search · evidence judgment → drafts · answers",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Missing rerank (2026-06-19~07-23).",
        "text": "On 06-18 we switched to agentic RAG (the LLM plans the search). From the next day, the CEO email draft edit rate (share of drafts edited before sending) rose from 37% to 82%. Tracing back through the commit history showed the rerank step had been dropped in the switch. I restored it on 07-23."
      },
      {
        "title": "Search overload (07-10, 08-12).",
        "text": "The influencer CS bot took the whole shared connection pool, so even matching searches returned 500 (07-10). top_k 40 searches triggered Neo4j overload warnings (08-12 analysis). I split the connection pool per workspace (kakao_cs 20, etc.) and capped agent searches at top_k 8."
      },
      {
        "title": "Silent graph outage (2026-10-04).",
        "text": "When Neo4j stopped, the container still looked healthy. Now /readyz sends RETURN 1 to Neo4j with a 2.5-second limit and reports ok or fail. This failure alone does not return 503, so it does not cause a restart loop. Search answers with 503 and Retry-After 30 after 2 attempts."
      }
    ],
    "highlights": [
      {
        "title": "The server will not start if workspace names drift.",
        "text": "If each agent calls a workspace by a different name, writes can land in the wrong store. The 13 canonical names are fixed as a Literal type, and ~50 aliases each resolve to one store. If a missing entry or store mismatch shows up at module import, startup halts with a RuntimeError."
      },
      {
        "title": "An LLM search plan is used only after it passes validation.",
        "text": "Plans are checked with Pydantic. Live DB lookups are allowed only for registered (project, table) pairs, GET only, up to 500 rows. If any one of the call, the parse, or the allowlist check fails, it falls back to the rule router. The reason is logged as `fallback:<exception name>`."
      },
      {
        "title": "If rerank fails, two more stages stand in.",
        "text": "Documents are cut to 20, then the LLM reranker runs first. If it fails, FlashRank runs; if that fails too, the original order is scored, so results always come back. I lowered search-stage concurrency to 3. That cut concurrent Neo4j writes in the merge stage from 8 to 6 per document."
      },
      {
        "title": "13 draft checkers, each owning one error pattern.",
        "text": "Patterns include reversing the direction of a request, citing a previous email that never existed, re-asking a confirmed condition, and writing a proposed price as if it were final. Each checker includes reproduction cases from real emails of 08-21~08-23. They started as regexes, but false positives kept coming, so judgment moved to LLM checkers."
      },
      {
        "title": "A fix that introduces a new falsehood is rejected.",
        "text": "Comparing only the sum of violation scores lets a 2-point factual violation pass as the price of fixing a 10-point forbidden word. So if a rewritten draft has a factual violation that was not there before, the rewrite is discarded even if it fixed other violations. Violations that remain after rewriting are logged as \"Draft rejected\" by type, and the draft is dropped."
      },
      {
        "title": "The evidence bundle is sent once.",
        "text": "Each time 6 claims were verified, the evidence bundle of up to 150,000 characters was being resent. The bundle is now cached for 5 minutes under a sha256 key and reused. If the cache fails it falls back to the original path, so verdicts do not change."
      },
      {
        "title": "The sent-mail cursor accounts for Gmail lag.",
        "text": "At rollout, 48 of 1,943 sent emails were missed by learning. Now it reads in 10-minute windows and saves the cursor after each window. Because the search index picks up mail late, the cursor stays 180 seconds behind now, and window boundaries overlap by 90 seconds. For a window with more than 500 emails, the cursor does not advance."
      },
      {
        "title": "The server decides the scope of facts staff correct.",
        "text": "Server rules decide whether a corrected fact applies company-wide or to a single deal. A single-deal fact is never widened to the whole partner. Results only accumulate in an append-only observation log, running in shadow mode: not used for drafts or search."
      }
    ],
    "status3": [
      "Reply drafts go no further than the owner's Gmail drafts folder. Sending is up to staff, and since 2026-08-18 only images that passed pytest are deployed.",
      "Attachment extraction runs in a `python -I` child process with a 20-second limit and at most 2 at once. A chunk that fails 3 times is skipped from the next ingest on.",
      "Limits: the 18 search eval cases check only workspace selection. Search hit rate, evidence match, and the effect after restoring rerank have not been measured.",
      "If I did it again: I would add evidence-match scoring to the eval set first. That would have caught the missing rerank before the edit rate climbed to 82%."
    ],
    "decisions": [
      "The LLM planner decides where to search; code decides the search mode. I did not let agents pick the mode.",
      "The only source of facts is email staff actually sent. AI drafts are never fed back into the knowledge hub.",
      "Facts corrected by people are not used right away; they go to the observation log first so the scope judgment can be checked."
    ],
    "reelFlow": [
      {
        "label": "Sent mail · chat wiki · PDFs",
        "note": ""
      },
      {
        "label": "LLM planner",
        "note": ""
      },
      {
        "label": "Drafts · answers",
        "note": ""
      }
    ],
    "headline": {
      "value": "13",
      "label": "knowledge workspaces"
    }
  },
  {
    "id": "agent-platform",
    "slug": "agent-platform",
    "logo": "/images/logo6.png",
    "status": "live",
    "title": "Agent Platform · Spark",
    "shortTitle": "Agent Platform · Spark",
    "subtitle": "No matter who asks, work starts as a work order from the CEO agent, and the server controls delegation and tool execution",
    "meta": [
      {
        "label": "Period",
        "value": "2026.05–present (kickoff 05-17, Spark·Work OS design 07-18~19)"
      },
      {
        "label": "Role",
        "value": "Design: work order, delegation guards, tool gate structure. Implementation: Spark SQL, single-use approvals, LiteLLM spend cap, Jev (a router that shortlists skill candidates) integration. Verification and operations: writing eval sets and VM deployment. I used AI coding tools; I set the scope and checked the results myself"
      },
      {
        "label": "Repositories",
        "value": "agent-company (Paperclip fork), agent-skills, services/*"
      }
    ],
    "background": "An internal platform where agents hand issues to each other to get work done. I forked Paperclip (an open-source agent issue tracker) and attached company features as HTTP services under services/ instead of putting them in the core. The only exceptions are Work OS (an app for work status, approvals, and run history) and Spark. Staff use Spark to query 4 business DBs read-only, and hand work to the CEO agent. Long delegation chains change the request, and a single tool call can lead to spending money or external exposure. So the controls live in server code, not in prompts.",
    "stack": [
      "Paperclip fork (Express 5, Drizzle, PostgreSQL)",
      "MCP SDK 1.29",
      "Hermes (agent execution runtime)",
      "Python 3.12 and FastAPI",
      "LiteLLM",
      "Redis",
      "Langfuse 4.50",
      "Gemini Flash family (via LiteLLM)",
      "Jev router"
    ],
    "scale": [
      "About 5,000 of my own commits (excluding merges and upstream), about 2,200 test files (2026-10-24)",
      "109 shared skills, 66 trigger eval files (1,282 sentences), 67 tool manifests",
      "Jev rollout at 100% (content, Spark, Hermes, 2026-10-24)"
    ],
    "flow": [
      "Requests from Spark, Slack, and the brand tool all go to the CEO agent. Only structured brand-tool requests go straight to the content orchestrator, and they still leave a work order record.",
      "The CEO writes work order v1. It holds the original text as an attachment with its sha256, the goal, completion criteria, constraints, and whether approval is required.",
      "A Hermes dispatcher reporting directly to the CEO assigns it to one of at most 10 department heads. The server caps delegation depth at 2 and delegations per work order at 5, and blocks A→B→A bounce-backs. Turning it off falls back to direct delegation by the CEO.",
      "Workers pick from the 109 shared skills themselves and open the skill body. Jev shortlists 12 with BM25 (a keyword search ranking formula), then passes the top 3 as hints only. If it fails, work continues without hints.",
      "Tools run through a 6-stage gate and human approval. Publishing goes through the Publisher gateway (a single service dedicated to publishing). The default is manual, and the DB enforces one post per account per day."
    ],
    "diagram": {
      "src": "/images/v3/diagram-agent-platform-en.png",
      "alt": "Agent Platform·Spark architecture diagram"
    },
    "diagramCaption": "Request → CEO work order → Hermes dispatcher → department heads·workers (Jev hints) → tool gate·human approval → Publisher; every LLM call goes through LiteLLM",
    "screens": [
      {
        "label": "Screen:",
        "text": "A Spark answer. Question titles and counterpart names are masked, and each answer carries its source tool (summarize_groupbuys)",
        "image": "/images/v3/spark-screen.png"
      }
    ],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Spark shut down entirely (2026-10-24).",
        "text": "A new Spark tool was missing its DB registration row, so the boot check failed and every Spark call was rejected. I built it to block when the check fails, and it did exactly that. After recovering with a restart, I added a rule that every tool's registration row ships as a migration, plus a regression test."
      },
      {
        "title": "Reclaiming a job mid-render (2026-10-24, #627).",
        "text": "The server reaper treated a video job running past 5 minutes as stalled and reclaimed it, and the result that arrived 7 min 40 s later was rejected with 409. I made the job send a heartbeat every 120 seconds and stop once the issue deadline passes. Jobs that are really stuck still get reclaimed. In production I confirmed heartbeats received (200) and 0 reclaims."
      },
      {
        "title": "Jev call path blocked (2026-10-23).",
        "text": "The existing Jev call path was blocked. I added an adapter that only matches the response format and sent calls to a lightweight model. The code in the 3 routers stayed the same. Past the free quota, it does not fall over to paid; it proceeds without hints."
      }
    ],
    "highlights": [
      {
        "title": "The work order's original text is locked with a hash.",
        "text": "Each delegation step changes the wording of the request. The original is NFC-normalized, line endings are normalized, and it is locked together with its sha256. The server overwrites any hash the client sends. I followed an external benchmark that found fewer supervisor errors when the original is passed along instead of an intermediate summary."
      },
      {
        "title": "The server breaks delegation loops.",
        "text": "Plugins can only observe after an issue is created, so I changed the server core. Depth 2, 5 per work order, no A→B→A. Depth is counted by walking up the actual parent issues, not read from a column whose value can be changed. A 6th delegation and forged depth are rejected in tests."
      },
      {
        "title": "Jev gives hints; it does not choose.",
        "text": "It shortlists 12 with BM25, compares the top 3, and inserts them as hints. The worker makes the choice. On failure, timeout, or an open circuit breaker (300 seconds after 2 failures), the whole hint block is dropped. Rollout targets are split by the first 8 characters of a sha256."
      },
      {
        "title": "An approval is used exactly once.",
        "text": "The approval row is locked with FOR UPDATE, and a partial unique index blocks it a second time. The approval is consumed even if execution fails. The idempotency key uses ON CONFLICT DO NOTHING followed by a re-read, so there is no race. A test confirmed 1 execution for 10 concurrent requests."
      },
      {
        "title": "Write approvals sign the preview.",
        "text": "Input hash, preview hash, requester, run ID, and expiry are bundled as canonical JSON and signed with HMAC-SHA256. Write access to the DB is not enough to pass without the key. The key contains no timestamp, so model retries do not multiply approvals."
      },
      {
        "title": "Spark SQL opens a new connection per query.",
        "text": "A read-only role alone was not enough. One set_config call lifts the timeout and read-only mode, and a reused connection hands that state to the next person. After filtering 23 dangerous functions, semicolons, and writing CTEs, it opens 1 connection and closes it when done."
      },
      {
        "title": "Expensive queries are rejected before they run.",
        "text": "If the EXPLAIN cost exceeds 1,000,000, the query does not run. The 10-second limit is set in two places: the DB setting and a socket close in the app. Results are cut at 500 rows or 100KB. The role has BYPASSRLS so RLS cannot silently empty results, and the audit log keeps only the SQL hash."
      },
      {
        "title": "Exceeding the paid cap returns 403, not 429.",
        "text": "OpenAI-family SDKs retry 429 and 5xx on their own. So once spend passes 30,000 KRW a day, it returns 403 with x-should-retry: false. The ledger is a Redis key per KST date. Service keys can call only the inference path, and overlapping keys are discarded."
      }
    ],
    "status3": [
      "In production. The company-wide tool execution switch is off by default, and each tool is turned on separately. user_id is sent to Langfuse as an HMAC pseudonym.",
      "Evaluation (with the model in use at measurement time): on 69 questions with known answers, Jev candidate recall (share of cases where the answer is among the candidates) is 85.5% at top 1 and 91.3% at top 3 (2026-10-24). Median latency is about 1.09 seconds.",
      "Limits: evals run manually, not in CI, and the Spark eval has only 8 cases with reference SQL. I did not measure whether Jev hints actually changed task outcomes.",
      "If I did it again: I would check manifests against tool registration rows in CI. The 10-24 outage only surfaced at boot, but it could have been caught before merge."
    ],
    "decisions": [
      "I chose a full index over per-role skill bundles. On a 57-case selection set both scored the same accuracy, 0.947 (p=1.0). But the bundle approach missed skills that only get used when called by name. The cost difference over 66 cases was 27 KRW.",
      "The dispatcher assigns work; the worker picks the skill. I did not make Jev the selector, because work must not stop when Jev stops.",
      "Controls sit where they still hold if the model ignores them. The loop guard, single-use approval, and paid cap all live in the server and DB."
    ],
    "reelFlow": [
      {
        "label": "Request",
        "note": ""
      },
      {
        "label": "Hermes dispatcher",
        "note": ""
      },
      {
        "label": "Publisher",
        "note": ""
      }
    ],
    "headline": {
      "value": "109",
      "label": "shared skills"
    }
  },
  {
    "id": "content-autopilot",
    "slug": "content-autopilot",
    "logo": "/images/v3/diagram-content-autopilot.png",
    "status": "staged",
    "title": "Content Autopilot",
    "shortTitle": "Content Autopilot",
    "subtitle": "From a Reels request to a 9:16 MP4 render and approval, all in the operator's screen. Live SNS posting is simulated",
    "meta": [
      {
        "label": "Period",
        "value": "2026.10.03–present"
      },
      {
        "label": "Role",
        "value": "Design: the stage state machine and posting defaults. Implementation: the orchestrator, the publish gate and DB slots, the QA gate. Verification: a production canary (running a single item first as a trial) and restart-scenario tests. I used AI coding tools; I set the scope and checked the results myself"
      },
      {
        "label": "Repositories",
        "value": "content-orchestrator, hermes-content-agent, video-studio, brand-tool(/sscrew/contents)"
      }
    ],
    "background": "Staff request a Reel in the work tool at /sscrew/contents, review the preview, approve it, and schedule the release. Generation costs money, and posting means public exposure. So every default is set to 'don't do it'. Posting is manual, recurring automations run as dry-run (they only simulate execution), and paid generation is off. Code drives the stage progression.",
    "stack": [
      "Paperclip sub-issues",
      "content-orchestrator (state machine with no LLM)",
      "Hermes and the Gemini Flash family (via LiteLLM)",
      "image-service",
      "TTS",
      "video-studio",
      "HyperFrames (a tool that renders video from HTML)",
      "ffprobe",
      "Google Drive",
      "Blotato (scheduled SNS posting service)",
      "Supabase (PostgreSQL)"
    ],
    "scale": [
      "About 120k lines across 3 services, about 300 test files",
      "Production canary verified through saving a 1080×1920 MP4 to Drive (2026-10)",
      "0 live SNS posts. One post per account per day is enforced by the DB; the publish gate caps at 10 per day (2026-10-24)"
    ],
    "flow": [
      "Staff request a Reel, or run a saved automation (immediate, one-time scheduled, or recurring).",
      "A pure function in the orchestrator computes only the next action. An executor applies it to the Paperclip sub-issues to advance the stage.",
      "A Hermes agent writes the research, script, and prompts. video-studio renders a 9:16 MP4 from a HyperFrames template.",
      "Versions that pass the QA gate are saved to Drive with a checksum. A human approves from the preview; anything pending for more than 7 days expires.",
      "Posting is manual by default. Staff download the MP4, copy the caption, and click 'Posted'. The 'AI-generated content' label and the frame marker are added automatically."
    ],
    "diagram": {
      "src": "/images/v3/diagram-content-autopilot-en.png",
      "alt": "Content Autopilot architecture diagram"
    },
    "diagramCaption": "Request → state machine (Paperclip issues) → Hermes script → render & QA → human approval → publish gate (manual by default, DB slot)",
    "screens": [],
    "incidentsTitle": "What the defaults block",
    "incidents": [
      {
        "title": "Posting.",
        "text": "The default is manual. Auto-posting turns on only when both the token and the switch are present. A partial unique index on (platform, account, KST date) blocks more than 1 post per account per day. If duplicates already exist, the migration stops first."
      },
      {
        "title": "Paid generation and recurring automations.",
        "text": "The paid backend defaults to False. Recurring automations default to dry-run and are released only when the value is exactly \"false\". Before starting, they read the company's ₩30,000-per-day ledger, and hold if it can't be read. The cap is clamped with min() so env can't raise it."
      },
      {
        "title": "Instagram auto-DM.",
        "text": "By default the enable switch is off and dry-run is on. The limit is 200 per account per hour, and invalid config values are read toward the safe side. A unique index on (account, comment) stops a single comment from getting two DMs."
      }
    ],
    "highlights": [
      {
        "title": "A pure function decides the next action.",
        "text": "plan(state) returns only a list of actions, and the executor applies them. Each stage has a deadline, and the parent issue wakes at the earliest deadline + 1 minute to check. On failure, it cancels and closes the sub-issue with no retry. It doesn't touch sub-issues that belong to another parent. So a rerun doesn't create a new pipeline."
      },
      {
        "title": "Format errors get exactly one repair.",
        "text": "Only JSON format errors are eligible for repair. The previous output isn't resent; only the error list (up to 8 items, 120 chars each) is. At most 2 calls. A test pins down that if it's still wrong after the repair, it fails with no third call."
      },
      {
        "title": "Only real search results count as sources.",
        "text": "A cited URL passes only if it appears in web tool results or the input. Evidence fields the model wrote itself are discarded. Claiming a search without one fails with web_research_unverified. Facts like product prices are still guarded only by prompt rules."
      },
      {
        "title": "A post with an unknown outcome is never resent.",
        "text": "A start marker is written right before the POST. If an error occurs after sending, the item is left as publish_pending instead of failed. On restart, if it was already posted, it's closed as already_published. For Blotato, the submission ID is saved immediately, so a later wake-up only queries the status."
      },
      {
        "title": "The DB hands out publish slots.",
        "text": "The claim function locks the row with FOR UPDATE, takes an account advisory lock, checks the daily cap, then issues a 30–900 second lease token (a lock marker borrowed for a short time). I didn't go with an in-memory app lock. However many processes run, the decision happens in one place: the DB."
      },
      {
        "title": "One ledger enforces two policies.",
        "text": "LiteLLM and the direct Vertex path add costs to the same Redis key. That closed the gap where the direct path bypassed the proxy cap. If the ledger can't be read, individual calls pass and recurring automation starts are held. Reads use a Redis user with no write permission."
      },
      {
        "title": "Render retries share one deadline.",
        "text": "If the LLM-written motion plan fails the HyperFrames check, it re-renders with the default template. Both attempts share one deadline, so a retry doesn't double the wait time. Renders run one at a time."
      },
      {
        "title": "The file to post is pinned by checksum.",
        "text": "Right before posting, the Drive file's mime, size, md5, and location are checked again. The QA gate uses ffprobe to check 60 seconds, 1080×1920, 100MB, and h264, and for AI video it looks for the AI marker in every frame. Uploads read 8MiB at a time and resume on a 308 response (the resume signal)."
      }
    ],
    "status3": [
      "This is a simulation. There are no live SNS posts; the production canary confirmed up to saving the MP4 to Drive (2026-10).",
      "Approval expiry is handled by a daily 03:00 KST cron in this order: reject, cancel the issue, close the row. Even if the issue cancel fails, the row is closed so the same failure doesn't repeat.",
      "Limits: product fact checking is only prompt rules, and registering a new Instagram token needs developer setup. With no live posts, results like view counts haven't been measured.",
      "If I did it again: I'd add a code check that compares product facts such as price and bundle contents against the product DB. Right now, if the model breaks a rule, a human has to catch it in the preview."
    ],
    "decisions": [
      "A state machine with no LLM drives stage progression. The LLM only writes research, scripts, and prompts. If the model picked the next stage, every rerun would give a different result.",
      "On failure, it closes instead of retrying automatically. Anything that costs money or goes public, a human clicks again.",
      "Posting defaults to manual, and the daily cap lives in a DB index, not in app config."
    ],
    "reelFlow": [
      {
        "label": "Request",
        "note": ""
      },
      {
        "label": "Render · QA",
        "note": ""
      },
      {
        "label": "Publish gate",
        "note": "manual by default"
      }
    ],
    "headline": {
      "value": "~300",
      "label": "test files"
    }
  },
  {
    "id": "field-fleet",
    "slug": "field-fleet",
    "logo": "/images/logo9.png",
    "status": "live",
    "title": "Staff PC Deployment · Operations",
    "shortTitle": "Staff PC Fleet",
    "subtitle": "KakaoTalk and Instagram work has no official API, so I ship it to 11 staff PCs with a one-line install and run it there (as registered on 2026-09-16)",
    "meta": [
      {
        "label": "Period",
        "value": "2026.02–present (Instagram DM extension from 02, KakaoTalk tools from 05)"
      },
      {
        "label": "Role",
        "value": "Design: install, auth, and update structure; server cutoff date (messages before it are dropped) / Build: installers, workers, Windows collector, fixes to the kakaocli fork / Operate: deploys, incident response, monitoring crons. I used AI coding tools; I set the scope and checked the results myself"
      },
      {
        "label": "Repositories",
        "value": "agent-company, kakaocli fork"
      }
    ],
    "background": "KakaoTalk and Instagram have no official API a server can call. So the work had to run on staff Macs and Windows PCs. Install is a one-line command, auth is a per-device key, and updates run on an automatic schedule per tool. I also run the servers myself. On 2026-08-20 a cloud DB quota stopped every work-tool API; I stood up the same API on a VM and restored service that day.",
    "stack": [
      "macOS bash and Windows PowerShell installers",
      "launchd and Task Scheduler",
      "Node workers",
      "Python memory collector (Windows)",
      "kakaocli fork (Swift)",
      "VM Postgres+PostgREST+nginx",
      "SSE (server-pushed events) push hub",
      "Docker deploy scripts",
      "Slack monitoring crons"
    ],
    "scale": [
      "11 staff PCs (as registered on 2026-09-16), 9 seller-finder worker PCs (09-18)",
      "4 DBs moved to self-hosting (2026-08-06~08-25)",
      "Full work-tool API outage restored the same day (2026-08-20)"
    ],
    "flow": [
      "Staff install with a one-line command. Mac uses bash, Windows uses PowerShell, and most installs need no admin rights.",
      "Registering with a one-time install token returns a per-device key. The server keeps only the sha256 of the token and the key.",
      "Each tool has its own auto-update interval, and update times are spread across PCs. Only the Windows collector is replaced by reinstalling.",
      "Queue jobs are picked up only by the assigned device. A pickup is a single conditional UPDATE, so two devices cannot grab the same job.",
      "Servers deploy only from committed images. A 17:40 monitor posts unsent open-chat messages to Slack, and a person checks them before resending."
    ],
    "diagram": {
      "src": "/images/v3/diagram-field-fleet-en.png",
      "alt": "Architecture diagram of staff PC deployment and operations"
    },
    "diagramCaption": "Staff Macs and Windows PCs (one-line install, per-device keys, spread-out auto-updates) ↔ VM (PostgREST+nginx, cutoff date, committed-image deploys) ↔ monitoring crons and Slack",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Full work-tool API outage (2026-08-20).",
        "text": "The cloud DB hit its egress quota and every work-tool API stopped. I had nginx on the VM mimic the Supabase paths and apikey header check exactly. The apps changed only their connection settings and a few adapters; the 100-odd createClient calls in app code stayed as they were, and service was back that day."
      },
      {
        "title": "Reinstall broke healthy PCs (2026-09-14).",
        "text": "The installer deleted the old install first and registered after. When it ran with an expired code, the PC was left with no config and no package. Now the old folder is deleted only after the Node check, registration, and zip hash check all pass. The device number stays the same across reinstalls."
      },
      {
        "title": "Old-version PCs uploaded their whole chat history (2026-09-16).",
        "text": "Three Windows PCs sent their backlog of chats all at once. The Sheets API blocked with 429, and rows for the 2 staff who installed later stayed empty for over an hour. Fixing the client does nothing until the PC picks up the new version. So the server holds a cutoff date, and messages before it are accepted with 200 and then dropped."
      }
    ],
    "highlights": [
      {
        "title": "An install token is consumed in a single UPDATE.",
        "text": "If lookup and mark-as-used are separate, two PCs can register at once with one token. Registration passes only when an UPDATE conditioned on `used_at IS NULL` and expiry returns a row. Failure reasons are split into sentences staff can read. If one device is compromised, only its row is revoked."
      },
      {
        "title": "zip hashes instead of version numbers.",
        "text": "The sha256 of the published zip is the version. There is no separate version ledger, so the ledger and the file cannot drift apart. Workers swap only between jobs and simply exit. Restarting is the job of launchd and Task Scheduler. If a worker relaunched itself and two came up, the Instagram profile would break."
      },
      {
        "title": "Update times differ per PC.",
        "text": "If every device updates in the same minute, there is no window to pull a bad release. Mac real-time sync picks only a random minute within 14:00, and keeps that minute across reinstalls. The Windows CS tool downloads at a random time between 09:00 and 18:59, and tries once more 2 minutes after logon."
      },
      {
        "title": "On Windows, KakaoTalk memory is only read.",
        "text": "The KakaoTalk 26.8 update moved frida's (an app hooking tool) hook points, and the DB key could not be recovered either (measured on 2026-09-15). Messages were still in memory as plaintext JSON. The collector opens only `PROCESS_VM_READ`. With no injection, KakaoTalk does not crash and no admin rights are needed."
      },
      {
        "title": "Send success is checked in the DB, not by exit code.",
        "text": "On 2026-09-07 only the photo went out, the text was missing, and the job was still marked `sent`. Now it reads the local KakaoTalk DB right after sending and fills in only the missing part, once, on the spot. If the photo does not show up, it waits longer in case the upload is slow. Two copies of a photo in a 70-person room is worse than a lost message."
      },
      {
        "title": "Device assignment and conditional claims are layered.",
        "text": "On 2026-07-29 a dev Mac picked up the queue of a Mac reserved for remote work. Successes and failures alternated, and finding the cause took a day. Now a worker exits immediately if it is not the assigned host. A claim is a conditional UPDATE on `status='pending'`, and the open-chat queue has `UNIQUE(send_date, room_name)` as a second guard."
      },
      {
        "title": "Device blocks reach workers immediately via push.",
        "text": "The push hub listens on Postgres LISTEN/NOTIFY and wakes workers over SSE. When `device_keys` changes, it re-authenticates before waking them. A blocked device gets `revoked` and its connection is closed. On the server side, filling the single `revoked_at` field is enough."
      },
      {
        "title": "deploy.sh re-runs itself from the version in the commit being deployed.",
        "text": "The 2026-09-28 deploy failure happened because the running script differed from the script in the commit. The image tag is set once as `sha-<commit>`, and if the pull fails it stops instead of falling back to :latest. compose is rendered before the build, so missing variables are caught before a 40-minute build."
      }
    ],
    "status3": [
      "In production. The 11 staff PCs and 9 seller-finder workers are counts as registered on 2026-09-16 and 09-18; later counts are not recorded here.",
      "The most frequent incident was two devices holding the same resource (07-29, 09-22). So device assignment is the default.",
      "Limits: the Windows collector has no auto-updater and is replaced by reinstalling. The collection-gap alert is off by default.",
      "If I did it again: I would give the Windows collector a zip hash updater from day one. The 09-16 incident grew because old-version PCs never received the client fix."
    ],
    "decisions": [
      "If the CI image is missing, the deploy stops instead of substituting :latest. The deployed image always matches a commit.",
      "During the DB outage, I stood up the same API on a VM before touching the apps. App-side changes came down to connection settings and a few adapters.",
      "The cutoff-date filter does not drop messages whose timestamp it cannot read. Letting a little extra in is easier to see and fix than data silently disappearing."
    ],
    "reelFlow": [
      {
        "label": "Staff Mac · Windows",
        "note": "one-line install"
      },
      {
        "label": "VM",
        "note": "PostgREST + nginx"
      },
      {
        "label": "Watch cron · Slack",
        "note": ""
      }
    ],
    "headline": {
      "value": "11",
      "label": "staff PCs"
    }
  }
];

export default casesEn;
