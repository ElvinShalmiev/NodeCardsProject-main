import { Router } from "express";
import { Student } from "../db/models/student.js";
const router = Router();

// request handlers:

//GET all students:
router.get("/", async (req, res) => {
  //TODO: handle errors:
  const students = await Student.find();
  res.json(students);
});

//POST a student:
router.post("/", async (req, res) => {
  const newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  const result = await newStudent.save();

  res.json({ message: "Student Saved", id: result.id });
});

export { router as studentsRouter };