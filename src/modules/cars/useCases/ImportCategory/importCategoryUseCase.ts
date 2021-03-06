import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}
@injectable()
class ImportCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository
  ) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      // multer -> fs -> csv-parse -> categories -> CategoryRepository.create({})
      // o multer lê o arquivo da requisição nos routes e cria um novo arquivo na pasta tmp
      const stream = fs.createReadStream(file.path);
      // o fs faz a leitura do arquivo criado pelo multer na pasta tmp em forma de stream
      const categories: IImportCategory[] = [];
      const parseFile = parse();

      stream.pipe(parseFile);
      // o fs manda cada pedaço (linha) desse arquivo para a função parseFile, que divide
      // o arquivo por vírgulas, transformando cada pedaço em um array, com o número corres
      // pondente ao de vírgulas
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
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on("error", (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (x) => {
      const { name, description } = x;

      const alreadyExist = await this.categoriesRepository.findByName(name);

      // Sem o await, o findByName sempre vai retornar <Pending>

      if (!alreadyExist) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
      return x;
    });
  }
}

export { ImportCategoryUseCase };
