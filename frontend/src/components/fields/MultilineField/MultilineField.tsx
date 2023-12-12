import { TextField as TextFieldMUI } from '@mui/material';
import { FieldProps } from '../../../types';

interface MultilineFieldProps extends FieldProps {
  value: string;
}

export const MultilineField = (props: MultilineFieldProps) => {
  const { name, onChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextFieldMUI
      type="text"
      rows={4}
      multiline
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default MultilineField;
