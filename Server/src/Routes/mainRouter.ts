import express from 'express'
import { NProuter } from './notepadRouter'
import { visitsRouter } from './visitsRouter';
import {computerRouter} from './computerRouter'
import { cableRouter } from './cableRouter';
import { componentsRouter } from './componentsRouter';
import { usbRouters } from './usbRouter';
import { userRouter } from './usersRouter';
import { generalProductsRouter } from './GProuter';
import { getNamesOfColumns } from '../Controllers/metadataController';
import { takenItemsRoute } from './taken_itemsRouter';

export const mainRouter = express.Router();

mainRouter.use('/notepad',NProuter);
mainRouter.use('/visits',visitsRouter);
mainRouter.use('/computers',computerRouter);
mainRouter.use('/cables' , cableRouter);
// FIXME: spacing
mainRouter.use ('/components' , componentsRouter)
mainRouter.use ('/usb_sticks' , usbRouters)
mainRouter.use ('/taken_items' , takenItemsRoute)
mainRouter.use('/users' , userRouter)
mainRouter.use('/generalProducts' ,generalProductsRouter )
mainRouter.get('/columnsNames',getNamesOfColumns)
