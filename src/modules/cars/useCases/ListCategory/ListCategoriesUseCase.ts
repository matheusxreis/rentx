import { Category } from "../../entities/category";
import { CategoriesRepository } from "../../repositories/implementations/categoriesrepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoriesRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
