import {
  Button,
  Dialog as DialogMui,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogProps,
} from '@mui/material';
import { MouseEventHandler, ElementType } from 'react';

interface CustomDialogProps extends DialogProps {
  actions?: JSX.Element;
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
        {actions}
      </DialogActions>
    </DialogMui>
  );
};
