const express = require('express');

function usersApi(app) {
  const router = express.Router();

  app.use('/api/users', router);

  router.get('/', (req, res, next) => {
    res.json({
      hola: 'mundo',
    });
  });
  router.get('/:id', (req, res, next) => {});
  router.post('/', (req, res, next) => {});
  router.put('/', (req, res, next) => {});
  router.delete('/', (req, res, next) => {});
}

module.exports = usersApi;
