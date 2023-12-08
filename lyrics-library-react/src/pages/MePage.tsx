import { Link } from 'react-router-dom';
import style from './MePage.module.scss';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import userSettings from '../models/UserSettings';

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import RestoreRoundedIcon from '@mui/icons-material/RestoreRounded';

export default function MePage() {

  const [, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the header
    const headerElement = document.getElementById('mePage_header');
    const newHeaderHeight = headerElement ? headerElement.offsetHeight : 0;

    // Set the height in the state
    setHeaderHeight(newHeaderHeight);

    // Update the margin-top of the section
    const sectionElement = document.getElementById('mePage_container');

    if (sectionElement) {
      sectionElement.style.marginTop = newHeaderHeight + 'px';
    }

    // Recalculate and update on window resize
    const handleResize = () => {
      setHeaderHeight(headerElement!.offsetHeight);
      sectionElement!.style.marginTop = headerElement!.offsetHeight + 'px';
    };


    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={style.MePageCss}>

      <div className='topHeader' id="mePage_header">
        <div className='flex items-center gap-2'>
          <Typography variant="h4" sx={{ color: 'var(--text-ui-active-color)' }} className=''>
            Welcome {userSettings.name}!
          </Typography>
        </div>
      </div>
        
      
      <div id="mePage_container" className='contentContainer'>
        <Link to='/settings' className=''>
          <div className='llCard flex items-center gap-4'>
            <SettingsRoundedIcon sx={{fontSize: 26}} />
            <Typography variant="h6">Settings</Typography>
          </div>
        </Link>

        <Link to='/favorite' className=''>
          <div className='llCard flex items-center gap-4'>
            <BookmarkRoundedIcon
              className=''
              sx={{ fontSize: 26, color: 'var(--button-bookmark-ui-color)' }} />
            <Typography variant="h6">Favorites</Typography>
            <Typography variant="h6" sx={{ marginLeft: 'auto', color: 'var(--button-bookmark-ui-color)' }}>
              {userSettings.songFavorites.length}
            </Typography>
          </div>
        </Link>

        <Link to='/history' className=''>
          <div className='llCard flex items-center gap-4'>
            <RestoreRoundedIcon sx={{fontSize: 26}} />
            <Typography variant="h6">History</Typography>
            <Typography variant="h6"
              sx={{ marginLeft: 'auto', color: 'var(--text-ui-active-color)' }}>
              Up to {userSettings.getNumberOfHistoryDays()} days
            </Typography>
          </div>
        </Link>
      </div>
      

      

  
    </div>
  )
}
