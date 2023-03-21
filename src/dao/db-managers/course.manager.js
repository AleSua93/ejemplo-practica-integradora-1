import courseModel from "../models/course.model.js";

export default class Courses {
  constructor() {
    console.log("Working courses with database in mongodb");
  }

  getAll = async () => {
    const courses = await courseModel.find().lean();

    return courses;
  };

  create = async (course) => {
    const result = await courseModel.create(course);

    return result;
  };

  update = async (id, course) => {
    const result = await courseModel.updateOne({ _id: id }, course);

    return result;
  };
}
