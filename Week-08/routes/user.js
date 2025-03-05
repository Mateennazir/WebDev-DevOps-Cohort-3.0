// const express = require("expresss");
// const Router = express.Router;

const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req, res) => {
  res.json({
    message: "signed up",
  });
});

userRouter.post("/signin", (req, res) => {
  res.json({
    message: "Signed in",
  });
});

userRouter.get("/purchases", (req, res) => {
  res.json({
    message: "pur",
  });
});

module.exports = {
  userRouter: userRouter,
};
