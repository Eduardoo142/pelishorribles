import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Director } from './director.entity';
import { CreateDirectorDto } from './dto/create-director.dto';

@Injectable()
export class DirectoresService {
  constructor(
    @InjectRepository(Director)
    private directoresRepository: Repository<Director>,
  ) {}

  async create(createDirectorDto: CreateDirectorDto): Promise<Director> {
    const director = this.directoresRepository.create(createDirectorDto);
    return this.directoresRepository.save(director);
  }

  async findAll(): Promise<Director[]> {
    return this.directoresRepository.find({ relations: ['peliculas'] });
  }

  async findOne(id: number): Promise<Director> {
    return this.directoresRepository.findOne({
      where: { id },
      relations: ['peliculas'],
    });
  }

  async update(id: number, updateDirectorDto: CreateDirectorDto): Promise<Director> {
    const director = await this.directoresRepository.preload({
      id: id,
      ...updateDirectorDto,
    });

    if (!director) {
      throw new Error('Director not found');
    }

    return this.directoresRepository.save(director);
  }

  async remove(id: number): Promise<void> {
    await this.directoresRepository.delete(id);
  }
}

