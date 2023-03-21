import fs from "fs";
import __dirname from "../../utils.js";
import { getNextId } from "./files/utils.js";

const path = __dirname + "/dao/file-managers/files/courses.json";

export default class CourseManager {
  constructor() {
    console.log("Working courses with filesystem");
  }

  getAll = async () => {
    if (fs.existsSync(path)) {
      try {
        const data = await fs.promises.readFile(path, "utf-8");

        return JSON.parse(data);
      } catch (error) {
        return [];
      }
    }

    return [];
  };

  create = async (course) => {
    try {
      const courses = await this.getAll();

      const newCourse = {
        ...course,
        id: getNextId(courses),
      };

      const updatedCourses = [...courses, newCourse];

      await fs.promises.writeFile(path, JSON.stringify(updatedCourses));

      return newCourse;
    } catch (error) {
      console.log("Couldn't write file: " + error);
      return null;
    }
  };
}
