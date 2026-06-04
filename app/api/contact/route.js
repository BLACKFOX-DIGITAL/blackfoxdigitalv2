import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_123");

export async function POST(req) {
  try {
    const formData = await req.formData();
    const name = formData.get("name") || "Unknown";
    const email = formData.get("email") || "No email";
    const company = formData.get("company") || "N/A";
    const service = formData.get("service") || "N/A";
    const message = formData.get("message") || "No message";
    
    const files = formData.getAll("files");
    const attachments = [];
    
    for (const file of files) {
      if (file && file.name) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["info@blackfoxdigital.com.bd"],
      subject: `New Contact Request: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
      attachments,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
