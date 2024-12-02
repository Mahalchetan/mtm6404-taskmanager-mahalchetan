import React from 'react';
import './card.css';  // Assuming each card has specific CSS for layout

function Card({ title, content }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

export default Card;
