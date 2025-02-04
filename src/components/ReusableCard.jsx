// src/components/ReusableCard.js
import React from 'react';

function ReusableCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ReusableCard;
