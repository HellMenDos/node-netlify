import React from 'react';
import Button from './Button';
import aboutImage from '../assets/9ccdf6affc7ec8bbe371.png';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__inner__h1">Обо мне</div>
        <div className="about__inner__blocks">
          <div className="about__inner__text">
            <div className="about__inner__title">
              Меня зовут Кирилл и я Senior FullStack разработчик
            </div>
            <div className="about__inner__describe">
              Большой опыт за плечами на разных позициях в том числе и руководящих. Провел порядка 100 собеседований на различные позиции.
              <br />
              Создатель каналов: ДЖАВАСКРИПТИЗЕРЫ, ПИТОНИСТЫ, ПОРТАЛА A-LIT.RU, БОТА ALEX - твой IT Собеседник
            </div>
            <Button href="#plan" title="Подробнее о курсе" black />
          </div>
          <div className="about__inner__image">
            <img src={aboutImage} alt="Кирилл" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


