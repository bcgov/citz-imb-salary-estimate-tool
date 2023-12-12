import { Dialog } from '@mui/material';
import { useState } from 'react';
import { InquiryForm } from '../../forms/InquiryForm/InquiryForm';
import { AddButton } from '../../buttons/AddButton/AddButton';

export const NewInquiryDialog = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AddButton onClick={handleClick} />
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        maxWidth="lg"
      >
        <InquiryForm
          mode="create"
          onClose={handleClose}
          title="Create New Inquiry"
        />
      </Dialog>
    </>
  );
};

export default NewInquiryDialog;
