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
  console.log('useInquiry', inquiryData);
  const defaultValues = {};

  fieldsInquiry.forEach((field) => {
    defaultValues[field.name] = field.defaultValue;
  });

  const append = (data: InquiryData) => {
    console.log('useInquiry append', data);

    const newItem: InquiryData = {
      status_id: data.status_id,
      // inquiry_submission_date: data.inquiry_submission_date,
      // inquiry_completion_date: data.inquiry_completion_date,
      candidate_first_name: data.candidate_first_name,
      candidate_last_name: data.candidate_last_name,
      current_position_number: data.current_position_number,
      current_position_title: data.current_position_title,
      current_ministry_id: data.current_ministry_id,
      current_annual_salary: data.current_annual_salary,
      current_mccf_classification_id: data.current_mccf_classification_id,
      experience_level_id: data.experience_level_id,
      new_position_number: data.new_position_number,
      new_position_title: data.new_position_title,
      new_mccf_classification_id: data.new_mccf_classification_id,
      appointment_type_id: data.appointment_type_id,
      process_type_id: data.process_type_id,
      salary_estimate: data.salary_estimate,
      hm_comment: data.hm_comment,
      shr_comment: data.shr_comment,
      adm_comment: data.adm_comment,
    };

    inquiryData.append(data);
  };

  return {
    ...inquiryData,
    append,
    columns: columnsInquiry,
    formOptions: { defaultValues, fields: fieldsInquiry },
  };
};

export default useInquiry;
