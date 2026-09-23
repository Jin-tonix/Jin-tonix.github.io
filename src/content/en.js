// English content — quick faithful rendering of the Korean source. Final copy TBD by lead.
const en = {
  lang: 'en',
  nav: {
    home: 'Intro',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    build: 'How I Build',
    langSwitchLabel: 'KO',
    koOnlyNote: 'Korean only',
  },
  hero: {
    headline: 'I turn repetitive work into AI systems that stay running in production.',
    sub: "I'm Jinhee Mok. I design and run StyleSeller's AI agent organization solo.",
    metrics: [
      { value: '6,800+', label: 'commits built with AI (2026)' },
      { value: '20+', label: 'AI agents in production' },
      { value: '3', label: 'MCP servers built from scratch' },
      { value: '20', label: 'staff machines wired into automation' },
    ],
  },
  systemMap: {
    title: 'System Map',
    intro:
      "StyleSeller's repetitive work now runs as one AI Company OS. Click a node below to jump to its case study.",
    image: '/images/proj6-1.png',
    imageAlt: 'AI Company OS system architecture diagram',
    nodes: [
      { id: 'ai-company-os', label: 'AI Company OS', caseId: 'ai-company-os' },
      { id: 'brand-tool', label: 'brand-tool', caseId: 'brand-tool' },
      { id: 'email-agent', label: 'Email AI Agent', caseId: 'email-agent' },
      { id: 'field-automation', label: 'Field Automation', caseId: 'field-automation' },
    ],
  },
  cases: [
    {
      id: 'ai-company-os',
      slug: 'ai-company-os',
      logo: '/images/logo6.png',
      title: 'StyleSeller AI Company OS — Internal AI Agent Platform',
      shortTitle: 'AI Company OS',
      period: 'May 2026 – present',
      role: 'Solo — design, build, infra, operations',
      oneLiner: 'I designed and run a company where 20+ AI agents do the work, alone.',
      highlights: [
        'Built an AI agent org: a CEO agent over 20+ agents across CS, content, ads, and campaigns',
        'Spark, the internal AI assistant: company-wide knowledge Q&A with citations and approval-gated actions',
        'Built 3 MCP servers from scratch (knowledge RAG, Google Workspace, platform control)',
        '46 Python agent services on Docker Compose, running on a single GCP VM',
      ],
      stack: ['TypeScript', 'Node.js/Express', 'React', 'PostgreSQL (Drizzle)', 'Python/FastAPI', 'MCP', 'LiteLLM', 'Gemini 2.5', 'Claude (Claude Code)', 'LightRAG + Neo4j', 'Langfuse', 'n8n', 'Docker Compose', 'GitHub Actions', 'GCP'],
      scale: [
        '4,316 personal commits (merges excluded, May–Sep 2026)',
        '46 agent services, 3 MCP servers, 2 plugins (email-agent dashboard, IG DM console)',
        '56 design docs · 100 execution plans · ~500 test files',
      ],
      background:
        'StyleSeller is a ~20-person fashion commerce company. CS, vendor handling, content production, and ad operations all ran by hand. ' +
        'The original plan was a full 5-layer stack — Temporal, LangGraph, LiteLLM, MCP. But once the infrastructure was in place, zero agents were actually working. ' +
        'So I changed direction: wire up what already existed — the email agent, the Instagram DM bot, n8n — first. ' +
        'I forked the open-source agent-org platform Paperclip to keep its task tracking, budgets, and approvals, and layered company-specific agents and tools on top.',
      architectureImages: [
        { src: '/images/proj6-1.png', alt: 'AI Company OS system architecture diagram' },
        { src: '/images/proj6-2.png', alt: 'AI agent org chart diagram' },
      ],
      troubleshooting: [
        {
          title: 'Dropped the over-designed stack for one that actually worked',
          problem: 'The planned 5-layer stack was expensive to build, and as of May there were zero agents actually running.',
          action: 'Replaced Temporal with n8n triggers + Paperclip issues, and LangGraph with Claude Code agent sessions. Prioritized wiring up existing working assets over building new ones.',
          result: '20+ agents were live on the org chart within four months.',
        },
        {
          title: 'Vendor CS bot answered with another vendor\'s deal terms (RAG cross-leak)',
          problem: 'In a 30-question smoke test, a question about vendor A got vendor B\'s individual terms quoted back as company policy.',
          cause: 'The cause wasn\'t chat history — it was the knowledge graph structure. Individual deals were mixed into shared knowledge.',
          action: 'Layered RAG workspace isolation, an answer-scope gate, and tool-scope restrictions.',
          result: 'Zero reproduced cross-leaks since.',
        },
        {
          title: 'Replaced keyword filtering with LLM judgment',
          problem: 'A regex gate silently blocked messages and skipped the LLM entirely, and nobody knew when it fired.',
          action: 'Put a cheap first-pass trigger in front of a temperature-0, 5-second-budget LLM judgment call, made it fail-closed, and surfaced the block reason on the staff screen.',
          result: 'Staff can now see exactly why a message was blocked.',
        },
        {
          title: 'Gemini fallback returned empty responses during a Claude outage',
          problem: 'The Gemini fallback that kicks in during Claude outages returned empty responses on multi-turn function calling.',
          action: 'Restored the Gemini proxy\'s tool_calls handling, tool_call_id mapping, and timeout alignment.',
          result: 'Responses no longer drop during failover.',
        },
        {
          title: 'Safety net for concurrent deploys from multiple AI sessions',
          problem: 'Multiple Claude Code sessions could attempt to deploy at the same time, risking collisions.',
          action: 'Added a VM-wide deploy lock, refused deploys from an uncommitted tree, logged the last build commit, and tested the deploy-target decision function.',
          result: 'Zero incidents from concurrent deploys.',
        },
      ],
      aiCollab: [
        'Delegated: implementation, test writing, and iteration were split across multiple Claude Code sessions.',
        'Decided myself: architecture pivots, permission boundaries, and HITL thresholds (refunds, VIP issues, external contracts need human approval).',
        'Verified: design doc → plan → tests → adversarial review → live-device check, in that order.',
      ],
    },
    {
      id: 'brand-tool',
      slug: 'brand-tool',
      logo: '/images/logo7.png',
      title: 'brand-tool — Internal Sales Operations Platform',
      shortTitle: 'brand-tool',
      period: 'Mar 2026 – present',
      role: 'Solo — full-stack, infra, operations (every commit is mine)',
      oneLiner: 'From seller discovery to KakaoTalk sends, scattered sales work now lives in one app.',
      highlights: [
        'Seller Finder: automated Instagram seller discovery via a distributed fleet of staff-PC workers + a server job queue',
        'Broadcast KakaoTalk: bulk/scheduled product cards tailored to each seller\'s purchase history',
        'AI vendor matching: RAG + category candidates → LLM judgment → deal-close tracking',
        'Auto-generated proposal PDFs/spreadsheets, plus the Spark internal AI assistant screen',
      ],
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'PostgreSQL 16 + PostgREST', 'Vertex AI Gemini 2.5', 'n8n', 'Playwright', 'Vitest', 'Docker', 'GitHub Actions', 'GCP'],
      scale: [
        '1,502 commits · 134 API routes · 33 screens',
        '130 DB migrations · 205 test files',
      ],
      background:
        'To build one proposal, sales staff bounced between Google Sheets, an external CRM, and Notion, calculating prices by hand. ' +
        'Instagram seller discovery was just as manual — someone clicking through hashtags one by one to build a list. ' +
        'I started by consolidating that scattered data into one database, then expanded it so seller discovery, vendor matching, and KakaoTalk sends all finish inside one app.',
      architectureImages: [
        { src: '/images/proj7-1.png', alt: 'brand-tool system architecture diagram' },
        { src: '/images/proj7-2.png', alt: 'brand-tool screenshot' },
      ],
      troubleshooting: [
        {
          title: 'Instagram blocked server IPs, making server-side scraping impossible',
          problem: 'Instagram blocks datacenter IPs, so collection couldn\'t run from a server.',
          action: 'Designed a distributed worker that runs on staff PCs instead. It calls internal APIs from inside the browser rather than clicking the UI, so it never interrupts staff work. The server owns the job queue, device registration, a one-account-one-PC rule, and detecting/reassigning stalled runs.',
          result: 'Reliable collection without ever handing staff PCs a DB key.',
        },
        {
          title: 'Server recovery cancelled every job in progress',
          problem: 'The "cancel jobs from a worker unseen for 3 minutes" rule also counted the server\'s own downtime as worker absence, so right after recovery it cancelled everything in flight.',
          cause: 'The cleanup function never recorded its own run interval, so it couldn\'t tell server downtime apart from worker absence.',
          action: 'Made the cleanup function log its own run interval; a gap now reads as "the server was down," and cancellation only fires after the server has been up for 3 straight minutes.',
          result: 'A reproduction test confirmed: old function cancelled 2/2, new function cancels 0.',
        },
        {
          title: 'Staff auth cookies could be forged by hand',
          problem: 'A single fixed-string cookie unlocked the entire staff area.',
          action: 'Replaced it with Web Crypto HMAC-signed, expiring cookies in edge middleware. Requests are rejected if the secret is missing, with a fallback to the old secret so deploy didn\'t lock everyone out instantly.',
          result: 'Forged cookies can no longer pass authentication.',
        },
        {
          title: 'Cloud DB outage → migrated to self-hosting with zero code changes',
          problem: 'The cloud DB hit its bandwidth cap and every API stopped working.',
          action: 'Confirmed via a full-codebase search that the app only ever talks REST, then stood up an identically-shaped self-hosted stack on a VM and recovered by swapping environment variables.',
          result: 'Recovered the same day; a month later, when the hosting free tier also got suspended, migrated again with zero downtime in two days.',
        },
        {
          title: 'LLM vendor-matching results varied between requests',
          problem: 'With input split into chunks of 30, the same vendor got different scores per chunk and the last one silently overwrote the rest; the model also occasionally dropped items.',
          action: 'Kept only the highest score per vendor, and re-queried narrowly for any dropped items.',
          result: 'Matching scores are now consistent regardless of chunk order.',
        },
      ],
      aiCollab: [
        'Every feature went design doc → plan → tests-first → implementation → review (67 design/plan docs total).',
        'Principle: "tests passing green doesn\'t mean the wiring is right" — re-verified post-deploy using the live code\'s hash and the actual screen.',
      ],
    },
    {
      id: 'email-agent',
      slug: 'email-agent',
      logo: '/images/logo8.png',
      title: 'Email AI Agent — CEO Inbox Reply-Draft Agent',
      shortTitle: 'Email AI Agent',
      period: 'Mar 2026 – Jul 2026 (since folded into AI Company OS as a plugin)',
      role: 'Solo — design, build, deploy',
      oneLiner: 'It drafts an evidence-backed reply first; the CEO only has to review it.',
      highlights: [
        'Gmail → n8n → FastAPI pipeline (parse → classify → draft → verify → learn)',
        'Evidence retrieval via a LightRAG knowledge graph (Neo4j + pgvector)',
        'LLM-as-judge quality checks, including sycophancy and parroting detection',
        'A style book that retrains on human-edited drafts (HITL)',
      ],
      stack: ['Python', 'FastAPI', 'asyncio', 'LightRAG', 'Neo4j', 'PostgreSQL + pgvector', 'Vertex AI Gemini 2.5', 'Claude', 'LiteLLM', 'n8n', 'Slack', 'Docker', 'pytest', 'Pyright'],
      scale: [
        '923 commits (Mar–Jul 2026)',
        '~36k lines of Python',
        '25 API routers',
      ],
      background:
        'The CEO\'s inbox was a mix of brand partnership pitches, seller onboarding questions, and collaboration proposals. ' +
        'Replying required knowing the past deal context, so everything funneled to one person. ' +
        'The goal: draft an evidence-backed reply first, and let the CEO just review it.',
      architectureImages: [
        { src: '/images/proj8-1.png', alt: 'Email AI Agent pipeline architecture diagram' },
      ],
      troubleshooting: [
        {
          title: 'Flat vector search couldn\'t answer "what has this company asked before?"',
          problem: 'Flat vector search alone couldn\'t surface a specific company or contact\'s past-request context.',
          action: 'Introduced a LightRAG knowledge graph in v2 to link companies, contacts, and past requests as relationships, plus an agentic search that rewrites the query once when coverage is thin.',
          result: 'Evidence retrieval now reflects real deal history.',
        },
        {
          title: 'The reranker was overloading server resources',
          problem: 'A 2.2GB local ONNX reranker was consuming too much VM memory.',
          action: 'Replaced it with Vertex AI Gemini reranking.',
          result: 'Removed the VM memory pressure entirely.',
        },
        {
          title: 'Admin/logistics confirmation emails were flagged as "parroting"',
          problem: 'The verification logic misflagged routine admin/logistics confirmation emails as parroted responses.',
          action: 'Added business-context exceptions to the verification prompt, and applied the same self-check to cold emails too.',
          result: 'Cut false positives on legitimate operational emails.',
        },
        {
          title: 'Lead import silently broke when an external form changed shape',
          problem: 'When an external form\'s structure changed, lead import would silently write wrong values.',
          action: 'Diffed the raw field JSON against the CSV headers to catch slot-name mismatches.',
          result: 'Form-structure changes are now caught instead of passing silently.',
        },
      ],
      aiCollab: [
        'Type hints on every function; zero Pyright errors was a hard completion gate.',
        'All 6 findings from a security cross-review were fixed before deploy.',
      ],
    },
    {
      id: 'field-automation',
      slug: 'field-automation',
      logo: '/images/logo9.png',
      title: 'Field Automation — Instagram DM · KakaoTalk · Staff PCs',
      shortTitle: 'Field Automation',
      period: 'Feb 2026 – present',
      role: 'Solo — Chrome extension, macOS CLI, installers, remote monitoring',
      oneLiner: 'Instagram DM and personal KakaoTalk have no official API, so staff PCs became the automation nodes.',
      highlights: [
        'Instagram DM Chrome extension (MV3): queue-based personalized DMs, region-targeted sends, a daily self-check agent for DOM drift',
        'KakaoTalk CLI (Swift, extending an open-source fork): real-time inbound sync, post-send delivery confirmation, image/PDF sending',
        'One-line installers for Mac and Windows, auto-updates, a remote monitoring dashboard',
        'Automated open-chat group-buy announcements with templated image composition',
      ],
      stack: ['JavaScript', 'Chrome Extension MV3', 'Chrome DevTools Protocol', 'Swift', 'macOS Accessibility API', 'Node.js', 'Playwright', 'Supabase', 'n8n', 'Gemini Vision', 'Bash/PowerShell'],
      scale: [
        'Instagram DM extension: ~15k lines of source + ~10k lines of tests',
        'KakaoTalk CLI: 81 personal commits (Swift grew from 3.9k to 6.6k lines)',
        'Running KakaoTalk real-time sync for 11 staff, and a 9-machine Seller Finder worker fleet',
      ],
      background:
        'Instagram DM and personal KakaoTalk have no official API. Staff were copy-pasting the same message text, and chat history only ever lived on individual PCs. ' +
        'Since none of this could run on a server, staff PCs became the automation nodes — which meant building a system to deploy, update, and monitor them safely.',
      architectureImages: [
        { src: '/images/proj9-1.png', alt: 'Field automation system diagram' },
      ],
      troubleshooting: [
        {
          title: 'Text wouldn\'t reliably land in the Instagram DM composer',
          problem: 'The composer only accepts trusted user input, so scripted text injection failed.',
          action: 'Switched to sending real key events over the Chrome DevTools Protocol. Added a daily self-check agent (Playwright + Claude Code) to verify and repair the send path whenever the page structure shifts.',
          result: 'Kept the send path working with no input failures.',
        },
        {
          title: '21% of KakaoTalk send jobs failed permanently',
          problem: 'When the accessibility call that checks window state hung, the job never finished — 21% of sends failed permanently.',
          action: 'Added a hard-timeout watchdog and a post-send delivery re-check.',
          result: 'Cut the permanent failure rate sharply.',
        },
        {
          title: 'Open-chat sends failed silently for three days',
          problem: 'It wasn\'t a permissions issue — the KakaoTalk main window had frozen into a missing state, and there was no path to surface the failure. Nobody noticed for three days.',
          action: 'Added a one-time retry after sender restart, a Slack alert carrying the failure reason, and a watch cron right after each send.',
          result: 'Failures now surface the same day.',
        },
        {
          title: 'Sped up collection and send throughput',
          problem: 'Review collection and open-chat send waits were slow bottlenecks.',
          action: 'Worked around the timer throttling on minimized windows, and replaced a fixed sleep with status-check polling for open-chat send waits.',
          result: 'Collecting 1,000 reviews dropped from 100 min to 2.5 min; send wait dropped from 27s to 11s.',
        },
      ],
      aiCollab: [
        'Wrote down verification principles after every incident — "one failed probe doesn\'t mean absence," "judge liveness by the hash of the running code, not an image date" — and applied them to the next task.',
      ],
    },
  ],
  howIBuild: {
    title: 'How I Build',
    intro: 'I delegate implementation to AI agents, but I own the outcome through verification. Below is the loop and harness I actually use.',
    loopTitle: 'The loop',
    loop: [
      'Write a design doc',
      'Break it into an execution plan',
      'Write tests first',
      'Delegate implementation to an AI session',
      'Adversarial review (cross-checked by a different-source agent)',
      'Re-verify against the live device / running code',
    ],
    harnessTitle: 'Harness (rules that catch agent mistakes)',
    harness: [
      'Type hints on every Python function; zero pyright errors/warnings',
      'TypeScript strict mode; tsc --noEmit must pass',
      'Tests passing green != wiring is correct — re-verify post-deploy via the running code\'s hash',
      'VM-wide deploy lock + refuse deploys from an uncommitted tree',
      'HITL thresholds: refunds ≥ ₩100,000, VIP issues, external payments ≥ ₩1,000,000 all need human approval',
      'No cross-checking with an agent from the same source — pair with a different-source agent',
    ],
    incidentsTitle: 'Incident Log',
    incidents: [
      { title: 'RAG cross-leak', lesson: 'The cause wasn\'t chat history — it was knowledge graph structure. Isolated workspaces and gated answer scope.' },
      { title: 'Silent blocks from a regex filter', lesson: 'Nobody knew when it fired. Made the LLM judgment fail-closed and surfaced the reason on screen.' },
      { title: 'Server downtime misread as worker absence', lesson: 'If a cleanup function doesn\'t log its own run interval, recovery wipes out every job in flight.' },
      { title: 'Forgeable fixed-string auth cookie', lesson: 'One string unlocked the whole staff area — replaced with HMAC signing + expiry.' },
      { title: 'Judging liveness by image date', lesson: 'Judge liveness by the running code\'s hash and process start time — an image date lies.' },
    ],
  },
  before: {
    title: 'Before · 2024–2025',
    intro: 'Same cards, smaller. Each one gets a one-line note on how it connects to the work now.',
    projects: [
      {
        route: '/projects/project5',
        logo: '/images/logo5.png',
        title: 'We:Review',
        period: 'Aug 2024 – Oct 2024',
        oneLiner: 'OCR + LLM pipeline for automated receipt verification (internship)',
        connection: '→ This OCR+LLM pipeline experience carried directly into the LightRAG evidence retrieval design of Email AI Agent.',
      },
      {
        route: '/projects/project4',
        logo: '/images/logo4.png',
        title: 'FitChecker',
        period: 'Nov 5 – Dec 20, 2024',
        oneLiner: 'A conversational AI home-training app that recommends exercises (Langchain-based AI agent)',
        connection: '→ Building a Langchain-based AI agent here fed directly into the agent design of AI Company OS.',
      },
      {
        route: '/projects/project3',
        logo: '/images/logo3.png',
        title: 'Briefify',
        period: 'Oct 25 – Nov 4, 2024',
        oneLiner: 'AI web service for translating and summarizing image/text documents',
        connection: '→ Model-search work here carried into the LiteLLM-based model routing design later.',
      },
      {
        route: '/projects/project1',
        logo: '/images/logo1.png',
        title: 'JeonJikSi',
        period: 'Aug 26 – Oct 2, 2024',
        oneLiner: 'A web/app service matching certifications to job listings',
        connection: '→ Admin-page and Flutter app work here shaped my later approach to internal dashboard design.',
      },
      {
        route: '/projects/project2',
        logo: '/images/logo2.png',
        title: 'Flux',
        period: 'Jul 15 – Aug 16, 2024',
        oneLiner: 'Market/My Page development for an artist auction platform',
        connection: '→ Multi-screen state management experience here was the starting point for brand-tool\'s 33 screens.',
      },
    ],
  },
  timeline: [
    { period: 'Jul – Aug 2024', title: 'Flux', desc: 'Team project — built Market/My Page for an artist auction platform' },
    { period: 'Aug – Oct 2024', title: 'JeonJikSi · We:Review', desc: 'Team project (job-matching service) + We:Review internship (OCR+LLM receipt verification)' },
    { period: 'Oct – Nov 2024', title: 'Briefify', desc: 'Team project — AI document translation/summarization web service' },
    { period: 'Oct – Dec 2024', title: 'AI training', desc: 'Korea IT Business Promotion Agency · Hi Media Academy generative-AI developer track' },
    { period: 'Nov – Dec 2024', title: 'FitChecker', desc: 'Team project — Langchain-based AI agent home-training app' },
    { period: 'Feb 2026 –', title: 'Joined StyleSeller', desc: 'AI Product Engineer. Started building field automation (Instagram DM, KakaoTalk)' },
    { period: 'Mar 2026 –', title: 'brand-tool · Email AI Agent', desc: 'Built the sales operations platform and the CEO email agent in parallel' },
    { period: 'May 2026 –', title: 'AI Company OS', desc: 'Designing and running the internal AI agent organization platform', now: true },
  ],
  about: {
    title: 'About Me',
    photo: '/images/img.jpg',
    tagline: "I'm Jinhee Mok, ready to bring the same energy to this next problem.",
    paragraphs: [
      "A law degree and years as an English teacher taught me to understand problems from the user's side and design solutions that actually fit. Wanting to solve people's problems with technology, I moved into development through K-Digital Training and a generative-AI developer track.",
      "At StyleSeller I built and ran an internal AI platform alone — an AI Company OS with 20+ working agents, a sales operations platform with 1,500 commits, a CEO email-reply agent, and staff-PC automation — owning everything from planning to deployment and incident response. My rule: move fast with AI coding tools, but verify every result with tests, cross-review, and live-device checks.",
      'On FitChecker I built an LLM-based AI chatbot and improved video recommendation accuracy 50% with RAG; on the WeReview internship I built an OCR+LLM pipeline that automated receipt verification.',
      "My strength is the focus to stay with a problem until it's actually solved, paired with a user-first development philosophy I built as an English teacher. I do sometimes over-engineer by trying to cover every edge case, so I keep 'simplicity over complexity' close at hand and stay open to blunt feedback from teammates as I grow into a more balanced engineer.",
      "As an intern I delivered a business result within my first three months, and learned that an efficient algorithm beats a complex one. I want to keep solving users' real problems all the way through, growing and contributing at the same time.",
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        org: 'StyleSeller · AI Product Engineer',
        period: 'Feb 2026 – present',
        bullets: [
          'Designed, built, and ran AI Company OS, an internal AI agent platform with 20+ agents — owned everything from planning through deployment and incident response',
          'Built brand-tool full-stack, a sales operations platform: seller discovery, AI vendor matching, automated KakaoTalk sends (1,500 commits)',
          'Built Email AI Agent and field automation (Instagram DM, KakaoTalk): deployed and remotely monitored staff-PC automation nodes',
        ],
      },
      {
        org: 'WeReview — Intern',
        period: 'Aug 2024 – Oct 2024',
        bullets: [
          'Built an OCR+LLM pipeline: developed the core module for automated receipt processing',
          'Researched and decided on the tech stack: compared open-source licenses and performance',
          'Prompt engineering: structured (JSON) data extraction via LLM',
        ],
      },
      {
        org: 'Korea IT Business Promotion Agency',
        period: 'Oct 2024 – Dec 2024',
        bullets: ['AI theory coursework plus hands-on practice with generative AI'],
      },
      {
        org: 'Hi Media Academy',
        period: 'Oct 2024 – Dec 2024',
        bullets: [
          'AI project execution: designed and built AI applications with a team',
          'Team collaboration and problem-solving across a range of issues',
        ],
      },
      {
        org: 'Hi Media Academy',
        period: 'Mar 2024 – Sep 2024',
        bullets: [
          'Full-stack development: Spring Boot/Vue.js projects and API development',
          'Collaboration and version control: strengthened GitHub workflow and code review experience',
        ],
      },
      { org: 'Montekids — English Teacher', period: 'Jun 2022 – Feb 2024', bullets: ['Personalized instruction and self-directed learning'] },
      { org: 'Pots&pans — English Teacher', period: 'Mar 2021 – May 2022', bullets: ['Immersion teaching and outcome management'] },
      { org: 'JLS Language School — Teacher', period: 'Aug 2018 – Sep 2020', bullets: ['Participatory lesson design and parent communication'] },
      { org: 'Jeonwon Daycare — Operations Manager', period: 'Mar 2015 – Feb 2018', bullets: ['Organizational management, leadership, and efficient operations'] },
    ],
    timelineTitle: 'Timeline',
    nowTitle: 'Now',
    nowText: 'Running AI Company OS in production while expanding brand-tool in parallel.',
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        id: 'ai-agent',
        title: 'AI / Agent',
        items: [
          { id: 'llm-agent', label: 'LLM agent design' },
          { id: 'mcp', label: 'MCP servers' },
          { id: 'rag', label: 'RAG (LightRAG, pgvector)' },
          { id: 'litellm', label: 'LiteLLM' },
          { id: 'langfuse', label: 'Langfuse' },
          { id: 'hitl', label: 'HITL approval design' },
          { id: 'claude-code', label: 'Claude Code' },
        ],
      },
      {
        id: 'backend',
        title: 'Backend',
        items: [
          { id: 'java', label: 'Java' },
          { id: 'spring', label: 'Spring' },
          { id: 'mysql', label: 'MySQL' },
          { id: 'jpa', label: 'JPA' },
          { id: 'python', label: 'Python' },
          { id: 'nextjs', label: 'Next.js' },
          { id: 'node', label: 'Node.js/Express' },
          { id: 'fastapi', label: 'FastAPI' },
          { id: 'postgres', label: 'PostgreSQL/PostgREST' },
          { id: 'supabase', label: 'Supabase' },
        ],
      },
      {
        id: 'frontend',
        title: 'Frontend',
        items: [
          { id: 'html', label: 'HTML' },
          { id: 'css', label: 'CSS' },
          { id: 'js', label: 'JavaScript' },
          { id: 'vue', label: 'Vue.js' },
          { id: 'react', label: 'React' },
          { id: 'flutter', label: 'Flutter' },
        ],
      },
      {
        id: 'devops',
        title: 'DevOps',
        items: [
          { id: 'docker', label: 'Docker' },
          { id: 'git', label: 'Git' },
          { id: 'github', label: 'GitHub' },
          { id: 'docker-compose', label: 'Docker Compose' },
          { id: 'gh-actions', label: 'GitHub Actions' },
          { id: 'gcp', label: 'GCP VM' },
          { id: 'nginx', label: 'nginx' },
          { id: 'zero-downtime', label: 'Zero-downtime deploys' },
          { id: 'n8n', label: 'n8n' },
          { id: 'chrome-ext', label: 'Chrome Extension MV3' },
          { id: 'playwright', label: 'Playwright / CDP' },
          { id: 'swift', label: 'Swift (macOS)' },
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
