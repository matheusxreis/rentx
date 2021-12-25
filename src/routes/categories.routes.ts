import { response, Router } from "express";

// import { Category } from "../model/category";
import { CategoryRepository } from "../modules/cars/repositories/categoriesrepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository(); // funciona como se fosse meu db

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
