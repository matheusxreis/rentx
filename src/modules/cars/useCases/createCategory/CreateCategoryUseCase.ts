import { ICategoriesRepository } from "../../repositories/Icategoriesrepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadyExist = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExist) {
      throw new Error("Category already exist");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
