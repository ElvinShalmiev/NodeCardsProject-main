import mongoose from "mongoose";

const connect = async () => {
  //mongoose 7 update:
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://127.0.0.1:27017/lec4db");
  console.log("Succesfully connected to the database lec4db");
};

export { connect };
