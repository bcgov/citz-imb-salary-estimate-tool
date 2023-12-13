import { Divider, Grid, GridProps, Stack, Typography } from '@mui/material';
import { Field } from '../fields';
import { IFormField } from './form.d';

interface FormSectionProps extends GridProps {
  fields: IFormField[];
  form: unknown;
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
        {fields
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map((field) => {
            return (
              <Grid item key={field.name} {...otherProps}>
                <Field
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  hidden={field.hidden}
                  selectionOptions={field.selectionOptions}
                />
              </Grid>
            );
          })}
      </Grid>
    </Stack>
  );
};

export default FormSection;
