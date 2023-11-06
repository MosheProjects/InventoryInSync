import express from 'express'
import cors from 'cors'
import { AppDataSource } from './src/DB/connection';
import { mainRouter } from './src/Routes/mainRoutes';
const app  = express();
const port =3001;

app.use(cors());
app.use(express.json());
app.use(mainRouter)

AppDataSource.initialize().then(()=>{
    console.log("initialized!!");
})

app.listen(port,()=>{
console.log(`server is running on port ${port}`);


})
