import { IFormSection } from '../../components';

export const inquirySections: IFormSection[] = [
  {
    name: 'status',
    label: 'Status',
    gridItemProps: { xs: 12 },
  },
  {
    name: 'employee',
    label: 'Employee Information',
  },
  {
    name: 'position',
    label: 'Position Information',
  },
  {
    name: 'comment',
    label: 'Comments',
    gridItemProps: { xs: 12 },
  },
];

export default inquirySections;
