import { IsString, IsInt, IsOptional } from 'class-validator';

export class UpdatePeliculaDto {
  @IsOptional()
  @IsString()
  readonly titulo?: string;

  @IsOptional()
  @IsInt()
  readonly añoLanzamiento?: number;

  @IsOptional()
  @IsString()
  readonly genero?: string;

  @IsOptional()
  @IsString()
  readonly descripcion?: string;

  @IsOptional()
  @IsInt()
  readonly directorId?: number;
}
