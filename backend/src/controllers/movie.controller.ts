import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UpdateMovieDTO, CreateMovieDTO } from 'src/dto/movie.dto';
import { Movie } from 'src/entities/movie.entity';
import { MovieService } from 'src/services/movie.service';

@ApiTags('Movie')
@Controller('Movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {

  }

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll()
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.movieService.findOne(id);
  }

  @Post()
  create(@Body() Movie: CreateMovieDTO) {
    console.log("Movie", Movie);
    return this.movieService.create(Movie);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movie: UpdateMovieDTO) {
    return this.movieService.update(id, movie);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.movieService.delete(id);
  }
}

