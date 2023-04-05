import express from "express";
import zookeeperRoutes from "./routes/zookeeper.routes.js"
import animalRoutes from "./routes/animal.routes.js"

const router = express.Router();

router.use("/zookeepers", zookeeperRoutes)
router.use("/animals", animalRoutes)

export default router