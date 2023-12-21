/* eslint-disable prefer-promise-reject-errors */
import Papa from 'papaparse';
// TODO: Change names to how they appear in SETDATA.csv
export interface ISalaryDataModel {
  Organization?: string;
  Program?: string;
  Program_division?: string;
  Position_number?: number;
  Title?: string;
  Job_code?: number;
  Classification?: string;
  Appointment?: string;
  Schedule?: string;
  Supervisor_position_number?: number;
  Employee_id?: number;
  Employee_job_code?: number;
  Employee_classification?: string;
  Step?: number;
  Position_job_code_max_annual_rate?: number;
  Employee_job_code_max_annual_rate?: number;
  abbr?: number;
  ama?: number;
  created_at?: Date;
}

/**
 * @description Takes a string representing CSV content of a file and converts it to a 2D array.
 * @param {string} csvContent Content of CSV file
 * @returns {Promise<IPropertyModel[]>} Promise of 2D array of Property Models
 * @author dbarkowsky
 */
export const parseCSVString = async (
  csvContent: string
): Promise<ISalaryDataModel[]> => {
  return new Promise<ISalaryDataModel[]>((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const parsedCSV: Papa.ParseResult<any> = Papa.parse(csvContent, {
      header: true,
      delimiter: ',',
      newline: '\n',
      quoteChar: '"',
      skipEmptyLines: true,
    });
    console.log('Parsed: ', parsedCSV);
    if (parsedCSV.errors.length > 0) {
      reject({
        message: 'Error parsing CSV file',
        errors: parsedCSV.errors,
      });
    }
    if (parsedCSV.data.length < 1) {
      reject('CSV file is incomplete.');
    }

    // Transform raw objects into model that API expects
    const transformedData: ISalaryDataModel[] = parsedCSV.data.map(
      (salaryData: ISalaryDataModel) => ({
        organization: salaryData.Organization,
        program: salaryData.Program,
        program_division: salaryData.program_division,
        position_number: salaryData.position_number,
        title: salaryData.title,
        job_code: salaryData.job_code,
        classification: salaryData.classification,
        appointment: salaryData.appointment,
        schedule: salaryData.schedule,
        supervisor_position_number: salaryData.supervisor_position_number,
        employee_id: salaryData.employee_id,
        employee_job_code: salaryData.employee_job_code,
        employee_classification: salaryData.employee_classification,
        step: salaryData.step,
        position_job_code_max_annual_rate:
          salaryData.position_job_code_max_annual_rate,
        employee_job_code_max_annual_rate:
          salaryData.employee_job_code_max_annual_rate,
        abbr: salaryData.abbr,
        ama: salaryData.ama,
        created_at: Date,
      })
    );
    resolve(transformedData);
  });
};

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
  const objects: ISalaryDataModel[] = await parseCSVString(string);
  return objects;
};
