import express from "express";
import zookeeperRoutes from "./routes/zookeeper.routes.js"

const router = express.Router();

router.use("/zookeepers", zookeeperRoutes)

export default router