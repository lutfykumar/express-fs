import User from "../models/UserModel.js";
// import BaseHelper from "../helpers/BaseHelper.js";

export const getUsers = async (req, res) => {
  try {
    var date = new Date();
    console.log(date);
    // var mnow = date
    // console.log(mnow);
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

export const createUser = async (req, res) => {
  try {

    // var data = {
    //   "name": req.body.name,
    //   "email": req.body.email,
    //   "gender": req.body.gender,
    //   "isActive": req.body.isActive,
    //   "createdAt": req.body.isActive,
    //   "updatedAt": req.body.isActive,
    // };
    // await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
}