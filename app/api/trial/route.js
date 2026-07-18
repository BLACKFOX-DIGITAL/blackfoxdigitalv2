import { NextResponse } from "next/server";
import { Resend } from "resend";
import { trialConfirmationHtml } from "@/app/emails/trial-confirmation";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const FROM = process.env.EMAIL_FROM || "BLACKFOX DIGITAL <noreply@blackfoxdigital.com.bd>";
  const INTERNAL = (process.env.EMAIL_INTERNAL || "info@blackfoxdigital.com.bd").split(",").map(e => e.trim());
  try {
    const formData = await req.formData();
    const name  = formData.get("name")  || "Unknown";
    const email = formData.get("email") || "";

    const files = formData.getAll("files");
    const attachments = [];
    for (const file of files) {
      if (file && file.name) {
        const bytes = await file.arrayBuffer();
        attachments.push({ filename: file.name, content: Buffer.from(bytes) });
      }
    }

    const [internal, confirmation] = await Promise.all([
      // Internal notification with the attached images
      resend.emails.send({
        from: FROM,
        to: INTERNAL,
        subject: `New Free Trial Request: ${name}`,
        html: `
          <h2>New Free Trial Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p>${attachments.length} image${attachments.length !== 1 ? "s" : ""} attached for editing.</p>
        `,
        attachments,
      }),
      // Confirmation to the user
      email
        ? resend.emails.send({
            from: FROM,
            to: [email],
            subject: "Your free trial is in our queue — BLACKFOX DIGITAL",
            html: trialConfirmationHtml({ name, imageCount: attachments.length }),
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
