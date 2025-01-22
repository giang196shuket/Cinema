import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCategoryDTO, UpdateCategoryDTO } from 'src/dto/category.dto';
import { UpdateMovieDTO, CreateMovieDTO } from 'src/dto/movie.dto';
import { Category } from 'src/entities/category.entity';
import { CategoryService } from 'src/services/category.service';
import { MovieService } from 'src/services/movie.service';

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
  create(@Body() Category: CreateCategoryDTO) {
    return this.categoryService.create(Category);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movie: UpdateCategoryDTO) {
    return this.categoryService.update(id, movie);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.categoryService.delete(id);
  }
}

