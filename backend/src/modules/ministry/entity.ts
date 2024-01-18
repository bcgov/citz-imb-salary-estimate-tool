import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base-entity';

@Entity()
export class Ministry extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  ministry_id!: string;

  @Column({ type: 'text', nullable: false })
  ministry_name!: string;
}
