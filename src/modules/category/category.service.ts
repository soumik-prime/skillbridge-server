import { prisma } from "../../lib/prisma";

export const categoryServices = {
  // ! CREATE SERVICES
  createCategory: async(name: string) => {
    return await prisma.category.create({
      data:{ name }
    })
  },

  // ! GET SERVICES
  // Get All Categories
  getAllCategories: async() => {
    return await prisma.category.findMany();
  },

  // ! UPDATE SERVICES
  // Update Category Name By Id
  updateCategoryById: async(id: string, name: string) => {
    return await prisma.category.update({
      where: { id },
      data: { name }
    })
  },

  // ! DELETE SERVICES
  // Delete Category By Id
  deleteCategoryById: async(id: string) => {
    return await prisma.category.delete({
      where: { id }
    })
  }

}