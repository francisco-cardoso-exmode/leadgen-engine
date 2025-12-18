'use client';

import { useState } from 'react';
import styled from 'styled-components';
import Landing from '@/components/Landing';
import Intro from '@/components/Intro';
import PersonasDemo from '@/components/PersonasDemo';
import PersonaConstructor from '@/components/PersonaConstructor';

const Main = styled.main`
  min-height: 100vh;
`;

export default function Home() {
  const [view, setView] = useState('landing'); // 'landing', 'intro', 'demo', 'constructor'

  return (
    <Main>
      {view === 'landing' && (
        <Landing
          onEnterPresentation={() => setView('intro')}
          onEnterDemo={() => setView('demo')}
          onCreatePersona={() => setView('constructor')}
        />
      )}
      {view === 'intro' && (
        <Intro
          onComplete={() => setView('demo')}
          onOpenConstructor={() => setView('constructor')}
          onBack={() => setView('landing')}
        />
      )}
      {view === 'demo' && (
        <PersonasDemo
          onBack={() => setView('landing')}
          onOpenConstructor={() => setView('constructor')}
        />
      )}
      {view === 'constructor' && (
        <PersonaConstructor onBack={() => setView('landing')} />
      )}
    </Main>
  );
}
