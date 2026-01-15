import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'OpenAI API Key not configured' }, { status: 500 })
    }

    const openai = new OpenAI({ apiKey })
    const { prompt } = await req.json()

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 })
    }

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: `A professional, high-quality, artistic photography style image for a wellness blog about: ${prompt}. Natural lighting, serene atmosphere, premium aesthetic.`,
      n: 1,
      size: "1024x1024",
    })

    return NextResponse.json({ url: response.data[0].url })
  } catch (error) {
    console.error('Error generating image:', error)
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 })
  }
}
