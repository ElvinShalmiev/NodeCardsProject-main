import { model } from "mongoose";
import { roleSchema } from "../schemas/role.js";
const Role = model("Role", roleSchema);

export { Role };
