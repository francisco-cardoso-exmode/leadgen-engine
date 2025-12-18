'use client';

import { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.background};
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  }
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: -0.02em;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
    justify-content: center;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.accent : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.textInverse : theme.colors.textSecondary};
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.accent : theme.colors.border};

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.accentHover : theme.colors.surfaceHover};
  }
`;

const SlideContent = styled.div`
  animation: ${fadeIn} 0.4s ease;
`;

const Label = styled.span`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: -0.03em;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.1;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const PointsList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Point = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }

  &::before {
    content: '';
    flex-shrink: 0;
    width: 6px;
    height: 6px;
    background: ${({ $negative, theme }) => $negative ? '#EF4444' : theme.colors.accent};
    border-radius: 50%;
    margin-top: 0.6em;
  }
`;

const ComparisonGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ComparisonCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ $highlight, theme }) => $highlight ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ComparisonTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ $highlight, theme }) => $highlight ? theme.colors.accent : theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ComparisonList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ComparisonItem = styled.li`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding-left: ${({ theme }) => theme.spacing.md};
  position: relative;
  line-height: 1.5;

  &::before {
    content: '${({ $positive }) => $positive ? '✓' : '×'}';
    position: absolute;
    left: 0;
    color: ${({ $positive }) => $positive ? '#22C55E' : '#EF4444'};
    font-weight: 600;
  }
`;

const ToolsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ToolCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    align-items: center;
  }
`;

const ToolInfo = styled.div`
  flex: 1;
`;

const ToolName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: 4px;
`;

const ToolDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const ToolLimitation = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #EF4444;
  background: #FEE2E2;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const FeatureNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.textInverse};
  border-radius: ${({ theme }) => theme.radii.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FeatureTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const FeatureDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  }
`;

const ProgressBar = styled.div`
  flex: 1;
  height: 2px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
  max-width: 200px;
`;

