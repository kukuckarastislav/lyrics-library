import { Link } from 'react-router-dom';
import { Song } from '../models/Song';
import style from './SongCard.module.scss';
import { Chip, Typography } from '@mui/material';

import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import library from '../libraryData';

interface SongCardProps {
  song: Song;
  songBookUrl: string;
  showSoongBookName?: boolean;
}

export default function SongCard(props: SongCardProps) {
  const song = props.song;
  const songBookUrl = props.songBookUrl;

  return (
    <Link to={`/songbook/${songBookUrl}/song/${song.url}`}>
      <div className={style.SongCardCss}>
        <div className='flex flex-col'>
          {props.showSoongBookName && <div>{library.getSongBookNameByUrl(songBookUrl)}</div>}
          <Typography variant="h6" className='songBookName'>
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
        <div>
          {//Math.random() > 0.7 &&
            <BookmarkRoundedIcon
              sx={{ fontSize: 24, color: 'var(--button-ui-active-color)' }} />
          }
        </div>
      </div>
    </Link>
  )
}
