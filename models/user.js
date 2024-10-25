import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import { z } from "zod";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    maxLength: 255,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    pattern: /(?=^.{6,}$)(?=.*[0-9]).*/,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, "jwtPrivateKey");
  return token;
};

const User = mongoose.model("User", userSchema);

function validate(user) {
  const validateObj = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().regex(/(?=^.{6,}$)(?=.*[0-9]).*/),
  });

  return validateObj.parse(user);
}

export { User, validate };
