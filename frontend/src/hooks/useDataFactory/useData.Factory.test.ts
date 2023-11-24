import { renderHook } from '@testing-library/react';
import { useDataFactory } from './useData.Factory';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({ data: 'test data' }),
}));

describe('useDataFactory', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const endPoint = 'test-endpoint';
  const dataId = 'test-id';

  it('renders correctly', () => {
    const { result } = renderHook(useDataFactory, {
      initialProps: { endPoint },
    });
    expect(result.current.data).toBe('test data');
  });

  it('renders correctly with dataId', () => {
    const { result } = renderHook(useDataFactory, {
      initialProps: { endPoint, dataId },
    });
    expect(result.current.data).toBe('test data');
  });
});
