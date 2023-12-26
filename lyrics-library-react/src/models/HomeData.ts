import RandomUtils from "../utils/RandomUtils";
import userSettings from "./UserSettings";

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
            new SongCollection('Recommended songs', [
                2016,
                1003,
                1227,
                1058,
                2050,
                1022,
                4001,
                3028,
                3050,
                3063,
                1037,
                2003,
                2052,
                3014,
                5020,
                5021,
                6014,
                6037,
                6108,
                6132,
                6140,
                6147,
                6195,
                6231,
                6280,
                6306,
                6312,
                1067,
                1070,
                1095,
                1112,
                1116,
                1243,
                1376,
                1416,
                5032,
                5037,
                5060,
                5074,
                5129,
                5138,
                5183,
                5189,
                5232,
                5321,
                5324,
                5340,
                5364,
                5380,
                5190
              ]),
            new SongCollection('Christmas songs', [1037, 5183, 5184, 5190, 5380]),
            new SongCollection('The most popular songs', [1022, 4001, 3028, 3050, 3063]),
        ],
        public bibleVersesEng: BibleVerse[] = [
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
        public bibleVersesSrb: BibleVerse[] = [
            new BibleVerse('Psalam 95:1-2', 'Dođite da kličemo GOSPODU, da radosno vičemo Steni našeg spasenja! Izađimo pred njega s pesmom zahvalnicom, radosno mu psalme izvikujmo.'),
            new BibleVerse('Psalam 100:2', 'Služite GOSPODU s radošću, dolazite pred njega kličući!'),
            new BibleVerse('Колошанима 3:16', 'Neka Hristova reč u vama bogato prebiva dok sa svom mudrošću poučavate i opominjete jedan drugoga i dok sa zahvalnošću u svom srcu pevate psalme, hvalospeve i duhovne pesme Bogu.'),
            new BibleVerse('Efescima 5:19', 'Jedan drugom govorite u psalmima, hvalospevima i duhovnim pesmama. Pevajte i pojte Gospodu u svom srcu'),
            new BibleVerse('Psalam 104:33', 'Dok sam živ, GOSPODU ću pevati, psalme mu pevati sve dok me bude.'),
            new BibleVerse('Psalam 105:2', 'Pevajte mu, psalme mu pevajte, govorite o svim njegovim delima čudesnim.'),
            new BibleVerse('Psalam 33:2-3', 'Zahvaljujte GOSPODU lirom, svirajte mu na liri od deset žica. Pevajte mu novu pesmu, umilno svirajte i kličite od radosti.'),
            new BibleVerse('Psalam 71:22-23', 'Harfom ću ti zahvaljivati za tvoju istinu, Bože moj, u liru ti svirati, Sveče Izraelov. Klicaće moje usne dok ti sviram i moja duša, koju si izbavio.'),
            new BibleVerse('Jakovljeva 5:13', 'Ako se neko od vas zlopati, neka se moli. Ako je neko radostan, neka peva hvalospeve.'),
            new BibleVerse('Psalam 149:3', 'Neka mu hvale Ime igrajući, neka mu sviraju u daire i liru.'),
            new BibleVerse('Psalam 30:4', 'Pevajte psalme GOSPODU, verni njegovi, njegovom svetom Imenu zahvaljujte.'),
            new BibleVerse('Psalam 96:1-2', 'Pevajte GOSPODU novu pesmu! Pevaj GOSPODU, sva zemljo! Pevajte GOSPODU, Ime mu blagosiljajte! Iz dana u dan njegovo spasenje objavljujte!'),
            new BibleVerse('Psalam 47:6', 'Pevajte psalme GOSPODU, pevajte! Pevajte psalme Caru našem, pevajte!'),
            new BibleVerse('Psalam 40:3', 'U usta mi stavi novu pesmu, hvalospev Bogu našem. Mnogi će to videti i uplašiti se i u GOSPODA se uzdati.'),
            new BibleVerse('Psalam 30:12', 'da ti moja duša peva psalme i da ne zamukne.'),
            new BibleVerse('Psalam 96:2', 'Pevajte GOSPODU, Ime mu blagosiljajte! Iz dana u dan njegovo spasenje objavljujte!'),
            new BibleVerse('Psalam 95:1', 'Dođite da kličemo GOSPODU, da radosno vičemo Steni našeg spasenja!'),
        ],
        public bibleVersesSk: BibleVerse[] = [
            new BibleVerse('Žalmy 95:1-2', 'Poďte, plesajme pred Hospodinom, zvučne oslavujme Skalu našej spásy! Predstúpme vďačne pred jeho tvár, zvučne ho velebme žalmami!'),
            new BibleVerse('Žalmy 100:2', 'Radostne slúžte Hospodinovi, prichádzajte pred neho s jasotom!'),
            new BibleVerse('Kološanom 3:16', 'Kristovo slovo nech vo vás prebýva bohato: vo všetkej múdrosti sa navzájom učte a napomínajte a vďačne spievajte vo svojich srdciach Bohu žalmy, hymny, duchovné piesne.'),
            new BibleVerse('Efežanom 5:19', 'Hovorte spoločne žalmy, hymny a duchovné piesne, v srdci spievajte a oslavujte Pána,'),
            new BibleVerse('Žalmy 104:33', 'Spievať chcem Hospodinovi, kým žijem, ospevovať chcem svojho Boha, kým tu budem.'),
            new BibleVerse('Žalmy 105:2', 'Spievajte mu, hrajte mu! Rozprávajte o všetkých jeho divoch!'),
            new BibleVerse('Žalmy 33:2-3', 'Oslavujte Hospodina citarou, hrajte mu na desaťstrunovej harfe! Spievajte mu novú pieseň, krásne a hlasno rozozvučte struny!'),
            new BibleVerse('Žalmy 71:22-23', 'Aj ja ti budem ďakovať hrou na harfe za tvoju vernosť, môj Bože. Ospevovať ťa budem pri citare, Svätý Izraela! Nech plesajú moje pery, keď ťa budem oslavovať, i moja duša, ktorú si vykúpil.'),
            new BibleVerse('Jakub 5:13', 'Trpí niekto medzi vami? Nech sa modlí! Raduje sa niekto? Nech spieva žalmy!'),
            new BibleVerse('Žalmy 149:3', 'Nech tancom chvália jeho meno, nech mu spievajú pri zvuku bubna a citary.'),
            new BibleVerse('Žalmy 30:4', 'Hospodin, vyviedol si ma z podsvetia. Zachoval si ma pri živote, aby som nezostúpil do hrobu.'),
            new BibleVerse('Žalmy 96:1-2', 'Spievajte Hospodinovi novú pieseň, spievaj Hospodinovi, celá zem! Spievajte Hospodinovi, zvelebujte jeho meno, deň čo deň ohlasujte jeho spásu!'),
            new BibleVerse('Žalmy 47:6', 'Boh vystúpil hore za jasotu, Hospodin za zvuku trúby.'),
            new BibleVerse('Žalmy 40:3', 'Vytiahol ma z jamy hrôzy, z bahna a blata. Nohy mi postavil na skalu a spevňuje moje kroky.'),
            new BibleVerse('Žalmy 30:12', 'Môj nárek si zmenil na tanec. Vyzliekol si mi smútočný šat a odel si ma radosťou'),
            new BibleVerse('Žalmy 96:2', 'Spievajte Hospodinovi, zvelebujte jeho meno, deň čo deň ohlasujte jeho spásu!'),
            new BibleVerse('Žalmy 95:1', 'Poďte, plesajme pred Hospodinom, zvučne oslavujme Skalu našej spásy!'),
        ],
    ) { }

    private getBibleVersesForLang(lang: string): BibleVerse[] {
        if (lang === 'srb')
            return this.bibleVersesSrb;
        else if (lang === 'sk')
            return this.bibleVersesSk;
        else
            return this.bibleVersesEng;
    }

    public getRandomBibleVerse(): BibleVerse {
        const bibleVerses = this.getBibleVersesForLang(userSettings.bibleVerseLanguage);
        return bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    }

    public getBibleVerseForToday(): BibleVerse {
        const bibleVerses = this.getBibleVersesForLang(userSettings.bibleVerseLanguage);
        const date = new Date();
        const dayOfYear = Math.floor((date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000);
        return bibleVerses[dayOfYear % bibleVerses.length];
    }

    public getSongCollectionsForHome(): SongCollection[] {
        //get random 8 songs from list
        //const recommendedSongsIds = RandomUtils.randomizeElemnts(this.songCollections[0].songs, 8);

        RandomUtils.shuffle(this.songCollections[0].songs)

        const recommendedCollection = new SongCollection(
            this.songCollections[0].title,
            this.songCollections[0].songs.slice(0,8)
        );

        const songCollections: SongCollection[] = [];
        songCollections.push(recommendedCollection);
        songCollections.push(this.songCollections[1]);
        songCollections.push(this.songCollections[2]);

        return songCollections;
    }
}

const homeData = new HomeData();
export default homeData;