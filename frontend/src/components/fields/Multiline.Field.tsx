import { TextField as TextFieldMUI } from '@mui/material';
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
    <TextFieldMUI
      type="text"
      id={label}
      value={value}
      label={label}
      rows={5}
      multiline
      onChange={handleChange}
    />
  );
};

export default MultilineField;
