// import { CategoryRepositories } from "../../repositories/implementations/categoriesrepository";
// import { CreateCategoryController } from "./CreateCategoryController";
// import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

// export default (): CreateCategoryController => {
//   const categoriesRepository = new CategoryRepository();
//   const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
//   // para criar uma nova categoria, eu preciso passar como parâmetro o repositório

//   const createCategoryController = new CreateCategoryController(
//     createCategoryUseCase
//   );

//   return createCategoryController;
// };
// // preciso passar o service de criar categoria para o controller como parâmetro, p ele utilizar o método execute.
