import fs from "fs";
import getDirname from "../../utils.js";

const __dirname = getDirname(import.meta.url);
const path = __dirname + "/files/users.json";

export default class UserManager {
  constructor() {
    console.log("Working users with filesystem");
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

  create = async (user) => {
    try {
      user.courses = [];
      let users = await this.getAll();

      if (users.length === 0) {
        //First user
        user.id = 1;
        users.push(user);
        await fs.promises.writeFile(path, JSON.stringify(users));
      } else {
        user.id = users[users.length - 1].id + 1;
        users.push(user);
        await fs.promises.writeFile(path, JSON.stringify(users));
        return user;
      }
    } catch (error) {
      console.log("Couldn't write file: " + error);
      return null;
    }
  };
}
