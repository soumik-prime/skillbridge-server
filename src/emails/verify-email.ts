export const emailVerificationTemplete = {
  title: "Please verify your email!",

  text: (name: string, url: string) => {
    return `
Hello, ${name}! Thanks for signing up. Please verify your email to get started: ${url}
This link expires in 1 hour. If you didn't sign up, ignore this email.
- The SkillBridge Team`;
  },

  html: (name: string, url: string) => {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Tell email clients we support both -->
    <meta name="color-scheme" content="light dark" />
    <meta name="supported-color-schemes" content="light dark" />

    <title>Verify Your Email - SkillBridge</title>

    <style>
      /* =====================
         BASE (LIGHT MODE)
         ===================== */
      body {
        margin: 0;
        padding: 0;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        background: #f4f6fb;
      }

      .email-container {
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border-radius: 40px;
        border: 1px solid #e5e7eb;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
      }

      .content {
        padding: 40px 30px;
        border-radius: 40px 40px 0 0 ;
        background: #ffffff;
      }

      h1 {
        color: #0f172a;
        font-size: 24px;
        margin: 0 0 20px 0;
      }

      p {
        color: #334155;
        font-size: 16px;
        line-height: 1.6;
        margin: 0 0 20px 0;
      }

      .verify-button {
        text-align: center;
        margin: 35px 0;
      }

      .verify-button a {
        display: inline-block;
        padding: 16px 40px;
        background: linear-gradient(135deg, #00e5ff 0%, #00b0ff 100%);
        color: #0a0e27;
        text-decoration: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        border: 1px solid #00bcd4;
      }

      .info-box {
        background: #ecfeff;
        border: 1px solid #67e8f9;
        border-left: 4px solid #06b6d4;
        padding: 15px 20px;
        margin: 25px 0;
        border-radius: 8px;
      }

      .info-box p {
        margin: 4px 0;
        font-size: 14px;
        color: #0f172a;
      }

      .security-note {
        background: #fff8e1;
        border: 1px solid #fde68a;
        padding: 15px;
        border-radius: 8px;
        margin: 25px 0;
      }

      .security-note p {
        margin: 0;
        font-size: 14px;
        color: #92400e;
      }

      .divider {
        height: 1px;
        background: #e5e7eb;
        margin: 30px 0;
      }

      .footer {
        background: #f8fafc;
        padding: 30px;
        text-align: center;
        border-top: 1px solid #e5e7eb;
        border-radius: 0 0 40px 40px;
      }

      .footer p {
        font-size: 14px;
        color: #64748b;
        margin: 5px 0;
      }

      .footer a {
        color: #0284c7;
        text-decoration: none;
      }

      /* =====================
         DARK MODE OVERRIDES
         ===================== */
      @media (prefers-color-scheme: dark) {
        body {
          background: #0a0e27;
        }

        .email-container {
          background: #0f1419;
          border: 1px solid rgba(0, 255, 255, 0.1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
        }

        .content {
          background: #141928;
        }

        h1 {
          color: #ffffff;
        }

        p {
          color: rgba(255, 255, 255, 0.85);
        }

        .info-box {
          background: rgba(0, 188, 212, 0.1);
          border-color: rgba(0, 188, 212, 0.3);
        }

        .info-box p {
          color: rgba(255, 255, 255, 0.85);
        }

        .security-note {
          background: rgba(255, 193, 7, 0.08);
          border-color: rgba(255, 193, 7, 0.25);
        }

        .security-note p {
          color: #ffd54f;
        }

        .divider {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 229, 255, 0.5) 50%,
            transparent 100%
          );
        }

        .footer {
          background: #0f141e;
          border-top-color: rgba(0, 188, 212, 0.2);
        }

        .footer p {
          color: rgba(255, 255, 255, 0.6);
        }

        .footer a {
          color: #00e5ff;
        }
      }

      @media only screen and (max-width: 600px) {
        .content {
          padding: 30px 20px;
        }
        h1 {
          font-size: 20px;
        }
        .verify-button a {
          padding: 14px 30px;
          font-size: 15px;
        }
      }
    </style>
  </head>

  <body>
    <div class="email-container">
      <div class="content">
        <p>Hello, ${name}!</p>

        <p>
          Thank you for signing up with SkillBridge! We're excited to have you
          join our community.
        </p>

        <p>
          To complete your registration, please verify your email address:
        </p>

        <div class="verify-button">
          <a href="${url}" target="_blank">Verify Email Address</a>
        </div>

        <div class="info-box">
          <p><strong>Once verified, you'll have access to:</strong></p>
          <p>✓ Personalized dashboard</p>
          <p>✓ Platform features</p>
          <p>✓ Profile management</p>
          <p>✓ Community access</p>
        </div>

        <div class="security-note">
          <p>
            <strong>⚠️ Important:</strong> If you didn’t create this account,
            ignore this email. The link expires in 1 hour.
          </p>
        </div>

        <div class="divider"></div>

        <p style="font-size: 14px;">
          If the button doesn’t work, copy and paste this link:
        </p>
        <p style="font-size: 13px; word-break: break-all;">
          ${url}
        </p>
      </div>

      <div class="footer">
        <p><strong>SkillBridge</strong></p>
        <p>Bridging the gap between knowledge and growth</p>
        <p style="margin-top: 15px; font-size: 12px;">
          © 2026 SkillBridge. All rights reserved.
        </p>
      </div>
    </div>
  </body>
</html>
`;
  },
};
