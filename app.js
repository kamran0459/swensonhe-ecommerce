const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const { serve, setup } = require('swagger-ui-express');

// custom required files
const routers = require('./application/routes');
require('./application/database/db');
const swaggerDocument = require('./swagger/swagger.json');

// Express JS setters
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// headers security
app.use(helmet());

// base router
app.use('/api', routers);

// swagger documentation
app.use('/api-docs', serve, setup(swaggerDocument));

/**
 *@description this modules contains the the setter of express.js,
 *  basic headers security and database connection initialization.
 *@module app.js
 * @type {e | (() => Express)}
 */
module.exports = app;
