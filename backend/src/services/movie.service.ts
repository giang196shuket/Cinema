import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { In, Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import { CreateMovieDTO, UpdateMovieDTO } from '../dto/movie.dto';
import { CategoryRepository } from '../repository/category.repository';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepo: Repository<Movie>,
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async findAll(): Promise<Movie[]> {
    return await this.movieRepo.find({ relations: ['categories'] });
  }

  async findOne(movieId: number): Promise<Movie> {
    return await this.movieRepo.findOne({
      where: { movieId },
      relations: ['categories'],
    });
  }

  async create(movieDto: CreateMovieDTO): Promise<Movie> {
    const { categoryIds, ...movieRest } = movieDto;

    const categories = await this.categoryRepository.findBy({
      categoryId: In(categoryIds),
    });

    const movie = this.movieRepo.create({
      ...movieRest,
      categories,
    });

    return await this.movieRepo.save(movie);
  }

  async update(
    movieId: number,
    movieDto: UpdateMovieDTO,
  ): Promise<UpdateResult> {
    const { categoryIds, ...movieRest } = movieDto;

    const movie = await this.movieRepo.findOne({
      where: { movieId },
      relations: ['categories'],
    });

    // update many-to-many relationships
    await this.movieRepo
      .createQueryBuilder()
      .relation('categories')
      .of(movieId)
      .addAndRemove(categoryIds, movie.categories);

    // update movie
    return await this.movieRepo
      .createQueryBuilder()
      .update()
      .set(movieRest)
      .where('movieId = :movieId', { movieId })
      .execute();
  }

  async delete(movieId: number): Promise<DeleteResult> {
    return await this.movieRepo.delete(movieId);
  }
}
