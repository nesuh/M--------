import { Controller, Get ,Post,Put,Delete,Param,Body} from '@nestjs/common';
import { SongService } from './song.service';
import { Injectable } from '@nestjs/common';
import { Song } from './song.entity';

@Controller('songs')
export class SongController {
  constructor(private readonly songsService:SongService) {}

    // Get all songs
    // @Get()
    // findAll(): Promise<Song[]> {
    //   return this.songsService.findOne();
    // }
  
    // Get one song by ID
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Song> {
      return this.songsService.findOne(id);
    }
  
    // Create a new song
    @Post()
    create(@Body() song: Song): Promise<Song> {
      return this.songsService.create(song);
    }
  
    // Update an existing song
    @Put(':id')
    update(@Param('id') id: number, @Body() song: Partial<Song>): Promise<Song> {
      return this.songsService.update(id, song);
    }
  
    // Delete a song
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.songsService.remove(id);
    }


}