import {
  CurrencyField,
  MultilineField,
  NumberField,
  SelectField,
  StatusField,
  TextField,
} from '@/components/fields';
import { ISelectionOptions } from '@/components/forms';

interface IFieldProps {
  type: string;
  name: string;
  label: string;
  hidden?: boolean;
  selectionOptions?: ISelectionOptions;
  required?: boolean;
  mode: 'Create' | 'Edit' | 'View';
}

export const Field = (props: IFieldProps) => {
  const { type, ...fieldProps } = props;

  switch (type) {
    case 'currency':
      return <CurrencyField {...fieldProps} />;
    case 'multiline':
      return <MultilineField {...fieldProps} />;
    case 'number':
      return <NumberField {...fieldProps} />;
    case 'select':
      return <SelectField {...fieldProps} />;
    case 'text':
      return <TextField {...fieldProps} />;
    case 'status':
      return <StatusField {...fieldProps} />;
    default:
      return <div>TODO: {type}</div>;
  }
};

Field.defaultProps = {
  hidden: false,
  selectionOptions: {},
  required: false,
};

export default Field;
