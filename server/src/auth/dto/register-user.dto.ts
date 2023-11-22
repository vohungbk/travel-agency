import { ApiProperty } from '@nestjs/swagger';
import { BaseDto } from 'src/common/base.dto';

export class RegisterUserDto extends BaseDto {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  isActive: boolean;
}
