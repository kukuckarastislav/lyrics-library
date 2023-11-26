
import style from './App.module.scss';

import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import SearchPage from './pages/SearchPage';
import MePage from './pages/MePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BottomNavigation from './components/BottomNavigation';

function App() {

  return (
    <div className={style.AppCss}>
      <BrowserRouter>
        <Routes>
          <Route id='1' path="/" element={<HomePage />} />
          <Route id='2' path="/library" element={<LibraryPage />} />
          <Route id='3' path="/search" element={<SearchPage />} />
          <Route id='4' path="/me" element={<MePage />} />
        </Routes>
        <div className='mt-[76px] md:mt-[52px]'>
          <BottomNavigation />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
