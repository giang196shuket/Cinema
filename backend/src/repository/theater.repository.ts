import { DataSource, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { Theater } from '../entities/theater.entity';

export class TheaterRepository extends Repository<Theater> {
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    super(Theater, dataSource.createEntityManager());
  }
}
