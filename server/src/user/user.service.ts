import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { DeleteResult, Like, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';
import { FilterUserDto } from './dto/filter-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(query: FilterUserDto): Promise<any> {
    const itemPerPage = Number(query.itemPerPage) || 10;
    const page = Number(query.page) || 1;
    const keyword = query.search || '';
    const skip = (page - 1) * itemPerPage;
    const [res, total] = await this.userRepository.findAndCount({
      order: { createdAt: 'DESC' },
      where: [
        { firstName: Like('%' + keyword + '%') },
        { lastName: Like('%' + keyword + '%') },
        { email: Like('%' + keyword + '%') },
      ],
      take: itemPerPage,
      skip,
    });
    const lastPage = Math.ceil(total / itemPerPage);
    const nextPage = page + 1 > lastPage ? null : page + 1;
    const prevPage = page - 1 < 1 ? null : page - 1;

    return {
      data: res,
      total,
      currentPage: page,
      prevPage,
      nextPage,
      lastPage,
    };
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.userRepository.save({
      ...createUserDto,
      password: hashPassword,
    });
  }

  async update(
    updateUserDto: UpdateUserDto,
    id: string,
  ): Promise<UpdateResult> {
    return await this.userRepository.update(id, updateUserDto);
  }

  async delete(id: string): Promise<DeleteResult> {
    return await this.userRepository.softDelete(id);
  }

  async updateAvatar(id: string, avatar: string): Promise<UpdateResult> {
    return await this.userRepository.update(id, { avatar });
  }
}
