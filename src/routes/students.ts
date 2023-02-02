import { Router } from "express";
import { Student } from "../db/models/student.js";
const router = Router();

// request handlers:

//GET all students:
router.get("/", async (req, res) => {
  //TODO: handle errors:
  try {
    const students = await Student.find();
    res.json(students);
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
});

//POST a student:
router.post("/", async (req, res) => {
  const newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  try {
    const result = await newStudent.save();
    res.json({ message: "Student Saved", id: result.id });
  } catch (e) {
    res.status(500).json({ message: "Error", error: e });
  }
});

export { router as studentsRouter };
