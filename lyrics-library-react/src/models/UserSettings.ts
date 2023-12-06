
export class UserSettings {
    constructor(
        public name: string = '',
        public activeSongId: number = 0,
        
        public uiMode: string = 'light', // dark, light
        public uiColor: string = 'red', // red, blue, green, yellow

        public uiLanguage: string = 'eng', // eng, sk, srb

        public songHistory: number[] = [],
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
            json.songHistory,
            json.songFavorites,
        );
    }
}

const userSettings = new UserSettings();

export default userSettings;
