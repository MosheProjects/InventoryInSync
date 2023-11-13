import express from 'express'
import {  } from '../Controllers/componentsData';
import { addUsb, deleteUsb, getUsb } from '../Controllers/usb_sticksData';



const usbRouters  = express.Router();

usbRouters.post('/add', addUsb)
usbRouters.get('/get',getUsb)
usbRouters.delete('/delete/:id', deleteUsb)



export {usbRouters}