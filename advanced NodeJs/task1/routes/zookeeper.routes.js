import express from "express";
import ZookeeperController from "../controllers/zookeeper.controller.js";

const router = express.Router();

router.get("/", ZookeeperController.getAllZookeepers)
router.post("/",  ZookeeperController.addZookeepers)
router.put("/:id", ZookeeperController.updateZookeeperInfo)
router.delete("/:id", ZookeeperController.deleteZookeeper)

export default router;