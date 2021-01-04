const usersMock = require('../utils/mocks/users');
const User = require('../models/User');

class UsersService {
  constructor() {}
  async getUsers() {
    const users = await Promise.resolve(usersMock);
    /* const users = await User.findAll(); */
    return users || [];
  }
  async getUser(id) {
    const user = await Promise.resolve(usersMock[0]);
    return user || {};
  }
  async createUser(user) {
    const userCreated = await Promise.resolve(usersMock[0]);
    return userCreated || {};
  }
  async updateUser(id, user) {
    const userUpdated = await Promise.resolve(usersMock[0]);
    return userUpdated || {};
  }
  async deleteUser() {
    const userDeleted = await Promise.resolve(usersMock[0]);
    return userDeleted || 0;
  }
}

module.exports = UsersService;
