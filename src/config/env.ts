import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.join(process.cwd(), ".env"),
});

const env_variable = {
  port: Number(process.env.PORT) || 8080,
  db_url: process.env.DATABASE_URL || "",
  backend_url: process.env.BACKEND_URL || "",
  frontend_url: process.env.FRONTEND_URL || "",
  better_auth_sectet: process.env.BETTER_AUTH_SECRET || "",
  google_client_secret: process.env.GOOGLE_CLIENT_SECRET || "",
  google_client_id: process.env.GOOGLE_CLIENT_ID || "",
  nodemailer_user: process.env.NODEMAILER_USER || "",
  nodemailer_pass: process.env.NODEMAILER_PASS || ""
};

export default env_variable;