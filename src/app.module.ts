import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AlbumModule } from './album/album.module';
import { SongModule } from './song/song.modue';

import { Song } from './song/song.entity';
import { Album } from './album/album.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Album, Song],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Album, Song]),
    AlbumModule,
    SongModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}