import { Router } from "express";
import AnimalController from "../controllers/animals.controllers.js"


const router = Router()

router.get("/", AnimalController.getAllAnimals)
router.post("/", AnimalController.addAnimals)
router.put("/:id", AnimalController.updateAnimal)
router.delete("/:id", AnimalController.deleteAnimal)
router.get("/:id", AnimalController.getAnimalsById)


export default router