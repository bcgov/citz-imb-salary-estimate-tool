import { CurrencyField } from './Currency.Field';
import { DateField } from './Date.Field';
import { FieldProps } from './FieldProps.d';
import { NumberField } from './Number.Field';
import { StatusField } from './Status.Field';
import { TextField } from './Text.Field';

export const Field = (props: FieldProps) => {
  const { type, ...otherProps } = props;

  switch (type) {
    case 'currency':
      return <CurrencyField {...otherProps} />;
    case 'date':
      return <DateField {...otherProps} />;
    case 'number':
      return <NumberField {...otherProps} />;
    case 'status':
      return <StatusField {...otherProps} />;
    case 'text':
      return <TextField {...otherProps} />;
    default:
      return (
        <div>
          TODO: {type} : {otherProps.name}
        </div>
      );
  }
};

Field.defaultProps = {
  required: false,
};

export default Field;
