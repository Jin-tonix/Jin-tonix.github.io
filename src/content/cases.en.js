// 일곱 프로젝트의 영문 사례를 원문 수치와 운영 범위에 맞춰 정리합니다.
const casesEn = [
  {
    "id": "status-board",
    "slug": "status-board",
    "logo": "/images/v3/status-board-screen-a.jpg",
    "status": "live",
    "title": "Status Board · Operations Ledger",
    "shortTitle": "Status Board",
    "subtitle": "One place to follow a business partner's conversations, orders and deal stage.",
    "meta": [
      {
        "label": "Period",
        "value": "Built 2026.10.19~10.23 (5 days), in production"
      },
      {
        "label": "Role",
        "value": "I designed the ledger and matching rules, built the intake API, email collector and six UI tabs, and verified the database behavior and production screens. I used Claude Code for implementation, while setting the scope and reviewing the results myself."
      },
      {
        "label": "Repositories",
        "value": "Status Board commits: about 150 combined across 2 internal repositories"
      }
    ],
    "background": "Staff followed the same deal across KakaoTalk rooms, email, Slack and emailed order sheets. I built a dashboard that brings these records onto a calendar for each business partner and shows deal stages across hundreds of partners.",
    "stack": [
      "React 19.2·Tailwind 4·Vitest 4",
      "Python 3.12·Pydantic v2",
      "Postgres RLS (DB rules that limit who can see each row)",
      "Gemini Flash family (via LiteLLM)"
    ],
    "scale": [
      "Communication Status share by stage: first contact 13.1%, proposal 33.8%, negotiation 2.6%, contract 4.5%, in progress 46.0%, settlement 0% (2026-10-24)",
      "Roughly 100–200 records per weekday, hundreds awaiting business partner matching (2026-10-24)"
    ],
    "flow": [
      "KakaoTalk comes in 3 times a day (09:15·13:00·17:55), the order mailbox every 5 minutes, and Slack through a generic connector. However many times the same record arrives, the ledger keeps it once.",
      "Newsletters are filtered out by rules before any LLM call. In order-sheet tables, columns such as recipient are located and buyer names are masked. If a phrase the summary cites as evidence is not in the original text, the summary is discarded.",
      "Counterpart matching uses rules only, no LLM. It checks email thread, business registration number, KakaoTalk room, email, phone, domain, account code, and alias, in that order. If keys disagree, the record goes to Unclassified.",
      "In-progress deals are built by grouping KakaoTalk contract signals and email signals under a business partner·target·round key. A stage is applied automatically when the rule evidence is clear; the rest go to 'awaiting review' for staff to decide.",
      "Every day at 18:05, summaries for up to around 500 business partners are rewritten in 3–6 lines. If spend passes KRW 2,000 for the day or the cost ledger cannot be read, that day's batch stops."
    ],
    "diagram": {
      "src": "/images/v3/diagram-status-board-en.png",
      "alt": "Status Board architecture diagram"
    },
    "diagramCaption": "Collect → Prepare → Link and store → Review and follow up",
    "screens": [
      {
        "label": "Screen A",
        "text": "Per-business partner calendar. Pick one brand, vendor, or seller, and KakaoTalk summaries, emails, and Excel order sheets sit on a single calendar in date order. Above it are a stage bar, a combined summary (now/recent/open items), in-progress deals, and the business partner wiki.",
        "image": "/images/v3/status-board-screen-a.jpg"
      },
      {
        "label": "Screen B",
        "text": "Communication Status. Shows the share of business partners per stage (first contact 13% to in progress 46%) and 'awaiting review' proposals; staff click apply or reject.",
        "image": "/images/v3/status-board-screen-b.jpg"
      },
      {
        "label": "Screen C",
        "text": "KakaoTalk conversation and email tabs. Raw records shown as tables. The email tab also summarizes the contents of attached Excel order sheets.",
        "image": null
      },
      {
        "label": "Screen D",
        "text": "Counterpart matching. Staff attach the hundreds of records that could not be matched automatically to a business partner. Records from the same room and the same thread are attached along with them, and those keys are used for later matching.",
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
        "text": "The shared chatbot's name ended up in the contact-person field for 64 business partners. The top 5 most active speakers in a KakaoTalk room were taken as contacts, and the chatbot was among them. Now only company email accounts (@sample-corp.co.kr) count as contacts; if there is none, the contact from the account profile is used."
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
        "text": "The matching order is fixed: thread, business registration number, KakaoTalk room, email, phone, domain, account code, alias. If a business registration number or phone points to a different business partner than the other evidence, it is flagged as a conflict and left in Unclassified. 13 public domains such as gmail and naver are not used as evidence."
      },
      {
        "title": "Concurrent collection does not create a business partner twice.",
        "text": "Only when creating a new business partner, an advisory lock (a named lock shared across transactions) is taken per evidence value in sorted order, then the server checks again. If another transaction created the business partner in the meantime, that one is used. Staff stage updates follow the same lock order as collection (business partner → proposal), so there are no deadlocks."
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
      "Python, TS, and SQL share one golden file for name and phone normalization. CI runs content-verification tests on PGlite as the real app role; UI tests run outside CI.",
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
        "note": "server"
      },
      {
        "label": "Staff confirms",
        "note": ""
      }
    ],
    "headline": {
      "value": "Hundreds",
      "label": "business partners on the board"
    }
  },
  {
    "id": "vendor-cs",
    "slug": "vendor-cs",
    "logo": "/images/v2/logo10.png",
    "status": "live",
    "title": "Vendor CS Agent",
    "shortTitle": "Vendor CS Agent",
    "subtitle": "Tagged KakaoTalk questions answered against partner records, with delivery checked on the staff Mac.",
    "meta": [
      {
        "label": "Period",
        "value": "2026.06–present"
      },
      {
        "label": "Role",
        "value": "I designed the intake and partner gates, built the agent and local send path, added evidence checks and delivery confirmation, and investigated failures on real Macs and Windows PCs."
      },
      {
        "label": "Repositories",
        "value": "the server (vendor agent), kakaocli fork, CS Copilot extension and local sender"
      }
    ],
    "background": "Partner conversations live on staff computers, but the agent needs shared records to answer consistently. I connected local collection, a server ledger and the knowledge hub, then returned replies through a staff Mac. Since September 2, the agent answers tagged questions without follow-up questions or a human handoff step. Code checks amounts, percentages and brands against retrieved evidence before delivery.",
    "stack": [
      "macOS kakaocli fork (Swift)",
      "Windows read-only collector (Python)",
      "Python 3.12",
      "Gemini Flash family (via LiteLLM)",
      "LightRAG 1.5.6",
      "Google Sheets and Drive"
    ],
    "scale": [
      "Vendor agent code, tests, and config: 61K lines total, 600 commits, 107 test files (2026-09-23)",
      "CS Copilot extension and local sender: 631 commits, 20,596 lines, 56 tests (2026-09-23)",
      "Tests: business partner gate 20, evidence judgment 16, liveness markers 30, Mac Swift 34, Windows Python 72"
    ],
    "flow": [
      "On Mac, kakaocli reads only what comes after the last logId in the KakaoTalk DB. On Windows, a read-only collector uploads it. It moves on only after the server answers with 2xx.",
      "The server drops the same message if it arrives again within 15 seconds. It stores records in per-partner ledgers, Sheets, and Drive, and twice a day (09:30, 18:10) compiles them into a wiki that goes into the knowledge hub.",
      "The business partner ID or name in the room name is checked against the work tool's list of business partners to serve. If no business partner is found on the list, it does not answer.",
      "It accepts only questions tagged @company_AI. The regex only detects the tag; the model does the search and writes the answer. Other business partners' names are masked as [other vendor].",
      "Amounts, percentages, and brands in the draft are checked against the evidence, and on a mismatch it searches again and rewrites. The reply is sent from a staff Mac, and delivery is confirmed by whether the KakaoTalk DB count went up."
    ],
    "diagram": {
      "src": "/images/v3/diagram-vendor-cs-en.png",
      "alt": "Vendor CS agent architecture diagram"
    },
    "diagramCaption": "Collect locally → Identify and retrieve → Check the answer → Send and confirm",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "A regex blocked questions before model assessment (until 2026-08-30).",
        "text": "Some messages were silently blocked without any LLM judgment. The regex meant as a trigger was also doing the blocking. I cut the regex down to tag detection only and moved the decision on whether to answer to the model."
      },
      {
        "title": "Background KakaoTalk calls hung (2026-08-17–18).",
        "text": "On macOS 15, when the KakaoTalk window was in the background, Accessibility (AX) calls ignored their timeout and hung. 31 of 147 sends (21%) failed permanently. I moved the calls to a separate thread and put a 3-second deadline on them with a semaphore (past that, the wait is cut off). Since 09-08 it also re-checks delivery after sending."
      },
      {
        "title": "Flood of past conversations (2026-09-16).",
        "text": "Three Windows PCs uploaded 2,500 records in 50 minutes, the Sheets API was blocked with 429, and rows for the 2 people installed later stayed empty for over an hour. An old collector build had uploaded entire past conversations. I made the server drop records older than a cutoff date and answer 200. Answering with 5xx makes the collector upload the same records again."
      }
    ],
    "highlights": [
      {
        "title": "A similar name does not decide the business partner.",
        "text": "The '(1234)' at the start of a room name is read as the ID. If the name part points better to a different vendor, at jamo similarity 0.80 or higher, it is treated as an ID typo and blocked. Without an ID, only a single name that is an exact match or a containment match is accepted. Sharing just a common suffix already scored 0.81–0.88, so I dropped fuzzy matching."
      },
      {
        "title": "One message came in 51 times.",
        "text": "kakaocli resends the latest message of an unread room every 2 seconds. When I counted, it was 51 times for 1 message, 170–200 per minute. A (room, message, unread count, sent by me) key drops resends within 15 seconds. Because the unread count is in the key, the signal from closing and reopening a room still gets through."
      },
      {
        "title": "Numbers and brands are checked in code.",
        "text": "Amounts and percentages in the draft are normalized (Korean shorthand '3만원' becomes 30000 KRW). Values not in the retrieved evidence, and words one character off from an evidence brand, are flagged as violations. If the judgment fails or is ambiguous, it counts as no evidence. When a violation is found, it searches again with the reason attached and rewrites."
      },
      {
        "title": "'Sent' is written only when it is true.",
        "text": "If the send API was not called in that turn, completed-action sentences like '제안서 보내드렸습니다' (\"I've sent the proposal\") are removed. When a retry arrives with the same idempotency key, it checks the actual queue state. Items in progress or already sent are not re-queued; only failed ones are retried. If the state is unknown, it returns an error instead of success."
      },
      {
        "title": "Other business partners' cases are masked.",
        "text": "If a vendor name other than the current business partner appears in search results, it is replaced with [other vendor], and the model is told that the replacement happened. All 11 Spark tools that query company-wide data are blocked in external rooms. The vendor name passed to the product recommendation lookup is set by the server, not the model."
      },
      {
        "title": "Delivery is counted from the KakaoTalk DB.",
        "text": "A baseline count is taken before sending. After sending, it counts how many text messages and photos were added in the local DB and resends only what is missing. Photos get an extra 60 seconds. In a 70-person room, the same photo arriving twice is worse than one photo missing. Completion is reported to the server only after this check."
      },
      {
        "title": "The checkpoint moves only after 2xx.",
        "text": "The uploader moves the offset only after receiving 2xx. 422 and 413 are skipped; on 5xx or 429 it stops without committing and uploads again on the next run."
      },
      {
        "title": "The system records when processing starts and finishes.",
        "text": "It leaves one marker when a tagged message is accepted and one when it reaches a result. If no result marker appears past a business-hours threshold, the monitor catches it. The earlier approach, where the monitor guessed from outside that 'no draft means it stalled,' was removed in review. This path has 30 tests."
      }
    ],
    "status3": [
      "Since 2026.06, intake, ledger and wiki compilation, and answers to tagged questions have been running. Replies that staff send directly in a room are learned right away, and older answers to the same question are marked as superseded by the new one and demoted in search.",
      "Vendor and influencer CS calls are excluded from the company daily cost cap. The Windows collector has no auto-updater, so new builds are deployed by reinstalling.",
      "If I did it again: I would put auto-update and the cutoff date into the first build of the Windows collector. The 09-16 flood of past conversations came from an old collector build, and there was no way to fix it except reinstalling."
    ],
    "decisions": [
      "On 2026-09-02 I turned off follow-up questions and changed it to answer every tagged question, with no human handoff step. In exchange, number and brand checks are done in code, not left to the LLM. The old handoff branch stays in the code, guarded by tests.",
      "The regex handles only tag detection, and judgment went to the model. The approach where the regex also did the blocking was removed on 2026-08-30.",
      "I took fuzzy matching out of business partner checks. Not answering is better than answering in someone else's room because a name looked similar."
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
    "subtitle": "Reliable pricing, reviewable catalog candidates and controlled personalized KakaoTalk sends.",
    "meta": [
      {
        "label": "Period",
        "value": "Late March 2026 onward"
      },
      {
        "label": "Role",
        "value": "I built pricing, catalog extraction, partner matching, send automation and PC workers. A colleague's CRM supplies seller-specific recommendations; I built the automation that receives those recipients and sends the messages."
      },
      {
        "label": "Repositories",
        "value": "the work tool, the server (staff PC worker)"
      }
    ],
    "background": "Pricing depended on spreadsheet formulas and manual checks. I moved the calculations into code and compared real-product values field by field. The work tool also extracts catalog candidates and finds potential partners, leaving registration and review to staff.",
    "stack": [
      "React 19.2·Tailwind 4·Vitest 4",
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
    "diagramCaption": "Receive inputs → Calculate and propose → Review → Run scheduled work",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Missing match candidates (2026-07-15).",
        "text": "In 3 of 6 chunks (the batches sent to the LLM separately), the LLM ended its response before judging all candidates. Since 07-16, candidates are collected as a union and then split for querying, and since 08-07 only the missing candidates are re-queried, up to 3 times. The count that still goes unjudged is shown separately in the UI."
      },
      {
        "title": "All worker PCs shared one key (2026-09-10).",
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
        "text": "If the LLM back-calculates a request like \"set seller earnings to 1000\", other amounts shift too. So the 6 computed values, such as supply price and earnings, are blocked from the edit list. For such requests, it only points to the input values that need to change. If asked to change only the margin rate, it does not return the sale price."
      },
      {
        "title": "I reproduced the spreadsheet formulas and rounding rules in code.",
        "text": "Partner supply price rounds up, and the fee rate is fixed in code. I added tests that compare each field for 2 real products in the sheet (a sample product at 30,000 won, among others). The tests also check two properties: changing the split ratio leaves total profit unchanged, and the two shares always sum to total profit."
      },
      {
        "title": "Catalog extraction uses the original PDF image when it matches.",
        "text": "Pages go to the LLM one at a time, and it returns photo coordinates. If those coordinates overlap an original image embedded in the PDF with IoU (the ratio of the overlapping area of two boxes) above 0.5, the original is used. Backgrounds covering more than 80% of the page are dropped from the candidates, and the page is cropped only when no matching original exists. For products that appear on several pages, empty price fields are filled from each other."
      },
      {
        "title": "Excel still yields results when the LLM fails.",
        "text": "If LLM parsing returns 0 items, the UI does not show an empty screen; a rule-based parser re-reads the same file. Images inside the file are attached to products in order. Icons under 750 bytes are not counted as product photos and are discarded."
      },
      {
        "title": "RAG only widens candidates within the existing partner pool.",
        "text": "Rule scores are assigned by category, group-buy history, product requests, and proposals, in that order, and the results of a 4-sentence RAG query are added as a union. IDs returned by RAG are accepted only if they are in the existing partner pool. This logic used to live in n8n; I moved it into code so it could be tested with vitest."
      },
      {
        "title": "Automatic sends and UI sends use the same rules.",
        "text": "The server assembler loads the same product-selection and template modules as the UI, so the same person never gets different products. A CRM lookup failure and 0 results are handled separately. Only on 0 results does it fill in popular products. The new-seller card is built only once."
      },
      {
        "title": "Scheduled sends go out a little every minute, without overlapping.",
        "text": "Per tick, it assembles up to 3 targets that get personalized recommendations and up to 30 without them. If 5 or more queued items have not gone out, that tick is skipped. Once the send window passes, nothing new starts, so sends do not pile up at night. To keep ticks from overlapping, each schedule has a lock row, and it can only be released with the token left when it was acquired."
      },
      {
        "title": "Each account is assigned to one PC.",
        "text": "Checking the install token and marking it used are combined into a single conditional UPDATE, so two PCs cannot register with the same token at the same time. If the same Instagram account is on two PCs, the one that logged in more recently wins. The server's job-assignment function follows the same rule. The daily action volume is redrawn within a range every morning."
      }
    ],
    "status3": [],
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
    "shortTitle": "LightRAG Knowledge Hub · Email Agent",
    "subtitle": "Shared search with evidence checks before email drafts reach the assigned staff member.",
    "meta": [
      {
        "label": "Period",
        "value": "2026.03.31~present"
      },
      {
        "label": "Role",
        "value": "I designed workspace registration, search planning and evidence checks, built the mail server and draft checkers, and handled rollout, incident investigation and recovery."
      },
      {
        "label": "Repositories",
        "value": "the mail agent"
      }
    ],
    "background": "Vendor support, influencer support, Spark and partner matching need the same business knowledge. I built a shared LightRAG hub with 13 workspaces, each with an owner, channel and sensitivity level. For shared-mailbox inquiries, the email agent prepares a checked draft in the assigned person's Gmail drafts folder; staff send it.",
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
    "diagramCaption": "Plan the search → Retrieve → Judge evidence → Verify the draft",
    "screens": [],
    "incidentsTitle": "Incidents and fixes",
    "incidents": [
      {
        "title": "Missing rerank (2026-06-19~07-23).",
        "text": "On 06-18 we switched to agentic RAG (the LLM plans the search). From the next day, the quality of CEO email drafts dropped. Tracing back through the commit history showed the rerank step had been dropped in the switch. I restored it on 07-23."
      },
      {
        "title": "Search overload (07-10, 08-12).",
        "text": "The influencer CS bot took the whole shared connection pool, so even partner-matching searches returned HTTP 500 errors (07-10). top_k 40 searches triggered Neo4j overload warnings (08-12 analysis). I split the connection pool per workspace and capped agent searches at top_k 8."
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
        "title": "Reranking has two fallback paths.",
        "text": "Documents are cut to 20, then the LLM reranker runs first. If it fails, FlashRank runs; if that fails too, the original order is scored, so results always come back. I lowered search-stage concurrency to 3. That cut concurrent Neo4j writes in the merge stage from 8 to 6 per document."
      },
      {
        "title": "Thirteen draft checkers cover distinct error patterns.",
        "text": "Patterns include reversing the direction of a request, citing a previous email that never existed, re-asking a confirmed condition, and writing a proposed price as if it were final. Each checker includes reproduction cases from real emails of 08-21~08-23. They started as regexes, but false positives kept coming, so judgment moved to LLM checkers."
      },
      {
        "title": "A fix that introduces a new falsehood is rejected.",
        "text": "Comparing only the sum of violation scores lets a 2-point factual violation pass as the price of fixing a 10-point forbidden word. So if a rewritten draft has a factual violation that was not there before, the rewrite is discarded even if it fixed other violations. Violations that remain after rewriting are logged as \"Draft rejected\" by type, and the draft is dropped."
      },
      {
        "title": "The evidence bundle is cached and reused.",
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
      "Limits: the 18 search eval cases check only workspace selection. Search hit rate, evidence match, and the effect after restoring rerank have not been measured.",
      "If I did it again: I would add evidence-match scoring to the eval set first. That would have caught the missing rerank before draft quality dropped."
    ],
    "decisions": [
      "The LLM planner decides where to search; code decides the search mode. I did not let agents pick the mode.",
      "Mail that staff actually send is the source of truth for sent-mail learning. AI drafts are never fed back into the knowledge hub.",
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
    "subtitle": "Work orders, agent delegation and tool execution with controls enforced by the server.",
    "meta": [
      {
        "label": "Period",
        "value": "2026.05–present (kickoff 05-17, Spark·Work OS design 07-18~19)"
      },
      {
        "label": "Role",
        "value": "I designed work orders and delegation limits, integrated shared skills and tools, built single-use approvals and cost controls, and wrote evaluation cases and deployment checks."
      },
      {
        "label": "Repositories",
        "value": "internal repo (Paperclip fork), skills folder, service code"
      }
    ],
    "background": "An agent can change the meaning of a request as it delegates work, and a tool can write data, spend money or publish content. I forked Paperclip and added Spark, Work OS and company services, with execution controls in server code. Staff use Spark to query four business databases and hand work to the CEO agent.",
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
      "109 shared skills (October 24, 2026), 66 trigger eval files (1,282 sentences), 67 tool manifests"
    ],
    "flow": [
      "Work requests from Spark, Slack and the work tool go to the CEO agent. Only structured requests from the work tool go straight to the content orchestrator, and they still leave a work order record.",
      "The CEO writes work order v1. It holds the original text as an attachment with its sha256, the goal, completion criteria, constraints, and whether approval is required.",
      "An overall orchestrator reporting directly to the CEO (the Hermes dispatcher) assigns it to one of at most 10 department heads, such as Supervisor, campaigns, ads, content, build, review and deploy. The server caps delegation depth at 2 and delegations per work order at 5, and blocks A→B→A bounce-backs. Turning it off falls back to direct delegation by the CEO. Work that goes to the content department head is handed on again to the content orchestrator, a separate service.",
      "BM25 search pulls candidates from all shared skills, the judge model Jev checks gating and fit, and Gemini makes the final pick of one skill. If Jev fails or times out, it is skipped and Gemini picks directly from the full list.",
      "Tools run through a 6-stage gate and human approval. Publishing goes through the Publisher gateway (a single service dedicated to publishing). The default is manual, and the DB enforces one post per account per day."
    ],
    "diagram": {
      "src": "/images/v3/diagram-agent-platform-en.png",
      "alt": "Agent Platform·Spark architecture diagram"
    },
    "diagramCaption": "Preserve the request → Assign work → Select a skill → Execute through gates",
    "screens": [
      {
        "label": "Screen",
        "text": "A Spark answer. Question titles and business partner names are masked, and each answer carries the name of its source tool",
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
        "title": "Reclaiming a job mid-render (2026-10-24).",
        "text": "The server reaper treated a video job running past 5 minutes as stalled and reclaimed it, and the result that arrived 7 min 40 s later was rejected with 409. I made the job send a heartbeat every 120 seconds and stop once the issue deadline passes. Jobs that are really stuck still get reclaimed. In production I confirmed heartbeats received (200) and 0 reclaims."
      },
      {
        "title": "Made the Jev router lightweight (2026-10-23).",
        "text": "For speed and a lighter footprint, I moved the Jev router onto a lightweight model. An adapter only matches the response format, so the existing router code stayed unchanged."
      }
    ],
    "highlights": [
      {
        "title": "A hash protects the original request.",
        "text": "Each delegation step changes the wording of the request. The original is NFC-normalized, line endings are normalized, and it is locked together with its sha256. The server overwrites any hash the client sends. I followed an external benchmark that found fewer supervisor errors when the original is passed along instead of an intermediate summary."
      },
      {
        "title": "The server breaks delegation loops.",
        "text": "Plugins can only observe after an issue is created, so I changed the server core. Depth 2, 5 per work order, no A→B→A. Depth is counted by walking up the actual parent issues, not read from a column whose value can be changed. A 6th delegation and forged depth are rejected in tests."
      },
      {
        "title": "BM25 shortlists; Jev re-filters; Gemini picks.",
        "text": "BM25 search pulls candidates from all skills, the judge model Jev checks gating and fit, then Gemini makes the final pick of 1. On failure, timeout, or an open circuit breaker (300 seconds after 2 failures), Jev is skipped and Gemini picks directly from the full list. Rollout targets are split by the first 8 characters of a sha256."
      },
      {
        "title": "An approval is used exactly once.",
        "text": "The approval row is locked with FOR UPDATE, and a partial unique index blocks it a second time. The approval is consumed even if execution fails. The idempotency key uses ON CONFLICT DO NOTHING followed by a re-read, so there is no race. A test confirmed 1 execution for 10 concurrent requests."
      },
      {
        "title": "Write approvals sign the preview.",
        "text": "Input hash, preview hash, requester, run ID, and expiry are bundled as canonical JSON and signed with HMAC-SHA256. Write access to the DB is not enough to pass without the key. The dedup key contains no timestamp, so model retries do not multiply approvals."
      },
      {
        "title": "Spark DB lookups open a new connection per query.",
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
      "Evaluation (with the model in use at measurement time): on 69 questions with known answers, candidate recall (share of cases where the answer is among the candidates) is 85.5% at top 1 and 91.3% at top 3 (2026-10-24). Median latency is about 1.09 seconds.",
      "If I did it again: I would check manifests against tool registration rows in CI. The 10-24 outage only surfaced at boot, but it could have been caught before merge.",
      "Follow-up · Jev Skill Router Upgrade (October 25–30): **119/132 correct (90.15%)** in final skill selection. The 132 questions were new when introduced and were subsequently reused during tuning. This is a different metric from candidate recall above. The router is rolled out to Hermes sub-agents. The catalog grew from 109 skills (Oct 24) to 115 at test time; BM25 and Jev reduce Gemini's review from 115 skills to 5, yielding an **estimated 90% cost reduction**, calculated from published unit prices and reduced input. Jev's measured median response time was 360ms. If it fails or times out, Gemini selects from the full list.",
      "Checking the evaluation: five of six flagged false positives were answer-key errors. I also found gains limited to questions used during tuning and a fake skill that existed only in the test folder. After removing it, I reran 222 cases. The successive results—83.3%, 88.9%, 94.4% and 90.15%—come from corrected labels and changing sets, so they are not a clean before-and-after accuracy curve. Saved-answer comparisons stayed within quota, with no rate-limit errors.",
      "Jev limits: some questions still have two valid answers. There was no step to update labels when the catalog grows, which produced 10 label errors; automatic label checks are still only a proposal."
    ],
    "decisions": [
      "I chose a full index over per-role skill bundles. On a 57-case selection set both scored the same accuracy, 0.947 (p=1.0). But the bundle approach missed skills that only get used when called by name. The cost difference over 66 cases was 27 KRW.",
      "The dispatcher assigns work; BM25 shortlists candidates, Jev re-filters them, and Gemini picks the skill. If Jev fails, Gemini still picks directly from the full list, so work does not stop. The worker never picks the skill; Gemini always does.",
      "Controls sit where they still hold if the model ignores them. The loop guard, single-use approval, and paid cap all live in the server and DB.",
      "I set the bar for turning the Jev router on before testing: on unseen questions, selection no worse than the full-list approach, no more wrong skill picks, and lower cost. A comparison setting gained only +1.5 pp and got answers wrong by detouring to a skill with fit as low as 0.22, so I left it off."
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
      "value": "100+",
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
    "subtitle": "A Reel workflow with predictable stages, a reviewable preview and controlled publishing.",
    "meta": [
      {
        "label": "Period",
        "value": "2026.10.03–present"
      },
      {
        "label": "Role",
        "value": "I designed the state machine and publishing defaults, built the orchestrator, database publishing slots and QA gate, and checked the production render path and restart behavior."
      },
      {
        "label": "Repositories",
        "value": "the orchestrator, the content agent, the video renderer, the work tool (content screen)"
      }
    ],
    "background": "Generating a video costs money, and publishing makes it public. I built a workflow where staff request a Reel, inspect the rendered video and approve it in the work tool. Code controls the stages, while an agent prepares research, scripts and prompts.",
    "stack": [
      "Paperclip sub-issues",
      "the orchestrator (state machine with no LLM)",
      "Hermes and the Gemini Flash family (via LiteLLM)",
      "image-service",
      "TTS",
      "the video renderer",
      "HyperFrames (a tool that renders video from HTML)",
      "ffprobe",
      "Google Drive",
      "Blotato (scheduled SNS posting service)",
      "Supabase (PostgreSQL)"
    ],
    "scale": [
      "About 122k lines across 3 services, 617 test files (orchestrator 135, Hermes agent 396, video renderer 86)",
      "Production canary verified through saving a 1080×1920 MP4 to Drive (2026-10)",
      "0 live SNS posts from the new production path. One post per account per day is enforced by the DB; the publish gate caps all accounts combined at 10 posts per day (2026-10-24)"
    ],
    "flow": [
      "Staff request a Reel, or run a saved automation (immediate, one-time scheduled, or recurring).",
      "A pure function in the orchestrator computes only the next action. An executor applies it to the Paperclip sub-issues to advance the stage.",
      "A Hermes agent writes the research, script, and prompts. The video renderer renders a 9:16 MP4 from a HyperFrames template.",
      "Versions that pass the QA gate are saved to Drive with a checksum. A human approves from the preview; anything pending for more than 7 days expires.",
      "Posting is manual by default. Staff download the MP4, copy the caption, and click 'Posted'. The 'AI-generated content' label and the frame marker are added automatically."
    ],
    "diagram": {
      "src": "/images/v3/diagram-content-autopilot-en.png",
      "alt": "Content Autopilot architecture diagram"
    },
    "diagramCaption": "Request → Plan and produce → Check and approve → Publish",
    "screens": [],
    "incidentsTitle": "What the defaults block",
    "incidents": [
      {
        "title": "Posting.",
        "text": "The default is manual. Auto-posting turns on only when both the token and the switch are present. A partial unique index on (platform, account, KST date) blocks more than 1 post per account per day. If duplicates already exist, the migration stops first."
      },
      {
        "title": "Paid generation and recurring automations.",
        "text": "The paid backend defaults to False. Recurring automations default to dry-run and are released only when the value is exactly \"false\". Before starting, they read the company's KRW 30,000-per-day ledger, and hold if it can't be read. The cap is clamped with min() so env can't raise it."
      },
      {
        "title": "Instagram auto-DM.",
        "text": "By default the enable switch is off and dry-run is on. The limit is 200 per account per hour, and invalid config values are read toward the safe side. A unique index on (account, comment) stops a single comment from getting two DMs."
      }
    ],
    "highlights": [
      {
        "title": "Code determines the next workflow step.",
        "text": "plan(state) returns only a list of actions, and the executor applies them. Each stage has a deadline, and the parent issue wakes at the earliest deadline + 1 minute to check. On failure, it cancels and closes the sub-issue with no retry. It doesn't touch sub-issues that belong to another parent. So a rerun doesn't create a new pipeline."
      },
      {
        "title": "JSON format errors get one repair attempt.",
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
        "title": "The database assigns publishing slots.",
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
      "This new production path is technically done, but details like its prompts are still being tuned. Content made on this path has no live SNS posting record; the production canary confirmed only as far as saving the MP4 to Drive (2026-10). Existing videos are already posted live through a separate path that only swaps captions and hashtags per account to post the same video to multiple accounts at once.",
      "Approval expiry is handled by a daily 03:00 KST cron in this order: reject, cancel the issue, close the row. Even if the issue cancel fails, the row is closed so the same failure doesn't repeat.",
      "Limits: product fact checking is only prompt rules, and registering a new Instagram token needs developer setup. This path has no live posts yet, so results like view counts haven't been measured.",
      "If I rebuilt this, I would add a code check that compares product facts such as price and bundle contents against the product DB. Right now, if the model breaks a rule, a human has to catch it in the preview."
    ],
    "decisions": [
      "A state machine with no LLM drives stage progression. The LLM only writes research, scripts, and prompts. If the model picked the next stage, every rerun would give a different result.",
      "Apart from one format repair and one re-render with the default template, it closes on failure instead of retrying automatically. Anything that costs money or goes public, a human clicks again.",
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
      "value": "617",
      "label": "test files"
    }
  },
  {
    "id": "field-fleet",
    "slug": "field-fleet",
    "logo": "/images/logo9.png",
    "status": "live",
    "title": "Staff PC Deployment · Operations",
    "shortTitle": "Staff PC Deployment",
    "subtitle": "Shipping and operating tools on staff Macs and Windows PCs, then staying responsible after installation.",
    "meta": [
      {
        "label": "Period",
        "value": "2026.02–present (Instagram DM extension from 02, KakaoTalk tools from 05)"
      },
      {
        "label": "Role",
        "value": "I designed installation, authentication and update behavior, built installers and workers, improved the kakaocli fork and Windows collector, and handled releases, monitoring and incident recovery."
      },
      {
        "label": "Repositories",
        "value": "internal repo, kakaocli fork"
      }
    ],
    "background": "These workflows cannot rely on a server-only integration with staff KakaoTalk and Instagram sessions. I built local workers, one-line installers and device authentication, then operated the supporting servers. The deployment snapshot recorded eleven staff PCs, with seller-finder workers on nine PCs.",
    "stack": [
      "macOS bash and Windows PowerShell installers",
      "launchd and Task Scheduler",
      "Node workers",
      "Python collector (Windows)",
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
      "Staff install with a one-line command. Mac uses bash, Windows uses PowerShell.",
      "Registering with a one-time install token returns a per-device key. The server keeps only the sha256 of the token and the key.",
      "Mac tools and the Windows CS tool update automatically on separate schedules, with update times staggered across PCs. The separate Windows read-only collector is updated by reinstalling.",
      "Queue jobs are picked up only by the assigned device. A pickup is a single conditional UPDATE, so two devices cannot grab the same job.",
      "Servers deploy only from committed images. A 17:40 monitor posts unsent open-chat messages to Slack, and a person checks them before resending."
    ],
    "diagram": {
      "src": "/images/v3/diagram-field-fleet-en.png",
      "alt": "Architecture diagram of staff PC deployment and operations"
    },
    "diagramCaption": "Install and register → Update safely → Collect and execute → Observe and recover",
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
        "text": "Three Windows PCs sent their backlog of chats all at once. The Sheets API returned rate-limit errors (HTTP 429), and rows for the 2 staff who installed later stayed empty for over an hour. Fixing the client does nothing until the PC picks up the new version. So the server holds a cutoff date, and messages before it are accepted with 200 and then dropped."
      }
    ],
    "highlights": [
      {
        "title": "An install token is consumed in a single UPDATE.",
        "text": "If lookup and mark-as-used are separate, two PCs can register at once with one token. Registration passes only when an UPDATE conditioned on `used_at IS NULL` and expiry returns a row. Failure reasons are split into sentences staff can read. If one device is compromised, only its row is revoked."
      },
      {
        "title": "The package hash identifies the version.",
        "text": "The sha256 of the published zip is the version. There is no separate version ledger, so the ledger and the file cannot drift apart. Workers swap only between jobs and simply exit. Restarting is the job of launchd and Task Scheduler. If a worker relaunched itself and two came up, the Instagram profile would break."
      },
      {
        "title": "Update times differ per PC.",
        "text": "If every device updates in the same minute, there is no window to pull a bad release. Mac real-time sync picks a fixed random minute within the 14:00 hour, and keeps that minute across reinstalls. The Windows CS tool downloads at a random time between 09:00 and 18:59, and tries once more 2 minutes after logon."
      },
      {
        "title": "On Windows, KakaoTalk uses a read-only collector.",
        "text": "The collector opens read access only and never writes."
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
      "The most frequent incident was two devices holding the same resource (07-29). So device assignment is the default.",
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
