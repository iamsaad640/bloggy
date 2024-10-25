import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("bad request");

  const validatePassword = bcrypt.compare(req.body.password, user.password);
  if (!validatePassword) return res.status(400).send("bad request");

  const token = user.generateAuthToken();
  return res.send(token);
});

export { router };
