import React, { useState } from 'react';
import './PersonalizedDiet.css'; // Add CSS to style the form

const PersonalizedDiet = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: '',
    dietPreference: ''
  });

  const [dietPlan, setDietPlan] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example logic to generate a diet plan based on user input
    const { age, weight, height, activityLevel, goal, dietPreference } = formData;
    const recommendedDiet = generateDietPlan(age, weight, height, activityLevel, goal, dietPreference);
    setDietPlan(recommendedDiet);
  };

  const generateDietPlan = (age, weight, height, activityLevel, goal, dietPreference) => {
    // Add custom logic for diet suggestions
    return {
      breakfast: "Oatmeal with fruits",
      lunch: "Grilled chicken with quinoa",
      dinner: "Salad with tofu and nuts"
    };
  };

  return (
    <div className="personalized-diet-container">
      <h2>Personalized Diet Plan</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={formData.age} onChange={handleChange} required />
        </div>
        <div>
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={formData.weight} onChange={handleChange} required />
        </div>
        <div>
          <label>Height (cm):</label>
          <input type="number" name="height" value={formData.height} onChange={handleChange} required />
        </div>
        <div>
          <label>Activity Level:</label>
          <select name="activityLevel" value={formData.activityLevel} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </div>
        <div>
          <label>Goal:</label>
          <select name="goal" value={formData.goal} onChange={handleChange}>
            <option value="lose">Lose Weight</option>
            <option value="maintain">Maintain Weight</option>
            <option value="gain">Gain Weight</option>
          </select>
        </div>
        <div>
          <label>Dietary Preference:</label>
          <select name="dietPreference" value={formData.dietPreference} onChange={handleChange}>
            <option value="vegetarian">Vegetarian</option>
            <option value="non-vegetarian">Non-Vegetarian</option>
            <option value="vegan">Vegan</option>
          </select>
        </div>
        <button type="submit">Get Diet Plan</button>
      </form>

      {dietPlan && (
        <div className="diet-plan">
          <h3>Your Recommended Diet Plan:</h3>
          <p><strong>Breakfast:</strong> {dietPlan.breakfast}</p>
          <p><strong>Lunch:</strong> {dietPlan.lunch}</p>
          <p><strong>Dinner:</strong> {dietPlan.dinner}</p>
        </div>
      )}
    </div>
  );
};

export default PersonalizedDiet;
