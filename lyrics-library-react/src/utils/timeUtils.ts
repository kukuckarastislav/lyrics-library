export default class TimeUtils {
    static getNow() : number {
        return new Date().getTime();
    }

    static getFullDate(date: Date): string {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }
}