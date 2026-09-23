// 한국어 콘텐츠 — 실제 문구는 리드가 확정한다. 여기 값은 Project6-9/About/Skills 원문 기반 placeholder.
const ko = {
  lang: 'ko',
  nav: {
    home: 'Intro',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    build: 'How I Build',
    langSwitchLabel: 'EN',
    koOnlyNote: '한국어만 제공',
  },
  hero: {
    headline: '현업의 반복 업무를, 운영되는 AI로 바꾸는 개발자',
    sub: '목진희입니다. StyleSeller 에서 AI 에이전트 조직을 혼자 설계하고 운영합니다.',
    metrics: [
      { value: '6,800+', label: 'AI 협업 커밋 (2026)' },
      { value: '20+', label: '일하는 AI 에이전트' },
      { value: '3', label: '직접 만든 MCP 서버' },
      { value: '20', label: '자동화로 연결한 직원 PC' },
    ],
  },
  systemMap: {
    title: 'System Map',
    intro:
      'StyleSeller 의 반복 업무를 하나의 AI Company OS 로 묶었다. 아래 노드를 누르면 각 case study 로 이동한다.',
    image: '/images/proj6-1.png',
    imageAlt: 'AI Company OS 시스템 아키텍처 다이어그램',
    nodes: [
      { id: 'ai-company-os', label: 'AI Company OS', caseId: 'ai-company-os' },
      { id: 'brand-tool', label: 'brand-tool', caseId: 'brand-tool' },
      { id: 'email-agent', label: 'Email AI Agent', caseId: 'email-agent' },
      { id: 'field-automation', label: '현장 자동화', caseId: 'field-automation' },
    ],
  },
  cases: [
    {
      id: 'ai-company-os',
      slug: 'ai-company-os',
      logo: '/images/logo6.png',
      title: 'StyleSeller AI Company OS — 사내 AI 에이전트 플랫폼',
      shortTitle: 'AI Company OS',
      period: '2026.05 ~ 현재',
      role: '설계·개발·인프라·운영 (1인)',
      oneLiner: '20여 개 AI 에이전트가 일하는 사내 조직을 혼자 설계하고 운영한다.',
      highlights: [
        'AI 에이전트 조직 구성: CEO 에이전트 아래 CS·콘텐츠·광고·캠페인 팀 에이전트 20여 개',
        '사내 AI 비서 Spark: 전사 지식 질의, 출처 인용, 승인 기반 실행 제안',
        'MCP 서버 3종 직접 개발 (지식 검색 RAG, Google Workspace, 플랫폼 제어)',
        'Python 에이전트 서비스 46개 + Docker Compose 로 GCP VM 한 대에서 운영',
      ],
      stack: ['TypeScript', 'Node.js/Express', 'React', 'PostgreSQL(Drizzle)', 'Python/FastAPI', 'MCP', 'LiteLLM', 'Gemini 2.5', 'Claude(Claude Code)', 'LightRAG + Neo4j', 'Langfuse', 'n8n', 'Docker Compose', 'GitHub Actions', 'GCP'],
      scale: [
        '본인 커밋 4,316개 (merge 제외, 2026.05~09)',
        '에이전트 서비스 46개, MCP 서버 3개, 플러그인 2개 (email-agent 대시보드, IG DM 관제)',
        '설계 문서 56개 · 실행 계획 100개 · 테스트 파일 약 500개',
      ],
      background:
        'StyleSeller 는 인력 20명 규모의 패션 커머스 회사다. CS, 벤더 응대, 콘텐츠 제작, 광고 운영이 모두 사람 손으로 돌아갔다. ' +
        '처음 계획은 Temporal·LangGraph·LiteLLM·MCP 를 모두 갖춘 5계층 스택이었다. 하지만 인프라만 깔리고 실제로 일하는 에이전트는 0개였다. ' +
        '그래서 방향을 "이미 있는 자산(이메일 에이전트, 인스타 DM 봇, n8n)을 먼저 연결한다"로 바꿨다. ' +
        '오픈소스 에이전트 조직 플랫폼 Paperclip 을 fork 해 업무 추적·예산·승인을 그대로 쓰고, 그 위에 회사 전용 에이전트와 도구를 얹었다.',
      architectureImages: [
        { src: '/images/proj6-1.png', alt: 'AI Company OS 시스템 아키텍처 다이어그램' },
        { src: '/images/proj6-2.png', alt: 'AI 에이전트 조직도 다이어그램' },
      ],
      troubleshooting: [
        {
          title: '과설계를 버리고 동작하는 구조로 전환',
          problem: '계획한 5계층 스택은 구축 비용이 컸고, 5월 시점 실제 에이전트는 0개였다.',
          action: 'Temporal 은 n8n 트리거 + Paperclip 이슈로, LangGraph 는 Claude Code 에이전트로 대체했다. 새로 만들기보다 이미 돌아가는 자산을 연결하는 순서로 바꿨다.',
          result: '넉 달 사이 에이전트 20여 개가 조직도에 올라갔다.',
        },
        {
          title: '벤더 CS 챗봇이 다른 벤더의 거래 조건을 답한 문제 (RAG 교차 누출)',
          problem: '30문항 스모크 테스트에서 A 벤더 질문에 B 벤더 개별 조건을 회사 정책처럼 인용했다.',
          cause: '대화 기록이 아니라 지식 그래프 구조가 원인이었다 — 개별 거래가 공용 지식으로 섞여 있었다.',
          action: 'RAG 워크스페이스 분리, 답변 범위 게이트, 도구 범위 제한을 겹겹이 두었다.',
          result: '교차 누출 재현 0건으로 해결했다.',
        },
        {
          title: '키워드 필터를 LLM 판정으로 교체',
          problem: '정규식 게이트가 메시지를 조용히 막고 LLM 을 건너뛰었고, 막힌 줄도 아무도 몰랐다.',
          action: '싼 1차 트리거 뒤에 temperature 0, 5초 제한 LLM 판정을 두고, 실패하면 닫히게(fail-closed) 했다.',
          result: '직원 화면에 차단 이유가 보이도록 했다.',
        },
        {
          title: 'Claude 장애 시 Gemini 폴백이 빈 답을 내던 문제',
          problem: 'Claude 장애 시 전환되는 Gemini 폴백이 멀티턴 function calling 에서 빈 답을 냈다.',
          action: 'Gemini 프록시의 tool_calls 복원, tool_call_id 매핑, 타임아웃 정렬을 다시 맞췄다.',
          result: '장애 전환 시에도 답변이 끊기지 않게 했다.',
        },
        {
          title: '여러 AI 세션이 동시에 배포할 때의 안전장치',
          problem: '여러 Claude Code 세션이 동시에 배포를 시도하면 충돌 위험이 있었다.',
          action: 'VM 전역 배포 락, 커밋 안 된 트리 배포 거부, 마지막 빌드 커밋 기록, 배포 대상 판정 함수 테스트를 갖췄다.',
          result: '동시 배포로 인한 사고 0건.',
        },
      ],
      aiCollab: [
        '위임: 구현, 테스트 작성, 반복 수정은 Claude Code 세션 여러 개에 나눠 맡겼다.',
        '직접 판단: 아키텍처 전환, 권한 경계, HITL 기준(환불·VIP·대외 계약은 사람 승인)은 직접 정했다.',
        '검증: 설계 문서 → 계획 → 테스트 → 적대적 리뷰 → 실기기 확인 순서로 검증했다.',
      ],
    },
    {
      id: 'brand-tool',
      slug: 'brand-tool',
      logo: '/images/logo7.png',
      title: 'brand-tool — 사내 영업 운영 플랫폼',
      shortTitle: 'brand-tool',
      period: '2026.03 ~ 현재',
      role: '풀스택 개발·인프라·운영 (1인, 커밋 전부 본인)',
      oneLiner: '셀러 발굴부터 카톡 발송까지, 흩어진 영업 업무를 한 앱으로 모았다.',
      highlights: [
        '셀러찾기: 인스타그램 셀러 자동 발굴 (직원 PC 분산 워커 + 서버 잡 큐)',
        '맞춤카톡: 셀러별 판매 이력에 맞춘 상품 카드를 카카오톡으로 대량·예약 발송',
        'AI 벤더 매칭: RAG + 카테고리 후보 → LLM 판정 → 성사 추적',
        '제안서 PDF·엑셀 자동 생성, 사내 AI 비서 Spark 화면',
      ],
      stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'PostgreSQL 16 + PostgREST', 'Vertex AI Gemini 2.5', 'n8n', 'Playwright', 'Vitest', 'Docker', 'GitHub Actions', 'GCP'],
      scale: [
        '커밋 1,502개 · API 라우트 134개 · 화면 33개',
        'DB 마이그레이션 130개 · 테스트 파일 205개',
      ],
      background:
        '영업 직원이 제안서 한 장을 만들려면 구글 시트, 외부 CRM, 노션을 오가며 가격을 손으로 계산했다. ' +
        '인스타그램 셀러 발굴도 사람이 해시태그를 하나씩 눌러 리스트를 만들었다. ' +
        '이 흩어진 데이터를 한 DB 로 모으는 것에서 시작해, 셀러 발굴·벤더 매칭·카톡 발송까지 한 앱에서 끝나도록 넓혔다.',
      architectureImages: [
        { src: '/images/proj7-1.png', alt: 'brand-tool 시스템 아키텍처 다이어그램' },
        { src: '/images/proj7-2.png', alt: 'brand-tool 화면 스크린샷' },
      ],
      troubleshooting: [
        {
          title: '인스타가 서버 IP 를 막아 수집이 불가능했던 문제',
          problem: '인스타그램이 데이터센터 IP 를 차단해 서버 수집이 불가능했다.',
          action: '직원 PC 에서 도는 분산 워커로 설계했다. 화면을 클릭하지 않고 브라우저 안에서 내부 API 를 호출해 직원 작업을 방해하지 않게 했다. 서버는 잡 큐, 기기 등록, 한 계정 한 PC 규칙, 멈춘 회차 진단·재배치를 맡았다.',
          result: '직원 PC 에는 DB 키를 주지 않으면서도 안정적으로 수집했다.',
        },
        {
          title: '서버가 살아나자마자 진행 중 작업을 모두 취소한 버그',
          problem: '"3분간 안 보인 워커의 작업 취소" 규칙이 서버가 꺼져 있던 시간까지 워커 부재로 세어, 서버 복구 직후 진행 중 작업을 모두 취소했다.',
          cause: '정리 함수가 자기 실행 간격을 기록하지 않아 서버 다운타임과 워커 부재를 구분하지 못했다.',
          action: '정리 함수가 자기 실행 간격을 기록하게 해, 간격이 비면 서버가 없었던 것으로 보고 서버가 3분 연속 살아 있은 뒤에만 취소하도록 고쳤다.',
          result: '재현 테스트로 옛 함수 2/2 취소 → 새 함수 0 을 확인했다.',
        },
        {
          title: '사원 인증 쿠키를 손으로 만들 수 있던 보안 구멍',
          problem: '고정 문자열 쿠키 한 줄이면 사원 영역 전체가 열렸다.',
          action: '엣지 미들웨어에서 Web Crypto HMAC 서명 + 만료로 교체했다. 비밀값이 없으면 거부하되, 배포 순간 전원이 잠기지 않도록 기존 비밀로 폴백했다.',
          result: '위조 쿠키로는 더 이상 인증을 통과할 수 없다.',
        },
        {
          title: '클라우드 DB 정지 → 코드 수정 없이 자체 호스팅으로 이전',
          problem: '클라우드 DB 가 전송량 한도를 넘어 모든 API 가 멈췄다.',
          action: '앱이 REST 프로토콜만 쓴다는 것을 코드 전수 검색으로 확인하고, VM 에 같은 모양의 자체 호스팅 스택을 세워 환경변수 교체만으로 복구했다.',
          result: '당일 복구했고, 한 달 뒤 호스팅 무료 한도 정지 때도 무중단 교체로 이틀 만에 옮겼다.',
        },
        {
          title: 'LLM 벤더 매칭 결과가 요청마다 달라지던 문제',
          problem: '30개씩 나눈 청크마다 같은 벤더가 다른 점수를 받고 마지막 값으로 덮였고, 모델이 가끔 항목을 빠뜨렸다.',
          action: '최고 점수만 유지하고, 빠진 항목만 좁혀 재질의하도록 고쳤다.',
          result: '청크 순서와 무관하게 일관된 매칭 점수를 얻었다.',
        },
      ],
      aiCollab: [
        '기능마다 설계 문서 → 계획 → 테스트 먼저 → 구현 → 리뷰 순서로 진행했다 (설계·계획 문서 67개).',
        '"테스트가 초록이어도 배선은 틀릴 수 있다"는 원칙으로, 배포 후 도는 코드의 해시와 실제 화면으로 다시 확인했다.',
      ],
    },
    {
      id: 'email-agent',
      slug: 'email-agent',
      logo: '/images/logo8.png',
      title: 'Email AI Agent — 대표 메일 답장 초안 에이전트',
      shortTitle: 'Email AI Agent',
      period: '2026.03 ~ 2026.07 (이후 AI Company OS 플러그인으로 연결)',
      role: '설계·개발·배포 (1인)',
      oneLiner: '근거 있는 답장 초안을 먼저 만들어 두고, 대표는 확인만 한다.',
      highlights: [
        'Gmail → n8n → FastAPI 파이프라인 (파싱 → 분류 → 초안 → 검증 → 학습)',
        'LightRAG 지식 그래프(Neo4j + pgvector) 기반 근거 검색',
        'LLM-as-Judge 품질 검증 + 아첨·앵무새 답변 검사',
        '사람이 고친 초안을 다시 학습하는 스타일북 (HITL)',
      ],
      stack: ['Python', 'FastAPI', 'asyncio', 'LightRAG', 'Neo4j', 'PostgreSQL + pgvector', 'Vertex AI Gemini 2.5', 'Claude', 'LiteLLM', 'n8n', 'Slack', 'Docker', 'pytest', 'Pyright'],
      scale: [
        '커밋 923개 (2026.03~07)',
        'Python 약 3.6만 줄',
        'API 라우터 25개',
      ],
      background:
        '대표 메일함에는 브랜드 제휴, 셀러 입점 문의, 협업 제안이 섞여 들어왔다. ' +
        '답장은 과거 거래 맥락을 알아야 쓸 수 있어서 대표 한 사람에게 몰렸다. ' +
        '목표는 "근거 있는 초안을 먼저 만들어 두고, 대표는 확인만 한다"였다.',
      architectureImages: [
        { src: '/images/proj8-1.png', alt: 'Email AI Agent 파이프라인 아키텍처 다이어그램' },
      ],
      troubleshooting: [
        {
          title: '평면 벡터 검색으로는 "이 회사가 전에 무엇을 물었나"를 못 찾던 문제',
          problem: '평면 벡터 검색만으로는 특정 회사·담당자의 과거 요청 맥락을 찾을 수 없었다.',
          action: 'v2 에서 LightRAG 지식 그래프를 도입해 회사·담당자·과거 요청을 관계로 묶었다. 커버리지가 부족하면 질의를 한 번 다시 쓰는 에이전트형 검색을 더했다.',
          result: '과거 거래 맥락을 반영한 근거 검색이 가능해졌다.',
        },
        {
          title: '리랭커가 서버 자원을 과하게 쓰던 문제',
          problem: '2.2GB 로컬 ONNX 리랭커가 VM 메모리를 과하게 썼다.',
          action: 'Vertex AI Gemini 리랭킹으로 교체했다.',
          result: 'VM 메모리 부담을 없앴다.',
        },
        {
          title: '행정·물류 확인 메일을 "앵무새 답변"으로 오탐하던 문제',
          problem: '검증 로직이 행정·물류 확인 메일까지 앵무새 답변으로 오탐했다.',
          action: '검증 프롬프트에 업무 맥락 예외를 넣고, 콜드 메일에도 같은 자가 검증을 적용했다.',
          result: '정상 업무 메일의 오탐을 줄였다.',
        },
        {
          title: '외부 폼 구조가 바뀌면 리드 가져오기가 조용히 틀리던 문제',
          problem: '외부 폼 구조가 바뀌면 리드 가져오기가 조용히 틀린 값을 넣었다.',
          action: '원본 필드 JSON 과 CSV 헤더를 대조해 슬롯 이름 불일치를 잡았다.',
          result: '폼 구조 변경을 조용히 넘기지 않고 잡아냈다.',
        },
      ],
      aiCollab: [
        '모든 함수에 타입 힌트, Pyright 에러 0 을 완료 조건으로 두었다.',
        '보안 교차 검증에서 나온 지적 6건을 배포 전에 모두 반영했다.',
      ],
    },
    {
      id: 'field-automation',
      slug: 'field-automation',
      logo: '/images/logo9.png',
      title: '현장 자동화 — Instagram DM · KakaoTalk · 직원 PC',
      shortTitle: '현장 자동화',
      period: '2026.02 ~ 현재',
      role: '크롬 확장·macOS CLI·설치기·원격 관제 개발 (1인)',
      oneLiner: '공식 API 가 없는 인스타 DM·카카오톡을, 직원 PC 를 자동화 노드로 삼아 돌린다.',
      highlights: [
        'Instagram DM 크롬 확장 (MV3): 작업 큐 기반 맞춤 DM, 지역별 발송, 매일 도는 DOM 자가 점검 에이전트',
        'KakaoTalk CLI (Swift, 오픈소스 fork 확장): 실시간 수신 동기화, 발송 후 도착 확인, 이미지·PDF 발송',
        '맥·윈도우 한 줄 설치기, 자동 갱신, 원격 관제 대시보드',
        '오픈채팅 공동구매 공지 자동 발송 (템플릿 이미지 합성)',
      ],
      stack: ['JavaScript', 'Chrome Extension MV3', 'Chrome DevTools Protocol', 'Swift', 'macOS Accessibility API', 'Node.js', 'Playwright', 'Supabase', 'n8n', 'Gemini Vision', 'Bash/PowerShell'],
      scale: [
        'Instagram DM 확장: 소스 약 1.5만 줄 + 테스트 약 1만 줄',
        'KakaoTalk CLI 본인 커밋 81개 (Swift 3.9천 → 6.6천 줄)',
        '카톡 실시간 동기화 직원 11명, 셀러찾기 워커 PC 9대 운영',
      ],
      background:
        '인스타그램 DM 과 개인 카카오톡은 공식 API 가 없다. 직원들은 같은 문구를 복사해 붙이고, 대화 기록은 각자의 PC 에만 남았다. ' +
        '서버에서 돌릴 수 없으니 직원 PC 를 자동화 노드로 삼고, 그 PC 들을 안전하게 배포·갱신·관제하는 체계가 필요했다.',
      architectureImages: [
        { src: '/images/proj9-1.png', alt: '현장 자동화 시스템 구성도' },
      ],
      troubleshooting: [
        {
          title: '인스타그램 입력창에 글자가 제대로 안 들어가던 문제',
          problem: '신뢰된 사용자 입력만 받는 에디터 때문에 스크립트로 글자를 넣을 수 없었다.',
          action: 'Chrome DevTools Protocol 로 실제 키 입력 이벤트를 보내는 방식으로 바꿨다. 화면 구조가 바뀔 때를 대비해 매일 도는 점검 에이전트(Playwright + Claude Code)가 발송 경로를 확인하고 고치게 했다.',
          result: '입력 실패 없이 발송 경로를 유지했다.',
        },
        {
          title: '카카오톡 발송 작업의 21% 가 영구 실패하던 문제',
          problem: '창 상태를 묻는 접근성 호출이 멈추면 작업이 끝나지 않아 발송 작업의 21% 가 영구 실패했다.',
          action: '하드 타임아웃 워치독을 넣고 발송 후 도착 여부를 다시 확인하게 했다.',
          result: '영구 실패율을 크게 낮췄다.',
        },
        {
          title: '오픈채팅 발송이 사흘 동안 조용히 실패한 문제',
          problem: '권한 문제가 아니라 카톡 메인 창이 없는 상태로 굳었고, 실패를 알릴 경로가 없어 사흘 동안 몰랐다.',
          action: '발송기 재시작 후 1회 재시도, 실패 사유를 담은 슬랙 알림, 발송 직후 감시 크론을 추가했다.',
          result: '실패를 그날 안에 알게 됐다.',
        },
        {
          title: '수집 속도와 발송 속도 개선',
          problem: '리뷰 수집과 오픈채팅 발송 대기가 느려 병목이었다.',
          action: '최소화된 창의 타이머 제한을 우회하고, 오픈채팅 발송 대기를 고정 sleep 에서 상태 확인 폴링으로 바꿨다.',
          result: '리뷰 1,000건 수집 100분 → 2분 30초, 발송 대기 27초 → 11초로 줄었다.',
        },
      ],
      aiCollab: [
        '"한 번 못 찾은 건 없는 게 아니다", "이미지 날짜가 아니라 도는 코드의 해시로 판정한다" 같은 검증 원칙을 사고마다 정리해 다음 작업에 적용했다.',
      ],
    },
  ],
  howIBuild: {
    title: 'How I Build',
    intro: 'AI 에이전트에게 구현을 맡기되, 결과에 대한 책임은 검증 절차로 진다. 아래는 실제로 쓰는 루프와 하네스다.',
    loopTitle: '기본 루프',
    loop: [
      '설계 문서 작성',
      '실행 계획으로 쪼개기',
      '테스트 먼저 쓰기',
      'AI 세션에 구현 위임',
      '적대적 리뷰 (다른 출처 에이전트 교차검증)',
      '실기기·라이브 코드로 재확인',
    ],
    harnessTitle: '하네스 (에이전트 실수를 막는 규칙)',
    harness: [
      'Python 함수는 모두 타입 힌트, pyright 에러·경고 0',
      'TypeScript strict 모드, tsc --noEmit 통과',
      '테스트 초록 ≠ 배선 맞음 — 배포 후 도는 코드의 해시로 재확인',
      'VM 전역 배포 락 + 커밋 안 된 트리 배포 거부',
      'HITL 임계치: 환불 ≥ ₩100,000, VIP 이슈, ₩1,000,000 이상 외부 결제는 사람 승인',
      '같은 출처 에이전트끼리 교차검증 금지 — 다른 출처 에이전트로 짝짓기',
    ],
    incidentsTitle: 'Incident Log',
    incidents: [
      { title: 'RAG 교차 누출', lesson: '대화 기록이 아니라 지식 그래프 구조가 원인이었다 — 워크스페이스를 분리하고 답변 범위를 게이트했다.' },
      { title: '정규식 필터의 조용한 차단', lesson: '막힌 줄도 아무도 몰랐다 — LLM 판정을 fail-closed 로 두고 이유를 화면에 남겼다.' },
      { title: '서버 다운타임을 워커 부재로 오판', lesson: '정리 함수가 자기 실행 간격을 기록하지 않으면 복구 직후 진행 중 작업을 몰살한다.' },
      { title: '고정 문자열 인증 쿠키', lesson: '한 줄 문자열이면 사원 영역 전체가 열린다 — HMAC 서명 + 만료로 교체했다.' },
      { title: '이미지 날짜로 배포 판정', lesson: '라이브 판정은 도는 코드의 해시 + 프로세스 시각으로 한다, 이미지 날짜는 속인다.' },
    ],
  },
  before: {
    title: 'Before · 2024–2025',
    intro: '같은 카드, 작게 둔다. 지금 하는 일과 어떻게 연결되는지 한 줄로 남긴다.',
    projects: [
      {
        route: '/projects/project5',
        logo: '/images/logo5.png',
        title: 'We:Review',
        period: '2024.08 ~ 2024.10',
        oneLiner: 'OCR + LLM 기반 영수증 자동 검수 파이프라인 (인턴)',
        connection: '→ OCR+LLM 파이프라인 경험이 Email AI Agent 의 LightRAG 근거 검색 설계로 이어졌다.',
      },
      {
        route: '/projects/project4',
        logo: '/images/logo4.png',
        title: 'FitChecker',
        period: '2024.11.05 ~ 12.20',
        oneLiner: '대화를 통해 운동을 추천하는 AI 홈트레이닝 앱 (Langchain 기반 AI agent)',
        connection: '→ Langchain 기반 AI agent 개발 경험이 AI Company OS 의 에이전트 설계로 이어졌다.',
      },
      {
        route: '/projects/project3',
        logo: '/images/logo3.png',
        title: 'Briefify',
        period: '2024.10.25 ~ 11.04',
        oneLiner: '이미지·텍스트 문서 번역·요약 AI 웹 서비스',
        connection: '→ AI 모델 검색 경험이 이후 LiteLLM 기반 모델 라우팅 설계로 이어졌다.',
      },
      {
        route: '/projects/project1',
        logo: '/images/logo1.png',
        title: '전직시 (전지적구직자시점)',
        period: '2024.08.26 ~ 10.02',
        oneLiner: '자격증 기반 채용정보로 구직자의 취업을 돕는 웹/앱 서비스',
        connection: '→ 관리자 페이지·Flutter 앱 구현 경험이 이후 사내 대시보드 설계 감각으로 이어졌다.',
      },
      {
        route: '/projects/project2',
        logo: '/images/logo2.png',
        title: 'Flux',
        period: '2024.07.15 ~ 08.16',
        oneLiner: '아티스트 경매 플랫폼 Market/My Page 개발',
        connection: '→ 다중 화면 상태 관리 경험이 brand-tool 화면 33개 설계의 출발점이 됐다.',
      },
    ],
  },
  timeline: [
    { period: '2024.07 – 08', title: 'Flux', desc: '팀 프로젝트 — 아티스트 경매 플랫폼 Market/My Page 개발' },
    { period: '2024.08 – 10', title: '전직시 · We:Review', desc: '팀 프로젝트(채용정보 서비스) + We:Review 인턴(OCR+LLM 영수증 검증)' },
    { period: '2024.10 – 11', title: 'Briefify', desc: '팀 프로젝트 — 문서 번역·요약 AI 웹 서비스' },
    { period: '2024.10 – 12', title: 'AI 실무 교육', desc: '한국IT비즈니스진흥협회 · 하이미디어아카데미 생성형 AI 개발자 과정' },
    { period: '2024.11 – 12', title: 'FitChecker', desc: '팀 프로젝트 — Langchain 기반 AI agent 홈트레이닝 앱' },
    { period: '2026.02 ~', title: 'StyleSeller 입사', desc: 'AI Product Engineer. 현장 자동화(Instagram DM·KakaoTalk) 개발 시작' },
    { period: '2026.03 ~', title: 'brand-tool · Email AI Agent', desc: '영업 운영 플랫폼과 대표 메일 에이전트를 동시에 개발' },
    { period: '2026.05 ~', title: 'AI Company OS', desc: '사내 AI 에이전트 조직 플랫폼 설계·운영 시작', now: true },
  ],
  about: {
    title: 'About Me',
    photo: '/images/img.jpg',
    tagline: '열정을 불태울 준비가 된 목진희입니다.',
    paragraphs: [
      '법학 전공과 영어 강사 경력을 통해 사용자 관점에서 문제를 이해하고 맞춤형 해결책을 제시하는 역량을 키웠습니다. 사람들의 문제를 기술로 해결하고자 개발 분야로 전향하여 K-Digital Training과 생성형 AI 개발자 맞춤형 인재 양성과정을 통해 실무 역량을 쌓았습니다.',
      'StyleSeller 에서는 혼자 사내 AI 플랫폼을 만들고 운영했습니다. 에이전트 20여 개가 일하는 AI Company OS, 커밋 1,500개 규모의 영업 운영 플랫폼, 대표 메일 답장 에이전트, 직원 PC 자동화까지 기획부터 배포와 장애 대응을 맡았습니다. AI 코딩 도구로 속도를 내되, 결과는 테스트·교차 리뷰·실기기 확인으로 검증하는 것을 원칙으로 삼았습니다.',
      'FitChecker 프로젝트에서 LLM 기반 AI 챗봇을 개발하며 RAG로 영상 추천 정확도를 50% 향상시켰고, WeReview 인턴십에서 OCR+LLM 파이프라인을 구축해 영수증 검수 자동화를 달성했습니다.',
      '강점은 한 번 문제에 빠져들면 해결될 때까지 깊이 파고드는 집중력과, 영어 강사로서 키운 사용자 관점의 개발 철학입니다. 다만 간혹 모든 경우의 수를 생각하는 경향 때문에 오버엔지니어링을 할 때가 있어, Simplicity over Complexity 를 항상 마음에 새기고 팀원의 솔직한 의견에 늘 귀 기울이며 균형 잡힌 개발자로 성장하려고 노력하고 있습니다.',
      '인턴으로써 첫 실무 3개월 만에 비즈니스 성과를 냈고, 복잡한 기술보다 효율적인 알고리즘이 중요하다는 것을 배웠습니다. 사용자의 진짜 문제를 끝까지 해결하는 개발자로서, 성장과 기여를 동시에 실현하며 발전하겠습니다.',
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        org: 'StyleSeller · AI Product Engineer',
        period: '2026.02–현재',
        bullets: [
          '사내 AI 에이전트 플랫폼 AI Company OS 설계·개발·운영: 에이전트 20여 개, 기획부터 배포·장애 대응까지 담당',
          '영업 운영 플랫폼 brand-tool 풀스택 개발: 셀러 발굴·AI 벤더 매칭·카톡 발송 자동화 (커밋 1,500개)',
          'Email AI Agent·현장 자동화(Instagram DM·KakaoTalk) 개발: 직원 PC 자동화 노드 배포·원격 관제',
        ],
      },
      {
        org: '위리뷰(WeReview) 인턴',
        period: '2024.08–2024.10',
        bullets: [
          'OCR+LLM 파이프라인 구축: 영수증 처리 자동화 핵심 모듈 개발',
          '기술 스택 리서치 및 의사결정: 오픈소스 라이선스·성능 비교 분석',
          '프롬프트 엔지니어링: LLM 기반 구조화된 데이터 추출(JSON)',
        ],
      },
      {
        org: '(사)한국IT비즈니스진흥협회',
        period: '2024.10–2024.12',
        bullets: ['인공지능에 관한 이론교육 및 생성형 AI를 이용한 실습'],
      },
      {
        org: '하이미디어아카데미',
        period: '2024.10–2024.12',
        bullets: [
          'AI 프로젝트 실행 능력: 팀과 협력하여 AI 애플리케이션 설계·개발',
          '팀 협업 및 문제 해결: 다양한 문제를 해결하고 최적 결과 도출',
        ],
      },
      {
        org: '하이미디어아카데미',
        period: '2024.03–2024.09',
        bullets: [
          '풀스택 개발 능력: Spring Boot·Vue.js 기반 프로젝트 진행 및 API 개발',
          '협업 및 버전 관리: GitHub 협업·코드 리뷰 경험 강화',
        ],
      },
      { org: '몬테키즈 영어 강사', period: '2022.06–2024.02', bullets: ['개인 맞춤형 교육·자기주도 학습 유도'] },
      { org: 'Pots&pans 영어 강사', period: '2021.03–2022.05', bullets: ['몰입 교육 및 학습 성과 관리'] },
      { org: 'JLS (정상어학원) 강사', period: '2018.08–2020.09', bullets: ['참여형 수업 설계 및 학부모 소통'] },
      { org: '전원 어린이집 운영실장', period: '2015.03–2018.02', bullets: ['조직 관리·리더십·효율적 운영'] },
    ],
    timelineTitle: 'Timeline',
    nowTitle: 'Now',
    nowText: 'AI Company OS 운영 + brand-tool 확장을 동시에 진행 중.',
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        id: 'ai-agent',
        title: 'AI / Agent',
        items: [
          { id: 'llm-agent', label: 'LLM 에이전트 설계' },
          { id: 'mcp', label: 'MCP 서버' },
          { id: 'rag', label: 'RAG (LightRAG, pgvector)' },
          { id: 'litellm', label: 'LiteLLM' },
          { id: 'langfuse', label: 'Langfuse' },
          { id: 'hitl', label: 'HITL 승인 설계' },
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
          { id: 'zero-downtime', label: '무중단 배포' },
          { id: 'n8n', label: 'n8n' },
          { id: 'chrome-ext', label: 'Chrome Extension MV3' },
          { id: 'playwright', label: 'Playwright / CDP' },
          { id: 'swift', label: 'Swift (macOS)' },
        ],
      },
    ],
  },
  legacyProjects: {
    project1: { title: '전직시', route: '/projects/project1' },
    project2: { title: 'Flux', route: '/projects/project2' },
    project3: { title: 'Briefify', route: '/projects/project3' },
    project4: { title: 'FitChecker', route: '/projects/project4' },
    project5: { title: 'We:Review', route: '/projects/project5' },
  },
};

export default ko;
