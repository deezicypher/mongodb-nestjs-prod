import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlbumsService } from './albums.service';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Album } from './schemas/album';

@Controller('albums')
export class AlbumsController {
    constructor(
        private albumService:AlbumsService
    ){}

    @Post()
    create(
        @Body()
        createAlbumDTO:CreateAlbumDTO
    ):Promise<Album>{
        return this.albumService.createAlbum(createAlbumDTO)
    }

    @Get()
    find():Promise<Album[]>{
        return this.albumService.findAlbums()
    }
}
