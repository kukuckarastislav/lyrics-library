export class SongCollection {
    constructor(
        public title: string = '',
        public songs: number[] = [],
    ) { }
}

export class BibleVerse {
    constructor(
        public bibleLocation: string = '',
        public text: string = '',
    ) { }
}

export class HomeData {
    constructor(
        public songCollections: SongCollection[] = [
            new SongCollection('Recommended songs', [2016, 1003, 1227, 2052, 1058, 2050]),
            new SongCollection('Christmas songs', [1037, 2003]),
            new SongCollection('The most popular songs', [1022, 4001, 3028, 3050, 3063]),
        ],
        public bibleVerses: BibleVerse[] = [
            new BibleVerse('Psalm 95:1-2', 'Come, let us sing for joy to the Lord; let us shout aloud to the Rock of our salvation. Let us come before him with thanksgiving and extol him with music and song.'),
            new BibleVerse('Psalm 100:2', 'Worship the Lord with gladness; come before him with joyful songs.'),
            new BibleVerse('Colossians 3:16', 'Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.'),
            new BibleVerse('Ephesians 5:19', 'Speak to one another with psalms, hymns and spiritual songs. Sing and make music in your heart to the Lord.'),
            new BibleVerse('Psalm 104:33', 'I will sing to the Lord all my life; I will sing praise to my God as long as I live.'),
            new BibleVerse('Psalm 105:2', 'Sing to him, sing praise to him; tell of all his wonderful acts.'),
            new BibleVerse('Psalm 33:2-3', 'Praise the Lord with the harp; make music to him on the ten-stringed lyre. Sing to him a new song; play skillfully, and shout for joy.'),
            new BibleVerse('Psalm 71:22-23', 'I will praise you with the harp for your faithfulness, my God; I will sing praise to you with the lyre, Holy One of Israel. My lips will shout for joy when I sing praise to you—I whom you have delivered.'),
            new BibleVerse('James 5:13', 'Is anyone among you in trouble? Let them pray. Is anyone happy? Let them sing songs of praise.'),
            new BibleVerse('Psalm 149:3', 'Let them praise his name with dancing and make music to him with timbrel and harp.'),
            new BibleVerse('Psalm 30:4', 'Sing the praises of the Lord, you his faithful people; praise his holy name.'),
            new BibleVerse('Psalm 96:1-2', 'Sing to the Lord a new song; sing to the Lord, all the earth. Sing to the Lord, praise his name; proclaim his salvation day after day.'),
            new BibleVerse('Psalm 47:6', 'Sing praises to God, sing praises; sing praises to our King, sing praises.'),
            new BibleVerse('Psalm 40:3', 'He put a new song in my mouth, a hymn of praise to our God. Many will see and fear the Lord and put their trust in him.'),
            new BibleVerse('Psalm 30:12', 'that my heart may sing your praises and not be silent. Lord my God, I will praise you forever.'),
            new BibleVerse('Psalm 96:2', 'Sing to the Lord, praise his name; proclaim his salvation day after day.'),
            new BibleVerse('Psalm 95:1', 'Come, let us sing for joy to the Lord; let us shout aloud to the Rock of our salvation.'),
        ],
    ) { }

    public getRandomBibleVerse(): BibleVerse {
        return this.bibleVerses[Math.floor(Math.random() * this.bibleVerses.length)];
    }

    public getBibleVerseForToday(): BibleVerse {
        const date = new Date();
        const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
        return this.bibleVerses[dayOfYear % this.bibleVerses.length];
    }
}

const homeData = new HomeData();
export default homeData;