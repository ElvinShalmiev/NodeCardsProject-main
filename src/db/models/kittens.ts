import { model, Schema } from "mongoose";

// type definitions for kittens:
const kittenSchema = new Schema({
  name: String,
});

//models ~ Class:
const Kitten = model("Kitten", kittenSchema);

//instance
const willy = new Kitten({ name: "wilson" });

willy
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((e) => console.log(e));
