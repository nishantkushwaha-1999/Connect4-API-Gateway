import cors from "cors";
import express from "express";
import { corsOrigins } from "./constantss.js"

const app = express();

app.use(cors({
    origin: function(origin, callback) {
        if(corsOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS. Only valid domains allowed!!"));
        }
    },
    credentials: false
}));
console.log("Allowed Origins:\n", corsOrigins)

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))

// route imports
import v1Router from "./routes/v1/routes.js";

//route declaration
app.use("/api/v1", v1Router);

export { app };