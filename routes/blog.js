import express from "express";
import { Blog } from "../models/blog.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await Blog.find().sort({ createdAt: 1 }).select();

  if (!result) return res.status(404).send(new Error("not found"));

  result.forEach((r) => {
    r.body = r.body.slice(0, 40) + "...";
  });

  try {
    return res.send(result);
  } catch (e) {
    return res.status(500).send(new Error("unexpected error occured"));
  }
});

router.get("/:slug", async (req, res) => {
  const result = await Blog.findOne({ slug: req.params.slug });

  if (!result) return res.status(404).send(new Error("not found"));

  try {
    return res.send(result);
  } catch (e) {
    return res.status(500).send(new Error("unexpected error occured"));
  }
});

export { router };
