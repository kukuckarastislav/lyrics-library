import userSettings from "../models/UserSettings";

export default class ThemeUtils {

    constructor() { }
    
    public init() {
        this.setTheme(userSettings.uiMode);
        this.setUiColor(userSettings.uiColor);
    }

    root = document.querySelector(':root');
    rootStyle = getComputedStyle(this.root!);

    colors = {
        light: {
            textUiColor: '#3E3C46',
            bgUiColor: '#FAFAFE',
            buttonUiColor: '#3a3a3a',
            bgUiColorCard: '#FFFFFF',
            cardShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
            red: {
                hover: '#e54882',
                active: '#d61e62',
            },
            green: {
                hover: '#5AD75A',
                active: '#46C742',
            },
            blue: {
                hover: '#63b1e9',
                active: '#1E89D6',
            },
            yellow: {
                hover: '#e6b84c',
                active: '#D69F1E',
            }
        },
        dark: {
            textUiColor: '#E1E0E9',
            bgUiColor: '#1C1A26',
            buttonUiColor: '#d1d1d1',
            bgUiColorCard: '#312E3F',
            cardShadow: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
            red: {
                hover: '#FF4F63',
                active: '#FF4F63',
            },
            green: {
                hover: '#5AD75A',
                active: '#3DAA3D',
            },
            blue: {
                hover: '#6ba7eb',
                active: '#4E93E1',
            },
            yellow: {
                hover: '#FFD777',
                active: '#D69F1E',
            }
        }
    };




  public setTheme = (mode: string) => {
    if (mode === 'light') {
        
        userSettings.setUiMode('light');
      this.root!.style.setProperty('--bg-ui-color', this.colors.light.bgUiColor);
      this.root!.style.setProperty('--text-ui-color', this.colors.light.textUiColor);
      this.root!.style.setProperty('--button-ui-color', this.colors.light.buttonUiColor);
      this.root!.style.setProperty('--bg-ui-color-card', this.colors.light.bgUiColorCard);
      this.root!.style.setProperty('--card-shadow', this.colors.light.cardShadow);

      this.setUiColor(userSettings.uiColor);

    } else if (mode === 'dark') {
        userSettings.setUiMode('dark');
      this.root!.style.setProperty('--bg-ui-color', this.colors.dark.bgUiColor);
      this.root!.style.setProperty('--text-ui-color', this.colors.dark.textUiColor);
      this.root!.style.setProperty('--button-ui-color', this.colors.dark.buttonUiColor);
      this.root!.style.setProperty('--bg-ui-color-card', this.colors.dark.bgUiColorCard);
      this.root!.style.setProperty('--card-shadow', this.colors.dark.cardShadow);

      this.setUiColor(userSettings.uiColor);
    }

  }

  public setUiColor = (color: string) => {
    userSettings.uiColor = color;
    if(userSettings.uiMode === 'light') {
      if (color === 'red') {
          this.setColor(this.colors.light.red);
          userSettings.setUiColor('red');
      } else if (color === 'green') {
          this.setColor(this.colors.light.green);
          userSettings.setUiColor('green');
      } else if (color === 'blue') {
          this.setColor(this.colors.light.blue);
          userSettings.setUiColor('blue');
      } else if (color === 'yellow') {
          this.setColor(this.colors.light.yellow);
          userSettings.setUiColor('yellow');
      }
    } else if (userSettings.uiMode === 'dark') {
      if (color === 'red') {
          this.setColor(this.colors.dark.red);
          userSettings.setUiColor('red');
      } else if (color === 'green') {
          this.setColor(this.colors.dark.green);
          userSettings.setUiColor('green');
      } else if (color === 'blue') {
          this.setColor(this.colors.dark.blue);
          userSettings.setUiColor('blue');
      } else if (color === 'yellow') {
          this.setColor(this.colors.dark.yellow);
          userSettings.setUiColor('yellow');
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private setColor = (color: any) => {
    this.root!.style.setProperty('--text-ui-hover-color', color.hover);
    this.root!.style.setProperty('--text-ui-active-color', color.active);
    this.root!.style.setProperty('--button-ui-hover-color', color.hover);
    this.root!.style.setProperty('--button-ui-active-color', color.active);
  }

}