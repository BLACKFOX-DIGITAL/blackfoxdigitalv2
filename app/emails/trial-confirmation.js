export function trialConfirmationHtml({ name, imageCount }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Your free trial is on its way</title>
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
              <p style="margin:0 0 8px;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;color:#EE3A39;font-weight:600;">Free trial received</p>
              <h1 style="margin:0 0 24px;font-size:28px;font-weight:700;line-height:1.2;color:#1a1714;">Hi ${name},<br/>your images are in our queue.</h1>
              <p style="margin:0 0 20px;font-size:15px;line-height:1.65;color:#555;">
                We've received your ${imageCount > 0 ? `<strong>${imageCount} image${imageCount !== 1 ? "s" : ""}</strong>` : "images"} for the free trial. Our editing team will process them and deliver the results within <strong>24 hours</strong>.
              </p>
              <p style="margin:0 0 32px;font-size:15px;line-height:1.65;color:#555;">
                Every trial image is edited by a human specialist — no AI shortcuts. You'll receive the edited files directly to this email address once they're ready.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#EE3A39;border-radius:4px;">
                    <a href="https://blackfoxdigital.com.bd/image-post-production-service" style="display:inline-block;padding:13px 28px;font-size:14px;font-weight:600;color:#ffffff;text-decoration:none;letter-spacing:0.04em;">Explore our services →</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Divider -->
          <tr><td style="padding:0 40px;"><hr style="border:none;border-top:1px solid #edefef;margin:0;" /></td></tr>

          <!-- Trial details -->
          <tr>
            <td style="padding:28px 40px;">
              <p style="margin:0 0 16px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#999;font-weight:600;">Your free trial</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                ${[
                  ["Delivery", "Edited files returned to this email within 24 hours."],
                  ["No commitment", "The trial is completely free — no credit card, no invoice."],
                  ["Full quality", "Trial images are edited to production standard, not demo quality."],
                  ["Questions?", "Reply to this email or reach us at info@blackfoxdigital.com.bd."],
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
