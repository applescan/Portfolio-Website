import React from 'react';
import './Title.css';

interface TitleProps {
  title: string;
  subtitle: string;
  descriptions: string[];
  skills: string;
  year: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle, descriptions, skills, year }) => {
  return (
    <div className="title-container">
      <h1 className="font30 bottom-spacing extraBold">{title}</h1>
      <h2 className="font20 bottom-spacing semiBold">{subtitle}</h2>

      {descriptions.map((desc, index) => (
        <p className="bottom-spacing" key={index}>{desc}</p>
      ))}

      <div className="title-wrapper">
        <div className="left-side">
          <h4>Expertise</h4>
          <p>{skills}</p>
        </div>
        <div className="right-side">
          <h4>Year</h4>
          <p>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
