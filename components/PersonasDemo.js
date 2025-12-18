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
  background: ${({ theme }) => theme.colors.background};
`;

const Header = styled.header`
  padding: ${({ theme }) => theme.spacing.lg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  }
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: -0.02em;
`;

const BackButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceHover};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  }
`;

const TabsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`;

const Tab = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.accent : theme.colors.surface};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.textInverse : theme.colors.textSecondary};
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.accent : theme.colors.border};
  flex: 1;
  min-width: 140px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex: none;
  }

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.accentHover : theme.colors.surfaceHover};
  }
`;

const TabSubtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  opacity: 0.7;
  margin-top: 2px;
`;

const StatsBar = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Stat = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  color: ${({ $color, theme }) => $color || theme.colors.textPrimary};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-top: 2px;
`;

const PersonasList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PersonaCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.fast};
  animation: ${fadeIn} 0.3s ease;
  animation-delay: ${({ $index }) => $index * 0.05}s;
  animation-fill-mode: both;

  &:hover {
    border-color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const PersonaHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PersonaInfo = styled.div`
  flex: 1;
`;

const PersonaName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: 4px;
`;

const PersonaRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const PersonaDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.5;
`;

const PriorityBadge = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.radii.full};
  background: ${({ $priority, theme }) => 
    $priority === 'high' ? theme.colors.accent : 
    $priority === 'medium' ? theme.colors.surfaceHover : 
    theme.colors.surfaceHover};
  color: ${({ $priority, theme }) => 
    $priority === 'high' ? theme.colors.textInverse : 
    theme.colors.textSecondary};
  white-space: nowrap;
`;

const ExpandIcon = styled.span`
  color: ${({ theme }) => theme.colors.textTertiary};
  transition: transform ${({ theme }) => theme.transitions.fast};
  transform: ${({ $expanded }) => $expanded ? 'rotate(180deg)' : 'rotate(0)'};
`;

const PersonaDetails = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.borderLight};
  padding-top: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const DetailSection = styled.div``;

const DetailTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const DemographicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const DemographicItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.md};
`;

const DemographicLabel = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
`;

const DemographicValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Tag = styled.span`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SignalsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SignalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.md};
  gap: ${({ theme }) => theme.spacing.md};
`;

const SignalName = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  flex: 1;
`;

const SignalMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SignalWeight = styled.div`
  display: flex;
  gap: 3px;
`;

const WeightDot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.accent : theme.colors.border};
`;

const SignalSource = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textTertiary};
  min-width: 60px;
  text-align: right;
`;

const ScoreBar = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const ScoreHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ScoreLabel = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ScoreValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent};
`;

const ScoreTrack = styled.div`
  height: 6px;
  background: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  overflow: hidden;
`;

const ScoreFill = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.full};
  width: ${({ $value }) => $value}%;
  transition: width 0.5s ease;
`;

