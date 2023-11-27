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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): SongBook {
        return new SongBook(
            json.name,
            json.url,
            json.numberOfSongs,
            json.languges,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            json.songs.map((song: any) => Song.fromJson(song)),
        );
    }
}
