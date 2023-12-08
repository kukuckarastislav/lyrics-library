import { Link, useParams } from 'react-router-dom';
import style from './SongBookPage.module.scss';
import { SongBook } from '../models/SongBook';
import library from '../libraryData';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import SongCard from '../components/SongCard';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import userSettings from '../models/UserSettings';

export default function SongBookPage() {
  const { songBookUrl } = useParams();
  let songBook: SongBook | undefined;
  if (songBookUrl) {
    songBook = library.getSongBookByUrl(songBookUrl);
  } else {
    songBook = new SongBook('Favorites');    
    songBook.songs = library.getAllSongsByIds(userSettings.songFavorites);
    songBook.numberOfSongs = songBook.songs.length;
  }

  const [, setHeaderHeight] = useState(0);

  const [visibleIndex, setVisibleIndex] = useState(1);
  const numberOfSongs = 30;

  const isInViewport = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

  useEffect(() => {
    // Calculate the height of the header
    const headerElement = document.getElementById('songBookPage_header');
    const newHeaderHeight = headerElement ? headerElement.offsetHeight : 0;

    // Set the height in the state
    setHeaderHeight(newHeaderHeight);

    // Update the margin-top of the section
    const sectionElement = document.getElementById('songBookPage_songs_container');

    const handleScroll = () => {
      if(visibleIndex*numberOfSongs > songBook!.numberOfSongs) return;
      //console.log('scrolling');
      //get last child from div sectionElement
      const lastChild = sectionElement!.lastElementChild as HTMLElement;
      //console.log(lastChild);
      // if last element is visible, add 30 more songs
      const isVisible = isInViewport(lastChild);
      //console.log(isVisible);
      if (isVisible) {
        setVisibleIndex((prevVisibleIndex) => prevVisibleIndex + 1);
      }
    };

    if (sectionElement) {
      console.log('adding event listener');
      sectionElement.style.marginTop = newHeaderHeight + 'px';
      window.addEventListener('scroll', handleScroll);
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
      if (sectionElement) { 
        window.removeEventListener('scroll', handleScroll);
      }  
    };
  }, []);

  return (
    <div className={style.SongBookPageCss}>
      {songBook != undefined && (
        <div>
          <div className='topHeader' id="songBookPage_header">
            <div className='flex items-center gap-2'>
              <Link to={songBook.name === 'Favorites' ? "/me" : "/library"} className="iconButtonll">
                <ArrowBackRoundedIcon sx={{ fontSize: 36 }} />
              </Link>
              <Typography variant="h4" className='libraryLabel'>{songBook.name}</Typography>
            </div>
            <Typography variant="body1" className='mb-4'>
              {songBook.numberOfSongs} Songs
            </Typography>
          </div>
            
          
          <div id="songBookPage_songs_container" className='songContainer'>
            {songBook.songs.slice(0, visibleIndex*numberOfSongs).map((song) => (
              <SongCard key={song.songBookUrl + song.url}
                showSoongBookName={songBook!.name == 'Favorites'}
                song={song}
                songBookUrl={song.songBookUrl} />
            ))}
          </div>
              
          
        </div>
      )}
    </div>
  )
}
