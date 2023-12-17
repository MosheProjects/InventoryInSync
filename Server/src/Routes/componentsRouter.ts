import express from "express";
import { ComponentsController } from "../Controllers/componentsController";
import { AppDataSource } from "../DB/connection";
import { ComponentsService } from "../DB/componentsTBL";
import { components } from "../Entities/components";

export const componentsRouter = express.Router();
const repo = AppDataSource.getRepository(components);
const service = new ComponentsService(repo);
const ClassController = new ComponentsController(service, "components");

componentsRouter.post("/add", ClassController.add);
componentsRouter.get("/get", ClassController.getAllTBL);
componentsRouter.delete("/delete/:id", ClassController.deleteItem);
componentsRouter.post("/update", ClassController.updateItem);
