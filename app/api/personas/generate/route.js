import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request) {
  try {
    const { industry, targetRole, context } = await request.json();

    if (!process.env.ANTHROPIC_API_KEY) {
      // Return mock data if no API key configured
      return NextResponse.json({
        name: `${targetRole || 'Cliente Ideal'} - ${industry || 'Tecnologia'}`,
        role: targetRole || 'Decision Maker',
        description: `Profissional de ${industry || 'tecnologia'} que procura soluções inovadoras para otimizar processos e aumentar a eficiência da equipa.`,
        demographics: {
          age: '35-50',
          location: 'Portugal',
          income: '50k-100k EUR'
        },
        signals: [
          { name: 'Segue páginas de inovação no LinkedIn', weight: 5, source: 'LinkedIn' },
          { name: 'Participa em eventos do setor', weight: 4, source: 'Eventbrite' },
          { name: 'Pesquisa soluções de software', weight: 4, source: 'Google' }
        ],
        brandsFollowed: ['Microsoft', 'Salesforce', 'HubSpot'],
        conversionScore: 75,
        isAIGenerated: true,
        note: 'Persona gerada com dados de exemplo. Configure a chave Anthropic para personalização completa.'
      });
    }

    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    const prompt = `Gera uma persona de marketing B2B detalhada em português de Portugal para o seguinte contexto:

Indústria: ${industry || 'Não especificada'}
Cargo/Papel alvo: ${targetRole || 'Não especificado'}
Contexto adicional: ${context || 'Nenhum'}

Responde APENAS com um JSON válido (sem markdown, sem código, apenas JSON puro) com esta estrutura exata:
{
  "name": "Nome descritivo da persona (ex: 'Diretor de Marketing Digital')",
  "role": "Cargo profissional",
  "description": "Descrição detalhada de 2-3 frases sobre esta persona, os seus desafios e objetivos",
  "demographics": {
    "age": "Faixa etária (ex: '35-45')",
    "location": "Localização principal",
    "income": "Faixa salarial estimada"
  },
  "signals": [
    { "name": "Sinal comportamental específico", "weight": 5, "source": "Plataforma" },
    { "name": "Outro sinal", "weight": 4, "source": "Plataforma" },
    { "name": "Terceiro sinal", "weight": 3, "source": "Plataforma" }
  ],
  "brandsFollowed": ["Marca1", "Marca2", "Marca3"],
  "conversionScore": 80
}`;

    const message = await anthropic.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ]
    });

    const content = message.content[0].text;

    // Parse the JSON response
    let persona;
    try {
      persona = JSON.parse(content);
    } catch {
      // Try to extract JSON from the response if it contains extra text
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        persona = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Resposta inválida da IA');
      }
    }

    return NextResponse.json({
      ...persona,
      isAIGenerated: true
    });

  } catch (error) {
    console.error('AI Generation error:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao gerar persona' },
      { status: 500 }
    );
  }
}
