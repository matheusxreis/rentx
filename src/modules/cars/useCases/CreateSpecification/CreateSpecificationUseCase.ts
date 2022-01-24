import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../repositories/Ispecificationrepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private specificationsRepository: ISpecificationsRepository) {}

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
