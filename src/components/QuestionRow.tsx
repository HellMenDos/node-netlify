import React, { useState } from 'react';
import './QuestionRow.css';

interface QuestionRowProps {
  title: string;
  describe: string;
}

const QuestionRow: React.FC<QuestionRowProps> = ({ title, describe }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question__row">
      <div 
        className="question__row__title" 
        onClick={() => setIsOpen(!isOpen)}
        data-open={isOpen}
      >
        {title}
      </div>
      <div className="question__row__describe" style={{ display: isOpen ? "block" : "none" }}>
        {describe}
      </div>
    </div>
  );
};

export default QuestionRow;

