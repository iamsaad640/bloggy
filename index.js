import mongoose from "mongoose";
import express from "express";
import { router as blogRouter } from "./routes/blog.js";
import { Blog } from "./models/blog.js";
import { router as userRouter } from "./routes/user.js";
import { router as authRouter } from "./routes/auth.js";
import error from "./middleware/error.js";

mongoose
  .connect("mongodb://localhost/bloggy-db")
  .then(() => console.log("Connect Db ..."))
  .catch((err) => console.error(err.message));

const app = express();
//middleware
app.use(express.json());

//routes
app.use("/blog", blogRouter);
app.use("/signin", userRouter);
app.use("/auth", authRouter);

// handling error by using middleware at the end of pipeline
app.use(error);

async function addBlog() {
  const blogData = [
    {
      title: "Understanding JavaScript Closures and Their Use Cases",
      slug: "understanding-javascript-closures-and-their-use-cases",
      body: "Closures are an important concept in JavaScript, and understanding them can greatly improve your coding...",
      category: ["JavaScript", "Programming", "Web Development"],
      thumbnail: "https://via.placeholder.com/150",
      author: "John Doe",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "A Beginner's Guide to Node.js",
      slug: "a-beginners-guide-to-nodejs",
      body: "Node.js is a popular runtime environment that allows developers to run JavaScript on the server-side...",
      category: ["Node.js", "Backend Development"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Jane Smith",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Mastering CSS Flexbox for Responsive Layouts",
      slug: "mastering-css-flexbox-for-responsive-layouts",
      body: "Flexbox is a powerful layout module that allows you to create responsive designs with ease...",
      category: ["CSS", "Web Design", "Frontend Development"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Emily Clark",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Introduction to React Hooks: useState and useEffect",
      slug: "introduction-to-react-hooks-usestate-and-useeffect",
      body: "Hooks are a new addition to React, allowing you to use state and lifecycle methods in functional components...",
      category: ["React", "Frontend Development"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Michael Lee",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Building REST APIs with Express.js",
      slug: "building-rest-apis-with-expressjs",
      body: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features...",
      category: ["Express.js", "Backend Development", "APIs"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Sarah Jones",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Understanding MongoDB Aggregation Pipeline",
      slug: "understanding-mongodb-aggregation-pipeline",
      body: "MongoDB's aggregation framework provides an efficient way to process large data sets in a flexible manner...",
      category: ["MongoDB", "Database", "Backend Development"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Robert Brown",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Learning Python for Data Science: A Practical Guide",
      slug: "learning-python-for-data-science-a-practical-guide",
      body: "Python is one of the most popular languages for data science due to its simple syntax and extensive libraries...",
      category: ["Python", "Data Science"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Alice Williams",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Getting Started with Docker: Containerization Made Easy",
      slug: "getting-started-with-docker-containerization-made-easy",
      body: "Docker simplifies application deployment by allowing you to package your app with all its dependencies...",
      category: ["Docker", "DevOps", "Cloud Computing"],
      thumbnail: "https://via.placeholder.com/150",
      author: "David Johnson",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "A Guide to Git Version Control for Beginners",
      slug: "a-guide-to-git-version-control-for-beginners",
      body: "Git is a distributed version control system that allows developers to track changes in their code...",
      category: ["Git", "Version Control", "Collaboration"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Sophia Martinez",
      createdAt: new Date(),
      updatedAt: null,
    },
    {
      title: "Deploying Web Applications with Netlify and Vercel",
      slug: "deploying-web-applications-with-netlify-and-vercel",
      body: "Netlify and Vercel offer seamless ways to deploy modern web applications with just a few clicks...",
      category: ["Deployment", "Web Development", "Frontend Development"],
      thumbnail: "https://via.placeholder.com/150",
      author: "Daniel Wilson",
      createdAt: new Date(),
      updatedAt: null,
    },
  ];

  await Blog.insertMany(blogData);
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
