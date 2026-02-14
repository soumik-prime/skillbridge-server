import { Request, Response } from "express";
import { categoryServices } from "./category.service";

export const categoryController = {
  // ! CREATE CONTROLLERS
  createCategory: async(req: Request, res: Response) => {
    try{
      const { name } = req.body;
      const result = await categoryServices.createCategory(name);
      return res.status(200).json(result);
    } catch (error) {
      // TODO ------
    }
  },

  // ! GET CONTROLLERS
  getAllCategories: async(req: Request, res: Response) => {
    try{
      const result = await categoryServices.getAllCategories();
      return res.status(200).json(result);
    } catch (error) {
      // TODO ------
    }
  },

  // ! UPDATE CONTROLLERS
  updateCategoryById: async(req: Request, res: Response) => {
    try{
      const { categoryId } = req.params;
      const { name } = req.body;
      const result = await categoryServices.updateCategoryById(categoryId as string, name);
      return res.status(200).json(result);
    } catch (error) {
      // TODO ------
    }
  },

  // ! DELETE CONTROLLERS
  deleteCategoryById: async(req: Request, res: Response) => {
    try{
      const { categoryId } = req.params;
      const result = await categoryServices.deleteCategoryById(categoryId as string);
      return res.status(200).json(result);
    } catch (error) {
      // TODO ------
    }
  },

}