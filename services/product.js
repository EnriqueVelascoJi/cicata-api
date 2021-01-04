const productMock = require('../utils/mocks/products');

class ProductsService {
  constructor() {}
  async getProducts() {
    const products = await Promise.resolve(productMock);
    return products || [];
  }
  async getProduct(id) {
    const product = await Promise.resolve(productMock[0]);
    return product || {};
  }
  async createProduct(product) {
    const productCreated = await Promise.resolve(productMock[0]);
    return productCreated || {};
  }
  async updateProduct(id, product) {
    const productUpdated = await Promise.resolve(productMock[0]);
    return productUpdated || {};
  }
  async deleteProduct(id) {
    const productDeleted = await Promise.resolve(productMock[0]);
    return productDeleted || 0;
  }
}

module.exports = ProductsService;
