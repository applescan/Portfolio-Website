import React from 'react';
import './List.css';

interface ListProps {
  title: string;
  desc: string;
  items: string[];
}

const List: React.FC<ListProps> = ({ title, desc, items }) => {
  return (
    <div className="list-container">
      <h1 className="font25 extraBold">{title}</h1>
      <h4 className="description">{desc}</h4>
      <ol className="list-items">
        {items.map((item, index) => (
          <li key={index}><p>{item}</p></li>
        ))}
      </ol>
    </div>
  );
};

export default List;
