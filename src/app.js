import express from "express";
import __dirname from "./utils.js";
import usersRouter from "./routes/users.router.js";
import coursesRouter from "./routes/courses.router.js";
import viewsRouter from "./routes/views.router.js";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
const app = express();
const PORT = 8080;

/**
 * Template engine
 */
app.engine("handlebars", handlebars.engine());
app.set("views", "/views");
app.set("view engine", "handlebars");

/**
 * Middlewares
 */
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
app.use("/api/courses", coursesRouter);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));

mongoose
  .connect(
    "mongodb+srv://Coder:mipassword12@codercluster.kvisivd.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((conn) => {
    console.log("Connected to DB!");
  });
