import express from "express";
import {
  addTimeToTask,
  timerGetById,
  timerGetByIdTaskId,
} from "../Controlles/TimeController.js";

const router = express.Router();

router.post("/value", addTimeToTask);

router.get("/value/:id", timerGetById);

router.get("/taskvalue/:id", timerGetByIdTaskId);

export default router;
