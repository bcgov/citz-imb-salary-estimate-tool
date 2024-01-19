import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/base-entity';

@Entity()
export class Experience extends BaseEntity {
  @Column({ type: 'text', nullable: false })
  experience_level!: string;
}
