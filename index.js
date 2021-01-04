const express = require('express');
const debug = require('debug')('app:server');
const cors = require('cors');
const app = express();
const { config } = require('./config');
const { sequelize } = require('./database/');

const productsApi = require('./routes/products');
const requestsApi = require('./routes/requests');
const usersApi = require('./routes/users');

const notFounHandler = require('./utils/middleware/notFoundHandler');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

productsApi(app);
requestsApi(app);
usersApi(app);

// Catch 404
app.use(notFounHandler);

sequelize.sync().then(() => {
  debug('Tablas creadas');
});

app.listen(config.port, () => debug(`Server on port ${config.port}`));
