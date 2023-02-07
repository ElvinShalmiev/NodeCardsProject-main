import { Car } from "../../@types.js";
import { Schema } from "mongoose";

const carSchema = new Schema<Car>({
  vandor: {
    type: String,
    required: true,
    minlegth: 2,
    maxlength: 30,
  },
  color: {
    type: String,
    required: true,
    minlegth: 2,
    maxlength: 30,
  },
  image: String,
  model: String,
});
