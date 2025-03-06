const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/course", courseRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://muteebnazir8:CgboLRob8Wl9SXya@admin1.l34fi.mongodb.net/coursera-app"
  );
  app.listen(3000);
  console.log("Lsitening on port 3000");
}
main();
