import { Stack } from '@mui/material';
import { Button } from '../Button/Button';

interface ConfirmCancelButtonProps {
  onClose: () => void;
  onClick: () => void;
}

export const ConfirmCancelButton = (props: ConfirmCancelButtonProps) => {
  const { onClose, onClick } = props;

  return (
    <Stack direction="row" spacing={2} width="100%" justifyContent="center">
      <Button variant="contained" type="button" onClick={onClick}>
        Confirm
      </Button>
      <Button variant="outlined" type="reset" onClick={onClose}>
        Cancel
      </Button>
    </Stack>
  );
};

export default ConfirmCancelButton;
