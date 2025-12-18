import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import connectDB from '@/lib/mongodb';
import Persona from '@/models/Persona';

export async function POST(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const persona = await Persona.findById(id);

    if (!persona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      // Return mock data if no API key
      const mockCampaigns = [
        {
          type: 'Meta Ads',
          name: `Campanha ${persona.industry}`,
          description: `Audiência lookalike baseada em interesses de ${persona.industry}. Criativos focados em valor e diferenciação.`,
          channel: 'Instagram/Facebook',
          budget: '€30-60/dia',
          expectedCPA: '€15-30'
        },
        {
          type: 'Email Sequence',
          name: 'Nurturing Campaign',
          description: `Sequência de 4-5 emails com conteúdo educativo para ${persona.role}. Foco em construir confiança antes de vender.`,
          channel: 'Email',
          budget: '€0.02/email',
          expectedCPA: '€10-20'
        }
      ];

      return NextResponse.json({
        campaigns: mockCampaigns,
        conversionScore: 65,
        priority: 'medium',
        diagnosis: `Persona de exemplo para ${persona.industry}. Configure a chave Anthropic para diagnóstico personalizado.`
      });
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const prompt = `Analisa esta persona de marketing e gera recomendações de campanha em português de Portugal.

PERSONA:
Nome: ${persona.name}
Cargo: ${persona.role}
Descrição: ${persona.description}
Indústria: ${persona.industry}
Demografia: ${JSON.stringify(persona.demographics)}
Sinais de intenção: ${persona.signals.map(s => `${s.name} (${s.source})`).join(', ')}
Marcas que seguem: ${persona.brandsFollowed?.join(', ') || 'Não especificado'}

Responde APENAS com JSON válido (sem markdown) com esta estrutura:
{
  "diagnosis": "Análise breve (2-3 frases) sobre esta persona e o seu potencial",
  "priority": "high|medium|low",
  "conversionScore": 75,
  "campaigns": [
    {
      "type": "Tipo de campanha (ex: Meta Ads, LinkedIn Ads, Email Sequence)",
      "name": "Nome criativo da campanha",
      "description": "Descrição detalhada da estratégia (2-3 frases)",
      "channel": "Canal principal",
      "budget": "Budget diário ou por unidade sugerido",
      "expectedCPA": "CPA esperado"
    },
    {
      "type": "Segundo tipo",
      "name": "Nome da segunda campanha",
      "description": "Descrição da segunda estratégia",
      "channel": "Canal",
      "budget": "Budget",
      "expectedCPA": "CPA"
    }
  ]
}

Gera exactamente 2 campanhas relevantes para esta persona. Sê específico e prático.`;

    const message = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }]
    });

    const content = message.content[0].text;
    let result;

    try {
      result = JSON.parse(content);
    } catch {
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        result = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Resposta inválida da IA');
      }
    }

    // Update persona with diagnosis results
    await Persona.findByIdAndUpdate(id, {
      campaigns: result.campaigns,
      conversionScore: result.conversionScore,
      priority: result.priority
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Diagnosis error:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao gerar diagnóstico' },
      { status: 500 }
    );
  }
}
