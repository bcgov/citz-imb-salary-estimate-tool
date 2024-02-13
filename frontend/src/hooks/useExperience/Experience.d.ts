import { InquiryData } from '../useInquiry/Inquiry.d';

export type ExperienceData = {
  id?: number;
  experience_level: string;
  inquiries: InquiryData[];
};
