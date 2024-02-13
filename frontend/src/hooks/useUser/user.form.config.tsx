import { UseFormFactoryProps } from '@/hooks/factories';
import { UserData } from './User.d';

export const userFormConfig: UseFormFactoryProps<UserData> = {
  view: {
    show: false,
  },
  edit: {
    show: false,
  },
  remove: {
    show: false,
  },
  create: {
    show: false,
  },
};
