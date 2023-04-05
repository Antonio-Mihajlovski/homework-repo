import { getDb } from "../db/mongo.db.js";
import { ObjectId } from "mongodb";

export default class AnimalModel {

    static async getAllAnimals() {
        const collection = await getDb().collection("animals");
        const animals = await collection.find().toArray()
        return animals;
    }

    static async addNewAnimal(animal) {
        const collection = await getDb().collection("animals");
        const addAnimal = await collection.insertOne(animal)
        return { id: addAnimal.insertedId, ...animal };
    }

 

    static async updateAnimal(animalId, body) {
        const collection = await getDb().collection("animals");
        const updatedAnimal = await collection.updateOne({ _id: new ObjectId(animalId) }, { $set: body })
       
        return updatedAnimal
    }

    static async deleteAnimal(animalId) {
        const collection = await getDb().collection("animals");
        const deleteAnimal = await collection.deleteOne({ _id: new ObjectId(animalId) })
        
    }
}