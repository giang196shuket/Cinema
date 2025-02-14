import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  foodId: number;

  @Column()
  foodName: string;

  @Column({ type: 'int' })
  foodPrice: number;

  @Column()
  foodImage: string;

  @Column()
  foodDescription: string;

  @Column({ default: true, nullable: true })
  foodActive: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  updatedAt?: Date;
}
