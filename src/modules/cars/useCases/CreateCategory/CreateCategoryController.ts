// import "reflect-metadata";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description });

    return response.status(201).send();

    // O tratamento com try/catch fui eu quem fiz aqui, pois estava ocorrendo um probleminha com a aplicação =)
  }
}

export { CreateCategoryController };
