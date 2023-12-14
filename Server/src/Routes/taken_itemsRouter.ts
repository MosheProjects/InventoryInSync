import express from "express";
import { AppDataSource } from "../DB/connection";
import { taken_items } from "../Entities/taken_items";
import { TakenItemsController } from "../Controllers/takenItemsController";
import { TakenItemsService } from "../DB/taken_itemsTBL";

export const takenItemsRoute = express.Router();
const repo = AppDataSource.getRepository(taken_items);
const service = new TakenItemsService(repo);
const ClassController = new TakenItemsController(service, "taken_items");

takenItemsRoute.post("/add", ClassController.add);
takenItemsRoute.get("/get", ClassController.getAllTBL);
takenItemsRoute.delete("/delete/:id", ClassController.deleteItem);
takenItemsRoute.post("/update", ClassController.updateItem);
