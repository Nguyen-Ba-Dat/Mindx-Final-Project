import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MovieList.css';
import { SwiperSlide, Swiper } from 'swiper/react';
import tmdbApi, { category } from '../../api/tmdbApi';
import MovieCard from '../Movie-card/MovieCard';

const MovieList = props => {
    const [items, setItems] = useState([]);
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'; 

    /**
     * Lấy danh sách phim
     */
    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch (props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, { params });
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, { params });
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        };
        getList();
    }, []);

    return (
        <div className="movie-list">
            <Swiper 
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}>
                {
                    items.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item} category={props.category} isAuthenticated={isAuthenticated} /> 
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

MovieList.propTypes = {
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default MovieList;
