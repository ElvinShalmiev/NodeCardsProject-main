import { Router } from "express";
import _ from "underscore";
import Joi from "joi";
import { passwordRegex } from "../validators/utils.js";
import { User } from "../db/models/user.js";

const router = Router();

//api/auth/signup
router.post("/signup", async (req, res) => {
  const body = _.pick(req.body, "username", "email", "password");

  const joiUserSchema = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordRegex).required(),
  });

  const { error } = joiUserSchema.validate(body);

  if (error) {
    return res.status(400).json({
      message: "Validation Failed",
      errors: error.details.map((ed) => ed.message),
    });
  }
  try {
    const user = await new User(body).save();

    res.json({ message: "user saved", id: user._id });
      } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
      }
});

export { router as authRouter };
