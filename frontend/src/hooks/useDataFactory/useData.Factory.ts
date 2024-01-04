/**
 * purpose of this hook is to provide a generic way to fetch data from the backend
 * it is usable for all endpoints that return an array of objects
 * it is also usable for endpoints that return a single object
 * it is used by other hooks to fetch data from the backend
 *
 * it uses react-query to cache the data
 * see https://tanstack.com/query/latest/ for more information
 * an excellent tutorial can be found here: https://youtu.be/r8Dg0KVnfMA?si=IjVtsUASxuekOQ9S
 *
 * @param T the type of the data to fetch
 * @param endPoint the endpoint to fetch data from
 * @param dataId the id of the record to fetch (optional)
 * @returns the query object from react-query
 *
 * future improvements:
 * - add a way to create a new record
 * - add a way to update a record
 * - add a way to delete a record
 */
import { useMemo } from 'react';
import { useKeycloak } from '@bcgov/citz-imb-kc-react';
import { GridColDef } from '@mui/x-data-grid';
import {
  QueryKey,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { onAppendMutation } from './onAppendMutation';
import { onDeleteMutation } from './onDeleteMutation';
import { onError } from './onError';
import { onSettled } from './onSettled';
import { onUpdateMutation } from './onUpdateMutation';
import { useFormFactory } from '@/hooks/useFormFactory/useForm.Factory';
import { useTableFactory } from '@/hooks/useTableFactory/useTable.Factory';
import { IFormField, IFormSection } from '@/components';
import { createApi } from '@/api';

export interface TuseDataFactoryProps<TDataType> {
  endPoint: string;
  title?: string;
  tableColumns?: GridColDef[];
  formSections?: IFormSection[];
  formFields?: IFormField[];
  showAddForm?: boolean;
  showViewForm?: boolean;
  showEditForm?: boolean;
  showDeleteRow?: boolean;
  dataTransformer?: (items: TDataType[]) => TDataType[];
}

type TuseDataFactoryResults<TDataType> = {
  items: TDataType[];
  isLoading: boolean;
  isError: boolean;
  error?: Error;
  DataTable?: ReturnType<typeof useTableFactory>;
};

export const useDataFactory = <TDataType>(
  props: TuseDataFactoryProps<TDataType>
) => {
  const {
    endPoint,
    title = props.endPoint,
    tableColumns = [],
    formSections = [],
    formFields = [],
    showAddForm = true,
    showViewForm = true,
    showEditForm = true,
    showDeleteRow = true,
    dataTransformer = (items: TDataType[]) => items,
  } = props;

  const queryKey: QueryKey = useMemo(() => [endPoint], [endPoint]);

  const { getAuthorizationHeaderValue } = useKeycloak();

  const api = createApi({
    headers: { Authorization: getAuthorizationHeaderValue() },
  });
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey,
    queryFn: async () => {
      const response = await api.get<TDataType>(endPoint);

      return response;
    },
  });

  const items = useMemo(() => {
    if (query.isLoading || query.isError || !query.data) return [];

    return dataTransformer(query.data) as TDataType[];
  }, [dataTransformer, query.data, query.isError, query.isLoading]);

  const onMutationProps = {
    endPoint,
    api,
    queryClient,
    queryKey,
  };

  const commonUseMutationProps = {
    onError: onError({ queryClient, queryKey }),
    onSettled: onSettled({ queryClient, queryKey }),
  };

  const { mutate: appendItem } = useMutation({
    ...onAppendMutation<TDataType>(onMutationProps),
    ...commonUseMutationProps,
  });

  const { mutate: updateItem } = useMutation({
    ...onUpdateMutation<TDataType>(onMutationProps),
    ...commonUseMutationProps,
  });

  const { mutate: deleteItem } = useMutation({
    ...onDeleteMutation<TDataType>(onMutationProps),
    ...commonUseMutationProps,
  });

  const dataForms = useFormFactory({
    title,
    onAppend: (data) => appendItem(data as TDataType),
    onUpdate: (data) => updateItem(data as TDataType),
    onDelete: (id) => deleteItem(id as number),
    sections: formSections,
    fields: formFields,
  });

  const DataTable = useTableFactory<TDataType>({
    title,
    rows: items,
    columns: tableColumns as GridColDef[],
    AddFormDialog:
      showAddForm && formSections.length && formFields.length
        ? dataForms.AddFormDialog
        : undefined,
    ViewFormDialog:
      showViewForm && formSections.length && formFields.length
        ? dataForms.ViewFormDialog
        : undefined,
    EditFormDialog:
      showEditForm && formSections.length && formFields.length
        ? dataForms.EditFormDialog
        : undefined,
    DeleteRow: showDeleteRow ? dataForms.DeleteRow : undefined,
  });

  const results: TuseDataFactoryResults<TDataType> = {
    items,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error as Error,
  };

  if (tableColumns?.length) results.DataTable = DataTable;

  return results;
};

useDataFactory.defaultProps = {
  title: '',
  tableColumns: [],
  formSections: [],
  formFields: [],
  showAddForm: true,
  showViewForm: true,
  showEditForm: true,
  showDeleteRow: true,
  dataTransformer: (items) => items,
};

export default useDataFactory;
