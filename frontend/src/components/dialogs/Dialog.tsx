import {
  DialogActions,
  DialogContent,
  Dialog as DialogMui,
  DialogProps,
  DialogTitle,
} from '@mui/material';
import { Button } from '../buttons/Button';

interface ActionConfigProps {
  onClick: () => void;
  label: string;
}
interface CustomDialogProps extends DialogProps {
  actions?: ActionConfigProps[];
}

export const Dialog = (props: CustomDialogProps) => {
  const { actions, onClose, open, title, children } = props;

  return (
    <DialogMui
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        {actions?.map((action) => (
          <Button key={`action-${action.label}`} onClick={action.onClick}>
            {action.label}
          </Button>
        ))}
      </DialogActions>
    </DialogMui>
  );
};

Dialog.defaultProps = {
  actions: [],
};
export default Dialog;
