import mongoose from "mongoose";

const coursesCollection = "courses";

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  students: {
    type: Array,
    default: [],
  },
});

const courseModel = mongoose.model(coursesCollection, courseSchema);
export default courseModel;
