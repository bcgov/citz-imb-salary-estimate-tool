import { MenuItem, TextField as TextFieldMUI } from '@mui/material';
import { useField } from '@tanstack/react-form';
import { useMemo } from 'react';
import { useDataFactory } from '../../../hooks/useDataFactory/useData.Factory';
import { ISelectionOptions } from '../../forms/form.d';
import { LoadingSkeletonField } from '../../loading/LoadingSkeleton/LoadingSkeleton.field';

interface SelectFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
  selectionOptions?: ISelectionOptions;
}

export const SelectField = (props: SelectFieldProps) => {
  const { label, name, hidden, selectionOptions } = props;

  const sx = hidden ? { display: 'none' } : { width: '100%' };

  const { form } = useField({ name });

  const selectData = useDataFactory<Record<string, string>>({
    endPoint: selectionOptions?.endPoint as string,
  });

  const choices = useMemo(() => {
    if (!selectionOptions) return [];
    if (!selectData.data || selectData.isLoading) return [];
    if (selectData.isError)
      return [{ label: 'Error loading values', value: '' }];

    const sortedData = selectData.data.sort((a, b) => {
      if (selectionOptions?.sortFieldName) {
        return a[selectionOptions?.sortFieldName] >
          b[selectionOptions?.sortFieldName]
          ? 1
          : -1;
      }
      return a[selectionOptions?.labelFieldName] >
        b[selectionOptions?.labelFieldName]
        ? 1
        : -1;
    });

    return sortedData.map((item) => ({
      label: item[selectionOptions.labelFieldName],
      value: item[selectionOptions.valueFieldName],
    }));
  }, [
    selectionOptions,
    selectData.data,
    selectData.isLoading,
    selectData.isError,
  ]);

  if (selectData.isLoading) return <LoadingSkeletonField />;

  return (
    <form.Field
      name={name}
      children={(field) =>
        field.state.value !== undefined && (
          <TextFieldMUI
            sx={sx}
            name={field.name}
            select
            value={field.state.value}
            onBlur={field.handleBlur}
            onChange={(e) => field.handleChange(e.target.value)}
            label={label}
          >
            {choices &&
              choices.map((choice) => (
                <MenuItem key={choice.value} value={choice.value}>
                  {choice.label}
                </MenuItem>
              ))}
          </TextFieldMUI>
        )
      }
    />
  );
};

SelectField.defaultProps = {
  hidden: false,
  selectionOptions: {},
};

export default SelectField;
