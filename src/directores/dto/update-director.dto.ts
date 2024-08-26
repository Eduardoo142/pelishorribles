import { IsString, IsDate, IsOptional } from 'class-validator';

export class UpdateDirectorDto {
  @IsOptional()
  @IsString()
  readonly nombre?: string;
  @IsOptional()
  @IsDate()
  readonly fechaDeNacimiento?: Date;
  @IsOptional()
  @IsString()
  readonly nacionalidad?: string;
  @IsOptional()
  @IsString()
  readonly biografia?: string;
}
