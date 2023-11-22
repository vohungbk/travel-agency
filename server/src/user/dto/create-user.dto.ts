import { BaseDto } from 'src/common/base.dto';

export class CreateUserDto extends BaseDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
