import { Router } from "express";
import multer from "multer";

// import { Category } from "../model/category";
import { CreateCategoryController } from "../modules/cars/useCases/CreateCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/ImportCategory/importCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/ListCategory/ListCategoriesController";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoryController.handle);

categoriesRoutes.post(
  "/import",
  upload.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
