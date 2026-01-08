import React from 'react';
import Button from './Button';
import './MainBanner.css';

const MainBanner: React.FC = () => {
  return (
    <section className="mainBanner" id="mainBanner">
      <div className="mainBanner__inner">
        <div className="mainBanner__inner__title">
          Концентрированный, дополняемый, удобный курс по продвинутому Nodejs
        </div>
        <div className="mainBanner__inner__describe">
          В этом курсе мы пройдемся по темам Nodejs в углубленном формате. Так же приятным бонусом будет дополняемость курса, то есть купив один раз вы будете получать со временем новый материал.
        </div>
        <div className="info__describe">
          Первые 50 человек получат одну бесплатную консультацию или собеседование
        </div>
        <div>
          <Button href="#plan" title="Подробнее" />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;


