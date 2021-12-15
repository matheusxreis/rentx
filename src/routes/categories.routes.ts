import { response, Router } from "express";

// import { Category } from "../model/category";
import { CategoryRepository } from "../repositories/categories-repository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExist = categoriesRepository.findByName(name);

  if (categoryAlreadyExist) {
    return response.status(400).json({ error: "Category already exist" });
  }

  categoriesRepository.create({ name, description });
  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
