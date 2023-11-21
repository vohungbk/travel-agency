import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../common/mysql/base.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  refreshToken: string;

  @Column({ default: true })
  isActive: boolean;
}
