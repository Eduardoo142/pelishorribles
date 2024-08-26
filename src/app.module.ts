import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeliculasModule } from './peliculas/peliculas.module';
import { DirectoresModule } from './directores/directores.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Eduardo2003@',
      database: 'peliculasmalas',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../la-ves-y-te-aburres-frontend/build'),
      renderPath: '/',
      exclude: ['api/*']
    }),
    PeliculasModule,
    DirectoresModule,
  ],
})
export class AppModule {}
