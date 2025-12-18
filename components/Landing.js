'use client';

import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const BackgroundCarousel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${({ $src }) => $src});
  background-size: cover;
  background-position: center;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 1.5s ease-in-out;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
`;

const Header = styled.header`
  position: relative;
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  }
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: -0.02em;
  color: #fff;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavLink = styled.button`
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: rgba(255, 255, 255, 0.9);
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing.lg};
  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: calc(100vh - 100px);
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeadlineContainer = styled.div`
  max-width: 900px;
  animation: ${slideUp} 1s ease;
`;

const Headline = styled.h2`
  font-size: clamp(2rem, 10vw, 5rem);
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: #fff;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-shadow: 0 2px 40px rgba(0, 0, 0, 0.3);

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

const HeadlineAccent = styled.span`
  color: #F5F0E8;
  display: block;
`;

const Synopsis = styled.p`
  font-size: clamp(0.9rem, 2.5vw, 1.35rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.5;
  max-width: 650px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  text-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
  padding: 0 ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    line-height: 1.6;
    margin: 0 auto ${({ theme }) => theme.spacing.xl};
    padding: 0;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
  justify-content: center;
  width: 100%;
  max-width: 300px;
  animation: ${fadeIn} 1s ease 0.5s both;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.md};
    width: auto;
    max-width: none;
  }
`;

const CTAButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.radii.md};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
    font-size: ${({ theme }) => theme.fontSizes.base};
    width: auto;
  }

  ${({ $primary }) =>
    $primary
      ? `
    background: #fff;
    color: #000;
    border: none;

    &:hover {
      background: #F5F0E8;
      transform: translateY(-2px);
    }
  `
      : `
    background: transparent;
    color: #fff;
    border: 2px solid rgba(255, 255, 255, 0.5);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: #fff;
    }
  `}
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    bottom: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.4)')};
  transition: all ${({ theme }) => theme.transitions.fast};
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ConceptBadge = styled.span`
  display: none;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: rgba(255, 255, 255, 0.5);
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
    bottom: ${({ theme }) => theme.spacing.xl};
    right: ${({ theme }) => theme.spacing.xl};
  }
`;

const images = [
  '/img/pexels-danxavier-1239291.jpg',
  '/img/pexels-olly-3771100.jpg',
  '/img/pexels-hikaique-307847.jpg',
  '/img/pexels-olly-845457.jpg',
  '/img/pexels-olly-846741.jpg',
  '/img/pexels-cottonbro-9208212.jpg',
  '/img/pexels-tima-miroshnichenko-5717044.jpg',
  '/img/pexels-pixabay-354951.jpg',
];

const headlines = [
  {
    main: 'Encontra os teus',
    accent: 'clientes ideais.',
    synopsis: 'Define personas com sinais comportamentais. Descobre onde estao. Verifica o match. Contacta apenas quem faz sentido.'
  },
  {
    main: 'Leads qualificados,',
    accent: 'nao listas frias.',
    synopsis: 'Esquece as bases de dados genéricas. Identifica pessoas reais com sinais de intencao que demonstram interesse no que vendes.'
  },
  {
    main: 'Do perfil ideal',
    accent: 'ao primeiro contacto.',
    synopsis: 'Cria personas detalhadas, analisa com IA, e recebe recomendacoes de campanha personalizadas para cada segmento.'
  }
];

export default function Landing({ onEnterPresentation, onEnterDemo, onCreatePersona }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    const headlineInterval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 8000);

    return () => {
      clearInterval(imageInterval);
      clearInterval(headlineInterval);
    };
  }, []);

  return (
    <Container>
      <BackgroundCarousel>
        {images.map((src, index) => (
          <BackgroundImage
            key={src}
            $src={src}
            $active={index === currentImage}
          />
        ))}
      </BackgroundCarousel>
      <Overlay />

      <Header>
        <Logo>LeadGen Engine</Logo>
        <Nav>
          <NavLink onClick={onEnterPresentation}>Sobre</NavLink>
          <NavLink onClick={onEnterDemo}>Demo</NavLink>
        </Nav>
      </Header>

      <Content>
        <HeadlineContainer key={currentHeadline}>
          <Headline>
            {headlines[currentHeadline].main}
            <HeadlineAccent>{headlines[currentHeadline].accent}</HeadlineAccent>
          </Headline>
          <Synopsis>{headlines[currentHeadline].synopsis}</Synopsis>
        </HeadlineContainer>

        <CTAContainer>
          <CTAButton $primary onClick={onEnterDemo}>
            Explorar Demo
          </CTAButton>
          <CTAButton onClick={onCreatePersona}>
            Criar Persona
          </CTAButton>
        </CTAContainer>
      </Content>

      <CarouselDots>
        {images.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentImage}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </CarouselDots>

      <ConceptBadge>
        Concept Software — Francisco Cardoso & Luis Fernandes
      </ConceptBadge>
    </Container>
  );
}
