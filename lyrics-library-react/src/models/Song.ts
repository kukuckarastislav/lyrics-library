export class Song {
    constructor(
        public name: string = '',
        public number: number = 0,
        public lang: string = '',
        public url: string = '',
        public id: number = 0,
        public songBookUrl: string = '',
        public tags: string[] = [],
        public author: string = '',
        public verses: string[][] = [],
    ) { }

    getFullURL(): string {
        return this.songBookUrl + '/' + this.url;
    }

    getSongText(): string {
        let songText = '';
        this.verses.forEach((verse: string[]) => {
            verse.forEach((line: string) => {
                songText += line + '\n';
            });
            songText += '\n';
        });
        return songText;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): Song {
        return new Song(
            json.name,
            json.number,
            json.lang,
            json.url,
            json.id,
            json.songBookUrl,
            json.tags,
            json.author,
            json.verses,
        );
    }
}
