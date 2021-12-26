import { parse } from "csv-parse";
import fs from "fs";

import { ICategoriesRepository } from "../../repositories/Icategoriesrepository";

interface IImportCategory {
  name: string;
  description: string;
}
class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          // desestruturação array
          const [name, description] = line;

          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map((x) => {
      const { name, description } = x;

      const alreadyExist = this.categoryRepository.findByName(name);

      if (!alreadyExist) {
        this.categoryRepository.create({
          name,
          description,
        });
      }
      return x;
    });
  }
}

export { ImportCategoryUseCase };
