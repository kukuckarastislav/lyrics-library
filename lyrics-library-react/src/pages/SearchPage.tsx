import style from './SearchPage.module.scss';
import searchUtils from '../utils/SearchUtils';
import { useEffect, useState } from 'react';
import { Song } from '../models/Song';
import SongCard from '../components/SongCard';
import { Typography } from '@mui/material';
import React from 'react';

export default function SearchPage() {

  const [, setHeaderHeight] = useState(0);

  const [matchedSongs, setMatchedSongs] = useState<Song[]>([]);
  const maxNumOfSongDispley = 30;

  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Calculate the height of the header
    const headerElement = document.getElementById('search_header');
    const newHeaderHeight = headerElement ? headerElement.offsetHeight : 0;

    // Set the height in the state
    setHeaderHeight(newHeaderHeight);

    // Update the margin-top of the section
    const sectionElement = document.getElementById('matched_songs_container');
    if (sectionElement) {
      sectionElement.style.marginTop = newHeaderHeight + 'px';
    }

    // Recalculate and update on window resize
    const handleResize = () => {
      setHeaderHeight(headerElement!.offsetHeight);
      sectionElement!.style.marginTop = headerElement!.offsetHeight + 'px';
    };

    inputRef.current?.focus();

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    console.log(searchValue);
    const _matchedSongs = searchUtils.searchSongs(searchValue);
    setMatchedSongs(_matchedSongs);
  }


  return (
    <div className={style.SearchPageCss}>

      <div className='topHeader' id="search_header">
        <div className='flex items-center gap-2'>
          <input ref={inputRef} type="text" placeholder="Search songs ..." className='searchInput' onChange={handleInputSearchChange}/>
        </div>
        {matchedSongs.length > 0 && 
          <Typography variant="body1" className='mb-4'>
            {Math.min(matchedSongs.length, maxNumOfSongDispley)} result
          </Typography>
        }
      </div>
        
      
      <div id="matched_songs_container" className='songContainer'>
        {matchedSongs.slice(0, maxNumOfSongDispley).map((song) => (
          <SongCard showSoongBookName key={song.songBookUrl + song.url} song={song} songBookUrl={song.songBookUrl} />
        ))}
      </div>

      
    </div>
  )
}
