'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Intro from '@/components/Intro';
import PersonasDemo from '@/components/PersonasDemo';

const Main = styled.main`
  min-height: 100vh;
`;

export default function Home() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <Main>
      {!showDemo ? (
        <Intro onComplete={() => setShowDemo(true)} />
      ) : (
        <PersonasDemo onBack={() => setShowDemo(false)} />
      )}
    </Main>
  );
}