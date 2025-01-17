import { ApiProperty } from '@nestjs/swagger';

export class MovieDTO {
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
  movieStartDate: Date;
}
