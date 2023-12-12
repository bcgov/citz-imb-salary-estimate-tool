import { Box, Step, StepLabel, Stepper } from '@mui/material';
import { State } from '../../types';

interface IStatusStepperProps {
  status: State;
}

export const StatusStepper = (props: IStatusStepperProps) => {
  const { status } = props;

  // eslint-disable-next-line no-restricted-globals
  const stateKeys = Object.keys(State).filter((key) => isNaN(Number(key)));

  return (
    <Box>
      <Stepper activeStep={status - 1} alternativeLabel>
        {stateKeys.map((key) => {
          return (
            <Step key={key}>
              <StepLabel sx={{ textTransform: 'capitalize' }}>{key}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
};

export default StatusStepper;
