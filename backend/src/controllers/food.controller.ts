import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FoodService } from '../services/food.repository';
import { CreateFoodDTO, UpdateFoodDTO } from '../dto/food.dto';
import { Food } from '../entities/food.entity';

@ApiTags('Food')
@Controller('Food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  findAll(): Promise<Food[]> {
    return this.foodService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.foodService.findOne(id);
  }

  @Post()
  create(@Body() food: CreateFoodDTO) {
    return this.foodService.create(food);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() food: UpdateFoodDTO) {
    console.log(food)
    return this.foodService.update(id, food);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.foodService.delete(id);
  }
}
