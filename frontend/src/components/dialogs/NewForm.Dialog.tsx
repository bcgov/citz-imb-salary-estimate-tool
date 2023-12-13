import { useState } from 'react';
import { Form } from '../forms/Form';
import { AddButton } from '../buttons/AddButton';
import { IFormDialogProps } from '../forms/form.d';

export const NewFormDialog = (props: IFormDialogProps) => {
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
      <AddButton onClick={handleClick} />
      <Form open={isOpen} onClose={handleClose} mode="Create" {...formProps} />
    </>
  );
};

export default NewFormDialog;
