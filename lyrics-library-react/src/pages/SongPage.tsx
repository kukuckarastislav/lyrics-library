import { useParams } from 'react-router-dom';
import style from './SongPage.module.scss';

export default function SongPage() {

  const { songBookUrl, songUrl } = useParams();

  return (
    <div className={style.SongPageCss}>
      <div>Song Page</div>
      <div>{songBookUrl}</div>
      <div>{songUrl}</div>
    </div>
  )
}
