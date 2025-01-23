import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';

export class CreateTheaterDTO {
  @ApiProperty()
  theaterName: string;

  @ApiProperty()
  theaterAddress: string;

  @ApiProperty()
  theaterImage: string;
}

export class UpdateTheaterDTO {
  @ApiProperty()
  theaterName: string;

  @ApiProperty()
  theaterAddress: string;

  @ApiProperty()
  theaterImage: string;

  @ApiProperty()
  movieActive: boolean;
}
