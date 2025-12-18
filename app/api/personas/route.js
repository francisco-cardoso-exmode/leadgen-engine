import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Persona from '@/models/Persona';

// GET - List all personas
export async function GET() {
  try {
    await connectDB();
    const personas = await Persona.find({}).sort({ createdAt: -1 });
    return NextResponse.json(personas);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create new persona
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const persona = await Persona.create(data);
    return NextResponse.json(persona, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
