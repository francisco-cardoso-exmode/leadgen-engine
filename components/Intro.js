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

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: -0.02em;
`;

const ConceptBadge = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HeaderButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $primary, theme }) => $primary ? theme.colors.accent : 'transparent'};
  color: ${({ $primary, theme }) => $primary ? theme.colors.textInverse : theme.colors.textPrimary};
  border: 1px solid ${({ $primary, theme }) => $primary ? theme.colors.accent : theme.colors.border};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ $primary, theme }) => $primary ? theme.colors.accentHover : theme.colors.surfaceHover};
  }
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
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const ToolHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  cursor: pointer;

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

const ToolLimitationBadge = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ToolLimitation = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: #EF4444;
  background: #FEE2E2;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.radii.full};
  white-space: nowrap;
`;

const ToolExpandIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: ${({ $expanded }) => $expanded ? 'rotate(180deg)' : 'rotate(0)'};
`;

const ToolDetails = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
`;

const ToolDetailText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
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

const TechSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechCategory = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const TechList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const TechItem = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md};
`;

const TechName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const TechDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-top: 4px;
  line-height: 1.4;
`;

const ComplianceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ComplianceCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ComplianceIcon = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ComplianceTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ComplianceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

const LimitationsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const LimitationCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const LimitationPlatform = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const LimitationSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};

  &:last-child {
    margin-bottom: 0;
  }
`;

const LimitationLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ theme }) => theme.colors.textTertiary};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const LimitationText = styled.p`
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
    id: 'tech',
    label: 'Tecnologia',
    type: 'tech'
  },
  {
    id: 'limitations',
    label: 'Limitações',
    type: 'limitations'
  },
  {
    id: 'compliance',
    label: 'Compliance',
    type: 'compliance'
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
    limitation: 'Manual e caro',
    details: 'Custa €99-149/mês por utilizador. Exige horas de trabalho manual para encontrar e qualificar leads. Não há forma de automatizar a identificação de sinais de intenção — dependes de filtros estáticos como cargo e indústria. Para equipas pequenas, o tempo gasto não compensa o retorno.'
  },
  {
    name: 'Apollo / Clearbit / ZoomInfo',
    description: 'Bases de dados de contactos empresariais',
    limitation: 'Dados, não inteligência',
    details: 'Dão-te emails e telefones, mas não te dizem quem está interessado em comprar. São listas estáticas que desatualizam rapidamente. Não há scoring de intenção — estás a disparar para uma lista fria e a esperar que alguém responda. Taxa de resposta típica: 1-3%.'
  },
  {
    name: 'Meta / Google Ads',
    description: 'Audiências por interesses e demografia',
    limitation: 'Sem precisão real',
    details: 'Segmentas por "interessado em marketing" ou "CEO", mas isso inclui milhões de pessoas. Não sabes quem está ativamente à procura do que vendes. Gastas budget a mostrar anúncios a quem não está no momento certo. CPAs inflacionados porque a segmentação é demasiado ampla.'
  },
  {
    name: 'CRM (HubSpot, Salesforce)',
    description: 'Gestão de contactos e pipeline',
    limitation: 'Armazena, não descobre',
    details: 'Excelente para gerir leads que já tens, mas não te ajuda a encontrar novos. Dependes de inbound (que demora) ou de comprar listas (que são frias). O CRM organiza o que tens — não gera o que precisas. É o fim do funil, não o início.'
  }
];

const features = [
  {
    title: 'Define Personas com Sinais',
    description: 'Cria perfis de cliente ideal com comportamentos específicos — que marcas seguem, que conteúdo consomem, que interesses demonstram publicamente.'
  },
  {
    title: 'Descobre Onde Estão',
    description: 'Identifica em que plataformas e comunidades os teus potenciais clientes estão ativos. Não invades — observas dados públicos para perceber onde encontrá-los.'
  },
  {
    title: 'Verifica o Match',
    description: 'Compara cada pessoa com as tuas personas. Quantos sinais de intenção apresenta? Faz sentido contactar? A ferramenta ajuda-te a decidir com dados, não intuição.'
  },
  {
    title: 'Encontra e Actua',
    description: 'Com leads qualificados, cria audiências para ads, exporta para CRM, ou inicia sequências de contacto personalizadas — sempre de forma respeitosa.'
  }
];

