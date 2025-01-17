import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  movieId: number;

  @Column()
  movieName: string;

  @Column()
  movieDescription: string;

  @Column()
  movieTrailer: string;

  @Column()
  movieImage: string;

  @Column()
  movieThumbnail: string;

  @Column({ type: 'date' })
  movieStartDate: Date;
}
