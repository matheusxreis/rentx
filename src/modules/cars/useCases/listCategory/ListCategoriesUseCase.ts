import { Category } from "../../entities/category";
import { CategoryRepository } from "../../repositories/implementations/categoriesrepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: CategoryRepository) {}

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
