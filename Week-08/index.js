const express = require("express");
const { CreateUserRoutes, userRouter } = require("./routes/user");
const { CreateCourseRoutes, courseRouter } = require("./routes/course");
const app = express();

app.use("/user", userRouter);
app.use("/course", courseRouter);

CreateCourseRoutes(app);
CreateUserRoutes(app);

app.listen(3000);
