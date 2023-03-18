import coursesModel from "../models/courses.js";

export default class Courses {
  constructor() {
    console.log("Working courses with database in mongodb");
  }

  getAll = async () => {
    //Profe, los cursos son tomados a partir de un lean para su mapeo en handlebars, puedes hacer un map
    //solamente en caso de que así lo desees (como se muestra en el Manager de usuarios);
    const courses = await coursesModel.find().lean();

    return courses;
  };

  create = async (course) => {
    const result = await coursesModel.create(course);

    return result;
  };

  update = async (id, course) => {
    const result = await coursesModel.updateOne({ _id: id }, course);

    return result;
  };
}
