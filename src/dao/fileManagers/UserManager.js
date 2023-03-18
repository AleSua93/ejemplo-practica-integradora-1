import fs from "fs";
import getDirname from "../../utils.js";
import { getNextId } from "./files/utils.js";

const __dirname = getDirname(import.meta.url);
const path = __dirname + "/files/users.json";

export default class UserManager {
  constructor() {
    console.log("Working users with filesystem");
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

  create = async (user) => {
    try {
      const users = await this.getAll();

      const newUser = {
        ...user,
        id: getNextId(users),
      };

      const updatedUsers = [...users, newUser];

      await fs.promises.writeFile(path, JSON.stringify(updatedUsers));

      return newUser;
    } catch (error) {
      console.log("Couldn't write file: " + error);
      return null;
    }
  };
}
