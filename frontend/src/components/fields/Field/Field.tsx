import { DateTime } from 'luxon';
import { CurrencyField } from '../CurrencyField/CurrencyField';
import { DateField } from '../DateField/DateField';
import { DataOptions, FieldProps } from '../../../types';
import { MultilineField } from '../MultilineField/MultilineField';
import { NumberField } from '../NumberField/NumberField';
import { SelectField } from '../SelectField/SelectField';
import { StatusField } from '../StatusField/StatusField';
import { TextField } from '../TextField/TextField';

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
