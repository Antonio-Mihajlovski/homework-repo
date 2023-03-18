import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url'
import trainerRoutes from "./routes/trainers.routes.js"


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const home = path.join(__dirname, "../public/index.html")
const PORT = 3000;
const HOSTNAME = `localhost`;

const app = express()

app.use(express.json());
app.use(cors());

app.use('/api', trainerRoutes)
app.use('/home', express.static(home))


app.listen(PORT, HOSTNAME, () => {
    console.log(`Server started listening on http://${HOSTNAME}:${PORT}`)
})
