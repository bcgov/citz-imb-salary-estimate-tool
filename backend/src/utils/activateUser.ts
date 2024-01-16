import { KeycloakUser } from '@bcgov/citz-imb-kc-express';

// Called after login to create or update a user.
export const activateUser = async (user: KeycloakUser) => {
  // Determine the provider.
  console.log(user);
  // TODO
};
