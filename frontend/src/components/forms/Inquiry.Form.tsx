import { useForm } from '@tanstack/react-form';
import { useInquiry } from '../../hooks/useInquiry/useInquiry';
import { Field } from './Field';

export const InquiryForm = () => {
  const { formOptions } = useInquiry();
  console.log({ formOptions });

  const form = useForm({
    defaultValues: formOptions.defaultValues,
    onSubmit: (values) => {
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    },
  });
  console.log({ form });

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
                // eslint-disable-next-line react/no-children-prop
                children={(formField) => (
                  <Field value={formField.state.value} {...field} />
                )}
              />
            );
          })}
        </div>
      </form>
    </form.Provider>
  );
};

export default InquiryForm;
