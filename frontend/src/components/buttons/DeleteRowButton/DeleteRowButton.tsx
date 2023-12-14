import { Button as ButtonMui, ButtonProps } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export const DeleteRowButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <ButtonMui color="primary" onClick={onClick}>
      <DeleteForeverIcon />
    </ButtonMui>
  );
};

export default DeleteRowButton;
