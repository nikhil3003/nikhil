import React from 'react';
import './Quote.css';

const Quote = ({ quote, author }) => {
  return (
    <div className="quote-container">
      <div className="quote-card">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
      </div>
    </div>
  );
};

export default Quote;
