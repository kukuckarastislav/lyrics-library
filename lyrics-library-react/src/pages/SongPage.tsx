import { Link, useParams } from 'react-router-dom';
import style from './SongPage.module.scss';

import library from '../libraryData';
import { SongBook } from '../models/SongBook';
import { Song } from '../models/Song';
import { useEffect, useState } from 'react';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import { Typography } from '@mui/material';

export default function SongPage() {

  const { songBookUrl, songUrl } = useParams();
  const songBook: SongBook | undefined = library.getSongBookByUrl(songBookUrl!);
  const song: Song | undefined = songBook?.getSongByUrl(songUrl!);

  const [headerHeight, setHeaderHeight] = useState(0);
  const [verseFontSize, setVerseFontSize] = useState(14);
  const [verseTextAlign, setVerseTextAlign] = useState('center');


  useEffect(() => {
    // Calculate the height of the header
    const headerElement = document.getElementById('songPage_header');
    const newHeaderHeight = headerElement ? headerElement.offsetHeight : 0;

    // Set the height in the state
    setHeaderHeight(newHeaderHeight);

    // Update the margin-top of the section
    const sectionElement = document.getElementById('songPage_verses_container');
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
    <div className={style.SongPageCss}>
      {song != undefined && (<div>

        <div className='topHeader' id="songPage_header">
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
              <Link to={`/songbook/${songBook?.url}`} className="iconButtonll">
                <ArrowBackRoundedIcon sx={{ fontSize: 36 }} />
              </Link>
              <Typography variant="h5">{songBook?.name}</Typography>
            </div>
            <div>
              <MoreVertRoundedIcon className="iconButtonll" />
            </div>
          </div>

          <Typography variant="h5" className='songName'>
            {song.number != 0 && (<span>{song.number}. </span>)}{song.name}
          </Typography>
          {song.author &&
            <Typography variant="body2">{song.author}</Typography>
          }
        
        </div>
            
          
        <div id="songPage_verses_container" className='versesContainer'>
          {song.verses.map((slide, indexSlide) => (
            <div key={indexSlide} className='slideContainer'>
              {slide.map((line, indexLine) => (
                <Typography sx={{fontSize: verseFontSize, textAlign: verseTextAlign}} variant="body2" key={indexSlide+"_"+indexLine} className='textLine'>
                  {line}
                </Typography>
              ))}
            </div>
          ))}
        </div>


      </div>)}
    </div>
  )
}
