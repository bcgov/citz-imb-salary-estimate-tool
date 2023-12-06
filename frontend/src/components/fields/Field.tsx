import { FormControl } from '@mui/material';
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
  const { type, label, value, onChange, name, required, dataOptions } = props;

  let fieldComponent = (
    <div>
      TODO: {type} : {name}
    </div>
  );

  switch (type) {
    case 'currency':
      return (
        <CurrencyField
          label={label}
          value={value as number}
          onChange={onChange}
        />
      );
      break;
    case 'date':
      fieldComponent = (
        <DateField
          label={label}
          value={value as DateTime | null}
          onChange={onChange}
        />
      );
      break;
    case 'multiline':
      fieldComponent = (
        <MultilineField
          label={label}
          value={value as string}
          onChange={onChange}
        />
      );
      break;
    case 'number':
      fieldComponent = (
        <NumberField
          label={label}
          value={value as number}
          onChange={onChange}
        />
      );
      break;
    case 'select':
      return (
        <SelectField
          label={label}
          value={value as number}
          onChange={onChange}
          dataOptions={dataOptions as DataOptions}
        />
      );
      break;
    case 'status':
      return (
        <StatusField
          label={label}
          value={value as number}
          onChange={onChange}
        />
      );
      break;
    case 'text':
      fieldComponent = (
        <TextField label={label} value={value as string} onChange={onChange} />
      );
      break;

    default:
      break;
  }

  return (
    <FormControl margin="normal" required={required} sx={{ m: 1 }}>
      {fieldComponent}
    </FormControl>
  );
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
