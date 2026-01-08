import React from 'react';
import './Button.css';

interface ButtonProps {
  title: string;
  black?: boolean;
  onClick?: () => void;
  href?: string;
  active?: boolean;
  error?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, black, onClick, href, active, error }) => {
  if (href && !href.includes("http")) {
    return (
      <a href={href} className={`${black ? "button-black" : "button-light"} ${active ? "active" : ""}`}>
        {title}
      </a>
    );
  }

  return (
    <button
      className={`${black ? "button-black" : "button-light"} ${active ? "active" : ""} ${error ? "error" : ""}`}
      onClick={() => {
        onClick && onClick();
        href && (document.location.href = href);
      }}
    >
      {title}
    </button>
  );
};

export default Button;


