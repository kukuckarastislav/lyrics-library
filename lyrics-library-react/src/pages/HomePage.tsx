import style from './HomePage.module.scss';
import InstallPWA from '../components/InstallPWA';

export default function HomePage() {
  return (
    <div className={style.HomePageCss}>
      <div>HomePage cool</div>

      <div className='p-8'>
        <InstallPWA />
      </div>
      
      {/*[...Array(100).keys()].map(i => (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia dicta, quibusdam pariatur laudantium, fuga dolores quasi quod accusantium, cum repudiandae deserunt. Sequi commodi illum eligendi aliquid odio delectus debitis. {i}</div>
      ))*/}
          
    </div>
  )
}
