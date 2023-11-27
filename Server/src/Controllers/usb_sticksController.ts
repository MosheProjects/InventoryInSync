import { usb_sticks } from "../Entities/usb_sticks";
import { baseController } from "./BaseController";

export class UsbSticksController extends baseController<usb_sticks> {
  
    constructor(entity, entityName) {
      super(entity, entityName);
    }
  }