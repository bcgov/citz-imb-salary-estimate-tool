import { renderHook } from '@testing-library/react';
import { useDataFactory } from './useData.Factory';
// import { useAPI } from '../useAPI/useAPI';

// Mock the global fetch function
const mockUseAPI = jest.fn(() => ({
  fetchData: jest.fn(),
}));

describe('useDataFactory', () => {
  beforeEach(() => {
    mockUseAPI.mockClear();
  });

  it('calls fetchData with the correct endpoint when dataId is not provided', async () => {
    const mockedFetchData = jest.fn();

    const { result } = renderHook(() =>
      useDataFactory({ endPoint: 'test-endpoint', apiHook: mockUseAPI })
    );
    console.log({ result });
    expect(mockedFetchData).toHaveBeenCalledWith('test-endpoint');
  });

  xit('calls fetchData with the correct endpoint and dataId when dataId is provided', async () => {
    // const mockedFetchData = jest.fn();
    // (useAPI as jest.Mock).mockReturnValue({
    //   fetchData: mockedFetchData,
    // });

    // const { result } = renderHook(() =>
    //   useDataFactory('test-endpoint', 'test-id')
    // );

    // await result.current.isSuccess;

    // expect(mockedFetchData).toHaveBeenCalledWith('test-endpoint/test-id');
  });
});
