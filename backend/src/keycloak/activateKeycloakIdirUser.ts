import { KeycloakIdirUser, KeycloakUser } from '@bcgov/citz-imb-kc-express';
import { dataRepository } from '../modules/user/router';
import { User } from '../modules/user/entity';
import { EntitySchema } from 'typeorm';

export const activateKeycloakIdirUser = async (
  userData: KeycloakUser & KeycloakIdirUser,
): Promise<User | undefined> => {
  // get user if exists.
  const idirUser = (await dataRepository.getItemByWhere({
    guid: userData?.idir_user_guid,
  })) as unknown as User;

  const user: Partial<User> = {
    email: userData.email,
    firstName: userData.given_name,
    lastName: userData.family_name,
    displayName: userData.display_name,
    roles: userData.client_roles ?? [],
    lastLogin: new Date(),
  };

  // if user exists, update user.
  if (idirUser)
    return (await dataRepository.updateItem(
      idirUser.id.toString() as string,
      user as unknown as EntitySchema<User>,
    )) as unknown as User;

  //if user does not exist, create user.
  user.guid = userData.idir_user_guid;
  user.username = userData.idir_username;

  return (await dataRepository.createItem(
    user as unknown as EntitySchema<User>,
  )) as unknown as User;
};
