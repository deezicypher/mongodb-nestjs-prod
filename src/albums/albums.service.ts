import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Album, AlbumDocument } from './schemas/album';
import { Model } from 'mongoose';
import { CreateAlbumDTO } from './dto/create-album-dto';
import { Song } from 'src/songs/schemas/song';

@Injectable()
export class AlbumsService {
    constructor(
        @InjectModel(Album.name)
        private readonly albumModel: Model<AlbumDocument>
    ){}

    createAlbum(createAlbumDTO:CreateAlbumDTO):Promise<Album>{
        return this.albumModel.create(createAlbumDTO)
    }

    findAlbums():Promise<Album[]>{
        return this.albumModel.find().populate('songs', null , Song.name)
    }
}
