import { SongBook } from "./SongBook";
import { Song } from "./Song";

export class Library {
    constructor(
        public numberOfSongBooks: number = 0,
        public songBooks: SongBook[] = [],
    ) { }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): Library {
        return new Library(
            json.numberOfSongBooks,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            json.songBooks.map((songBook: any) => SongBook.fromJson(songBook)),
        );
    }
    
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

    public getSongBookNameByUrl(songBookUrl: string): string {
        const songBook = this.getSongBookByUrl(songBookUrl);
        if (songBook) {
            return songBook.name;
        }
        return '';
    }

    public getAllSongs(): Song[] {
        return this.songBooks.reduce((songs: Song[], songBook: SongBook) => {
            return songs.concat(songBook.songs);
        }, []);
    }

    static replaceChars(text: string): string {
        const list_of_chars = [
            ['č', 'c'], ['ć', 'c'], ['đ', 'd'], ['š', 's'], ['ž', 'z'], ['á', 'a'],
            
            ['ä', 'a'], ['č', 'c'], ['ď', 'd'], ['é', 'e'], ['í', 'i'], ['ĺ', 'l'], ['ľ', 'l'], ['ň', 'n'], ['ó', 'o'], ['ô', 'o'], ['ŕ', 'r'], ['š', 's'], ['ť', 't'], ['ú', 'u'], ['ý', 'y'], ['ž', 'z'],
        
            [',', ''], ['.', ''], ['?', ''], ['!', ''], ['(', ''], [')', ''], ['-', ''], ['/', ''], ['\\', ''], ['"', ''], ['\'', ''], ['+', ''], ['*', ''], ['&', ''], ['%', ''], ['$', ''], ['@', ''], ['#', ''], ['^', ''], ['=', ''], ['~', ''], ['`', ''], ['<', ''], ['>', ''], [';', ''], [':', '']
        ];
        
        for (let i = 0; i < list_of_chars.length; i++) {
            text = text.replace(list_of_chars[i][0], list_of_chars[i][1]);
        }

        return text;
    }

    public searchSongs(search: string): Song[] {
        let searchLower = search.toLowerCase();
        return this.getAllSongs().filter(song => {
            let songName = song.name.toLowerCase();
            songName = Library.replaceChars(songName);
            searchLower = Library.replaceChars(searchLower);
            return songName.includes(searchLower);
        });
    }
}
