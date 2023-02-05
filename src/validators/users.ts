import Joi from "joi";
import { passwordRegex } from "./utils.js";

const userSignUpSchema = Joi.object({
  username: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().regex(passwordRegex).required(),
});

export { userSignUpSchema };
