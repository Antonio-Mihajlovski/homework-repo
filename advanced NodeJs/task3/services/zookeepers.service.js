import Zookeepers from "../models/zookeepers.model.js"

export default class ZookeeperService {
    static async getAllZookeepers() {
        const zookeepers = await Zookeepers.find({})
        return zookeepers
    }
    static async addZookeeper(zookeeperData) {
        const zookeeper = new Zookeepers(zookeeperData)
        const newZookeeper = await zookeeper.save()
        return newZookeeper
    }

    static async updateZookeeperInfo(zookeeperId, updateData) {
        const zookeeper = await Zookeepers.findById(zookeeperId);
        
        if (!zookeeper) throw new Error(`Zookeeper with ID:${zookeeperId} doesn't exist!`)

        const keys = Object.keys(updateData);

        keys.forEach(key => {
            if (key !== '_id' && key !== '__v') {
                zookeeper[key] = updateData[key]
            }
        })

        const updateZookeeper = await zookeeper.save();

        return updateZookeeper;
    }

    static async deleteZookeeper(zookeeperId) {
        await Zookeepers.findByIdAndDelete(zookeeperId);
    }

}
