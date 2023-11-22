import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';
import { UserEntity } from 'src/entities/user.entity';

export class UpdatePostDto extends BaseDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
  thumbnail: string;
  status: number;
  user: UserEntity;
}
