const express = require('express');

function requestsApi(app) {
  const router = express.Router();
  app.use('/api/requests', router);

  router.get('/', (req, res, next) => {
    res.json({
      hola: 'mundo',
    });
  });
  router.get('/:id', () => {});
  router.post('/', () => {});
  router.put('/:id', () => {});
  router.delete('/', () => {});
}

module.exports = requestsApi;
