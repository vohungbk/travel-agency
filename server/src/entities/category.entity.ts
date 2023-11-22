import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/mysql/base.entity';
import { PostEntity } from './post.entity';

@Entity('category')
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ default: 1, type: 'int' })
  status: number;

  @OneToMany(() => PostEntity, (post) => post.category)
  post: PostEntity;
}
