import { CategoryRepository } from "../../repositories/categoriesrepository";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { CreateCategoryController } from "./CreateCategoryController";

const categoriesRepository = new CategoryRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
// para criar uma nova categoria, eu preciso passar como parâmetro o repositório

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
// preciso passar o service de criar categoria para o controller como parâmetro, p ele utilizar o método execute.

export { createCategoryController };
