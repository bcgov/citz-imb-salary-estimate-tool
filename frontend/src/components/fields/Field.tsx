import { DateTime } from 'luxon';
import { CurrencyField } from './Currency.Field';
import { DateField } from './Date.Field';
import { DataOptions, FieldProps } from './FieldProps.d';
import { MultilineField } from './Multiline.Field';
import { NumberField } from './Number.Field';
import { SelectField } from './Select.Field';
import { StatusField } from './Status.Field';
import { TextField } from './Text.Field';

export const Field = (props: FieldProps) => {
  const { type, value, dataOptions, ...otherProps } = props;

  const defaultProps = { sx: { width: '100%' } };

  switch (type) {
    case 'currency':
      return (
        <CurrencyField
          value={value as number}
          {...defaultProps}
          {...otherProps}
        />
      );
    case 'date':
      return (
        <DateField
          value={value as DateTime | null}
          {...defaultProps}
          {...otherProps}
        />
      );
    case 'multiline':
      return (
        <MultilineField
          value={value as string}
          {...defaultProps}
          {...otherProps}
        />
      );
    case 'number':
      return (
        <NumberField
          value={value as number}
          {...defaultProps}
          {...otherProps}
        />
      );
    case 'select':
      return (
        <SelectField
          value={value as number}
          dataOptions={dataOptions as DataOptions}
          {...defaultProps}
          {...otherProps}
        />
      );
    case 'status':
      return (
        <StatusField
          value={value as number}
          {...defaultProps}
          {...otherProps}
        />
      );
    case 'text':
      return (
        <TextField value={value as string} {...defaultProps} {...otherProps} />
      );
    default:
      return <div>TODO: {type}</div>;
  }
};

Field.defaultProps = {
  required: false,
  dataOptions: {
    endPoint: '',
    labelFieldName: '',
    valueFieldName: '',
  },
};

export default Field;
