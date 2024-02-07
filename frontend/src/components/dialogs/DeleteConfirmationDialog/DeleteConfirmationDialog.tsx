import { Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useState } from 'react';
import { ConfirmCancelButton, DeleteRowButton } from '@/components';

export interface DeleteConfirmationDialogProps {
  onSubmit: (id: string) => void;
  confirmationValue?: string;
  title: string;
  id: string;
}

export const DeleteConfirmationDialog = (props: DeleteConfirmationDialogProps) => {
  const { onSubmit, confirmationValue, title, id } = props;

  const [isOpen, setOpen] = useState(false);

  const onClickHandler = () => {
    setOpen(true);
  };

  const onCloseHandler = () => {
    setOpen(false);
  };

  const onSubmitHandler = () => {
    onSubmit(id);
    setOpen(false);
  };

  return (
    <>
      <DeleteRowButton onClick={onClickHandler} />
      <Dialog open={isOpen} onClose={onCloseHandler}>
        <DialogTitle>{title} Delete Confirmation</DialogTitle>
        <DialogContent>
          <Typography>Are you sure you want to delete: {confirmationValue}?</Typography>
        </DialogContent>
        <DialogActions>
          <ConfirmCancelButton onClose={onCloseHandler} onClick={onSubmitHandler} />
        </DialogActions>
      </Dialog>
    </>
  );
};

DeleteConfirmationDialog.defaultProps = {
  confirmationValue: '',
};

export default DeleteConfirmationDialog;
