import express from 'express'
import { AppDataSource } from '../DB/connection';
import { usb_sticks } from '../Entities/usb_sticks';
import { UsbSticksController } from '../Controllers/usb_sticksController';
import {UsbSticksService} from '../DB/usb_sticksTBL' 

export const usbRouter = express.Router();
const repo=AppDataSource.getRepository(usb_sticks)
const service=new UsbSticksService(repo)
const ClassController=new UsbSticksController(service,"usb_sticks")


usbRouter.post('/add',ClassController.add)
usbRouter.get('/get',ClassController.getAllTBL)
usbRouter.delete('/delete/:id',ClassController.deleteItem)