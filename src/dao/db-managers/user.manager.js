import userModel from "../models/user.model.js";

export default class UserManager {
  constructor() {
    console.log(`Working users with Database persistence in mongodb`);
  }

  getAll = async () => {
    const users = await userModel.find().lean();

    return users;
  };

  create = async (user) => {
    const result = await userModel.create(user);

    return result;
  };
}
