import { Stack, ButtonGroup } from '@mui/material';
import { Button } from './Button';

export const SubmitCancelButton = () => {
  return (
    <Stack direction="row" spacing={2}>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button type="submit">Submit</Button>
        <Button type="reset">Cancel</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default SubmitCancelButton;
