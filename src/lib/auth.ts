import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { UserRole } from "../../generated/prisma/enums";
import nodemailer from "nodemailer";
import env_variable from "../config/env";
import { emailVerificationTemplete } from "../emails/verify-email";

// Create a transporter using Ethereal test credentials.
// For production, replace with your actual SMTP server details.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: env_variable.nodemailer_user,
    pass: env_variable.nodemailer_pass,
  },
});

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      console.log(user);
      console.log(url);
      // void sendEmail({
      //   to: user.email,
      //   subject: "Reset your password",
      //   text: `Click the link to reset your password: ${url}`,
      // });
    },
    onPasswordReset: async ({ user }, request) => {
      // your logic here
      console.log(`Password for user ${user.email} has been reset.`);
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        defaultValue: UserRole.GUEST,
        required: true,
      },
      isBanned: {
        type: "boolean",
        defaultValue: false,
        required: true,
      },
    },
  },
  emailVerification: {
    sendOnSignIn: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      try{
        const verificationURL = `${env_variable.frontend_url}/verify-email?token=${token}`;
        const info = await transporter.sendMail({
          from: '"Skill Bridge" <soumik0001@gmail.com>',
          to: user.email,
          subject: emailVerificationTemplete.title,
          text: emailVerificationTemplete.text(user.name, verificationURL),
          html: emailVerificationTemplete.html(user.name, verificationURL)
        });
        console.log("verification mail sent, ", info);
      } catch(err){console.log("error");}
    },
  },
});
