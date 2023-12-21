import papa from 'papaparse';

export interface ISalaryDataModel {
  id?: number;
  organization?: string;
  program?: string;
  program_division?: string;
  position_number?: number;
  title?: string;
  job_code?: number;
  classification?: string;
  appointment?: string;
  schedule?: string;
  supervisor_position_number?: number;
  employee_id?: number;
  employee_job_code?: number;
  employee_classification?: string;
  step?: number;
  position_job_code_max_annual_rate?: number;
  employee_job_code_max_annual_rate?: number;
  abbr?: number;
  ama?: number;
  created_at?: Date;
}

/**
 * @description Takes a CSV file and converts it into a string for processing.
 * @param {File} file The incoming CSV file.
 * @returns {Promise<string>} A promise of the converted string.
 * @author dbarkowsky
 */
export const csvFileToString = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target && event.target.result) {
        const csvData = (event.target.result as string)
          .replace(/\r\n/g, '\n')
          .replace(/^,+$/gm, '');
        resolve(csvData);
      } else {
        reject(new Error('Failed to read file.'));
      }
    };

    reader.onerror = (event) => {
      reject(
        new Error(
          `Error reading file: ${
            event.target?.error?.message || 'Unknown error'
          }`
        )
      );
    };

    reader.readAsText(file);
  });
};

/**
 * @description Combines each step in CSV utils to convert from CSV to Property Model.
 * @param {File} file The incoming CSV file.
 * @returns {IPropertyModel[]} An array of Property Model objects.
 * @author dbarkowsky
 */
export const csvFileToSalaryData = async (file: File) => {
  const string = await csvFileToString(file);
  //   const objects: ISalaryDataModel[] = await parseCSVString(string);
  //   return objects;
  return string;
};
