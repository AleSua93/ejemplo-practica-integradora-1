import { Router } from "express";
import { UserManager, CourseManager } from "../dao/index.js";

const userManager = new UserManager();
const courseManager = new CourseManager();
const router = Router();

router.get("/", async (req, res) => {
  const users = await userManager.getAll();
  console.log(users);

  res.render("users", { users });
});

router.get("/courses", async (req, res) => {
  const courses = await courseManager.getAll();
  console.log(courses);

  res.render("courses", { courses });
});

export default router;
