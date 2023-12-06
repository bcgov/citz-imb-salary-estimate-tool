import { ButtonProps } from '@mui/material';
import { Button } from './Button';

export const SubmitButton = (props: ButtonProps) => {
  const { onClick } = props;
  return (
    <Button variant="contained" color="info" onClick={onClick} type="submit">
      Submit
    </Button>
  );
};

export default SubmitButton;
