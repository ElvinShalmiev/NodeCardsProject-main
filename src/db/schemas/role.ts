import { Schema } from "mongoose";

//role has a role name: (user/admin/moderator)
const roleSchema = new Schema({
  name: String,
});

export { roleSchema };
