import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class CreateDirectorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsDateString()
  fechaDeNacimiento: string;
  @IsNotEmpty()
  @IsString()
  nacionalidad: string;
  @IsNotEmpty()
  @IsString()
  biografia: string;
}
