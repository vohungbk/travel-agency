import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteResult, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { storageConfig } from 'src/helpers/config';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';

@ApiBearerAuth()
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(AuthGuard)
  @ApiQuery({ name: 'page' })
  @ApiQuery({ name: 'itemPerPage' })
  @ApiQuery({ name: 'search' })
  @Get()
  findAll(@Query() query: FilterUserDto): Promise<UserEntity[]> {
    return this.userService.findAll(query);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  findById(@Param('id') id: string): Promise<UserEntity> {
    return this.userService.findById(id);
  }

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() data: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(data);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  update(
    @Body() data: UpdateUserDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return this.userService.update(data, id);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.userService.delete(id);
  }

  @UseGuards(AuthGuard)
  @Post('upload-avatar')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: storageConfig('avatar'),
      fileFilter: (req, file, cb) => {
        const ext = extname(file.originalname);
        const allowExt = ['.jpg', '.png', '.jpeg'];
        if (!allowExt.includes(ext)) {
          req.fileValidationError = `Wrong extension type. Accepted file are: ${allowExt.toString()}`;
          cb(null, false);
        } else {
          const fileSize = parseInt(req.headers['content-length']);
          if (fileSize > 1024 * 1024 * 5) {
            req.fileValidationError =
              'File size to large. Accepted file size less than 5Mb ';
            cb(null, false);
          } else {
            cb(null, true);
          }
        }
      },
    }),
  )
  uploadAvatar(@Req() req: any, @UploadedFile() file: Express.Multer.File) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return this.userService.updateAvatar(
      req.user_data.id,
      file.destination + '/' + file.filename,
    );
  }
}
