export class Song {
    constructor(
        public name: string = '',
        public number: number = 0,
        public lang: string = '',
        public url: string = '',
        public author: string = '',
        public verses: string[][] = [],
    ){}
}
