import { taken_items } from "../Entities/taken_items";
import { baseController } from "./BaseController";

export class TakenItemsController extends baseController<taken_items> {
  constructor(entity, entityName) {
    super(entity, entityName);
  }
}
