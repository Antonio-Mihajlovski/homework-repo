import express  from "express";
import * as trainerService from "../service/trainer.services.js";


const router = express.Router();

router.get('/trainers', (req, res) => {
    try {
        const trainers = trainerService.getTrainerData(req.query);
        res.status(200).send(trainers)
    } catch (err) {
        res.status(404).send()
    }
})

router.post('/trainers', (req, res) => {
    const newTrainer = req.body;
    
    try {
        trainerService.addTrainer(newTrainer)
        res.sendStatus(200)
    } catch (err) {
        res.status(404).send()
    }
})

router.get("/trainers/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id
    try {
        const trainer = trainerService.getTrainerById(id, body);
        res.send(trainer);
    } catch (err) {
        console.log(err)
        res.status(404).send(`Trainer not found`)
    }
})

router.patch("/trainers/:id", (req, res) => {
    const body = req.body;
    const id = req.params.id

    try {
        trainerService.updateTrainer(id, body)
        res.sendStatus(200)
    } catch (err) {
        console.log(err)
        res.status(404).send()
    }
})

router.delete('/trainers/:id', (req, res) => {
    const id = req.params.id

    try {
        trainerService.deleteTrainer(id)
        res.sendStatus(200)
    } catch (err) {
        res.status(404).send(`Trainer not found`)
    }
})


export default router;
