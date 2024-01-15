const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");
const newUuid = uuidv4();
const users = [];
function checkUserIndex(userId) {
  const userIndex = users.findIndex((user) => user.id === userId);
  console.log(userIndex);
  if (userIndex === -1) {
    return false;
  }
  return userIndex;
}
async function createUser(data) {
  const { userName, age, hobbies } = data;
  const newUser = {
    id: newUuid,
    userName,
    age,
    hobbies,
  };
  users.push(newUser);
  console.log(users);
  return newUser;
}

async function getUsers() {
  return users;
}

async function getUser(userId) {
  console.log(users);
  const user = users.find((user) => user.id === userId);
  console.log(user)
  return user;
}

async function updateUser(req) {
  const userId = req.params.id;
  const updateUser = req.body;
  const userIndex = checkUserIndex(userId);
  console.log(userIndex);
  if (userIndex === -1) {
    return false;
  }
  const updatedUser = {
    ...users[userIndex],
    age: updateUser.age || users[userIndex].age,
    hobbies: updateUser.hobbies || users[userIndex].hobbies,
  };
  users[userIndex] = updatedUser;
  return updatedUser;
}

async function deleteUser(req) {
  const userId = req.params.id;
  const userIndex = checkUserIndex(userId);
  console.log(userIndex);
  if (userIndex === -1) {
    return false;
  }
  users = users.filter((user) => user.id !== userId);
  return true;
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
