import { Schema } from "mongoose";


//תיאור של המסמכים שנרצה לשמור
const cardsSchema = new Schema({
  name: String,
  description: String,
  address: String,
  phone: String,
  image: String,
  bizNumber: Number,
});

export { cardsSchema };
