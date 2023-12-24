import { Typography } from '@mui/material';
import style from './HistoryPage.module.scss';

import userSettings, { SongHistory } from '../models/UserSettings';
import { useState } from 'react';
import SongCard from '../components/SongCard';
import library from '../libraryData';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { Link } from 'react-router-dom';

export default function HistoryPage() {

  const [history,] = useState(userSettings.songHistory);
  const [showHistoryDate, setShowHistoryDate] = useState<string>('');

  console.log('history', history);

  const showOrHideHistoryForDay = (date: string) => {
    if (showHistoryDate === date) {
      setShowHistoryDate('');
    } else {
      setShowHistoryDate(date);
    }
  }

  return (
    <div className={style.HistoryPageCss}>
        
        <div className='topHeader' id="mePage_header">
        <div className='flex items-center gap-2'>
          <Link to="/me" className="iconButtonll">
            <ArrowBackRoundedIcon sx={{ fontSize: 36 }} />
          </Link>
          <Typography variant="h4" sx={{ color: 'var(--text-ui-active-color)' }} className=''>
            History
          </Typography>
        </div>
        <Typography variant="body1" className='mb-4'>
          {history.length} Days
        </Typography>
      </div>
        
      
      <div id="mePage_container" className='contentContainer'>

        {
          history.map((songHistory: SongHistory) => {
            return (
              <div key={songHistory.date}>
                <div className='llCard pointerTransparent select-none'
                  onClick={() => showOrHideHistoryForDay(songHistory.date)}
                >
                  <Typography variant="h5" sx={{ color: 'var(--text-ui-active-color)' }} className=''>
                    {songHistory.date}
                  </Typography>
                </div>
                <div className='songContainer'>
                  {showHistoryDate === songHistory.date &&
                    library.getAllSongsByIds(songHistory.songs).map((song) => (
                    <SongCard key={song.songBookUrl + song.url}
                      showSoongBookName={true}
                      song={song}
                      songBookUrl={song.songBookUrl} />
                  ))}
                </div>
              </div>
            )
          })

        }

      </div>


    </div>
  )
}
