import TimeUtils from "../utils/timeUtils";

export class SongHistory {
    constructor(
        public songs: number[] = [],
        public date: string = '',
    ) { }
}

export class UserSettings {
    constructor(
        public name: string = '[Your name]',
        public activeSongId: number = 0,
        
        public uiMode: string = 'light', // dark, light
        public uiColor: string = 'red', // red, blue, green, yellow

        public uiLanguage: string = 'eng', // eng, sk, srb

        public fontSize: number = 22,
        public textAlign: string = 'center', // left, center

        public songHistory: SongHistory[] = [],
        public songFavorites: number[] = [],

       
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
