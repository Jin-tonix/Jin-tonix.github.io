// 영문 콘텐츠 — ko.js 와 같은 사실을 영어로 쓴다 (원고: portfolio-research/v3/content/*.en.md)
const en = {
  lang: 'en',
  nav: {
    home: 'Intro',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    build: 'How I Build',
    resume: { label: 'Career description', href: '/files/career-description-en.pdf' },
    langSwitchLabel: 'KO',
    koOnlyNote: 'Korean only',
  },
  hero: {
    name: 'Jinhee Mok',
    title: 'AI Engineer',
    headline: 'I build AI work systems that staff use every day, and design them so people make the final call.',
    intro:
      'I turn repetitive office work into AI systems that run every day. I build and run them.',
    company:
      'StyleSeller is a commerce platform that operates sales for creator sellers and brands.',
    metrics: [
      { value: '352', label: 'counterparts tracked stage by stage on the status board' },
      { value: '109', label: 'shared skills used by all agents' },
      { value: '13', label: 'knowledge-hub workspaces shared by 4 agents' },
      { value: '11', label: 'staff PCs deployed with a one-line install' },
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
    glanceTitle: 'At a glance',
    glanceIntro: 'Seven systems I designed, built, and run at StyleSeller. Full case write-ups are in Korean.',
  },
  systemMap: {
    title: 'System Map',
    intro:
      'It started as Instagram DM automation (2026-02). Today four repositories work together as one operating system. Staff work in the internal work tool, a Chrome extension, and Slack. Behind them, agents and staff PC workers share the same databases and one knowledge hub. Click a number to jump to that case.',
    image: '/images/v3/system-map-en.png',
    zoomHint: 'Tap to enlarge',
    imageAlt: 'Map of the StyleSeller AI operations system',
    reposTitle: 'What each repository does',
    repos: [
      { name: 'brand-tool', role: 'The work tool staff use; sales partner and product data' },
      { name: 'agent-company', role: 'Agents, servers, and staff PC deployment' },
      { name: 'email-agent', role: 'Reply drafts for the shared mailboxes + internal knowledge hub' },
      { name: 'kakaocli', role: 'KakaoTalk collection and sending on staff Macs' },
      { name: 'n8n (self-hosted, not a repository)', role: 'Triggers for mail intake, product sync calls, and match judging' },
    ],
    examples: [
      'Example: one vendor support message goes from a staff Mac (collection) → the agent server (should we answer this partner?) → the work tool (the list of partners to serve) and the knowledge hub (search), then back to a staff Mac to be sent.',
      'Example: one Spark question goes from the work tool → the agent server → the work tool API, the work databases, and knowledge hub search.',
    ],
    nodes: [
      { id: 'vendor-cs', label: '① Vendor support', caseId: 'vendor-cs' },
      { id: 'ss-worktool', label: '② Work tool', caseId: 'ss-worktool' },
      { id: 'email-agent', label: '③ Email agent and knowledge hub', caseId: 'email-agent' },
      { id: 'agent-platform', label: '④ Spark · Work OS', caseId: 'agent-platform' },
      { id: 'field-fleet', label: '⑤ Staff PC deployment · ops infrastructure', caseId: 'field-fleet' },
      { id: 'instagram-dm', label: '⑥ Instagram DM automation' },
    ],
    layers: [
      {
        name: 'People',
        desc: 'The work tool (brand-tool, 18 staff work screens excluding login, as of 2026-09-23) · the Kakao CS Copilot extension (MV3) · Slack (briefings and summaries). Human control sits in three places: approval cards inside Spark chat (the approval record is rechecked in the database right before execution), a hold queue for personalized KakaoTalk campaigns with 500 or more recipients, and a per-room allowlist for the vendor support chatbot.',
      },
      {
        name: 'Agents',
        desc: 'I forked Paperclip, an open-source agent platform, and built Work OS, Spark, and Tool Registry (an execution gate) on top of it. What runs every day is vendor support collection and logging, influencer CS, Spark, and monitoring and briefing services. Model calls on high-volume paths go through a single LiteLLM proxy.',
      },
      {
        name: 'Knowledge',
        desc: 'LightRAG (Neo4j + pgvector) with 13 workspaces (email-agent). Vendor support reaches it through knowledge-mcp, Spark calls email-agent search directly, and brand-tool sales partner matching uses vector (naive) search.',
      },
      {
        name: 'Field',
        desc: 'The seller collector program runs on 11 staff PCs (Mac and Windows), with a one-line install and auto-update. Beyond that: kakaocli on Macs, a read-only memory-scan collector on Windows, and Chrome extensions. Auto-update on a per-tool schedule, and a key per device.',
      },
      {
        name: 'Data and infra',
        desc: 'The business web app (Next.js) runs on Vercel; about 20 FastAPI services, the databases, and the LLM proxy run in Docker on one GCP VM (Compose and Swarm, self-hosted Postgres and PostgREST). Model calls go through LiteLLM, and Langfuse tracks cost. agent-company and brand-tool share one deploy lock.',
      },
    ],
  },
  cases: [
    {
      "id": "status-board",
      "slug": "status-board",
      "reelFlow": [{"label": "KakaoTalk · email · Slack", "note": ""}, {"label": "Masking · LLM extraction", "note": "agent-company"}, {"label": "Staff confirms", "note": ""}],
      "logo": "/images/v3/status-board-screen-a.jpg",
      "status": "live",
            "koOnly": true,
      "title": "Status Board · Operations Ledger",
      "shortTitle": "Status Board",
      "subtitle": "Pick one counterpart and its KakaoTalk chats, emails, and order sheets land on one calendar, while the deal stages of 352 counterparts fit on one screen.",
      "headline": {
        "value": "352",
        "label": "counterparts on the board"
      },
      "diagram": {
        "src": "/images/v3/diagram-status-board.png",
        "alt": "Status Board architecture diagram (Korean labels)"
      }
    },
    {
      "id": "vendor-cs",
      "slug": "vendor-cs",
      "reelFlow": [{"label": "Staff-PC collection", "note": ""}, {"label": "Knowledge hub search", "note": ""}, {"label": "Mac send · delivery check", "note": ""}],
      "logo": "/images/v2/logo10.png",
      "status": "live",
            "koOnly": true,
      "title": "Vendor CS Agent",
      "shortTitle": "Vendor CS Agent",
      "subtitle": "A KakaoTalk chatbot that answers only tagged vendor questions, without hand-off, and checks every amount and brand against the evidence and rewrites the answer when they do not match.",
      "headline": {
        "value": "107",
        "label": "test files"
      },
      "diagram": {
        "src": "/images/v3/diagram-vendor-cs.png",
        "alt": "Vendor CS Agent architecture diagram (Korean labels)"
      }
    },
    {
      "id": "ss-worktool",
      "slug": "ss-worktool",
      "reelFlow": [{"label": "Catalog · partner pool", "note": ""}, {"label": "LLM candidates", "note": ""}, {"label": "Staff confirms", "note": ""}],
      "logo": "/images/logo7.png",
      "status": "live",
            "koOnly": true,
      "title": "Internal Work Tool · Pricing, Matching, Personalized KakaoTalk",
      "shortTitle": "Internal Work Tool",
      "subtitle": "Code calculates every price; the LLM only returns candidates and the fields to change.",
      "headline": {
        "value": "43",
        "label": "price-calculation test cases"
      },
      "diagram": {
        "src": "/images/v3/diagram-ss-worktool.png",
        "alt": "Internal Work Tool architecture diagram (Korean labels)"
      }
    },
    {
      "id": "email-agent",
      "slug": "email-agent",
      "reelFlow": [{"label": "Sent mail · chat wiki · PDFs", "note": ""}, {"label": "LLM planner", "note": ""}, {"label": "Drafts · answers", "note": ""}],
      "logo": "/images/logo8.png",
      "status": "live",
            "koOnly": true,
      "title": "LightRAG Knowledge Hub · Email Agent",
      "shortTitle": "Knowledge Hub · Email Agent",
      "subtitle": "Four agents search one shared knowledge hub, and only evidence-backed email drafts reach the staff draft folder.",
      "headline": {
        "value": "13",
        "label": "knowledge workspaces"
      },
      "diagram": {
        "src": "/images/v3/diagram-email-agent.png",
        "alt": "Knowledge Hub · Email Agent architecture diagram (Korean labels)"
      }
    },
    {
      "id": "agent-platform",
      "slug": "agent-platform",
      "reelFlow": [{"label": "Request", "note": ""}, {"label": "Hermes dispatcher", "note": ""}, {"label": "Publisher", "note": ""}],
      "logo": "/images/logo6.png",
      "status": "live",
            "koOnly": true,
      "title": "Agent Platform · Spark",
      "shortTitle": "Agent Platform · Spark",
      "subtitle": "Every request starts as a work order from the CEO agent, and the server, not the prompt, controls delegation and tool execution.",
      "headline": {
        "value": "109",
        "label": "shared skills"
      },
      "diagram": {
        "src": "/images/v3/diagram-agent-platform.png",
        "alt": "Agent Platform · Spark architecture diagram (Korean labels)"
      }
    },
    {
      "id": "content-autopilot",
      "slug": "content-autopilot",
      "reelFlow": [{"label": "Request", "note": ""}, {"label": "Render · QA", "note": ""}, {"label": "Publish gate", "note": "manual by default"}],
      "logo": "/images/v3/diagram-content-autopilot.png",
      "status": "staged",
            "koOnly": true,
      "title": "Content Autopilot",
      "shortTitle": "Content Autopilot",
      "subtitle": "Reels go from request to a rendered 9:16 MP4 and human approval inside the staff screen; real social posting is still simulated.",
      "headline": {
        "value": "~300",
        "label": "test files"
      },
      "diagram": {
        "src": "/images/v3/diagram-content-autopilot.png",
        "alt": "Content Autopilot architecture diagram (Korean labels)"
      }
    },
    {
      "id": "field-fleet",
      "slug": "field-fleet",
      "reelFlow": [{"label": "Staff Mac · Windows", "note": "one-line install"}, {"label": "VM", "note": "PostgREST + nginx"}, {"label": "Watch cron · Slack", "note": ""}],
      "logo": "/images/logo9.png",
      "status": "live",
            "koOnly": true,
      "title": "Staff PC Deployment · Operations",
      "shortTitle": "Staff PC Fleet",
      "subtitle": "KakaoTalk and Instagram work that has no official API runs on 11 staff PCs, installed with one command and operated from the server.",
      "headline": {
        "value": "11",
        "label": "staff PCs"
      },
      "diagram": {
        "src": "/images/v3/diagram-field-fleet.png",
        "alt": "Staff PC Fleet architecture diagram (Korean labels)"
      }
    }
  ],
  howIBuild: {
    title: 'How I Build with AI',
    intro:
      'Design, build, and operations. I write code with Claude Code; architecture, rules, verification, and rollout decisions are mine.',
    introDetail:
      'Commits with a Claude co-author trailer: agent-company 3,646 · brand-tool 1,122 · email-agent 988 (excluding merges, as of 2026-09-23; the last email-agent commit was 09-02). My own commits across the four repositories total 7,276 (excluding merges, counted 2026-09-23). I run several Claude Code sessions in parallel. I assume the agents will make mistakes. The section "Where the AI was wrong and I caught it" below is the record.',
    image: null,
    loopTitle: 'Work loop',
    loop: [
      { step: 'Design doc', desc: 'I write down the problem, constraints, and alternatives first. 77 design docs (brand-tool, agent-company, and email-agent combined, as of 2026-09-23).' },
      { step: 'Execution plan', desc: 'I list the steps and how to verify each one. 127 execution plans (same basis).' },
      { step: 'Test first', desc: 'I write a reproduction test, then implement.' },
      { step: 'Cross review', desc: 'Two agents from different sources review the change separately. In one commit, adversarial review caught 6 real defects (2026-09-09).' },
      { step: 'Real-device check', desc: 'I check on real PCs and real screens, and turn features on in stages, starting with a test room and one person.' },
      { step: 'Deploy check', desc: 'I deploy only images and source tagged with the deploy commit sha (never falling back to :latest), then check the running code directly after the deploy.' },
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
        title: 'A leak guard where rules overrode judgment (2026-08-18 to 08-30)',
        points: [
          'To keep other vendors\' information out of answers, I added deterministic substitution and a final gate. Then the regex started blocking on its own and skipped the LLM check.',
          'I kept the regex as a trigger only. The decision moved to an LLM check.',
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
      { title: 'Judge by the running code', lesson: 'After a deploy, I check the code that is actually running.' },
      { title: 'No irreversible bulk conversions', lesson: 'I change code to accept both the old and new formats.' },
      { title: 'Turn things off with a switch', lesson: 'I count real usage first, then shut things down by switching them off and keeping the files.' },
    ],
  },
  about: {
    title: 'About Me',
    photo: '/images/img.jpg',
    tagline: "I'm Jinhee Mok, an AI engineer who turns repetitive work into AI systems.",
    paragraphs: [
      'I take the work people repeat by hand every day, move it into AI agents and automation, and then ship and run those systems myself.',
      'I joined StyleSeller in November 2025 and work as a PL in the business team. Starting from seller DMs, I built and now run vendor support, the work tool, the email agent and knowledge hub, Spark · Work OS, and staff PC deployment.',
      'Claude Code writes a lot of my code, but what to build and whether it works are my calls. Nothing is done until it has run on a real staff PC.',
      'I studied law, taught English, and managed a daycare before moving into software; a We:Review internship automating receipts with OCR + LLM started this work.',
      'I want to build workplaces where systems take the repetition and people keep the judgment.',
    ],
    nowTitle: 'Now',
    now: [
      'The vendor support chatbot answers only tagged questions in real partner rooms, without hand-off. Amounts, percentages, and brand names in each answer are checked against the evidence and rewritten when they do not match.',
      'I am adding monitoring that catches failures that stop silently. In early October I changed a health check that reported "healthy" even when the database had stopped, so it now checks the database too.',
      'I upgraded the cost tracking tool (Langfuse) to a new version (10-04).',
    ],
    timelineTitle: 'StyleSeller month by month',
    timeline: [
      { month: '2025-11', text: 'Joined, learned the team\'s work' },
      { month: '2025-12 to 2026-01', text: 'Started automating team work' },
      { month: '2026-02', text: 'First commit on Instagram DM automation (02-08), moved it to a Chrome extension (02-27)' },
      { month: '2026-03', text: 'First brand-tool commit — a pricing calculator and proposals moved over from a Google Sheet price sheet (03-31)' },
      { month: '2026-04', text: 'Added a LightRAG knowledge graph to email-agent (04-03); AI parsing of supplier catalogs' },
      { month: '2026-05', text: 'Started agent-company (05-16, Paperclip fork); KakaoTalk CS Chrome extension (05-24)' },
      { month: '2026-06', text: 'Removed Claude from LiteLLM and moved to Gemini (06-06); started the vendor support backend (06-29)' },
      { month: '2026-07', text: 'Started Spark and Work OS (07-18 to 07-19); expanded the knowledge hub to multiple workspaces (07-10)' },
      { month: '2026-08', text: 'Moved the work tool database to self-hosting in a single day (08-20); started personalized KakaoTalk campaigns (08-24)' },
      { month: '2026-09', text: 'Seller collector program on 11 staff PCs; seller-finder workers on staff PCs' },
      { month: '2026-10', text: 'Stronger monitoring for silent failures; Langfuse upgrade' },
    ],
    repoPeriods: 'Active period per repository: brand-tool 2026-03 onward · email-agent 2026-03 onward (last commit 09-02) · agent-company 2026-05 onward · kakaocli 2026-06 to 09 · Instagram DM 2026-02 onward (last commit 07-01)',
    experienceTitle: 'Journey',
    experienceLead: 'From a law degree to AI Engineer (Agents & Automation)',
    careerChangeLabel: 'Career Change',
    experience: [
      { period: '2025-11 – present', org: 'StyleSeller · PL (business team)', summary: 'Design, build, and run the internal AI work systems', kind: 'tech' },
      { period: '2025-08 – 2025-10', org: 'We:Review (Welead) · intern', summary: 'Built an OCR + LLM receipt review pipeline', kind: 'tech' },
      { period: '2025-05 – 2025-07', org: 'Korea IT Business Promotion Association', summary: 'Generative AI developer training program', kind: 'tech' },
      { period: '2024-10 – 2024-12', org: 'HiMedia Academy · AI course', summary: 'AI projects with industry mentors (LangChain RAG chatbot, OCR and translation pipeline)', kind: 'tech' },
      { period: '2024-04 – 2024-10', org: 'HiMedia Academy · full-stack course', summary: 'Spring Boot and Vue.js team projects; collaboration and version control', kind: 'tech', careerChange: true },
      { period: '2018-08 – 2024-02', org: 'Monte Kids · Btop Kinder · Jungsang Academy · English teacher', summary: 'Lesson design, teaching materials, and parent consultations', kind: 'pre' },
      { period: '2021-02 – 2023-06', org: 'Academic Credit Bank System · Business Administration', summary: 'Business administration degree program', kind: 'pre' },
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
              { id: 'mcp', label: 'MCP servers I built' },
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
              { id: 'rag-course', label: 'LangChain RAG chatbot' },
              { id: 'model-pipeline', label: 'OCR and translation pipeline' },
            ],
          },
        ],
      },
    ],
  },
};

export default en;
