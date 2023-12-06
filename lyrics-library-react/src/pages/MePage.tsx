import style from './MePage.module.scss';

import userSettings from '../models/UserSettings';

export default function MePage() {

  const root = document.querySelector(':root');
  const rootStyle = getComputedStyle(root!);

  const colors = {
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




  const setTheme = (mode: string) => {
    if (mode === 'light') {
      userSettings.uiMode = 'light';
      root!.style.setProperty('--bg-ui-color', colors.light.bgUiColor);
      root!.style.setProperty('--text-ui-color', colors.light.textUiColor);
      root!.style.setProperty('--button-ui-color', colors.light.buttonUiColor);
      root!.style.setProperty('--bg-ui-color-card', colors.light.bgUiColorCard);
      root!.style.setProperty('--card-shadow', colors.light.cardShadow);

      setUiColor(userSettings.uiColor);

    } else if (mode === 'dark') {
      userSettings.uiMode = 'dark';
      root!.style.setProperty('--bg-ui-color', colors.dark.bgUiColor);
      root!.style.setProperty('--text-ui-color', colors.dark.textUiColor);
      root!.style.setProperty('--button-ui-color', colors.dark.buttonUiColor);
      root!.style.setProperty('--bg-ui-color-card', colors.dark.bgUiColorCard);
      root!.style.setProperty('--card-shadow', colors.dark.cardShadow);

      setUiColor(userSettings.uiColor);
    }

  }

  const setUiColor = (color: string) => {
    userSettings.uiColor = color;
    if(userSettings.uiMode === 'light') {
      if (color === 'red') {
        setColor(colors.light.red);
      } else if (color === 'green') {
        setColor(colors.light.green);
      } else if (color === 'blue') {
        setColor(colors.light.blue);
      } else if (color === 'yellow') {
        setColor(colors.light.yellow);
      }
    } else if (userSettings.uiMode === 'dark') {
      if (color === 'red') {
        setColor(colors.dark.red);
      } else if (color === 'green') {
        setColor(colors.dark.green);
      } else if (color === 'blue') {
        setColor(colors.dark.blue);
      } else if (color === 'yellow') {
        setColor(colors.dark.yellow);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setColor = (color: any) => {
    root!.style.setProperty('--text-ui-hover-color', color.hover);
    root!.style.setProperty('--text-ui-active-color', color.active);
    root!.style.setProperty('--button-ui-hover-color', color.hover);
    root!.style.setProperty('--button-ui-active-color', color.active);
  }


  return (
    <div className={style.MePageCss}>
      

      <button className='ebtn' onClick={() => setTheme('light')}>Light</button>
      <button className='ebtn' onClick={() => setTheme('dark')}>Dark</button>
      <br />
      <button className='ebtn' onClick={() => setUiColor('blue')}>Blue</button>
      <button className='ebtn' onClick={() => setUiColor('red')}>Red</button>
      <button className='ebtn' onClick={() => setUiColor('green')}>Green</button>
      <button className='ebtn' onClick={() => setUiColor('yellow')}>Yellow</button>



    </div>
  )
}
