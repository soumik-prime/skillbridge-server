
import express, { Router } from 'express';
import { UserRole } from '../../../generated/prisma/enums';
import { userController } from './user.controller';
import { auth } from '../../middlewares/auth';

const router = express.Router();



// ! Own Profile Routes
// Get Own User Information
router.get(
  '/me',
  auth(UserRole.ADMIN, UserRole.STUDENT, UserRole.TUTOR, UserRole.GUEST),
  userController.getOwnUser
)
// Update Own Name and Profile image
router.patch(
  '/me',
  auth(UserRole.ADMIN, UserRole.STUDENT, UserRole.TUTOR, UserRole.GUEST),
  userController.updateOwnUser
)


// ! All User Routes
// Get All Users Information
router.get(
  '/all',
  auth(UserRole.ADMIN),
  userController.getAllUser
)


// ! User Ban Route
// Ban User By Id
router.post(
  '/ban/:userId',
  auth(UserRole.ADMIN),
  userController.banUserById
)

// ! User Unban Route
// Unban User By Id
router.post(
  '/unban/:userId',
  auth(UserRole.ADMIN),
  userController.unbanUserById
)




export const userRouter:Router = router;