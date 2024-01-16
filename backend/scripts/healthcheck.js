import https from 'https';
import { httpStatusCode, colors as c } from './src/utils';

const { BACKEND_URL } = process.env;

const healthUrl = `${BACKEND_URL}/health`;

/**
 * Make a request to the health endpoint.
 * If it returns a 200 status, exit the script with exitCode 0 (terminated with success).
 * If it returns any other status, exit the script with exitCode 1 (terminated with error).
 */
const req = https.request(healthUrl, (res) => {
  process.exitCode = res.statusCode === httpStatusCode.OK ? 0 : 1;
});

req.on('error', (error) => {
  console.error(`${c.Pink}Healthcheck failed with error: ${c.Reset}${error}`);
  process.exit(1);
});

req.end();
