import {
  AppBar,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { FormApi, useForm } from '@tanstack/react-form';
import { useMemo } from 'react';
import { useInquiry } from '../../hooks/useInquiry/useInquiry';
import { InquiryData } from '../../types';
import { SubmitCancelButton } from '../buttons/SubmitCancelButton/SubmitCancelButton';
import { FieldProps } from '../fields';
import { StatusStepper } from '../stepper/StatusStepper';
import { FormSection } from './FormSection';

interface InquiryFormProps {
  mode: 'create' | 'edit' | 'view';
  onClose: () => void;
  title: string;
}

export const InquiryForm = (props: InquiryFormProps) => {
  const { mode, onClose, title } = props;

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

  const employeeSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'employee'
      ),
    [inquiryData.formOptions.fields]
  );

  const positionSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'position'
      ),
    [inquiryData.formOptions.fields]
  );

  const commentSectionFields = useMemo(
    () =>
      inquiryData.formOptions.fields.filter(
        (field) => field.section === 'comment'
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
            <Stack>
              <Grid container spacing={2} marginY={2}>
                <Grid item xs={12}>
                  <StatusStepper status={1} />
                </Grid>
              </Grid>

              {
                // TODO: can we fix the typecasting here?
              }
              <FormSection
                title="Employee Information"
                form={form as unknown as FormApi<unknown, unknown>}
                fields={employeeSectionFields as unknown as FieldProps[]}
                mode={mode}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              />

              {
                // TODO: can we fix the typecasting here?
              }
              <FormSection
                title="Position Information"
                form={form as unknown as FormApi<unknown, unknown>}
                fields={positionSectionFields as unknown as FieldProps[]}
                mode={mode}
                xs={12}
                sm={6}
                md={4}
                lg={3}
              />

              {
                // TODO: can we fix the typecasting here?
              }
              <FormSection
                title="Comments"
                form={form as unknown as FormApi<unknown, unknown>}
                fields={commentSectionFields as unknown as FieldProps[]}
                mode={mode}
                xs={12}
              />

              <FormSection
                display="none"
                form={form as unknown as FormApi<unknown, unknown>}
                fields={hiddenSectionFields as unknown as FieldProps[]}
                mode={mode}
              />
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

export default InquiryForm;
