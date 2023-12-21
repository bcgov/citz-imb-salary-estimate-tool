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
import {
  csvFileToSalaryData,
  ISalaryDataModel,
} from '../../../utils/UploadSalaryData';

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

  const handleSubmit = async () => {
    // eslint-disable-next-line no-console
    if (csvFile) {
      // eslint-disable-next-line prettier/prettier
      const convertedFile: ISalaryDataModel[] = await csvFileToSalaryData(csvFile);
      console.log('CSV file uploaded:', convertedFile);
      onSubmit(convertedFile);
    }
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleOpen} />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Upload</DialogTitle>
        <DialogContent>
          <input type="file" accept=".csv,.CSV" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <ConfirmCancelButton onClose={handleClose} onClick={handleSubmit} />
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UploadConfirmationDialog;
