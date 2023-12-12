import { InputAdornment, TextField as TextFieldMUI } from '@mui/material';
import { FieldProps } from '../../../types';

interface CurrencyFieldProps extends FieldProps {
  value: number;
}

export const CurrencyField = (props: CurrencyFieldProps) => {
  const { onChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <TextFieldMUI
      type="number"
      InputProps={{
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default CurrencyField;
