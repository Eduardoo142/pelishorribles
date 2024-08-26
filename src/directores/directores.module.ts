import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectoresService } from './directores.service';
import { DirectoresController } from './directores.controller';
import { Director } from './director.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Director])],
  providers: [DirectoresService],
  controllers: [DirectoresController],
  exports: [TypeOrmModule]  // Exportamos para que otros módulos puedan usar el repositorio
})
export class DirectoresModule {}
