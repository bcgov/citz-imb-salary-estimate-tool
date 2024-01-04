/* eslint-disable prefer-promise-reject-errors */
import Papa from 'papaparse';
// TODO: Change names to how they appear in SETDATA.csv
export interface ISalaryDataModel {
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

export interface IExportedSalaryDataModel {
  Organization?: string;
  Program?: string;
  Program_division?: string;
  Position_number?: number;
  Title?: string;
  Job_code?: number;
  Classification?: string;
  ApptStatus?: string;
  Schedule?: string;
  Supervisor_position_number?: number;
  Employee_id?: number;
  Employee_job_code?: number;
  Employee_classification?: string;
  Step?: string;
  Position_job_code_max_annual_rate?: number;
  Employee_job_code_max_annual_rate?: number;
  ABBR?: string;
  AMA?: string;
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
      transformHeader(h) {
        return h.trim(' ');
      },
    });
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
      (salaryData: IExportedSalaryDataModel) => ({
        organization: salaryData.Organization,
        program: salaryData.Program,
        program_division: salaryData.Program_division,
        position_number: salaryData.Position_number,
        title: salaryData.Title,
        job_code: salaryData.Job_code,
        classification: salaryData.Classification,
        appointment: salaryData.ApptStatus,
        schedule: salaryData.Schedule,
        supervisor_position_number: salaryData.Supervisor_position_number,
        employee_id: salaryData.Employee_id,
        employee_job_code: salaryData.Employee_job_code,
        employee_classification: salaryData.Employee_classification,
        step: Number(salaryData.Step),
        position_job_code_max_annual_rate:
          salaryData.Position_job_code_max_annual_rate,
        employee_job_code_max_annual_rate:
          salaryData.Employee_job_code_max_annual_rate,
        abbr: Number(salaryData.ABBR?.replace('$', '')),
        ama: Number(salaryData.AMA?.replace('$', '')),
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
