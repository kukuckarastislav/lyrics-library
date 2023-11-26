import { Link } from 'react-router-dom';
import style from './LibraryPage.module.scss';

export default function LibraryPage() {
  return (
    <div className={style.LibraryPageCss}>
      <div>LibraryPage</div>

      <Link to="/songbook/spevnik/song/ci-chces-vazby-hriechu-byt-zbaveny">
        Či chceš väzby hriechu byť zbavený?
      </Link>
      <Link to="/songbook/spevnik/song/ja-neviem-preco-milosti-zdroj-boh-mi-otvoril">
        Ja neviem, prečo milosti zdroj Boh mi otvoril
      </Link>

    </div>
  )
}
