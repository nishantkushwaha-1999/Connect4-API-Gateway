import dotenv from "dotenv"
import {app} from './app.js'
dotenv.config({
    path: './src/.env'
})

const port = process.env.PORT;
app.listen(port);
console.log(`⚙️ Server is running on PORT: ${port} \n      http://localhost:${port}`)
