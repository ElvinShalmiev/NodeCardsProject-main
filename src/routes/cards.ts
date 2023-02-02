import { Router } from "express";
import { Card } from "../db/models/card.js";
const router = Router();
import joi from "joi";
import { cardSchema } from "../validators/cards.js";
import { urlRegex, phoneRegex } from "../validators/utils.js"
import _ from "underscore";

//add cards to db:
router.post("/", (req, res) => {
  const body =_.pick(req.body,"name","description","address","bizNumber","image","phone")
  
  //[{message:"", path:""}]=>[message:""]
  const validationResult = cardSchema.validate(body);

  const err = validationResult.error;
  if (err) {
    //bad request = 400 => validation errors
    return res.status(400).json(err.details.map((o) => o.message));
  }

  const card = new Card(body);

  card
    .save()
    .then((saved) => {
      res.json({
        message: "Successfully saved your card",
        id: saved._id,
        card: saved,
      });
    })
    .catch((e) => {
      res.status(500).json({ message: `Error: ${e}` });
    });
});

//get all cards from db:
router.get("/", (req, res) => {
  Card.find()
    .then((result) => {
      res.json(result);
    })
    .catch((e) => res.status(500).json({ message: `Error: ${e}` }));
});

export { router as cardsRouter };
