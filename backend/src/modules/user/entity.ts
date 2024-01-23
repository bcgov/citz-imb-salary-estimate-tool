import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../common';
import { Inquiry } from '../inquiry/entity';

@Entity()
export class User extends BaseEntity {
  @Column({ type: 'text', nullable: true })
  guid!: string | null;

  @Column({ type: 'text', nullable: true })
  username!: string | null;

  @Column({ type: 'text', nullable: true })
  email!: string | null;

  @Column({ type: 'text', nullable: true })
  firstName!: string | null;

  @Column({ type: 'text', nullable: true })
  lastName!: string | null;

  @Column({ type: 'text', nullable: true })
  displayName!: string | null;

  @Column({ type: 'text', array: true, nullable: true })
  roles!: string[] | null;

  @Column({ type: 'timestamp', nullable: true })
  lastLogin!: Date | null;

  @OneToMany(() => Inquiry, (inquiry) => inquiry.hm_user)
  hm_inquiries!: Inquiry[];

  @OneToMany(() => Inquiry, (inquiry) => inquiry.shr_user)
  shr_inquiries!: Inquiry[];

  @OneToMany(() => Inquiry, (inquiry) => inquiry.adm_user)
  adm_inquiries!: Inquiry[];
}
