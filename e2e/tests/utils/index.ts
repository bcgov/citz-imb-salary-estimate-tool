// Authentication-related exports
export { admLogin } from './auth/admAuth';
export { hmLogin } from './auth/hmAuth';
export { shrLogin } from './auth/shrAuth';
export { logout } from './auth/logout';

// Exported environment variables related to authentication
export {
  shrUsername,
  shrPassword,
  hmUsername,
  hmPassword,
  admUsername,
  admPassword,
} from './env/env';

// Export the 10-character UID generator and UID search function
export { generateUID } from './uid/uid';
