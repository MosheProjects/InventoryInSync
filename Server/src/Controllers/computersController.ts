import { computers } from "../Entities/computers";
import { baseController } from "./BaseController";




export class ComputersController extends baseController<computers> {
  
    constructor(entity, entityName) {
      super(entity, entityName);
    }
  }