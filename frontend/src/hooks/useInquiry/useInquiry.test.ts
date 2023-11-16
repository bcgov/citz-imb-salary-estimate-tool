import { renderHook } from '@testing-library/react';
import { useInquiry } from './useInquiry';
import { useDataFactory } from '../useDataFactory/useData.Factory';

jest.mock('../useDataFactory/useData.Factory');

describe('useInquiry', () => {
  it('calls useDataFactory with the correct parameters', () => {
    const endPoint = 'inquiry';
    const dataId = 'test-id';

    jest.mock('../useDataFactory/useData.Factory');

    renderHook(() => useInquiry(dataId));

    expect(useDataFactory).toHaveBeenCalledWith({ endPoint, dataId });
  });

  // Add more tests as needed
});
