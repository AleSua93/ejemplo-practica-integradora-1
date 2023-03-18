import { Router } from "express";
import { CourseManager } from "../dao/index.js";

const router = Router();

const courseManager = new CourseManager();

router.get("/", async (req, res) => {
  const courses = await courseManager.getAll();

  res.send({ status: "success", payload: courses });
});

router.post("/", async (req, res) => {
  const { title, description, teacher } = req.body;

  let newCourse = {
    title,
    description,
    students: [],
    teacher,
  };

  const result = await courseManager.create(newCourse);

  res.send({ status: "success", payload: result });
});

export default router;
