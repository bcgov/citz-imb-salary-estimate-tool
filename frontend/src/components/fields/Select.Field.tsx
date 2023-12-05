import {
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FieldProps } from './FieldProps.d';

export const SelectField = (props: FieldProps) => {
  console.log('SelectField', props);
  const { label, value } = props;

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
  };

  const choices = [
    { label: 'TODO1', value: 'TODO1' },
    { label: 'TODO2', value: 'TODO2' },
    { label: 'TODO3', value: 'TODO3' },
  ];

  return (
    <FormControl sx={{ m: 1, width: '200px' }}>
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
    </FormControl>
  );
};

export default SelectField;
