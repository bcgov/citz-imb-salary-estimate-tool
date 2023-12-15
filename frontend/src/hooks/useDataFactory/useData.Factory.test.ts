// import { renderHook } from '@testing-library/react';
// import { useDataFactory } from './useData.Factory';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn().mockReturnValue({ data: ['test data'] }),
  useQueryClient: jest.fn(),
  useMutation: jest.fn().mockReturnValue({ mutate: jest.fn() }),
}));
jest.mock('../useAPI/useAPI', () => ({
  useAPI: jest.fn().mockReturnValue({
    appendItem: jest.fn().mockReturnValue({ data: 'test data' }),
    fetchData: jest.fn().mockReturnValue({ data: ['test data'] }),
  }),
}));

describe('useDataFactory', () => {
  // beforeEach(() => {
  //   jest.clearAllMocks();
  // });
  // const endPoint = 'test-endpoint';
  // const dataId = 'test-id';
  // it('returns data correctly', async () => {
  //   const { result } = await renderHook(useDataFactory, {
  //     initialProps: { endPoint },
  //   });
  //   expect(result.current.data[0]).toBe('test data');
  // });
  // it('returns data correctly with dataId', () => {
  //   const { result } = renderHook(useDataFactory, {
  //     initialProps: { endPoint, dataId },
  //   });
  //   expect(result.current.data[0]).toBe('test data');
  // });
  // it('append is defined', async () => {
  //   const { result } = await renderHook(useDataFactory, {
  //     initialProps: { endPoint },
  //   });
  //   expect(result.current.append).toBeDefined();
  // });
});
