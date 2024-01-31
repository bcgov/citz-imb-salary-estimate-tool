import 'reflect-metadata';
import app from './express';
import { logMessages } from './utils';
import { dataSource } from './database/dataSource';

const { API_PORT, DEBUG } = process.env;

const {
  SERVER_START,
  UTC_DATE_TIME,
  PACIFIC_DATE_TIME,
  CURRENT_NODE_VERSION,
  DATABASE_CONNECTION,
  DATABASE_CONNECTION_ERROR,
} = logMessages;

dataSource
  .initialize()
  .then(() => {
    console.info(DATABASE_CONNECTION);
    app.listen(Number(API_PORT), () => {
      // Log server start information.
      console.info(SERVER_START);
      console.info(CURRENT_NODE_VERSION);
      console.info(UTC_DATE_TIME);
      console.info(PACIFIC_DATE_TIME);
      if (DEBUG) console.info("DEBUG is enabled. Set environment variable to 'false' to disable.");
    });
  })
  .catch((error) => {
    console.error(DATABASE_CONNECTION_ERROR);
    console.error(error);
  });
