import style from './LibraryPage.module.scss';

import library from '../libraryData.ts';
import { Typography } from '@mui/material';
import SongBookCard from '../components/SongBookCard.tsx';

import userSettings from '../models/UserSettings.ts';

export default function LibraryPage() {

  return (
    <section className={style.LibraryPageCss}>
      <div className='topHeader'>
        <Typography variant="h4" className='libraryLabel'>Library</Typography>
        <Typography variant="body1" className='mb-4'>
          {library.numberOfSongBooks} Songbooks
        </Typography>
      </div>
      

      <div className='soundBooksContainer'>
        {library.songBooks.map((songBook) => {
          if (userSettings.isSongBookVisible(songBook.languges)){
            return (<SongBookCard key={songBook.url} songBook={songBook} />)            
          }
        })}
      </div>

    </section>
  )
}
