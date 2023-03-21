import FileUserManager from "./file-managers/user.manager.js";
import FileCourseManager from "./file-managers/course.manager.js";
import DbUserManager from "./db-managers/user.manager.js";
import DbCourseManager from "./db-managers/course.manager.js";

const config = {
  managerType: "file",
};

let UserManager, CourseManager;

if (config.managerType === "file") {
  UserManager = FileUserManager;
  CourseManager = FileCourseManager;
} else {
  UserManager = DbUserManager;
  CourseManager = DbCourseManager;
}

export { UserManager, CourseManager };
