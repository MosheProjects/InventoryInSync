import express from 'express'
import {  } from '../Controllers/componentsController';
import { addUsb, deleteUsb, getUsb } from '../Controllers/usb_sticksController';



const usbRouters  = express.Router();

usbRouters.post('/add', addUsb)
usbRouters.get('/get',getUsb)
usbRouters.delete('/delete/:id', deleteUsb)



export {usbRouters}