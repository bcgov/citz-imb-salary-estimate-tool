import { Button as ButtonMui, ButtonProps } from '@mui/material';
import PreviewIcon from '@mui/icons-material/Preview';

export const ViewButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <ButtonMui color="primary" onClick={onClick}>
      <PreviewIcon />
    </ButtonMui>
  );
};

export default ViewButton;
