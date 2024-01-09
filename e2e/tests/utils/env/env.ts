import dotenv from 'dotenv';

// Load environment variables from the .env file in the current directory
dotenv.config();

// Retrieve the SHR's IDIR username and password from environment variables
const shrUsername = process.env.SHR_IDIR_USERNAME!;
const shrPassword = process.env.SHR_IDIR_PASSWORD!;

// Retrieve the HM's IDIR username and password from environment variables
const hmUsername = process.env.HM_IDIR_USERNAME!;
const hmPassword = process.env.HM_IDIR_PASSWORD!;

// Retrieve the ADM's IDIR username and password from environment variables
const admUsername = process.env.ADM_IDIR_USERNAME!;
const admPassword = process.env.ADM_IDIR_PASSWORD!;

// Export all the retrieved IDIR usernames and passwords for use in other modules
export {
  shrUsername,
  shrPassword,
  hmUsername,
  hmPassword,
  admUsername,
  admPassword,
};
