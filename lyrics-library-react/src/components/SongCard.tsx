import { Link } from 'react-router-dom';
import { Song } from '../models/Song';
import style from './SongCard.module.scss';
import { Chip, Typography } from '@mui/material';

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

import library from '../libraryData';
import { useState } from 'react';
import userSettings from '../models/UserSettings';

interface SongCardProps {
  song: Song;
  songBookUrl?: string;
  showSoongBookName?: boolean;
}

export default function SongCard(props: SongCardProps) {
  const song = props.song;
  let songBookUrl = props.songBookUrl;

  if (!songBookUrl) {
    songBookUrl = song.songBookUrl;
  }

  const [previewText, setPreviewText] = useState(false);
  const [isSongFavorite, setIsSongFavorite] = useState(userSettings.IsSongInFavorites(song.id));

  const handleAddToFavorite = () => {
    userSettings.addSongToFavorites(song.id);
    setIsSongFavorite(true); 
  }

  const handleRemoveFromFavorite = () => {
    userSettings.removeSongFromFavorites(song.id);
    setIsSongFavorite(false);
  }

  return (
    
    <div className={style.SongCardCss}>
      <div className='songHeader'>
        <Link to={`/songbook/${songBookUrl}/song/${song.url}`} className='w-full '>
          <div className='flex flex-col'>
            {props.showSoongBookName && <div>{library.getSongBookNameByUrl(songBookUrl)}</div>}
            <Typography variant="h6" className='songBookName' >
              {song.number!=0 && <span className='songNumber'>{song.number}. </span>}{song.name}
            </Typography>
            {/* song.author && (
              <Typography variant="body1" >
                {song.author}
              </Typography>
            ) */}
            <div className='flex gap-1 mt-2'>
              <Chip label={song.lang} variant="outlined"
                  size='small'
                  sx={{ fontSize: '1rem', color: 'var(--text-ui-color)' }} />
            </div>
          </div>
        </Link>
        <div className='flex flex-col justify-between ml-4'>
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
          <div className='w-full' >
            {!previewText && <VisibilityRoundedIcon onClick={() => (setPreviewText(true))} sx={{ color: 'var(--button-ui-color)', fontSize: 26 }} className="iconButtonll" />}
            {previewText && <VisibilityOffRoundedIcon onClick={() => (setPreviewText(false))} sx={{ color: 'var(--button-ui-color)', fontSize: 26}} className="iconButtonll" />}
          </div>
        </div>
      </div>
      <div>
        {previewText &&
          <div className='mt-2'>{song.verses.map((slide, indexSlide) => (
            <div key={indexSlide} className='mt-1'>
              {slide.map((line, indexLine) => (
                <Typography sx={{fontSize: 16, textAlign: 'center'}} variant="body2" key={indexSlide+"_"+indexLine} className='textLine'>
                  {line}
                </Typography>
                ))}
              </div>
            ))}
          </div>}
      </div>
    </div>
  )
}
