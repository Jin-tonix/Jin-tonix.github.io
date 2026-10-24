// Projects 페이지 — StyleSeller case grid(맨 위) -> System Map
import React from 'react';
import { useLang } from '../lang/LangContext';
import SystemMap from '../components/ui/SystemMap';
import StatusBadge from '../components/ui/StatusBadge';
import imgAttrs from '../components/ui/imgAttrs';
import PageShell, { Section, SectionTitle } from '../components/ui/PageShell';
import {
  PortfolioGrid,
  ProjectBoxWrapper,
  ProjectBox,
  Description,
  CardSummary,
  CardStatus,
} from '../components/ui/GridKit';

export default function ProjectsPage() {
  const { content, withPrefix, lang } = useLang();
  const { nav, systemMap, cases } = content;

  return (
    <PageShell title={nav.projects}>
      <Section>
        <SectionTitle>StyleSeller &middot; 2026</SectionTitle>
        <PortfolioGrid>
          {cases.map((c) => (
            <ProjectBoxWrapper key={c.id}>
              <ProjectBox to={withPrefix(`/projects/${c.slug}`)}>
                <img src={c.logo} {...imgAttrs(c.logo)} alt={c.title} />
              </ProjectBox>
              <Description>{c.shortTitle}</Description>
              {c.status && (
                <CardStatus>
                  <StatusBadge status={c.status} lang={lang} />
                </CardStatus>
              )}
              {c.subtitle && <CardSummary>{c.subtitle}</CardSummary>}
            </ProjectBoxWrapper>
          ))}
        </PortfolioGrid>
      </Section>

      <Section>
        <SystemMap systemMap={systemMap} withPrefix={withPrefix} />
      </Section>

    </PageShell>
  );
}
