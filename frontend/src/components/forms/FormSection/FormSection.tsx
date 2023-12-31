import { Divider, Grid, GridProps, Stack, Typography } from '@mui/material';
import { Field } from '../../fields';
import { IFormField } from '../form.d';

interface FormSectionProps {
  fields: IFormField[];
  form: unknown;
  mode: 'Create' | 'Edit' | 'View';
  title: string;
  display?: 'flex' | 'block' | 'none';
  gridItemProps?: GridProps;
}

export const FormSection = (props: FormSectionProps) => {
  const { fields, display, title, gridItemProps, mode } = props;

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
              <Grid item key={field.name} {...gridItemProps}>
                <Field
                  type={field.type}
                  label={field.label}
                  name={field.name}
                  hidden={field.hidden}
                  selectionOptions={field.selectionOptions}
                  required={field.required}
                  mode={mode}
                />
              </Grid>
            );
          })}
      </Grid>
    </Stack>
  );
};

FormSection.defaultProps = {
  gridItemProps: { xs: 12, sm: 6, md: 4, lg: 3, xl: 3 },
  display: undefined,
};

export default FormSection;
