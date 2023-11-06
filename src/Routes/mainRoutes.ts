import express from 'express'
import { NProuter } from './notepadRouter'

const mainRouter = express.Router();

mainRouter.use('/Notepad',NProuter);

export {mainRouter}