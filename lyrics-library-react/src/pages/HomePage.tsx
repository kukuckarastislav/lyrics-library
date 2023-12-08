import { Typography } from '@mui/material';
import style from './HomePage.module.scss';
//import InstallPWA from '../components/InstallPWA';

export default function HomePage() {
  return (
    <div className={style.HomePageCss}>

      <div className='mt-20'>
        <Typography variant="h4"
          sx={{ color: 'var(--text-ui-active-color)', margin: '2rem' }}>
          Web aplikacija Lyrics Library je u test fazi, nije jos uvek u potpunosti gotova, i moze da sadrzi greske. Molimo vas da ne delite link do ove aplikacije sa drugima dok ne bude zvanicno objavljena.
        </Typography>
      </div>

      {
        /*
          <div className='p-8'>
            <InstallPWA />
          </div>
        */
      }
      
      {/*[...Array(100).keys()].map(i => (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia dicta, quibusdam pariatur laudantium, fuga dolores quasi quod accusantium, cum repudiandae deserunt. Sequi commodi illum eligendi aliquid odio delectus debitis. {i}</div>
      ))*/}
          
    </div>
  )
}
