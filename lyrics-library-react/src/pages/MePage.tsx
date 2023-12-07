import { Link } from 'react-router-dom';
import style from './MePage.module.scss';

export default function MePage() {

  return (
    <div className={style.MePageCss}>
      

      <Link to='/settings' className=''>Settings</Link>

  
    </div>
  )
}
