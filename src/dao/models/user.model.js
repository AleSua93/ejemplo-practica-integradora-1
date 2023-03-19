import mongoose from "mongoose";

const usersCollection = "users";

const usersSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birth_date: Date,
  gender: {
    type: String,
    enum: ["M", "F"],
  },
});

const userModel = mongoose.model(usersCollection, usersSchema);
export default userModel;
