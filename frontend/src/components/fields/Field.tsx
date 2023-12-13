// import { DateTime } from "luxon"
import { CurrencyField } from './Currency.Field';
// import { DateField } from "./Date.Field"
// import { DataOptions } from "./FieldProps.d"
import { MultilineField } from './Multiline.Field';
import { NumberField } from './Number.Field';
import { SelectField } from './Select.Field';
import { StatusField } from './Status.Field';
import { TextField } from './Text.Field';
import { ISelectionOptions } from '..';

interface IFieldProps {
  type: string;
  name: string;
  label: string;
  hidden?: boolean;
  selectionOptions?: ISelectionOptions;
}

export const Field = (props: IFieldProps) => {
  const { type, ...fieldProps } = props;

  switch (type) {
    case 'currency':
      return <CurrencyField {...fieldProps} />;
    // case "date":
    //   return (
    //     <DateField
    //       value={null}
    //       {...defaultProps}
    //       {...otherProps}
    //     />
    //   )
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
};

export default Field;
