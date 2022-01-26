import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUserController } from "../modules/accounts/useCases/CreateUser/CreateUserController";
import { UpdateUserAvatarController } from "../modules/accounts/useCases/UpdateUserAvatar/UpdateUserAvatarController";

const usersRoutes = Router();

// esse uploadConfig é novo p mim
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const updateUserAvatarController = new UpdateUserAvatarController();
const createUserUserController = new CreateUserController();

usersRoutes.post("/", createUserUserController.handle);

usersRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("file"),
  updateUserAvatarController.handle
);

export { usersRoutes };
