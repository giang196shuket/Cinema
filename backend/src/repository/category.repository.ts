import { DataSource, Repository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { InjectDataSource } from '@nestjs/typeorm';

export class CategoryRepository extends Repository<Category> {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    super(Category, dataSource.createEntityManager());
  }
}
