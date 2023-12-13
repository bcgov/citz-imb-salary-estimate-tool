import { Stack } from '@mui/material';
import { Button } from '../Button/Button';

interface SubmitCancelButtonProps {
  onClose: () => void;
}

export const SubmitCancelButton = (props: SubmitCancelButtonProps) => {
  const { onClose } = props;

  return (
    <Stack direction="row" spacing={2} width="100%" justifyContent="center">
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button variant="outlined" type="reset" onClick={onClose}>
        Cancel
      </Button>
    </Stack>
  );
};

export default SubmitCancelButton;
