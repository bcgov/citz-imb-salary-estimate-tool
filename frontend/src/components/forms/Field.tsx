import { State } from '../../types';
import { StatusCell } from '../tablecells/StatusCell';

interface FieldProps {
  name: string;
  label: string;
  type: 'text' | 'number' | 'email' | 'password' | 'status';
  required?: boolean;
  value: unknown;
}

export const Field = (props: FieldProps) => {
  console.log({ props });
  const { type, value, ...otherProps } = props;

  switch (type) {
    case 'text':
      return <div>Hello There, {otherProps.name}</div>;
    case 'number':
      return <div>Hello There, {otherProps.name}</div>;
    case 'email':
      return <div>Hello There, {otherProps.name}</div>;
    case 'password':
      return <div>Hello There, {otherProps.name}</div>;
    case 'status':
      return <StatusCell value={value as State} {...otherProps} />;
    default:
      return null;
  }
};

Field.defaultProps = {
  required: false,
};

export default Field;
