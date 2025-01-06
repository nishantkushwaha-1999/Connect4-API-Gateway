import { Router } from "express";
import loggerRouter from "./logger.routes.js";
import botRouter from "./bot.routes.js"

const v1Router = Router();

v1Router.use("/logs", loggerRouter);
v1Router.use("/bot", botRouter);

export default v1Router;