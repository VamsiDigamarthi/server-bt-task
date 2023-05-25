import TimerModel from "../Models/TimerModel.js";

export const addTimeToTask = async (req, res) => {
  const { projectId, taskValue, timer } = req.body;

  const userExit = await TimerModel.findOne({ taskValue: taskValue });

  if (userExit) {
    const exitValue = await TimerModel.findOneAndUpdate(
      { taskValue: taskValue },
      { $set: { timer: timer } },
      { new: true }
    );
    res.status(200).json(exitValue);
  } else {
    const newUser = new TimerModel(req.body);
    try {
      const user = await newUser.save();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export const timerGetById = async (req, res) => {
  const id = req.params.id;
  try {
    const userDetails = await TimerModel.find({ projectId: id });
    res.status(200).json(userDetails);
  } catch (e) {
    res.status(500).json(e);
  }
};

export const timerGetByIdTaskId = async (req, res) => {
  const id = req.params.id;
  try {
    const userDetails = await TimerModel.find({ taskValue: id });
    res.status(200).json(userDetails);
  } catch (e) {
    res.status(500).json(e);
  }
};
