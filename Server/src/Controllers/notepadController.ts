import { Notepad } from "../Entities/Notepad";
import { baseController } from "./BaseController";

export class NotePadController extends baseController<Notepad> {
  
    constructor(entity, entityName) {
      super(entity, entityName);
    }
  }