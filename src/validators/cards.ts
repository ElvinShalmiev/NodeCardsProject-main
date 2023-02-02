import joi from "joi";
import { phoneRegex, urlRegex } from "./utils.js";

const schema = joi.object({
  name: joi.string().min(2).max(30).required(),
  description: joi.string().min(6).max(3000).required(),
  address: joi.string().min(6).max(100).required(),
  bizNumber: joi.number().min(0),
  image: joi.string().regex(urlRegex),
  phone: joi.string().regex(phoneRegex).required(),
});

export { schema as cardSchema };
