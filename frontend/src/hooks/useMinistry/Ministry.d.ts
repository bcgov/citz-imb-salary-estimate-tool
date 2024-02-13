import { InquiryData } from '../useInquiry/Inquiry.d';

export type MinistryData = {
  ministry_id: string;
  ministry_name: string;
  inquiries: InquiryData[];
};
