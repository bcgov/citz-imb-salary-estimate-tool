import { useState } from 'react';
import { Form, IFormDialogProps } from '../../forms';
import { ViewButton } from '../../buttons';

export const ViewFormDialog = (props: IFormDialogProps) => {
  const { ...formProps } = props;

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ViewButton onClick={handleClick} />
      <Form open={isOpen} onClose={handleClose} mode="View" {...formProps} />
    </>
  );
};

export default ViewFormDialog;
