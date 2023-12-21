import Papa from 'papaparse';

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

    if (parsedCSV.errors.length > 0) {
      reject({
        message: 'Error parsing CSV file',
        errors: parsedCSV.errors,
      });
    }
    if (parsedCSV.data.length < 1) {
      reject('CSV file is incomplete.');
    }

    const getFiscalYear = (property: IExportedPropertyModel) => {
      const yearFromFields =
        property.Type === 'Building'
          ? property['Building Assessment Year']
          : property['Land Assessment Year'];
      return !yearFromFields || yearFromFields === ''
        ? `${new Date().getFullYear()}`
        : yearFromFields; // Default to current year if no year
    };

    const getAssessedValue = (property: IExportedPropertyModel) => {
      const assessedFromFields =
        property.Type === 'Building'
          ? property['Assessed Building Value']
          : property['Assessed Land Value'];
      return !assessedFromFields || assessedFromFields === ''
        ? '0'
        : assessedFromFields;
    };

    const getValueOrDefault = (
      incomingValue: string | undefined,
      defaultValue: string
    ) =>
      !incomingValue || incomingValue === ''
        ? `${defaultValue}`
        : incomingValue;
    // Transform raw objects into model that API expects
    const transformedData: ISalaryDataModel[] = parsedCSV.data.map(
      (property: IExportedPropertyModel) => ({
        parcelId: property.PID,
        pid: property.PID,
        pin: property.PIN ?? '',
        status: getValueOrDefault(property.Status, 'Active'), // Assume active if not specified
        fiscalYear: getFiscalYear(property),
        agency: '', // Not used in API. Leave blank.
        agencyCode: property.Ministry, // Names are misleading here.
        subAgency: property.Agency ?? '',
        propertyType: property.Type,
        localId: property['Local ID'] ?? '',
        name: property.Name,
        description: property.Description ?? '',
        classification: property.Classification,
        civicAddress: property.Address ?? '',
        city: getValueOrDefault(property.Location, '<blank>'), // Done to ensure something is passed to backend, empty string not enough
        postal: property.Postal ?? '',
        latitude: property.Latitude,
        longitude: property.Longitude,
        landArea: getValueOrDefault(property['Land Area'], '0'),
        landLegalDescription: property['Legal Description'] ?? '',
        buildingFloorCount: getValueOrDefault(
          property['Building Floor Count'],
          '1'
        ),
        buildingConstructionType: getValueOrDefault(
          property['Construction Type'],
          'Unknown'
        ),
        buildingPredominateUse: getValueOrDefault(
          property['Predominate Use'],
          'Unknown'
        ),
        buildingTenancy: property.Tenancy ?? '',
        buildingRentableArea: getValueOrDefault(property['Rentable Area'], '0'),
        assessed: getAssessedValue(property),
        netBook: getValueOrDefault(property['Netbook Value'], '0'),
        regionalDistrict: getValueOrDefault(property['Regional District'], ''),
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
