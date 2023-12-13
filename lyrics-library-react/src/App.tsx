
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

function App() {

  new ThemeUtils().init();

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

          <Route id='7' path="/settings" element={<SettingsPage />} />
          <Route id='8' path="/favorite" element={<SongBookPage />} />
          <Route id='9' path="/history" element={<HistoryPage />} />
        </Routes>
        <div className='mt-[98px]'>
          <BottomNavigation />
        </div>
        <div>
          <BackToSongButton />
        </div>

        <Analytics />

      </HashRouter>
    </div>
  )
}

export default App
