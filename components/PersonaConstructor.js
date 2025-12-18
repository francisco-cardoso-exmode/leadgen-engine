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
  max-width: 800px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  }
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  letter-spacing: -0.02em;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const StepsIndicator = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Step = styled.div`
  flex: 1;
  height: 4px;
  background: ${({ $active, $completed, theme }) =>
    $completed ? theme.colors.accent :
    $active ? theme.colors.accent :
    theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.full};
  opacity: ${({ $active, $completed }) => ($active || $completed) ? 1 : 0.3};
`;

const FormSection = styled.div`
  animation: ${fadeIn} 0.3s ease;
`;

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textTertiary};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const OptionButton = styled.button`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ $selected, theme }) =>
    $selected ? theme.colors.accent : theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ $selected, theme }) =>
    $selected ? theme.colors.accent + '10' : theme.colors.surface};
  color: ${({ $selected, theme }) =>
    $selected ? theme.colors.accent : theme.colors.textSecondary};
  transition: all ${({ theme }) => theme.transitions.fast};
  text-align: left;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SignalInput = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const SignalField = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const SignalSource = styled.select`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.textPrimary};
  min-width: 120px;
`;

const AddButton = styled.button`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.accent};
  background: transparent;
  border: 1px dashed ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.radii.md};
  width: 100%;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.accent}10;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
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

const PreviewCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const PreviewTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const PreviewRole = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PreviewDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const PreviewSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const PreviewSectionTitle = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.textTertiary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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

const industries = [
  'E-commerce / Retail',
  'SaaS / Software',
  'Hospitalidade',
  'Imobiliário',
  'Saúde / Wellness',
  'Educação',
  'Finanças',
  'Consultoria',
  'Outro'
];

const channels = [
  'Instagram',
  'LinkedIn',
  'Facebook',
  'TikTok',
  'X (Twitter)',
  'Pinterest',
  'YouTube',
  'Email',
  'Google'
];

const sources = [
  'Instagram',
  'LinkedIn',
  'Facebook',
  'Bio',
  'Posts',
  'Pixel',
  'Google',
  'Site'
];

