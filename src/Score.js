import React from 'react';

const Score = ({ score }) => {
  return (
    <div className="score">
      <p>Date: {score.date} - Score: {score.score}</p>
    </div>
  );
};

export default Score;
