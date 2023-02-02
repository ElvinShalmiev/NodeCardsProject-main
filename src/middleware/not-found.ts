import { RequestHandler } from "express";

const notFound: RequestHandler = (req, res) => {
  res.status(404).json({ message: "Page Not Found" });
};

export { notFound };
