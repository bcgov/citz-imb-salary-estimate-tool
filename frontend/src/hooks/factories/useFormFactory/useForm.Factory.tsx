// import { useCallback } from 'react';
// import { useMemo } from 'react';
import {
  // NewFormDialog,
  // ViewFormDialog,
  // UpdateFormDialog,
  DeleteConfirmationDialog,
  // UploadConfirmationDialog,
  FormDialog,
} from '@/components';
import type { UseFormFactoryProps, UseFormFactoryReturn } from './useForm.Factory.d';

export const useFormFactory = <TDataType,>(
  props: UseFormFactoryProps<TDataType>,
): UseFormFactoryReturn<TDataType> => {
  const { view, edit, create, remove, fields, sections, title } = props;

  const viewFormDialog = (data) => (
    <FormDialog
      mode="View"
      defaultValues={data}
      onSubmit={() => {}}
      fields={fields || []}
      sections={sections || []}
      title={title || ''}
    />
  );

  const editFormDialog = (data) => (
    <FormDialog
      mode="Edit"
      defaultValues={data}
      onSubmit={edit.onSubmit || (() => {})}
      fields={fields || []}
      sections={sections || []}
      title={title || ''}
    />
  );

  const addFormDialog = () => (
    <FormDialog
      mode="Create"
      defaultValues={create.defaultValues || []}
      onSubmit={create.onSubmit || (() => {})}
      fields={fields || []}
      sections={sections || []}
      title={title || ''}
    />
  );

  const deleteDialog = (data) => (
    <DeleteConfirmationDialog
      onSubmit={remove.onSubmit || (() => {})}
      confirmationValue={data[remove.confirmationField || '']}
      title={title || ''}
      id={data.id}
    />
  );

  const returnValue: UseFormFactoryReturn<TDataType> = { view, edit, create, remove };

  if (view.show) returnValue.view.FormDialog = viewFormDialog;
  if (edit.show) returnValue.edit.FormDialog = editFormDialog;
  if (create.show) returnValue.create.FormDialog = addFormDialog;
  if (remove.show) returnValue.remove.FormDialog = deleteDialog;

  return returnValue as UseFormFactoryReturn<TDataType>;
};

export default useFormFactory;
