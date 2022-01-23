import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/Icategoriesrepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/categoriesrepository";


//O TSrynge cria um singleton para mim, sem que eu precise fazer de toda aquela forma com o getInstance().
// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);
