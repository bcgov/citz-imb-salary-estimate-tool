export type InquiryData = {
  id?: number;
  status_id: number;
  // status Status @relation(fields: [status_id], references: [id])
  inquiry_submission_date: Date;
  inquiry_completion_date?: Date;
  candidate_first_name: string;
  candidate_last_name: string;
  candidate_name?: string;
  current_position_number?: string;
  current_position_title?: string;
  current_ministry_id?: string;
  // ministry Ministry ? @relation(fields: [current_ministry_id], references: [id])
  current_annual_salary?: number;
  current_mccf_classification_id?: number;
  // old_salary_range SalaryRange ? @relation(fields: [current_mccf_classification_id], references: [id], name: "old")
  experience_level_id: number;
  // experience Experience @relation(fields: [experience_level_id], references: [id])
  new_position_number: string;
  new_position_title: string;
  new_mccf_classification_id: number;
  // new_salary_range SalaryRange @relation(fields: [new_mccf_classification_id], references: [id], name: "new")
  appointment_type_id: number;
  // appointment Appointment @relation(fields: [appointment_type_id], references: [id])
  process_type_id: number;
  // process Process @relation(fields: [process_type_id], references: [id])
  salary_estimate?: number;
  hm_comment?: string;
  shr_comment?: string;
  adm_comment?: string;
  hm_user_id?: string;
  // hm_user User ? @relation(fields: [hm_user_id], references: [guid], name: "hm")
  shr_user_id?: string;
  // shr_user User ? @relation(fields: [shr_user_id], references: [guid], name: "shr")
  adm_user_id?: string;
  // adm_user User ? @relation(fields: [adm_user_id], references: [guid], name: "adm")
};
