import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Persona from '@/models/Persona';

// GET - Get single persona
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const persona = await Persona.findById(id);

    if (!persona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 });
    }

    return NextResponse.json(persona);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update persona
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const data = await request.json();

    const persona = await Persona.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true
    });

    if (!persona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 });
    }

    return NextResponse.json(persona);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete persona
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const persona = await Persona.findByIdAndDelete(id);

    if (!persona) {
      return NextResponse.json({ error: 'Persona not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Persona deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
