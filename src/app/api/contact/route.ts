import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  company: string
  email: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()
    
    // Validate required fields
    if (!data.name || !data.company || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // TODO: Integrate with Agiled API
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', data)

    // TODO: Send to Agiled CRM
    // const agiledResponse = await fetch('https://api.agiled.app/leads', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.AGILED_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: data.name,
    //     company: data.company,
    //     email: data.email,
    //     message: data.message,
    //     source: 'beacon-ir-website',
    //   }),
    // })

    // TODO: Send email notification
    // await sendEmailNotification(data)

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
