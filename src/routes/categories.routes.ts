import { Router } from "express";

// import { Category } from "../model/category";
import { CategoryRepository } from "../repositories/categories-repository";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const categoriesRepository = new CategoryRepository();

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

export { categoriesRoutes };
