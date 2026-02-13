import express, { Router } from "express";
import { auth } from "../../middlewares/auth";
import { UserRole } from "../../../generated/prisma/enums";
import { profileController } from "./profile.controller";

const router = express.Router();
// ! Own Profile Routes
// Get Own Profile Data
router.get(
  "/me",
  auth(UserRole.STUDENT, UserRole.TUTOR),
  profileController.getOwnProfile,
);
// Create Own Profile Data
router.post(
  "/me",
  auth(UserRole.STUDENT, UserRole.TUTOR),
  profileController.createOwnProfile,
);
// Update Own Profile Data
router.patch(
  "/me",
  auth(UserRole.STUDENT, UserRole.TUTOR),
  profileController.updateOwnProfile,
);

// ! ALL PROFILES ROUTES
// All Students Data
router.get('/students',
  profileController.getAllStudentProfile
)
// All Tutors Data
router.get('/tutors',
  profileController.getAllTutorProfile
)

// ! SPECIFIC PROFILE ROUTES
// Student Profile
router.get(
  "student/:profileId",
  profileController.getStudentProfileById
)

router.get(
  "/tutor/:profileId",
  profileController.getTutorProfileById
)

export const profileRouter: Router = router;
