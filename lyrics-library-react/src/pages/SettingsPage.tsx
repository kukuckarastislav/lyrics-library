import { Typography } from '@mui/material';
import ThemeUtils from '../utils/themeUtils';
import style from './SettingsPage.module.scss';
import React from 'react';

import userSettings from '../models/UserSettings';

export default function SettingsPage() {

  const theme = new ThemeUtils();
  const [themeState, setThemeState] = React.useState(userSettings.uiMode);
  const [uiColorState, setUiColorState] = React.useState(userSettings.uiColor);

  const setLight = () => {
    theme.setTheme('light');
    setThemeState('light');
  }

  const setDark = () => {
    theme.setTheme('dark');
    setThemeState('dark');
  }

  const getColor = () => {
    if(themeState === 'light') {
      return theme.colors.light;
    } else {
      return theme.colors.dark;
    }

  }

  return (
    <div className={style.SettingsPageCss}>

      <div className='topHeader'>
        <Typography variant="h4">Settings</Typography>
      </div>

      <div className='settingsContainer'>

        <Typography variant="h6">Theme</Typography>
        <div className='flex gap-4'>
          <div className="themeBtn themeBtn_light iconButtonll" onClick={setLight}></div>
          <div className="themeBtn themeBtn_dark iconButtonll" onClick={setDark}></div>
        </div>
        
        <br />
        <Typography variant="h6">Color</Typography>
        <div className='flex gap-4'>
          <div className='colorBtn iconButtonll'
            style={{backgroundColor: getColor().blue.active}}
            onClick={() => theme.setUiColor('blue')}></div>
          <div className='colorBtn iconButtonll'
            style={{backgroundColor: getColor().red.active}}
            onClick={() => theme.setUiColor('red')}></div>
          <div className='colorBtn iconButtonll'
            style={{backgroundColor: getColor().green.active}}
            onClick={() => theme.setUiColor('green')}></div>
          <div className='colorBtn iconButtonll'
            style={{backgroundColor: getColor().yellow.active}}
            onClick={() => theme.setUiColor('yellow')}></div>
        </div>

      </div>
      

    </div>
  )
}
