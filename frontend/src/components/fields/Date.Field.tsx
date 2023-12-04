import { FieldProps } from './FieldProps.d';

export const DateField = (props: FieldProps) => {
  const { label, value } = props;
  let date: string;

  if (!value || value === '') {
    date = new Date().toISOString();
  } else {
    date = value as string;
  }

  return (
    <div>
      TODO: DateField {label as string} : {date}
    </div>
  );
};

export default DateField;
