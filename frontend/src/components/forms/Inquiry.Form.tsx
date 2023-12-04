import { useForm } from '@tanstack/react-form';
import { useInquiry } from '../../hooks/useInquiry/useInquiry';
import { Field, FieldTypes } from '../fields';

interface InquiryFormProps {
  mode?: 'create' | 'update' | 'view';
}

export const InquiryForm = (props: InquiryFormProps) => {
  const { mode } = props;
  const { formOptions } = useInquiry();

  const form = useForm({
    defaultValues: formOptions.defaultValues,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
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
          {formOptions.fields.map((field) => {
            return (
              <form.Field
                key={field.name}
                name={field.name}
                children={(formField) => {
                  const { type, ...otherProperties } = field;
                  if (mode === 'create') formField.setValue(field.defaultValue);
                  return (
                    <Field
                      type={type as FieldTypes}
                      value={formField.state.value}
                      {...otherProperties}
                    />
                  );
                }}
              />
            );
          })}
        </div>
      </form>
    </form.Provider>
  );
};

InquiryForm.defaultProps = {
  mode: 'create',
};

export default InquiryForm;
