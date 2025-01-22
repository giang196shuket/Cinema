import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieDTO, UpdateMovieDTO } from 'src/dto/movie.dto';
import { Category } from 'src/entities/category.entity';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';
import { UpdateResult,InsertResult , DeleteResult } from 'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
    @InjectRepository(Movie)
    private readonly categoryRepo : Repository<Category>,
  ) {}

  async findAll(): Promise<Movie[]> {
    return await this.movieRepo.find();
  }

  async findOne(movieId: number): Promise<Movie> {
    return await this.movieRepo.findOneBy({ movieId: movieId });
  }

  async create (movie: CreateMovieDTO): Promise<Movie> {
    console.log('movie', movie);
    return await this.movieRepo.save(movie);
  }


  async update(movieId: number, movie: UpdateMovieDTO): Promise<UpdateResult> {
    // return await this.movieRepo.update(movieId, movie);
    return
  }

  async delete(movieId: number): Promise<DeleteResult> {
    return await this.movieRepo.delete(movieId);
  }
}
