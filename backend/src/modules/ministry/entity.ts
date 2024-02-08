import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common';
import { Inquiry } from '../inquiry/entity';

@Entity()
export class Ministry extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  ministry_id!: string;

  @Column({ type: 'text', nullable: false })
  ministry_name!: string;

  @OneToMany(() => Inquiry, (inquiry) => inquiry.current_ministry)
  inquiries!: Inquiry[];
}
