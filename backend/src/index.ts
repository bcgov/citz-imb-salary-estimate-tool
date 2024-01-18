import 'reflect-metadata';
import app from './express';
import dataSource from './dataSource';
import { logMessages } from './utils';

export * from './modules';

const { API_PORT, DEBUG } = process.env;
console.log('port:', API_PORT);
const {
  SERVER_START,
  UTC_DATE_TIME,
  PACIFIC_DATE_TIME,
  CURRENT_NODE_VERSION,
  DATABASE_CONNECTION,
  DATABASE_CONNECTION_ERROR,
} = logMessages;

// Connect to the database and initialize it.
dataSource
  .initialize()
  .then(async () => {
    console.info(DATABASE_CONNECTION);

    // Start the Express application (server).
    try {
      app.listen(Number(API_PORT), () => {
        // Log server start information.
        console.info(SERVER_START);
        console.info(CURRENT_NODE_VERSION);
        console.info(UTC_DATE_TIME);
        console.info(PACIFIC_DATE_TIME);
        if (DEBUG)
          console.info("DEBUG is enabled. Set environment variable to 'false' to disable.");
      });
    } catch (error) {
      // Log any error that occurs during the server start.
      console.error(error);
    }
  })
  .catch((error) => {
    // Log an error if the database connection and initialization fails.
    console.error(DATABASE_CONNECTION_ERROR, error);
  });
