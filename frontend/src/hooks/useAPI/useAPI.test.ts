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

  it('returns a function', () => {
    const { result } = renderHook(() => useAPI());
    expect(typeof result.current).toBe('object');
  });

  it('sets up fetch options correctly', async () => {
    const { result } = renderHook(() => useAPI());
    const fetchOptions = await result.current.fetchData('test');

    expect(fetchOptions).toHaveProperty('ok', true);
    expect(fetchOptions).toHaveProperty('json', expect.any(Function));
  });
});
