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
import { useForm, FormApi } from '@tanstack/react-form';
import { useMemo } from 'react';
import { useInquiry } from '../../hooks/useInquiry/useInquiry';
import { InquiryData } from '../../types';
import { SubmitCancelButton } from '../buttons/SubmitCancelButton';
import { Field, FieldTypes, FieldProps } from '../fields';
import { StatusStepper } from '../stepper/StatusStepper';
import { FormSection } from './FormSection';

interface InquiryFormProps {
  mode?: 'create' | 'update' | 'view';
  onClose: () => void;
  title: string;
}

export const InquiryForm = (props: InquiryFormProps) => {
  const { mode, onClose, title } = props;
  console.log('InquiryForm mode', mode);

  const inquiryData = useInquiry();

  const form = useForm({
    defaultValues: inquiryData.formOptions.defaultValues,
    onSubmit: (values) => {
      inquiryData.append(values as InquiryData);
      if (onClose) onClose();
    },
  });

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
                {
                  // TODO: can we fix the typecasting here?
                }
                <FormSection
                  form={form as unknown as FormApi<unknown, unknown>}
                  fields={headerSectionFields as unknown as FieldProps[]}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                />
              </Grid>

              <Grid container spacing={2} marginY={2}>
                {
                  // TODO: can we fix the typecasting here?
                }
                <FormSection
                  form={form as unknown as FormApi<unknown, unknown>}
                  fields={mainSectionFields as unknown as FieldProps[]}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                />
              </Grid>

              <Grid container spacing={2} marginY={2}>
                {
                  // TODO: can we fix the typecasting here?
                }
                <FormSection
                  form={form as unknown as FormApi<unknown, unknown>}
                  fields={footerSectionFields as unknown as FieldProps[]}
                  xs={12}
                />
              </Grid>

              <Grid container marginY={2} display="none">
                <FormSection
                  form={form as unknown as FormApi<unknown, unknown>}
                  fields={hiddenSectionFields as unknown as FieldProps[]}
                  xs={12}
                />
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
