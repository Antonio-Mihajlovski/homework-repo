import { Router  } from "express";
import zookeeperRoutes from "./routes/zookeepers.routes.js"
import animalsRoutes from "./routes/animals.routes.js"

const router = Router()

//Zookeeper routes 
router.use("/", zookeeperRoutes)

//Animal Routes
router.use("/", animalsRoutes)

export default router