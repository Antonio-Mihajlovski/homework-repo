import AnimalModel from "../models/animal.model.js";

export default class AnimalController {
    static async getAllAnimals(req, res) {
        try {
            const animals = await AnimalModel.getAllAnimals();
            res.status(200).send(animals)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async addNewAnimal(req, res){
        try {
            const animal = await AnimalModel.addNewAnimal(req.body)
            res.status(200).send(animal)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async updateAnimal(req, res) {
        try {
            const updateAnimals = await AnimalModel.updateAnimal(req.params.id, req.body)
            res.status(200).send(updateAnimals)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteAnimal(req, res) {
        try {
            const deleteAnimal = await AnimalModel.deleteAnimal(req.params.id)
            res.status(200).send(`Animal succesfully deleted`)
        } catch (error) {
            res.status(500).send(error)
        }

    }
}