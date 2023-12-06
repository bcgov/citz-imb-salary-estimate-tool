import { InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
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

  const handleChange = (event: SelectChangeEvent) => {
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
    <>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={label}
        value={value as string}
        label={label}
        onChange={handleChange}
      >
        {choices.map((choice) => (
          <MenuItem key={choice.value} value={choice.value}>
            {choice.label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectField;
