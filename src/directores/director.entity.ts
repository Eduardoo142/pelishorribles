import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pelicula } from '../peliculas/pelicula.entity';

@Entity('directores')
export class Director {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  fechaDeNacimiento: Date;

  @Column()
  nacionalidad: string;

  @Column()
  biografia: string;

  @OneToMany(() => Pelicula, pelicula => pelicula.director, { cascade: true, onDelete: 'CASCADE' })
  peliculas: Pelicula[];
}
