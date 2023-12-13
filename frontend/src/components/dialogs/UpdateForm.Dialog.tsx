import { useState } from 'react';
import { Form } from '../forms/Form';
import { EditButton } from '../buttons/EditButton';
import { IFormDialogProps } from '../forms/form.d';

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
