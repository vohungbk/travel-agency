import { Controller, Get, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryEntity } from 'src/entities/category.entity';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('category')
export class CategoryController {
  constructor(private category: CategoryService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<CategoryEntity[]> {
    return this.category.findAll();
  }
}
