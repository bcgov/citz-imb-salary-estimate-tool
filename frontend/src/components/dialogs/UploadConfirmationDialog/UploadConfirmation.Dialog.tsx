import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { ConfirmCancelButton, AddButton } from '@/components';
import { useUpload } from '@/hooks';
import { csvFileToSalaryData, ISalaryDataModel } from '@/utils';

interface IUploadConfirmationDialogProps {
  onSubmit: (data: unknown) => void;
}

export const UploadConfirmationDialog: React.FC<IUploadConfirmationDialogProps> = ({
  onSubmit,
}) => {
  const [isOpen, setOpen] = useState(false);
  const { csvFile, handleFileChange } = useUpload();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    if (csvFile) {
      const convertedFile: ISalaryDataModel[] = await csvFileToSalaryData(csvFile);
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
