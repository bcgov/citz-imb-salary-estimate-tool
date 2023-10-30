import { KeycloakUser } from "@bcgov/kc-express";
import { upsertUser } from "../controllers/user-controller";

// Called after login to create or update a user.
export const activateUser = async (userInfo: KeycloakUser) => {
  // Determine the provider.
  const provider = userInfo?.identity_provider;
  if (provider !== "idir") return;

  // Create or update the user.
  await upsertUser(userInfo);
};
