import React from 'react';
import './Welcome.css';

const Welcome = ({ userName }) => {
  return (
      <div className="welcome-card">
        <h1 className="welcome-message">Welcome, {userName}!</h1>
        <p className="welcome-text">We are glad to see you here. Let's get started on your fitness journey!</p>
      </div>
  );
};

export default Welcome;
