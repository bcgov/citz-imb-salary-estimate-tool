import { Stack } from '@mui/material';
import { Button } from './Button';

export const SubmitCancelButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" type="submit">
        Submit
      </Button>
      <Button variant="outlined" type="reset">
        Cancel
      </Button>
    </Stack>
  );
};

export default SubmitCancelButton;
