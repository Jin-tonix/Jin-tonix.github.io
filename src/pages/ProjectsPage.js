// Projects 페이지 — System Map -> StyleSeller 2026 case grid -> Before 2024-2025 grid
import React from 'react';
import { useLang } from '../lang/LangContext';
import SystemMap from '../components/ui/SystemMap';
import PageShell, { Section, SectionTitle, SectionIntro } from '../components/ui/PageShell';
import {
  PortfolioGrid,
  SmallPortfolioGrid,
  ProjectBoxWrapper,
  SmallProjectBoxWrapper,
  ProjectBox,
  SmallProjectBox,
  Description,
  Connection,
} from '../components/ui/GridKit';

export default function ProjectsPage() {
  const { content, withPrefix } = useLang();
  const { nav, systemMap, cases, before } = content;

  return (
    <PageShell title={nav.projects}>
      <Section>
        <SystemMap systemMap={systemMap} withPrefix={withPrefix} />
      </Section>

      <Section>
        <SectionTitle>StyleSeller &middot; 2026</SectionTitle>
        <PortfolioGrid>
          {cases.map((c) => (
            <ProjectBoxWrapper key={c.id}>
              <ProjectBox to={withPrefix(`/projects/${c.slug}`)}>
                <img src={c.logo} alt={c.title} />
              </ProjectBox>
              <Description>{c.shortTitle}</Description>
            </ProjectBoxWrapper>
          ))}
        </PortfolioGrid>
      </Section>

      <Section>
        <SectionTitle>{before.title}</SectionTitle>
        <SectionIntro>{before.intro}</SectionIntro>
        <SmallPortfolioGrid>
          {before.projects.map((p) => (
            <SmallProjectBoxWrapper key={p.route}>
              <SmallProjectBox to={withPrefix(p.route)}>
                <img src={p.logo} alt={p.title} />
              </SmallProjectBox>
              <Description>{p.title}</Description>
              <Connection>{p.connection}</Connection>
            </SmallProjectBoxWrapper>
          ))}
        </SmallPortfolioGrid>
      </Section>
    </PageShell>
  );
}
