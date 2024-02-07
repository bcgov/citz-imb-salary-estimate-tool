import { useState } from 'react';
import { AddButton, EditButton, Form, ViewButton } from '@/components';
import { FormDialogProps } from './Form.Dialog.d';

export const FormDialog = <TDataType,>(props: FormDialogProps<TDataType>) => {
  const { mode, defaultValues, onSubmit, fields, sections, title } = props;

  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {mode === 'Create' && <AddButton onClick={handleClick} />}
      {mode === 'Edit' && <EditButton onClick={handleClick} />}
      {mode === 'View' && <ViewButton onClick={handleClick} />}
      <Form
        open={isOpen}
        onClose={handleClose}
        mode={mode}
        defaultValues={defaultValues}
        onSubmit={onSubmit}
        fields={fields}
        sections={sections}
        title={title}
      />
    </>
  );
};

export default FormDialog;
