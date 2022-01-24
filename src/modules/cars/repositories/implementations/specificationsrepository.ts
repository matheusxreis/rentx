import { Repository, getRepository } from "typeorm";

import { Specification } from "../../entities/specifications";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../Ispecificationrepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specification: Repository<Specification>;

  constructor() {
    this.specification = getRepository(Specification);
  }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    // this.specifications.push(specification);
  }

   findByName(name: string): Specification {}
  //   const alreadyExist = this.specifications.find((x) => x.name === name);

  //   return alreadyExist;
  // }

   list(): Specification[] {}
  //   return this.specifications;
  // }
}

export { SpecificationsRepository };
