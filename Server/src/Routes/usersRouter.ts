import express from "express";
import {} from "../Controllers/componentsController";
import { users } from "../Entities/users";
import { TakenItemsService } from "../DB/taken_itemsTBL";
import { TakenItemsController } from "../Controllers/takenItemsController";
import { AppDataSource } from "../DB/connection";
import { usersService } from "../DB/usersTBL";
import { usersController } from "../Controllers/usersController";

export const userRouter = express.Router();
const repo = AppDataSource.getRepository(users);
const service = new usersService(repo);
const ClassController = new usersController(service, "users");

userRouter.post("/add", ClassController.add);
userRouter.get("/get", ClassController.getAllTBL);
userRouter.delete("/delete/:id", ClassController.deleteItem);
userRouter.put("/update", ClassController.updateItem);