import React from "react";
import "./Body.css";

interface BodyProps {
  title: string;
  desc: string;
}

const Body: React.FC<BodyProps> = ({ title, desc }) => {
  return (
    <div className="body-container">
      <h1 className="font25 extraBold">{title}</h1>
      <p className="description">{desc}</p>
    </div>
  );
};

export default Body;
