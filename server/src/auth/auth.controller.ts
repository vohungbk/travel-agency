import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthService } from './auth.service';
import { UserEntity } from 'src/entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() registerData: RegisterUserDto): Promise<UserEntity> {
    return this.authService.register(registerData);
  }

  @Post('/login')
  login(@Body() data: LoginUserDto): Promise<string> {
    return this.authService.login(data);
  }

  @Post('/refresh-token')
  refreshToken(@Body() { refreshToken }): Promise<any> {
    return this.authService.refreshToken(refreshToken);
  }
}
