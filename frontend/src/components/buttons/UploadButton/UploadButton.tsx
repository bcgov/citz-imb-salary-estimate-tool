import { Button as ButtonMui, ButtonProps } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

export const UploadButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <ButtonMui color="info" onClick={onClick}>
      <UploadFileIcon sx={{ color: 'white' }} />
    </ButtonMui>
  );
};

export default UploadButton;
