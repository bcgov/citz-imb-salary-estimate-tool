import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common';

@Entity()
export class SalaryData extends BaseEntity {
  @Column()
  organization!: string;

  @Column()
  program!: string;

  @Column()
  program_division!: string;

  @Column()
  position_number!: string;

  @Column()
  title!: string;

  @Column()
  job_code!: string;

  @Column()
  classification!: string;

  @Column()
  appointment!: string;

  @Column()
  schedule!: string;

  @Column()
  supervisor_position_number!: string;

  @Column()
  employee_id!: string;

  @Column()
  employee_job_code!: string;

  @Column()
  employee_classification!: string;

  @Column()
  step!: number;

  @Column()
  position_job_code_max_annual_rate!: number;

  @Column()
  employee_job_code_max_annual_rate!: number;

  @Column()
  abbr!: string;

  @Column()
  ama!: string;
}
