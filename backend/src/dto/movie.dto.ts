import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { Category } from 'src/entities/category.entity';

export class CreateMovieDTO {
  @ApiProperty()
  movieId: number;

  @ApiProperty()
  movieName: string;

  @ApiProperty()
  movieDescription: string;

  @ApiProperty()
  movieTrailer: string;

  @ApiProperty()
  movieImage: string;

  @ApiProperty()
  movieThumbnail: string;
  
  @ApiProperty()
  movieDuration: number;

  @ApiProperty({format:"date"})
  movieStartDate: Date;

  @ApiProperty({ isArray: true, nullable: false, type: () => Number })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Number) 
  @ArrayNotEmpty()
  categories: Category[]
}
export class UpdateMovieDTO {
  @ApiProperty()
  movieName: string;

  @ApiProperty()
  movieDescription: string;

  @ApiProperty()
  movieTrailer: string;

  @ApiProperty()
  movieImage: string;

  @ApiProperty()
  movieThumbnail: string;
  
  @ApiProperty()
  movieDuration: number;

  @ApiProperty({format:"date"})
  movieStartDate: Date;

  @ApiProperty()
  boolean: boolean;

  @ApiProperty({ isArray: true, nullable: false, type: () => Category })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Category) 
  @ArrayNotEmpty()
  categories: Category[]
}

