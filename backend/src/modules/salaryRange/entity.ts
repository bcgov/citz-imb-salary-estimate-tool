import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common';
import { Inquiry } from '../inquiry/entity';

@Entity()
export class SalaryRange extends BaseEntity {
  @Column()
  band!: string;

  @Column()
  minimum_salary!: number;

  @Column()
  maximum_salary!: number;

  @OneToMany(() => Inquiry, (inquiry) => inquiry.new_mccf_classification)
  inquiries!: Inquiry[];
}
