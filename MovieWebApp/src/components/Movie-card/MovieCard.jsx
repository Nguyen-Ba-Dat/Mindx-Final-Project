import React, { useState, useEffect } from 'react';
import './MovieCard.css';
import Button from '../Button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';

const MovieCard = props => {
    const item = props.item;
    const [isFavorite, setIsFavorite] = useState(false);
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    const isAuthenticated = props.isAuthenticated; 

    useEffect(() => {
        const favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || [];
        setIsFavorite(favoriteMovies.some(fav => fav.id === item.id));
    }, [item.id]);

    const toggleFavorite = () => {
        let favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || [];

        if (isFavorite) {
            favoriteMovies = favoriteMovies.filter(fav => fav.id !== item.id);
        } else {
            favoriteMovies.push(item);
        }

        localStorage.setItem('favorites', JSON.stringify(favoriteMovies));
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="movie-card-container">
            <Link to={link}>
                <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
                    <Button>
                        <i className="bx bx-play"></i>
                    </Button>
                </div>
                <h3>{item.title || item.name}</h3>
            </Link>
            {isAuthenticated && (
                <div className="favorite-icon" onClick={toggleFavorite}>
                    <i className={`bx ${isFavorite ? 'bxs-star' : 'bx-star'}`}></i>
                </div>
            )}
        </div>
    );
}

export default MovieCard;
