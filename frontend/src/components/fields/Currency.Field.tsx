import { FieldProps } from './FieldProps.d';

export const CurrencyField = (props: FieldProps) => {
  const { label, value } = props;
  return (
    <div>
      TODO: CurrencyField: {label as string} : {value as string}
    </div>
  );
};

export default CurrencyField;
