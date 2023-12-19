/* eslint-disable react/no-unknown-property */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { ConfirmCancelButton, AddButton } from '../../buttons';
import { useUpload } from '../../../hooks';

interface IUploadConfirmationDialogProps {
  onSubmit: (data: unknown[]) => void;
}

export const UploadConfirmationDialog: React.FC<
  IUploadConfirmationDialogProps
> = ({ onSubmit }) => {
  const [isOpen, setOpen] = useState(false);
  const { csvFile, handleFileChange } = useUpload();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    // eslint-disable-next-line no-console
    console.log('CSV file uploaded:', csvFile);
    onSubmit([]);
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleOpen} />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Upload</DialogTitle>
        <DialogContent>
          <input type="file" accept=".csv" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <ConfirmCancelButton onClose={handleClose} onClick={handleSubmit} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UploadConfirmationDialog;
