import { renderHook } from '@testing-library/react';
import { useAPI } from './useAPI';
import { fetchAPI } from './fetchAPI';

// Mock the global fetch function
const mockFetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve('mock data'),
  })
);
(fetchAPI as jest.Mock) = mockFetch;

describe('useAPI', () => {
  beforeEach(() => {
    (fetchAPI as jest.Mock).mockClear();
  });

  it('returns an object containing a fetchData method', () => {
    const { result } = renderHook(() => useAPI());
    expect(typeof result.current).toBe('object');
    expect(result.current).toHaveProperty('fetchData', expect.any(Function));
  });

  it('fetchData returns an ok property and a json method', async () => {
    const { result } = renderHook(() => useAPI());
    const fetchOptions = await result.current.fetchData('test');

    expect(fetchOptions).toHaveProperty('ok', true);
    expect(fetchOptions).toHaveProperty('json', expect.any(Function));
  });
});
