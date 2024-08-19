import { Controller, Get,Delete,Put,Post,Body,Param,} from '@nestjs/common';

import { AlbumService } from './album.service';
import { Album } from './album.entity';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumsService:AlbumService) {}
  // Get all albums
  @Get()
  findAll(): Promise<Album[]> {
    return this.albumsService.findAll();
  }

  // Get one album by ID
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Album> {
    return this.albumsService.findOne(id);
  }

  // Create a new album
  @Post()
  create(@Body() album: Album): Promise<Album> {
    return this.albumsService.create(album);
  }

  // Update an existing album
  @Put(':id')
  update(@Param('id') id: number, @Body() album: Partial<Album>): Promise<Album> {
    return this.albumsService.update(id, album);
  }

  // Delete an album
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.albumsService.remove(id);
  }


}