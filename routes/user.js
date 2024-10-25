import express from "express";
import bcrypt from "bcrypt";
import { User, validate } from "../models/user.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const user = await User.find();
  if (user.length === 0)
    return res.status(404).send("There is not user created yet");

  return res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  console.log(req.body);
  console.log(error);
  if (error) return res.status(400).send(error);
  const user = new User({
    ...req.body,
  });
  console.log(user);

  if (await User.findOne({ email: user.email }))
    return res.send("User Already Exist");

  const salt = await bcrypt.genSalt(10);
  user.password = bcrypt.hash(user.password, salt);
  console.log(bcrypt.compare(req.body.password, user.password));
  const result = await user.save();
  console.log(result);

  const token = user.generateAuthToken();
  return res.header("x-auth-token", token).send(result);
});

export { router };
