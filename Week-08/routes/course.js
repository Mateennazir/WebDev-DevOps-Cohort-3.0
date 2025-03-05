const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/course/Purchase", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

courseRouter.get("/Courses", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
