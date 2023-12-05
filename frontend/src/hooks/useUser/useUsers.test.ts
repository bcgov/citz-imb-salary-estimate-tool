/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { renderHook } from '@testing-library/react';
import { useUser } from './useUser';

// Mock useDataFactory and columnsUser for testing
jest.mock('../useDataFactory/useData.Factory', () => ({
  useDataFactory: jest.fn(),
}));

jest.mock('./user.columns', () => ({
  columnsUser: [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
  ],
}));

describe('useUser Hook', () => {
  it('should return data and columns', () => {
    const mockedUserData = {
      data: [{ id: 1, name: 'John' }],
      isLoading: false,
      error: null,
    };

    // Mock useDataFactory implementation
    (
      require('../useDataFactory/useData.Factory').useDataFactory as jest.Mock
    ).mockReturnValue(mockedUserData);

    const { result } = renderHook(() => useUser());

    // Check if the hook returns the expected data and columns
    expect(result.current.data).toEqual(mockedUserData.data);
    expect(result.current.isLoading).toBe(mockedUserData.isLoading);
    expect(result.current.error).toBe(mockedUserData.error);
    expect(result.current.columns).toEqual([
      { id: 'id', label: 'ID' },
      { id: 'name', label: 'Name' },
    ]);
  });

  it('should use the provided dataId', () => {
    const dataId = '123';

    renderHook(() => useUser(dataId));

    // Check if useDataFactory is called with the correct dataId
    expect(
      require('../useDataFactory/useData.Factory').useDataFactory
    ).toHaveBeenCalledWith(expect.objectContaining({ dataId }));
  });
});
