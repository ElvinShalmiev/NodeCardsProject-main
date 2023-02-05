import { Router } from "express";
import _ from "underscore";
import { User } from "../db/models/user.js";
import { validateSignUp } from "../middleware/verifySignupBody.js";
import { userAlreadyExists } from "../middleware/userAlreadyExists.js";

import bcrypt from "bcryptjs";
import { validateSignIn } from "../middleware/verifySignInBody.js";
const router = Router();

//api/auth/signup
router.post("/signup", validateSignUp, userAlreadyExists, async (req, res) => {
  const body = _.pick(req.body, "username", "email", "password");

  //12 rounds takes more
  body.password = await bcrypt.hash(body.password, 12);
  //save the password hash to db:

  try {
    const user = await new User(body).save();
    return res.json({ message: "user saved", id: user._id });
  } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
  }
});

router.post("/signin", validateSignIn, async (req, res) => {
  //email and password:
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(401).json({ message: "No Such User" });
    }

    //123*12
    //verify body.password matches user.password
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    return res.status(200).json({ message: "Sign in succesfull" });
  } catch (e) {}
});

export { router as authRouter };
