
import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";
import { Role } from "./models/role.js";

const { HOST, DB, PORT, ROLES } = dbConfig;

const connect = async () => {
  //mongoose 7 update:
  mongoose.set("strictQuery", false);
  await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`); //(`mongodb://127.0.0.1:27017/lec4db`)
  console.log(`Succesfully connected to the database ${DB}`); //(`Succesfully connected to the database lec4db`);

  initDB();
};

const initDB = () => {
  //create the User/Admin/Mod roles
  //ifRole collection is Empty:
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      ROLES.map((s) => new Role({ name: s })).forEach((role) => {
        role.save((err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("added ", role.name, "to Roles collection");
          }
        });
      });
    }
  });
};

/* or this (the same but defferent ways:) 
const initDB2 = async () => {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      const roles = ROLES.map((r) => new Role({ name: r }));

      //dont use forEach with await
      for (let role of roles) {
        await role.save();
        console.log("added ", role.name, "to Roles collection");
      }
    }
  } catch (e) {
    console.log("Failed with error: ", e);
  }
};
*/
export { connect };