import { Repository, getRepository } from "typeorm";

import { Specification } from "../../entities/specifications";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../Ispecificationrepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
    // this.specifications.push(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const alreadyExist = await this.repository.findOne({ name });

    return alreadyExist;
  }

  // list(): Specification[] {}
  // //   return this.specifications;
  // // }
}

export { SpecificationsRepository };
