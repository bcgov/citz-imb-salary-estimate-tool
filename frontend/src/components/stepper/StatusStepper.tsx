import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { State } from '@/types';

interface IStatusStepperProps {
  status: State;
  hidden?: boolean;
}

export const StatusStepper = (props: IStatusStepperProps) => {
  const { status, hidden } = props;

  const sx = hidden ? { display: 'none' } : {};

  // eslint-disable-next-line no-restricted-globals
  const stateKeys = Object.keys(State).filter((key) => isNaN(Number(key)));

  return (
    <Box>
      <Stepper activeStep={status - 1} alternativeLabel>
        {stateKeys.map((key) => {
          return (
            <Step sx={sx} key={key}>
              <StepLabel sx={{ textTransform: 'capitalize' }}>{key}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

StatusStepper.defaultProps = {
  hidden: false,
};

export default StatusStepper;
