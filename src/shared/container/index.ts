import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/Icategoriesrepository";
import { CategoryRepository } from "../../modules/cars/repositories/implementations/categoriesrepository";

// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoryRepository",
  CategoryRepository
);
