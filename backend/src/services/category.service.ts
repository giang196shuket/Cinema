import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDTO, UpdateCategoryDTO } from 'src/dto/category.dto';
import { CreateMovieDTO, UpdateMovieDTO } from 'src/dto/movie.dto';
import { Category } from 'src/entities/category.entity';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepo.find();
  }

  async findOne(categoryId: number): Promise<Category> {
    return await this.categoryRepo.findOneBy({ categoryId: categoryId });
  }

  async create (category: CreateCategoryDTO): Promise<Category> {
    return await this.categoryRepo.save(category);
  }

  async update(categoryId: number, category: UpdateCategoryDTO): Promise<UpdateResult> {
    return await this.categoryRepo.update(categoryId, category);
  }

  async delete(categoryId: number): Promise<DeleteResult> {
    return await this.categoryRepo.delete(categoryId);
  }
}
