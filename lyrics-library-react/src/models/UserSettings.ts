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

        public songHistory: SongHistory[] = [],
        public songFavorites: number[] = [],

       
    ) { }

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

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): UserSettings {
        return new UserSettings(
            json.name,
            json.activeSongId,
            json.uiMode,
            json.uiColor,
            json.uiLanguage,
            json.songHistory,
            json.songFavorites,
        );
    }
}

const userSettings = UserSettings.loadFromLocalStorage();

export default userSettings;
