import { generalProducts } from "./../Entities/generalProducts";
import { GeneralProductsController } from "./../Controllers/GeneralProductsController";
import express from "express";
import { AppDataSource } from "../DB/connection";
import { GeneralProductsService } from "../DB/generalProductsTBL";

export const generalProductsRouter = express.Router();
const repo = AppDataSource.getRepository(generalProducts);
const service = new GeneralProductsService(repo);
const ClassController = new GeneralProductsController(
  service,
  "generalProducts"
);

generalProductsRouter.post("/add", ClassController.add);
generalProductsRouter.get("/get", ClassController.getAllTBL);
generalProductsRouter.delete("/delete/:id", ClassController.deleteItem);
generalProductsRouter.post("/update", ClassController.updateItem);
