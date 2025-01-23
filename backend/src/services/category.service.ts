import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dto/category.dto';
import { Category } from '../entities/category.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository, // Injecting the custom CategoryRepository
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  async findOne(categoryId: number): Promise<Category> {
    return this.categoryRepository.findOneBy({ categoryId: categoryId });
  }

  async create(category: CreateCategoryDTO): Promise<Category> {
    return this.categoryRepository.save(category);
  }

  async update(
    categoryId: number,
    category: UpdateCategoryDTO,
  ): Promise<UpdateResult> {
    return this.categoryRepository.update(categoryId, category);
  }

  async delete(categoryId: number): Promise<DeleteResult> {
    return this.categoryRepository.delete(categoryId);
  }
}
