import { Schema, model } from "mongoose";
import Animals from "./animals.model.js"

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
    },
    animals: [
        {
          type: Schema.Types.ObjectId,
          ref: "Animal",
        },
      ],
})

const Zookeepers = model("Zookeeper", zookeepersSchema);

export default Zookeepers;