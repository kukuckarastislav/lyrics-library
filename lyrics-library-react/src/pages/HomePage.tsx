import { Typography } from '@mui/material';
import style from './HomePage.module.scss';

import homeData from '../models/HomeData';
import library from '../libraryData';
import SongCard from '../components/SongCard';

export default function HomePage() {
  return (
    <div className={style.HomePageCss}>

      <div className='topHeader'>
        <Typography variant="h4" className='libraryLabel'>Home</Typography>
      </div>
      
      <div className='homeContainer'>

        <div>BIBLE VERSE</div>

        {
          homeData.songCollections.map((collection) => (
            <div key={collection.title}>
              <Typography variant="h5" sx={{color: 'var(--text-ui-active-color)'}} className='libraryLabel'>{collection.title}</Typography>
              <div className='songContainer'>
                {
                  collection.songs.map((song) => (
                    <SongCard 
                      key={song} 
                      song={library.getSongBySongId(song)!}
                    />
                  ))
                }
              </div>
            </div>
          ))
        }

      </div>
          
    </div>
  )
}
