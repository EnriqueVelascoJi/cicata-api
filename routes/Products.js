const express = require('express');

function productsApi(app) {
  const router = express.Router();
  app.use('/api/products', router);
  router.get('/', async (req, res, next) => {
    res.send('Hola mundo');
  });
  router.get('/id', async (req, res, next) => {});
  router.post('/', async (req, res, next) => {});
  router.put('/:id', async (req, res, next) => {});
  router.delete('/:id', async (req, res, next) => {});
}

module.exports = productsApi;
