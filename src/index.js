import {app} from './app.js'
import { createServer } from "https";
import { readFileSync } from 'fs';
import dotenv from "dotenv"
dotenv.config({
    path: './src/.env'
})

const port = process.env.PORT;
const server = createServer({
    key: readFileSync(process.env.SSL_KEY_PATH),
    cert: readFileSync(process.env.SSL_CERT_PATH)
}, app)

server.listen(port, () => {
    console.log(`⚙️ Server is running on PORT: ${port} \n      https://localhost:${port}`)
});
