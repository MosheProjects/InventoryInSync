import express from 'express'
import { addVisit,getVisits,deleteVisit} from '../Controllers/visitsInfoController'

export const visitsRouter = express.Router();
console.log("fg");

visitsRouter.post('/add', addVisit)
 visitsRouter.get('/get', getVisits)
 visitsRouter.delete('/delete/:id', deleteVisit)
