'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Intro from '@/components/Intro';
import PersonasDemo from '@/components/PersonasDemo';
import PersonaConstructor from '@/components/PersonaConstructor';

const Main = styled.main`
  min-height: 100vh;
`;

export default function Home() {
  const [view, setView] = useState('intro'); // 'intro', 'demo', 'constructor'

  return (
    <Main>
      {view === 'intro' && (
        <Intro
          onComplete={() => setView('demo')}
          onOpenConstructor={() => setView('constructor')}
        />
      )}
      {view === 'demo' && (
        <PersonasDemo onBack={() => setView('intro')} />
      )}
      {view === 'constructor' && (
        <PersonaConstructor onBack={() => setView('intro')} />
      )}
    </Main>
  );
}