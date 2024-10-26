import React, { useState, useEffect } from "react";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="favorite-page">
      <h1>Your Favorite Movies</h1>
      <div className="movie-grid">
        {favorites.length > 0 ? (
          favorites.map((movie, index) => (
            <div key={index} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <p>No favorite movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
