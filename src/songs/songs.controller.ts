import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Song } from './schemas/song';

@Controller('songs')
export class SongsController {
    constructor(private songService:SongsService){}

    @Post()
    create(
        @Body()
        createSongDto:CreateSongDTO){
         
        return this.songService.create(createSongDto)
    }

    @Get()
    find():Promise<Song[]>{
        return this.songService.find()
    }

    @Get(':id')
    findById(
        @Param('id')
        id:string
    ):Promise<Song|null>{
        return this.songService.findById(id)
    }

}
