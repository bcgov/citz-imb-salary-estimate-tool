import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common';
import { InquiryStates } from '../state/States.enum';
import { Ministry } from '../ministry/entity';
import { Experience } from '../experience/entity';
import { MCCF_Classification } from '../mccf_classification/entity';
import { Appointment } from '../appointment/entity';
import { Process } from '../process/entity';
import { User } from '../user/entity';

@Entity()
export class Inquiry extends BaseEntity {
  @Column({ type: 'enum', enum: InquiryStates, default: InquiryStates.DRAFT })
  state!: InquiryStates;

  @Column({ nullable: true })
  inquiry_completion_date!: Date;

  @Column()
  candidate_first_name!: string;

  @Column()
  candidate_last_name!: string;

  @Column({ nullable: true })
  current_position_number!: string;

  @Column()
  current_position_title!: string;

  @ManyToOne(() => Ministry, (ministry) => ministry.inquiries)
  @JoinColumn({ name: 'current_ministry_id' })
  current_ministry!: Ministry;

  @Column({ name: 'current_ministry_id' })
  current_ministry_id!: string;

  @Column()
  current_annual_salary!: number;

  @Column()
  current_mccf_classification!: string;

  @ManyToOne(() => Experience, (experience) => experience.inquiries)
  @JoinColumn({ name: 'experience_level_id' })
  experience_level!: Experience;

  @Column({ name: 'experience_level_id' })
  experience_level_id!: string;

  @Column()
  new_position_number!: string;

  @Column()
  new_position_title!: string;

  @ManyToOne(() => MCCF_Classification, (classification) => classification.inquiries)
  @JoinColumn({ name: 'new_mccf_classification_id' })
  new_mccf_classification!: MCCF_Classification;

  @Column({ name: 'new_mccf_classification_id' })
  new_mccf_classification_id!: string;

  @ManyToOne(() => Appointment, (appointment) => appointment.inquiries)
  @JoinColumn({ name: 'appointment_id' })
  appointment!: Appointment;

  @Column({ name: 'appointment_id' })
  appointment_id!: string;

  @ManyToOne(() => Process, (process) => process.inquiries)
  @JoinColumn({ name: 'process_id' })
  process!: Process;

  @Column({ name: 'process_id' })
  process_id!: string;

  @Column()
  salary_estimate!: number;

  @Column()
  hm_comment!: string;

  @Column()
  shr_comment!: string;

  @Column()
  adm_comment!: string;

  @ManyToOne(() => User, (user) => user.hm_inquiries, { nullable: true })
  @JoinColumn({ name: 'hm_user_id' })
  hm_user!: User;

  @Column({ name: 'hm_user_id', nullable: true })
  hm_user_id!: string;

  @ManyToOne(() => User, (user) => user.shr_inquiries, { nullable: true })
  @JoinColumn({ name: 'shr_user_id' })
  shr_user!: User;

  @Column({ name: 'shr_user_id', nullable: true })
  shr_user_id!: string;

  @ManyToOne(() => User, (user) => user.adm_inquiries, { nullable: true })
  @JoinColumn({ name: 'adm_user_id' })
  adm_user!: User;

  @Column({ name: 'adm_user_id', nullable: true })
  adm_user_id!: string;
}
