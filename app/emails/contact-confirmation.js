export function contactConfirmationHtml({ name, service }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>We received your message</title>
</head>
<body style="margin:0;padding:0;background:#f4f3ef;font-family:'Helvetica Neue',Arial,sans-serif;color:#1a1714;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f3ef;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;max-width:560px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#1a1714;padding:32px 40px;">
              <p style="margin:0;font-size:22px;font-weight:700;letter-spacing:0.08em;color:#ffffff;text-transform:uppercase;">BLACKFOX DIGITAL</p>
              <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,0.5);letter-spacing:0.06em;text-transform:uppercase;">Image Post-Production</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 32px;">
              <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#EE3A39;font-weight:600;">Message received</p>
              <h1 style="margin:0 0 24px;font-size:28px;font-weight:700;line-height:1.2;color:#1a1714;">Hi ${name},<br/>we'll be in touch soon.</h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#555;">
                Thanks for reaching out. We've received your enquiry${service && service !== "N/A" ? ` about <strong>${service}</strong>` : ""} and will get back to you within <strong>2 hours</strong> during business hours.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.65;color:#555;">
                In the meantime, you're welcome to send up to 5 images for a free, no-commitment trial so you can see our quality before placing an order.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#EE3A39;border-radius:4px;">
                    <a href="https://blackfoxdigital.com.bd/take-free-trial" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.04em;">Start free trial →</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #edefef;margin:0;" /></td></tr>

          <!-- What to expect -->
          <tr>
            <td style="padding:28px 40px;">
              <p style="margin:0 0 16px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#999;font-weight:600;">What happens next</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                ${[
                  ["Within 2 hours", "A team member will review your message and reply directly."],
                  ["24–48h turnaround", "Standard delivery on all services once your order is placed."],
                  ["Secure files", "All uploads are handled via encrypted transfer — your images stay private."],
                ].map(([title, desc]) => `
                <tr>
                  <td style="padding:0 0 14px;vertical-align:top;width:20px;">
                    <span style="display:inline-block;width:6px;height:6px;background:#EE3A39;border-radius:50%;margin-top:6px;"></span>
                  </td>
                  <td style="padding:0 0 14px;">
                    <p style="margin:0;font-size:14px;line-height:1.5;color:#1a1714;"><strong>${title}</strong> — ${desc}</p>
                  </td>
                </tr>`).join("")}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f4f3ef;padding:24px 40px;border-top:1px solid #edefef;">
              <p style="margin:0;font-size:12px;color:#999;line-height:1.6;">
                BLACKFOX DIGITAL · House 560, Road 08, Adabor, Dhaka 1207, Bangladesh<br/>
                <a href="mailto:info@blackfoxdigital.com.bd" style="color:#999;text-decoration:none;">info@blackfoxdigital.com.bd</a> · +88 019 24 482 868
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
