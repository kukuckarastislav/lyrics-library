import { Link } from 'react-router-dom';
import { Song } from '../models/Song';
import style from './SongCard.module.scss';
import { Chip, Typography } from '@mui/material';

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

import library from '../libraryData';
import { useState } from 'react';

interface SongCardProps {
  song: Song;
  songBookUrl: string;
  showSoongBookName?: boolean;
}

export default function SongCard(props: SongCardProps) {
  const song = props.song;
  const songBookUrl = props.songBookUrl;

  const [previewText, setPreviewText] = useState(false);

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
                  sx={{ fontSize: '1rem' }} />
            </div>
          </div>
        </Link>
        <div className='flex flex-col justify-between ml-4'>
          <div>
            {//Math.random() > 0.7 &&
              <BookmarkRoundedIcon
              sx={{ fontSize: 26, color: 'var(--button-ui-active-color)' }} />
            }
          </div>
          <div className='w-full' >
            {!previewText && <VisibilityRoundedIcon onClick={() => (setPreviewText(true))} sx={{ color: 'gray', fontSize: 26 }} className="iconButtonll" />}
            {previewText && <VisibilityOffRoundedIcon onClick={() => (setPreviewText(false))} sx={{ color: 'gray', fontSize: 26}} className="iconButtonll" />}
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
