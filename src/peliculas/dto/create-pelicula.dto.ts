import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreatePeliculaDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsNumber()
  añoLanzamiento: number;

  @IsNotEmpty()
  @IsString()
  genero: string;

  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @IsNotEmpty()
  @IsNumber()
  directorId: number;  // Usamos el ID del director para asociarlo
}
