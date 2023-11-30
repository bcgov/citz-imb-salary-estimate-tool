import { Chip } from '@mui/material';

export const RolesCell = ({ value }: { value: string[] }) => {
  return (
    <>
      {value.map((item) => {
        return <Chip key={item} label={item} />;
      })}
    </>
  );
};

export default RolesCell;
