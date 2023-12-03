import library from "../libraryData";
import invertedIndex from "../InvertedIndex";

export default class SearchUtils {

    static replaceChars(text) {
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

    static searchSongs(searchParam) {
        // if searchParam is empty return empty array
        if (!searchParam) {
            return [];
        }

        // if only numbers are entered, search by song number
        if (/^\d+$/.test(searchParam)) {
            const songNumber = parseInt(searchParam);
            return library.findSongByNumber(songNumber);
        }

        const searchParamEdited = this.replaceChars(searchParam.toLowerCase());
        const tokens = searchParamEdited.trim().split(' ');

        //filter tokens which have less than 3 characters
        for (let i = 0; i < tokens.length; i++) {
            if (tokens[i].length < 3) {
                tokens.splice(i, 1);
                i--;
            }
        }
        console.log('tokens', tokens);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const matchingSongsIds = [];

        for(const token of tokens) {
            const songIds = invertedIndex[token];
            console.log('songIds', songIds);
            if (songIds !== undefined) { 
                for (const songId of songIds) {
                    let found = false;
                    for (const matchingSongId of matchingSongsIds) {
                        if (matchingSongId[0] === songId) {
                            matchingSongId[1] += 1;
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        matchingSongsIds.push([songId, 1]);
                    }
                }
            }
        }

        console.log('matchingSongsIds', matchingSongsIds);
        // sort by number of matching tokens
        matchingSongsIds.sort((a, b) => {
            return b[1] - a[1];
        });

        const songsByNameOfSong = library.searchSongsByName(searchParam);
        console.log('number of songsByNameOfSong', songsByNameOfSong.length);
        const matchingSongs = songsByNameOfSong;
        for (const matchingSongId of matchingSongsIds) {
            const song = library.getSongBySongId(matchingSongId[0]);
            if (song !== undefined) {
                if (!songsByNameOfSong.includes(song)) {
                    matchingSongs.push(song);
                }
            }
        }

        return matchingSongs;
    }

}