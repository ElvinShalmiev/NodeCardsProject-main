import { RequestHandler } from "express";
import { User } from "../db/models/user.js";
const userAlreadyExists: RequestHandler = async (req, res, next) => {
  try {
    //find ({email})
    let found = await User.findOne({ email: req.body.email });
    if (found) {
      return res.status(400).json({ message: "Email already exists" });
    }

    found = await User.findOne({ username: req.body.username });
    if (found) {
      return res.status(400).json({ message: "username already exists" });
    }

    next();
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

export { userAlreadyExists };
