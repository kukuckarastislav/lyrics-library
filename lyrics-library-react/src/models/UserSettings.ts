import TimeUtils from "../utils/timeUtils";

export class SongHistory {
    constructor(
        public songs: number[] = [],
        public date: string = '',
    ) { }
}

export class UserSettings {
    constructor(
        public name: string = '',
        public activeSongId: number = 0,
        
        public uiMode: string = 'light', // dark, light
        public uiColor: string = 'red', // red, blue, green, yellow

        public uiLanguage: string = 'eng', // eng, sk, srb

        public fontSize: number = 22,
        public textAlign: string = 'center', // left, center

        public songHistory: SongHistory[] = [],
        public songFavorites: number[] = [],

        public bibleVerseLanguage: string = 'srb', // eng, sk, srb

        public showSerbianSongs: boolean = true,
        public showSlovakSongs: boolean = true,
        public showEnglishSongs: boolean = true,

        // presentation mode
        public presentationModeGridColumns: number = 6,
       
    ) { }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): UserSettings {
        return new UserSettings(
            json.name,
            json.activeSongId,
            json.uiMode,
            json.uiColor,
            json.uiLanguage,
            json.fontSize,
            json.textAlign,
            json.songHistory,
            json.songFavorites,
            json.bibleVerseLanguage,
            json.showSerbianSongs,
            json.showSlovakSongs,
            json.showEnglishSongs,
            json.presentationModeGridColumns,
        );
    }

    public IsSongInFavorites(songId: number): boolean {
        return this.songFavorites.includes(songId);
    }

    public addSongToFavorites(songId: number): void {
        if (!this.IsSongInFavorites(songId)) {
            this.songFavorites.push(songId);
        }

        this.saveToLocalStorage();
    }

    public removeSongFromFavorites(songId: number): void {
        if (this.IsSongInFavorites(songId)) {
            this.songFavorites = this.songFavorites.filter(x => x !== songId);
        }

        this.saveToLocalStorage();
    }

    public addSongToHistory(songId: number): void {

        const today = TimeUtils.getFullDate(new Date());
        const todaySongHistory = this.songHistory
            .find(x => x.date === today);
        
        if (!todaySongHistory) {
            this.songHistory.push(new SongHistory([songId], today));
            return;
        }

        if (todaySongHistory!.songs.includes(songId)) {
            todaySongHistory!.songs = todaySongHistory!.songs.filter(x => x !== songId);
        }
        todaySongHistory!.songs.push(songId);
        
        console.log(this);
        this.saveToLocalStorage();
    }

    public setUiMode(mode: string): void {
        this.uiMode = mode;
        this.saveToLocalStorage();
    }

    public setUiColor(color: string): void {
        this.uiColor = color;
        this.saveToLocalStorage();
    }

    public setFontSize(size: number): void {
        this.fontSize = size;
        this.saveToLocalStorage();
    }

    public setTextAlign(align: string): void {
        this.textAlign = align;
        this.saveToLocalStorage();
    }

    public setUserName(name: string): void {
        this.name = name;
        this.saveToLocalStorage();
    }

    public getNumberOfHistoryDays(): number {
        return this.songHistory.length;
    }

    public setBibleVerseLanguage(lang: string): void {
        if (lang != 'srb' && lang != 'sk' && lang != 'eng') 
            lang = 'srb';
        
        this.bibleVerseLanguage = lang;
        this.saveToLocalStorage();
    }

    public isSongLangVisible(lang: string): boolean {
        if (lang == 'srb') return this.showSerbianSongs;
        else if (lang == 'sk') return this.showSlovakSongs;
        else if (lang == 'eng') return this.showEnglishSongs;
        return false;
    }

    public toggleSongLangVisibility(lang: string, flag: boolean): void {
        
        if (lang == 'srb') this.showSerbianSongs = flag;
        else if (lang == 'sk') this.showSlovakSongs = flag;
        else if (lang == 'eng') this.showEnglishSongs = flag;
        
        this.saveToLocalStorage();
    }

    public isSongBookVisible(languages: string[]): boolean {
        for (const lang of languages) {
            if (this.isSongLangVisible(lang))
                return true;
        }
        return false;
    }

    public setPresentationModeGridColumns(columns: number): void {
        this.presentationModeGridColumns = columns;
        this.saveToLocalStorage();
    }


    //

    private static readonly LOCAL_STORAGE_KEY = 'userSettings';
    private saveToLocalStorage(): void {
        // save to local storage
        localStorage.setItem(UserSettings.LOCAL_STORAGE_KEY, JSON.stringify(this));
    }
    
    static loadFromLocalStorage(): UserSettings {
        // load from local storage
        const json = localStorage.getItem(UserSettings.LOCAL_STORAGE_KEY);
        if (!json) {
            return new UserSettings();
        }
        return UserSettings.fromJson(JSON.parse(json));
    }
}

const userSettings = UserSettings.loadFromLocalStorage();

export default userSettings;
