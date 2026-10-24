// 한국어 콘텐츠 — 수치는 git·운영 기록으로 검증한 값만 쓴다 (원고: portfolio-research/v3/content/*.ko.md)
import casesKo from './cases.ko.js';

const ko = {
  lang: 'ko',
  nav: {
    home: 'Intro',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    build: 'How I Build',
    resume: { label: '경력기술서', href: '/files/career-description-ko.pdf' },
    portfolio: { label: '포트폴리오 PDF', href: '/files/portfolio-ko.pdf' },
    langSwitchLabel: 'EN',
    koOnlyNote: '한국어만 제공',
  },
  hero: {
    name: '목진희',
    title: 'AI 엔지니어',
    headline: '직원이 매일 쓰는 AI 업무 시스템을 만들고, 사람이 확정하는 구조로 운영합니다',
    intro: 'StyleSeller 비즈니스 부서 PL. 카톡·메일·사내 업무툴에 AI를 붙이고, 켜는 범위와 검증은 제가 정합니다.',
    company:
      'StyleSeller는 크리에이터 셀러와 브랜드의 판매를 운영하는 커머스 플랫폼입니다.',
    metrics: [
      { value: '352곳', label: '현황판에서 단계별로 보는 거래 상대' },
      { value: '109개', label: '에이전트가 같이 쓰는 공용 스킬' },
      { value: '13개', label: '지식 허브 워크스페이스 (에이전트 4곳이 공유)' },
      { value: '11대', label: '한 줄 설치로 배포한 직원 PC' },
    ],
    glossaryTitle: '용어',
    glossary: [
      { term: '공구(공동구매)', desc: '셀러가 팔로워에게 기간을 정해 브랜드 상품을 파는 판매 방식' },
      { term: '셀러', desc: '공구를 여는 SNS 인플루언서' },
      { term: '브랜드(공급사)', desc: '상품을 공급하는 회사' },
      { term: '판매 파트너사', desc: '셀러와 함께 공구를 여는 판매사. 업무툴 화면의 "벤더사"' },
      { term: '벤더(거래처)', desc: '벤더 CS 사례에서는 브랜드와 판매 파트너사를 함께 가리킵니다' },
    ],
    casesTitle: 'StyleSeller 사례 7개',
    glanceTitle: '한눈에 보기',
    glanceIntro:
      'StyleSeller(크리에이터 셀러와 브랜드의 판매를 운영하는 커머스 플랫폼) 비즈니스 부서에서 PL(프로젝트 리더)로 일합니다. 직원이 손으로 반복하던 거래처 기록 정리와 응대를 AI 에이전트(도구를 직접 쓰는 AI)와 자동화로 옮겨 운영합니다. 2026-10-24 기준 현황판은 거래 상대 352곳을 첫 연락부터 정산까지 단계별로 보여 주고, 벤더 CS 챗봇은 근거를 찾은 질문에만 답합니다. 코드는 Claude Code에 많이 맡기고, 무엇을 만들지, 어디까지 켜 둘지, 결과가 맞는지는 제가 정하고 확인합니다.',
  },
  systemMap: {
    title: 'System Map',
    intro:
      '사례 7개가 이어지는 모습입니다. 카톡 방·메일함·Slack·업무 웹으로 들어온 일을 에이전트가 처리하고, 공용 지식과 직원 PC가 뒤를 받칩니다. 쓰기와 발송, 게시는 사람이 승인합니다. 번호를 누르면 해당 사례로 이동합니다.',
    image: '/images/v3/system-map-ko.png',
    zoomHint: '탭하면 크게 보기',
    imageAlt: 'StyleSeller 운영 시스템 지도. 사례 7개의 입력, 에이전트, 지식, 직원 PC와 사람 승인 단계',
    reposTitle: '저장소별 역할',
    repos: [
      { name: 'brand-tool', role: '직원이 쓰는 업무툴, 판매 파트너사·상품 데이터' },
      { name: 'agent-company', role: '에이전트·서버·직원 PC 배포' },
      { name: 'email-agent', role: '공용 메일함 답장 초안 + 사내 지식 허브' },
      { name: 'kakaocli', role: '직원 맥의 카톡 수집·발송' },
      { name: 'n8n (자체 호스팅, 저장소 아님)', role: '메일 인입·상품 동기화 호출·매칭 판정 트리거' },
    ],
    examples: [
      '예: 벤더 CS 한 건은 직원 맥(수집) → 에이전트 서버(응대 대상 판정) → 업무툴(응대 대상 명단)·지식 허브(검색)를 지나 다시 직원 맥에서 발송됩니다.',
      '예: Spark 질문 한 건은 업무툴 → 에이전트 서버 → 업무툴 API·업무 DB·지식 허브 검색을 지납니다.',
      '예: 현황판은 카톡 방·order@ 메일·Slack·메일 첨부 주문서의 기록을 하루 단위로 요약하고, 고정 규칙으로 거래 상대에 이어 상대별 달력에 올립니다. 못 이은 기록은 직원이 정합니다.',
    ],
    nodes: [
      { id: 'status-board', label: '① 현황판 · 운영 원장', caseId: 'status-board' },
      { id: 'vendor-cs', label: '② 벤더 CS 에이전트', caseId: 'vendor-cs' },
      { id: 'ss-worktool', label: '③ 사내 업무툴', caseId: 'ss-worktool' },
      { id: 'email-agent', label: '④ LightRAG 지식 허브 · 메일 에이전트', caseId: 'email-agent' },
      { id: 'agent-platform', label: '⑤ 에이전트 플랫폼 · Spark', caseId: 'agent-platform' },
      { id: 'content-autopilot', label: '⑥ 콘텐츠 오토파일럿', caseId: 'content-autopilot' },
      { id: 'field-fleet', label: '⑦ 직원 PC 배포 · 운영', caseId: 'field-fleet' },
    ],
    layers: [
      {
        name: '사람 접점',
        desc: '업무툴(brand-tool, 현황판·가격·매칭·맞춤카톡·Spark 화면) · Kakao CS Copilot 확장(MV3) · Slack(브리핑·요약). 사람 통제는 세 곳에 있습니다. Spark 채팅 안 승인 카드(실행 직전 승인 기록을 DB에서 다시 확인), 맞춤카톡 500명 이상 승인 대기, 벤더 CS 챗봇의 방 단위 허용 목록입니다.',
      },
      {
        name: '에이전트',
        desc: '오픈소스 에이전트 플랫폼 Paperclip을 포크해 그 위에 Work OS·Spark·Tool Registry(실행 게이트)를 새로 만들었습니다. 사람이 맡긴 일은 CEO 에이전트가 작업지시서로 받아 배정하고, 작업자는 공용 스킬 109개에서 필요한 것을 직접 고릅니다(Jev는 후보 3개를 힌트로만 줍니다). 매일 도는 것은 현황판 수집·요약, 벤더 CS 수집·기록, 인플루언서 CS, Spark, 감시·브리핑 서비스입니다. 모델 호출은 LiteLLM 프록시 한 곳으로 모았습니다.',
      },
      {
        name: '지식',
        desc: 'LightRAG(Neo4j + pgvector) 워크스페이스 13개(email-agent). 벤더 CS는 knowledge-mcp로, Spark는 email-agent 검색을 직접, brand-tool 판매 파트너사 매칭은 벡터(naive) 검색으로 씁니다.',
      },
      {
        name: '현장',
        desc: '직원 PC 11대(맥·윈도우)에 셀러 수집 프로그램을 한 줄 설치로 깔고 자동 업데이트합니다. 그 밖에 맥은 kakaocli, 윈도우는 읽기 전용 메모리 스캔 수집기, 크롬 확장. 도구별 주기의 자동 갱신, 기기별 키.',
      },
      {
        name: '데이터·인프라',
        desc: '업무 웹(Next.js)은 Vercel에서, 에이전트 서비스와 DB·LLM 프록시 등 컨테이너 60개는 GCP VM 한 대(4코어, 메모리 17GB)의 Docker에서 운영합니다(2026-10-25 실측, Compose·Swarm, 자체 호스팅 Postgres·PostgREST). 모델 호출은 LiteLLM으로 모으고 Langfuse로 비용을 봅니다. 배포 락은 agent-company·brand-tool이 함께 씁니다.',
      },
    ],
  },
  cases: casesKo,
  howIBuild: {
    title: 'How I Build with AI',
    intro:
      '설계·개발·운영 담당. 코드는 Claude Code로 쓰고, 아키텍처·규칙·검증·롤아웃은 직접 판단했습니다.',
    introDetail:
      'Claude 공동작성 트레일러가 있는 커밋은 agent-company 3,646 · brand-tool 1,122 · email-agent 988개입니다(merge 제외, 2026-09-23 기준, email-agent는 마지막 커밋 09-02). 네 저장소 본인 커밋 합계는 7,276개입니다(merge 제외, 2026-09-23 집계). Claude Code 세션 여러 개를 병렬로 돌려 씁니다. 에이전트가 틀리는 것을 전제로 둡니다. 아래 "AI가 틀렸고 제가 잡은 사례"가 그 기록입니다.',
    image: null,
    loopTitle: '작업 루프',
    loop: [
      { step: '설계 문서', desc: '문제·제약·대안을 먼저 씁니다. 설계 문서 77개(brand-tool·agent-company·email-agent 합, 2026-09-23 기준).' },
      { step: '실행 계획', desc: '단계와 단계별 검증 방법을 적습니다. 실행 계획 127개(같은 기준).' },
      { step: '테스트 먼저', desc: '재현 테스트를 쓰고 구현합니다.' },
      { step: '교차 리뷰', desc: '서로 다른 출처의 에이전트 두 개가 따로 리뷰합니다. 한 커밋에서 적대적 리뷰로 실결함 6개를 잡은 기록이 있습니다(2026-09-09).' },
      { step: '실기기 확인', desc: '실제 PC·실제 화면에서 확인하고 테스트 방·한 사람부터 단계적으로 켭니다.' },
      { step: '배포 확인', desc: '배포 커밋 sha 태그 이미지·소스로만 배포하고(:latest로 물러나지 않음), 배포 뒤 실행 중인 코드를 직접 확인합니다.' },
    ],
    harnessTitle: '하네스 — 에이전트 실수를 규칙으로 막기',
    harness: [
      'CLAUDE.md·규칙 파일: 타입 힌트, Pyright/tsc, RLS, 비밀값, 언어 규칙을 완료 게이트로 둡니다.',
      '운영 메모: 같은 실수를 다음 세션이 반복하지 않게 교훈을 메모로 남깁니다. 예: "테스트 초록 ≠ 배선 맞음".',
      'pre-commit 훅: 손으로 말아 줄바꿈이 섞인 윈도우 배포본을 커밋 단계에서 거부합니다(2026-09-16).',
      'pre-push 게이트: 서비스가 바뀐 push는 되돌리기 등록이 없으면 막습니다(2026-06-02). 훅은 저장소마다 한 번 깔아야 걸립니다.',
      '테스트 → 프로덕션 쓰기 차단: 실제 거래처에게 카톡이 나갈 수 있던 테스트 17건을 네트워크 차단 가드로 막았습니다(2026-09-09).',
      '평가 세트: Spark는 정답을 정답 SQL로 적어 실행 때 다시 계산하고, 케이스당 3회 다수결로 봅니다. 8케이스 모두 실측·실패 사례에서 나왔습니다.',
    ],
    aiWrongTitle: 'AI가 틀렸고 제가 잡은 사례',
    aiWrong: [
      {
        title: '코드를 한 번도 부르지 않는 테스트 (2026-09-22)',
        points: [
          '벤더 CS 카드가 영영 안 닫히는 버그를 고쳤습니다. 그 배선을 지키던 테스트(TC-V)는 손으로 만든 dict만 확인하고 실제 함수를 부르지 않았습니다.',
          '그래서 배선을 바꿔도 초록이었습니다.',
          '실제 코드를 태우는 테스트로 바꾸고, 메시지 처리 경로를 직접 도는 통합 테스트를 더했습니다.',
        ],
      },
      {
        title: '규칙이 판단을 가로챈 누출 방어 (2026-08-18 ~ 08-30)',
        points: [
          '다른 거래처 정보가 섞이지 않도록 결정론 치환과 최종 게이트를 넣었는데, 정규식이 차단까지 해 LLM 판정을 건너뛰었습니다.',
          '정규식은 트리거로만 두고, 판단은 LLM에 맡기도록 바꿨습니다.',
        ],
      },
      {
        title: '근거 없는 수치를 쓴 분석 보고서 (2026-09-23)',
        points: [
          '서브에이전트가 email-agent 저장소를 분석한 보고서에 근거 없는 가용률 수치가 들어 있었습니다.',
          '저장소 전체를 검색해 그 수치의 출처가 없음을 확인하고, 쓰지 않았습니다.',
        ],
      },
    ],
    incidentsTitle: '사고에서 배운 원칙',
    incidents: [
      { title: '테스트 초록 ≠ 배선 맞음', lesson: '그 분기를 지나가는 테스트가 없으면 import 누락도 초록입니다. 실제 프로세스를 띄워 catch 경로까지 태웁니다.' },
      { title: '한 번 못 찾은 건 없는 게 아니다', lesson: '부재를 보고하기 전에 시간 범위·검사 대상·입구와 출구를 다시 봅니다.' },
      { title: '도는 코드로 판정한다', lesson: '배포 뒤 실행 중인 코드를 직접 확인합니다.' },
      { title: '되돌릴 수 없는 일괄 변환은 하지 않는다', lesson: '옛 형식과 새 형식을 함께 받도록 바꿉니다.' },
      { title: '끌 때는 스위치로', lesson: '먼저 실사용 기록을 세고, 지우지 않고 끄는 방식으로 내립니다.' },
    ],
  },
  about: {
    title: 'About Me',
    photo: '/images/img.jpg',
    tagline: '반복 업무를 AI 시스템으로 바꾸는 AI 에이전트 엔지니어 목진희입니다.',
    paragraphs: [
      '법학을 전공하고 학점은행제로 경영학 학위도 땄고, 어린이집 운영실장과 영어 강사로 일했습니다. 2024년 하이미디어아카데미에서 개발을 배웠고, We:Review 인턴 때 OCR과 LLM으로 영수증 검수를 자동화하면서 지금 하는 일, 곧 현업의 반복 업무를 AI로 줄이는 일의 출발점이 됐습니다.',
      'StyleSeller에는 2025년 11월에 들어왔습니다. 지금은 카톡 거래처 대화 수집과 챗봇, 메일 답장 초안, 사내 업무툴, 직원 PC 배포를 맡고 있습니다.',
      '현업 요구는 실무자가 쓰던 값과 한 칸씩 대조해 규칙으로 옮깁니다. 시스템은 후보와 제안까지만 내고, 확정은 직원이 하게 설계합니다. 사고가 나면 원인과 고친 내용을 날짜와 함께 남깁니다.',
    ],
    nowTitle: 'Now',
    now: [
      '벤더 CS 챗봇이 실제 거래처 방에서 태그된 질문에만, 인계 없이 답하고 있습니다. 금액·%·브랜드는 근거와 대조해 고쳐 씁니다.',
      '조용히 멈추는 장애를 잡는 감시를 늘리고 있습니다. 10월 초에는 DB가 멈춰도 "정상"으로 보이던 상태 검사를 DB까지 확인하도록 바꿨습니다.',
      '비용 관측 도구(Langfuse)를 새 버전으로 올렸습니다(10-04).',
    ],
    timelineTitle: 'StyleSeller 월별 타임라인',
    timeline: [
      { month: '2025.11', text: '입사, 부서 업무 익히기' },
      { month: '2025.12~2026.01', text: '업무 자동화 시작' },
      { month: '2026.02', text: 'Instagram DM 자동화 첫 커밋(02-08), 크롬 확장으로 전환(02-27)' },
      { month: '2026.03', text: 'brand-tool 첫 커밋 — 구글 시트 가격표를 옮긴 가격 계산기와 제안서(03-31)' },
      { month: '2026.04', text: 'email-agent에 LightRAG 지식 그래프 도입(04-03), 공급사 카탈로그 AI 파싱' },
      { month: '2026.05', text: 'agent-company 착수(05-16, Paperclip 포크), 카톡 CS 크롬 확장(05-24)' },
      { month: '2026.06', text: 'LiteLLM에서 Claude를 빼고 Gemini로(06-06), 벤더 CS 백엔드 시작(06-29)' },
      { month: '2026.07', text: 'Spark·Work OS 착수(07-18~19), 지식 허브를 여러 워크스페이스로 확장(07-10)' },
      { month: '2026.08', text: '클라우드 DB 한도 초과로 업무툴 API가 멈춘 날 VM에 같은 API를 세워 당일 복구(08-20), 맞춤카톡 시작(08-24)' },
      { month: '2026.09', text: '직원 PC 11대 한 줄 설치 배포(09-16), 셀러찾기 워커 9대 운영(09-18)' },
      { month: '2026.10', text: '조용한 장애 감시 강화, Langfuse 업그레이드' },
    ],
    repoPeriods: '저장소별 기간: brand-tool 2026.03~ · email-agent 2026.03~(마지막 커밋 09-02) · agent-company 2026.05~ · kakaocli 2026.06~09 · Instagram DM 2026.02~(마지막 커밋 07-01)',
    experienceTitle: 'Journey',
    experienceLead: '법학 전공에서 AI 에이전트 엔지니어까지',
    careerChangeLabel: 'Career Change',
    experience: [
      { period: '2025.11 – 현재', org: 'StyleSeller 비즈니스 부서 PL', summary: '사내 AI·자동화', kind: 'tech' },
      { period: '2025.08 – 10', org: 'We:Review 인턴', summary: 'OCR+LLM 영수증 검수 자동화', kind: 'tech' },
      { period: '2025.05 – 07', org: '한국IT비즈니스진흥협회', summary: '생성형 AI 개발자 양성 과정', kind: 'tech' },
      { period: '2024.10 – 12', org: '하이미디어아카데미 · AI 과정', summary: '현업 멘토와 AI 프로젝트 (LangChain RAG 챗봇, OCR·번역 파이프라인)', kind: 'tech' },
      { period: '2024.04 – 10', org: '하이미디어아카데미 · 풀스택 과정', summary: 'Spring Boot·Vue.js 팀 프로젝트, 협업과 버전 관리', kind: 'tech', careerChange: true },
      { period: '2021.02 – 2023.06', org: '학점은행제 · 경영학', summary: '경영학 학위 과정', kind: 'pre' },
      { period: '2018.08 – 2024.02', org: '몬테키즈어학원 · 비탑킨더 · 정상어학원 · 영어 강사', summary: '수업 설계, 교안 제작, 학부모 상담', kind: 'pre' },
      { period: '2015.03 – 2018.02', org: '전원어린이집 · 운영실장', summary: '직원 관리와 일상 운영', kind: 'pre' },
      { period: '2008.03 – 2012.02', org: '청주대학교 · 법학과', summary: '법학 전공', kind: 'pre' },
    ],
  },
  skills: {
    title: 'Skills',
    lead: '실무 운영에 쓴 기술과 교육 과정에서 쓴 기술을 나눠 적었습니다.',
    sections: [
      {
        id: 'production',
        title: '실무 운영에 쓴 기술 (StyleSeller, 2026.02~)',
        groups: [
          {
            id: 'ai-agent',
            title: 'AI/Agent',
            items: [
              { id: 'llm-agent', label: 'Paperclip·Hermes 에이전트' },
              { id: 'jev', label: 'Jev 스킬 추천기' },
              { id: 'hitl', label: '도구 실행 승인 게이트' },
              { id: 'litellm', label: 'Gemini Flash 계열(LiteLLM 경유)' },
            ],
          },
          {
            id: 'rag-llmops',
            title: 'RAG·LLM Ops',
            items: [
              { id: 'rag', label: 'LightRAG 1.5.6 지식 허브' },
              { id: 'litellm-cap', label: 'LiteLLM 비용 상한' },
              { id: 'langfuse', label: 'Langfuse 4.50 추적' },
            ],
          },
          {
            id: 'backend',
            title: 'Backend',
            items: [
              { id: 'python', label: 'Python 3.12·FastAPI·Pydantic v2' },
              { id: 'nextjs', label: 'Next.js 16.2' },
              { id: 'node', label: 'Express 5' },
            ],
          },
          {
            id: 'db',
            title: 'DB',
            items: [
              { id: 'postgres', label: 'Postgres+PostgREST 자체 호스팅' },
              { id: 'rls', label: 'RLS·읽기 전용 역할' },
              { id: 'audit-log', label: '추가 전용 감사 로그' },
            ],
          },
          {
            id: 'field-infra',
            title: '현장 PC·인프라',
            items: [
              { id: 'launchd', label: '직원 맥·윈도우 11대 한 줄 설치' },
              { id: 'device-keys', label: '기기별 키' },
              { id: 'nginx', label: 'VM·nginx' },
              { id: 'docker', label: '커밋 이미지 배포' },
            ],
          },
        ],
      },
      {
        id: 'training',
        title: '교육 과정에서 쓴 기술 (2024)',
        groups: [
          {
            id: 'fullstack-course',
            title: '풀스택 과정',
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
            title: 'AI 과정',
            items: [
              { id: 'rag-course', label: 'LangChain RAG 챗봇' },
              { id: 'model-pipeline', label: 'OCR·번역 파이프라인' },
            ],
          },
        ],
      },
    ],
  },
};

export default ko;
