import fs from "fs";
import {v4 as uuidv4} from "uuid";
import path from "path";

import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const trainersData = path.join(__dirname, "..", "db.json");

export const getTrainerData = (query) => {
    let trainers = JSON.parse(fs.readFileSync(trainersData, { encoding: 'utf-8' }))

    if (trainers?.length <= 0) {
        return trainers
    }
    return trainers;
}

export const getTrainerById = (id) => {
    let trainers = getTrainerData();

    const trainer = trainers.find(t => t.id === id);

    if (!trainer) {
        throw new Error(`Trainer with id: ${id} not found`)
    }
    
    return trainer;
}

export const updateTrainer = (id, trainer) => {
    const trainers = getTrainerData();

    const index = trainers.findIndex(t => t.id === id);

    if (index < 0) {
        throw new Error(`Trainer with id:${id} not found`)
    }

    trainers[index] = {
        ...trainers[index],
        ...trainer
    }
    saveTrainersData(trainers)
}
export const addTrainer = (trainer) => {
    const trainers = getTrainerData();

    trainers.push({
        ...trainer,
        id: uuidv4()
    })

    saveTrainersData(trainers)
}
export const deleteTrainer = (id) => {
    const trainers = getTrainerData();

    const filterTrainers = trainers.filter(t => t.id !== id);

    saveTrainersData(filterTrainers);
}



export const saveTrainersData = (trainers) => {
    fs.writeFileSync(trainersData, JSON.stringify(trainers, null, 2))
}


