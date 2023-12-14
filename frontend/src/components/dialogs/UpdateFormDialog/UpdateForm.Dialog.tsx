import { useState } from 'react';
import { Form, IFormDialogProps } from '../../forms';
import { EditButton } from '../../buttons';

export const UpdateFormDialog = (props: IFormDialogProps) => {
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
      <EditButton onClick={handleClick} />
      <Form open={isOpen} onClose={handleClose} mode="Edit" {...formProps} />
    </>
  );
};

export default UpdateFormDialog;
