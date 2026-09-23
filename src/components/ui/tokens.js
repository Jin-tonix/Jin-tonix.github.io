// 사이트 전체가 공유하는 디자인 토큰 — 색상 · 타이포 · 레이아웃 값을 한 곳에서 관리한다.

export const color = {
  bg: '#222222',
  surface: '#2B2B2B',
  line: '#3A3A3A',
  text: '#E8E8E8',
  muted: '#A0A0A0',
  gold: '#FFD700',
};

export const font = {
  family: "'Pretendard Variable', -apple-system, 'Apple SD Gothic Neo', sans-serif",
  size: {
    xs: '13px',
    sm: '15px',
    md: '17px',
    lg: '22px',
    xl: 'clamp(1.6rem, 1.1rem + 2vw, 1.875rem)', // 30px
    xxl: 'clamp(1.9rem, 1rem + 4vw, 2.75rem)', // 44px
  },
  weight: {
    body: 400,
    subhead: 600,
    title: 800,
  },
  bodyLineHeight: 1.7,
  proseMaxWidth: '72ch',
};

export const layout = {
  maxWidth: '1120px',
  paddingDesktop: '56px 48px',
  paddingMobile: '28px 20px',
  sectionGap: '56px',
  radius: '10px',
};

export const breakpoint = {
  mobile: '600px',
  tablet: '768px',
};
