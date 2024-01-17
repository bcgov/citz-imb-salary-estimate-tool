import { User } from './entity';
import { UserRepository } from './repository';
import { KeycloakIdirUser, KeycloakUser } from '@bcgov/citz-imb-kc-express';

/**
 * @author Brady Mitchell <braden.mitchell@gov.bc.ca | braden.jr.mitch@gmail.com>
 * @returns An object with methods for performing operations on users.
 */
export const UserService = () => {
  const userRepository = UserRepository();

  // Retrieve a user by their id.
  const getUserById = async (id: number): Promise<User | null> => {
    return await userRepository.findUserWhere({ id });
  };

  // Retrieve a user by their guid.
  const getUserByGuid = async (guid: string): Promise<User | null> => {
    return await userRepository.findUserWhere({ guid });
  };

  // Retrieve all users.
  const getAllUsers = async (): Promise<User[]> => {
    return await userRepository.getAll();
  };

  // Updates an existing user.
  const updateUser = async (guid: string, userData: Partial<User>): Promise<User | undefined> => {
    return await userRepository.update(guid, userData);
  };

  // Create user if they don't exist, or update an existing user.
  const activateKeycloakIdirUser = async (
    userData: KeycloakUser & KeycloakIdirUser,
  ): Promise<User | undefined> => {
    // Find user if exists.
    if (!userData?.idir_user_guid) return;
    const idirUser = await userRepository.findUserWhere({ guid: userData?.idir_user_guid });

    if (!idirUser) {
      // User does not exist, create user.
      const newUser = {
        guid: userData?.idir_user_guid,
        username: userData?.idir_username,
        email: userData?.email,
        firstName: userData?.given_name,
        lastName: userData?.family_name,
        displayName: userData?.display_name,
        roles: userData?.client_roles ?? [],
        lastUpdated: new Date(),
        lastLogin: new Date(),
      };
      return await userRepository.create(newUser);
    }

    // Update user on new login.
    const updatedUser = {
      email: userData?.email,
      firstName: userData?.given_name,
      lastName: userData?.family_name,
      displayName: userData?.display_name,
      roles: userData?.client_roles ?? [],
      lastUpdated: new Date(),
      lastLogin: new Date(),
    };

    if (idirUser?.guid)
      return await userRepository.update(
        (idirUser?.guid ?? userData?.idir_user_guid) as string,
        updatedUser,
      );
  };

  return {
    getUserById,
    getUserByGuid,
    activateKeycloakIdirUser,
    getAllUsers,
    updateUser,
  };
};
