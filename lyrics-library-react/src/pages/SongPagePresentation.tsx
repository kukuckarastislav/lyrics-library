import { Link, useParams } from 'react-router-dom';
import style from './SongPagePresentation.module.scss';

import library from '../libraryData';
import { SongBook } from '../models/SongBook';
import { Song } from '../models/Song';
import { useEffect, useState } from 'react';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

import { Button, FormControl, InputLabel, MenuItem, Popover, Select, SelectChangeEvent, Typography } from '@mui/material';
import React from 'react';
import SongPageMoreOption from '../components/SongPageMoreOption';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import CloseIcon from '@mui/icons-material/Close';

import userSettings from '../models/UserSettings';

export default function SongPagePresentation() {

  const { songBookUrl, songUrl } = useParams();
  const songBook: SongBook | undefined = library.getSongBookByUrl(songBookUrl!);
  const song: Song | undefined = songBook?.getSongByUrl(songUrl!);

  const [, setHeaderHeight] = useState(0);
  const [verseFontSize, setVerseFontSize] = useState(userSettings.fontSize);
  const [verseTextAlign, setVerseTextAlign] = useState(userSettings.textAlign);
  const [repeatRefInVerses, setRepeatRefInVerses] = useState<boolean>(false);
  const [verses, setVerses] = useState<string[][]>(song?.verses || []);

  const [isSongFavorite, setIsSongFavorite] = useState(userSettings.IsSongInFavorites(song!.id));

  const [externalTab, setExternalTab] = React.useState<Window | null>(null);
  const [currentSlideId, setCurrentSlideId] = React.useState(-1);

  const [gridColumns, setGridColumns] = useState(userSettings.presentationModeGridColumns);

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
    const sectionElement = document.getElementById('songPage_container');
    if (sectionElement) {
      sectionElement.style.marginTop = newHeaderHeight + 'px';
    }

    // Recalculate and update on window resize
    const handleResize = () => {
      setHeaderHeight(headerElement!.offsetHeight);
      sectionElement!.style.marginTop = headerElement!.offsetHeight + 'px';
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      console.log(event.key);
      if (externalTab) {
        if (event.key === 'ArrowRight' || event.key === 'Enter' || event.key === 'ArrowDown') {
          const nextSlideId = currentSlideId + 1;
          if (nextSlideId <= verses.length) {
            showSlide(nextSlideId);
          }
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp' || event.key === 'Backspace' || event.key === ' ') {
          const prevSlideId = currentSlideId - 1;
          if (prevSlideId >= -1) {
            showSlide(prevSlideId);
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyPress);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSlideId]);

  const openExternalTab = () => {
    const externalTab = window.open('#/presentation', '_blank');
    if (externalTab) {
      setExternalTab(externalTab);
      externalTab.onload = () => {
        externalTab.postMessage([song?.number, song?.name, songBook?.name ], '*');
      };
    } else {
      alert('Please allow popups for this website');
    }
  }

  const showSlide = (indexSlide: number) => {
    // scroll main window to selected slide

    if (externalTab) {
      console.log(indexSlide)
      if (indexSlide === -1){
        externalTab.postMessage([song?.number, song?.name, songBook?.name ], '*');
        setCurrentSlideId(indexSlide);
      }else if (indexSlide >= 0 && indexSlide < verses.length){
        externalTab.postMessage(song?.verses[indexSlide], '*');
        setCurrentSlideId(indexSlide);
      }else if (indexSlide === verses.length){
        externalTab.postMessage([""], '*');
        setCurrentSlideId(indexSlide);
      }
    }
  }

  const handleChangeGridColumns = (event: any) => {
    const value = event.target.value as number;
    setGridColumns(value);
    userSettings.setPresentationModeGridColumns(value);
  };


  return (
    <div className={style.SongPagePresentationCss}>
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
                <Button variant="outlined" color='primary' size='small' sx={{textTransform: 'none'}} startIcon={<ConnectedTvIcon/>} onClick={openExternalTab}>
                  Launch
                </Button>
              </div>
              <div>
                <Link to={`/songbook/${songBook?.url}/song/${song.url}`} className="iconButtonll">
                  <Button variant="outlined" color='error' size='small' sx={{textTransform: 'none'}} startIcon={<CloseIcon/>}>
                    Close
                  </Button>
                </Link>
              </div>
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
          
          <div onClick={() => showSlide(-1)}>
            <Typography variant="h5" className='songName'>
              {song.number != 0 && (<span>{song.number}. </span>)}{song.name}
            </Typography>
          </div>
          {song.author &&
            <Typography variant="body2">{song.author}</Typography>
          }
        
        </div>
        <div id="songPage_container"></div>
        
        
        {/* 
        <div className='mx-8 my-4 flex justify-center gap-40'>
          <div className='currentSlideContainer'>
            
          </div>
          <div className=''>
            
          </div>
        </div>
        */}


        <div className='m-4'>
          <FormControl>
            <InputLabel id="demo-simple-select-label"
              sx={{color: 'var(--text-ui-color)'}}
            >Grid columns</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gridColumns}
              label="Grid columns"
              onChange={(event: SelectChangeEvent<number>) => handleChangeGridColumns(event)}
              size='small'
              sx={{
                width: '8rem',
                color: 'var(--text-ui-color)'
              }}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2 </MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={6}>6</MenuItem>
              
            </Select>
          </FormControl>
        </div>
        <div className='versesContainer' style={{gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`}}>
          {verses.map((slide, indexSlide) => (
            <div 
              key={indexSlide} 
              className={'slideContainer ' + (indexSlide === currentSlideId ? 'activeSlide' : '')} 
              onClick={() => showSlide(indexSlide)}
            >
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
