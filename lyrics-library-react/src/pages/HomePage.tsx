import { Typography } from '@mui/material';
import style from './HomePage.module.scss';

import homeData from '../models/HomeData';
import library from '../libraryData';
import SongCard from '../components/SongCard';
import React from 'react';
import GradientUtils from '../utils/GradientUtils';
import InstallPWA from '../components/InstallPWA';

export default function HomePage() {

  const [bibleVerse, setBibleVerse] = React.useState(homeData.getBibleVerseForToday());
  const bibleVerseContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (bibleVerseContainerRef.current) {
      bibleVerseContainerRef.current.style.backgroundImage
        = GradientUtils.getGradientForToday('');
    }
  }, []);

  const showRandomBibleVerse = () => {
    console.log('showRandomBibleVerse');
    const randomVerse = homeData.getRandomBibleVerse();
    setBibleVerse(randomVerse);
    if (bibleVerseContainerRef.current) {
      bibleVerseContainerRef.current.style.backgroundImage
        = GradientUtils.getRandomGradient();
    }
  }

  return (
    <div className={style.HomePageCss}>

      <InstallPWA showButton={false} />

      <div className='topHeader'>
        <Typography variant="h4" className='libraryLabel'>Home</Typography>
      </div>
      
      <div className='homeContainer'>
        <div ref={bibleVerseContainerRef} className='bibleVerseContainer'
          onClick={showRandomBibleVerse}>
          <Typography variant="h6"
            sx={{ color: 'white', textAlign: 'center', fontSize: {
              lg: '2rem',
              md: '1.8rem',
              sm: '1.5rem',
              xs: '1.2rem'
            } }}>
            {bibleVerse.text}
          </Typography>
          <Typography variant="subtitle1"
            sx={{
              color: 'white', textAlign: 'center',
              }}>
            {bibleVerse.bibleLocation}
          </Typography>
        </div>

        <div>
          {
            homeData.getSongCollectionsForHome().map((collection) => (
              <div key={collection.title}>
                <Typography variant="h5" sx={{color: 'var(--text-ui-active-color)'}} className='libraryLabel'>{collection.title}</Typography>
                <div className='songContainer'>
                  {
                    collection.songs.map((song) => (
                      <SongCard 
                        key={song} 
                        showSoongBookName
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
          
    </div>
  )
}
