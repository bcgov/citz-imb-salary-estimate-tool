import {
  KeycloakProvider,
  useKeycloak,
  decodeJWT,
} from '@bcgov/citz-imb-kc-react';

export const useAuthentication = () => {
  const {
    getAuthorizationHeaderValue,
    hasRole,
    login,
    logout,
    refreshToken,
    state,
  } = useKeycloak();

  const isAuthenticated = state?.userInfo !== undefined;

  return {
    decodeJWT,
    getAuthorizationHeaderValue,
    hasRole,
    isAuthenticated,
    KeycloakProvider,
    login,
    logout,
    refreshToken,
    state,
  };
};

export default useAuthentication;
