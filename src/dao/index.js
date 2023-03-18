import FileUserManager from "./fileManagers/UserManager.js";
import FileCourseManager from "./fileManagers/CourseManager.js";
import DbUserManager from "./dbManagers/UserManager.js";
import DbCourseManager from "./dbManagers/CourseManager.js";

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