const industries = {
  sneakers: {
    name: 'Sapatilhas de Luxo',
    subtitle: '€250+ por par',
    personas: [
      {
        id: 1,
        name: 'O Colecionador Curador',
        role: 'Sneakerhead com Poder de Compra',
        description: 'Profissional 30-45 anos com rendimento disponível elevado. Não compra por hype, compra por design e exclusividade. Valoriza craftsmanship e história da marca.',
        priority: 'high',
        demographics: {
          'Idade': '30-45',
          'Rendimento': '€80k+/ano',
          'Localização': 'Lisboa, Porto, EU',
          'Profissão': 'Tech, Finanças, Criativos'
        },
        channels: ['Instagram', 'Pinterest', 'Farfetch', 'SSENSE'],
        signals: [
          { name: 'Segue marcas de luxo artesanal', weight: 5, source: 'Instagram' },
          { name: 'Engagement com conteúdo de craftsmanship', weight: 5, source: 'Instagram' },
          { name: 'Compras anteriores em Farfetch/MrPorter', weight: 4, source: 'Pixel' },
          { name: 'Segue designers independentes', weight: 4, source: 'Instagram' },
          { name: 'Bio menciona "design" ou "collector"', weight: 3, source: 'Bio' }
        ],
        brandsFollowed: ['Common Projects', 'Maison Margiela', 'Axel Arigato', 'Koio', 'Oliver Cabell'],
        conversionScore: 78
      },
      {
        id: 2,
        name: 'O Minimalista Executivo',
        role: 'Profissional que Valoriza Qualidade',
        description: 'Executivo ou profissional liberal que quer sapatilhas premium para casual Fridays e viagens. Não quer logos visíveis, quer qualidade silenciosa.',
        priority: 'high',
        demographics: {
          'Idade': '35-55',
          'Rendimento': '€100k+/ano',
          'Localização': 'Centros urbanos',
          'Profissão': 'C-Level, Consultores, Advogados'
        },
        channels: ['LinkedIn', 'MrPorter', 'Matches Fashion'],
        signals: [
          { name: 'Segue marcas "quiet luxury"', weight: 5, source: 'Instagram' },
          { name: 'Engagement com conteúdo de viagens premium', weight: 4, source: 'Instagram' },
          { name: 'LinkedIn mostra cargo senior', weight: 4, source: 'LinkedIn' },
          { name: 'Interação com Loro Piana, Brunello Cucinelli', weight: 5, source: 'Instagram' },
          { name: 'Pesquisas "minimalist sneakers"', weight: 3, source: 'Google' }
        ],
        brandsFollowed: ['Loro Piana', 'Brunello Cucinelli', 'The Row', 'Totême', 'COS'],
        conversionScore: 72
      },
      {
        id: 3,
        name: 'O Influenciador de Nicho',
        role: 'Criador de Conteúdo de Lifestyle',
        description: 'Micro-influenciador (10k-100k) focado em moda masculina ou lifestyle premium. Pode ser parceiro ou cliente. Alto valor de amplificação.',
        priority: 'medium',
        demographics: {
          'Idade': '25-38',
          'Followers': '10k-100k',
          'Localização': 'EU, UK, US',
          'Nicho': 'Menswear, Lifestyle'
        },
        channels: ['Instagram', 'TikTok', 'YouTube'],
        signals: [
          { name: 'Taxa de engagement >3%', weight: 5, source: 'Instagram' },
          { name: 'Conteúdo de moda/lifestyle', weight: 4, source: 'Instagram' },
          { name: 'Já trabalhou com marcas semelhantes', weight: 5, source: 'Posts' },
          { name: 'Audiência alinhada demograficamente', weight: 4, source: 'Analytics' },
          { name: 'Estética visual alinhada', weight: 3, source: 'Feed' }
        ],
        brandsFollowed: ['Highsnobiety', 'Hypebeast', 'GQ', 'MR PORTER', 'END.'],
        conversionScore: 45
      }
    ]
  },
  tableware: {
    name: 'Tableware Fine Dining',
    subtitle: 'B2B Luxury Hospitality',
    personas: [
      {
        id: 4,
        name: 'O Chef com Visão',
        role: 'Chef Executivo / Chef-Owner',
        description: 'Chef de restaurante fine dining ou com estrela Michelin. Vê o prato como tela. Decisor direto em restaurantes próprios, influenciador forte em grupos.',
        priority: 'high',
        demographics: {
          'Idade': '32-50',
          'Tipo': 'Fine Dining, Michelin',
          'Localização': 'PT, ES, FR, IT, UK',
          'Budget': '€5k-50k/ano'
        },
        channels: ['Instagram', 'LinkedIn', 'Feiras do setor'],
        signals: [
          { name: 'Segue marcas como Serax, Jars, RAK', weight: 5, source: 'Instagram' },
          { name: 'Posts de plating e mise en place', weight: 5, source: 'Instagram' },
          { name: 'Menção a novo projeto/restaurante', weight: 5, source: 'LinkedIn' },
          { name: 'Interação com conteúdo de design', weight: 4, source: 'Instagram' },
          { name: 'Presença em Maison&Objet, HostMilano', weight: 4, source: 'Posts' }
        ],
        brandsFollowed: ['Serax', '1882 Ltd', 'Astier de Villatte', 'Jars Céramistes', 'Bernardaud'],
        conversionScore: 82
      },
      {
        id: 5,
        name: 'O F&B Director de Grupo',
        role: 'F&B Manager / Procurement',
        description: 'Trabalha em grupo hoteleiro (4-5 estrelas) ou cadeia de restaurantes premium. Decisor de compra com budgets significativos. Menos visível mas muito valioso.',
        priority: 'high',
        demographics: {
          'Idade': '35-55',
          'Tipo': 'Grupos Hoteleiros',
          'Localização': 'Capitais EU',
          'Budget': '€20k-200k/projeto'
        },
        channels: ['LinkedIn', 'Email direto', 'Feiras B2B'],
        signals: [
          { name: 'Cargo F&B/Procurement em LinkedIn', weight: 5, source: 'LinkedIn' },
          { name: 'Empresa a abrir novo hotel/restaurante', weight: 5, source: 'News' },
          { name: 'Conexões com fornecedores do setor', weight: 4, source: 'LinkedIn' },
          { name: 'Engagement com posts de hospitalidade', weight: 3, source: 'LinkedIn' },
          { name: 'Participação em feiras do setor', weight: 4, source: 'Posts' }
        ],
        brandsFollowed: ['Villeroy & Boch', 'RAK Porcelain', 'Steelite', 'Dudson', 'Churchill'],
        conversionScore: 75
      },
      {
        id: 6,
        name: 'O Arquiteto de Hospitalidade',
        role: 'Arquiteto / Interior Designer',
        description: 'Especializado em projetos de hospitalidade (hotéis, restaurantes). Especifica materiais e fornecedores. Influenciador-chave no processo de decisão.',
        priority: 'high',
        demographics: {
          'Idade': '30-50',
          'Tipo': 'Estúdios de design',
          'Localização': 'EU, UK, ME',
          'Projetos': '€500k-5M'
        },
        channels: ['Instagram', 'Pinterest', 'LinkedIn', 'Dezeen'],
        signals: [
          { name: 'Portfolio com projetos hospitalidade', weight: 5, source: 'Site' },
          { name: 'Segue publicações de design', weight: 4, source: 'Instagram' },
          { name: 'Projeto recente publicado', weight: 5, source: 'Dezeen' },
          { name: 'Bio menciona "hospitality design"', weight: 4, source: 'Bio' },
          { name: 'Engagement com marcas de mobiliário', weight: 3, source: 'Instagram' }
        ],
        brandsFollowed: ['Dezeen', 'Wallpaper*', 'AD', 'Studio Ilse', 'India Mahdavi'],
        conversionScore: 68
      },
      {
        id: 7,
        name: 'O Colecionador Privado',
        role: 'HNWI / Entusiasta de Design',
        description: 'Indivíduo com alto poder de compra que coleciona peças de design. Compra para casa própria ou como investimento. Difícil de encontrar mas alto LTV.',
        priority: 'medium',
        demographics: {
          'Idade': '40-65',
          'Rendimento': '€200k+/ano',
          'Localização': 'Global',
          'Interesse': 'Arte, Design'
        },
        channels: ['Instagram', '1stDibs', 'Leilões', 'Galerias'],
        signals: [
          { name: 'Segue galerias e leilões', weight: 4, source: 'Instagram' },
          { name: 'Engagement com conteúdo de design', weight: 4, source: 'Instagram' },
          { name: 'Compras em 1stDibs, Artemest', weight: 5, source: 'Pixel' },
          { name: 'Visitas a feiras de arte/design', weight: 4, source: 'Posts' },
          { name: 'Conexões com galeristas', weight: 3, source: 'Instagram' }
        ],
        brandsFollowed: ['1stDibs', 'Christies', 'Sothebys', 'Artemest', 'The Invisible Collection'],
        conversionScore: 55
      }
    ]
  }
};

