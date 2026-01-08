import React from 'react';
import './Header.css';

const TELEGRAM_LINK = "https://t.me/HelloMeanOfficial";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header__inner">
        <div className="logo">
          <div>
            <span>ДЖАВАСКРИПТЕЗЕРЫ</span> ПРОДВИНУТЫЙ NODEJS
          </div>
        </div>
        <div className="navigate">
          <div>
            <a href="#plan">Программа </a>
          </div>
          <div>
            <a href="#about">Обо мне</a>
          </div>
          <div>
            <a href="#advantages">Преимущества</a>
          </div>
          <div>
            <a href={TELEGRAM_LINK}>Связаться</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


