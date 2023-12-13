export default class GradientUtils {
    
    static getRandomColorHsl(s: number, l:number): string {
        const h = Math.floor(Math.random() * 360);
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    static getColorHsl(h: number, s: number, l:number): string {
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    static getRandomGradient(): string {

        const s = 94;
        const l = 36;

        const c1 = GradientUtils.getRandomColorHsl(s, l);
        const c2 = GradientUtils.getRandomColorHsl(s, l);
        const c3 = GradientUtils.getRandomColorHsl(s, l);

        //removed directions that don't look good 'to top', 'to bottom' 'to left' 'to right'
        const directions = [
            'to right top', 'to right bottom', 'to left bottom', 'to left top', 'circle'
        ];
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];

        const gradient = `linear-gradient(${randomDirection}, ${c1}, ${c2}, ${c3})`;
        return gradient;
    }

    static getGradientForToday(d: string | undefined): string {
        const date = new Date();
        let dateStr = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        if (d) {
            dateStr = d;
        }
        const numbers = GradientUtils.get4NumbersFromString(dateStr);
        console.log(numbers);

        const s = 94;
        const l = 36;

        const c1 = GradientUtils.getColorHsl(numbers[0] % 360, s, l);
        const c2 = GradientUtils.getColorHsl(numbers[1] % 360, s, l);
        const c3 = GradientUtils.getColorHsl(numbers[2] % 360, s, l);

        const directions = [
            'to right top', 'to right bottom', 'to left bottom', 'to left top'
        ];
        const randomDirection = directions[numbers[3] % directions.length];

        const gradient = `linear-gradient(${randomDirection}, ${c1}, ${c2}, ${c3})`;
        console.log(gradient);
        return gradient;
    }

    static get4NumbersFromString(str: string): number[] {
        let h1 = 1779033703, h2 = 3144134277,
            h3 = 1013904242, h4 = 2773480762;
        for (let i = 0, k; i < str.length; i++) {
            k = str.charCodeAt(i);
            h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
            h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
            h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
            h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
        }
        h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
        h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
        h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
        h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
        h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
        return [h1>>>0, h2>>>0, h3>>>0, h4>>>0];
    }
        
}