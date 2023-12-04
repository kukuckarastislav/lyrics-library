import { useEffect, useState } from 'react';
import style from './BackToSongButton.module.scss';

import userSettings from '../models/UserSettings';
import library from '../libraryData';

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import { Song } from '../models/Song';

export default function BackToSongButton() {

  const location = useLocation();
  const navigate = useNavigate();

  const [btnVisible, setBtnVisible] = useState(false);

  useEffect(() => {
    const parts = location.pathname.split('/');
    
    if(parts.length === 5 && parts[1] === 'songbook' && parts[3] === 'song') {
      setBtnVisible(false);
    } else {
      if (userSettings.activeSongId !== 0) {
        setBtnVisible(true);
      }
        
    }

    return () => {
      
    }
  }, [location])

  location.key

  let song: Song | undefined = undefined;
  if (userSettings.activeSongId !== 0) {
    song = library.getSongBySongId(userSettings.activeSongId);
  }

  const handleBackToSong = () => {
    navigate(`/songbook/${song?.songBookUrl}/song/${song?.url}`);
    setBtnVisible(false);
  };

  const handleHideButton = () => {
    userSettings.activeSongId = 0;
    setBtnVisible(false);
  };

  return (
    <div className={style.BackToSongButtonCss}>
      {btnVisible && 
        <div className='backToSongBtn'>
          <div className='labelPart' onClick={handleBackToSong}>
            {song?.name}
          </div>
          <div className='closeBtnPart'>
            <CancelRoundedIcon onClick={handleHideButton} sx={{ fontSize: 26 }} />
          </div>
        </div>
      }
    </div>
  )
}
