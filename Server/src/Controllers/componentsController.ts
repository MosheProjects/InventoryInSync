import { Response, Request } from "express";
import { components } from "../Entities/components";
import { baseController } from "./BaseController";

export class ComponentsController extends baseController<components> {
  constructor(entity, entityName) {
    super(entity, entityName);
  }
}
