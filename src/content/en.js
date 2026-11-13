// 영문 콘텐츠 — ko.js 와 같은 사실을 영어로 쓴다 (원고: portfolio-research/v3/content/*.en.md)
import casesEn from './cases.en.js';

const en = {
  lang: 'en',
  nav: {
    home: 'Intro',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    build: 'How I Build',
    resume: { label: 'Career History', href: '/files/career-description-en.pdf' },
    portfolio: { label: 'Portfolio (PDF)', href: '/files/portfolio-en.pdf' },
    langSwitchLabel: 'KO',
    koOnlyNote: 'Korean only',
  },
  hero: {
    name: 'Jinhee Mok',
    title: 'AI Engineer',
    headline: 'I turn day-to-day business problems into AI tools that staff can use and trust.',
    intro:
      "I lead AI and automation projects in StyleSeller's business team. I work from the team's needs through design, implementation and deployment, then stay involved to investigate failures and improve the tools.",
    company:
      'StyleSeller is a commerce platform that operates sales for creator sellers and brands.',
    metrics: [
      { value: 'Hundreds', label: 'of business partners tracked on the status board' },
      { value: '100+', label: 'shared skills used by all agents' },
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
    casesTitle: 'Seven StyleSeller cases',
    glanceTitle: 'At a glance',
    glanceIntro:
      'I build and operate tools for partner support, shared knowledge, pricing, content and staff computers. I use Claude Code for much of the implementation, while I define the scope, check the results and decide what to roll out. The cases below describe what I built, the failures I investigated and the limits that remain. In the Jev router follow-up, final skill selection scored 119/132 (90.15%). Reducing the skills Gemini reviews from 115 to 5 yields an estimated 90% cost reduction, calculated from unit prices and reduced input.',
  },
  systemMap: {
    title: 'System Map',
    intro:
      'How the seven systems connect: work arrives through KakaoTalk, email, Slack and the work tool; agents use shared knowledge and run tasks on staff PCs. Controls differ by workflow: email stays in drafts, Spark write tools require approval, and the vendor bot can answer tagged questions automatically in enabled rooms. Select a number to explore a case.',
    image: '/images/v3/system-map-en.svg',
    zoomHint: 'Tap to enlarge',
    imageAlt: 'Map of the StyleSeller operating system: inputs, agents, knowledge, staff PCs, and human approval across the 7 cases',
    reposTitle: 'What each repository does',
    repos: [
      { name: 'Work tool repository', role: 'The work tool staff use; sales partner and product data' },
      { name: 'Agent platform repository', role: 'Agents, servers, and staff PC deployment' },
      { name: 'Email agent repository', role: 'Reply drafts for the shared mailboxes + internal knowledge hub' },
      { name: 'KakaoTalk collect-and-send tool (kakaocli fork)', role: 'KakaoTalk collection and sending on staff Macs' },
      { name: 'n8n (self-hosted, not a repository)', role: 'Triggers for mail intake, product sync calls, and match judging' },
    ],
    examples: [
      'Example: one vendor support message goes from a staff Mac (collection) → the agent server (should we answer this partner?) → the work tool (the list of partners to serve) and the knowledge hub (search), then back to a staff Mac to be sent.',
      'Example: one Spark question goes from the work tool → the agent server → the work tool API, the work databases, and knowledge hub search.',
      'Example: the status board summarizes records from KakaoTalk rooms, the order mailbox, Slack, and emailed order sheets by day, links them to a business partner by fixed rules, and puts them on that business partner\'s calendar. Staff resolve what it cannot link.',
    ],
    nodes: [
      { id: 'status-board', label: '① Status board · ledger', caseId: 'status-board' },
      { id: 'vendor-cs', label: '② Vendor CS agent', caseId: 'vendor-cs' },
      { id: 'ss-worktool', label: '③ Internal work tool', caseId: 'ss-worktool' },
      { id: 'email-agent', label: '④ LightRAG knowledge hub · email agent', caseId: 'email-agent' },
      { id: 'agent-platform', label: '⑤ Agent platform · Spark', caseId: 'agent-platform' },
      { id: 'content-autopilot', label: '⑥ Content autopilot', caseId: 'content-autopilot' },
      { id: 'field-fleet', label: '⑦ Staff PC deployment · operations', caseId: 'field-fleet' },
    ],
    layers: [
      {
        name: 'People',
        desc: 'The work tool (status board, pricing, matching, campaign, and Spark screens) · the Kakao CS Copilot extension (MV3) · Slack (briefings and summaries). Human control sits in three places: approval cards inside Spark chat (the approval record is rechecked in the database right before execution), a hold queue for personalized KakaoTalk campaigns with 500 or more recipients, and a per-room allowlist for the vendor support chatbot.',
      },
      {
        name: 'Agents',
        desc: 'I forked Paperclip, an open-source agent platform, and built Work OS, Spark, and Tool Registry (an execution gate) on top of it. Work that people hand off reaches the CEO agent as a work order, and an overall orchestrator reporting to the CEO (the Hermes dispatcher) hands it out to department heads and workers such as Supervisor, campaigns, ads, content, build, review and deploy. Work routed to the content department is picked up by the content orchestrator, a separate service. Sub-agents that Hermes assigns work to pick a skill this way: BM25 search pulls candidates from all skills, the judge model Jev checks gating and fit, and Gemini makes the final pick. Gemini now reviews 5 skills instead of 115, and the router scored 90.15% on a 132-question evaluation (new when introduced, later reused during tuning). If Jev fails, Gemini picks directly from the full list. What runs every day is status board collection and summaries, vendor support collection and logging, influencer CS, Spark, and monitoring and briefing services. LiteLLM is the default path for model calls; the direct Vertex path shares the same cost ledger.',
      },
      {
        name: 'Knowledge',
        desc: 'LightRAG (Neo4j + pgvector) with 13 workspaces (in the email agent repository). Vendor support reaches it through a knowledge MCP server, Spark calls knowledge hub search directly, and work tool sales partner matching uses vector (naive) search.',
      },
      {
        name: 'Field',
        desc: 'The deployment snapshot records 11 staff Macs and Windows PCs (September 16, 2026). Tools use a one-line install and a key per device. Mac tools and the Windows CS tool update on separate schedules; the Windows read-only collector is a separate program and still requires reinstalling.',
      },
      {
        name: 'Data and infra',
        desc: 'The business web app runs on Vercel; 60 containers (agent services, databases, the LLM proxy, and more) run in Docker on one GCP VM with 4 cores and 17 GB of memory (counted 2026-10-25; Compose and Swarm, self-hosted Postgres and PostgREST). Model calls go through LiteLLM by default, and Langfuse tracks cost. The agent platform and work tool repositories share one deploy lock.',
      },
    ],
  },
  cases: casesEn,
  howIBuild: {
    title: 'How I Build with AI',
    intro:
      'I use Claude Code to implement changes, while I own the architecture, business rules, verification and rollout decisions.',
    introDetail:
      'I run several Claude Code sessions in parallel and review their work with the expectation that they will make mistakes. As of September 23, 2026, 3,646 agent-platform commits, 1,122 work-tool commits and 988 email-agent commits carried a Claude co-author trailer. My commits across four repositories totaled 7,276, excluding merges. These counts describe the workflow; the cases below show how I verify its results.',
    image: null,
    loopTitle: 'Work loop',
    loop: [
      { step: 'Design doc', desc: 'I write down the problem, constraints, and alternatives first. 77 design docs (3 internal repositories combined, as of 2026-09-23).' },
      { step: 'Execution plan', desc: 'I list the steps and how to verify each one. 127 execution plans (same basis).' },
      { step: 'Test first', desc: 'I write a reproduction test, then implement.' },
      { step: 'Cross review', desc: 'Two agents from different sources review the change separately. In one commit, adversarial review caught 6 real defects (2026-09-09).' },
      { step: 'Real-device check', desc: 'I check on real PCs and real screens, and turn features on in stages, starting with a test room and one person.' },
      { step: 'Deploy check', desc: 'I deploy only images and source tagged with the deploy commit sha (never falling back to :latest); a missing image stops the deploy.' },
    ],
    harnessTitle: 'Checks that turn agent mistakes into repeatable safeguards',
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
          'I fixed a bug where vendor support cards never closed. The test guarding that wiring checked only a hand-built dict and never called the real function.',
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
          "A sub-agent's analysis report on the email agent repository included an uptime figure with no source.",
          'I searched the whole repository, confirmed the figure had no source, and left it out.',
        ],
      },
    ],
    incidentsTitle: 'Principles learned from incidents',
    incidents: [
      { title: 'Green tests ≠ correct wiring', lesson: 'If no test goes through a branch, even a missing import stays green. I start the real process and run it through the catch path too.' },
      { title: "Not finding it once doesn't mean it isn't there", lesson: 'Before I report that something is missing, I recheck the time range, what I searched, and the entry and exit points.' },
      { title: 'No irreversible bulk conversions', lesson: 'I change code to accept both the old and new formats.' },
      { title: 'Turn things off with a switch', lesson: 'I count real usage first, then shut things down by switching them off and keeping the files.' },
    ],
  },
  about: {
    title: 'About Me',
    photo: '/images/img.jpg',
    tagline: "I'm Jinhee Mok. I build and operate AI tools for everyday business work.",
    paragraphs: [
      'I majored in law, later earned a business administration degree through the Academic Credit Bank System, and worked as a daycare operations manager and an English teacher. In 2024 I learned software development at HiMedia Academy, and during my We:Review internship I automated receipt review with OCR and an LLM. That became the starting point for what I do now: cutting repetitive work in the business with AI.',
      "I joined StyleSeller in November 2025. I began with seller DM automation and went on to build vendor support, the work tool, the knowledge hub and email agent, Spark and Work OS, and staff PC deployment. I use Claude Code for implementation and verify changes through tests, production checks and real-device checks where the workflow runs on staff PCs.",
      'I turn business needs into explicit rules and check calculations against the values staff already use. Pricing and catalog workflows leave reviewable candidates for staff; the vendor support bot can answer tagged questions automatically after evidence checks. When a system fails, I record what happened, why it happened and what I changed.',
    ],
    nowTitle: 'Latest recorded work · October 2026',
    now: [
      'Vendor support answers tagged questions in enabled partner rooms, with no follow-up questions or human handoff step. Amounts, percentages and brands are checked against the retrieved evidence.',
      'The October 2026 work includes database-aware health checks and start/result markers that help detect stalled processing.',
      'The Jev router improvement is rolled out to Hermes sub-agents. It scored 119/132 on the evaluation and reduces the skill list Gemini reviews from 115 to 5.',
    ],
    timelineTitle: 'StyleSeller month by month',
    timeline: [
      { month: '2025-11', text: 'Joined, learned the team\'s work' },
      { month: '2025-12 to 2026-01', text: 'Started automating team work' },
      { month: '2026-02', text: 'First commit on Instagram DM automation (02-08), moved it to a Chrome extension (02-27)' },
      { month: '2026-03', text: 'First work tool commit — a pricing calculator and proposals moved over from a Google Sheet price sheet (03-31)' },
      { month: '2026-04', text: 'Added a LightRAG knowledge graph to the email agent (04-03); AI parsing of supplier catalogs' },
      { month: '2026-05', text: 'Started the agent platform (05-17, Paperclip fork); KakaoTalk CS Chrome extension (05-24)' },
      { month: '2026-06', text: 'Removed Claude from LiteLLM and moved to Gemini (06-06); started the vendor support backend (06-29)' },
      { month: '2026-07', text: 'Started Spark and Work OS (07-18 to 07-19); expanded the knowledge hub to multiple workspaces (07-10)' },
      { month: '2026-08', text: 'When a cloud DB quota overrun stopped the work tool API, I stood up the same API on a VM and restored service the same day (08-20); started personalized KakaoTalk campaigns (08-24)' },
      { month: '2026-09', text: 'Rolled out a one-line install to 11 staff PCs (09-16); seller-finder workers running on 9 PCs (09-18)' },
      { month: '2026-10', text: 'Built the status board; verified the new video render path; improved the Jev router and its evaluation; strengthened monitoring' },
    ],
    repoPeriods: 'Active period per repository: work tool 2026-03 onward · email agent 2026-03 onward · agent platform 2026-05 onward · kakaocli fork 2026-06 to 09 · Instagram DM extension 2026-02 onward (last commit 07-01)',
    experienceTitle: 'Journey',
    experienceLead: 'From a law major to AI agent engineer',
    careerChangeLabel: 'Career Change',
    experience: [
      { period: '2025-11 – present', org: 'StyleSeller · AI & Automation PL', summary: 'Internal AI and automation', kind: 'tech' },
      { period: '2025-08 – 2025-10', org: 'We:Review (Welead) · intern', summary: 'Built an OCR + LLM receipt review pipeline', kind: 'tech' },
      { period: '2025-05 – 2025-07', org: 'Korea IT Business Promotion Association', summary: 'Generative AI developer training program', kind: 'tech' },
      { period: '2024-10 – 2024-12', org: 'HiMedia Academy · AI course', summary: 'AI projects with industry mentors (LangChain RAG chatbot, OCR and translation pipeline)', kind: 'tech' },
      { period: '2024-04 – 2024-10', org: 'HiMedia Academy · full-stack course', summary: 'Spring Boot and Vue.js team projects; collaboration and version control', kind: 'tech', careerChange: true },
      { period: '2021-02 – 2023-06', org: 'Academic Credit Bank System · Business Administration', summary: 'Business administration degree program', kind: 'pre' },
      { period: '2018-08 – 2024-02', org: 'Jeongsang Language School · Pots&Pans · Montekids English Academy · English teacher', summary: 'Lesson design, teaching materials, and parent consultations', kind: 'pre' },
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
              { id: 'llm-agent', label: 'Paperclip · Hermes agents' },
              { id: 'jev', label: 'Jev skill router' },
              { id: 'hitl', label: 'Tool execution approval gate' },
              { id: 'litellm', label: 'Gemini Flash family (via LiteLLM)' },
              { id: 'mcp', label: '4 MCP servers · tool calling' },
              { id: 'claude-code', label: 'Claude Code' },
            ],
          },
          {
            id: 'rag-llmops',
            title: 'RAG · LLM Ops',
            items: [
              { id: 'rag', label: 'LightRAG 1.5.6 knowledge hub (Neo4j · pgvector)' },
              { id: 'litellm-cap', label: 'LiteLLM spend cap' },
              { id: 'langfuse', label: 'Langfuse 4.50 tracing' },
            ],
          },
          {
            id: 'backend',
            title: 'Backend',
            items: [
              { id: 'python', label: 'Python 3.12 · FastAPI · Pydantic v2' },
              { id: 'ts', label: 'TypeScript' },
              { id: 'node', label: 'Node.js · Express 5' },
            ],
          },
          {
            id: 'db',
            title: 'DB',
            items: [
              { id: 'postgres', label: 'Self-hosted Postgres + PostgREST' },
              { id: 'rls', label: 'RLS · read-only roles' },
              { id: 'audit-log', label: 'Append-only audit log' },
            ],
          },
          {
            id: 'field-infra',
            title: 'Staff PCs · infra',
            items: [
              { id: 'launchd', label: 'One-line install on 11 staff Macs and Windows PCs' },
              { id: 'device-keys', label: 'Per-device keys' },
              { id: 'nginx', label: 'VM · nginx' },
              { id: 'docker', label: 'Commit-pinned image deploys' },
              { id: 'chrome-ext', label: 'Chrome Extension MV3' },
              { id: 'playwright', label: 'Playwright · CDP' },
              { id: 'swift', label: 'Swift (kakaocli fork)' },
              { id: 'n8n', label: 'n8n' },
              { id: 'gh-actions', label: 'GitHub Actions' },
              { id: 'gcp', label: 'GCP VM' },
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
              { id: 'model-pipeline', label: 'OCR and translation pipeline (Tesseract, T5, NLLB)' },
            ],
          },
        ],
      },
    ],
  },
};

export default en;
