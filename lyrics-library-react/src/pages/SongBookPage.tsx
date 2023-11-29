import { Link, useParams } from 'react-router-dom';
import style from './SongBookPage.module.scss';
import { SongBook } from '../models/SongBook';
import library from '../libraryData';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SongCard from '../components/SongCard';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

export default function SongBookPage() {
  const { songBookUrl } = useParams();
  const songBook: SongBook | undefined = library.getSongBookByUrl(songBookUrl!);
  const [, setHeaderHeight] = useState(0);

  useEffect(() => {
    // Calculate the height of the header
    const headerElement = document.getElementById('songBookPage_header');
    const newHeaderHeight = headerElement ? headerElement.offsetHeight : 0;

    // Set the height in the state
    setHeaderHeight(newHeaderHeight);

    // Update the margin-top of the section
    const sectionElement = document.getElementById('songBookPage_songs_container');
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
    <div className={style.SongBookPageCss}>
      {songBook != undefined && (
        <div>
          <div className='topHeader' id="songBookPage_header">
            <div className='flex items-center gap-2'>
              <Link to="/library" className="iconButtonll">
                <ArrowBackRoundedIcon sx={{ fontSize: 36 }} />
              </Link>
              <Typography variant="h4" className='libraryLabel'>{songBook.name}</Typography>
            </div>
            <Typography variant="body1" className='mb-4'>
              {songBook.numberOfSongs} Songs
            </Typography>
          </div>
            
          
          <div id="songBookPage_songs_container" className='songContainer'>
            {songBook.songs.map((song) => (
              <SongCard key={songBook.url + song.url} song={song} songBookUrl={songBook.url} />
            ))}
          </div>
              
          
        </div>
      )}
    </div>
  )
}
