import { Repository, getRepository } from "typeorm";

import { Category } from "../../entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // private categories: Category[];

  private repository: Repository<Category>;

  constructor() {
    // somente minha própria classe pode se instanciar
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    // SELECT * FROM categories WHERE name = "name"
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoriesRepository };
