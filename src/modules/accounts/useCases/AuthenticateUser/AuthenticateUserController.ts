//import "reflect-metadata";

import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
    try {
      const token = await authenticateUserUseCase.execute({ email, password });

      return response.json(token);
    } catch {
      return response.status(401).send();
    }
  }
}

export { AuthenticateUserController };
