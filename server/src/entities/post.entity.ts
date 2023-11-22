import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/mysql/base.entity';
import { UserEntity } from './user.entity';
import { CategoryEntity } from './category.entity';

@Entity('post')
export class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  thumbnail: string;

  @Column({ default: 1, type: 'int' })
  status: number;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.post)
  category: CategoryEntity;
}
