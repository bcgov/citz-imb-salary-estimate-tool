/* eslint-disable no-console */
/**
 * @summary Server listener for SETS Express API
 * @author LocalNewsTV, Dallascrichmond
 */
// import dotenv from 'dotenv';
import app from './express';

// dotenv.config();

// const port = process.env.API_PORT || 3000;

app.listen(3000, (err?:Error) => {
  // eslint-disable-next-line no-console
  if(err){
    console.log("Error:", err);
  }
  console.info(`[server]: Server started on port 3000`);
});
