import { MenuItem, TextField as TextFieldMUI } from '@mui/material';
import { useMemo } from 'react';
import { useDataFactory } from '../../hooks/useDataFactory/useData.Factory';
import { FieldProps } from './FieldProps.d';
import { LoadingSkeletonField } from '../loading/LoadingSkeleton.field';

interface SelectFieldProps extends FieldProps {
  dataOptions: {
    endPoint: string;
    labelFieldName: string;
    valueFieldName: string;
    sortFieldName?: string;
  };
}

export const SelectField = (props: SelectFieldProps) => {
  const { dataOptions, onChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const selectData = useDataFactory<Record<string, string>>({
    endPoint: dataOptions.endPoint,
  });

  const choices = useMemo(() => {
    if (!selectData.data || selectData.isLoading) return [];
    if (selectData.isError)
      return [{ label: 'Error loading values', value: '' }];

    const sortedData = selectData.data.sort((a, b) => {
      if (dataOptions.sortFieldName) {
        return a[dataOptions.sortFieldName] > b[dataOptions.sortFieldName]
          ? 1
          : -1;
      }
      return 0;
    });

    return sortedData.map((item) => ({
      label: item[dataOptions.labelFieldName],
      value: item[dataOptions.valueFieldName],
    }));
  }, [dataOptions, selectData.data, selectData.isError, selectData.isLoading]);

  if (selectData.isLoading) return <LoadingSkeletonField />;

  return (
    <TextFieldMUI fullWidth select onChange={handleChange} {...otherProps}>
      {choices.map((choice) => (
        <MenuItem key={choice.value} value={choice.value}>
          {choice.label}
        </MenuItem>
      ))}
    </TextFieldMUI>
  );
};

export default SelectField;
