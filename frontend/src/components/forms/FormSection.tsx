import { Divider, Grid, GridProps, Stack, Typography } from '@mui/material';
// import { useField } from '@tanstack/react-form';
import { FormApi } from '@tanstack/react-form';
import { Field, FieldProps, FieldTypes } from '../fields';

interface FormSectionProps extends GridProps {
  fields: FieldProps[];
  form: FormApi<unknown, unknown>;
  mode: 'create' | 'edit' | 'view';
}

export const FormSection = (props: FormSectionProps) => {
  const { fields, form, mode, display, title, ...otherProps } = props;

  return (
    <Stack display={display} marginY={2}>
      <Divider>
        <Typography variant="h6">{title}</Typography>
      </Divider>
      <Grid container spacing={2} marginTop={1}>
        {fields.map((field) => {
          return (
            <Grid item key={field.name} {...otherProps}>
              <form.Field
                name={field.name as string}
                children={(formField) => {
                  return (
                    formField.state.value !== undefined && (
                      <Field
                        id={field.name as string}
                        type={field.type as FieldTypes}
                        value={formField.state.value}
                        onChange={formField.handleChange as () => void}
                        label={field.label}
                        required={field.required || false}
                        dataOptions={field.dataOptions}
                        mode={mode}
                      />
                    )
                  );
                }}
              />
            </Grid>
          );
        })}
      </Grid>{' '}
    </Stack>
  );
};

export default FormSection;
