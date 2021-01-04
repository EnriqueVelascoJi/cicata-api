const express = require('express');
const usersMock = require('../utils/mocks/users');

function usersApi(app) {
  const router = express.Router();

  app.use('/api/users', router);

  router.get('/', async (req, res, next) => {
    const users = await Promise.resolve(usersMock);
    res.json({
      data: users,
      message: 'Users listed',
    });
  });
  router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    const user = await Promise.resolve(usersMock[0]);
    res.json({
      data: user,
      message: 'User retrieved',
    });
  });
  router.post('/', async (req, res, next) => {
    const user = req.body;
    const userCreated = await Promise.resolve(usersMock[0]);

    res.json({
      data: userCreated,
      message: 'User Created',
    });
  });
  router.put('/:id', async (req, res, next) => {
    const user = req.body;
    const { id } = req.params;

    const userUpdated = await Promise.resolve(usersMock[0]);
    res.json({
      data: userUpdated,
      message: 'User updated',
    });
  });
  router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;

    const userDeleted = await Promise.resolve(usersMock[0]);
    res.json({
      data: userDeleted,
      message: 'User deleted',
    });
  });
}

module.exports = usersApi;
