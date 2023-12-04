import { Link, useParams } from 'react-router-dom';
import style from './SongPage.module.scss';

import library from '../libraryData';
import { SongBook } from '../models/SongBook';
import { Song } from '../models/Song';
import { useEffect, useState } from 'react';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import { Popover, Typography } from '@mui/material';
import React from 'react';
import SongPageMoreOption from '../components/SongPageMoreOption';

import userSettings from '../models/UserSettings';

export default function SongPage() {

  const { songBookUrl, songUrl } = useParams();
  const songBook: SongBook | undefined = library.getSongBookByUrl(songBookUrl!);
  const song: Song | undefined = songBook?.getSongByUrl(songUrl!);

  const [, setHeaderHeight] = useState(0);
  const [verseFontSize, setVerseFontSize] = useState(26);
  const [verseTextAlign, setVerseTextAlign] = useState('center');


  /* popper */
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClickMoreOptions = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMoreOption = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const idMoreOption = open ? 'simple-popover-more-option' : undefined;

  const handleCallbackFontSizeChange = (fontSize: number) => {
    setVerseFontSize(fontSize);
  }

  const handleCallbackTextAlignChange = (textAlign: string) => {
    setVerseTextAlign(textAlign);
  }


  useEffect(() => {
    userSettings.activeSongId = song?.id || 0;
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
            <div className='flex gap-4'>
              <button>
                <BookmarkBorderRoundedIcon className="iconButtonll" />
              </button>
              <button onClick={handleClickMoreOptions}>
                <MoreVertRoundedIcon className="iconButtonll" />
              </button>
              <Popover 
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                id={idMoreOption}
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseMoreOption}
              >
                <SongPageMoreOption
                  currentFontSize={verseFontSize}
                  currentTextAlign={verseTextAlign}
                  callbackFontSizeChange={handleCallbackFontSizeChange}
                  callbackTextAlignChange={handleCallbackTextAlignChange} />
              </Popover>
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
