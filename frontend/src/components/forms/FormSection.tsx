import { Grid } from '@mui/material';
// import { useField } from '@tanstack/react-form';
import { FormApi } from '@tanstack/react-form';
import { Field, FieldProps, FieldTypes } from '../fields';

interface FormSectionProps {
  fields: FieldProps[];
  form: FormApi<unknown, unknown>;
  xs?: number | undefined;
  sm?: number | undefined;
  md?: number | undefined;
  lg?: number | undefined;
  // mode: 'create' | 'update' | 'view';
}

export const FormSection = (props: FormSectionProps) => {
  const { fields, form, ...otherProps } = props;
  // console.log('FormSection mode', mode);

  return (
    <>
      {fields
        // .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((field) => {
          console.log('FormSection field', field);
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
                        // mode={mode}
                      />
                    )
                  );
                }}
              />
            </Grid>
          );
        })}
    </>
  );
};

FormSection.defaultProps = {
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
};

export default FormSection;
