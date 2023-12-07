import { Paper } from '@mui/material';
import { useForm } from '@tanstack/react-form';
import { useInquiry } from '../../hooks/useInquiry/useInquiry';
import { SubmitCancelButton } from '../buttons/SubmitCancelButton';
import { Field, FieldTypes } from '../fields';

interface InquiryFormProps {
  mode?: 'create' | 'update' | 'view';
  onClose?: () => void;
}

export const InquiryForm = (props: InquiryFormProps) => {
  const { mode, onClose } = props;
  console.log('InquiryForm mode', mode);

  const inquiryData = useInquiry();

  const form = useForm({
    defaultValues: inquiryData.formOptions.defaultValues,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
      if (onClose) onClose();
    },
  });

  if (inquiryData.isError) return <div>Error</div>;

  if (inquiryData.isLoading) return <div>Loading...</div>;

  return (
    <Paper elevation={3}>
      <form.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // eslint-disable-next-line no-void
            void form.handleSubmit();
          }}
        >
          <div>
            {inquiryData.formOptions.fields.map((field) => {
              return (
                <form.Field
                  key={field.name}
                  name={field.name}
                  children={(formField) => {
                    return (
                      formField.state.value !== undefined && (
                        <Field
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
              );
            })}
            <SubmitCancelButton />
          </div>
        </form>
      </form.Provider>
    </Paper>
  );
};

InquiryForm.defaultProps = {
  mode: 'create',
  onClose: () => {},
};

export default InquiryForm;
