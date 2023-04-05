import ZookeeperModel from "../models/zookeeper.model.js"

export default class ZookeeperController {
    static async addZookeepers(req, res) {
        try {
            const zookeeper = await ZookeeperModel.addZookeeper(req.body);
            res.status(200).send(zookeeper)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    static async getAllZookeepers(req, res) {
        try {
            const zookeepers = await ZookeeperModel.getAllZookeepers();
            res.status(200).send(zookeepers)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    static async updateZookeeperInfo(req, res) {
        try {
            const updateZookeepersInfo = await ZookeeperModel.updateZookeeperInfo(req.params.id, req.body)
            res.status(200).send(updateZookeepersInfo)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteZookeeper(req, res) {
        try {
            const deleteZookepersInfo = await ZookeeperModel.deleteZookeeper(req.params.id)
            res.status(200).send(`Succesfully deleted a zookeeper`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}