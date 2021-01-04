const express = require('express');
const app = express();
const { config } = require('./config');
const productsApi = require('./routes/Products');
const requestsApi = require('./routes/Requests');
const usersApi = require('./routes/User');

const notFounHandler = require('./utils/middleware/notFoundHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

productsApi(app);
requestsApi(app);
usersApi(app);

// Catch 404
app.use(notFounHandler);

app.listen(config.port, () => console.log(`Server on port ${config.port}`));
