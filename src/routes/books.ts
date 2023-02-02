//modularity:
//mini express application

import { Router } from "express";
 

const router = Router();

router.get("/all", (req, res) => {
  res.json([{ title: "Hunger Games" }]);
});

router.get("/fantasy", (req, res) => {
  res.json([{ title: "Harry Potter" }]);
});





// router.post('/books', (req, res)=>{})
// router.delete('/books', (req, res)=>{})

export { router as booksRouter };
