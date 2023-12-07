import { Link, useParams } from 'react-router-dom';
import style from './SongPage.module.scss';

import library from '../libraryData';
import { SongBook } from '../models/SongBook';
import { Song } from '../models/Song';
import { useEffect, useState } from 'react';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

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
  const [repeatRefInVerses, setRepeatRefInVerses] = useState<boolean>(false);
  const [verses, setVerses] = useState<string[][]>(song?.verses || []);

  const [isSongFavorite, setIsSongFavorite] = useState(userSettings.IsSongInFavorites(song!.id));

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

  const getVersesWithRepeatedRefrens = () => {
    let refrenSlide: string[] | undefined = undefined;
    const newVerses: string[][] = [];
    for (let i = 0; i < song!.verses!.length; i++) {
      const slide = song?.verses[i];
      if (slide!.length > 0) {
        if (slide![0].toLowerCase().startsWith('ref')) {
          if (refrenSlide === undefined) {
            refrenSlide = slide!;
          }
          newVerses.push(refrenSlide);
        } else {
          newVerses.push(slide!);
        }
      }
    }
    
    return newVerses;
  }

  const handleCallbackRepeatRefInVersesChange = (newRepeatRefInVerses: boolean) => {
    setRepeatRefInVerses(newRepeatRefInVerses);
    if (newRepeatRefInVerses) {
      const newVerses: string[][] = getVersesWithRepeatedRefrens();
      setVerses(newVerses);
    } else {
      setVerses(song?.verses || []);
    }
  }


  const handleAddToFavorite = () => {
    userSettings.addSongToFavorites(song!.id);
    setIsSongFavorite(true); 
  }

  const handleRemoveFromFavorite = () => {
    userSettings.removeSongFromFavorites(song!.id);
    setIsSongFavorite(false);
  }


  useEffect(() => {
    userSettings.activeSongId = song?.id || 0;
    userSettings.addSongToHistory(song!.id);
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
              <div>
                {isSongFavorite ? 
                  <BookmarkRoundedIcon
                    className='pointerTransparent'
                    sx={{ fontSize: 26, color: 'var(--button-bookmark-ui-color)' }}
                    onClick={handleRemoveFromFavorite} />
                  :
                  <BookmarkBorderRoundedIcon className='pointerTransparent'
                    sx={{ fontSize: 26, color: 'var(--button-ui-color)' }} onClick={handleAddToFavorite} />
                }
              </div>
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
                  songId={song.id}
                  currentFontSize={verseFontSize}
                  currentTextAlign={verseTextAlign}
                  currentRepeatRefInVerses={repeatRefInVerses}
                  callbackRepeatRefInVersesChange={handleCallbackRepeatRefInVersesChange}
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
          {verses.map((slide, indexSlide) => (
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
