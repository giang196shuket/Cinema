import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodRepository } from '../repository/food.repository';
import { FoodService } from '../services/food.repository';
import { FoodController } from '../controllers/food.controller';
import { Food } from '../entities/food.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Food])],
  controllers: [FoodController],
  providers: [FoodService, FoodRepository],
  exports: [FoodRepository],
})
export class FoodModule {}
