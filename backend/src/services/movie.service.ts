import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieDTO } from 'src/dto/movie.dto';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
  ) {}

  async findAll (): Promise<Movie[]> {
    return await this.movieRepo.find();
  }

  async findOne (movieId: number): Promise<Movie> {
    return await this.movieRepo.findOneBy({movieId: movieId})
  }

  async create (movie: MovieDTO): Promise<Movie> {
    return await this.movieRepo.save(movie)
  }

  async update(movieId: number, movie: MovieDTO): Promise<UpdateResult> {
    return await this.movieRepo.update(movieId, movie);
  }

  async delete(movieId: number): Promise<DeleteResult> {
    return await this.movieRepo.delete(movieId);
  }
}

