const express = require("express");
const app = exppress();

//You have been given an express server which has a few endpoints.
//Your task is yo create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second, theserver should block them with a 404.

let numberOfRequestsForUser = {};
setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.use(function (req, res, next) {
  const userId = req.headers["user-Id"];

  if (numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;

    if (numberOfRequestsForUser[userId] > 5) {
      res.status(404).send("no entry");
    } else {
      next();
    }
  } else {
    numberOfRequestsForUser[userId] = 1;
    next();
  }
});
app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.get("/user");
module.exports = app;
