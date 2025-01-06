import cors from "cors";
import express from "express";
import { corsOrigins } from "constants.js"

const app = express();

app.use(cors({
    origin: corsOrigins,
    credentials: false
}));
console.log("Allowed Origins:\n", process.env.CORS_HTTPS_ORIGIN, "\n", process.env.CORS_HTTP_ORIGIN, "\n", 
    process.env.CORS_DEV_ORIGIN, "\n"
)

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// route imports
import v1Router from "./routes/v1/routes.js";

//route declaration
app.use("/api/v1", v1Router);

export { app };