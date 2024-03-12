
import style from './App.module.scss';

import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import SearchPage from './pages/SearchPage';
import MePage from './pages/MePage';
import { HashRouter , Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';
import SongPage from './pages/SongPage';
import SongBookPage from './pages/SongBookPage';
import BackToSongButton from './components/BackToSongButton';

import ThemeUtils from './utils/themeUtils';
import SettingsPage from './pages/SettingsPage';
import HistoryPage from './pages/HistoryPage';

import { Analytics } from '@vercel/analytics/react';
import SongPagePresentation from './pages/SongPagePresentation';
import PresentationPage from './pages/PresentationPage';

function App() {

  new ThemeUtils().init();
  console.log('AAAAA', window.location.href); // TODO: make better solution
  
  return (
    <div className={style.AppCss}>
      <HashRouter>
        <Routes>
          <Route id='1' path="/" element={<HomePage />} />
          <Route id='2' path="/library" element={<LibraryPage />} />
          <Route id='3' path="/search" element={<SearchPage />} />
          <Route id='4' path="/me" element={<MePage />} />

          <Route id='5' path="/songbook/:songBookUrl" element={<SongBookPage />} />
          <Route id='6' path="/songbook/:songBookUrl/song/:songUrl" element={<SongPage />} />
          <Route id='10' path="/presentation/songbook/:songBookUrl/song/:songUrl" element={<SongPagePresentation />} />

          <Route id='7' path="/settings" element={<SettingsPage />} />
          <Route id='8' path="/favorite" element={<SongBookPage />} />
          <Route id='9' path="/history" element={<HistoryPage />} />

          <Route id='11' path="/presentation" element={<PresentationPage />} />
        </Routes>

        { !window.location.href.endsWith("presentation") && <>
        <div className='mt-[98px]'>
          <BottomNavigation />
        </div>
        <div>
          <BackToSongButton />
        </div>
        </>}

        <Analytics />

      </HashRouter>
    </div>
  )
}

export default App
