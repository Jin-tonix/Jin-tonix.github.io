// Home — 첫 화면 안에서 프로젝트 5개를 소개하는 쇼릴
import React from 'react';
import styled from 'styled-components';
import { useLang } from '../lang/LangContext';
import HeroShowreel from '../components/HeroShowreel';

const Page = styled.div`
  width: 100%;
  height: 100%;
`;

export default function Home() {
  const { content, withPrefix, lang } = useLang();
  const { hero } = content;

  return (
    <Page>
      <HeroShowreel hero={hero} content={content} lang={lang} withPrefix={withPrefix} />
    </Page>
  );
}
