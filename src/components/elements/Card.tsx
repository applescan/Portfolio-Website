import React from "react";
import './Card.css';

interface CardProps {
  title: string;
  text: string;
  list: string[];
}

const Card: React.FC<CardProps> = ({ title, text, list }) => {
  return (
    <div className="card-wrapper whiteBg radius8">
      <div className="card-content">
        <h4 className="font20 bold">{title}</h4>
        <p className="font16 semiBold">{text}</p>
      </div>
      <div className="offers-list">
        {list.map((item, index) => (
          <div className="offer-item flex-null-center" key={index}>
            <div className="checkmark-container">
              <span className="emoji-checkmark">✅</span>
            </div>
            <p className="font15 regular">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
