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
    private specificationsRepository: ISpecificationsRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const alreadyExist = await this.specificationsRepository.findByName(name);

    if (alreadyExist) {
      throw new Error("Specification already exist");
    }

    await this.specificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
