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
        required: true,
        enum: [ "M", "F", `Select M for Male or F for Female`]
    },
    characteristics: {
        type: {
            food: {
                type: String
            },
            colour: {
                type: String
            },
            isDangerous: {
                type: Boolean,
                default: false
            },
            weight: {
                type: Number,
                min: [0, "Weight cannot be a negative number"]
            },
            enclosure: {
                type: String,
                required: true
            }
        },
        required: true
    },
    zookeeper: [{
        type: Schema.Types.ObjectId,
        ref: "Zookeeper",
      }]
})


const Animals = model("Animal", animalsSchema);

export default Animals;