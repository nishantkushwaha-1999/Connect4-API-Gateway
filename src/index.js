import {app} from './app.js'
import { createServer as createHTTPSServer } from "https";
import { readFileSync } from 'fs';
import dotenv from "dotenv"
dotenv.config({
    path: './src/.env'
})

// HTTPS Server
const httpsPORT = process.env.HTTPS_PORT;
const httpsServer = createHTTPSServer({
    key: readFileSync(process.env.SSL_KEY_PATH),
    cert: readFileSync(process.env.SSL_CERT_PATH)
}, app)

httpsServer.listen(httpsPORT, () => {
    console.log(`⚙️ HTTPS Server is running on PORT: ${httpsPORT} \n      https://personlprojectsnk.com \n`)
});

// HTTP Server
const httpPORT = process.env.HTTP_PORT;
app.listen(httpPORT)
console.log(`⚙️ Server is running on PORT: ${httpPORT} \n      http://localhost:${httpPORT}`)
