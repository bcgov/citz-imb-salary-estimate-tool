import { TextField as TextFieldMUI } from '@mui/material';
import { FieldProps } from './FieldProps.d';

interface TextFieldProps extends FieldProps {
  value: string;
}

export const TextField = (props: TextFieldProps) => {
  const { onChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return <TextFieldMUI type="text" onChange={handleChange} {...otherProps} />;
};

export default TextField;
