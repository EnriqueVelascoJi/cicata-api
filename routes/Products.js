const express = require('express');
const ProductsService = require('../services/product');

function productsApi(app) {
  const router = express.Router();
  const productsService = new ProductsService();

  app.use('/api/products', router);
  router.get('/', async (req, res) => {
    const products = await productsService.getProducts();
    res.json({
      data: products,
      message: 'products listed',
    });
  });
  router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const product = await productsService.getProduct(id);
    res.json({
      data: product,
      message: 'Product listed',
    });
  });
  router.post('/', async (req, res) => {
    const product = req.body;

    const productCreated = await productsService.createProduct(product);

    res.json({
      data: productCreated,
      message: 'Product created',
    });
  });
  router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    const productUpdated = await productsService.updateProduct(id, product);

    res.json({
      data: productUpdated,
      message: 'Product updated',
    });
  });
  router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const productDeleted = await productsService.deleteProduct(id);

    res.json({
      data: productDeleted,
      message: 'Product deleted',
    });
  });
}

module.exports = productsApi;
