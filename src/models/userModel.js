class UserModel {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }
  getUserById(id) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  updateUser(id, updateFields) {
    const userIndex = this.checkUserIndex(id);
    if (userIndex === -1) {
      return false;
    }
    const updatedUser = {
      ...this.users[userIndex],
      age: updateFields.age || this.users[userIndex].age,
      hobbies: updateFields.hobbies || this.users[userIndex].hobbies,
    };
    this.users[userIndex] = updatedUser;
    return true;
  }
  deleteUser(id) {
    const userIndex = this.checkUserIndex(id);
    if (userIndex === -1) {
      return false;
    }
    this.users = this.users.filter((user) => user.id !== id);
    return true;
  }
  checkUserIndex(userId) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      return false;
    }
    return userIndex;
  }
}

module.exports = UserModel;
