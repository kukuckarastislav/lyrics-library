import { Link } from 'react-router-dom'
import style from './BottomNavigation.module.scss'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useLocation } from 'react-router-dom';

function getCurrentPage(path: string) {
  const name = path.split('/')[1];
  if (name === '') return 1;
  if (name.startsWith('library')) return 2;
  if (name.startsWith('search')) return 3;
  if(name.startsWith('me')) return 4;
  
  return 0;
}

export default function BottomNavigation() {

  const location = useLocation();
  console.log(location.pathname);

  const pageId = getCurrentPage(location.pathname);

  return (
    <nav className={style.BottomNavigationCss}>
      <Link to="/" className="menuLink">
        <div className={'menuButton ' + (pageId == 1 ? 'menuButtonActive' : '') }>
          <HomeRoundedIcon sx={{fontSize: 34 }} />
          <div>Home</div>
        </div>
      </Link>
      <Link to="/library" className="menuLink">
        <div className={'menuButton ' + (pageId == 2 ? 'menuButtonActive' : '') }>
          <LibraryBooksRoundedIcon sx={{fontSize: 34 }} />
          <div>Library</div>
        </div>
      </Link>
      <Link to="/search" className="menuLink">
        <div className={'menuButton ' + (pageId == 3 ? 'menuButtonActive' : '') }>
          <SearchRoundedIcon sx={{fontSize: 34 }} />
          <div>Search</div>
        </div>
      </Link>
      <Link to="/me" className="menuLink">
        <div className={'menuButton ' + (pageId == 4 ? 'menuButtonActive' : '') }>
          <PersonRoundedIcon sx={{fontSize: 34 }} />
          <div>Me</div>
        </div>
      </Link>
    </nav>
  )
}
