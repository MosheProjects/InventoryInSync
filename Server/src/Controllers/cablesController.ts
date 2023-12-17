import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { baseController } from "./BaseController";
import { cables } from "../Entities/cables";


export class cablesController extends baseController<cables> {
  constructor(entity, entityName) {
    super(entity, entityName);
  }
}
