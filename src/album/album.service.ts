import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Album } from './album.entity';
import { Repository } from 'typeorm';
@Injectable()
export class AlbumService {
    constructor(
        @InjectRepository(Album) private albumRepository: Repository<Album>,
      ) {}
    findAll(): Promise<Album[]> {
    return this.albumRepository.find({ relations: ['songs'] });
    }
       // Find one album by ID
  findOne(id: number): Promise<Album> {
    return this.albumRepository.findOne({
      where: { id },
      relations: ['songs'],
    });
  }

  // Create a new album
  create(album: Album): Promise<Album> {
    const newAlbum = this.albumRepository.create(album);
    return this.albumRepository.save(newAlbum);
  }

  // Update an existing album
  async update(id: number, album: Partial<Album>): Promise<Album> {
    await this.albumRepository.update(id, album);
    return this.albumRepository.findOne({ where: { id } });
  }

  // Delete an album
  async remove(id: number): Promise<void> {
    await this.albumRepository.delete(id);
  }
}
