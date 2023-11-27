import { Chip, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SongBook } from '../models/SongBook';
import style from './SongBookCard.module.scss';

interface SongBookCardProps {
  songBook: SongBook;
}

export default function SongBookCard(props: SongBookCardProps) {
  const songBook = props.songBook;

  return (
    <Link to={`/songbook/${songBook.url}`}>
      <div className={style.SongBookCardCss}>
        <div className='flex flex-col'>
          <Typography variant="h6" className='songBookName'>
            {songBook.name}
          </Typography>
          <div className='flex gap-1 mt-2'>
            {songBook.languges.map((language) => (
              <Chip label={language} variant="outlined"
                size='small'
                sx={{ fontSize: '1rem' }} />
            ))}
          </div>
        </div>
        <Typography variant="h6" sx={{ color: 'var(--text-ui-active-color)' }}>
          {songBook.numberOfSongs}
        </Typography>
      </div>
    </Link>
  )
}
