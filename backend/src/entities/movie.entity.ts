import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Category } from './category.entity';

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

  @Column()
  movieDuration: number;

  @Column({ type: 'date' })
  movieStartDate: Date;

  @Column({ default: true, nullable: true })
  movieActive: boolean;

  @ManyToMany(() => Category, { cascade: true, nullable: false })
  @JoinTable({
    name: 'movie_category',
    joinColumn: {
      name: 'movieId',
      referencedColumnName: 'movieId',
    },
    inverseJoinColumn: {
      name: 'categoryId',
      referencedColumnName: 'categoryId',
    },
  })
  categories?: Category[];

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
