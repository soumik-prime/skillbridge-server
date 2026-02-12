import { Request, Response, NextFunction } from "express";
import { auth as betterAuth } from "../lib/auth";
import { UserRole } from "../../generated/prisma/enums";

export const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const session = await betterAuth.api.getSession({
        headers: req.headers as any,
      });

      if (!session) {
        // todo: error handling
        res.status(401).send("Unauthorized");
        return;
      }

      if (!session.user.emailVerified) {
        return res.status(403).json({
          success: false,
          message: "Email verification required. Please verfiy your email!",
        });
      }

      if (roles.includes(session.user.role as UserRole)) {
        req.user = {
          id: session.user.id,
          name: session.user.name,
          email: session.user.email,
          role: session.user.role as UserRole,
          isBanned: session.user.isBanned,
        };
        next();
      }
      
      if (session.user.role === UserRole.GUEST) {
        return res.status(401).json({
          ok: false,
          message: "Are you a student or tutor?",
        });
      }
    } catch (err) {
      // todo------
      res.send("error");
    }
  };
};
