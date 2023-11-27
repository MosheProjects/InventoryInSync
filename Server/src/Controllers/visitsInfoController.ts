import { Visits } from "../Entities/visits";
import { baseController } from "./BaseController";

export class VisitsController extends baseController<Visits> {
  
    constructor(entity, entityName) {
      super(entity, entityName);
    }
  }