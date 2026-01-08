import React from 'react';
import Button from './Button';
import './Price.css';

const TELEGRAM_LINK = "https://t.me/HelloMeanOfficial";

const Price: React.FC = () => {
  return (
    <section className="price" id="price">
      <div className="price__inner">
        <div className="price__inner__title">Забронировать место на курсе</div>
        <div className="info__describe">
          Первые 50 человек получат одну бесплатную консультацию или собеседование
        </div>
        <div className="price__inner__variants">
          <div className="price__inner__block">
            <div className="price__amount">ПЕРВЫЕ 50 ЧЕЛОВЕК 6850₽ / 75$</div>
            <div className="price__amount_2">ПОСЛЕДУЮЩИЕ 8850₽ / 95$</div>
            <div className="price__text">Пишите мне для покупки @HelloMeanOfficiall</div>
            <Button href={TELEGRAM_LINK} title="Купить" black />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;


