
export class UserSettings {
    constructor(
        public name: string = '',
        public activeSongId: number = 0,
       
    ) { }
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static fromJson(json: any): UserSettings {
        return new UserSettings(
            json.name,
            json.activeSongId,
        );
    }
}

const userSettings = new UserSettings();

export default userSettings;
