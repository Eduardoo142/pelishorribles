import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { Director } from '../directores/director.entity';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula)
    private peliculasRepository: Repository<Pelicula>,

    @InjectRepository(Director)
    private directoresRepository: Repository<Director>,
  ) {}

  async create(createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const director = await this.directoresRepository.findOneBy({ id: createPeliculaDto.directorId });
    if (!director) {
      throw new Error('Director not found');
    }

    const pelicula = this.peliculasRepository.create({
      ...createPeliculaDto,
      director,
    });

    return this.peliculasRepository.save(pelicula);
  }

  async findAll(): Promise<Pelicula[]> {
    return this.peliculasRepository.find({ relations: ['director'] });
  }

  async findOne(id: number): Promise<Pelicula> {
    return this.peliculasRepository.findOne({
      where: { id },
      relations: ['director'],
    });
  }

  async update(id: number, updatePeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    const pelicula = await this.peliculasRepository.preload({
      id: id,
      ...updatePeliculaDto,
    });

    if (!pelicula) {
      throw new Error('Pelicula not found');
    }

    return this.peliculasRepository.save(pelicula);
  }

  async remove(id: number): Promise<void> {
    await this.peliculasRepository.delete(id);
  }

  async findByDirector(directorId: number): Promise<Pelicula[]> {
    return this.peliculasRepository.find({
      where: { director: { id: directorId } },
      relations: ['director'],
    });
  }
  
}
