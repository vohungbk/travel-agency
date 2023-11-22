import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  register(@Body() registerData: RegisterUserDto): Promise<UserEntity> {
    return this.authService.register(registerData);
  }

  @Post('/login')
  @ApiResponse({ status: 201, description: 'Login successfully' })
  @ApiResponse({ status: 401, description: 'Login fail' })
  login(@Body() data: LoginUserDto): Promise<string> {
    return this.authService.login(data);
  }

  @Post('/refresh-token')
  refreshToken(@Body() { refreshToken }): Promise<any> {
    return this.authService.refreshToken(refreshToken);
  }
}
