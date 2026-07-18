import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactConfirmationHtml } from "@/app/emails/contact-confirmation";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM = process.env.EMAIL_FROM || "BLACKFOX DIGITAL <noreply@blackfoxdigital.com.bd>";
  const INTERNAL = (process.env.EMAIL_INTERNAL || "info@blackfoxdigital.com.bd").split(",").map(e => e.trim());
  try {
    const formData = await req.formData();
    const name    = formData.get("name")    || "Unknown";
    const email   = formData.get("email")   || "";
    const company = formData.get("company") || "N/A";
    const service = formData.get("service") || "N/A";
    const message = formData.get("message") || "No message";

    const files = formData.getAll("files");
    const attachments = [];
    for (const file of files) {
      if (file && file.name) {
        const bytes = await file.arrayBuffer();
        attachments.push({ filename: file.name, content: Buffer.from(bytes) });
      }
    }

    const [internal, confirmation] = await Promise.all([
      // Internal notification to the team
      resend.emails.send({
        from: FROM,
        to: INTERNAL,
        subject: `New Contact Request: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        `,
        attachments,
      }),
      // Confirmation to the user (only if we have a valid email)
      email
        ? resend.emails.send({
            from: FROM,
            to: [email],
            subject: "We received your message — BLACKFOX DIGITAL",
            html: contactConfirmationHtml({ name, service }),
          })
        : Promise.resolve({ data: null, error: null }),
    ]);

    if (internal.error) {
      return NextResponse.json({ error: internal.error }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
