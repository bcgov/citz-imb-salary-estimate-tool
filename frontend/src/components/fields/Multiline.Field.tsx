import { OutlinedInput, InputLabel } from '@mui/material';
import { FieldProps } from './FieldProps.d';

interface MultilineFieldProps extends FieldProps {
  value: string;
}

export const MultilineField = (props: MultilineFieldProps) => {
  const { label, value, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <OutlinedInput
        id={label}
        value={value}
        label={label}
        rows={5}
        multiline
        onChange={handleChange}
        sx={{ width: '500px' }}
      />
    </>
  );
};

export default MultilineField;
