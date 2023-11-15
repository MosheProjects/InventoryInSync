import express from 'express'
import { addVisit,getVisits,deleteVisit} from '../Controllers/visitsInfoController'

export const visitsRouter = express.Router();

visitsRouter.post('/add', addVisit)
 visitsRouter.get('/get', getVisits)
 visitsRouter.delete('/delete/:id', deleteVisit)
