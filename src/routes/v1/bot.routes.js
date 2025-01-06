import { Router } from "express";
import { 
    getBotMove
} from "../../controllers/v1/bot.controller.js";

const botRouter = Router();

botRouter.route("/getBotMove").get(getBotMove);

export default botRouter;