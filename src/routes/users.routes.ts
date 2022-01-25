import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";

const usersRoutes = Router();

const createUserUserController = new CreateUserController();

usersRoutes.use(ensureAuthenticated);

usersRoutes.post("/", createUserUserController.handle);

export { usersRoutes };
