import { TextField as TextFieldMUI } from '@mui/material';
import { FieldProps } from './FieldProps.d';

interface TextFieldProps extends FieldProps {
  value: string;
}

export const TextField = (props: TextFieldProps) => {
  const { label, value, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextFieldMUI
      type="text"
      id={label}
      value={value}
      label={label}
      onChange={handleChange}
    />
  );
};

export default TextField;
