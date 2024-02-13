import { ExperienceData } from './Experience.d';
import { UseTableFactoryProps } from '@/hooks/factories';

export const experienceTableConfig: UseTableFactoryProps<ExperienceData> = {
  title: 'Experience',
  columns: [{ field: 'experience_level', headerName: 'Experience Level', width: 600 }],
};
