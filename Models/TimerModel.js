import mongoose from "mongoose";

const TimeSchema = mongoose.Schema(
  {
    projectId: {
      type: String,
    },
    taskValue: {
      type: String,
    },
    timer: {
      type: String,
    },
    totalHour: {
      type: String,
    },
    taskName: {
      type: String,
    },
    userName: {
      type: String,
    },
  },
  { timestamps: true }
);

const TimerModel = mongoose.model("time", TimeSchema);

export default TimerModel;
