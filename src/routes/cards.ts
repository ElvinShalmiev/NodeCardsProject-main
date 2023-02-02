import { Router } from "express";
import { Card } from "../db/models/card.js";
const router = Router();

//add cards to db:
router.post("/", (req, res) => {
  //TODO: add validations (next lecture)
  const card = new Card({
    name: req.body.name,
    description: req.body.description,
    address: req.body.address,
    bizNumber: req.body.bizNumber,
    image: req.body.image,
    phone: req.body.phone,
  });

  card
    .save()
    .then((saved) => {
      res.json({ message: "Successfully saved your card" });
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
