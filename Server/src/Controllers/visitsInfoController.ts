import { Request, Response } from "express";
import { Visits } from "../Entities/visits";
import { baseController } from "./BaseController";
import { VisitsService } from "../DB/visitsTBL";

export class VisitsController extends baseController<Visits> {


  protected visitService: VisitsService;

  constructor(entity, entityName) {
    super(entity, entityName);
  }

  removePastVisits = async () => {
    const myVisits = this.visitService.getVisits();

    const currentDate = new Date();

    const updatedVisits = (await myVisits).filter((visit) => {
      const visitDate = new Date(visit.createdDate); 

      return visitDate > currentDate;
    });

    // this.visitService.(updatedVisits);

    return updatedVisits;
  };
}
