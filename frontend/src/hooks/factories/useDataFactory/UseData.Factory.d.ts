export type UseDataFactoryProps<TDataType> = {
  endPoint: string;
  dataTransformer?: (items: TDataType[]) => TDataType[];
};

export type UseDataFactoryResults<TDataType> = {
  items: TDataType[];
  isLoading: boolean;
  isError: boolean;
  error: Error;
  deleteItem: UseMutateFunction;
  updateItem: UseMutateFunction;
  appendBulkItems: UseMutateFunction;
  appendItem: UseMutateFunction;
};
