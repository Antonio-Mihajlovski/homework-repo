import { Router } from "express";
import ZookeeperController from "../controllers/zookeepers.controllers.js"


const router = Router()

router.get("/zookeeper", ZookeeperController.getAllZookeepers)
router.post("/zookeeper", ZookeeperController.addZookeepers)
router.put("/zookeeper/:id", ZookeeperController.updateZookeeperInfo)
router.delete("/zookeeper/:id", ZookeeperController.deleteZookeeper)
export default router