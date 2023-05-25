import bcrypt from "bcrypt";
import UserModel from "../Models/UserModel.js";

export const registerUser = async (req, res) => {
  const { username, password, name, profilePic, role, head, designation } =
    req.body;
  //console.log(req.body);
  const userExit = await UserModel.findOne({ username: username });

  if (userExit) {
    res.status(500).json("User is Already Exit");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hasspaword = await bcrypt.hash(password, salt);
    req.body.password = hasspaword;
    const newUser = new UserModel(req.body);

    try {
      const user = await newUser.save();

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const exitUser = await UserModel.findOne({ username: username });

    if (exitUser) {
      const comparePass = await bcrypt.compare(password, exitUser.password);
      if (comparePass) {
        res.status(200).json(exitUser);
      } else {
        res.status(400).json("Wrong password............!");
      }
    } else {
      res.status(401).json("User does not exit......!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// export const forgetPass = async (req, res) => {
//   const { username, newpassword } = req.body;
//   try {
//     const newPass = await UserModel.findOne({ username: username });
//     if (newpassword) {
//       const hasspaword = await bcrypt.hash(newpassword, 10);
//       await UserModel.findOneAndUpdate(
//         { username: username },
//         { password: hasspaword }
//       );
//       res.status(200).json("password update success......");
//     }
//   } catch {
//     (e) => {
//       res.status(400).json({ message: e.message });
//     };
//   }
// };

//
// delete user

export const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const tasks = await UserModel.findById(id);
    const usersList = await UserModel.find({ head: id });
    res.status(200).json(tasks);
    //res.status(200).json(usersList);
  } catch (error) {
    res.status(500).json(error);
  }
};

// project id added to team of employee

export const projectIdAddedToEmployee = async (req, res) => {
  const { id, projectId } = req.body;
  // console.log(id);
  // console.log(projectId);
  try {
    const userDetails = await UserModel.findById(id);
    // console.log(userDetails);

    if (userDetails.project_id.includes(projectId)) {
      await userDetails.updateOne({ $pull: { project_id: projectId } });
      res.status(200).json("project_id remove successfully");
    } else {
      await userDetails.updateOne({ $push: { project_id: projectId } });
      res.status(200).json("project_id added successfully");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// project id fetch one employee

export const fetchOneEmployee = async (req, res) => {
  const id = req.params.id;
  //console.log(id);
  try {
    const userDetails = await UserModel.findById(id);
    res.status(200).json(userDetails);
  } catch (e) {
    res.status(500).json(e);
  }
};

// project click corresponding assign user fetch data

export const fetchProjectClickCorrespondingUser = async (req, res) => {
  const id = req.params.id;
  try {
    const userDetails = await UserModel.find({ project_id: { $in: [id] } });
    res.status(200).json(userDetails);
  } catch (e) {
    res.status(500).json(e);
  }
};
