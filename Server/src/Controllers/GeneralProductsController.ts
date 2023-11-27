import { generalProducts } from "../Entities/generalProducts";
import { baseController } from "./BaseController";

export class GeneralProductsController extends baseController<generalProducts> {
  
    constructor(entity, entityName) {
      super(entity, entityName);
    }
  }