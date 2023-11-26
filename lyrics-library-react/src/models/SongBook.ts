import { Song } from "./Song";

export class SongBook {
    constructor(
        public name: string = '',
        public url: string = '',
        public numberOfSongs: number = 0,
        public languges: string[] = [],
        public songs: Song[] = [],
    ) { }
    
    // method for getting a song by its number
    public getSongByNumber(songNumber: number): Song | undefined {
        return this.songs.find(song => song.number === songNumber);
    }

    // method for getting a song by its url
    public getSongByUrl(songUrl: string): Song | undefined {
        return this.songs.find(song => song.url === songUrl);
    }
}
