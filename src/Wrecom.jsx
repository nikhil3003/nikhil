import React, { useState } from 'react';
import './Wrecom.css';

const initialWorkouts = [
  { name: "Full-Body Strength", type: "Strength", description: "A complete strength workout for all major muscle groups.", duration: "45 minutes" },
  { name: "HIIT Cardio", type: "Cardio", description: "High-Intensity Interval Training for an intense fat-burning workout.", duration: "30 minutes" },
  { name: "Yoga for Flexibility", type: "Flexibility", description: "A calming yoga flow designed to improve flexibility.", duration: "60 minutes" },
];

const WorkoutRecommendations = () => {
  const [goal, setGoal] = useState('');
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const handleGoalChange = (e) => {
    setGoal(e.target.value);
  };

  const handleRecommendation = () => {
    // You can implement logic to filter workouts based on goals later
    alert(`Fetching workout recommendations for: ${goal}`);
  };

  return (
    <div className="workout-recommendations-container">
      <h2>Workout Recommendations</h2>

      {/* User Preferences Input */}
      <div className="preferences-section">
        <h3>Personalize Your Workout Plan</h3>
        <input
          type="text"
          placeholder="Enter your fitness goal (e.g., strength, cardio, flexibility)"
          value={goal}
          onChange={handleGoalChange}
          className="goal-input"
        />
        <button onClick={handleRecommendation} className="recommendation-button">
          Get Workout Recommendations
        </button>
      </div>

      {/* Recommended Workouts Section */}
      <div className="recommended-workouts-section">
        <h3>Popular Workouts</h3>
        <div className="workouts-grid">
          {workouts.map((workout, index) => (
            <div key={index} className="workout-card">
              <h4>{workout.name}</h4>
              <p><strong>Type:</strong> {workout.type}</p>
              <p><strong>Description:</strong> {workout.description}</p>
              <p><strong>Duration:</strong> {workout.duration}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkoutRecommendations;
