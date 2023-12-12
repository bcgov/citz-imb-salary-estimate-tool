import { TextField as TextFieldMUI } from '@mui/material';
import { FieldProps } from './FieldProps.d';

interface NumberFieldProps extends FieldProps {
  value: number;
}

export const NumberField = (props: NumberFieldProps) => {
  const { onChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return <TextFieldMUI type="number" onChange={handleChange} {...otherProps} />;
};

export default NumberField;