export default function PersonasDemo({ onBack }) {
  const [activeTab, setActiveTab] = useState('sneakers');
  const [expandedId, setExpandedId] = useState(null);
  
  const currentIndustry = industries[activeTab];
  const personas = currentIndustry.personas;
  
  const highPriority = personas.filter(p => p.priority === 'high').length;
  const totalSignals = personas.reduce((acc, p) => acc + p.signals.length, 0);
  const avgScore = Math.round(personas.reduce((acc, p) => acc + p.conversionScore, 0) / personas.length);

  return (
    <Container>
      <Header>
        <Logo>LeadGen Engine</Logo>
        <BackButton onClick={onBack}>Voltar à Intro</BackButton>
      </Header>

      <Content>
        <TabsContainer>
          {Object.entries(industries).map(([key, industry]) => (
            <Tab
              key={key}
              $active={activeTab === key}
              onClick={() => {
                setActiveTab(key);
                setExpandedId(null);
              }}
            >
              {industry.name}
              <TabSubtitle>{industry.subtitle}</TabSubtitle>
            </Tab>
          ))}
        </TabsContainer>

        <StatsBar>
          <Stat>
            <StatValue>{personas.length}</StatValue>
            <StatLabel>Personas</StatLabel>
          </Stat>
          <Stat>
            <StatValue $color="#22C55E">{highPriority}</StatValue>
            <StatLabel>Alta Prioridade</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{totalSignals}</StatValue>
            <StatLabel>Sinais</StatLabel>
          </Stat>
          <Stat>
            <StatValue>{avgScore}%</StatValue>
            <StatLabel>Score Médio</StatLabel>
          </Stat>
        </StatsBar>

        <PersonasList>
          {personas.map((persona, index) => (
            <PersonaCard key={persona.id} $index={index}>
              <PersonaHeader onClick={() => setExpandedId(expandedId === persona.id ? null : persona.id)}>
                <PersonaInfo>
                  <PersonaName>{persona.name}</PersonaName>
                  <PersonaRole>{persona.role}</PersonaRole>
                  <PersonaDescription>{persona.description}</PersonaDescription>
                </PersonaInfo>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <PriorityBadge $priority={persona.priority}>
                    {persona.priority === 'high' ? 'Alta' : persona.priority === 'medium' ? 'Média' : 'Baixa'}
                  </PriorityBadge>
                  <ExpandIcon $expanded={expandedId === persona.id}>▼</ExpandIcon>
                </div>
              </PersonaHeader>

              {expandedId === persona.id && (
                <PersonaDetails>
                  <DetailSection>
                    <DetailTitle>Demografia</DetailTitle>
                    <DemographicsGrid>
                      {Object.entries(persona.demographics).map(([key, value]) => (
                        <DemographicItem key={key}>
                          <DemographicLabel>{key}</DemographicLabel>
                          <DemographicValue>{value}</DemographicValue>
                        </DemographicItem>
                      ))}
                    </DemographicsGrid>
                  </DetailSection>

                  <DetailSection>
                    <DetailTitle>Canais Principais</DetailTitle>
                    <TagsList>
                      {persona.channels.map((channel, i) => (
                        <Tag key={i}>{channel}</Tag>
                      ))}
                    </TagsList>
                  </DetailSection>

                  <DetailSection>
                    <DetailTitle>Sinais de Intenção</DetailTitle>
                    <SignalsList>
                      {persona.signals.map((signal, i) => (
                        <SignalItem key={i}>
                          <SignalName>{signal.name}</SignalName>
                          <SignalMeta>
                            <SignalWeight>
                              {[1, 2, 3, 4, 5].map(n => (
                                <WeightDot key={n} $active={n <= signal.weight} />
                              ))}
                            </SignalWeight>
                            <SignalSource>{signal.source}</SignalSource>
                          </SignalMeta>
                        </SignalItem>
                      ))}
                    </SignalsList>
                  </DetailSection>

                  <DetailSection>
                    <DetailTitle>Marcas que Seguem</DetailTitle>
                    <TagsList>
                      {persona.brandsFollowed.map((brand, i) => (
                        <Tag key={i}>{brand}</Tag>
                      ))}
                    </TagsList>
                  </DetailSection>

                  <ScoreBar>
                    <ScoreHeader>
                      <ScoreLabel>Score de Conversão Estimado</ScoreLabel>
                      <ScoreValue>{persona.conversionScore}%</ScoreValue>
                    </ScoreHeader>
                    <ScoreTrack>
                      <ScoreFill $value={persona.conversionScore} />
                    </ScoreTrack>
                  </ScoreBar>
                </PersonaDetails>
              )}
            </PersonaCard>
          ))}
        </PersonasList>
      </Content>
    </Container>
  );
}