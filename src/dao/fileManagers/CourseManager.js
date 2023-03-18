import fs from "fs";
import __dirname from "../../utils.js";

const path = "./files/courses.json";

export default class CourseManager {
  constructor() {
    console.log("Working courses with filesystem");
  }

  getAll = async () => {
    if (fs.existsSync(path)) {
      try {
        const data = await fs.promises.readFile(path, "utf8");

        return JSON.parse(data);
      } catch (error) {
        console.log("Couldn't read file: " + error);

        return null;
      }
    } else {
      return [];
    }
  };

  create = async (course) => {
    try {
      course.students = [];
      let courses = await this.getAll();

      if (courses.length === 0) {
        //First course
        course.id = 1;
        courses.push(course);

        await fs.promises.writeFile(path, JSON.stringify(courses, null, "\t"));
      } else {
        course.id = courses[courses.length - 1].id + 1;
        courses.push(course);

        await fs.promises.writeFile(path, JSON.stringify(courses, null, "\t"));

        return course;
      }
    } catch (error) {
      console.log("Couldn't write file: " + error);
      return null;
    }
  };
}
