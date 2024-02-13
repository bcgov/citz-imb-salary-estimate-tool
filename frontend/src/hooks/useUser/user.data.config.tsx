import { UserData } from './User.d';
import { UseDataFactoryProps } from '@/hooks/factories';

export const userDataConfig: UseDataFactoryProps<UserData> = {
  endPoint: 'user/all',
};
