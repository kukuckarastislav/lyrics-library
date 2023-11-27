import { SongBook } from "./SongBook";
import { Song } from "./Song";

export class Library {
    constructor(
        public numberOfSongBooks: number = 0,
        public songBooks: SongBook[] = [],
    ) { }
    
    public getSongBookByUrl(songBookUrl: string): SongBook | undefined {
        return this.songBooks.find(songBook => songBook.url === songBookUrl);        
    }

    // method for getting a song by its url
    public getSongByUrl(songBookUrl: string, songUrl: string): Song | undefined {
        const songBook = this.getSongBookByUrl(songBookUrl);
        if (songBook) {
            return songBook.getSongByUrl(songUrl);
        }
        return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): Library {
        return new Library(
            json.numberOfSongBooks,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            json.songBooks.map((songBook: any) => SongBook.fromJson(songBook)),
        );
    }
}
