import { Dialog } from '@mui/material';
import { useState } from 'react';
import { InquiryForm } from '../forms/Inquiry.Form';
import { AddButton } from '../buttons/AddButton';

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
      <Dialog open={isOpen}>
        <InquiryForm onClose={handleClose} />
      </Dialog>
    </>
  );
};

export default NewInquiryDialog;
