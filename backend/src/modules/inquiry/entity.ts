import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common';
import { InquiryStates } from '../state/States.enum';
import { Ministry } from '../ministry/entity';
import { Experience } from '../experience/entity';
import { SalaryRange } from '../salaryRange/entity';
import { Appointment } from '../appointment/entity';
import { Process } from '../process/entity';
import { User } from '../user/entity';

@Entity()
export class Inquiry extends BaseEntity {
  @Column()
  employee_id!: string;

  @Column({ type: 'enum', enum: InquiryStates, default: InquiryStates.DRAFT })
  state!: InquiryStates;

  @Column()
  inquiry_completion_date!: Date;

  @Column()
  candidate_first_name!: string;

  @Column()
  candidate_last_name!: string;

  @Column({ nullable: true })
  current_position_number!: string;

  @Column()
  current_position_title!: string;

  @ManyToOne(() => Ministry, (ministry) => ministry.inqiries)
  @JoinColumn()
  current_ministry!: Ministry;

  @Column()
  current_annual_salary!: number;

  @Column()
  current_mccf_classification_id!: string;

  @ManyToOne(() => Experience, (experience) => experience.inquiries)
  @JoinColumn()
  experience_level!: Experience;

  @Column()
  new_position_number!: string;

  @Column()
  new_position_title!: string;

  @ManyToOne(() => SalaryRange, (salaryRange) => salaryRange.inquiries)
  @JoinColumn()
  new_mccf_classification!: SalaryRange;

  @ManyToOne(() => Appointment, (appointment) => appointment.inquiries)
  @JoinColumn()
  appointment!: Appointment;

  @ManyToOne(() => Process, (process) => process.inquiries)
  @JoinColumn()
  process!: Process;

  @Column()
  salary_estimate!: number;

  @Column()
  hm_comment!: string;

  @Column()
  shr_comment!: string;

  @Column()
  adm_comment!: string;

  @ManyToOne(() => User, (user) => user.hm_inquiries)
  @JoinColumn()
  hm_user!: User;

  @ManyToOne(() => User, (user) => user.shr_inquiries)
  @JoinColumn()
  shr_user!: User;

  @ManyToOne(() => User, (user) => user.adm_inquiries)
  @JoinColumn()
  adm_user!: User;
}
