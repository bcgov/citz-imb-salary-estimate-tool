import {
  DialogActions,
  DialogContent,
  Dialog as DialogMui,
  DialogProps,
  DialogTitle,
} from '@mui/material';

interface CustomDialogProps extends DialogProps {
  actions: JSX.Element;
}

const Dialog = (props: CustomDialogProps) => {
  const { actions = null, onClose, open, title, children } = props;

  return (
    <DialogMui
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </DialogMui>
  );
};

export default Dialog;
