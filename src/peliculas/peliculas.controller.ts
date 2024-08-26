import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { Pelicula } from './pelicula.entity';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Post()
  create(@Body() createPeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    return this.peliculasService.create(createPeliculaDto);
  }

  @Get()
  findAll(): Promise<Pelicula[]> {
    return this.peliculasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pelicula> {
    return this.peliculasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePeliculaDto: CreatePeliculaDto): Promise<Pelicula> {
    return this.peliculasService.update(id, updatePeliculaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.peliculasService.remove(id);
  }
  
  @Get('director/:directorId')
  findByDirector(@Param('directorId') directorId: number): Promise<Pelicula[]> {
    return this.peliculasService.findByDirector(directorId);
  }

}
