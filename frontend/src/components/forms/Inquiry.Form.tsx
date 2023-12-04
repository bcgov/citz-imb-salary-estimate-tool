import { useForm } from '@tanstack/react-form';

export const InquiryForm = () => {
  const form = useForm({
    defaultValues: {
      fullName: '',
    },
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
          <form.Field
            name="fullName"
            // eslint-disable-next-line react/no-children-prop
            children={(field) => (
              <input
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            )}
          />
        </div>
      </form>
    </form.Provider>
  );
};

export default InquiryForm;
