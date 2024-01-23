import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common';

@Entity()
export class SalaryData extends BaseEntity {
  @Column({ nullable: true })
  organization!: string;

  @Column({ nullable: true })
  program!: string;

  @Column({ nullable: true })
  program_division!: string;

  @Column({ nullable: true })
  position_number!: string;

  @Column({ nullable: true })
  title!: string;

  @Column({ nullable: true })
  job_code!: string;

  @Column({ nullable: true })
  classification!: string;

  @Column({ nullable: true })
  appointment!: string;

  @Column({ nullable: true })
  schedule!: string;

  @Column({ nullable: true })
  supervisor_position_number!: string;

  @Column({ nullable: true })
  employee_id!: string;

  @Column({ nullable: true })
  employee_job_code!: string;

  @Column({ nullable: true })
  employee_classification!: string;

  @Column({ nullable: true })
  step!: number;

  @Column({ nullable: true })
  position_job_code_max_annual_rate!: number;

  @Column({ nullable: true })
  employee_job_code_max_annual_rate!: number;

  @Column({ nullable: true })
  abbr!: string;

  @Column({ nullable: true })
  ama!: string;
}
