import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Song } from '../song/song.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  desc: string;

  @Column()
  bgColor: string;

  @OneToMany(() => Song, song => song.album)
  songs: Song[];
}


