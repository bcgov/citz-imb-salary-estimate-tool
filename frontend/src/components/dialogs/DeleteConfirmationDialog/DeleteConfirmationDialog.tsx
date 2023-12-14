import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { ConfirmCancelButton, DeleteRowButton } from '../../buttons';

interface IDeleteConfirmationDialogProps {
  onSubmit: () => void;
  position: string;
}

export const DeleteConfirmationDialog = (
  props: IDeleteConfirmationDialogProps
) => {
  const { onSubmit, position } = props;

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DeleteRowButton onClick={handleClick} />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to delete position {position}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <ConfirmCancelButton onClose={handleClose} onClick={onSubmit} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DeleteConfirmationDialog;
