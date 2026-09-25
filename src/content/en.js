// 영문 콘텐츠 — ko.js 와 같은 사실을 영어로 쓴다 (원고: portfolio-research/v3/content/*.en.md)
const ROLE = 'Designed, built, and run solo. I write code with Claude Code; architecture, rules, verification, and rollout decisions are mine.';

const en = {
  lang: 'en',
  nav: {
    home: 'Intro',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    build: 'How I Build',
    resume: { label: 'Résumé', href: '/resume/Resume_Jinhee_Mok.pdf' },
    langSwitchLabel: 'KO',
    koOnlyNote: 'Korean only',
  },
  hero: {
    name: 'Jinhee Mok',
    title: 'AI Engineer (Agents & Automation)',
    intro:
      "At StyleSeller, I moved proposal pricing, vendor KakaoTalk inquiries, and seller discovery into an internal work app and a set of agents. I'm Jinhee Mok, and I design, build, and run these systems on my own.",
    company:
      'StyleSeller is a platform that connects social media influencer sellers with brands to run group buys (time-limited sales run by an influencer). It handles ordering, customer support, and settlement on their behalf.',
    metrics: [
      { value: '14', label: 'work screens staff use', basis: 'brand-tool live screens incl. login · 6 top-level menus · 2026-09-23' },
      { value: '5', label: 'agents in daily operation', basis: '4 services with a schedule or intake loop + Spark, which staff use · vendor support · influencer CS · Supervisor · Hermes · Spark · 2026-09-23' },
      { value: '11', label: 'staff PCs deployed', basis: 'KakaoTalk sync registrations · 6 Macs and 5 Windows PCs · 2026-09-16' },
      { value: '4', label: 'repositories, one operating system', basis: 'brand-tool · agent-company · email-agent · kakaocli' },
    ],
    glossaryTitle: 'Terms',
    glossary: [
      { term: 'Group buy (공구)', desc: "A time-limited sale run by an influencer, who sells a brand's products to followers for a set period" },
      { term: 'Influencer seller (셀러)', desc: 'A social media influencer who runs group buys' },
      { term: 'Brand (supplier)', desc: 'A company that supplies the products' },
      { term: 'Sales partner', desc: 'A company that runs group buys with its own sellers. Labeled "vendor" (벤더사) in the work tool UI' },
      { term: 'Vendor', desc: 'In the vendor support case, this means brands and sales partners together' },
      { term: 'KakaoTalk', desc: "Korea's dominant messenger. Personal chats have no official API" },
    ],
    casesTitle: 'Five StyleSeller cases',
  },
  systemMap: {
    title: 'System Map',
    intro:
      'It started as Instagram DM automation (2026-02). Today four repositories work together as one operating system. Staff work in one internal web app, a Chrome extension panel, and Slack. Behind them, agents and staff PC workers share self-hosted databases and one knowledge hub. Click a number to jump to that case.',
    image: '/images/v3/system-map-en.png',
    zoomHint: 'Tap to enlarge',
    imageAlt: 'Map of the StyleSeller AI operations system',
    reposTitle: 'What each repository does',
    repos: [
      { name: 'brand-tool', role: 'The web app staff use; sales partner and product data' },
      { name: 'agent-company', role: 'Agents, servers, and staff PC deployment' },
      { name: 'email-agent', role: 'Reply drafts for the shared mailboxes + internal knowledge hub' },
      { name: 'kakaocli', role: 'KakaoTalk collection and sending on staff Macs' },
      { name: 'n8n (self-hosted, not a repository)', role: 'Triggers for mail intake, product sync calls, and match judging (97 active workflows, 2026-09-23 inventory)' },
    ],
    examples: [
      'Example: one vendor support message goes from a staff Mac (collection) → the agent server (should we answer this vendor?) → the web app (the list of vendors to serve) and the knowledge hub (search), then back to a staff Mac to be sent.',
      'Example: one Spark question goes from the web app → the agent server → the web app API, 4 databases, and knowledge hub search.',
    ],
    nodes: [
      { id: 'vendor-cs', label: '① Vendor support', caseId: 'vendor-cs' },
      { id: 'ss-worktool', label: '② SS work tool (brand-tool)', caseId: 'ss-worktool' },
      { id: 'email-agent', label: '③ Email agent and knowledge hub', caseId: 'email-agent' },
      { id: 'company-os', label: '④ Spark · Work OS', caseId: 'company-os' },
      { id: 'field-fleet', label: '⑤ Staff PC deployment · ops infrastructure', caseId: 'field-fleet' },
      { id: 'instagram-dm', label: '⑥ Instagram DM automation (dormant)' },
    ],
    layers: [
      {
        name: 'People',
        desc: 'The web app (brand-tool, 14 live screens) · the Kakao CS Copilot extension panel (MV3) · Slack (briefings, summaries, outage alerts). Human control comes from approval cards inside Spark chat (Tool Registry rechecks the approval row in the database), a hold queue for personalized KakaoTalk campaigns with 500 or more recipients, and the vendor support test-room switch and staff panel. What actually runs after approval is creating an issue or pausing a tool.',
      },
      {
        name: 'Agents',
        desc: 'I built Work OS, Spark, and Tool Registry on top of a fork of the open-source Paperclip. Five agents are in daily operation: vendor support, influencer CS, Supervisor, Hermes, and Spark (services with a schedule or intake loop, plus Spark). High-volume paths go through LiteLLM → Gemini 2.5 Flash. The tool agents that work Paperclip issues (the CEO agent and others) run on a Claude Code subscription login. If the login drops, they fall back to Hermes (Gemini) automatically, and Slack gets an alert.',
      },
      {
        name: 'Knowledge',
        desc: 'LightRAG (Neo4j + pgvector) with 13 workspaces (email-agent). Vendor support reaches it through knowledge-mcp, Spark calls email-agent search directly, and brand-tool sales partner matching uses vector (naive) search.',
      },
      {
        name: 'Field',
        desc: '11 staff PCs registered (6 Mac, 5 Windows, 2026-09-16). kakaocli on Macs, a read-only memory-scan collector on Windows, seller-finder workers, and Chrome extensions. One-line install, auto-update on a per-tool schedule, and a key per device.',
      },
      {
        name: 'Data and infra',
        desc: 'Servers and databases run on one GCP VM. 39 agent-company production containers (20 of them apps) + 5 email-agent Swarm stacks. 8 self-hosted Postgres instances (both repositories combined) and 6 PostgREST instances. LiteLLM (Gemini 2.5 Flash under 2 aliases, plain and JSON) and Langfuse for cost tracking (as of 2026-09-23). agent-company and brand-tool share one deploy lock.',
      },
    ],
  },
  cases: [
    {
      id: 'vendor-cs',
      slug: 'vendor-cs',
      logo: '/images/v2/logo10.png',
      status: 'staged',
      statusNote: 'collection and logging are in production · summaries go to a few recipients · auto-replies limited to a test room since 2026-09-15 · real vendor replies go through the staff panel',
      title: 'Vendor support — an agent that gathers vendor inquiries scattered across staff KakaoTalk accounts and answers them from company knowledge',
      shortTitle: 'Vendor support agent',
      period: '2026-06 to present',
      role: ROLE,
      chain:
        'styleseller-kakaocli (staff Macs) → agent-company (collector, vendor agent, chatbot, sender, staff panel extension) → brand-tool (list of vendors to serve, products, proposals) · email-agent (knowledge search)',
      oneLiner: 'Vendor KakaoTalk chats were scattered across staff accounts. I collect them on staff PCs, with no official API, and log them in one place.',
      tldr: [
        "Vendor inquiries that arrived in staff members' personal KakaoTalk are collected on staff PCs and logged per vendor in a ledger and a sheet.",
        "The agent answers from company knowledge, and three layers keep other vendors' terms out of the answer.",
        'Auto-replies sit behind a test-room switch; real vendor replies are edited and sent by staff in the staff panel.',
      ],
      problem: [
        '"Vendor" in this case covers brands and sales partners: the brands (suppliers) that supply products and the sales partners (companies that run group buys with their own sellers). A group buy is a time-limited sale run by an influencer.',
        "Vendor inquiries came into vendor chat rooms in each assigned staff member's personal KakaoTalk.",
        "KakaoTalk is Korea's dominant messenger, and personal chats have no official API. A server alone could neither read nor send those chats.",
        "The vendor rooms lived in staff members' personal KakaoTalk, and there was no place to see each vendor's conversations together.",
      ],
      constraints: [
        'No official API. Collection uses local data change detection on staff PCs. Sending uses KakaoTalk UI automation on staff Macs.',
        'Collection covers only chats that arrive after install, on the PCs where it is installed. The Mac side drops anything before the install time, and the server drops anything before a cutoff date.',
        'KakaoTalk updates break the collection method. On 2026-09-15 I redesigned the Windows collector to work read-only.',
        "These messages go to real vendors. If one vendor's terms leak to another, it can't be undone.",
      ],
      judgments: [
        {
          choice: 'Answer general inquiries without handoffs or follow-up questions',
          why:
            'Even after I blocked handoffs, the tool was still there, and the bot sent a promise nobody would keep: "We\'ll get back to you after checking with the person in charge." For the same procedural question, it sometimes asked back and sometimes answered, at random. So on 2026-09-02 I removed the handoff tool and follow-up questions. There are two exceptions. Other vendors\' information stays blocked, and the bot checks with the vendor only when it\'s unclear whether a proposal was already sent. Price inquiries reuse the existing proposal and send it automatically (08-08).',
        },
        {
          choice: 'Rules trigger, the model decides',
          why:
            'When the regex was allowed to block, it skipped the LLM and blocked silently. So I kept the regex only as a first-pass trigger. A temperature 0 LLM makes the final call within 5 seconds, and it fails closed if the check fails.',
        },
        {
          choice: 'The test-room switch is a code default',
          why:
            "There were 13 places that scheduled bot replies. I put gates at the 2 places where the flow converges (3 functions in the vendor agent, and the chatbot entry point). I hardcoded the default to the test room ID, because the VM .env doesn't follow releases. Setting it to * turns it on everywhere. I kept 2 snapshot branches as rollback points.",
        },
        {
          choice: "When it can't decide, hold",
          why:
            "If the list of vendors to serve can't be fetched, the message is marked UNDECIDED. That blocks only auto-sending and keeps the draft. A network outage never turns into a lost vendor inquiry.",
        },
        {
          choice: 'Stage by room',
          why: 'The first plan was a traffic-percentage rollout (5%→20%→50%→100%). The actual stages use a per-room allowlist and a kill switch.',
        },
        {
          choice: 'No company-wide tools for an external vendor chatbot',
          why: 'The Spark MCP tools, which query the whole company, were also open to the chatbot that answers outside vendors. On 2026-08-13 I removed them from the tool schema and blocked their execution (fail-closed). The chatbot uses only vendor support lookup tools.',
        },
        {
          choice: 'One model',
          why: 'The vendor support path uses only LiteLLM → Gemini 2.5 Flash. I tried moving the checkers to Claude Haiku and reverted it on 08-12.',
        },
      ],
      systemSteps: [
        {
          title: 'Collection (staff PCs)',
          points: [
            'On Macs, kakaocli detects local data changes and sends them to the server. On Windows, a collector deployed from the installation host sends them the same way.',
            'The local checkpoint moves forward only after the server confirms receipt.',
          ],
        },
        {
          title: 'Logging (agent-company vendor agent, GCP VM)',
          points: [
            "Writes each vendor's conversation to a ledger, a sheet, and Drive. An async worker loads the raw text into the knowledge hub.",
            'A server-side floor drops past conversations from before the cutoff date. The server enforces this no matter which version is installed on the PC.',
          ],
        },
        {
          title: 'Gate (agent-company ↔ brand-tool)',
          points: ["Right before drafting or sending, the vendor ID in the room name is checked against brand-tool's list of vendors to serve. Then the message must pass the test-room switch."],
        },
        {
          title: 'Answer (agent-company chatbot, GCP VM)',
          points: [
            'A tool-calling loop looks for evidence.',
            'Tools: knowledge hub search (through knowledge-mcp; every turn it checks past cases and the help center first, and can search 6 workspaces in total, including vendors, products, and company knowledge), the internal manual, brand-tool product, settlement, and recommendation lookups, and proposal copy generation',
            'The Spark tools that query the whole company are blocked on this channel (fail-closed).',
            "Checks: checkers for grounding, persona, turn, and product topic; substitution of other vendors' names; an LLM check for other vendors' information",
          ],
        },
        {
          title: 'Sending (agent-company → staff Mac)',
          points: ['A reply that passes the checks becomes a send job. A local sender on the staff Mac picks up the job, sends it with kakaocli, and confirms delivery. The run is also recorded in Tool Registry.'],
        },
        {
          title: 'Staff panel (Kakao CS Copilot Chrome extension)',
          points: [
            'Vendor inquiries show up as cards. In the test room, the bot draft shows up too.',
            'When staff write or edit a reply and send it, it goes out through the same local sender. Outside the test room, this is how real vendors get answered.',
          ],
        },
        {
          title: 'Learning and alerts',
          points: [
            "Twice a day (09:30 and 18:10), the day's conversations are written up as a wiki per vendor and loaded into the knowledge hub. Drafts that people corrected and approved Q&A go in too.",
            'Slack only informs. Weekdays at 09:10 each staff member gets a briefing, and at 09:20 the CEO gets a PDF rollup. Window summaries go only to a few recipients, starting with rooms the chatbot answered. I turned off the Slack messages that asked people to reply.',
          ],
        },
      ],
      results: [
        'Collection, the ledger, sheets, and Drive are in production. Summaries go to a few recipients, starting with rooms the chatbot answered.',
        'Auto-replies ran in real vendor rooms from 2026-08 to mid-09 (from 09-01, only for messages that tagged the bot).',
        'Since 2026-09-15, the bot answers only in the test room until the improved version is validated. If a setting is missing, the bot fails toward not answering. Outside the test room, staff answer vendors in the staff panel.',
        'Vendor briefings run as a Paperclip Routine every weekday morning.',
        "Other vendors' information is blocked in three layers: workspace separation (07-27), substitution at the tool step, and a final LLM check.",
      ],
      limits: [
        'The collection-gap alert (30 minutes of silence during work hours → Slack) exists in code but is OFF by default. Turning it on is the next task.',
        'The Windows collector has no auto-updater. New versions arrive by reinstalling. The Mac collector updates once a day.',
      ],
      incidents: [
        {
          title: "Answered with another vendor's terms as if they were policy (2026-08-13, found in production)",
          symptom: "The bot stated another vendor's individual arrangement, such as a tax invoice issue date, as if it were company policy. The existing grounding checker missed most cases.",
          cause: 'Past support transcripts were stored with vendor names intact, so they came back in search mixed with shared knowledge.',
          fix: 'At the tool step, mentions of other vendors are replaced with an "another vendor" placeholder, and a deterministic gate sits at the final step.',
          guard:
            'On 08-18 the final gate mistook brand names for vendor names and stripped them. On 08-30 I changed regex blocking to "trigger + LLM check (temperature 0, 5 seconds, fail-closed)." If the check fails, the message is flagged for staff review and the reason shows on the staff screen.',
        },
        {
          title: 'Send jobs never finished and ended as permanent failures (2026-08-17 to 18)',
          cause: 'An accessibility call that queries the KakaoTalk window state ignored its timeout setting and waited forever.',
          fix: 'A hard timeout using a separate thread and a semaphore deadline.',
          guard: 'Since 09-08, after each send the sender rechecks the local record to confirm the message actually arrived.',
        },
        {
          title: 'Flood of past conversations (2026-09-16)',
          symptom:
            "Old collector versions on 3 Windows PCs installed that afternoon uploaded past conversations all at once. 2,500 messages arrived in 50 minutes, sheet writes backed up, and records from a staff member who installed later didn't show up for more than an hour.",
          fix: "I added a server-side floor. It drops anything before the cutoff date and returns 200 instead of 5xx. On a 5xx, the collector doesn't move its checkpoint and uploads the same data again.",
          guard: "Messages that can't be classified are kept. The collector side also records only from install time onward. The server floor works even before a PC receives the new version.",
        },
      ],
      stack: ['Python', 'FastAPI', 'Swift (macOS, kakaocli fork)', 'Node.js', 'Chrome Extension MV3', 'LiteLLM → Gemini 2.5 Flash (Vertex)', 'LightRAG + Neo4j + pgvector', 'MCP', 'Postgres + PostgREST', 'Paperclip Routine', 'Slack API', 'Google Sheets · Drive API'],
      scale: [
        'Vendor agent (collection, logging, gate): 61,437 lines of code · 600 commits · 107 test files (agent-company, 2026-09-23). The chatbot that writes the answers is a separate service shared with the content agent, so it is not in these numbers.',
        'CS Copilot extension and local sender (shared with influencer CS): 631 commits · 20,596 lines · 56 test files (same basis)',
        'kakaocli: fork of an MIT open-source project. 81 commits by me; Swift code grew from 3,904 to 6,595 lines (net +2,691) (2026-09-08)',
      ],
      architectureImages: [{ src: '/images/v3/vendor-cs-en.png', alt: 'Vendor support flow' }],
    },
    {
      id: 'ss-worktool',
      slug: 'ss-worktool',
      logo: '/images/logo7.png',
      status: 'live',
      title: 'SS work tool — from an Excel price-sheet calculator to the internal web app staff use',
      shortTitle: 'SS work tool (brand-tool)',
      period: 'Late 2026-03 to present',
      role: ROLE,
      chain: 'brand-tool → n8n → email-agent (knowledge hub) → agent-company (staff PC workers, send workers) → styleseller-kakaocli',
      oneLiner: 'Sales staff priced proposals by hand in Google Sheets. I moved that into a web app they use.',
      tldr: [
        'I replaced hand pricing in Google Sheets, done for every proposal, with a calculator and proposal screens in the web app.',
        'It grew to 14 work screens: supplier catalog intake, sales partner recommendations, seller discovery, and KakaoTalk campaigns to sellers.',
        'Code calculates the amounts. The LLM only returns a JSON of the fields to change.',
      ],
      problem: [
        "For every proposal, sales staff worked out the partner's and the seller's shares by hand in an Excel (Google Sheets) price sheet.",
        'Product and brand data were scattered across Google Sheets and the website database.',
        'Each time we sourced a new product, someone had to pick which sales partners (companies that run group buys with their own sellers) to pitch it to. A group buy is a time-limited sale run by an influencer.',
        'Finding Instagram influencer sellers was manual work, done with Claude Code against a document of listing rules.',
      ],
      constraints: [
        'Instagram blocks data center IPs (per the design doc). When we collected Coupang data, I tested moving the work to a server, and every attempt failed.',
        "KakaoTalk channel messages can only be sent through each manager's admin center login session, and CAPTCHAs and extra admin verification get in the way. KakaoTalk is Korea's dominant messenger.",
        "I couldn't put database keys on staff PCs. A shared key did leak once.",
      ],
      judgments: [
        {
          choice: 'Code owns the amounts; the LLM returns only a JSON of "fields to change"',
          why: 'This stops a failure where I asked it to change only the margin and it changed the price too.',
        },
        {
          choice: 'Check the pricing formulas cell by cell with the staff who use them',
          why: "The formulas are the company's pricing policy, so from 04-24 to 07-13 I matched the numbers with them. The 43 calculation test cases are that comparison sheet.",
        },
        {
          choice: 'Match candidates = rule score ∪ vector search, and the LLM makes the final call',
          why: 'Internal knowledge search widens the pool beyond what the rules catch, and the model gives each candidate a 0 to 10 score with a reason.',
        },
        {
          choice: 'Classify replies with a rules dictionary',
          why: 'A person has to be able to inspect the matching phrase, and only opt-outs are removed automatically. The reason: "If someone drops off the list without evidence, nobody can undo it."',
        },
        {
          choice: 'Seller finder runs on staff PC workers, one Instagram account per PC',
          why: 'Instagram blocks server IPs, and if two PCs hold the same account, their sessions keep pushing each other out.',
        },
      ],
      systemSteps: [
        {
          title: 'Pricing calculator and proposals (2026-03 onward)',
          points: [
            'I moved the formulas from two Google Sheets tabs into code. It calculates the partner supply price and margin for each product.',
            'There are two proposal types, partner proposals and seller proposals. They export to PDF and Excel, and staff can edit them by talking to a chatbot. The chatbot is an LLM behind an n8n webhook, and code recalculates the amounts.',
            'The vendor support agent opens the same proposal screen on the server, renders it to PDF, and puts it in the existing KakaoTalk queue.',
          ],
          chain: 'brand-tool chatbot → n8n → brand-tool calculation → brand-tool proposal screen',
        },
        {
          title: 'AI parsing of supplier catalogs (2026-04)',
          points: [
            'Gemini 2.5 reads PDFs, images, PPTs, Excel files, and URLs sent by brands (suppliers) and turns them into products, options, prices, and photos.',
            'For photos, it uses the originals embedded in the PDF first, and crops using coordinates from the model only when there are none.',
          ],
          chain: 'brand-tool intake screen → brand-tool parsing API → Vertex Gemini → brand-tool products → (on app registration) external CRM and SaaS',
        },
        {
          title: 'Sales partner matching and KakaoTalk pitches (2026-06 onward)',
          points: [
            'The recommendation target is the sales partner that will run a group buy with the product, not the brand (supplier).',
            'It starts when staff check products and click "find matching vendors" (벤더사 매칭찾기). The reverse direction (sales partner → matching products) also exists.',
            'It merges rule scores (group-buy history, category, inquiries, proposals, tags) with vector search candidates from the knowledge hub. The LLM judges them in batches of 30, and 5 points or higher counts as a match.',
            'Closed deals are tracked by sales partner + top-level category + a 60-day window.',
            'n8n writes the pitch copy, and the server enforces at most one send in the morning and one in the afternoon per sales partner per day.',
          ],
          chain:
            'n8n (group-buy history → sales partner profiles) → email-agent knowledge hub → brand-tool matching API → n8n LLM judgment → brand-tool send queue → agent-company Mac poller → kakaocli → sales partner KakaoTalk room',
        },
        {
          title: 'Seller finder (2026-09)',
          points: [
            'I moved Instagram influencer seller listing from manual Claude Code work to workers on staff PCs.',
            'The rules: walk hashtags → followers → contact path → view counts on 6 Reels (by default the top of the Reels tab; latest or most-viewed selectable) → dedupe → batches of 30.',
            'The server assigns a run only to workers installed under the login email of the staff member who created it. Between jobs, each worker compares sha256 hashes and updates itself.',
            "It runs only on real people's accounts and PCs. One account per PC, a daily cap on actions, and no code that writes comments or DMs automatically. It can be shut off remotely.",
          ],
          chain: 'brand-tool rules and runs → agent-company worker (staff PC) → brand-tool results and per-rule scorecard → n8n sheet mirror → Google Sheets, plus a Slack DM on completion',
        },
        {
          title: 'Personalized KakaoTalk campaigns (2026-08-24 onward)',
          points: [
            'It started as a port of the existing Node sender to TypeScript.',
            'Recipients are seller contacts already connected through the KakaoTalk channel. Seller-finder results are only matched against them by Instagram ID and email.',
            "An external CRM picks each seller's personalized products from sales history in their KakaoTalk room. brand-tool filters out products whose sale has ended and turns the rest into cards.",
            'Substitute products are added only when the CRM lookup succeeds and returns 0 results. A failed lookup never counts as 0.',
            'A Playwright channel worker on the VM sends channel messages, and kakaocli on a Mac sends personal chats. Sends to 500 or more recipients wait for approval.',
            'Replies are classified with a rules dictionary. Refusals show up as candidates, and a person clicks to confirm.',
          ],
          chain: 'brand-tool contacts, CRM matching, and cards → agent-company send DB → channel worker (VM) / personal-chat worker (Mac, kakaocli) → reply collection → brand-tool reply inbox',
        },
        {
          title: 'Product sync (a base layer with no screen)',
          points: [
            'An n8n schedule calls the brand-tool sync 3 times a day, and brand-tool fetches SaaS products itself, 20 pages × 500 items.',
            'It stops if the total count on any page shifts by more than 2%, or if it received less than 90%. It marks products as ended only when it received 1,800 or more.',
            'It never overwrites products that staff hid or values they corrected by hand.',
          ],
        },
      ],
      results: [
        '14 live screens staff log in to use (including the login and detail screens), with 6 top-level menus (Spark, Products, Proposals, Vendors, Sellers, Content) (as of 2026-09-23).',
        'Spark, the internal AI assistant, is the first item in the top menu (added 2026-07). Login lands on the product main page. Details are in the Spark · Work OS case.',
        'In the Content menu, marketing staff request blog posts, ad copy, captions, and card news, and agent-company agents make them and send them back (added 2026-06, now maintenance only).',
        'brand-tool is the staff web app and also the business data backend that the vendor support agent (list of vendors to serve, products, proposal PDFs) and Spark (14 `/api/spark/*` routes) call.',
        'The KakaoTalk pitch queue for sales partners is in production (as of 2026-09-24).',
        'Personalized KakaoTalk campaigns reached 261 people on 2026-09-22 (value stated in the commit message).',
        '9 seller-finder worker PCs registered (as of 2026-09-18).',
        "I closed the external partner portal (2026-04-28 to 09-17) with a switch and kept the code. Its features moved into the company's official partner center, and I left redirects so old links still work.",
      ],
      limits: [
        'The three guards in product sync have no tests.',
        'CI only builds an image on every push to main. There is no test or type-check gate.',
        "Seller finder and the campaigns are loosely connected. Of 3,036 rows in the KakaoTalk contact ledger, 711 have an Instagram ID (measured 2026-09-09), so most newly found sellers have no KakaoTalk contact. Server-scheduled sending landed in code on 2026-09-23 and isn't in production yet.",
      ],
      incidents: [
        {
          title: 'Shared worker key exposed (2026-09-10)',
          symptom: 'A shared key was in the config file of a zip on the public installation host.',
          cause: 'Every staff PC worker connected to the server with the same single key.',
          fix: 'I switched to one-time install tokens and a device key per PC. The server stores only sha256 hashes and cuts access with a revocation timestamp.',
          guard: 'I wrote the cleanup step into a code comment: once the switch is done, delete the shared key from the server environment variables so the exposed key stops working.',
        },
        {
          title: 'LLM scores varied by chunk (2026-07-15)',
          symptom: 'The same sales partner got a different score in each 30-item chunk. Across 4 chunks it scored 5, 5, 7, and 9.',
          cause: 'The last value overwrote earlier ones, and the model sometimes skipped items.',
          fix: 'Keep the highest score, re-ask only for the skipped items, and collect candidates as a union.',
        },
        {
          title: 'In-progress runs mass-cancelled after a server outage (2026-09-20)',
          symptom: 'The server was down for two days. After recovery, the first cleanup pass cancelled all 6 in-progress seller-finder runs.',
          cause: 'The rule "worker not seen for 3 minutes" counted the server\'s own downtime as the workers being gone.',
          fix: 'Cleanup now records the interval between its runs. If the gap is more than 2 minutes, it treats it as server downtime and resets the liveness baseline.',
          guard: 'I kept a psql reproduction test. The old function cancels 2/2; the new one cancels 0.',
        },
      ],
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind 4', 'Vitest', 'Postgres 16 + PostgREST', 'Vertex AI Gemini 2.5', 'LightRAG (email-agent)', 'n8n', 'Playwright', 'Docker', 'GitHub Actions', 'kakaocli (Swift)'],
      scale: [
        '1,458 brand-tool commits (excluding merges, main, as of 2026-09-23)',
        '134 API routes, 130 database migrations, 205 test files (same basis)',
        'Sales partner matching is the feature area with the most commits (309, excluding merges, counted over the matching screens, APIs, and related lib and component paths). Seller finder is 11K lines in the server core + 13K lines in the staff PC worker (the worker count includes tests).',
        'Personalized KakaoTalk campaigns total 34K lines across brand-tool and the agent-company send workers (tests included).',
      ],
      architectureImages: [{ src: '/images/v3/ss-worktool-en.png', alt: 'SS work tool flow' }],
    },
    {
      id: 'email-agent',
      slug: 'email-agent',
      logo: '/images/logo8.png',
      status: 'partial',
      statusNote: 'brand and order shared mailboxes in production · only CEO-inbox auto-drafts stopped on 2026-09-02 (classification and sent-mail learning continue, as of 2026-09-24)',
      title: 'An email agent that enforces grounding, and an internal knowledge hub',
      shortTitle: 'Email agent · knowledge hub',
      period: '2026-03-31 to present',
      role: ROLE,
      chain:
        'Gmail (shared mailboxes, CEO inbox) → n8n → email-agent (FastAPI, LightRAG) → assignee Gmail drafts (CEO-inbox Slack alerts stopped) / email-agent LightRAG → agent-company (knowledge-mcp, Spark, vendor support) · brand-tool (sales partner matching)',
      oneLiner: 'For brand onboarding, group-buy, and partnership emails, it drafts replies grounded in company knowledge.',
      tldr: [
        "For onboarding, group-buy, and partnership email in the brand and order shared mailboxes, it leaves a grounded reply draft in the assignee's Gmail, and a person sends it.",
        'Every sentence in a draft is checked for grounding, and the draft is rewritten if violations remain.',
        'The same knowledge hub also serves vendor support, Spark, and sales partner matching.',
      ],
      problem: [
        'The brand and order shared mailboxes get inquiries about brand onboarding, group buys (time-limited sales run by an influencer), partnerships, and proposal reviews.',
        "Replies must state company facts (terms, past agreements, contacts) correctly. The first version's flat vector search couldn't connect companies, contacts, and past requests.",
        'LLM drafts can slip in unsupported sentences. They had to be filtered out before a person saw the draft.',
      ],
      constraints: [
        'No automatic external sending. The system stops at the draft, and a person sends it.',
        'To prevent out-of-memory errors, deploys use stop-first, so every deploy drops responses for about 40 seconds (Docker Swarm, value stated in the commit message).',
        'Several internal systems share one knowledge hub. Load from one consumer must not stall the others.',
      ],
      judgments: [
        {
          choice: 'Create the Gmail draft first and let a person send it',
          why: 'For the shared mailboxes, the draft goes into the assignee\'s Gmail, and staff edit and send it. For the CEO inbox, Slack got a "Draft Ready" alert if the draft passed verification, or a "Needs Review" alert if not, each with a send button (this draft step stopped on 2026-09-02).',
        },
        {
          choice: 'Instead of more prompt tuning, a critic catches problems and forces a rewrite',
          why: 'When it finds a violation, the draft is rewritten and checked again by the same critic.',
        },
        {
          choice: 'Only emails the CEO actually sent count as "confirmed facts"',
          why: 'AI drafts are excluded as a source of facts (CEO knowledge wiki).',
        },
        {
          choice: 'Search load is split by consumer',
          why: 'Each workspace gets its own connection pool, graph traversal is narrower, and the sales partner matching path is pinned to naive mode.',
        },
      ],
      systemSteps: [
        { title: 'Intake', points: ['Every 5 minutes, n8n pulls new Gmail messages incrementally and calls email-agent parsing.'] },
        {
          title: 'Classification and search',
          points: [
            'A classifier sorts the intent. Then it picks a workspace and searches LightRAG (Neo4j + PostgreSQL/pgvector).',
            'If the evidence is thin, it rewrites the query and searches again (at most 2 rewritten queries).',
          ],
        },
        {
          title: 'Draft, with grounding enforced in four steps',
          points: ['Rule-based validator', 'LLM critic (14 check and verification modules)', 'After a rewrite, a second check by the same critic', 'Scoring on 7 criteria (faithfulness to evidence, relevance, tone, and more)'],
        },
        {
          title: 'Gmail draft (CEO inbox: Slack alert and send button, stopped 09-02)',
          points: [
            "For the shared mailboxes, the draft goes into the assignee's Gmail, and staff edit and send it.",
            'For the CEO inbox, it sent Slack a Draft Ready / Needs Review alert with a send button. That draft step stopped on 2026-09-02.',
          ],
        },
        {
          title: 'Learning from sent mail',
          points: ['It scans sent mail with a persistent cursor. The difference between the draft and what was sent goes into the graph as a correction document, and the style book is updated.'],
        },
        {
          title: 'Internal knowledge hub',
          points: [
            'Internal systems share the same 13 LightRAG workspaces.',
            'Vendor support (brands and sales partners): through agent-company knowledge-mcp. Influencer CS uses it too.',
            'Spark: calls email-agent search directly and rejects workspaces outside the allowlist (fail-closed).',
            'brand-tool sales partner matching: calls the knowledge hub search API in naive (vector) mode',
          ],
        },
      ],
      results: [
        'Status: staff still use the brand and order shared mailboxes every day. Only the CEO-inbox auto-drafts were cut at the draft step on 2026-09-02, as an operational decision; classification and sent-mail learning for that inbox continue.',
        'Classification, sent-mail learning, and the draft workflow for the brand and order shared mailboxes are active as of 2026-09-23.',
        'Vendor support, influencer CS, Spark, and sales partner matching share 13 LightRAG workspaces.',
        'On 2026-08-18 I changed CI/CD. Only images that pass a pytest gate get deployed.',
        'The database moved from Supabase cloud to self-hosting on the VM (PostgREST).',
      ],
      limits: [
        'After the switch to Agentic RAG, draft quality regressed. I found the cause in the commit history (a missing rerank step). There is no measurement of the effect after the fix.',
        'The draft path ran only on the fallback without any error, so the problem stayed hidden (first incident below).',
      ],
      incidents: [
        {
          title: 'The draft path ran on a different model than configured (cleaned up 2026-08-02)',
          symptom: 'Drafts were configured for the Claude path, but the API key was empty, so every call threw an exception and only the Gemini fallback ran.',
          cause: 'The fallback accepted requests without raising any error, so results looked normal even with the primary model dead.',
          fix: 'On 08-02 I made drafts call Gemini directly and removed the Claude attempt and the fallback structure.',
        },
        {
          title: 'The shared knowledge hub overloaded twice (2026-07-10, 08-12)',
          symptom:
            'On 07-10, 8 workspaces shared one connection pool. Constant queries from the influencer CS bot took the whole pool, and even sales partner matching searches returned 500. On 08-12, Neo4j overload warnings kept repeating.',
          cause: 'The shared pool, plus the default top_k=40, which swept a wide part of the graph on every query.',
          fix: 'I split it into a connection pool per workspace (07-10) and lowered top_k to 8 (08-12).',
          guard: "The heavy sales partner matching path is pinned to naive mode, which doesn't traverse the graph.",
        },
        {
          title: 'Sent-mail learning lost data on every deploy (fixed 2026-08-29)',
          symptom: 'Some sent emails never made it into learning, and with no alert, nobody noticed.',
          cause:
            'When the time-window scan overlapped with the no-response window during a deploy, that stretch was lost for good. I counted it from 2 weeks of nginx access logs: 48 of 1,943 requests failed (2.5%), and the longest gap lost about 68 minutes of mail (values stated in the commit message).',
          fix: 'I switched to a persistent cursor that remembers only the last successful point.',
          guard: 'I applied the findings from a cross review.',
        },
      ],
      stack: ['Python', 'FastAPI', 'asyncio', 'LightRAG', 'Neo4j', 'PostgreSQL + pgvector', 'PostgREST', 'Vertex AI Gemini 2.5 Flash', 'Gemini embeddings (3072 dimensions)', 'Claude (draft path, added 2026-04, removed 08-02)', 'n8n', 'Gmail API', 'Slack', 'Docker Swarm', 'GitHub Actions', 'pytest', 'Pyright (strict)'],
      scale: [
        '1,418 commits (excluding merges, org repository, first commit 2026-03-31 to last commit 09-02). The busiest month was August (449 commits).',
        '44,877 lines of product code + 28,254 lines of tests (Python)',
        '26 API routers, 85 endpoints',
        '13 LightRAG workspaces, 14 critic and validator modules',
      ],
      architectureImages: [{ src: '/images/v3/email-agent-en.png', alt: 'Email agent pipeline' }],
    },
    {
      id: 'company-os',
      slug: 'company-os',
      logo: '/images/logo6.png',
      status: 'live',
      title: 'Spark · Work OS — an internal operations platform where agents run safely',
      shortTitle: 'Spark · Work OS',
      period: '2026-05 to present',
      role: ROLE,
      chain: 'brand-tool (Spark screen, lookup APIs) → agent-company (Paperclip fork — Work OS gateway, Spark, Tool Registry, MCP) → email-agent (knowledge search) + 4 work databases (read-only roles)',
      oneLiner: 'Staff ask questions of 4 work databases in plain language and get answers with sources.',
      tldr: [
        'In Spark, the first item in the web app\'s top menu, staff ask 4 work databases questions in plain language and get answers with sources.',
        "Databases are queried only through read-only roles, and the server looks up the requester's role in the database again.",
        'Action tools are registered in Tool Registry, which defaults to dry run; what actually runs after approval today is creating an issue or pausing a tool.',
      ],
      problem: [
        "The work data staff use was split across 4 databases: the work tool, personalized KakaoTalk campaigns, vendor support (brands and sales partners), and Paperclip. KakaoTalk is Korea's dominant messenger.",
        'The email agent, DM bot, and n8n that were already running each worked on their own.',
        'As of 2026-05-20, the agent platform was installed but had 0 registered agents.',
      ],
      constraints: [
        "I build and run it alone. I use Paperclip's issues, approvals, heartbeats, and UI as they are upstream, and built the staff screen separately in brand-tool.",
        "External sends (KakaoTalk, email) can't be undone. They must go out once, and only if approved.",
        "Agents send SQL straight to internal databases. A single code guard wasn't enough to trust.",
      ],
      judgments: [
        {
          choice: 'No Temporal or LangGraph',
          why:
            "The first plan was a 5-layer stack with Temporal, LangGraph, LiteLLM, and MCP. With 0 agents, that stack only adds operating cost. I split the work instead: tasks are issues, triggers are n8n, reasoning is Claude Code agents, and simple processing is FastAPI services. I wrote this into the repository's CLAUDE.md ban list.",
        },
        {
          choice: 'Models are chosen by the type of work',
          why:
            'I removed Anthropic models from LiteLLM for cost reasons (2026-06-06). High-volume paths like Spark, vendor support, and influencer CS go through LiteLLM → Gemini 2.5 Flash. The tool agents that work Paperclip issues (the CEO agent and others) run on the Claude Code CLI on the VM, authenticated with a subscription login. If the login drops, they switch to Hermes (Gemini) automatically, and Slack gets an alert.',
        },
        {
          choice: 'Execution defaults to dry run',
          why:
            'The company-wide switch WORKOS_EXECUTION_LIVE=false is the default. Only tools with their own live toggle turned on actually execute. That let me lay down the full execution path first and then turn tools on one at a time.',
        },
        {
          choice: 'Spark evals store the expected answer as SQL',
          why:
            'The expected answer is recomputed on every run, because an answer like "19 this week" is wrong a day later. Each case runs 3 times and is judged by majority vote, and the 8 cases are based on measured failures and incidents.',
        },
        {
          choice: 'Observability only where it gets used',
          why: 'On 2026-07-18 I removed Langfuse because "nobody has looked at it in 2 months." I restored it on 08-03 and rewired it with a cost callback on 08-29, and now use it to track Vertex costs.',
        },
      ],
      systemSteps: [
        {
          title: 'Spark screen',
          points: ['Staff ask in Spark, the first item in the web app\'s top menu (login lands on the product main page). brand-tool relays the request to agent-company over SSE.'],
        },
        {
          title: 'Work OS gateway (agent-company, GCP VM)',
          points: ['The Paperclip server recomputes the role at the gateway. It ignores any role in the request body and looks it up in the database in order: email → user → company membership.'],
        },
        {
          title: 'Spark core',
          points: [
            'It runs router → tool loop → synthesis. The model is Gemini via LiteLLM.',
            'brand-tool lookup APIs (14 `/api/spark/*` routes, shared with the vendor support bot, origin/main 2026-09-23); Spark calls 6 of them: product search, matching, best sellers, proposal totals, group-buy totals, allowlist lookup',
            'run_sql: queries each of the 4 databases through a read-only role',
            'knowledge-mcp knowledge search',
            'email-agent search: rejects any workspace outside the allowlist (fail-closed).',
          ],
        },
        {
          title: 'Sources',
          points: ['Answers come with sources, and the screen shows "searched" and "queried" separately. The catalog of usable tools is filtered by persona first.'],
        },
        {
          title: 'Approval and execution',
          points: [
            'Proposed actions from Spark\'s CEO mode (Gemini), creating an issue or pausing a tool, are saved as approval rows, and a person approves them on a confirmation card inside Spark chat.',
            'Right before execution, six checks run in order: not registered → kill switch → blocked → role → approval row rechecked in the database → idempotency key.',
            'What actually runs after approval is those two internal writes. The 4 external-send tools are at the register-and-record stage, and vendor support sends go to their own send queue, not through this gate.',
          ],
        },
        {
          title: 'Paperclip agents',
          points: [
            'Paperclip agents attach to the same server. Paperclip\'s CEO agent (a tool agent that takes and works issues) runs on a Claude Code subscription login. When the login drops, these claude_local agents switch to Hermes (Gemini).',
            'The vendor support backend, influencer CS, Supervisor, and Hermes attach as http services.',
          ],
        },
      ],
      results: [
        'Spark is in production as the first item in the brand-tool top menu.',
        'Tool Registry has 20 tools registered (side-effect levels: none 13, write_internal 3, external_send 4; org/release, 2026-09-23). What actually runs after approval is creating an issue or pausing a tool.',
        'Human approval happens inside Spark chat. I hid the separate approval inbox from the menu on 2026-07-19 and moved approvals into in-chat confirmation cards on 07-23.',
        '22 agents are defined in code (org/release, 2026-09-23), and 5 are in daily operation (the vendor support backend, influencer CS, Supervisor, and Hermes, which have a schedule or intake loop, plus Spark, which staff use). Vendor support answers only in the test room.',
        'Commerce research (Spark request → review collection through a staff Chrome extension → VOC Excel and PDF) is built and passed E2E validation (2026-09-09). Nobody uses it in daily work yet.',
      ],
      limits: [
        "I run Spark evals by hand, and the result files aren't kept in the repository.",
        "The Hermes fallback answers once and ends. That's why I added a separate alert for dropped logins.",
        "I don't use Paperclip's budget feature (budgetMonthlyCents: 0). Many of the 22 defined agents have only a prompt and no evidence of ever running.",
      ],
      incidents: [
        {
          title: 'Fallback with no error (twice)',
          symptom: 'The CEO agent ran on a one-shot Gemini fallback without raising any error (08-27 to 09-08, 09-10 to 09-23).',
          cause: "The Claude login token changes on every refresh, and each restart copied the host's dead token over the container's token.",
          fix: 'A job now writes the token the container refreshed back to the host every 10 minutes, so the token copied in at restart is always current. It never writes back an empty token (09-23).',
          guard: 'Login status is checked periodically, and Slack gets an alert when it drops.',
        },
        {
          title: 'One set_config call turned off read-only (2026-08-27)',
          symptom: 'In a live test, a single set_config call turned off read_only and statement_timeout.',
          fix: 'A blocklist of risky functions, a new connection per query, an EXPLAIN cost cap of 1,000,000, a 500-row/100KB limit, and a 10-second limit.',
          guard: "Final enforcement lives in the database's read-only role. If a code guard is bypassed, the role still blocks as the second layer.",
        },
        {
          title: 'Unauthenticated database exposure (2026-08-27)',
          symptom: 'I found an unauthenticated PostgREST open on the public network.',
          fix: 'I removed the public NIC binding, put an nginx apikey gate in front, and made startup fail if the key is empty.',
          guard: 'I downgraded the PostgREST anon role to a role with only the table permissions it needs. Access logs are kept permanently.',
        },
      ],
      stack: ['TypeScript', 'Express', 'Drizzle', 'React', 'Python', 'FastAPI', 'MCP', 'LiteLLM', 'Vertex AI Gemini 2.5 Flash', 'Claude Code CLI', 'Postgres', 'PostgREST', 'nginx', 'Langfuse', 'n8n', 'Docker Compose', 'GitHub Actions', 'GCP VM'],
      scale: [
        '4,319 commits by me (excluding merges and upstream, agent-company org/release, 2026-05-16 to 09-23)',
        'This case (Work OS gateway, Spark, Tool Registry, commerce research) is 120 new files and 27,506 lines inside the Paperclip server (blank lines and 51 test files with 12,880 lines included, org/release 2026-09-23).',
        'Most of my code in the same repository is KakaoTalk work automation. The 8 KakaoTalk-related paths add up to 181K lines (same basis).',
        '4 MCP servers I built (knowledge-mcp, paperclip-mcp, Spark MCP, vendor wiki MCP) + 1 third-party integration (2026-09-23)',
      ],
      architectureImages: [{ src: '/images/v3/company-os-en.png', alt: 'Spark · Work OS architecture' }],
    },
    {
      id: 'field-fleet',
      slug: 'field-fleet',
      logo: '/images/logo9.png',
      status: 'live',
      statusNote: 'the Instagram DM extension is dormant',
      title: "Staff PC deployment and operations — doing on staff PCs what the server can't, safely",
      shortTitle: 'Staff PC deployment · ops infrastructure',
      period: '2026-02 to present (Instagram DM extension 2026-02 to 07, KakaoTalk tools 2026-05 onward)',
      role: ROLE,
      chain:
        'kakaocli (staff Macs) · Windows collector → agent-company (installation host, relay, workers, sender, VM compose) → brand-tool (seller-finder jobs, worker keys, VM deploy) · email-agent (a stack on the same VM)',
      oneLiner: 'KakaoTalk and Instagram work that has no official API runs on staff PCs.',
      tldr: [
        'KakaoTalk and Instagram work that the server is blocked from runs on staff Macs and Windows PCs, and I can shut it off remotely.',
        'One-line install, per-tool auto-update, and a key issued per PC mean no database keys live on the PCs.',
        'The day the server database hit its plan limit and stopped, I moved it to self-hosting the same day without changing the app code.',
      ],
      problem: [
        "Instagram cold DMs and personal KakaoTalk chats have no official API. KakaoTalk is Korea's dominant messenger.",
        "Vendor rooms, where inquiries from vendors (brands and sales partners) arrive, lived in staff members' personal KakaoTalk.",
        'Instagram blocks data center IPs (per the design doc). When we collected Coupang data, I tested moving the work to a server, and every attempt failed.',
        "So the place where the work could happen was the staff's Macs and Windows PCs.",
      ],
      constraints: [
        'No official API. The tools have to drive the KakaoTalk app and the browser directly.',
        'Every PC is different. Macs and Windows are mixed, some PCs have no admin rights, and KakaoTalk updates break the collection method.',
        'Account risk. Instagram accounts belong to real people, and if two PCs hold one account, their sessions keep pushing each other out.',
        "I couldn't put company database keys on the PCs.",
      ],
      judgments: [
        {
          choice: 'Staff PCs as automation nodes',
          why: "The server is blocked from Instagram and KakaoTalk work, so the work runs on people's own accounts and PCs, and I can shut it off remotely. KakaoTalk collection covers only chats after install, on the PCs where it's installed.",
        },
        { choice: 'Per-device credentials and worker keys', why: 'I dropped the shared secret. Each PC gets its own key, issued and revoked separately.' },
        {
          choice: 'Version = sha256 of the release zip, and the updater never touches device registration',
          why:
            'On 09-16 I confirmed that "making people reinstall doesn\'t work in practice." I dropped auto-deploying the Coupang research extension from our own server, because not a single PC had it installed, and bundled the extension into the CS installer instead.',
        },
        {
          choice: 'Windows KakaoTalk collection is a read-only scan of process memory',
          why: "It doesn't inject code into the KakaoTalk process, and it doesn't rely on fixed addresses that change with every build. That makes it less sensitive to KakaoTalk auto-updates.",
        },
        {
          choice: 'Deploy only committed images',
          why: 'If the CI image is missing, the deploy fails and does not fall back to :latest ("Running code from a commit you didn\'t deploy is worse than a failure"). The personalized KakaoTalk campaign worker is swapped only when 0 sends are in progress.',
        },
      ],
      systemSteps: [
        {
          title: 'Install (agent-company installation host)',
          points: ['Staff install the tool bundle with a one-line command from the install page (bash on Mac, PowerShell on Windows). Most of it installs without admin rights. Only Macs missing the developer tools, Homebrew, or Node ask for a password, once. The seller-finder installer never uses admin rights.'],
        },
        {
          title: 'Register (agent-company server · brand-tool)',
          points: ['The installer receives and stores a per-device credential. Seller finder uses a one-time install token to get a per-PC key, and the server stores only its sha256.'],
        },
        {
          title: 'Work (staff PCs)',
          points: [
            'Mac: kakaocli detects local data changes, and the relay sends them to the server.',
            'Windows: the collector scans KakaoTalk process memory read-only.',
            'Seller-finder worker: picks up jobs created by brand-tool and runs them in a headless browser. Seller finder looks for influencer sellers who run group buys.',
            'Personalized campaign send worker (Mac): picks up the campaign queue created in brand-tool and sends it with kakaocli.',
            'Kakao CS Copilot (MV3): reads messages arriving in the KakaoTalk channel admin web without depending on the page layout, and fills in the draft box.',
            'Open chat announcement sending: a VM cron job fills the queue, and a Mac sends.',
          ],
        },
        {
          title: 'Update (zip + sha256 on the installation host)',
          points: ['Each tool has its own schedule. The seller-finder worker updates between jobs, the Mac KakaoTalk relay once a day, and the Coupang research extension 3 times a day.'],
        },
        {
          title: 'Monitoring',
          points: ['Workers report the hash of the running code to the server, and the relay reports its app version. On Windows, a 1-minute watchdog restarts the collector. A monitoring cron job that runs after the send deadline watches open chat sends.'],
        },
        {
          title: 'Server',
          points: ['Servers and databases run on one GCP VM. Container and database counts are in the Scale section. agent-company and brand-tool share one deploy lock.'],
        },
      ],
      results: [
        '11 staff PCs registered (6 Mac, 5 Windows, per the 2026-09-16 ops record, including my own PC and shared-account PCs)',
        '9 seller-finder worker PCs (2026-09-18). I turned 1 Windows PC off on purpose.',
        'I found and closed a hole where the local sender accepted requests from any web page (CORS *) before it caused an incident (09-15). It now accepts only the extension and local clients.',
        'The Instagram DM extension has been dormant since its last commit on 2026-07-01.',
      ],
      limits: [
        "The Windows KakaoTalk collector doesn't follow the update rule above yet. It has no auto-updater, so new versions arrive by reinstalling. That's the next task.",
        "Collection-gap monitoring is OFF by default in code. It sends alerts only after it's turned on.",
      ],
      incidents: [
        {
          title: "The work tool's whole API stopped when the cloud database hit its transfer limit (2026-08-20)",
          symptom: "brand-tool's dedicated cloud database went over its data transfer limit, and every API call was blocked.",
          cause: 'The plan limit of the managed cloud database. On 08-25 a different database stopped again because of a billing suspension.',
          fix: 'A full search confirmed that all 27 API routes used only the REST protocol. I stood up Postgres + PostgREST + nginx on the VM and migrated and recovered the same day, with the app code unchanged.',
          guard: 'All 4 databases moved to self-hosting the same way (08-06 to 08-25; this one on 08-20). The code stayed; only the URLs changed.',
        },
        {
          title: 'Open chat sends that went out only halfway',
          symptom: 'On the first send (09-07), one room got the photo but not the text. On 09-19 to 21, all 6 sends (2 rooms × 3 days) failed, and nobody noticed.',
          cause:
            'The upload wait was a fixed delay that never checked for completion. I proved it by lining up KakaoTalk\'s local record timestamps with the logs: a 0.6-second gap. The three days of failures turned out to be a "no KakaoTalk main window" state, found after I ruled out a permissions theory.',
          fix: 'kakaocli confirms delivery and resends only the missing text. If the window is missing, it restarts the KakaoTalk app and retries 1 time, and only after confirming nothing was sent.',
          guard: 'Slack alerts that include the failure reason, and a monitoring cron job that runs after the send deadline.',
        },
        {
          title: 'Two devices holding the same resource (the most frequent type)',
          symptom: 'Automatic proposal sending alternated between success and failure (07-29). The vendor support panel list flickered every 15 to 25 seconds (09-22).',
          cause: 'A development Mac picked up the same queue as the dedicated remote Mac, and two devices read the same KakaoTalk account, so their unread counts overwrote each other.',
          fix: 'On any Mac other than the designated one, the send poller exits right away. A 0 unread count that arrives within 30 seconds after the count just went up is ignored.',
          guard: 'For seller finder, the server enforces "one Instagram account per PC, and the most recent login wins."',
        },
      ],
      stack: ['JavaScript / Node.js', 'Chrome Extension MV3', 'Chrome DevTools Protocol', 'Swift (macOS)', 'Python', 'Bash', 'PowerShell', 'launchd', 'Playwright', 'Docker', 'Docker Compose', 'Docker Swarm', 'nginx', 'GitHub Actions', 'GCP VM', 'PostgreSQL', 'PostgREST'],
      scale: [
        '11 staff PCs registered (6 Mac, 5 Windows, registrations as of 2026-09-16)',
        'Server: 39 agent-company compose containers (20 of them apps, email-agent excluded) + 5 email-agent Swarm stacks on the same VM. 8 self-hosted Postgres instances company-wide (agent-company 6 + email-agent 2) and 6 PostgREST instances (agent-company 5 + email-agent 1). (agent-company 2026-09-23, email-agent 2026-09-02)',
        '1,445 commits to staff PC tools — 6 folders (installation host, seller-finder worker, CS Copilot, broadcast extension, Coupang extension, collector), excluding merges (agent-company master, 2026-09-23)',
        'kakaocli fork: 81 commits by me on top of the original MIT project; Swift code grew from 3,904 to 6,595 lines (net +2,691) (2026-09-08)',
      ],
      architectureImages: [{ src: '/images/v3/field-fleet-en.png', alt: 'Staff PC deployment and ops infrastructure' }],
    },
  ],
  howIBuild: {
    title: 'How I Build with AI',
    intro:
      'Designed, built, and run solo. I write code with Claude Code; architecture, rules, verification, and rollout decisions are mine. Commits with a Claude co-author trailer: agent-company 3,646 · brand-tool 1,122 · email-agent 988 (excluding merges; agent-company org/release and brand-tool main as of 2026-09-23, email-agent as of 2026-09-02). My own commits across the four repositories total 7,276 (excluding merges, counted 2026-09-23). I run several Claude Code sessions in parallel. I assume the agents will make mistakes. The section "Where the AI was wrong and I caught it" below is the record.',
    image: null,
    loopTitle: 'Work loop',
    loop: [
      { step: 'Design doc', desc: 'I write down the problem, constraints, and alternatives first. 77 design docs (brand-tool, agent-company, and email-agent combined, as of 2026-09-23).' },
      { step: 'Execution plan', desc: 'I list the steps and how to verify each one. 127 execution plans (same basis).' },
      { step: 'Test first', desc: 'I write a reproduction test, then implement.' },
      { step: 'Cross review', desc: 'Two agents from different sources review the change separately. In one commit, adversarial review caught 6 real defects (2026-09-09).' },
      { step: 'Real-device check', desc: 'I check on real PCs and real screens, and turn features on in stages, starting with a test room and one person.' },
      { step: 'Deploy check', desc: 'I judge a deploy by the hash of the running code, not by the image date.' },
    ],
    harnessTitle: 'Harness — turning agent mistakes into rules',
    harness: [
      'CLAUDE.md and rule files: type hints, Pyright/tsc, RLS, secrets, and language rules are completion gates.',
      'Ops notes: I write down lessons so the next session doesn\'t repeat the same mistake. Example: "Green tests ≠ correct wiring."',
      'pre-commit hook: rejects hand-rolled Windows bundles with mixed line endings at commit time (2026-09-16).',
      'pre-push gate: blocks a push that changes a service unless it registers a rollback (2026-06-02). The hook has to be installed once per repository before it applies.',
      'Blocking test writes to production: a network-block guard stopped 17 tests that could have sent KakaoTalk messages to real vendors (2026-09-09).',
      'Eval set: for Spark, I write each expected answer as a SQL query and recompute it at run time. Each case runs 3 times and is judged by majority vote. The 8 cases are based on measured failures and incidents.',
    ],
    aiWrongTitle: 'Where the AI was wrong and I caught it',
    aiWrong: [
      {
        title: 'A test that never called the code (2026-09-22)',
        points: [
          'I fixed a bug where vendor support cards never closed. The test guarding that wiring (TC-V) checked only a hand-built dict and never called the real function.',
          'So it stayed green even when the wiring changed.',
          'I replaced it with a test that runs the real code, and added an integration test that walks the message-handling path.',
        ],
      },
      {
        title: 'A leak guard where rules overrode judgment (2026-08-13 to 08-30)',
        points: [
          "The bot answered with another vendor's individual terms as if they were company policy. The existing LLM grounding checker missed most of these cases.",
          'I added deterministic substitution and a final gate. Then the regex started blocking on its own and skipped the LLM check.',
          'I kept the regex as a trigger only. The final decision moved to an LLM check at temperature 0 with a 5-second limit that fails closed.',
        ],
      },
      {
        title: 'An analysis report with an unsupported number (2026-09-23)',
        points: [
          "A sub-agent's analysis report on the email-agent repository included an uptime figure with no source.",
          'I searched the whole repository, confirmed the figure had no source, and left it out.',
        ],
      },
    ],
    incidentsTitle: 'Principles learned from incidents',
    incidents: [
      { title: 'Green tests ≠ correct wiring', lesson: 'If no test goes through a branch, even a missing import stays green. I start the real process and run it through the catch path too.' },
      { title: "Not finding it once doesn't mean it isn't there", lesson: 'Before I report that something is missing, I recheck the time range, what I searched, and the entry and exit points.' },
      { title: 'Judge by the running code', lesson: 'I confirm deploys by the hash of the code that is running.' },
      { title: 'No irreversible bulk conversions', lesson: 'I change code to accept both the old and new formats.' },
      { title: 'Turn things off with a switch', lesson: 'I count real usage first, then shut things down by switching them off and keeping the files.' },
    ],
  },
  before: {
    title: 'Before · 2024–2025',
    intro: 'These project pages are in Korean.',
    projects: [
      {
        route: '/projects/project5',
        logo: '/images/logo5.png',
        title: 'We:Review',
        period: 'Aug–Oct 2025 · intern',
        oneLiner: 'OCR + LLM receipt verification',
        connection: '→ My first job moving repetitive review work to machines. It led straight to the ops automation at StyleSeller.',
      },
      {
        route: '/projects/project4',
        logo: '/images/logo4.png',
        title: 'FitChecker',
        period: 'Nov–Dec 2024',
        oneLiner: 'LangChain AI home-training chatbot (RAG recommendations)',
        connection: '→ My first RAG and agent work, and the starting point for knowledge-grounded agents.',
      },
      {
        route: '/projects/project3',
        logo: '/images/logo3.png',
        title: 'Briefify',
        period: 'Oct–Nov 2024',
        oneLiner: 'Image and document translate/summarize web service',
        connection: '→ My first hands-on AI pipeline, chaining OCR, summarization, and translation models (Tesseract, T5, NLLB).',
      },
    ],
  },
  about: {
    title: 'About Me',
    photo: '/images/img.jpg',
    tagline: "I'm Jinhee Mok, an AI engineer who turns repetitive work into AI systems.",
    paragraphs: [
      'When I joined StyleSeller, the first thing I noticed was how much work people did by hand. Staff sent Instagram DMs to sellers one by one, worked out proposal prices in Google Sheets, and vendor questions sat in each person\'s own KakaoTalk.',
      'In February 2026 I started with a Chrome extension for the DMs. Every fix showed me the next pain point at the desk beside me, and that led to the work tool, the vendor support agent, the email agent, and Spark. Today 11 staff PCs and about 40 services run every day, and I build and fix all of it.',
      'I let Claude Code write a lot of the code. What to build, how much to automate, and whether it actually works are my calls, and I check them myself. Nothing is done until it has run on a real staff PC.',
      'I started programming in 2024. Before that I studied law, taught English, and ran a daycare center. What I took from those jobs is that the people doing the work know where it hurts. So I still ask before I build, and I want to keep making workplaces where systems take the repetition and people keep the judgment.',
    ],
    nowTitle: 'Now',
    now: [
      "I'm validating an improved version of vendor support auto-replies in a test room.",
      'I raised the seller-finder target cap to 2,000 (09-22).',
      "I'm adding more operational monitoring. I added a monitor for dropped Claude logins on 09-23.",
    ],
    timelineTitle: 'StyleSeller month by month',
    timeline: [
      { month: '2025-12 to 2026-01', text: 'Joined' },
      { month: '2026-02', text: 'Started building. First commit on Instagram DM automation (02-08), moved it to a Chrome extension (02-27)' },
      { month: '2026-03', text: 'First brand-tool commit — a pricing calculator and proposals moved over from an Excel price sheet (03-31)' },
      { month: '2026-04', text: 'Added a LightRAG knowledge graph to email-agent (04-03); AI parsing of supplier catalogs' },
      { month: '2026-05', text: 'Started agent-company (05-16, Paperclip fork); KakaoTalk CS Chrome extension (05-24)' },
      { month: '2026-06', text: 'Removed Claude from LiteLLM and moved to Gemini (06-06); started the vendor support backend (06-29)' },
      { month: '2026-07', text: 'Started Spark and Work OS (07-18 to 07-19); expanded the knowledge hub to multiple workspaces (07-10)' },
      { month: '2026-08', text: 'Moved the work tool database to self-hosting in a single day (08-20); started personalized KakaoTalk campaigns (08-24)' },
      { month: '2026-09', text: 'Vendor support "always answer" policy (09-02) and test-room validation (09-15 onward); registered 11 staff PCs (09-16)' },
    ],
    repoPeriods: 'Active period per repository: brand-tool 2026-03 onward · email-agent 2026-03 onward (last commit 09-02) · agent-company 2026-05 onward · kakaocli 2026-06 to 09 · Instagram DM 2026-02 to 07',
    experienceTitle: 'Journey',
    experienceLead: 'From a law degree to AI Engineer (Agents & Automation)',
    careerChangeLabel: 'Career Change',
    experience: [
      { period: '2025-12 – present', org: 'StyleSeller · Developer (owner of AI and automation)', summary: 'Design, build, and run the internal AI work systems on my own (building since 2026-02)', kind: 'tech' },
      { period: '2025-08 – 2025-10', org: 'We:Review (Welead) · intern', summary: 'Built an OCR + LLM receipt review pipeline on my own', kind: 'tech' },
      { period: '2025-05 – 2025-07', org: 'Korea IT Business Promotion Association', summary: 'Generative AI developer training program', kind: 'tech' },
      { period: '2024-10 – 2024-12', org: 'HiMedia Academy · AI course', summary: 'AI projects with industry mentors (Briefify, FitChecker)', kind: 'tech' },
      { period: '2024-04 – 2024-10', org: 'HiMedia Academy · full-stack course', summary: 'Spring Boot and Vue.js team projects; collaboration and version control', kind: 'tech', careerChange: true },
      { period: '2022-06 – 2024-02', org: 'Monte Kids · English teacher', summary: 'Personalized lessons and self-directed learning design', kind: 'pre' },
      { period: '2021-02 – 2023-06', org: 'Academic Credit Bank System · Business Administration', summary: 'Business administration degree program', kind: 'pre' },
      { period: '2021-03 – 2022-05', org: 'Pots&Pans · English teacher', summary: 'Immersion lessons and tracking learning outcomes', kind: 'pre' },
      { period: '2018-08 – 2020-09', org: 'JLS (Jungsang Language School) · teacher', summary: 'Interactive lesson design and communication with parents', kind: 'pre' },
      { period: '2015-03 – 2018-02', org: 'Jeonwon Daycare Center · operations manager', summary: 'Staff management and day-to-day operations', kind: 'pre' },
      { period: '2008-03 – 2012-02', org: 'Cheongju University · B.A. in Law', summary: 'Law major', kind: 'pre' },
    ],
  },
  skills: {
    title: 'Skills',
    lead: 'What I use in production, listed separately from what I used in training programs.',
    sections: [
      {
        id: 'production',
        title: 'Used in production (StyleSeller, 2026-02 onward)',
        groups: [
          {
            id: 'ai-agent',
            title: 'AI / Agent',
            items: [
              { id: 'llm-agent', label: 'Tool-calling agents' },
              { id: 'mcp', label: '4 MCP servers I built' },
              { id: 'rag', label: 'GraphRAG (LightRAG · Neo4j · pgvector)' },
              { id: 'litellm', label: 'LiteLLM proxy (Gemini path)' },
              { id: 'hitl', label: 'Execution gate (Tool Registry: dry run, approval row recheck)' },
              { id: 'claude-code', label: 'Multiple Claude Code sessions' },
            ],
          },
          {
            id: 'backend',
            title: 'Backend',
            items: [
              { id: 'python', label: 'Python' },
              { id: 'fastapi', label: 'FastAPI' },
              { id: 'ts', label: 'TypeScript' },
              { id: 'nextjs', label: 'Next.js 16' },
              { id: 'node', label: 'Node.js / Express' },
              { id: 'postgres', label: 'PostgreSQL / PostgREST' },
              { id: 'supabase', label: 'Supabase (moved to self-hosting in 2026-08)' },
            ],
          },
          {
            id: 'frontend',
            title: 'Frontend',
            items: [
              { id: 'react', label: 'React 19' },
              { id: 'js', label: 'JavaScript' },
              { id: 'html', label: 'HTML' },
              { id: 'css', label: 'CSS' },
              { id: 'tailwind', label: 'Tailwind 4' },
            ],
          },
          {
            id: 'field-infra',
            title: 'Staff PCs · infra',
            items: [
              { id: 'chrome-ext', label: 'Chrome Extension MV3' },
              { id: 'playwright', label: 'Playwright / CDP' },
              { id: 'swift', label: 'Swift (macOS)' },
              { id: 'powershell', label: 'PowerShell' },
              { id: 'launchd', label: 'launchd' },
              { id: 'docker', label: 'Docker' },
              { id: 'docker-compose', label: 'Docker Compose' },
              { id: 'docker-swarm', label: 'Docker Swarm' },
              { id: 'gh-actions', label: 'GitHub Actions' },
              { id: 'gcp', label: 'GCP VM' },
              { id: 'nginx', label: 'nginx' },
              { id: 'zero-downtime', label: 'Zero-downtime swap deploy script (for the brand-tool move to the VM)' },
              { id: 'n8n', label: 'n8n' },
              { id: 'git', label: 'Git' },
              { id: 'github', label: 'GitHub' },
            ],
          },
        ],
      },
      {
        id: 'training',
        title: 'Used in training programs (2024)',
        groups: [
          {
            id: 'fullstack-course',
            title: 'Full-stack course',
            items: [
              { id: 'java', label: 'Java' },
              { id: 'spring', label: 'Spring Boot' },
              { id: 'mysql', label: 'MySQL' },
              { id: 'jpa', label: 'JPA' },
              { id: 'vue', label: 'Vue.js' },
              { id: 'flutter', label: 'Flutter' },
            ],
          },
          {
            id: 'ai-course',
            title: 'AI course',
            items: [
              { id: 'langchain', label: 'LangChain' },
              { id: 'rag-course', label: 'RAG (FitChecker)' },
              { id: 'model-pipeline', label: 'Tesseract · T5 · NLLB model pipeline (Briefify)' },
            ],
          },
        ],
      },
    ],
  },
  legacyProjects: {
    project1: { title: 'JeonJikSi', route: '/projects/project1' },
    project2: { title: 'Flux', route: '/projects/project2' },
    project3: { title: 'Briefify', route: '/projects/project3' },
    project4: { title: 'FitChecker', route: '/projects/project4' },
    project5: { title: 'We:Review', route: '/projects/project5' },
  },
};

export default en;
