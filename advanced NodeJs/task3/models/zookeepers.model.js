import { Schema, model } from "mongoose";

const zookeepersSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 5
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 110
    },
    location: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean
    }
})

const Zookeepers = model("Zookeeper", zookeepersSchema);

export default Zookeepers;