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
import { CloseButton, IFormProps, SubmitCancelButton } from '@/components';
import { FormSection } from './FormSection/FormSection';

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
  } = props;

  const formHook = useForm({
    defaultValues,
    onSubmit: (data) => {
      onSubmit(data.value);
      onClose();
    },
  });

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
                    title={section.label as string}
                    form={formHook}
                    fields={sectonFields}
                    mode={mode}
                    gridItemProps={section.gridItemProps}
                  />
                );
              })}
            </Stack>
          </DialogContent>
          <DialogActions>
            {mode === 'View' ? (
              <CloseButton onClose={onClose} />
            ) : (
              <SubmitCancelButton onClose={onClose} />
            )}
          </DialogActions>
        </form>
      </formHook.Provider>
    </Dialog>
  );
};

export default Form;
