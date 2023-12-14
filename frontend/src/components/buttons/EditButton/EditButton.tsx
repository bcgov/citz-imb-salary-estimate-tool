import { Button as ButtonMui, ButtonProps } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export const EditButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <ButtonMui color="primary" onClick={onClick}>
      <EditIcon />
    </ButtonMui>
  );
};

export default EditButton;
