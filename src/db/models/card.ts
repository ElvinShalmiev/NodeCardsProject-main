import { model } from "mongoose";
import { cardsSchema } from "../schemas/card.js";

// ~Class in JS
const Card = model("Cards", cardsSchema);

export { Card };


