import { ISpecificationsRepository } from "../../repositories/Ispecificationrepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
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

export { CreateSpecificationUseCase };
