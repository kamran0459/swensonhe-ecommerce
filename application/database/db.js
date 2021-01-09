const { promisify } = require('util');
const { connect } = require('mongoose');
const {
  green,
  red
} = require('chalk');

/**
 * @description This is IFFE method to initiate connection with mongo
 */
(async () => {
  try {
    const connection = promisify(connect);
    const connectionString = process.env.ENV === 'DEV' ? process.env.MONGO_CONNECTION_STRING : process.env.MONGO_TEST_CONNECTION_STRING;
    const connectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    };
    await connection(connectionString, connectionOptions);
    // eslint-disable-next-line no-console
    console.log(green('Mongo Connected Successfully!'));
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.log(red(`Mongo Connection Error:\n ${e.message}`));
  }
})();

/**
 *@description Database Connection module.
 *@module database/DatabaseConnection
 */
