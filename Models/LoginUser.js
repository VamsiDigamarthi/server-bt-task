import mongoose from "mongoose";

const LoginUsers = mongoose.Schema({
  userName: {
    type: String,
  },
  dateField: {
    type: String,
    required: true,
  },
});

const LoginUserModal = mongoose.model("loginDetails", LoginUsers);

export default LoginUserModal;
