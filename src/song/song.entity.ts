import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Album } from '../album/album.entity';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  file: string;

  @Column()
  desc: string;

  @Column()
  duration: string;

  @ManyToOne(() => Album, album => album.songs)
  album: Album;
}
