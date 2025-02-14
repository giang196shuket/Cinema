import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';

export class CreateFoodDTO {
  @ApiProperty()
  foodName: string;

  @ApiProperty()
  foodPrice: number;

  @ApiProperty()
  foodImage: string;

  @ApiProperty()
  foodDescription: string
}

export class UpdateFoodDTO {
  @ApiProperty()
  foodName: string;

  @ApiProperty()
  foodPrice: number;

  @ApiProperty()
  foodImage: string;

  @ApiProperty()
  foodDescription: string

  @ApiProperty()
  foodActive: boolean;
}
