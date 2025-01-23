import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from '../services/movie.service';
import { Movie } from '../entities/movie.entity';
import { MovieController } from '../controllers/movie.controller';
import { CategoryModule } from './category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), CategoryModule],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MovieModule {}
