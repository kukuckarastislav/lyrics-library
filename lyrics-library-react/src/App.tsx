
import style from './App.module.scss';

import HomePage from './pages/HomePage';
import LibraryPage from './pages/LibraryPage';
import SearchPage from './pages/SearchPage';
import MePage from './pages/MePage';

function App() {

  return (
    <div className={style.AppCss}>

      <HomePage />
      <LibraryPage />
      <SearchPage />
      <MePage />

    </div>
  )
}

export default App
