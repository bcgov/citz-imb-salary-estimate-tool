import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @CreateDateColumn()
  createdOn!: Date;

  @UpdateDateColumn()
  lastUpdated!: Date;
}
