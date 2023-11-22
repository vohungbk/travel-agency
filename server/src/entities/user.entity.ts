import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/mysql/base.entity';
import { PostEntity } from './post.entity';

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

  @Column({ default: null, nullable: true })
  refreshToken: string;

  @Column({ default: null, nullable: true })
  avatar: string;

  @Column({ default: true })
  isActive: boolean;

  @OneToMany(
    () => PostEntity,
    (post) => {
      post.user;
    },
  )
  posts: PostEntity[];
}
