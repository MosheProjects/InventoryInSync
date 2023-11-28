import { Response, Request } from "express";
import { baseServiceClass } from "../DB/baseServiceClass";
import { UpdateQueryBuilder } from "typeorm";

export abstract class baseController<T> {
  protected readonly service: baseServiceClass<T>;
  protected entityName: string;

  constructor(service: baseServiceClass<T>, entityName) {
    this.service = service;
    this.entityName = entityName;
  }

  add = async (req: Request, res: Response) => {
    const data = req.body;
    const tableInfo = await this.service.insert(data);
    res.json(tableInfo);
  };

  getAllTBL = async (req: Request, res: Response) => {
    const tableInfo = await this.service.getAll(this.entityName);
    res.json(tableInfo);
  };

  deleteItem = async (req: Request, res: Response) => {
    const id = req.params;
    const deleteresponse = await this.service.deleteById(this.entityName, id);
    res.json(deleteresponse);
  };

  async updateItem(req: Request, res: Response) {
    const body = req.body;
    const updatedProduct = await this.service.update(body.itemToUpdate);
    res.json(updatedProduct);
  }
}
