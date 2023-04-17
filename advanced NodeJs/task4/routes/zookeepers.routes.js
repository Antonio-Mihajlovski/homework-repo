import { Router } from "express";
import ZookeeperController from "../controllers/zookeepers.controllers.js"


const router = Router()

router.get("/", ZookeeperController.getAllZookeepers)
router.get("/:id", ZookeeperController.getZookeeperById)
router.post("/", ZookeeperController.addZookeepers)
router.put("/:id", ZookeeperController.updateZookeeperInfo)
router.delete("/:id", ZookeeperController.deleteZookeeper)

export default router