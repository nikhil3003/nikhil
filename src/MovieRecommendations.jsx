import React, { useState } from 'react';
import './Mrecom.css'

const initialMovies = [
  { title: "Salaar: Part 1 - Ceasefire", genre: "Action,Thriller", description: "a 2023 action, crime, and drama film about a kingdom in conflict and the bond between two friends who become enemies", rating: 8.5, image: "salaar.png" },
  { title: "Kalki 2898 AD", genre: "DramaScience fiction,Adventure", description: "Kalki 2898 AD is a 2024 Indian action-adventure film that blends Indian mythology with science fiction.", rating: 9.2, image: "kalki.png" },
  { title: "3", genre: "Love,Romance,Thriller", description: "Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.", rating: 8.0, image: "3.jpg" },
];


const MovieRecommendations = () => {
  const [preferences, setPreferences] = useState('');
  const [movies, setMovies] = useState(initialMovies);

  const handlePreferencesChange = (e) => {
    setPreferences(e.target.value);
  };

  const handleRecommendation = () => {
    alert(`Fetching recommendations for: ${preferences}`);
  };

  return (
    <div className="movie-recommendations-container">
      <h2>Movie Recommendations</h2>

      {/* User Preferences Input */}
      <div className="preferences-section">
        <h3>Personalize Your Recommendations</h3>
        <input
          type="text"
          placeholder="Enter your favorite genres, actors, or moods"
          value={preferences}
          onChange={handlePreferencesChange}
          className="preferences-input"
        />
        <button onClick={handleRecommendation} className="recommendation-button">
          Get Recommendations
        </button>
      </div>

      {/* Trending Movies Section */}
      <div className="trending-movies-section">
        <h3>Trending Movies</h3>
        <div className="movies-grid">
  {movies.map((movie, index) => (
    <div key={index} className="movie-card">
      <div className="movie-header">
        <img src={movie.image} alt={movie.title} className="movie-image" />
        <h4>{movie.title}</h4>
      </div>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Description:</strong> {movie.description}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
    </div>
  ))}
</div>

      </div>

      {/* Watchlist Feature can be added here later */}
    </div>
  );
};

export default MovieRecommendations;
