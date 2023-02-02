import { Schema } from "mongoose";

const schema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

export {
    schema as studentSchema
}