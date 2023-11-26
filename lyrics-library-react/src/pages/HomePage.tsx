import style from './HomePage.module.scss';

export default function HomePage() {
  return (
    <div className={style.HomePageCss}>
      HomePage
      
      {[...Array(100).keys()].map(i => (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia dicta, quibusdam pariatur laudantium, fuga dolores quasi quod accusantium, cum repudiandae deserunt. Sequi commodi illum eligendi aliquid odio delectus debitis. {i}</div>
      ))}
          
    </div>
  )
}
