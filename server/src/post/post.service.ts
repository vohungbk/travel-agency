import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { DeleteResult, Like, Repository, UpdateResult } from 'typeorm';
import { PostEntity } from 'src/entities/post.entity';
import { FilterPostDto } from './dto/filter-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}
  async create(userId: string, createPostDto: CreatePostDto) {
    const user = await this.userRepository.findOneBy({ id: userId });

    try {
      const res = await this.postRepository.save({ ...createPostDto, user });
      return await this.postRepository.findOneBy({ id: res.id });
    } catch (error) {
      throw new HttpException('Cannot create post', HttpStatus.BAD_REQUEST);
    }
  }

  async findAll(query: FilterPostDto): Promise<any> {
    const itemPerPage = Number(query.itemPerPage) || 10;
    const page = Number(query.page) || 1;
    const keyword = query.search || '';
    const category = query.category || '';
    const skip = (page - 1) * itemPerPage;

    const [res, total] = await this.postRepository.findAndCount({
      where: [
        { title: Like('%' + keyword + '%'), category: { id: category } },
        { description: Like('%' + keyword + '%'), category: { id: category } },
      ],
      order: { createdAt: 'DESC' },
      take: itemPerPage,
      skip,
      relations: { user: true, category: true },
      select: {
        user: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          avatar: true,
        },
        category: {
          id: true,
          name: true,
        },
      },
    });
    const lastPage = Math.ceil(total / itemPerPage);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;

    return {
      data: res,
      total,
      lastPage,
      nextPage,
      prevPage,
      currentPage: page,
    };
  }

  async findDetail(id: string): Promise<PostEntity> {
    return await this.postRepository.findOne({
      where: { id },
      relations: ['user', 'category'],
      select: {
        user: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          avatar: true,
        },
        category: {
          id: true,
          name: true,
        },
      },
    });
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
  ): Promise<UpdateResult> {
    return await this.postRepository.update(id, updatePostDto);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.postRepository.softDelete(id);
  }
}
