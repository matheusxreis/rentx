import { Specification } from "../../model/specifications";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../Ispecificationrepository";

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  static INSTANCE: SpecificationsRepository;
  private constructor() {
    this.specifications = [];
  }

  static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new SpecificationsRepository();
    }
    return this.INSTANCE;
  }
  
  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification {
    const alreadyExist = this.specifications.find((x) => x.name === name);

    return alreadyExist;
  }

  list(): Specification[] {
    return this.specifications;
  }
}

export { SpecificationsRepository };
