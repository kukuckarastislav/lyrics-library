import style from './MePage.module.scss';

import ThemeUtils from '../utils/themeUtils';

export default function MePage() {

  const theme = new ThemeUtils();

  return (
    <div className={style.MePageCss}>
      

      <button className='ebtn' onClick={() => theme.setTheme('light')}>Light</button>
      <button className='ebtn' onClick={() => theme.setTheme('dark')}>Dark</button>
      <br />
      <button className='ebtn' onClick={() => theme.setUiColor('blue')}>Blue</button>
      <button className='ebtn' onClick={() => theme.setUiColor('red')}>Red</button>
      <button className='ebtn' onClick={() => theme.setUiColor('green')}>Green</button>
      <button className='ebtn' onClick={() => theme.setUiColor('yellow')}>Yellow</button>



    </div>
  )
}
