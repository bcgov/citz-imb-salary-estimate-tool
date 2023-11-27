import { act, renderHook } from '@testing-library/react';
import { useDataFactory } from './useData.Factory';
import { useAPI } from '../useAPI/useAPI';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({ data: ['test data'] }),
}));
jest.mock('../useAPI/useAPI', () => ({
  useAPI: jest.fn().mockReturnValue({
    appendItem: jest.fn().mockReturnValue({ data: 'test data' }),
    fetchData: jest.fn().mockReturnValue({ data: ['test data'] }),
  }),
}));

describe('useDataFactory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const endPoint = 'test-endpoint';
  const dataId = 'test-id';

  it('returns data correctly', async () => {
    const { result } = await renderHook(useDataFactory, {
      initialProps: { endPoint },
    });

    expect(result.current.data[0]).toBe('test data');
  });

  it('returns data correctly with dataId', () => {
    const { result } = renderHook(useDataFactory, {
      initialProps: { endPoint, dataId },
    });
    expect(result.current.data[0]).toBe('test data');
  });

  it('returns append correctly', () => {
    (useAPI as jest.Mock).mockReturnValue({
      appendItem: jest.fn().mockReturnValue({ data: 'test data' }),
    });

    const { result } = renderHook(useDataFactory, {
      initialProps: { endPoint },
    });

    act(() => {
      result.current.append('test data');
    });

    expect(result.current.append).toBeDefined();
    expect(useAPI().appendItem).toHaveBeenCalledWith(endPoint, 'test data');
    expect(result.current.append('test data')).toEqual({ data: 'test data' });
  });
});
