export class Song {
    constructor(
        public name: string = '',
        public number: number = 0,
        public lang: string = '',
        public url: string = '',
        public songBookUrl: string = '',
        public tags: string[] = [],
        public author: string = '',
        public verses: string[][] = [],
    ) { }

    getID(): string {
        return this.songBookUrl + '/' + this.url;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): Song {
        return new Song(
            json.name,
            json.number,
            json.lang,
            json.url,
            json.songBookUrl,
            json.tags,
            json.author,
            json.verses,
        );
    }
}
