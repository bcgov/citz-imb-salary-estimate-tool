import { Button as ButtonMui, ButtonProps } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const AddButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <ButtonMui color="info" onClick={onClick}>
      <AddCircleOutlineIcon sx={{ color: 'white' }} />
    </ButtonMui>
  );
};

export default AddButton;
