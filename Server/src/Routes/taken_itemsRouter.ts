import express from 'express'
import { addLoan,getItem,deleteItem} from '../Controllers/takenItemsController'

export const takenItemsRoute = express.Router();

takenItemsRoute.post('/add', addLoan)
takenItemsRoute.get('/get', getItem)
takenItemsRoute.delete('/delete/:id', deleteItem)



