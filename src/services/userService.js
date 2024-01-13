const { StatusCodes } = require("http-status-codes");
const { v4: uuidv4 } = require("uuid");
const newUuid = uuidv4();

const users = [];
async function createUser(data) {
  const { userName, age, hobbies } = data;
  const newUser = {
    id: newUuid,
    userName,
    age,
    hobbies,
  };
  users.push(newUser);
  return newUser;
}

async function getUsers() {
    for(let i=0;i<=10000000000000;i++){
        
    }
  return users;
}

async function getUser(userId) {
  const user = users.find((user) => user.id == userId);
  return user;
}

async function updateUser(req){
    const userId = req.params.id;
    const updateUser = req.body;
    const userIndex = users.findIndex(user => user.id === userId);
    console.log(userIndex)
    if (userIndex === -1) {
        return false;
      }
      const updatedUser = {
        ...users[userIndex],
        age: updateUser.age || users[userIndex].age,
        hobbies: updateUser.hobbies || users[userIndex].hobbies,
      };
      users[userIndex] = updatedUser;
      return updatedUser

}


module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
};
