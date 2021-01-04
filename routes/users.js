const express = require('express');
const UsersService = require('../services/users');

function usersApi(app) {
  const router = express.Router();
  const usersSerivce = new UsersService();

  app.use('/api/users', router);

  router.get('/', async (req, res) => {
    const users = await usersSerivce.getUsers();

    res.json({
      data: users,
      message: 'Users listed',
    });
  });
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const user = await usersSerivce.getUser(id);

    res.json({
      data: user,
      message: 'User retrieved',
    });
  });
  router.post('/', async (req, res) => {
    const user = req.body;
    const userCreated = await usersSerivce.createUser(user);

    res.json({
      data: userCreated,
      message: 'User Created',
    });
  });
  router.put('/:id', async (req, res) => {
    const user = req.body;
    const { id } = req.params;

    const userUpdated = await usersSerivce.updateUser(id, user);

    res.json({
      data: userUpdated,
      message: 'User updated',
    });
  });
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const userDeleted = await usersSerivce.deleteUser(id);

    res.json({
      data: userDeleted,
      message: 'User deleted',
    });
  });
}

module.exports = usersApi;
