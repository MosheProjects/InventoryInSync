import express from "express";
import { AppDataSource } from "../DB/connection";
import { Visits } from "../Entities/visits";
import { VisitsController } from "../Controllers/visitsInfoController";
import { VisitsService } from "../DB/visitsTBL";

export const visitsRouter = express.Router();
const repo = AppDataSource.getRepository(Visits);
const service = new VisitsService(repo);
const ClassController = new VisitsController(service, "Visits");

visitsRouter.post("/add", ClassController.add);
visitsRouter.get("/get", ClassController.getAllTBL);
visitsRouter.delete("/delete/:id", ClassController.deleteItem);
visitsRouter.put("/update", ClassController.updateItem);
