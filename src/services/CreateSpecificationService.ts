import { ISpecificationsRepository } from "../modules/cars/repositories/Ispecificationrepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const alreadyExist = this.specificationsRepository.findByName(name);

    if (alreadyExist) {
      throw new Error("Specification already exist");
    }

    this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationService };
