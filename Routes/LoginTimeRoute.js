import express from "express";
import {
  loginGetSpecificUserd,
  loginTimerDetails,
} from "../Controlles/LoginTimerController.js";

const router = express.Router();

router.post("/details", loginTimerDetails);

router.post("/oneuser", loginGetSpecificUserd);

export default router;
