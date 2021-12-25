import { Category } from "../model/category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./Icategoriesrepository";

class CategoryRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((x) => x.name === name);
    return category;
  }
}

export { CategoryRepository };
