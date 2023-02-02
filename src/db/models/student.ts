import { model } from "mongoose";
import { studentSchema } from "../schemas/student.js";

const Student = model("Student", studentSchema);

export { Student };