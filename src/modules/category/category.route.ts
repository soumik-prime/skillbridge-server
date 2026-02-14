import express, { Router } from 'express';
import { auth } from '../../middlewares/auth';
import { UserRole } from '../../../generated/prisma/enums';
import { categoryController } from './category.controller';

const router = express.Router();

// ! Create a Category
router.post(
  '/',
  auth(UserRole.ADMIN),
  categoryController.createCategory
)

// ! All Categories Route
router.get(
  '/all',
 categoryController.getAllCategories
)

// ! Update a Specific Category By Id
router.patch(
  '/:categoryId',
  auth(UserRole.ADMIN),
  categoryController.updateCategoryById
)

// ! Delete a Specific Category
router.delete(
  ':categoryId',
  auth(UserRole.ADMIN),
  categoryController.deleteCategoryById
)

export const categoryRouter: Router = router;