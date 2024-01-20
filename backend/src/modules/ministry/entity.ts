import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common';

@Entity()
export class Ministry extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  ministry_id!: string;

  @Column({ type: 'text', nullable: false })
  ministry_name!: string;
}