const techStack = [
  {
    category: 'Instagram (MVP Principal)',
    items: [
      { name: 'Meta Graph API', description: 'Acesso oficial a followers, engagement, menções e dados de business accounts' },
      { name: 'Análise de Perfis', description: 'Bios, hashtags seguidas, marcas com engagement, padrões de conteúdo' },
      { name: 'Audience Insights', description: 'Demographics, locations, e comportamentos da audiência' }
    ]
  },
  {
    category: 'LinkedIn (Abordagem Híbrida)',
    items: [
      { name: 'Browser Extension', description: 'Pontua leads enquanto navegas no Sales Navigator — sem extrair dados para fora' },
      { name: 'Input Semi-Automático', description: 'Importação de listas CSV do Sales Navigator com enriquecimento posterior' },
      { name: 'Company Pages API', description: 'Dados de páginas de empresa onde és admin (posts, followers, analytics)' }
    ]
  },
  {
    category: 'Dados First-Party',
    items: [
      { name: 'Pixel & Website', description: 'Comportamento de visitantes, páginas vistas, tempo no site, conversões' },
      { name: 'CRM Integration', description: 'Sync com HubSpot, Salesforce — enriquece contactos existentes' },
      { name: 'Email Lists', description: 'Análise de engagement de email para scoring de intenção' }
    ]
  },
  {
    category: 'Processamento & IA',
    items: [
      { name: 'NLP & Análise de Texto', description: 'GPT-4 / Claude para análise semântica de bios, posts e contexto' },
      { name: 'Scoring Preditivo', description: 'Modelos ML treinados com dados de conversão reais' },
      { name: 'Pattern Matching', description: 'Identificação de sinais de intenção baseado em comportamentos' }
    ]
  }
];

const limitations = [
  {
    platform: 'LinkedIn',
    problem: 'API extremamente restritiva — não permite aceder a posts, comentários ou atividade de terceiros. Scraping é arriscado (ban de conta, violação de ToS).',
    solution: 'Abordagem híbrida: browser extension que pontua dentro do Sales Navigator sem extrair dados. O utilizador qualifica manualmente, a ferramenta ajuda a decidir.'
  },
  {
    platform: 'Instagram',
    problem: 'Graph API requer business account e permissões específicas. Dados de utilizadores privados inacessíveis.',
    solution: 'Foco em business accounts e perfis públicos. A API oficial dá acesso a followers, engagement básico e menções — suficiente para scoring inicial.'
  },
  {
    platform: 'Dados de Terceiros',
    problem: 'Ferramentas como Clearbit/Apollo dão emails mas não intenção. Listas estáticas desatualizam.',
    solution: 'Usamos para enriquecimento, não como fonte primária. O valor está em combinar com sinais comportamentais dos canais onde temos acesso real.'
  }
];

const compliancePoints = [
  {
    title: 'Apenas Dados Públicos',
    description: 'Recolhemos exclusivamente informação que os utilizadores tornaram pública nas suas redes sociais. Não acedemos a mensagens privadas, perfis fechados ou dados protegidos.'
  },
  {
    title: 'RGPD Compliant',
    description: 'Base legal de interesse legítimo para B2B. Direito ao esquecimento implementado — qualquer pessoa pode solicitar remoção dos nossos sistemas em 72 horas.'
  },
  {
    title: 'APIs Oficiais Primeiro',
    description: 'Priorizamos sempre APIs oficiais das plataformas (Meta, LinkedIn, X) que garantem acesso autorizado e dentro dos termos de serviço.'
  },
  {
    title: 'Sem Spam, Sem Cold Outreach Agressivo',
    description: 'A ferramenta identifica leads — não dispara emails em massa. O contacto é sempre feito de forma personalizada e respeitosa pela equipa comercial.'
  },
  {
    title: 'Transparência Total',
    description: 'Política de privacidade clara. Os leads podem saber como foram identificados e optar por não serem contactados.'
  },
  {
    title: 'Retenção Limitada',
    description: 'Dados de leads não convertidos são automaticamente eliminados após 12 meses. Não acumulamos dados indefinidamente.'
  }
];

