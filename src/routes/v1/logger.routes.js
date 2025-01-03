import { Router } from "express";
import { 
    getGameStatLogs,
    pageVisit,
    gamePlayed,
    botWins
} from "../../controllers/v1/logger.controller.js";

const loggerRouter = Router();

loggerRouter.route("/gameStats").get(getGameStatLogs);
loggerRouter.route("/pageVisit").post(pageVisit);
loggerRouter.route("/gameStarted").post(gamePlayed);
loggerRouter.route("/botWins").post(botWins);

export default loggerRouter;