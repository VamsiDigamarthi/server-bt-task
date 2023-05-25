import express from "express";
import {
  deleteUser,
  fetchOneEmployee,
  fetchProjectClickCorrespondingUser,
  loginUser,
  projectIdAddedToEmployee,
  registerUser,
} from "../Controlles/AuthController.js";
//import uploadMiddleware from "../middlewares/multermiddleware.js";

const router = express.Router();

router.post("/register", registerUser); // uploadMiddleware.single("profilePic"),
router.post("/login", loginUser);

// delete user

router.post("/delete/user", deleteUser);

//project added to employee user

router.post("/project/id", projectIdAddedToEmployee);

router.get("/project/:id", fetchOneEmployee);

router.get("/project/click/user/:id", fetchProjectClickCorrespondingUser);

export default router;
