import React from 'react';
import './AdvantageBlock.css';

interface AdvantageBlockProps {
  title: string;
  describe: string;
}

const AdvantageBlock: React.FC<AdvantageBlockProps> = ({ title, describe }) => {
  return (
    <div className="block">
      <div className="bock__title">{title}</div>
      <div className="bock__describe">{describe}</div>
    </div>
  );
};

export default AdvantageBlock;


