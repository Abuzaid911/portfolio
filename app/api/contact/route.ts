import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Tell me who I am speaking with.'),
  email: z.string().email('Please provide a valid email.'),
  message: z.string().min(10, 'A little more detail helps me craft a thoughtful reply.'),
});

const resendApiKey = process.env.RESEND_API_KEY;
const contactRecipient = process.env.CONTACT_RECIPIENT_EMAIL ?? process.env.CONTACT_INBOX_EMAIL;
const resend = resendApiKey ? new Resend(resendApiKey) : null;
const contactSender = process.env.CONTACT_FROM_EMAIL ?? 'onboarding@resend.dev';

export async function POST(request: Request) {
  const data = await request.json();
  const parse = contactSchema.safeParse(data);

  if (!parse.success) {
    return NextResponse.json({ ok: false, errors: parse.error.flatten().fieldErrors }, { status: 400 });
  }

  if (!resend || !contactRecipient) {
    return NextResponse.json(
      {
        ok: false,
        message: 'Contact channel is not configured. Please try emailing me directly at hello@ahmedali.dev.',
      },
      { status: 500 }
    );
  }

  try {
    const { name, email, message } = parse.data;

    await resend.emails.send({
      from: `Ahmed Ali Portfolio <${contactSender}>`,
      to: contactRecipient,
      reply_to: email,
      subject: `New portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:Inter,system-ui,sans-serif;line-height:1.6;padding:12px;background:#0b0f1a;color:#fff;">
          <h2 style="margin:0 0 16px;font-family:'Space Grotesk',system-ui,sans-serif;">New portfolio contact</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p style="margin-top:16px;white-space:pre-line;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact form error', error);
    const message =
      error instanceof Error
        ? error.message
        : 'Something went wrong while sending your message. Please email hello@ahmedali.dev instead.';
    return NextResponse.json(
      {
        ok: false,
        message,
      },
      { status: 500 }
    );
  }
}
