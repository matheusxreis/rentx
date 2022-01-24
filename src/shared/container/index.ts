import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/cars/repositories/Icategoriesrepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/categoriesrepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/specificationsrepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/Ispecificationrepository";

// O TSrynge cria um singleton para mim, sem que eu precise fazer de toda aquela forma com o getInstance().
// ICategoryRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsREpository",
  SpecificationsRepository
);
