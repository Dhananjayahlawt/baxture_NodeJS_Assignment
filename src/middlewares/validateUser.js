const { errorResponse } = require("../utils");
const { StatusCodes } = require("http-status-codes");

const validateCreateUser = (req, res, next) => {
  if (!req.body.userName) {
    errorResponse.error = "userName is Mandatory";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
  if (!req.body.age) {
    errorResponse.error = "age is Mandatory";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
  if (!req.body.hobbies) {
    errorResponse.error = "hobbies is Mandatory";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
  next();
};

const isValidUUID = (req, res, next) => {
  const uuid = req.params.id;
  const uuidRegex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-5][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/;
  const isVaild = uuidRegex.test(uuid);
  console.log(isVaild);
  if (!isVaild) {
    errorResponse.error = "Invaild Uuid";
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorResponse);
  }
  next();
};

module.exports = {
  validateCreateUser,
  isValidUUID,
};
