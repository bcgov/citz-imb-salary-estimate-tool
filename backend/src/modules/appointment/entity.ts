import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common';
import { Inquiry } from '../inquiry/entity';

@Entity()
export class Appointment extends BaseEntity {
  @Column()
  type!: string;

  @OneToMany(() => Inquiry, (inquiry) => inquiry.appointment)
  inquiries!: Inquiry[];
}
