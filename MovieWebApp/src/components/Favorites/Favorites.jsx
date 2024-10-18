import React, { useEffect, useState } from 'react';
import MovieCard from '../Movie-card/MovieCard';
import './Favorites.css';

const Favorites = () => {
    const [favoriteMovies, setFavoriteMovies] = useState([]);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; // Kiểm tra trạng thái đăng nhập

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoriteMovies(favorites);
    }, []);

    return (
        <div className="favorites">
            <h2>Your Favorite Movies</h2>
            <div className="favorite-movies-list">
                {favoriteMovies.length > 0 ? (
                    favoriteMovies.map((movie, index) => (
                        <MovieCard 
                            key={index} 
                            item={movie} 
                            category="movie" 
                            isAuthenticated={isAuthenticated} // Truyền trạng thái đăng nhập
                        />
                    ))
                ) : (
                    <p>No favorite movies yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