export default function PersonaConstructor({ onBack }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    industry: '',
    productDescription: '',
    priceRange: '',
    personaName: '',
    personaRole: '',
    personaDescription: '',
    ageRange: '',
    income: '',
    location: '',
    channels: [],
    signals: [{ text: '', source: 'Instagram' }]
  });

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleChannel = (channel) => {
    setFormData(prev => ({
      ...prev,
      channels: prev.channels.includes(channel)
        ? prev.channels.filter(c => c !== channel)
        : [...prev.channels, channel]
    }));
  };

  const updateSignal = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      signals: prev.signals.map((s, i) =>
        i === index ? { ...s, [field]: value } : s
      )
    }));
  };

  const addSignal = () => {
    setFormData(prev => ({
      ...prev,
      signals: [...prev.signals, { text: '', source: 'Instagram' }]
    }));
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.businessName && formData.industry && formData.productDescription;
      case 2:
        return formData.personaName && formData.personaDescription;
      case 3:
        return formData.channels.length > 0 && formData.signals.some(s => s.text);
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <FormSection>
            <FormGroup>
              <Label>Nome do negócio / marca</Label>
              <Input
                placeholder="Ex: Koio, The Craft Kitchen, etc."
                value={formData.businessName}
                onChange={(e) => updateField('businessName', e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Indústria / Setor</Label>
              <OptionsGrid>
                {industries.map(ind => (
                  <OptionButton
                    key={ind}
                    $selected={formData.industry === ind}
                    onClick={() => updateField('industry', ind)}
                  >
                    {ind}
                  </OptionButton>
                ))}
              </OptionsGrid>
            </FormGroup>

            <FormGroup>
              <Label>Descreve o produto / serviço</Label>
              <TextArea
                placeholder="O que vendes? Qual o diferencial? Para quem é ideal?"
                value={formData.productDescription}
                onChange={(e) => updateField('productDescription', e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Faixa de preço</Label>
              <Input
                placeholder="Ex: €50-100, €500+, €5k-20k/projeto"
                value={formData.priceRange}
                onChange={(e) => updateField('priceRange', e.target.value)}
              />
            </FormGroup>
          </FormSection>
        );

      case 2:
        return (
          <FormSection>
            <FormGroup>
              <Label>Nome da persona</Label>
              <Input
                placeholder="Ex: O Executivo Minimalista, O Chef Criativo"
                value={formData.personaName}
                onChange={(e) => updateField('personaName', e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Cargo / Papel</Label>
              <Input
                placeholder="Ex: CEO / Founder, Chef Executivo, Designer de Interiores"
                value={formData.personaRole}
                onChange={(e) => updateField('personaRole', e.target.value)}
              />
            </FormGroup>

            <FormGroup>
              <Label>Descrição detalhada</Label>
              <TextArea
                placeholder="Quem é esta pessoa? O que a motiva? Porque compraria o teu produto?"
                value={formData.personaDescription}
                onChange={(e) => updateField('personaDescription', e.target.value)}
              />
            </FormGroup>

            <FormRow>
              <FormGroup>
                <Label>Faixa etária</Label>
                <Input
                  placeholder="Ex: 30-45"
                  value={formData.ageRange}
                  onChange={(e) => updateField('ageRange', e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label>Rendimento estimado</Label>
                <Input
                  placeholder="Ex: €80k+/ano"
                  value={formData.income}
                  onChange={(e) => updateField('income', e.target.value)}
                />
              </FormGroup>
            </FormRow>

            <FormGroup>
              <Label>Localização</Label>
              <Input
                placeholder="Ex: Lisboa, Porto, EU"
                value={formData.location}
                onChange={(e) => updateField('location', e.target.value)}
              />
            </FormGroup>
          </FormSection>
        );

      case 3:
        return (
          <FormSection>
            <FormGroup>
              <Label>Canais onde encontrar esta persona</Label>
              <OptionsGrid>
                {channels.map(channel => (
                  <OptionButton
                    key={channel}
                    $selected={formData.channels.includes(channel)}
                    onClick={() => toggleChannel(channel)}
                  >
                    {channel}
                  </OptionButton>
                ))}
              </OptionsGrid>
            </FormGroup>

            <FormGroup>
              <Label>Sinais de intenção (comportamentos que indicam interesse)</Label>
              {formData.signals.map((signal, index) => (
                <SignalInput key={index}>
                  <SignalField
                    placeholder="Ex: Segue marcas de luxo, Engagement com conteúdo de design"
                    value={signal.text}
                    onChange={(e) => updateSignal(index, 'text', e.target.value)}
                  />
                  <SignalSource
                    value={signal.source}
                    onChange={(e) => updateSignal(index, 'source', e.target.value)}
                  >
                    {sources.map(src => (
                      <option key={src} value={src}>{src}</option>
                    ))}
                  </SignalSource>
                </SignalInput>
              ))}
              <AddButton onClick={addSignal}>+ Adicionar sinal</AddButton>
            </FormGroup>
          </FormSection>
        );

      case 4:
        return (
          <FormSection>
            <PreviewCard>
              <PreviewTitle>{formData.personaName || 'Nome da Persona'}</PreviewTitle>
              <PreviewRole>{formData.personaRole || 'Cargo / Papel'}</PreviewRole>
              <PreviewDescription>
                {formData.personaDescription || 'Descrição da persona...'}
              </PreviewDescription>

              <PreviewSection>
                <PreviewSectionTitle>Demografia</PreviewSectionTitle>
                <TagsList>
                  {formData.ageRange && <Tag>Idade: {formData.ageRange}</Tag>}
                  {formData.income && <Tag>Rendimento: {formData.income}</Tag>}
                  {formData.location && <Tag>Local: {formData.location}</Tag>}
                </TagsList>
              </PreviewSection>

              <PreviewSection>
                <PreviewSectionTitle>Canais</PreviewSectionTitle>
                <TagsList>
                  {formData.channels.map(ch => (
                    <Tag key={ch}>{ch}</Tag>
                  ))}
                </TagsList>
              </PreviewSection>

              <PreviewSection>
                <PreviewSectionTitle>Sinais de Intenção</PreviewSectionTitle>
                <TagsList>
                  {formData.signals.filter(s => s.text).map((signal, i) => (
                    <Tag key={i}>{signal.text} ({signal.source})</Tag>
                  ))}
                </TagsList>
              </PreviewSection>
            </PreviewCard>
          </FormSection>
        );

      default:
        return null;
    }
  };

  const stepTitles = [
    'Sobre o teu negócio',
    'Define a persona',
    'Sinais de intenção',
    'Pré-visualização'
  ];

  return (
    <Container>
      <Header>
        <Logo>LeadGen Engine</Logo>
        <BackButton onClick={onBack}>Voltar</BackButton>
      </Header>

      <Content>
        <Title>{stepTitles[step - 1]}</Title>
        <Subtitle>
          {step === 1 && 'Primeiro, conta-nos sobre o teu negócio para personalizarmos as recomendações.'}
          {step === 2 && 'Agora vamos criar o perfil do teu cliente ideal.'}
          {step === 3 && 'Define os comportamentos que indicam que alguém está interessado no teu produto.'}
          {step === 4 && 'Revê a tua persona antes de guardar.'}
        </Subtitle>

        <StepsIndicator>
          {[1, 2, 3, 4].map(s => (
            <Step key={s} $active={s === step} $completed={s < step} />
          ))}
        </StepsIndicator>

        {renderStep()}

        <ButtonGroup>
          <Button
            onClick={() => step > 1 ? setStep(step - 1) : onBack()}
          >
            {step === 1 ? 'Cancelar' : 'Anterior'}
          </Button>
          <Button
            $primary
            onClick={() => step < 4 ? setStep(step + 1) : onBack()}
            disabled={!canProceed()}
          >
            {step === 4 ? 'Guardar Persona' : 'Continuar'}
          </Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
}
