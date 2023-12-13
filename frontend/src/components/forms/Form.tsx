import {
  AppBar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { useForm } from '@tanstack/react-form';
import { SubmitCancelButton } from '../buttons/SubmitCancelButton';
import { FormSection } from './FormSection';
import { IFormProps } from './form.d';

export const Form = (props: IFormProps) => {
  const {
    defaultValues,
    open,
    onClose,
    onSubmit,
    mode,
    fields,
    sections,
    title,
    // isError,
    // isLoading,
  } = props;

  const formHook = useForm({
    defaultValues,
    onSubmit: (data) => {
      console.log('Form: onSubmit', data);
      onSubmit(data.value);
      onClose();
    },
  });

  // if (isError) return <div>Error</div>

  // if (isLoading) return <div>Loading...</div>

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xl" fullWidth>
      <DialogTitle id="dialog-title" sx={{ flexGrow: 1, padding: 0 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              {title}: {mode}
            </Typography>
          </Toolbar>
        </AppBar>
      </DialogTitle>
      <formHook.Provider>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            formHook.handleSubmit();
          }}
        >
          <DialogContent>
            <Stack>
              {sections.map((section) => {
                const sectonFields = fields.filter(
                  (field) => field.section === section.name
                );
                return (
                  <FormSection
                    key={section.name}
                    title={section.label}
                    form={formHook}
                    fields={sectonFields}
                    mode="view"
                  />
                );
              })}
            </Stack>
          </DialogContent>
          <DialogActions>
            <SubmitCancelButton onClose={onClose} />
          </DialogActions>
        </form>
      </formHook.Provider>
    </Dialog>
  );
};

// Form.defaultProps = {
//   defaultValues: {},
//   mode: "view",
//   sections: [],
//   title: "",
//   isError: false,
//   isLoading: false,
//   onClose: () => {
//     console.log("onClose")
//   },
//   onSubmit: (data: any) => {
//     console.log("onSubmit", data)
//   },
// }

export default Form;
