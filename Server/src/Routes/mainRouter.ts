import express from 'express'
import { NProuter } from './notepadRouter'
import { visitsRouter } from './visitsRouter';
import {computerRouter} from './computerRouter'
import { cableRouter } from './cableRouter';
import { componentsRouter } from './componentsRouter';
import { usbRouters } from './usbRouter';
import { userRouter } from './usersRouter';
import { generalProductsRouter } from './GProuter';
export const mainRouter = express.Router();

mainRouter.use('/Notepad',NProuter);
mainRouter.use('/Visits',visitsRouter);
mainRouter.use('/Computers',computerRouter);
mainRouter.use('/Cables' , cableRouter);
mainRouter.use ('/Components' , componentsRouter)
mainRouter.use ('/Usb_stikcs' , usbRouters)
mainRouter.use('/Users' , userRouter)
mainRouter.use('/generalProducts' ,generalProductsRouter )