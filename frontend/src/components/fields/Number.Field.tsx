import { InputLabel, OutlinedInput } from '@mui/material';
import { FieldProps } from './FieldProps.d';

interface NumberFieldProps extends FieldProps {
  value: number;
}

export const NumberField = (props: NumberFieldProps) => {
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
        onChange={handleChange}
      />
    </>
  );
};

export default NumberField;
