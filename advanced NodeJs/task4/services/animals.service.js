import Animals from "../models/animals.model.js"


export default class AnimalService {
    static async getAllAnimals() {
        const animals = await Animals.find({})

        return animals
    }
    
    static async getAnimalsById(id){
        const animal = await Animals.findById(id).populate("zookeeper", "-animals")       
        return animal
    }
    

    static async addAnimals(animalData) {
        const animal = new Animals(animalData)
        const newAnimal = await animal.save()
        return newAnimal
    }

    static async updateAnimal(animalID, updateData) {
        const animal = await Animals.findById(animalID);
        
        if (!animal) throw new Error(`Animal with ID:${animalID} doesn't exist!`)

        const keys = Object.keys(updateData);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                animal[key] = updateData[key]
            }
        })

        const updateAnimal = await animal.save();

        return updateAnimal;
    }

    static async deleteAnimal(animalID) {
        await Animals.findByIdAndDelete(animalID);
    }

    
    
}