const Progress = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  transition: width ${({ theme }) => theme.transitions.base};
  width: ${({ $progress }) => $progress}%;
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ $primary, theme }) => 
    $primary ? theme.colors.accent : 'transparent'};
  color: ${({ $primary, theme }) => 
    $primary ? theme.colors.textInverse : theme.colors.textPrimary};
  border: 1px solid ${({ $primary, theme }) => 
    $primary ? theme.colors.accent : theme.colors.border};

  &:hover {
    background: ${({ $primary, theme }) => 
      $primary ? theme.colors.accentHover : theme.colors.surfaceHover};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const slides = [
  {
    id: 'problem',
    label: 'O Problema',
    type: 'problem'
  },
  {
    id: 'current',
    label: 'Soluções Atuais',
    type: 'tools'
  },
  {
    id: 'solution',
    label: 'A Nossa Solução',
    type: 'solution'
  },
  {
    id: 'comparison',
    label: 'Antes vs Depois',
    type: 'comparison'
  },
  {
    id: 'features',
    label: 'Como Funciona',
    type: 'features'
  }
];

const tools = [
  {
    name: 'LinkedIn Sales Navigator',
    description: 'Bom para B2B, pesquisa por cargo e empresa',
    limitation: 'Manual e caro'
  },
  {
    name: 'Apollo / Clearbit / ZoomInfo',
    description: 'Bases de dados de contactos empresariais',
    limitation: 'Dados, não inteligência'
  },
  {
    name: 'Meta / Google Ads',
    description: 'Audiências por interesses e demografia',
    limitation: 'Sem precisão real'
  },
  {
    name: 'CRM (HubSpot, Salesforce)',
    description: 'Gestão de contactos e pipeline',
    limitation: 'Armazena, não descobre'
  }
];

const features = [
  {
    title: 'Define Personas Inteligentes',
    description: 'Cria perfis de cliente ideal com sinais de intenção específicos — não apenas demografia, mas comportamentos que indicam interesse real.'
  },
  {
    title: 'IA Identifica Leads',
    description: 'O sistema analisa redes sociais, engagement, e sinais públicos para encontrar pessoas que encaixam nas tuas personas.'
  },
  {
    title: 'Scoring Automático',
    description: 'Cada lead recebe uma pontuação baseada na força dos sinais. Sabes quem está quente e quem ainda precisa de nurturing.'
  },
  {
    title: 'Integração Direta',
    description: 'Exporta para CRM, cria audiências para Meta/LinkedIn Ads, ou dispara sequências de email automaticamente.'
  }
];

export default function Intro({ onComplete }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides[currentSlide];
  const progress = ((currentSlide + 1) / slides.length) * 100;
  const isLast = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      onComplete();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const renderSlideContent = () => {
    switch (slide.type) {
      case 'problem':
        return (
          <>
            <Label>O Problema</Label>
            <Title>Lead generation está partido</Title>
            <Subtitle>
              As empresas gastam milhares em ferramentas e ads, mas continuam sem saber quem realmente quer comprar.
            </Subtitle>
            <PointsList>
              <Point $negative>Listas genéricas compradas sem contexto — contactos que nunca ouviram falar de ti</Point>
              <Point $negative>Ads que disparam para milhares, convertem dezenas — budgets desperdiçados</Point>
              <Point $negative>Equipas de vendas a fazer cold calls para leads frios — tempo perdido</Point>
              <Point $negative>Zero inteligência sobre intenção real — adivinhar quem pode querer comprar</Point>
            </PointsList>
          </>
        );
      
      case 'tools':
        return (
          <>
            <Label>O Que Usam Hoje</Label>
            <Title>Ferramentas fragmentadas</Title>
            <Subtitle>
              Cada ferramenta resolve uma parte do problema, mas nenhuma conecta os pontos.
            </Subtitle>
            <ToolsGrid>
              {tools.map((tool, index) => (
                <ToolCard key={index}>
                  <ToolInfo>
                    <ToolName>{tool.name}</ToolName>
                    <ToolDescription>{tool.description}</ToolDescription>
                  </ToolInfo>
                  <ToolLimitation>{tool.limitation}</ToolLimitation>
                </ToolCard>
              ))}
            </ToolsGrid>
          </>
        );
      
      case 'solution':
        return (
          <>
            <Label>A Nossa Solução</Label>
            <Title>LeadGen Engine</Title>
            <Subtitle>
              Um sistema inteligente que transforma a pergunta de "quem pode comprar" para "quem quer comprar agora".
            </Subtitle>
            <PointsList>
              <Point>Define personas com sinais de intenção específicos — comportamentos que indicam interesse real</Point>
              <Point>IA analisa redes sociais e engagement para identificar leads que encaixam</Point>
              <Point>Scoring automático baseado em comportamento, não em suposições</Point>
              <Point>Integração direta com ads e CRM — da descoberta à conversão</Point>
            </PointsList>
          </>
        );
      
      case 'comparison':
        return (
          <>
            <Label>A Diferença</Label>
            <Title>Antes vs Depois</Title>
            <Subtitle>
              A mudança de paradigma que faz a diferença entre desperdiçar budget e converter clientes.
            </Subtitle>
            <ComparisonGrid>
              <ComparisonCard>
                <ComparisonTitle>Como fazem hoje</ComparisonTitle>
                <ComparisonList>
                  <ComparisonItem $positive={false}>Listas estáticas que desatualizam</ComparisonItem>
                  <ComparisonItem $positive={false}>Segmentação por demografia genérica</ComparisonItem>
                  <ComparisonItem $positive={false}>Sem noção de timing ou intenção</ComparisonItem>
                  <ComparisonItem $positive={false}>Trabalho manual e repetitivo</ComparisonItem>
                  <ComparisonItem $positive={false}>Ferramentas desconectadas</ComparisonItem>
                </ComparisonList>
              </ComparisonCard>
              <ComparisonCard $highlight>
                <ComparisonTitle $highlight>Com LeadGen Engine</ComparisonTitle>
                <ComparisonList>
                  <ComparisonItem $positive>Personas dinâmicas que evoluem</ComparisonItem>
                  <ComparisonItem $positive>Segmentação por comportamento real</ComparisonItem>
                  <ComparisonItem $positive>Scoring de intenção em tempo real</ComparisonItem>
                  <ComparisonItem $positive>Automação inteligente</ComparisonItem>
                  <ComparisonItem $positive>Sistema integrado end-to-end</ComparisonItem>
                </ComparisonList>
              </ComparisonCard>
            </ComparisonGrid>
          </>
        );
      
      case 'features':
        return (
          <>
            <Label>Como Funciona</Label>
            <Title>4 passos para leads qualificados</Title>
            <Subtitle>
              Setup em minutos, não semanas. Resultados desde o primeiro dia.
            </Subtitle>
            <FeatureGrid>
              {features.map((feature, index) => (
                <FeatureCard key={index}>
                  <FeatureNumber>{index + 1}</FeatureNumber>
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureDescription>{feature.description}</FeatureDescription>
                </FeatureCard>
              ))}
            </FeatureGrid>
          </>
        );
      
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header>
        <Logo>LeadGen Engine</Logo>
      </Header>

      <Content>
        <Navigation>
          {slides.map((s, index) => (
            <NavButton
              key={s.id}
              $active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            >
              {s.label}
            </NavButton>
          ))}
        </Navigation>

        <SlideContent key={slide.id}>
          {renderSlideContent()}
        </SlideContent>
      </Content>

      <Footer>
        <Button 
          onClick={handlePrev}
          disabled={currentSlide === 0}
        >
          Anterior
        </Button>
        
        <ProgressBar>
          <Progress $progress={progress} />
        </ProgressBar>
        
        <Button $primary onClick={handleNext}>
          {isLast ? 'Ver Demo' : 'Próximo'}
        </Button>
      </Footer>
    </Container>
  );
}