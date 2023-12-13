import { useField } from '@tanstack/react-form';
import { TextField as TextFieldMUI } from '@mui/material';

interface NumberFieldProps {
  name: string;
  label: string;
  hidden?: boolean;
}

export const NumberField = (props: NumberFieldProps) => {
  const { label, name, hidden } = props;

  const sx = hidden ? { display: 'none' } : {};

  const { form } = useField({ name });

  return (
    <form.Field
      name={name}
      children={(field) => (
        <TextFieldMUI
          sx={sx}
          name={field.name}
          type="number"
          value={field.state.value}
          onBlur={field.handleBlur}
          onChange={(e) => field.handleChange(e.target.value)}
          label={label}
        />
      )}
    />
  );

  const { onChange, ...otherProps } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return <TextFieldMUI type="number" onChange={handleChange} {...otherProps} />;
};

NumberField.defaultProps = {
  hidden: false,
};

export default NumberField;
