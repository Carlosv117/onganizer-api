import { Router } from "express";
import UsersController from "../controllers/users.controller";
// import LoginController from "../controllers/login.controller";

const usersController = new UsersController();
// const loginController = new LoginController();

const usersRoutes = Router();

usersRoutes.post("", usersController.create);
usersRoutes.post("/login", usersController.login);

usersRoutes.get("", usersController.list);
usersRoutes.get("/:id", usersController.listById);

usersRoutes.patch("/:id", usersController.update);

usersRoutes.delete("/:id", usersController.delete);

export default usersRoutes;
