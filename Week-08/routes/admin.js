const { Router } = require("express");
const adminRouter = Router();
const { adminModel } = require("../db");

//brcypt for hashing passwords, zod for validation of user inouts, jsonwebtokens for jwt token.

adminRouter.post("/signup", (req, res) => {
  res.json({
    message: "signed up",
  });
});

adminRouter.post("/signin", (req, res) => {
  res.json({
    message: "Signed in",
  });
});

adminRouter.post("/course", (req, res) => {
  res.json({
    message: "Signed in",
  });
});
adminRouter.put("/courses", (req, res) => {
  res.json({
    message: "Signed in",
  });
});
adminRouter.get("/course/bulk", (req, res) => {
  res.json({
    message: "Signed in",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
