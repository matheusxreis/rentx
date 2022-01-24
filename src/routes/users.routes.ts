import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";

const usersRoutes = Router();

const createUserUserController = new CreateUserController();

usersRoutes.post("/", createUserUserController.handle);

export { usersRoutes };
