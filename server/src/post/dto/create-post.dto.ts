import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';
import { CategoryEntity } from 'src/entities/category.entity';
import { UserEntity } from 'src/entities/user.entity';

export class CreatePostDto extends BaseDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
  thumbnail: string;
  status: number;
  user: UserEntity;

  @IsNotEmpty()
  category: CategoryEntity;
}
