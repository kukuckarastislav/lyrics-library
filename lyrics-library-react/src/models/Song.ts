export class Song {
    constructor(
        public name: string = '',
        public number: number = 0,
        public lang: string = '',
        public url: string = '',
        public author: string = '',
        public verses: string[][] = [],
    ) { }
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): Song {
        return new Song(
            json.name,
            json.number,
            json.lang,
            json.url,
            json.author,
            json.verses,
        );
    }
}
