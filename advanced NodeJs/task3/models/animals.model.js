import { Schema, model } from "mongoose";
const animalsSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    age: {
        type: Number,
        required: true,
        min: [0, "Age cannot be a negative number"]
    },
    location: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        M: ["Select M if u are male"],
        M: ["Select F if u are female"]
    },
    characteristics: {
        type: Object,
        required: true,
        food: {
            type: String,
            required: false
        },
        colour: {
            type: String,
            required: false
        },
        isDangerous: {
            type: Boolean,
            required: false
        },
        weight: {
            type: Number,
            required: false,
            min: [0, "Age cannot be a negative number"]
        },
        enclosure: {
            type: String,
            required: true
        }
    }
})


const Animals = model("Animals", animalsSchema);

export default Animals;