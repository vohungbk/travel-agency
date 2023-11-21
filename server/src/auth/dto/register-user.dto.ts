import { BaseDto } from 'src/common/base.dto';

export class RegisterUserDto extends BaseDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  refreshToken: string;
}
