import { Router } from "express";
import loggerRouter from "./logger.routes.js";

const v1Router = Router();

v1Router.use("/logs", loggerRouter);

export default v1Router;