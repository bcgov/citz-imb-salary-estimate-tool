import {
  AppBar,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useForm } from '@tanstack/react-form';
import { useMemo } from 'react';
import { useInquiry } from '../../hooks/useInquiry/useInquiry';
import { InquiryData } from '../../types';
import { SubmitCancelButton } from '../buttons/SubmitCancelButton';
import { Field, FieldTypes } from '../fields';
import { StatusStepper } from '../stepper/StatusStepper';

interface InquiryFormProps {
  mode?: 'create' | 'update' | 'view';
  onClose: () => void;
  title: string;
}

export const InquiryForm = (props: InquiryFormProps) => {
  const { mode, onClose, title } = props;
  console.log('InquiryForm mode', mode);

  const inquiryData = useInquiry();

  const hiddenSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'hidden'
      ),
    [inquiryData.formOptions.fields]
  );

  const headerSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'header'
      ),
    [inquiryData.formOptions.fields]
  );

  const mainSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'main'
      ),
    [inquiryData.formOptions.fields]
  );

  const footerSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'footer'
      ),
    [inquiryData.formOptions.fields]
  );

  const form = useForm({
    defaultValues: inquiryData.formOptions.defaultValues,
    onSubmit: (values) => {
      inquiryData.append(values as InquiryData);
      if (onClose) onClose();
    },
  });

  if (inquiryData.isError) return <div>Error</div>;

  if (inquiryData.isLoading) return <div>Loading...</div>;

  return (
    <>
      <DialogTitle id="dialog-title" sx={{ flexGrow: 1, padding: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">{title}</Typography>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      <form.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogContent id="dialog-description">
            <Stack divider={<Divider />}>
              <Grid container spacing={2} marginY={2}>
                <Grid item xs={12}>
                  <StatusStepper status={1} />
                </Grid>
              </Grid>

              <Grid container spacing={2} marginY={2}>
                {headerSectionFields
                  .sort((a, b) => a.sortOrder - b.sortOrder)
                  .map((field) => {
                    return (
                      <Grid item key={field.name} xs={12} sm={6} md={4} lg={3}>
                        <form.Field
                          name={field.name}
                          children={(formField) => {
                            return (
                              formField.state.value !== undefined && (
                                <Field
                                  id={field.name}
                                  type={field.type as FieldTypes}
                                  value={formField.state.value}
                                  onChange={formField.handleChange}
                                  label={field.label}
                                  required={field.required || false}
                                  dataOptions={field.dataOptions}
                                />
                              )
                            );
                          }}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
              <Grid container spacing={2} marginY={2}>
                {mainSectionFields
                  .sort((a, b) => a.sortOrder - b.sortOrder)
                  .map((field) => {
                    return (
                      <Grid item key={field.name} xs={12} sm={6} md={4} lg={3}>
                        <form.Field
                          name={field.name}
                          children={(formField) => {
                            return (
                              formField.state.value !== undefined && (
                                <Field
                                  id={field.name}
                                  type={field.type as FieldTypes}
                                  value={formField.state.value}
                                  onChange={formField.handleChange}
                                  label={field.label}
                                  required={field.required || false}
                                  dataOptions={field.dataOptions}
                                />
                              )
                            );
                          }}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
              <Grid container marginY={2}>
                {footerSectionFields
                  .sort((a, b) => a.sortOrder - b.sortOrder)
                  .map((field) => {
                    return (
                      <Grid item key={field.name} xs={12}>
                        <form.Field
                          name={field.name}
                          children={(formField) => {
                            return (
                              formField.state.value !== undefined && (
                                <Field
                                  id={field.name}
                                  type={field.type as FieldTypes}
                                  value={formField.state.value}
                                  onChange={formField.handleChange}
                                  label={field.label}
                                  required={field.required || false}
                                  dataOptions={field.dataOptions}
                                />
                              )
                            );
                          }}
                        />
                      </Grid>
                    );
                  })}
              </Grid>
              <Grid container marginY={2}>
                <Box>Hidden Fields</Box>
                {hiddenSectionFields.map((field) => {
                  return (
                    <Grid item key={field.name} xs={12}>
                      <form.Field
                        name={field.name}
                        children={(formField) => {
                          return (
                            formField.state.value !== undefined && (
                              <Field
                                id={field.name}
                                type={field.type as FieldTypes}
                                value={formField.state.value}
                                onChange={formField.handleChange}
                                label={field.label}
                                required={field.required || false}
                                dataOptions={field.dataOptions}
                              />
                            )
                          );
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Stack>
          </DialogContent>
          <DialogActions>
            <SubmitCancelButton onClose={onClose} />
          </DialogActions>
        </form>
      </form.Provider>
    </>
  );
};

InquiryForm.defaultProps = {
  mode: 'create',
};

export default InquiryForm;
