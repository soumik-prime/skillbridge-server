import dotenv from "dotenv";
import path from "node:path";

dotenv.config({
  path: path.join(process.cwd(), ".env")
});

const env_variable = {
  port: Number(process.env.PORT) || 8080,
  db_url: process.env.DATABASE_URL || "",
}

export default env_variable;