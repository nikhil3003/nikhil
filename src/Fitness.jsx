import React from 'react';
import './Fitness.css';

const fitnessData = [
  { title: "Workout Planning", content: "make your workout preplanned and fully functional through advanced recomendations and suggitions" },
  { title: "Diet Planning", content: "planning a diet is the most wanted activity in current lives, We make it for you that." },
  { title: "Movies Recomendation", content: "In this fast moving world we find some time to get enterntined , we make you to choose perfect one for you." },
];

const Fitness = () => {
  return (
    <div className="fitness-container">
      {fitnessData.map((item, index) => (
        <div key={index} className="fitness-card">
          <h3 className="fitness-title">{item.title}</h3>
          <p className="fitness-content">{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Fitness;