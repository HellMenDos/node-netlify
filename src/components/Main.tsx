import React from 'react';
import MainBanner from './MainBanner';
import About from './About';
import Advantages from './Advantages';
import TextSection from './TextSection';
import Plan from './Plan';
import Price from './Price';

const Main: React.FC = () => {
  return (
    <main>
      <MainBanner />
      <About />
      <Advantages />
      <TextSection
        title="Для кого этот курс ?"
        describe="Для Трейни, Junior, Middle разработчиков которые хотят повысить свой уровень владения Nodejs. Тут вы рассмотрите продвинутые темы и полный спектр возможностей платформы на продвинутом уровне"
      />
      <TextSection
        title="Как проходит курс ?"
        describe="После покупки курса вы будете добавлены в бота навигатора и закрытый telegram канал со всем материалом. Через бот навигатор вы можете удобно и структурировано получать информацию, проходить тесты, запрашивать собеседования, а так же получить свой уникальный сертификат о прохождении курса"
      />
      <Plan />
      <Price />
    </main>
  );
};

export default Main;


