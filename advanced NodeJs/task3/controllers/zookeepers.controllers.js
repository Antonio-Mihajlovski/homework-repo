import ZookeeperService from "../services/zookeepers.service.js"

export default class ZookeeperController {
    static async addZookeepers(req, res) {
        try {
            const zookeeper = await ZookeeperService.addZookeeper(req.body);
            res.status(200).send(zookeeper)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    static async getAllZookeepers(req, res) {
        try {
            const zookeepers = await ZookeeperService.getAllZookeepers();
            res.status(200).send(zookeepers)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    static async updateZookeeperInfo(req, res) {
        try {
            const updateZookeepersInfo = await ZookeeperService.updateZookeeperInfo(req.params.id, req.body)
            res.status(200).send(updateZookeepersInfo)
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteZookeeper(req, res) {
        try {
            const deleteZookepersInfo = await ZookeeperService.deleteZookeeper(req.params.id)
            res.status(200).send(`Succesfully deleted a zookeeper`)
        } catch (error) {
            res.status(500).send(error)
        }
    }

}