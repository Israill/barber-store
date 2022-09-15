import categoryControllers from "@controllers/category.controllers";
import express from "express";

const router = express.Router();

router.post("/", categoryControllers.createCategory);
router.get("/", categoryControllers.getCategories);
router.patch("/:id", categoryControllers.updateCategory);
router.delete("/:id", categoryControllers.deleteCategory);

export default router;