export default function Intro({ onComplete, onBack }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedTool, setExpandedTool] = useState(null);
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
              Cada ferramenta resolve uma parte do problema, mas nenhuma conecta os pontos. Clica para saber mais.
            </Subtitle>
            <ToolsGrid>
              {tools.map((tool, index) => (
                <ToolCard key={index}>
                  <ToolHeader onClick={() => setExpandedTool(expandedTool === index ? null : index)}>
                    <ToolInfo>
                      <ToolName>{tool.name}</ToolName>
                      <ToolDescription>{tool.description}</ToolDescription>
                    </ToolInfo>
                    <ToolLimitationBadge>
                      <ToolLimitation>{tool.limitation}</ToolLimitation>
                      <ToolExpandIcon $expanded={expandedTool === index}>▼</ToolExpandIcon>
                    </ToolLimitationBadge>
                  </ToolHeader>
                  {expandedTool === index && (
                    <ToolDetails>
                      <ToolDetailText>{tool.details}</ToolDetailText>
                    </ToolDetails>
                  )}
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
              Descobre onde estão os teus clientes ideais, verifica se fazem match com as tuas personas, e encontra-os de forma não invasiva.
            </Subtitle>
            <PointsList>
              <Point>Define personas com sinais comportamentais — que marcas seguem, que conteúdo consomem, que interesses demonstram</Point>
              <Point>Identifica onde estão ativos — em que plataformas e comunidades podes encontrá-los</Point>
              <Point>Verifica o match com dados públicos — sem invadir, apenas observas quem se encaixa no perfil</Point>
              <Point>Actua com precisão — contacta apenas quem faz sentido, de forma personalizada e respeitosa</Point>
            </PointsList>
          </>
        );

      case 'tech':
        return (
          <>
            <Label>Stack Tecnológica</Label>
            <Title>Como construímos</Title>
            <Subtitle>
              Arquitectura moderna, escalável e preparada para processar milhões de sinais em tempo real.
            </Subtitle>
            {techStack.map((section, index) => (
              <TechSection key={index}>
                <TechCategory>{section.category}</TechCategory>
                <TechList>
                  {section.items.map((item, i) => (
                    <TechItem key={i}>
                      <TechName>{item.name}</TechName>
                      <TechDescription>{item.description}</TechDescription>
                    </TechItem>
                  ))}
                </TechList>
              </TechSection>
            ))}
          </>
        );

      case 'limitations':
        return (
          <>
            <Label>Realidade Técnica</Label>
            <Title>Limitações e como as resolvemos</Title>
            <Subtitle>
              Transparência total sobre o que cada plataforma permite — e como trabalhamos dentro dessas regras.
            </Subtitle>
            <LimitationsGrid>
              {limitations.map((limitation, index) => (
                <LimitationCard key={index}>
                  <LimitationPlatform>{limitation.platform}</LimitationPlatform>
                  <LimitationSection>
                    <LimitationLabel>Limitação</LimitationLabel>
                    <LimitationText>{limitation.problem}</LimitationText>
                  </LimitationSection>
                  <LimitationSection>
                    <LimitationLabel>A Nossa Abordagem</LimitationLabel>
                    <LimitationText>{limitation.solution}</LimitationText>
                  </LimitationSection>
                </LimitationCard>
              ))}
            </LimitationsGrid>
          </>
        );

      case 'compliance':
        return (
          <>
            <Label>Ética & Compliance</Label>
            <Title>Recolha responsável</Title>
            <Subtitle>
              Construído desde o início com privacidade e ética em mente. Não transgredimos — trabalhamos dentro das regras.
            </Subtitle>
            <ComplianceGrid>
              {compliancePoints.map((point, index) => (
                <ComplianceCard key={index}>
                  <ComplianceTitle>{point.title}</ComplianceTitle>
                  <ComplianceDescription>{point.description}</ComplianceDescription>
                </ComplianceCard>
              ))}
            </ComplianceGrid>
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
        <HeaderContent>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {onBack && (
              <HeaderButton onClick={onBack}>
                Voltar
              </HeaderButton>
            )}
            <Logo>LeadGen Engine</Logo>
          </div>
          <HeaderActions>
            <ConceptBadge>Concept Software Idea — Francisco Cardoso & Luis Fernandes</ConceptBadge>
            <HeaderButton $primary onClick={onComplete}>
              Ver Demo
            </HeaderButton>
          </HeaderActions>
        </HeaderContent>
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