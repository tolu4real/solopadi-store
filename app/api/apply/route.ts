import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      businessName,
      businessType,
      ordersPerWeek,
      salesChannel,
      challenge,
      email,
      phone,
      businessLink,
    } = body;

    // Basic server-side validation
    if (
      !name ||
      !businessName ||
      !businessType ||
      !ordersPerWeek ||
      !salesChannel ||
      !challenge ||
      !email ||
      !phone
    ) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "SoloPadi <applications@solopadi.com.ng>",
      to: ["admin@solopadi.com.ng"],
      replyTo: email,
      subject: `New SoloPadi Early Merchant Application — ${businessName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <body style="margin:0;padding:0;background:#f5f7f5;font-family:Arial,Helvetica,sans-serif;color:#172018;">

            <div style="max-width:680px;margin:40px auto;padding:0 20px;">

              <div style="background:#07100a;border-radius:20px 20px 0 0;padding:30px 32px;">
                <div style="font-size:11px;font-weight:800;letter-spacing:2px;color:#65d487;">
                  SOLOPADI
                </div>

                <h1 style="margin:12px 0 0;color:#ffffff;font-size:27px;line-height:1.2;">
                  New Early Merchant Application
                </h1>

                <p style="margin:10px 0 0;color:#9da99f;font-size:13px;">
                  Someone wants to join the SoloPadi Early Merchant Programme.
                </p>
              </div>

              <div style="background:#ffffff;padding:32px;">

                <h2 style="font-size:17px;margin:0 0 20px;">
                  Applicant
                </h2>

                <table style="width:100%;border-collapse:collapse;font-size:13px;">

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;width:38%;">
                      Full name
                    </td>
                    <td style="padding:12px 0;font-weight:700;">
                      ${escapeHtml(name)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                      Business name
                    </td>
                    <td style="padding:12px 0;font-weight:700;border-top:1px solid #edf0ed;">
                      ${escapeHtml(businessName)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                      Business type
                    </td>
                    <td style="padding:12px 0;border-top:1px solid #edf0ed;">
                      ${escapeHtml(businessType)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                      Orders per week
                    </td>
                    <td style="padding:12px 0;border-top:1px solid #edf0ed;">
                      ${escapeHtml(ordersPerWeek)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                      Main sales channel
                    </td>
                    <td style="padding:12px 0;border-top:1px solid #edf0ed;">
                      ${escapeHtml(salesChannel)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                      Email
                    </td>
                    <td style="padding:12px 0;border-top:1px solid #edf0ed;">
                      ${escapeHtml(email)}
                    </td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                      WhatsApp / phone
                    </td>
                    <td style="padding:12px 0;border-top:1px solid #edf0ed;">
                      ${escapeHtml(phone)}
                    </td>
                  </tr>

                  ${
                    businessLink
                      ? `
                    <tr>
                      <td style="padding:12px 0;color:#7d887f;border-top:1px solid #edf0ed;">
                        Business link
                      </td>
                      <td style="padding:12px 0;border-top:1px solid #edf0ed;">
                        <a href="${escapeHtml(businessLink)}">
                          ${escapeHtml(businessLink)}
                        </a>
                      </td>
                    </tr>
                  `
                      : ""
                  }

                </table>

                <div style="margin-top:30px;padding:20px;border-radius:12px;background:#f5f8f5;">

                  <div style="font-size:10px;font-weight:800;letter-spacing:1px;color:#7d887f;">
                    BIGGEST BUSINESS CHALLENGE
                  </div>

                  <p style="margin:10px 0 0;font-size:13px;line-height:1.7;color:#3d473f;">
                    ${escapeHtml(challenge)}
                  </p>

                </div>

                <div style="margin-top:30px;">
                  <a
                    href="mailto:${escapeHtml(email)}"
                    style="
                      display:inline-block;
                      padding:13px 18px;
                      border-radius:9px;
                      background:#16a34a;
                      color:#ffffff;
                      text-decoration:none;
                      font-size:12px;
                      font-weight:700;
                    "
                  >
                    Reply to applicant
                  </a>
                </div>

              </div>

              <div style="padding:20px;text-align:center;color:#9aa39c;font-size:10px;">
                SoloPadi Early Merchant Programme
              </div>

            </div>

          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "We couldn't send your application right now.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Application error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}