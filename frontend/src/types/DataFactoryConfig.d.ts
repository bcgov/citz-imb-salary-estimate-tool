import { GridColDef } from '@mui/x-data-grid';
import { IFormSection, IFormField } from '@/components';

export type DataFactoryConfig = {
  endPoint: string;
  table: {
    title: string;
    columns: GridColDef[];
  };
  forms: {
    sections: IFormSection[];
    fields: IFormField[];
  };
};
