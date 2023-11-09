import express from 'express'
import { addVisit,getVisits,deleteVisit,getNamesOfColumns} from '../Controllers/visitsInfo'

export const visitsRouter = express.Router();

visitsRouter.post('/add', addVisit)
 visitsRouter.get('/display', getVisits)
 visitsRouter.delete('/delete/:id', deleteVisit)
 visitsRouter.get('/columnsNames',getNamesOfColumns)
