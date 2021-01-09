const { promisify } = require('util');
const { connect } = require('mongoose');
const {
  green,
  red
} = require('chalk');
const { runSeeder: runSeederMachine } = require('./machines.seeder');
const { runSeeder: runSeederPod } = require('./pods.seeder');

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
    await runSeederMachine();
    await runSeederPod();
    // eslint-disable-next-line no-console
    console.log(green('Successfully Seeder Completed!'));
  }
  catch (e) {
    // eslint-disable-next-line no-console
    console.log(red(`Seeder Error:\n ${e.message}`));
  }
})();
