import { Stack } from '@mui/material';
import { Button } from '../Button/Button';

interface CloseButtonProps {
  onClose: () => void;
}

export const CloseButton = (props: CloseButtonProps) => {
  const { onClose } = props;

  return (
    <Stack direction="row" spacing={2} width="100%" justifyContent="center">
      <Button variant="contained" type="reset" onClick={onClose}>
        Close
      </Button>
    </Stack>
  );
};

export default CloseButton;
