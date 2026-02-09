import { UserRole } from "../../generated/prisma/enums";

export type User = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  isBanned: boolean;
  emailVerified: boolean;
}