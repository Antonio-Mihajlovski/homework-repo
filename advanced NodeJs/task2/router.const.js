import express from "express";
import animalRoutes from "./routes/animal.routes.js"

const router = express.Router()

router.use("/animals", animalRoutes)


export default router