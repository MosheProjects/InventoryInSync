import { usb_sticks } from "../Entities/usb_sticks";
import { users } from "../Entities/users";
import { baseController } from "./BaseController";

export class usersController extends baseController<users> {
  constructor(entity, entityName) {
    super(entity, entityName);
  }
}
