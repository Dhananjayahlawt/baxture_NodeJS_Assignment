const { StatusCodes } = require("http-status-codes");
const { userService } = require("../services");
const { errorResponse, successResponse } = require("../utils");
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    successResponse.data = users;
    return res.status(StatusCodes.CREATED).json(successResponse);
  } catch (error) {
    errorResponse.error = error;
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getUser(userId);
  if (user) {
    successResponse.data = user;
    return res.status(StatusCodes.OK).json(successResponse);
  } else {
    errorResponse.error = { message: "User Id Does Not Exists" };
    return res.status(StatusCodes.NOT_FOUND).json(errorResponse);
  }
};

const createUser = async (req, res) => {
  const newUser = await userService.createUser(req.body);
  successResponse.data = newUser;
  return res.status(StatusCodes.CREATED).json(successResponse);
};

const updateUser = async (req, res) => {
  const updatedUser = await userService.updateUser(req);
  if (updatedUser) {
    successResponse.data = updatedUser;
    return res.status(StatusCodes.OK).json(successResponse);
  } else {
    errorResponse.error = { message: "User Id Does Not Exists" };
    return res.status(StatusCodes.NOT_FOUND).json(errorResponse);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
};
