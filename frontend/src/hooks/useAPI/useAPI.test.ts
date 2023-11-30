import { renderHook } from '@testing-library/react';
import { useAPI } from './useAPI';

describe('useAPI', () => {
  const testData = [{ data: 'test data' }];

  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(testData),
      })
    );
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns an object containing fetchData and appendItem methods', () => {
    const { result } = renderHook(() => useAPI());
    expect(typeof result.current).toBe('object');
    expect(result.current).toHaveProperty('fetchData', expect.any(Function));
    expect(result.current).toHaveProperty('appendItem', expect.any(Function));
  });

  it('fetchData returns an array of items', async () => {
    const { result } = renderHook(() => useAPI());
    const response = await result.current.fetchData('test');

    expect(response).toEqual(testData);
  });

  it('appendItem returns an item', async () => {
    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(testData[0]),
      })
    );

    const { result } = renderHook(() => useAPI());
    const response = await result.current.appendItem('test', testData[0]);

    expect(response).toEqual(testData[0]);
  });
});
