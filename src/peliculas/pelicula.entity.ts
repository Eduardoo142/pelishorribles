import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Director } from '../directores/director.entity';

@Entity('peliculas')
export class Pelicula {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  añoLanzamiento: number;

  @Column()
  genero: string;

  @Column()
  descripcion: string;

  @ManyToOne(() => Director, director => director.peliculas, { onDelete: 'CASCADE' })
  director: Director;
}



