import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "reflect-metadata";
import { AppDataSource } from "./src/DB/connection";
import { mainRouter } from "./src/Routes/mainRouter";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(mainRouter);

AppDataSource.initialize().then(() => {
  console.log("initialized!!");
});

// app.all('*', (req: Request, res: Response, next: NextFunction) => {
//     next(new AppError(404, `Route ${req.originalUrl} not found`));
//   });

//   // GLOBAL ERROR HANDLER
//   app.use(
//     (error: AppError, req: Request, res: Response, next: NextFunction) => {
//       error.status = error.status || 'error';
//       error.statusCode = error.statusCode || 500;

//       res.status(error.statusCode).json({
//         status: error.status,
//         message: error.message,
//       });
//     }
//   );

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
