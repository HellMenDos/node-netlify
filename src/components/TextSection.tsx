import React from 'react';
import './TextSection.css';

interface TextSectionProps {
  title: string;
  describe: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, describe }) => {
  return (
    <section className="text" id="text">
      <div className="text__inner">
        <div className="text__inner__blocks">
          <div className="text__inner__text">
            <div className="text__inner__title">{title}</div>
            <div className="text__inner__describe">{describe}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextSection;


