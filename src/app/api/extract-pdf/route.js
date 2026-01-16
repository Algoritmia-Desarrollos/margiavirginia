import { NextResponse } from 'next/server'
import pdfParse from 'pdf-parse'

export async function POST(req) {
  try {
    // const apiKey = process.env.OPENAI_API_KEY
    // if (!apiKey) {
    //   return NextResponse.json({ error: 'OpenAI API Key not configured' }, { status: 500 })
    // }
    // const openai = new OpenAI({ apiKey })

    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      return NextResponse.json({ error: 'File is required' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    
    let text = ''
    
    if (file.type === 'application/pdf') {
      const pdf = await pdfParse(buffer)
      text = pdf.text
    } else {
      // Assume text file
      text = buffer.toString('utf-8')
    }

    return NextResponse.json({ text })

  } catch (error) {
    console.error('Error extracting PDF:', error)
    return NextResponse.json({ error: 'Failed to extract PDF' }, { status: 500 })
  }
}
