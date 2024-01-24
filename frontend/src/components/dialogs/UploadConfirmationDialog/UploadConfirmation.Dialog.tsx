import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import { ImportButton } from '@/components';
import { useUpload } from '@/hooks';
import {
  csvFileToSalaryData,
  ISalaryDataModel,
} from '@/utils/UploadSalaryData';

interface IUploadConfirmationDialogProps {
  onSubmit: (data: unknown) => void;
}

export const UploadConfirmationDialog: React.FC<
  IUploadConfirmationDialogProps
> = ({ onSubmit }) => {
  const [isOpen, setOpen] = useState(false);
  const { csvFile, handleFileChange } = useUpload();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    if (csvFile) {
      const convertedFile: ISalaryDataModel[] =
        await csvFileToSalaryData(csvFile);
      onSubmit(convertedFile);
    }
    handleClose();
  };

  return (
    <>
      <ImportButton onClick={handleOpen} />
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Upload</DialogTitle>
        <DialogContent>
          <input type="file" accept=".csv,.CSV" onChange={handleFileChange} />
        </DialogContent>
        <DialogActions>
          <Stack
            direction="row"
            spacing={2}
            width="100%"
            justifyContent="center"
          >
            <Button variant="contained" type="button" onClick={handleSubmit}>
              Upload
            </Button>
            <Button variant="outlined" type="reset" onClick={handleClose}>
              Cancel
            </Button>
          </Stack>{' '}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UploadConfirmationDialog;
