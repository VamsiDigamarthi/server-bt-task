import LoginUserModal from "../Models/LoginUser.js";

export const loginTimerDetails = async (req, res) => {
  const { username } = req.body;
  // console.log(username);
  const newUser = new LoginUserModal(req.body);
  try {
    const user = await newUser.save();

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginGetSpecificUserd = async (req, res) => {
  const { userName, dateField } = req.body;
  try {
    const userList = await LoginUserModal.find({
      userName: userName,
      dateField: dateField,
    });
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json(error);
  }
};
