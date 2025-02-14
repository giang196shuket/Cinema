import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Theater } from '../entities/theater.entity';
import { CreateTheaterDTO, UpdateTheaterDTO } from '../dto/theater.dto';
import { TheaterService } from '../services/theater.repository';

@ApiTags('Theater')
@Controller('Theater')
export class TheaterController {
  constructor(private readonly theaterService: TheaterService) {}

  @Get()
  findAll(): Promise<Theater[]> {
    return this.theaterService.findAll();
  }

  @Get(':id')
  get(@Param('id') id: number) {
    return this.theaterService.findOne(id);
  }

  @Post()
  create(@Body() theater: CreateTheaterDTO) {
    return this.theaterService.create(theater);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movie: UpdateTheaterDTO) {
    return this.theaterService.update(id, movie);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.theaterService.delete(id);
  }
}
