import express from "express";
import {} from "../Controllers/componentsController";

const userRouter = express.Router();

userRouter.post("/add");
userRouter.get("/get");
userRouter.delete("/delete/:id");

export { userRouter };
