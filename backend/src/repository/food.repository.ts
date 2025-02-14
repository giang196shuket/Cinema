import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Food } from '../entities/food.entity';

export class FoodRepository extends Repository<Food> {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    super(Food, dataSource.createEntityManager());
  }
}
