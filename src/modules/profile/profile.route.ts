import express, { Router } from "express";
import { auth } from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma/enums";
import { profileController } from "./profile.controller";

const router = express.Router();

router.get(
  "/me",
  auth(UserRole.ADMIN, UserRole.STUDENT, UserRole.TUTOR),
  profileController.getProfile,
);

export const postRouter: Router = router;