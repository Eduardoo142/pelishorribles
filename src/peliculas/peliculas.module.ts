import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasService } from './peliculas.service';
import { PeliculasController } from './peliculas.controller';
import { Pelicula } from './pelicula.entity';
import { Director } from '../directores/director.entity';  // Importamos la entidad Director

@Module({
  imports: [TypeOrmModule.forFeature([Pelicula, Director])],
  providers: [PeliculasService],
  controllers: [PeliculasController],
})
export class PeliculasModule {}
