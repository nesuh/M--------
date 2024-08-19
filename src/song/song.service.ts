import { Injectable } from '@nestjs/common';

import {InjectRepository} from '@nestjs/typeorm'

import { Album } from 'src/album/album.entity';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Injectable()
export class SongService {
    constructor(
        @InjectRepository(Song)
        private readonly songRepository: Repository<Song>,
      ) {}

       // Find all songs
//   findAll(): Promise<Song[]> {
//     return this.songRepository.find({ relations: ['album'] });
//   } 
 // Find one song by ID
 findOne(id: number): Promise<Song> {
    return this.songRepository.findOne({
      where: { id },
      relations: ['album'],
    });
  }
  // Create a new song
  create(song: Song): Promise<Song> {
    const newSong = this.songRepository.create(song);
    return this.songRepository.save(newSong);
  }

  // Update an existing song
  async update(id: number, song: Partial<Song>): Promise<Song> {
    await this.songRepository.update(id, song);
    return this.songRepository.findOne({ where: { id } });
  }

  // Delete a song
  async remove(id: number): Promise<void> {
    await this.songRepository.delete(id);
  }
}
