import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      default: false,
    },
    designation: {
      type: String,
    },
    profilePic: {
      type: String,
    },
    head: {
      type: String,
    },
    project_id: [],
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;
