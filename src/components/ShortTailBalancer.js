// 두 줄로 넘어가면서 마지막 줄에 한두 단어만 남는 문장을 찾아, 그 문장만 두 줄 길이를 고르게 나눈다
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TAIL_RATIO = 0.25;

function lineBoxes(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const lines = new Map();
  for (const rect of range.getClientRects()) {
    if (rect.width === 0) continue;
    const key = Math.round(rect.top / 4);
    const line = lines.get(key) || { left: rect.left, right: rect.right };
    line.left = Math.min(line.left, rect.left);
    line.right = Math.max(line.right, rect.right);
    lines.set(key, line);
  }
  return [...lines.entries()].sort((a, b) => a[0] - b[0]).map(([, line]) => line);
}

function balanceShortTails() {
  const root = document.querySelector('.main-content');
  if (!root) return;
  const blocks = [...root.querySelectorAll('p, li')].filter((el) => !el.querySelector('p, li'));
  blocks.forEach((el) => {
    el.style.textWrap = '';
  });
  blocks.forEach((el) => {
    const lines = lineBoxes(el);
    if (lines.length !== 2) return;
    const tail = lines[1].right - lines[1].left;
    if (tail < el.getBoundingClientRect().width * TAIL_RATIO) {
      el.style.textWrap = 'balance';
    }
  });
}

export default function ShortTailBalancer() {
  const location = useLocation();

  useEffect(() => {
    let timer;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(balanceShortTails, 150);
    };
    schedule();
    const late = setTimeout(balanceShortTails, 800);
    window.addEventListener('resize', schedule);
    document.addEventListener('toggle', schedule, true);
    return () => {
      clearTimeout(timer);
      clearTimeout(late);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('toggle', schedule, true);
    };
  }, [location.pathname]);

  return null;
}
