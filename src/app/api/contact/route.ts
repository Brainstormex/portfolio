import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

type ResponseData = {
  status: number;
  message: string | string[];
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Backend validation
    if (!name || !email || !message) {
      return NextResponse.json({ status: 400, message: 'All fields are required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ status: 400, message: 'Invalid email format' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    try {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `Contact form submission from ${name} : ${email}`,
        text: message,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);

      return NextResponse.json({ status: 200, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json({ status: 500, message: 'Internal Server Error' }, { status: 500 });
    }
  } catch (error) {
    console.error('Request handling error:', error);
    return NextResponse.json({ status: 500, message: 'Internal Server Error' }, { status: 500 });
  }
}