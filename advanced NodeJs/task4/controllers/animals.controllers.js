import AnimalService from "../services/animals.service.js"

export default class AnimalController {
    static async getAllAnimals(req, res) {
        const id = req.params.id
        try {
            if(id) {
                const animal = await AnimalService.getAnimalsById(id)
            } else {
            const animals = await AnimalService.getAllAnimals();
            res.status(200).send(animals)
        }
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async getAnimalsById(req, res){
        try {
            const id = req.params.id
            const animal = await AnimalService.getAnimalsById(id)
            res.status(200).send(animal)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    
    static async addAnimals(req, res) {
        try {
            const animal = await AnimalService.addAnimals(req.body);
            res.status(200).send(animal)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async updateAnimal(req, res) {
        try {
            const updateAnimalInfo = await AnimalService.updateAnimal(req.params.id, req.body)
            res.status(200).send(updateAnimalInfo)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteAnimal(req, res) {
        try {
            const deleteAnimal = await AnimalService.deleteAnimal(req.params.id)
            res.status(200).send(`Succesfully deleted a animal`)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}