import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common';
import { Inquiry } from '../inquiry/entity';

@Entity()
export class Experience extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  experience_level!: string;

  @OneToMany(() => Inquiry, (inquiry) => inquiry.experience_level)
  inquiries!: Inquiry[];
}
