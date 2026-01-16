import { NextResponse } from 'next/server'
// Force rebuild 2

export async function POST(req) {
  console.log('--- API: extract-pdf STARTED ---')
  
  let pdfParse
  try {
    pdfParse = require('pdf-parse')
    // Handle "default" export if it exists (ESM interop)
    if (pdfParse.default) {
        pdfParse = pdfParse.default
    }
    console.log('pdfParse library loaded. Type:', typeof pdfParse)
  } catch (e) {
    console.error('Failed to require pdf-parse:', e)
    return NextResponse.json({ error: 'Server Error: Could not load PDF library' }, { status: 500 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get('file')

    if (!file) {
      console.log('Error: No file received')
      return NextResponse.json({ error: 'File is required' }, { status: 400 })
    }

    console.log(`File received: ${file.name}, type: ${file.type}, size: ${file.size}`)

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    console.log('Buffer created successfully')
    
    let text = ''
    
    if (file.type === 'application/pdf') {
      console.log('Parsing PDF...')
      const pdf = await pdfParse(buffer)
      console.log('PDF Parsed. Text length:', pdf.text.length)
      text = pdf.text
    } else {
      console.log('Reading as text...')
      text = buffer.toString('utf-8')
    }

    console.log('Returning response...')
    return NextResponse.json({ text })

  } catch (error) {
    console.error('CRITICAL ERROR in extract-pdf:', error)
    return NextResponse.json({ error: 'Failed to extract PDF: ' + error.message }, { status: 500 })
  }
}
