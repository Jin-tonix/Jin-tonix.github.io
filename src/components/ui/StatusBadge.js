// 사례 운영 상태 배지 — 콘텐츠의 status 키(live·partial·staged·stopped·closed·dormant)를 언어별 문구로 보여준다
import React from 'react';
import styled from 'styled-components';
import { color, font } from './tokens';

export const STATUS_LABELS = {
  ko: {
    live: '운영 중',
    partial: '일부 운영',
    staged: '단계적 검증 중',
    stopped: '중지',
    closed: '종료',
    dormant: '휴면',
  },
  en: {
    live: 'Live',
    partial: 'Partly live',
    staged: 'Staged rollout',
    stopped: 'Stopped',
    closed: 'Closed',
    dormant: 'Dormant',
  },
};

// 운영 중·일부 운영·검증 중은 금색, 나머지는 회색
const ACTIVE = ['live', 'partial', 'staged'];

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: ${font.size.xs};
  font-weight: ${font.weight.subhead};
  line-height: 1.4;
  white-space: nowrap;
  padding: 2px 10px;
  border-radius: 999px;
  border: 1px solid ${({ $active }) => ($active ? color.gold : color.line)};
  color: ${({ $active }) => ($active ? color.gold : color.muted)};

  &::before {
    content: '';
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${({ $active, $solid }) => ($active ? ($solid ? color.gold : 'transparent') : color.muted)};
    border: 1px solid ${({ $active }) => ($active ? color.gold : color.muted)};
  }
`;

export default function StatusBadge({ status, lang, className }) {
  if (!status) return null;
  const label = (STATUS_LABELS[lang] && STATUS_LABELS[lang][status]) || status;
  return (
    <Badge className={className} $active={ACTIVE.includes(status)} $solid={status === 'live'}>
      {label}
    </Badge>
  );
}
