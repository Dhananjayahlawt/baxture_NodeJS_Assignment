const { StatusCodes } = require("http-status-codes");
const { UserModel } = require("../models");
const { v4: uuidv4 } = require("uuid");
const userModel = new UserModel();

async function createUser(data) {
  const newUuid = uuidv4();
  const { userName, age, hobbies } = data;
  const newUser = {
    id: newUuid,
    userName,
    age,
    hobbies,
  };
  userModel.addUser(newUser);
  return newUser;
}

async function getUsers() {
  const users = userModel.getUsers();
  return users;
}

async function getUser(userId) {
  const user = userModel.getUserById(userId);
  return user;
}

async function updateUser(req) {
  const id = req.params.id;
  const updateFields = req.body;
  const updatedUser=userModel.updateUser(id,updateFields)
  return updatedUser;
}

async function deleteUser(req) {
  const userId = req.params.id;
  const isDeleted=userModel.deleteUser(userId);
  return isDeleted;
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
