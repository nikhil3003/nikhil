import React from 'react';
import './Workoutsuggestions.module.css'; // Import CSS Module

function Workoutsuggestions({ suggestions }) {
  return (
    <div className="workout-suggestions-container">
      <h2 className="workout-suggestions-title">Workout Recommendations</h2>
      {suggestions.length > 0 ? (
        <ul className="workout-list">
          {suggestions.map((workout, index) => (
            <li key={index} className="workout-item">
              <h3 className="workout-name">{workout.name}</h3>
              <p className="workout-description">{workout.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-suggestions">No workout suggestions available. Please adjust your inputs.</p>
      )}
    </div>
  );
}

export default Workoutsuggestions;
