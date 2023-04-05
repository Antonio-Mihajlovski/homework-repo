import { getDb } from "../db/mongo.db.js";
import { ObjectId } from "mongodb";

export default class ZookeeperModel {
    static async getAllZookeepers() {
        const collection = await getDb().collection('zookeepers');
        const zookeepers = await collection.find().toArray()
        return zookeepers;
    }
    static async addZookeeper(zookeeper) {
        const collection = await getDb().collection("zookeepers");
        const addedZookeeper = await collection.insertOne(zookeeper);
        return { id: addedZookeeper.insertedId, ...zookeeper };
    }

    static async updateZookeeperInfo(zookeeperId, body) {
        const collection = await getDb().collection("zookeepers");
        const updatedZookeeperInfo = await collection.updateOne({ _id: new ObjectId(zookeeperId) }, { $set: body })
        return updatedZookeeperInfo
    }

    static async deleteZookeeper(zookeeperId) {
        const collection = await getDb().collection("zookeepers");
        const deleteZookeeper = await collection.deleteOne({ _id: new ObjectId(zookeeperId) })
        
    }

}