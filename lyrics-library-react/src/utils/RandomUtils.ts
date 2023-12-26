export default class RandomUtils {
    static randomizeIndex(count: number): number{
        return Math.floor(count * Math.random());
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static randomizeElemnts(array: any[], count: number) {
        if (count > array.length) {
            throw new Error('Array size cannot be smaller than expected random numbers count.');
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const result: any = [];
        const guardian = new Set();
        while (result.length < count) {
            const index = this.randomizeIndex(count);
            if (guardian.has(index)) {
                continue;
            }
            const element = array[index];
            guardian.add(index);
            result.push(element);
        }
        return result;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static shuffle(array: any[]) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
}

