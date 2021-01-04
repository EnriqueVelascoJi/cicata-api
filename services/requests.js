const requestsMock = require('../utils/mocks/requests');

class RequestsService {
  constructor() {}

  async getRequests() {
    const requests = await Promise.resolve(requestsMock);
    return requests || [];
  }
  async getRequest(id) {
    const request = await Promise.resolve(requestsMock[0]);
    return request || {};
  }
  async createRequest(request) {
    const requestCreated = await Promise.resolve(requestsMock[0]);
    return requestCreated || {};
  }
  async updateRequest(id, request) {
    const requestUpdated = await Promise.resolve(requestsMock[0]);
    return requestUpdated || {};
  }
  async deleteRequest(id) {
    const requestDeleted = await Promise.resolve(requestsMock[0]);
    return requestDeleted || [];
  }
}

module.exports = RequestsService;
