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
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { AuthGuard } from 'src/auth/auth.guard';
import { storageConfig } from 'src/helpers/config';
import { CreatePostDto } from './dto/create-post.dto';
import { FilterPostDto } from './dto/filter-post.dto';
import { PostService } from './post.service';
import { PostEntity } from 'src/entities/post.entity';
import { UpdatePostDto } from './dto/update-post.dto';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @UseGuards(AuthGuard)
  @Post()
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      storage: storageConfig('post'),
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
  create(
    @Req() req: any,
    @Body() createPostDto: CreatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    if (!file) {
      throw new BadRequestException('File is required');
    }
    return this.postService.create(req['user_data'].id, {
      ...createPostDto,
      thumbnail: file.destination + '/' + file.filename,
    });
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Query() query: FilterPostDto): Promise<any> {
    return this.postService.findAll(query);
  }

  @UseGuards(AuthGuard)
  @Get('/:id')
  findDetail(@Param('id') id: string): Promise<PostEntity> {
    return this.postService.findDetail(id);
  }

  @UseGuards(AuthGuard)
  @Put('/:id')
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      storage: storageConfig('post'),
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
  update(
    @Param('id') id: string,
    @Req() req: any,
    @Body() updatePostDto: UpdatePostDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<UpdateResult> {
    if (req.fileValidationError) {
      throw new BadRequestException(req.fileValidationError);
    }
    if (file) {
      updatePostDto.thumbnail = file.destination + '/' + file.filename;
    }

    return this.postService.update(id, updatePostDto);
  }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.postService.delete(id);
  }
}
