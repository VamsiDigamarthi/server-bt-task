import express from "express";
import {
  adminDeleteTeamLeader,
  deleteUser,
  fetchOneEmployee,
  fetchProjectClickCorrespondingUser,
  loginUser,
  profileEditRouter,
  projectIdAddedToEmployee,
  registerUser,
  resetPassword,
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

// admin team member delete route

router.delete("/admin/team/delete/:id", adminDeleteTeamLeader);

// profile edit router

router.put("/profile/edit/:id", profileEditRouter);

// reset passowrd

router.put("/reset/password", resetPassword);

export default router;
