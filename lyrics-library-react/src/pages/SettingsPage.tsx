import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import ThemeUtils from '../utils/themeUtils';
import style from './SettingsPage.module.scss';
import React from 'react';

import InstallPWA from '../components/InstallPWA';

import userSettings from '../models/UserSettings';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

export default function SettingsPage() {

  const theme = new ThemeUtils();
  const [themeState, setThemeState] = React.useState(userSettings.uiMode);
  const [uiColor, setUiColor] = React.useState(userSettings.uiColor);

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

  const handleChangeUiColor = (color: string) => {
    setUiColor(color);
    theme.setUiColor(color);
  }


  ///
  const [verseFontSize, setVerseFontSize] = React.useState(userSettings.fontSize);

  const handleIncreaseFontSize = () => {
    if (verseFontSize >= 128) return;
    setVerseFontSize(verseFontSize + 1);
    userSettings.setFontSize(verseFontSize + 1);
  }

  const handleDecreaseFontSize = () => {
    if (verseFontSize <= 1) return;
    setVerseFontSize(verseFontSize - 1);
    userSettings.setFontSize(verseFontSize - 1);
  }

  const handleInputFontSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    setVerseFontSize(value);
    userSettings.setFontSize(value);
  }

  ///
  const [verseTextAlign, setVerseTextAlign] = React.useState(userSettings.textAlign);

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    if (newAlignment === null) return;
    setVerseTextAlign(newAlignment);
    userSettings.setTextAlign(newAlignment);
  };

  ///
  const [userName, setUserName] = React.useState(userSettings.name);

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserName(value);
    userSettings.setUserName(value);
  }

  ///
  const [bibleVerseLang, setBibleVerseLang] = React.useState(userSettings.bibleVerseLanguage);
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChangeBibleVerseLang = (event: SelectChangeEvent<string>) => {
    const lang = event.target.value as string;
    setBibleVerseLang(lang);
    userSettings.setBibleVerseLanguage(lang);
  };


  return (
    <div className={style.SettingsPageCss}>

      <div className='topHeader'>
        <Typography sx={{color: 'var(--text-ui-active-color)'}} variant="h4">Settings</Typography>
      </div>

      <div className='settingsContainer'>

        <Typography variant="h6">Your Name</Typography>
        <input className='userNameInput' type="text" value={userName} onChange={handleUserNameChange} />

        <br /> <br />
        <Typography variant="h6">Font size</Typography>
        <div className='flex gap-4 items-center'>
          <RemoveRoundedIcon sx={{ fontSize: 36 }} className='iconButtonll cursor-pointer' onClick={handleDecreaseFontSize} />
          <input style={{backgroundColor: 'var(--bg-ui-color)'}} className='w-16' type="number" step="1" value={verseFontSize} onChange={handleInputFontSize} />
          <AddRoundedIcon sx={{fontSize: 36}} className='iconButtonll cursor-pointer' onClick={handleIncreaseFontSize} />
        </div>
        
        <br />
        <Typography variant="h6">Text Align ({verseTextAlign})</Typography>
        <ToggleButtonGroup
          value={verseTextAlign}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton className='toggleBtnTextAlign' value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton className='toggleBtnTextAlign' value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
        </ToggleButtonGroup>

        <br /> <br />
        
        <Typography variant="h6">Theme</Typography>
        <div className='flex gap-4'>
          <div className="themeBtn themeBtn_light iconButtonll" onClick={setLight}></div>
          <div className="themeBtn themeBtn_dark iconButtonll" onClick={setDark}></div>
        </div>
        
        <br />
        <Typography variant="h6">Color</Typography>
        <div className='flex gap-4'>
          <div className={'colorBtn iconButtonll ' +
            (uiColor === 'blue' ? 'activeColorBtn' : '')}
            style={{backgroundColor: getColor().blue.active}}
            onClick={() => handleChangeUiColor('blue')}></div>
          <div className={'colorBtn iconButtonll ' +
            (uiColor === 'red' ? 'activeColorBtn' : '')}
            style={{backgroundColor: getColor().red.active}}
            onClick={() => handleChangeUiColor('red')}></div>
          <div className={'colorBtn iconButtonll ' +
            (uiColor === 'green' ? 'activeColorBtn' : '')}
            style={{backgroundColor: getColor().green.active}}
            onClick={() => handleChangeUiColor('green')}></div>
          <div className={'colorBtn iconButtonll ' +
            (uiColor === 'yellow' ? 'activeColorBtn' : '')}
            style={{backgroundColor: getColor().yellow.active}}
            onClick={() => handleChangeUiColor('yellow')}></div>
        </div>
        <br /> 


        <Typography variant="h6" className='mb-2'>Bible verse language</Typography>
        <div className='mb-2'></div>
        <FormControl>
          <InputLabel id="demo-simple-select-label"
            sx={{color: 'var(--text-ui-color)'}}
          >Lang</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bibleVerseLang}
            label="Lang"
            onChange={handleChangeBibleVerseLang}
            sx={{
              color: 'var(--text-ui-color)',
              "& .MuiSelect-icon": { color: 'var(--text-ui-color)' },
              "&:before": { borderColor: 'red' },
              "&:after": { borderColor: 'red' },
              ":active": {color: 'var(--text-ui-color)' }
            }}
          >
            <MenuItem value={'eng'}>English</MenuItem>
            <MenuItem value={'srb'}>Srpski</MenuItem>
            <MenuItem value={'sk'}>Slovenský</MenuItem>
          </Select>
        </FormControl>

        <br /> <br />
        <Typography variant="h6" className='pb-2'>Make this app available offline</Typography>
        <InstallPWA />
        <br />
        <Typography variant="body2" className='py-2'>version: 1.1.3</Typography>
        

         

        
        

      </div>
      

    </div>
  )
}
