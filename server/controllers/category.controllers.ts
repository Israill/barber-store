import Category from "@models/category.model";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name, subcategory } = req.body;

    const category = await Category.create(name, subcategory);

    return res.json(category);
  } catch (error) {
    return res.json("Error");
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    return res.json(categories);
  } catch (error) {
    return res.json("Error");
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { name, subcategory } = req.body;

    const newCategory = await Category.findById(
      req.params.id,
      {
        name,
        subcategory,
      },
      { new: true }
    );

    return res.json(newCategory);
  } catch (error) {
    return res.json("Error");
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await Category.findByIdAndRemove(req.params.id);

    return res.json("Category deleted");
  } catch (error) {
    return res.json("Error");
  }
};

export default {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
};
