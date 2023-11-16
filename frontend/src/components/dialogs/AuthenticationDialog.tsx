import {
  DialogActions,
  DialogContent,
  Dialog as DialogMui,
  DialogProps,
  DialogTitle,
  Typography,
} from '@mui/material';
import { AuthenticationButton } from '../buttons/AuthenticationButton';

export const AuthenticationDialog = (props: DialogProps) => {
  const { onClose, open, title } = props;

  return (
    <DialogMui
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <Typography align="center" variant="subtitle1">
          To access this application, log in with your IDIR
        </Typography>
      </DialogContent>
      <DialogActions>
        <AuthenticationButton />
      </DialogActions>
    </DialogMui>
  );
};

export default AuthenticationDialog;
