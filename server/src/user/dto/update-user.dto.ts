import { BaseDto } from 'src/common/base.dto';

export class UpdateUserDto extends BaseDto {
  firstName: string;
  lastName: string;
  isActive: boolean;
}
