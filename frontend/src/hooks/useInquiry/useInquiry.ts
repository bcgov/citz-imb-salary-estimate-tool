/**
 * This hook is to specify the endpoint and the columns for the Inquiry page.
 * It is also the place to transform the data sent to or returned from the backend.
 */
import { useDataFactory } from '../useDataFactory/useData.Factory';
import { columnsInquiry } from './inquiry.columns';
import { fieldsInquiry } from './inquiry.fields';
import { InquiryData } from '../../types';

export const useInquiry = (dataId: string = '') => {
  const endPoint = 'inquiry';
  const inquiryData = useDataFactory<InquiryData>({ endPoint, dataId });

  const defaultValues = {};

  fieldsInquiry.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  const append = (data: InquiryData) => {
    console.log('useInquiry', data);

    const newItem: InquiryData = {
      status_id: data.status_id,
      // inquiry_submission_date: data.inquiry_submission_date,
      // inquiry_completion_date: data.inquiry_completion_date,
      candidate_first_name: data.candidate_first_name,
      candidate_last_name: data.candidate_last_name,
      current_position_number: data.current_position_number,
      current_position_title: data.current_position_title,
      current_ministry_id: null,
      current_annual_salary: data.current_annual_salary,
      current_mccf_classification_id: null,
      experience_level_id: 2,
      new_position_number: data.new_position_number,
      new_position_title: data.new_position_title,
      new_mccf_classification_id: 4,
      appointment_type_id: 1,
      process_type_id: 2,
      salary_estimate: data.salary_estimate,
      hm_comment: data.hm_comment,
      shr_comment: data.shr_comment,
      adm_comment: data.adm_comment,
    };

    inquiryData.append(newItem);
  };

  return {
    ...inquiryData,
    append,
    columns: columnsInquiry,
    formOptions: { defaultValues, fields: fieldsInquiry },
  };
};

export default useInquiry;
