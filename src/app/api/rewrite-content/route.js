import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    console.log('--- API: rewrite-content STARTED ---')
    console.log('API Key configured:', !!apiKey) // Don't log the actual key
    
    if (!apiKey) {
      console.error('Error: OpenAI API Key is missing')
      return NextResponse.json({ error: 'OpenAI API Key not configured' }, { status: 500 })
    }

    const openai = new OpenAI({ apiKey })
    const { content, instruction } = await req.json()

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 })
    }

    const prompt = instruction 
      ? `Reescribe el siguiente texto siguiendo esta instrucción: "${instruction}". Mantén el formato HTML si existe. Texto: ${content}`
      : `Actúa como una editora experta en bienestar y Ayurveda. Mejora el siguiente texto para que sea inspirador, cálido y profesional. Corrige ortografía y gramática. Mantén el formato HTML si existe. Texto: ${content}`

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Eres una asistente experta en redacción para un blog de bienestar y Ayurveda." },
        { role: "user", content: prompt }
      ],
    })

    return NextResponse.json({ rewritten: response.choices[0].message.content })
  } catch (error) {
    console.error('Error rewriting content:', error)
    return NextResponse.json({ error: 'Failed to rewrite content' }, { status: 500 })
  }
}
