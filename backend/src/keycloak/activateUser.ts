import { KeycloakUser } from '@bcgov/citz-imb-kc-express';
import { activateKeycloakIdirUser } from './activateKeycloakIdirUser';

// Called after login to create or update a user.
export const activateUser = async (userInfo: KeycloakUser) => {
  // Determine the provider.
  const provider = userInfo?.identity_provider;
  if (provider !== 'idir') return;

  // Create or update the user.
  await activateKeycloakIdirUser(userInfo);
};
