import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Song, SongDocument } from './schemas/song';
import { DeleteResult, Model } from 'mongoose';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable()
export class SongsService {
   constructor(
    @InjectModel(Song.name) 
   private readonly songModel: Model<SongDocument>){}

   async create(createSongDto:CreateSongDTO): Promise<Song>{
  
        const song = await this.songModel.create(createSongDto)
        return song
    }

    find(): Promise<Song[]>{
        return this.songModel.find()
    }

    findById(id:string):Promise<Song | null>{
        return this.songModel.findById(id)
    }

    deleteById(id:string):Promise<DeleteResult>{
        return this.songModel.deleteOne({_id:id}).exec()
    }
}
