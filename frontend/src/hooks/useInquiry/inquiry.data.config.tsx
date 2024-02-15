import { InquiryData } from './Inquiry.d';
import { UseDataFactoryProps } from '@/hooks/factories';

export const inquiryDataConfig: UseDataFactoryProps<InquiryData> = {
  endPoint: 'inquiry',
};
