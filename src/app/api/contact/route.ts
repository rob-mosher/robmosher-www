import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'
import { NextRequest, NextResponse } from 'next/server'

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
})

export async function POST(req: NextRequest) {
  const {
    firstName, lastName, email, message, newsletter,
  } = await req.json()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }

  const sendEmailParams = {
    Source: process.env.AWS_SES_SENDER_EMAIL as string,
    Destination: {
      ToAddresses: [process.env.AWS_SES_RECEIVER_EMAIL as string],
    },
    Message: {
      Body: {
        Text: {
          Data: `New message from ${firstName} ${lastName} (${email}):\n\n${message}\n\nSign up for newsletter: ${newsletter}`,
        },
      },
      Subject: {
        Data: `Contact Form Submission from ${firstName} ${lastName}`,
      },
    },
  }

  try {
    const command = new SendEmailCommand(sendEmailParams)
    await sesClient.send(command)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 })
  }
}
