import { MenuItem, TextField as TextFieldMUI } from '@mui/material';
import { useMemo } from 'react';
import { useDataFactory } from '../../hooks/useDataFactory/useData.Factory';
import { FieldProps } from './FieldProps.d';

interface SelectFieldProps extends FieldProps {
  dataOptions: {
    endPoint: string;
    labelFieldName: string;
    valueFieldName: string;
  };
}

export const SelectField = (props: SelectFieldProps) => {
  const { label, value, dataOptions, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const selectData = useDataFactory<Record<string, string>>({
    endPoint: dataOptions.endPoint,
  });

  const choices = useMemo(() => {
    if (!selectData.data || selectData.isLoading || selectData.isError)
      return [];
    return selectData.data.map((item) => ({
      label: item[dataOptions.labelFieldName],
      value: item[dataOptions.valueFieldName],
    }));
  }, [dataOptions, selectData.data, selectData.isError, selectData.isLoading]);

  return (
    <TextFieldMUI
      fullWidth
      select
      label={label}
      value={value}
      onChange={handleChange}
    >
      {choices.map((choice) => (
        <MenuItem key={choice.value} value={choice.value}>
          {choice.label}
        </MenuItem>
      ))}
    </TextFieldMUI>
  );
};

export default SelectField;
