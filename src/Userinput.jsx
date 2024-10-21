import React, { useState } from 'react';
import styles from './UserInput.module.css';  // Notice the 'styles' import

function UserInput({ onSubmit }) {
  const [goal, setGoal] = useState('');
  const [experience, setExperience] = useState('');
  const [preferences, setPreferences] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ goal, experience, preferences });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Fitness Goal:
        <select value={goal} onChange={(e) => setGoal(e.target.value)}>
          <option value="strength">Strength</option>
          <option value="cardio">Cardio</option>
          <option value="flexibility">Flexibility</option>
        </select>
      </label>

      <label className={styles.label}>
        Experience Level:
        <select value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </label>

      <div className={styles.checkboxGroup}>
        <label className={styles.label}>
          <input
            type="checkbox"
            value="weights"
            checked={preferences.includes('weights')}
            onChange={(e) => {
              const { value, checked } = e.target;
              setPreferences(checked
                ? [...preferences, value]
                : preferences.filter((pref) => pref !== value)
              );
            }}
          />
          Weights
        </label>

        <label className={styles.label}>
          <input
            type="checkbox"
            value="bodyweight"
            checked={preferences.includes('bodyweight')}
            onChange={(e) => {
              const { value, checked } = e.target;
              setPreferences(checked
                ? [...preferences, value]
                : preferences.filter((pref) => pref !== value)
              );
            }}
          />
          Bodyweight Exercises
        </label>

        <label className={styles.label}>
          <input
            type="checkbox"
            value="cardio"
            checked={preferences.includes('cardio')}
            onChange={(e) => {
              const { value, checked } = e.target;
              setPreferences(checked
                ? [...preferences, value]
                : preferences.filter((pref) => pref !== value)
              );
            }}
          />
          Cardio
        </label>
      </div>

      <button className={styles.button} type="submit">Submit</button>
    </form>
  );
}

export default UserInput;
