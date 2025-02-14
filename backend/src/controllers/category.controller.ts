import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CategoryService } from '../services/category.service';
import { Category } from '../entities/category.entity';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dto/category.dto';

@ApiTags('Category')
@Controller('Category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {

  }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() category: CreateCategoryDTO) {
    return this.categoryService.create(category);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movie: UpdateCategoryDTO) {
    return this.categoryService.update(id, movie);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.categoryService.delete(id);
  }
}

