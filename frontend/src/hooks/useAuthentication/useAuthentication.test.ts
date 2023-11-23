import { renderHook } from '@testing-library/react';
import { useAuthentication } from './useAuthentication';

jest.mock('@bcgov/citz-imb-kc-react', () => ({
  KeycloakProvider: 'KeycloakProvider',
  useKeycloak: jest.fn().mockReturnValue({
    getAuthorizationHeaderValue: jest.fn(),
    hasRole: jest.fn(),
    login: jest.fn(),
    logout: jest.fn(),
    refreshToken: jest.fn(),
    state: {},
  }),
  decodeJWT: 'decodeJWT',
}));

describe('useAuthentication', () => {
  it('should return isAuthenticated property', () => {
    const { result } = renderHook(() => useAuthentication());
    expect(result.current).toHaveProperty('isAuthenticated');
  });
});
