import express from "express";
import AnimalController from "../controllers/animal.controller.js";


const router = express.Router();

router.get("/", AnimalController.getAllAnimals)
router.post("/", AnimalController.addNewAnimal)
router.put("/:id", AnimalController.updateAnimal)
router.delete("/:id", AnimalController.deleteAnimal)


export default router;