import mongoose from "mongoose";
import z from "zod";

const blogScheme = mongoose.Schema({
  title: { type: String, required: true, minLength: 10 },
  slug: { type: String, required: true },
  body: { type: String, required: true },
  category: { type: Array, required: true },
  thumbnail: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});

const Blog = mongoose.model("Blog", blogScheme);

export { Blog };
