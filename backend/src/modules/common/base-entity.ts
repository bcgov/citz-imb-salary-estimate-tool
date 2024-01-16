import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id!: number;

  @Column({ type: 'timestamp', nullable: false, default: () => 'NOW()' })
  createdOn!: Date;

  @Column({ type: 'timestamp', nullable: false, default: () => 'NOW()' })
  lastUpdated!: Date;
}
