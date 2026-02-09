export const resetpasswordTemplete = {

  title: "Reset Your SkillBridge Password!",

  text: (name: string, url: string) => {
    return `Hello, ${name}! Thanks for signing up. Please verify your email to get started: ${url} This link expires in 15 Minutes. If you didn't sign up, you can safely ignore this email.
— The SkillBridge Team
    `;
  },

  html: (name: string, url: string) => {
    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="color-scheme" content="light dark" />
<meta name="supported-color-schemes" content="light dark" />
<title>Reset Your Password - SkillBridge</title>
<style>
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
    border-radius: 40px 40px 0 0;
    background: #ffffff;
  }
  p {
    color: #334155;
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 20px 0;
  }
  .action-button {
    text-align: center;
    margin: 35px 0;
  }
  .action-button a {
    display: inline-block;
    padding: 16px 40px;
    background: linear-gradient(135deg, #ff9800 0%, #ff6f00 100%);
    color: #1f2933;
    text-decoration: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 600;
    border: 1px solid #ff9800;
  }
  .info-box {
    background: #fff7ed;
    border: 1px solid #fed7aa;
    border-left: 4px solid #fb923c;
    padding: 15px 20px;
    margin: 25px 0;
    border-radius: 8px;
  }
  .info-box p {
    margin: 4px 0;
    font-size: 14px;
    color: #7c2d12;
  }
  .security-note {
    background: #fef2f2;
    border: 1px solid #fecaca;
    padding: 15px;
    border-radius: 8px;
    margin: 25px 0;
  }
  .security-note p {
    margin: 0;
    font-size: 14px;
    color: #991b1b;
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
  /* ===== DARK MODE ===== */
  @media (prefers-color-scheme: dark) {
    body {
      background: #0a0e27;
    }
    .email-container {
      background: #0f1419;
      border: 1px solid rgba(255, 152, 0, 0.25);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
    }
    .content {
      background: #141928;
    }
    p {
      color: rgba(255, 255, 255, 0.85);
    }
    .info-box {
      background: rgba(255, 152, 0, 0.1);
      border-color: rgba(255, 152, 0, 0.3);
    }
    .info-box p {
      color: #ffcc80;
    }
    .security-note {
      background: rgba(239, 68, 68, 0.1);
      border-color: rgba(239, 68, 68, 0.25);
    }
    .security-note p {
      color: #fca5a5;
    }
    .divider {
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 152, 0, 0.5) 50%,
        transparent 100%
      );
    }
    .footer {
      background: #0f141e;
      border-top-color: rgba(255, 152, 0, 0.2);
    }
    .footer p {
      color: rgba(255, 255, 255, 0.6);
    }
  }
  @media only screen and (max-width: 600px) {
    .content {
      padding: 30px 20px;
    }
    .action-button a {
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
      We received a request to reset the password for your SkillBridge
      account.
    </p>
    <p>
      Click the button below to create a new password. This link is valid
      for <strong>15 Minutes</strong>.
    </p>
    <div class="action-button">
      <a href="${url}" target="_blank">Reset Password</a>
    </div>
    <div class="info-box">
      <p><strong>After resetting your password:</strong></p>
      <p>✓ It will take you to set new password</p>
      <p>✓ Your account will remain secure</p>
    </div>
    <div class="security-note">
      <p>
        <strong>⚠️ Security Notice:</strong> If you did not request a password
        reset, please ignore this email. Your account will remain unchanged.
      </p>
    </div>
    <div class="divider"></div>
    <p style="font-size: 14px;">
      If the button doesn’t work, copy and paste this link into your browser:
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
  `},

}