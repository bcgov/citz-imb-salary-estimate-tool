import { callAPI } from './callAPI';

// Mock the global fetch function
const mockFetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve('mock data'),
  })
);
(global.fetch as jest.Mock) = mockFetch;

describe('fetchAPI', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('returns data from the API for GET request', async () => {
    const data = await callAPI('test', { method: 'GET' });
    expect(data).toBe('mock data');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/test', { method: 'GET' });
  });

  it('returns null for POST request', async () => {
    const data = await callAPI('test', { method: 'POST' });
    expect(data).toBe('mock data');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/test', {
      method: 'POST',
    });
  });

  it('returns null for PATCH request', async () => {
    const data = await callAPI('test', { method: 'PATCH' });
    expect(data).toBe('mock data');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/test', {
      method: 'PATCH',
    });
  });

  it('returns null for DELETE request', async () => {
    const data = await callAPI('test', { method: 'DELETE' });
    expect(data).toBeNull();
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('/api/test', {
      method: 'DELETE',
    });
  });
});
